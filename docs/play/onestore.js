// Deskgeon 원스토어(ONEplay 웹게임) 연동
// - 원스토어 H5 Game SDK 수명주기: initializeAsync → setLoadingProgress → startGameAsync
// - exit 이벤트에서 즉시 저장, 뒤로가기: 열린 창 닫기 → 던전 탭 → (원스토어 앱 기본 종료 확인)
// - Safe Area 반영
// 일반 브라우저에서는 SDK가 { err } 를 돌려주므로 아무것도 하지 않고 게임만 실행된다.
import { createSDK } from 'https://h5sdk.onestore.net/lib/v1.1.0/onestore-h5-sdk.min.js';

const log = (m) => { try { (window.__dmLog || (() => {}))('onestore ' + m); } catch (e) {} };
const sdk = createSDK();
window.__onestore = sdk;

function saveNow() { try { window.__dgGame && window.__dgGame.save(); } catch (e) { log('save ' + (e && e.message)); } }

// ---------- 이벤트 ----------
sdk.on('exit', () => saveNow());
sdk.on('pause', () => saveNow());

// ---------- 뒤로가기 (동기, 200ms 안에 회신) ----------
function topModal() { return [...document.querySelectorAll('.modal:not(.hidden)')].pop() || null; }
function closeTopModal() {
  const m = topModal(); if (!m) return false;
  if (m.id === 'clsModal' && !(window.__dgGame && window.__dgGame.S && window.__dgGame.S.cls)) return true;   // 첫 직업 선택은 닫지 않음
  const btn = m.querySelector('#setClose, #helpClose, #wOk, #rwOk, #gOk, [data-a="close"], [data-xa="close"], .closebtn');
  if (btn) btn.click();
  else m.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  if (!m.classList.contains('hidden')) m.classList.add('hidden');
  return true;
}
sdk.onBackPressed(() => {
  if (closeTopModal()) return true;
  const dungeon = document.querySelector('.tabs button[data-go="dungeon"]');
  if (dungeon && !dungeon.classList.contains('on')) { dungeon.click(); return true; }
  saveNow();
  return false;   // 원스토어 앱의 기본 종료 확인으로 넘김
});

// ---------- Safe Area ----------
function applySafeArea(sa) {
  if (!sa) return;
  const t = sa.top || 0, b = sa.bottom || 0;
  document.documentElement.style.setProperty('--dg-sa-top', t + 'px');
  document.documentElement.style.setProperty('--dg-sa-bottom', b + 'px');
  window.dispatchEvent(new Event('resize'));
}

// ---------- 시작 ----------
const waitReady = () => new Promise((res) => {
  const t0 = Date.now();
  const tick = () => {
    const ready = !!window.__dmReady;
    sdk.setLoadingProgress(ready ? 100 : Math.min(95, 20 + Math.floor((Date.now() - t0) / 60)));
    if (ready || Date.now() - t0 > 15000) return res(ready);
    setTimeout(tick, 100);
  };
  tick();
});

sdk.initializeAsync()
  .then(async (info) => {
    if (info && info.err) { log('not in ONE store app: ' + info.err); return; }
    log('init ok');
    applySafeArea(info.safeArea);
    sdk.setLoadingProgress(10);
    await waitReady();
    await sdk.startGameAsync();
    log('started');
  })
  .catch((e) => log('init fail ' + (e && (e.reason || e.message))));
