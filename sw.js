const CACHE_NAME = 'study-plan-v2-cache-v4';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-512.png'
];

function isLegacyStudyPlanUrl(url) {
  return url.pathname === '/study_plan_v2.html' || url.pathname.endsWith('/study_plan_v2.html');
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (isLegacyStudyPlanUrl(url)) {
    event.respondWith(
      caches.match('/index.html').then(cached => cached || fetch('/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
