// Deskgeon 앱인토스: 보상형 광고 + 광고 제거권(인앱결제)
// - 광고 제거권이 있으면 같은 보상을 광고 없이 바로 받는다 (하루 횟수 제한은 동일)
// - 보상은 광고의 userEarnedReward 이벤트에서만 지급
import { loadFullScreenAd, showFullScreenAd, IAP } from '@apps-in-toss/web-framework';
import { advance, towerState, TOWERS, riftState, riftUnlocked, KEY_MAX, offlineRate } from '../game/game.js';
import { AD_GROUPS, DAILY_CAP, WARP_HOURS, IAP_SKU_ADFREE, ADFREE_PRICE_LABEL } from './ads.config.js';

const log = (m) => { try { (window.__dmLog || (() => {}))('rw ' + m); } catch (e) {} };
const G = () => window.__dgGame;
const ko = () => (G()?.lang?.() || 'ko') === 'ko';
const L = (k, e) => (ko() ? k : e);
const P = () => window.__dgPrefix || '';

// ---------- 하루 횟수 ----------
const today = () => { const d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };
function quota(kind) {
  const k = P() + 'dg.ad.q';
  let o = {}; try { o = JSON.parse(localStorage.getItem(k) || '{}'); } catch (e) {}
  if (o.day !== today()) o = { day: today() };
  const max = DAILY_CAP[kind] ?? 1, used = o[kind] || 0;
  return { left: Math.max(0, max - used), max, use: () => { o[kind] = used + 1; localStorage.setItem(k, JSON.stringify(o)); } };
}

// ---------- 광고 제거권 ----------
const owned = () => localStorage.getItem(P() + 'dg.adfree') === '1';
function setOwned(v) { if (v) localStorage.setItem(P() + 'dg.adfree', '1'); else localStorage.removeItem(P() + 'dg.adfree'); refresh(); }
const iapOk = (fn) => { try { return !!IAP_SKU_ADFREE && IAP[fn].isSupported(); } catch (e) { return false; } };
// 기기 변경·재설치 시 복원 + 결제됐지만 지급이 끝나지 않은 주문 마무리
async function syncPurchases() {
  try {
    if (iapOk('getPendingOrders')) {
      const p = await IAP.getPendingOrders();
      for (const o of (p && p.orders) || []) {
        if (o.sku !== IAP_SKU_ADFREE) continue;
        setOwned(true);
        if (iapOk('completeProductGrant')) await IAP.completeProductGrant({ params: { orderId: o.orderId } });
        log('pending granted');
      }
    }
    if (iapOk('getCompletedOrRefundedOrders')) {
      const r = await IAP.getCompletedOrRefundedOrders();
      const mine = ((r && r.orders) || []).filter(o => o.sku === IAP_SKU_ADFREE).sort((a, b) => String(b.date).localeCompare(String(a.date)));
      if (mine.length) setOwned(mine[0].status === 'COMPLETED');
    }
  } catch (e) { log('iap sync ' + (e && e.message)); }
}
function buyAdFree() {
  if (!iapOk('createOneTimePurchaseOrder') || owned()) return;
  let cleanup = null;
  try {
    cleanup = IAP.createOneTimePurchaseOrder({
      options: {
        sku: IAP_SKU_ADFREE,
        processProductGrant: () => { setOwned(true); G()?.addLog('<b>' + L('광고 제거권을 구매했어요. 이제 보상을 광고 없이 바로 받아요.', 'Ad-free pass purchased.') + '</b>'); return true; },
      },
      onEvent: () => { try { cleanup && cleanup(); } catch (e) {} },
      onError: (e) => { log('iap buy ' + (e && e.message)); try { cleanup && cleanup(); } catch (er) {} },
    });
  } catch (e) { log('iap buy throw ' + (e && e.message)); }
}

// ---------- 광고 ----------
const ads = {};
for (const k of Object.keys(AD_GROUPS)) ads[k] = { id: AD_GROUPS[k], ready: false, unload: null, busy: false };
const sdkAds = () => { try { return loadFullScreenAd.isSupported() && showFullScreenAd.isSupported(); } catch (e) { return false; } };
const adOk = (k) => !!ads[k].id && sdkAds();
function preload(k) {
  if (!k) { Object.keys(ads).forEach(preload); return; }
  const a = ads[k]; if (!adOk(k) || owned()) return;
  try { a.unload && a.unload(); } catch (e) {}
  a.ready = false;
  try {
    a.unload = loadFullScreenAd({
      options: { adGroupId: a.id },
      onEvent: (e) => { if (e.type === 'loaded') { a.ready = true; refresh(); } },
      onError: (err) => { log('load ' + k + ' ' + (err && err.message)); setTimeout(() => preload(k), 60000); },
    });
  } catch (e) { log('load throw ' + (e && e.message)); }
}
// 광고 제거권이 있으면 바로 지급, 없으면 광고 시청 후 지급
function run(k, grant) {
  if (owned()) { grant(); refresh(); return; }
  const a = ads[k]; if (!a.ready || a.busy) return;
  a.busy = true; let earned = false;
  try {
    showFullScreenAd({
      options: { adGroupId: a.id },
      onEvent: (e) => {
        if (e.type === 'userEarnedReward') earned = true;
        if (e.type === 'dismissed' || e.type === 'failedToShow') {
          a.busy = false; a.ready = false;
          if (earned) { try { grant(); } catch (er) { log('grant ' + er.message); } }
          preload(k); refresh();
        }
      },
      onError: (err) => { a.busy = false; log('show ' + (err && err.message)); preload(k); refresh(); },
    });
  } catch (e) { a.busy = false; log('show throw ' + (e && e.message)); }
}
const avail = (k) => owned() || (adOk(k) && ads[k].ready);
const usable = (k) => owned() || adOk(k);

// ---------- 보상 내용 ----------
const R = {
  // 오프라인 보고서의 골드를 한 번 더
  double(rep) {
    const g = G(); if (!g || !rep || rep.__doubled) return;
    rep.__doubled = true; g.S.gold += rep.gold; g.save(); g.render();
    g.addLog('<b>' + L('보상: 오프라인 골드 2배', 'Reward: offline gold doubled') + '</b>');
  },
  boost() {
    const g = G(); if (!g) return;
    g.S.boost ||= { until: 0, charges: 0 }; g.S.boost.charges = (g.S.boost.charges || 0) + 1; g.save(); g.render();
    g.addLog('<b>' + L('보상: 부스트 1회 충전', 'Reward: +1 boost') + '</b>');
  },
  // 시간 가속: N시간 동안 자리를 비운 것처럼 진행 (오프라인 효율 적용, 부스트는 적용하지 않음)
  warp() {
    const g = G(); if (!g || !g.S.cls) return;
    const S = g.S, b = S.boost, until = b && b.until;
    if (b) b.until = 0;
    S.lastTick = Date.now() - WARP_HOURS * 3600 * 1000;
    S.pending = null;
    advance(S);
    if (b) b.until = until;
    const rep = S.pending; S.pending = null;
    g.save(); g.render();
    if (rep) { g.showReport(rep); if (window.__dgLastReport) window.__dgLastReport.__doubled = true; }
    g.addLog('<b>' + L(`보상: 시간 가속 ${WARP_HOURS}시간`, `Reward: ${WARP_HOURS}h time warp`) + '</b>');
  },
  // 도전 보급: 탑 3종 도전권 +1, 균열 열쇠 +1
  supply() {
    const g = G(); if (!g) return;
    for (const T of TOWERS) { const st = towerState(g.S, T.id); st.tries = (st.tries || 0) + 1; }
    const rs = riftState(g.S); rs.keys = Math.min(KEY_MAX + 20, (rs.keys || 0) + 1);
    g.save(); g.render();
    g.addLog('<b>' + L('보상: 탑 3종 도전권 +1, 균열 열쇠 +1', 'Reward: +1 try for each tower, +1 rift key') + '</b>');
  },
};

// ---------- UI ----------
const ROWS = [
  { k: 'warp', label: () => L(`시간 가속 ${WARP_HOURS}시간`, `${WARP_HOURS}h time warp`), desc: () => { const r = G()?.S ? Math.round(offlineRate(G().S) * 100) : 60; return L(`${WARP_HOURS}시간 동안 자리를 비운 만큼 바로 진행해요 · 현재 효율 ${r}% (꿈의 모래)`, `Instantly gain ${WARP_HOURS}h of idle progress · efficiency ${r}%`); }, ok: () => !!G()?.S?.cls },
  { k: 'supply', label: () => L('도전 보급', 'Challenge supply'), desc: () => L('탑 3종 도전권 +1, 균열 열쇠 +1', '+1 try for each tower, +1 rift key') + (G() && !riftUnlocked(G().S) ? L(' (균열은 B50부터)', ' (rift unlocks at B50)') : ''), ok: () => !!G()?.S?.cls },
  { k: 'boost', label: () => L('부스트 1회 충전', '+1 boost'), desc: () => L('30분 동안 진행 속도 2배', '2x speed for 30 min'), ok: () => true },
];
function btnText(k, q, ok) {
  if (q.left <= 0) return L(`오늘은 다 받았어요 (${q.max}/${q.max})`, `Done for today (${q.max}/${q.max})`);
  const tail = ` (${q.left}/${q.max})`;
  if (owned()) return L('바로 받기', 'Claim') + tail;
  if (!ok) return L('광고 준비 중...', 'Loading ad...');
  return L('광고 보고 받기', 'Watch ad') + tail;
}
function refresh() {
  // 오프라인 보고서: 골드 2배
  const w = document.getElementById('welcome');
  if (w) {
    let b = document.getElementById('dgAdDouble');
    const rep = window.__dgLastReport;
    const can = usable('double') && rep && rep.gold > 0 && !rep.__doubled;
    if (can && !b) {
      b = document.createElement('button'); b.className = 'big'; b.id = 'dgAdDouble';
      w.querySelector('#wOk').before(b);
      b.onclick = () => run('double', () => R.double(window.__dgLastReport));
    }
    if (b) {
      if (!can) b.remove();
      else { const r = avail('double'); b.disabled = !r; b.textContent = owned() ? L('골드 2배 바로 받기', 'Double gold') : (r ? L('광고 보고 골드 2배 받기', 'Watch ad: double gold') : L('광고 준비 중...', 'Loading ad...')); }
    }
  }
  // 설정 창: 보상 받기 + 광고 제거권
  const set = document.querySelector('#setModal .savebox');
  if (!set) return;
  let box = document.getElementById('dgRewards');
  const anyUsable = ROWS.some(r => usable(r.k)) || iapOk('createOneTimePurchaseOrder') || owned();
  if (!anyUsable) { if (box) box.remove(); return; }
  if (!box) {
    box = document.createElement('div'); box.id = 'dgRewards';
    set.prepend(box);
    box.addEventListener('click', (e) => {
      const t = e.target.closest('button'); if (!t) return;
      if (t.dataset.buy) { buyAdFree(); return; }
      const k = t.dataset.k; if (!k) return;
      const q = quota(k); if (q.left <= 0) return;
      run(k, () => { q.use(); R[k](); });
    });
  }
  const rows = ROWS.filter(r => usable(r.k)).map(r => {
    const q = quota(r.k), ok = avail(r.k) && r.ok();
    return `<div class="dgrw"><div class="dgrwt"><b>${r.label()}</b><span>${r.desc()}</span></div><button class="mini" data-k="${r.k}" ${ok && q.left > 0 ? '' : 'disabled'}>${btnText(r.k, q, ok)}</button></div>`;
  }).join('');
  const pass = owned()
    ? `<div class="dgpass on">${L('광고 제거권 보유 중: 모든 보상을 광고 없이 바로 받아요', 'Ad-free pass active: claim rewards without ads')}</div>`
    : (iapOk('createOneTimePurchaseOrder') ? `<button class="mini wide dgpass" data-buy="1">${L(`광고 제거권 ${ADFREE_PRICE_LABEL} · 광고 없이 바로 받기 (영구)`, `Ad-free pass ${ADFREE_PRICE_LABEL} (permanent)`)}</button>` : '');
  const html = `<div class="sbh">${L('보상 받기', 'Rewards')}</div>${rows}${pass}`;
  if (box.__html !== html) { box.innerHTML = html; box.__html = html; }
}

export function initRewards() {
  preload();
  syncPurchases().then(refresh);
  new MutationObserver(() => refresh()).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });
  setInterval(refresh, 5000);   // 날짜가 바뀌면 횟수 갱신
  refresh();
}
