const CACHE_NAME = 'edurobot-v3';
const ASSET_EXTENSIONS = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.mp3', '.wav', '.txt', '.json'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const isAsset = ASSET_EXTENSIONS.some(ext => url.pathname.endsWith(ext));
  if (!isAsset) return;
  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(req).then(cached => cached || fetch(req).then(resp => {
        try { cache.put(req, resp.clone()); } catch (e) {}
        return resp;
      }))
    )
  );
});
