// Deskgeon 앱인토스 연동 진입점
// 1) 게임 사용자 식별키로 세이브를 사용자별로 분리
// 2) 세이브를 SDK Storage에 백업(로컬 저장소가 비면 복구)
// 3) 안드로이드 뒤로가기: 열린 창 닫기 → 던전 탭 → 종료 확인
// 4) Safe Area 반영
// 5) 보상형 광고(오프라인 보상 2배, 부스트 충전)
import {
  getUserKeyForGame, Storage, graniteEvent, closeView, SafeArea,
} from '@apps-in-toss/web-framework';

const SAVE_KEY = 'deskmate.rpg.v1';
const log = (m) => { try { (window.__dmLog || (() => {}))('toss ' + m); } catch (e) {} };
const withTimeout = (p, ms, fallback) => Promise.race([p, new Promise(r => setTimeout(() => r(fallback), ms))]);
const ko = () => ((document.documentElement.lang || 'ko').startsWith('ko') || !window.__dgGame || (window.__dgGame.lang?.() || 'ko') === 'ko');

// ---------- 1) 사용자 식별 ----------
async function resolveUserKey() {
  let key = null;
  try {
    if (getUserKeyForGame.isSupported?.() !== false) {
      const r = await withTimeout(getUserKeyForGame(), 3000, undefined);
      if (r && typeof r === 'object' && r.hash) key = String(r.hash);
      log('userKey ' + (key ? 'ok' : String(r)));
    }
  } catch (e) { log('userKey error ' + (e && e.message)); }
  if (key) localStorage.setItem('dg.t.lastKey', key);
  else key = localStorage.getItem('dg.t.lastKey') || 'local';   // 일시 오류 시 마지막 키로 이어서
  return key;
}

// ---------- 2) SDK Storage 백업/복구 ----------
async function restoreFromStorage(prefix) {
  const lk = prefix + SAVE_KEY;
  if (localStorage.getItem(lk)) return;
  try {
    const v = await withTimeout(Storage.getItem(lk), 2000, null);
    if (v) { localStorage.setItem(lk, v); log('restored from Storage'); }
  } catch (e) { log('restore fail ' + (e && e.message)); }
}
function mirrorToStorage(prefix) {
  const lk = prefix + SAVE_KEY;
  let timer = 0;
  const flush = () => { timer = 0; const v = localStorage.getItem(lk); if (!v) return; try { Promise.resolve(Storage.setItem(lk, v)).catch(() => {}); } catch (e) {} };
  window.chrome.storage.onChanged.addListener((ch, area) => {
    if (area !== 'local' || !ch[SAVE_KEY]) return;
    if (!timer) timer = setTimeout(flush, 5000);
  });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
}

// ---------- 3) 뒤로가기 ----------
function openModal() {
  return [...document.querySelectorAll('.modal:not(.hidden)')].pop() || null;
}
function closeTopModal() {
  const m = openModal(); if (!m) return false;
  if (m.id === 'clsModal' && !(window.__dgGame && window.__dgGame.S && window.__dgGame.S.cls)) return true;   // 첫 직업 선택은 닫지 않음
  const closeBtn = m.querySelector('#setClose, #wOk, #rwOk, [data-a="close"], [data-xa="close"], .closebtn');
  if (closeBtn) closeBtn.click();
  else m.dispatchEvent(new MouseEvent('click', { bubbles: true }));   // 바깥 영역 클릭으로 닫히는 창
  if (!m.classList.contains('hidden')) m.classList.add('hidden');
  return true;
}
function confirmExit() {
  if (document.getElementById('dgExit')) return;
  const d = document.createElement('div');
  d.className = 'modal'; d.id = 'dgExit';
  d.innerHTML = `<div class="win"><h2>${ko() ? '게임을 종료할까요?' : 'Quit the game?'}</h2>
    <p>${ko() ? '진행 상황은 자동으로 저장돼요. 나가 있는 동안에도 모험은 계속돼요.' : 'Your progress is saved. The adventure continues while you are away.'}</p>
    <div class="grow"><button class="mini wide" id="dgExitNo">${ko() ? '계속하기' : 'Stay'}</button><button class="big" id="dgExitYes">${ko() ? '종료' : 'Quit'}</button></div></div>`;
  document.body.appendChild(d);
  d.querySelector('#dgExitNo').onclick = () => d.remove();
  d.querySelector('#dgExitYes').onclick = async () => { try { window.__dgGame?.save(); } catch (e) {} d.remove(); try { await closeView(); } catch (e) {} };
  d.onclick = (e) => { if (e.target === d) d.remove(); };
}
function onBack() {
  const ex = document.getElementById('dgExit'); if (ex) { ex.remove(); return; }
  if (closeTopModal()) return;
  const dungeonBtn = document.querySelector('.tabs button[data-go="dungeon"]');
  if (dungeonBtn && !dungeonBtn.classList.contains('on')) { dungeonBtn.click(); return; }
  confirmExit();
}

// ---------- 4) Safe Area ----------
function applySafeArea() {
  try {
    const i = SafeArea.get();
    window.__dgInsets = { top: i.top || 0, bottom: i.bottom || 0, left: i.left || 0, right: i.right || 0 };
    window.dispatchEvent(new Event('resize'));
    SafeArea.subscribe?.({ onEvent: (v) => { window.__dgInsets = { top: v.top || 0, bottom: v.bottom || 0, left: v.left || 0, right: v.right || 0 }; window.dispatchEvent(new Event('resize')); } });
  } catch (e) { log('safearea ' + (e && e.message)); }
}

// ---------- 시작 ----------
(async () => {
  window.__dmStep = 'toss-init';
  const key = await resolveUserKey();
  const prefix = 'dg.t.' + key.replace(/[^a-zA-Z0-9]/g, '').slice(0, 24) + '.';
  window.__dgPrefix = prefix;
  await restoreFromStorage(prefix);
  applySafeArea();
  try { graniteEvent.addEventListener('backEvent', { onEvent: onBack, onError: (e) => log('back ' + e.message) }); } catch (e) { log('backEvent ' + (e && e.message)); }
  window.addEventListener('unhandledrejection', (ev) => { if (/apps-in-toss/.test(String(ev.reason && ev.reason.message))) ev.preventDefault(); });
  await import('../game/popup.js');
  mirrorToStorage(prefix);
  const { initRewards } = await import('./rewards.js');
  initRewards();
  const { initPromo } = await import('./promo.js');
  initPromo();
})().catch((e) => { log('init fail ' + (e && e.message)); if (window.__dmFail) window.__dmFail(e); });
