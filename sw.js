const CACHE_NAME = 'maardebseh-directory-v3';
const ASSETS_TO_CACHE = [
  '/maredbseh-guide/',
  '/maredbseh-guide/index.html',
  '/maredbseh-guide/home.html',
  '/maredbseh-guide/market.html',
  '/maredbseh-guide/jobs.html',
  '/maredbseh-guide/offers.html',
  '/maredbseh-guide/emergency.html',
  '/maredbseh-guide/contact.html',
  '/maredbseh-guide/manifest.json',
  '/maredbseh-guide/icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
