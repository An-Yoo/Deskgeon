// 미션 프로모션: 직업을 고르고 모험을 시작하면 토스 포인트 지급 (1인 1회)
// 정책상 필수 안내: 지급 시점·조건·제한, "사전 고지 없이 중단될 수 있어요"
import { Promotion, Storage } from '@apps-in-toss/web-framework';
import { PROMO } from './promo.config.js';

const log = (m) => { try { (window.__dmLog || (() => {}))('promo ' + m); } catch (e) {} };
const G = () => window.__dgGame;
const code = () => (PROMO.test ? 'TEST_' : '') + PROMO.code;
const flagKey = () => (window.__dgPrefix || '') + 'dg.promo.' + PROMO.code;
let busy = false, doneMem = false;

const supported = () => { try { return !!PROMO.code && Promotion.grantReward.isSupported(); } catch (e) { return false; } };
async function alreadyGot() {
  if (doneMem || localStorage.getItem(flagKey())) return true;
  try { const v = await Storage.getItem(flagKey()); if (v) { localStorage.setItem(flagKey(), v); return true; } } catch (e) {}
  return false;
}
function markGot(v) {
  doneMem = true; localStorage.setItem(flagKey(), v);
  try { Promise.resolve(Storage.setItem(flagKey(), v)).catch(() => {}); } catch (e) {}
}
const notice = () => `직업을 고르고 모험을 시작하면 토스 포인트 ${PROMO.amount}원을 바로 드려요. 1인 1회만 받을 수 있어요.${PROMO.endsLabel ? ' (' + PROMO.endsLabel + ')' : ''} 부정 참여 시 지급되지 않으며, 이 프로모션은 예산 소진 등으로 사전 고지 없이 중단될 수 있어요.`;

async function tryGrant() {
  const g = G(); if (busy || !g || !g.S.cls || !supported()) return;
  if (await alreadyGot()) return;
  busy = true;
  markGot('pending');   // 중복 호출 방지: 요청 전에 먼저 표시
  try {
    const r = await Promotion.grantReward({ promotionCode: code(), amount: PROMO.amount });
    markGot('ok:' + (r && r.key || ''));
    g.addLog(`<b>토스 포인트 ${PROMO.amount}원을 받았어요</b>`);
    log('granted');
  } catch (e) {
    const c = String((e && (e.code || e.message)) || e);
    log('grant fail ' + c);
    // 이미 받았거나 예산 소진 등 다시 시도해도 안 되는 경우는 그대로 완료 처리, 네트워크 등 일시 오류만 다음 실행 때 재시도
    if (/UNKNOWN|NETWORK|TIMEOUT/i.test(c)) { localStorage.removeItem(flagKey()); doneMem = false; }
    else markGot('fail:' + c);
  } finally { busy = false; }
}

// 직업 선택 창에 안내 문구 표시
async function showNotice() {
  const m = document.getElementById('clsModal'); if (!m) return;
  let n = document.getElementById('dgPromo');
  const show = supported() && !m.classList.contains('hidden') && !(await alreadyGot());
  if (!show) { if (n) n.remove(); return; }
  if (!n) {
    n = document.createElement('div'); n.id = 'dgPromo';
    const win = m.querySelector('.win') || m;
    win.insertBefore(n, win.children[1] || null);
  }
  n.textContent = notice();
}

export function initPromo() {
  if (!PROMO.code) return;
  new MutationObserver(() => { showNotice(); tryGrant(); }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });
  showNotice(); tryGrant();
}
