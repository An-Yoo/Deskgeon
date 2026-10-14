// 미션 프로모션: 모험 탭에서 출석 체크를 서로 다른 3일 하면 토스 포인트 지급 (1인 1회)
// 정책상 필수 안내: 지급 시점·조건·제한, "사전 고지 없이 중단될 수 있어요"
import { Promotion, Storage } from '@apps-in-toss/web-framework';
import { PROMO } from './promo.config.js';

const log = (m) => { try { (window.__dmLog || (() => {}))('promo ' + m); } catch (e) {} };
const G = () => window.__dgGame;
const pre = () => (window.__dgPrefix || '') + 'dg.promo.' + PROMO.code + '.';
const KEY = { got: () => pre() + 'got', days: () => pre() + 'days', probe: () => pre() + 'probe' };
let busy = false, nextTry = 0, gotMem = false;

const supported = () => { try { return !!PROMO.code && Promotion.grantReward.isSupported(); } catch (e) { return false; } };
async function sget(k) {
  const v = localStorage.getItem(k); if (v) return v;
  try { const r = await Storage.getItem(k); if (r) { localStorage.setItem(k, r); return r; } } catch (e) {}
  return null;
}
function sset(k, v) {
  localStorage.setItem(k, v);
  try { Promise.resolve(Storage.setItem(k, v)).catch(() => {}); } catch (e) {}
}
async function alreadyGot() { if (gotMem) return true; const v = await sget(KEY.got()); if (v) gotMem = true; return !!v; }

// 출석한 날을 이 모듈에서 따로 센다 (세이브 코드로 출석 횟수를 올려도 지급되지 않게)
async function trackDays() {
  const g = G(); const last = g && g.S && g.S.quest && g.S.quest.att && g.S.quest.att.last;
  let days = []; try { days = JSON.parse((await sget(KEY.days())) || '[]'); } catch (e) { days = []; }
  if (last && !days.includes(String(last))) { days.push(String(last)); sset(KEY.days(), JSON.stringify(days)); }
  return days;
}

const notice = (n) => `3일 동안 출석 체크를 하면 토스 포인트 ${PROMO.amount}원을 드려요. (현재 ${Math.min(n, PROMO.days)}/${PROMO.days}일) 출석한 날 수가 채워지면 바로 지급돼요. 1인 1회만 받을 수 있고 부정 참여 시 지급되지 않아요.${PROMO.endsLabel ? ' ' + PROMO.endsLabel + ' 진행해요.' : ''} 이 프로모션은 예산 소진 등으로 사전 고지 없이 중단될 수 있어요.`;

// 안내 문구는 항상 1개만: 비동기 호출이 겹쳐도 한 번에 하나만 실행하고(직렬화), await 이후에 DOM 을 다시 조회하며, 중복된 것은 지운다
let noticeBusy = false, noticeAgain = false;
async function showNotice() {
  if (noticeBusy) { noticeAgain = true; return; }
  noticeBusy = true;
  try {
    do {
      noticeAgain = false;
      const sec = document.querySelector('.page[data-tab="quest"]'), body = document.getElementById('qBody');
      if (!sec || !body) continue;
      const show = supported() && !(await alreadyGot());
      const txt = show ? notice((await trackDays()).length) : '';
      const all = document.querySelectorAll('#dgPromo');
      for (let i = show ? 1 : 0; i < all.length; i++) all[i].remove();
      let n = show ? all[0] : null;
      if (!show) continue;
      if (!n) { n = document.createElement('div'); n.id = 'dgPromo'; sec.insertBefore(n, body); }
      if (n.textContent !== txt) n.textContent = txt;
    } while (noticeAgain);
  } finally { noticeBusy = false; }
}

// 콘솔의 [프로모션 시작하기] 조건: TEST_ 코드로 지급 API 호출이 한 번 성공해야 한다
async function probeOnce() {
  if (!PROMO.probe || await sget(KEY.probe())) return;
  sset(KEY.probe(), 'try');
  try { await Promotion.grantReward({ promotionCode: 'TEST_' + PROMO.code, amount: PROMO.amount }); sset(KEY.probe(), 'ok'); log('probe ok'); }
  catch (e) { log('probe fail ' + String((e && (e.code || e.message)) || e)); }
}

async function tryGrant() {
  const g = G(); if (busy || !g || !g.S || !supported() || Date.now() < nextTry) return;
  if (await alreadyGot()) return;
  if ((await trackDays()).length < PROMO.days) return;
  busy = true;
  sset(KEY.got(), 'pending'); gotMem = true;   // 중복 호출 방지: 요청 전에 먼저 표시
  try {
    const r = await Promotion.grantReward({ promotionCode: PROMO.code, amount: PROMO.amount });
    sset(KEY.got(), 'ok:' + (r && r.key || ''));
    g.addLog(`<b>토스 포인트 ${PROMO.amount}원을 받았어요</b>`);
    log('granted');
  } catch (e) {
    const c = String((e && (e.code || e.message)) || e);
    log('grant fail ' + c);
    // 이미 받았거나 한도를 넘은 경우만 완료 처리하고, 그 밖의 실패(네트워크, 프로모션 시작 전 등)는 10분 뒤 다시 시도한다
    if (/ALREADY|DUPLICATE|EXCEED|LIMIT/i.test(c)) sset(KEY.got(), 'fail:' + c);
    else { sset(KEY.got(), ''); gotMem = false; nextTry = Date.now() + 600000; }
  } finally { busy = false; showNotice(); }
}

export function initPromo() {
  if (!PROMO.code) return;
  const run = () => { showNotice(); tryGrant(); };
  new MutationObserver(run).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });
  document.addEventListener('click', () => setTimeout(run, 400), true);
  setInterval(run, 15000);
  probeOnce().then(run); run();
}

