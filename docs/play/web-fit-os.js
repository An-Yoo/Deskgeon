// Deskgeon 웹(PWA) 버전: 화면 맞춤 + 오프라인 캐시(서비스 워커) 등록
(() => {
  const W = 384, H = 588;
  document.documentElement.classList.add('dgweb');
  function fit() {
    const b = document.body; if (!b) return;
    const s = Math.max(0.5, Math.min(window.innerWidth / W, window.innerHeight / H));
    b.style.zoom = String(s);
    b.style.marginTop = Math.max(0, (window.innerHeight - H * s) / 2 / s) + 'px';
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);
  document.addEventListener('DOMContentLoaded', fit);
  if (document.readyState !== 'loading') fit();
})();
