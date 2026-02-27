
self.addEventListener("install", e=>{
  e.waitUntil(caches.open("fitcache").then(cache=>cache.addAll(["/"])))
});
