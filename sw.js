const version = 'v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/manifest.json',
        '/lightbox.js',
        '/sw.js',
        'icons/icon-192x192.jpg',
        'icons/icon-256x256.jpg',
        'icons/icon-384x384.jpg',
        'icons/icon-512x512.jpg',
        'icons/icon.jpg',
        '/server.js',
        'imagex/Abbey Road.jpg',
        'imagex/beatles.jpg',
        'imagex/beatles.png',
        'imagex/beatles2.jpg',
        'imagex/beatles3.jpg',
        'imagex/CoverLetItBe.jpg',
        'imagex/end.jpg',
        'imagex/front1.jpg',
        'imagex/George.jpg',
        'imagex/help.jpg',
        'imagex/impact.jpg',
        'imagex/John.jpg',
        'imagex/John2.webp',
        'imagex/Magical-Mystery-Tour.jpg',
        'imagex/Paul.jpg',
        'imagex/Paul2.jpg',
        'imagex/ringo.jpg',
        'imagex/ringo2.jpg',
        'imagex/Rubber Soul.jpg',
        'imagex/With the Beatles.jpg',
        'imagex/Z1.jpg',
        'imagex/Z2.jpg',
      
       
        

        '/notfound.txt'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open(version).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/notfound.txt');
      });
    }
  }));
});