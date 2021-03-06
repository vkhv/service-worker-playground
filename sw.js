this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        'index.html',
        'sw.js'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(new Response('hello'))
});
