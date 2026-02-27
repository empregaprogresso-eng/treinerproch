
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("fit-cache").then(cache => {
      return cache.addAll(["/","/index.html"]);
    })
  );
});
