// Quick Builder – tryb offline
const CACHE='quick-builder-b34efe6fb3';
const ASSETS=["./", "index.html", "manifest.webmanifest", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "fonts/grandstander-latin-600-normal.woff2", "fonts/grandstander-latin-800-normal.woff2", "fonts/grandstander-latin-ext-600-normal.woff2", "fonts/grandstander-latin-ext-800-normal.woff2", "fonts/nunito-latin-600-normal.woff2", "fonts/nunito-latin-700-normal.woff2", "fonts/nunito-latin-800-normal.woff2", "fonts/nunito-latin-ext-600-normal.woff2", "fonts/nunito-latin-ext-700-normal.woff2", "fonts/nunito-latin-ext-800-normal.woff2"];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('quick-builder-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
// najpierw z pamięci (działa bez internetu), w tle sprawdzamy nowszą wersję
self.addEventListener('fetch',e=>{
  const req=e.request,url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==location.origin)return;
  url.search=''; // jeden wpis na plik (np. ./?source=app i ./ to ta sama strona)
  const cache=caches.open(CACHE);
  const update=fetch(req).then(async r=>{if(r.ok)await (await cache).put(url.href,r.clone());return r});
  e.waitUntil(update.catch(()=>{})); // przeglądarka nie przerwie zapisu nowej wersji
  e.respondWith(cache.then(async c=>await c.match(req,{ignoreSearch:true})||(req.mode==='navigate'&&await c.match('./'))||update));
});
