// Deskgeon 앱인토스 버전: 384x588 게임 화면을 Safe Area 안쪽에 꽉 차게 확대
(() => {
  const W = 384, H = 588;
  document.documentElement.classList.add('dgweb', 'dgtoss');
  function fit() {
    const b = document.body; if (!b) return;
    const ins = window.__dgInsets || { top: 0, bottom: 0, left: 0, right: 0 };
    const aw = window.innerWidth - ins.left - ins.right, ah = window.innerHeight - ins.top - ins.bottom;
    const s = Math.max(0.5, Math.min(aw / W, ah / H));
    b.style.zoom = String(s);
    b.style.marginTop = (ins.top + Math.max(0, (ah - H * s) / 2)) / s + 'px';
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);
  document.addEventListener('DOMContentLoaded', fit);
  if (document.readyState !== 'loading') fit();
})();
