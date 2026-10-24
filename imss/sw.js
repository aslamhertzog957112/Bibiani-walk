const C='imss-academy-v2';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./academy.html','./manifest.json','./icon-180.png','./icon-192.png','./icon-maskable-192.png']))) ;self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(f=>{const cp=f.clone();caches.open(C).then(c=>c.put(e.request,cp));return f;}).catch(()=>caches.match('./academy.html'))));});
