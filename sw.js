/* Service Worker — Carnet de Savoirs
 * Cache des assets statiques pour fonctionnement hors-ligne.
 * Stratégie : cache-first pour les ressources locales, network-first
 * fallback cache pour les CDN externes (KaTeX, Google Fonts).
 *
 * Note : les Service Workers ne fonctionnent QUE en HTTP(S),
 * pas en file://. Donc l'enregistrement est conditionnel côté
 * app.js. Sur file://, ce fichier dort.
 */

const VERSION = 'v1.0.0';
const CACHE_LOCAL = 'carnet-local-' + VERSION;
const CACHE_EXTERNAL = 'carnet-external-' + VERSION;

const LOCAL_URLS = [
  './',
  './index.html',
  './app.js',
  './styles.css',
  './sujets/trous-noirs.js',
  './manifest.json',
  './carnet.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_LOCAL).then((cache) => {
      return cache.addAll(LOCAL_URLS).catch((err) => {
        console.warn('[SW] Pré-cache partiel : ', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(
      names.filter(n => n !== CACHE_LOCAL && n !== CACHE_EXTERNAL)
           .map(n => caches.delete(n))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isLocal = url.origin === self.location.origin;

  if (event.request.method !== 'GET') return;

  if (isLocal) {
    // Cache-first pour les ressources locales
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return cached || fetch(event.request).then((resp) => {
          if (resp.ok) {
            const clone = resp.clone();
            caches.open(CACHE_LOCAL).then((c) => c.put(event.request, clone));
          }
          return resp;
        });
      })
    );
  } else {
    // Network-first avec fallback cache pour les CDN
    event.respondWith(
      fetch(event.request).then((resp) => {
        if (resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE_EXTERNAL).then((c) => c.put(event.request, clone));
        }
        return resp;
      }).catch(() => caches.match(event.request))
    );
  }
});
