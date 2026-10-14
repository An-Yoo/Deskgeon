// Deskgeon 앱인토스 버전: 384px 폭 게임 화면을 Safe Area 안쪽에 맞춰 확대하고, 남는 세로 공간만큼 화면을 늘린다.
// - 토스 상단바(더보기/닫기 버튼)는 게임 위에 떠 있어서 SafeArea 값이 0이어도 최소 TOP_MIN 만큼은 비워 둔다.
// - 폭 기준으로 확대한 뒤 세로가 남으면 body 높이를 늘려 던전 로그/각 탭 목록이 더 길게 보이게 한다.
(() => {
  const W = 384, H0 = 588, HMAX = 780, TOP_MIN = 76;
  document.documentElement.classList.add('dgweb', 'dgtoss');
  const imp = (el, k, v) => el.style.setProperty(k, v, 'important');
  function fit() {
    const b = document.body; if (!b) return;
    const ins = window.__dgInsets || { top: 0, bottom: 0, left: 0, right: 0 };
    const top = Math.max(ins.top || 0, TOP_MIN);
    const aw = window.innerWidth - (ins.left || 0) - (ins.right || 0);
    const ah = window.innerHeight - top - (ins.bottom || 0);
    let s = aw / W;                       // 폭에 맞춘 배율
    let h = ah / s;                       // 그 배율에서 쓸 수 있는 높이(게임 px)
    if (h < H0) { s = ah / H0; h = H0; }  // 화면이 낮으면 높이에 맞춰 축소
    s = Math.max(0.5, s);
    h = Math.min(h, HMAX);
    b.style.zoom = String(s);
    imp(b, 'height', h + 'px');
    imp(document.documentElement, 'height', '100%');
    imp(b, 'margin-top', (top + Math.max(0, (ah - h * s) / 2)) / s + 'px');
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);
  document.addEventListener('DOMContentLoaded', fit);
  if (document.readyState !== 'loading') fit();
})();
