// Deskgeon 웹(PWA) 버전: 화면 맞춤 + 오프라인 캐시(서비스 워커) 등록
// 5.14.26: 세로 화면이면 남는 높이만큼 게임 화면을 늘린다 (전에는 384x588 고정이라 폰 아래 약 250px가 비었다). 새 게임 기본 언어 = 브라우저 언어
globalThis.__dgDefLang = (() => { try { const l = String((navigator.languages && navigator.languages[0]) || navigator.language || 'en').slice(0, 2).toLowerCase(); return ['ko', 'ja', 'zh', 'en'].includes(l) ? l : 'en'; } catch (e) { return 'en'; } })();
(() => {
  const W = 384, H = 588, HMAX = 860;
  document.documentElement.classList.add('dgweb');
  const imp = (el, k, v) => el.style.setProperty(k, v, 'important');
  function fit() {
    const b = document.body; if (!b) return;
    const s = Math.max(0.5, Math.min(window.innerWidth / W, window.innerHeight / H));
    const h = Math.max(H, Math.min(HMAX, window.innerHeight / s));
    b.style.zoom = String(s);
    imp(b, 'height', h + 'px');
    imp(document.documentElement, 'height', '100%');
    b.style.marginTop = Math.max(0, (window.innerHeight - h * s) / 2 / s) + 'px';
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);
  document.addEventListener('DOMContentLoaded', fit);
  if (document.readyState !== 'loading') fit();
})();
