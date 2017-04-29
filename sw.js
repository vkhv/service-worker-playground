console.log('sw setup');
this.addEventListener('install', function(event) {
  console.log(event);
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
      ]);
    })
  );
});
