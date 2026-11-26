// Deskgeon 웹(PWA) 오프라인 캐시. 빌드마다 캐시를 새로 만든다.
// 5.14.26: 설치할 때 브라우저 HTTP 캐시(깃허브 페이지 10분)를 건너뛰어 받는다. 전에는 새 버전 캐시에 옛 파일이 섞여 들어가 '게임을 불러오지 못했어'가 떴다.
//          게임 코드(html·js·css)는 네트워크 먼저, 실패할 때만 캐시 (오프라인 실행 유지). 그림은 캐시 먼저.
const CACHE = 'deskgeon-web-5.15.1-202611261406';
const CORE = ['./', './index.html', './web-shim.js', './web-fit.js', './web.css', './boot.js', './popup.css', './popup.js', './game.js', './i18n.js', './big.js', './manifest.webmanifest'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('deskgeon-web-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const isCode = u => u.pathname.endsWith('/') || /\.(html|js|css|webmanifest)$/.test(u.pathname);
self.addEventListener('fetch', e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    if (isCode(u)) {
      try { const r = await fetch(req, { cache: 'no-cache' }); if (r && r.ok) c.put(req, r.clone()); return r; }
      catch (err) { return (await c.match(req, { ignoreSearch: true })) || new Response('Offline', { status: 503 }); }
    }
    const hit = await c.match(req, { ignoreSearch: true });
    const net = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const r = await net;
    return r || new Response('Offline', { status: 503 });
  }));
});
