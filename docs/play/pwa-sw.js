// Deskgeon 웹(PWA) 오프라인 캐시. 버전이 바뀌면 캐시를 새로 만든다.
const CACHE = 'deskgeon-web-5.6.0';
const CORE = ['./', './index.html', './web-shim.js', './web-fit.js', './web.css', './boot.js', './popup.css', './popup.js', './game.js', './i18n.js', './manifest.webmanifest'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('deskgeon-web-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// 같은 출처 요청만: 캐시 우선 + 뒤에서 갱신 (오프라인에서도 실행)
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, { ignoreSearch: true });
    const net = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const r = await net;
    return r || new Response('Offline', { status: 503 });
  }));
});
