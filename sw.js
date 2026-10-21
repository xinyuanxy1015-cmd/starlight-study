const CACHE="starlight-115e3ce23d30";const FILES=["./","./.nojekyll","./assets/book-logo.webp","./assets/cosmic-banner.webp","./assets/icon-192.png","./assets/icon-512.png","./assets/index-BhCQoTRx.css","./assets/index-oTp3IOKj.js","./assets/jupiter-earth.webp","./data/content.json","./index.html","./manifest.webmanifest"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('starlight-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]));});
self.addEventListener('message',e=>{if(e.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
 if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html').then(r=>r||caches.match('./'))));return;}
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
