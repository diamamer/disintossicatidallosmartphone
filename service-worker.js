const CACHE_NAME = 'disintossica-cache-v1';
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/push.js/1.0.12/push.min.js',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
