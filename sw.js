import { load, save, advance, stats, fmt, CLASSES, normalize, backup, driveSync, driveWrite, driveStatus, driveAuthLocal, setLang, t } from './game.js';
// 크롬(chrome.*)·파이어폭스(browser.*) 공용: promise 기반 확장 API
const chrome = globalThis.browser ?? globalThis.chrome;

const ALARM = 'deskmate.tick';
// ---- 진단 기록 (설정 > 진단 기록에서 확인)
const SW_T0 = Date.now();
let swq = [], swWriting = false;
async function swFlushLog() {
  if (swWriting || !swq.length) return; swWriting = true;
  try { const o = await chrome.storage.local.get('dm.diag.sw'); await chrome.storage.local.set({ 'dm.diag.sw': (o['dm.diag.sw'] || []).concat(swq.splice(0)).slice(-60) }); }
  catch (e) {} finally { swWriting = false; if (swq.length) swFlushLog(); }
}
function swLog(m) { swq.push({ at: Date.now(), ms: Date.now() - SW_T0, ctx: 'sw', m: String(m).slice(0, 300) }); swFlushLog(); }
self.addEventListener('error', e => swLog('error ' + (e.message || e)));
self.addEventListener('unhandledrejection', e => swLog('rejection ' + ((e.reason && e.reason.message) || e.reason)));
swLog('sw start v' + chrome.runtime.getManifest().version);
async function boot() {
  chrome.alarms.create(ALARM, { periodInMinutes: 1 });
  await drawIcon();
  await tick();
}
chrome.runtime.onInstalled.addListener(boot);
chrome.runtime.onStartup.addListener(boot);
chrome.alarms.onAlarm.addListener(a => { if (a.name === ALARM) tick(); });
chrome.runtime.onMessage.addListener((msg, _s, reply) => {
  // 구글 로그인: 팝업이 닫혀도 여기서 끝까지 진행되고, 동시에 여러 창이 열리지 않게 한 곳에서만 처리
  if (msg?.type === 'drive-auth') {
    driveAuthLocal(!!msg.interactive)
      .then(token => { swLog('drive auth ok' + (msg.interactive ? ' (login)' : '')); reply({ ok: true, token }); })
      .catch(e => { swLog('drive auth fail ' + (e && e.message || e)); reply({ ok: false, err: String((e && e.message) || e) }); });
    return true;
  }
  if (msg?.type === 'refresh') { tick().then(() => reply({ ok: true })); return true; }
  // 팝업이 닫힐 때 넘겨준 최신 상태를 확실히 저장 + 동기화
  if (msg?.type === 'flush' && msg.save) {
    const f0 = Date.now(); swLog('flush recv');
    const s = normalize(msg.save);
    save(s, 'force')
      .then(() => badge(s))
      .then(async () => { const d = await driveStatus(); if (d.linked) { try { await driveWrite(s); } catch (e) {} } })
      .then(() => { swLog('flush done ' + (Date.now() - f0) + 'ms'); reply({ ok: true }); })
      .catch(e => { swLog('flush fail ' + (e && e.message || e)); reply({ ok: false }); });
    return true;
  }
});

let busy = false;
async function tick() {
  if (busy) return;
  busy = true;
  const k0 = Date.now();
  try {
    let s = await load();                // 로컬/동기화 중 최신 쪽
    // 구글 드라이브가 연결돼 있으면 더 최신 세이브(다른 기기)를 먼저 확인
    const dr = await driveSync(s, { push: false });
    if (dr.action === 'pull') { await backup(s, 'before:drive'); s = dr.save; }
    advance(s);
    const now = Date.now();
    if (!s.lastBackupAt || now - s.lastBackupAt > 30 * 60 * 1000) { s.lastBackupAt = now; await backup(s, 'auto'); }
    await save(s, 'force');
    await driveSync(s, { push: true });
    await badge(s);
    if (Date.now() - k0 > 1500) swLog('tick slow ' + (Date.now() - k0) + 'ms');
  } catch (e) { swLog('tick fail ' + (e && e.message || e)); throw e; } finally { busy = false; }
}
async function badge(s) {
  if (!s.cls) {
    await chrome.action.setBadgeText({ text: 'NEW' });
    await chrome.action.setBadgeBackgroundColor({ color: '#7a5bd8' });
    return;
  }
  await chrome.action.setBadgeText({ text: 'B' + s.floor });
  await chrome.action.setBadgeBackgroundColor({ color: s.boss ? '#a0202e' : '#1d1430' });
  const st = stats(s);
  await chrome.action.setTitle({
    title: (setLang(s.lang || 'en'), `Deskgeon · ${CLASSES[s.cls].name}\n` + t('ui.sw', { f: s.floor, l: s.level, g: fmt(s.gold), d: fmt(st.dps), s: s.stones }) + (s.sp ? t('ui.sw.sp', { n: s.sp }) : '')),
  });
}

async function drawIcon() {
  try {
    const imageData = {};
    for (const size of [16, 32, 48, 128]) {
      const c = new OffscreenCanvas(size, size);
      const x = c.getContext('2d');
      const p = size / 16;
      const px = (cx, cy, w, h, col) => { x.fillStyle = col; x.fillRect(cx * p, cy * p, (w || 1) * p, (h || 1) * p); };
      const g = x.createLinearGradient(0, 0, size, size);
      g.addColorStop(0, '#2b1f52'); g.addColorStop(1, '#10203a');
      x.fillStyle = g; x.fillRect(0, 0, size, size);
      px(7, 1, 2, 8, '#dfe6f5'); px(7, 1, 1, 8, '#ffffff'); px(5, 9, 6, 1, '#c8a33c');
      px(7, 10, 2, 3, '#7a4d2a'); px(6, 13, 4, 1, '#c8a33c'); px(3, 3, 1, 1, '#ffd98a'); px(12, 5, 1, 1, '#8fe6ff');
      imageData[size] = x.getImageData(0, 0, size, size);
    }
    await chrome.action.setIcon({ imageData });
  } catch (e) { /* noop */ }
}
drawIcon();
tick();
