/* Service Worker — Carnet de Savoirs
 * Cache des assets statiques pour fonctionnement hors-ligne.
 *
 * Stratégie : NETWORK-FIRST pour les ressources locales (HTML, JS, CSS).
 * On essaie d'abord le réseau ; en cas d'échec (offline), on tombe sur le
 * cache. Comme ça, dès qu'un push GitHub Pages est publié, un simple F5
 * suffit à voir la nouvelle version — plus besoin de Ctrl+F5 pour vider
 * le cache. Le SW continue d'assurer l'offline grâce au cache de secours.
 *
 * Pour les CDN (KaTeX, Google Fonts), on garde la même stratégie
 * network-first avec fallback cache.
 *
 * VERSION : bumped automatiquement par Snapshot.bat à chaque push.
 *
 * Note : les Service Workers ne fonctionnent QUE en HTTP(S), pas en
 * file://. Donc l'enregistrement est conditionnel côté app.js. Sur
 * file://, ce fichier dort.
 */

const VERSION = '202605182257';
const CACHE_LOCAL = 'carnet-local-' + VERSION;
const CACHE_EXTERNAL = 'carnet-external-' + VERSION;

const LOCAL_URLS = [
  './',
  './index.html',
  './app.js',
  './styles.css',
  './manifest.json',
  './carnet.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_LOCAL).then((cache) => {
      // Pré-cache best-effort : on ne bloque pas l'installation si une
      // ressource manque (en file:// par ex.). On veut juste amorcer le
      // cache pour avoir un fallback offline raisonnable.
      return cache.addAll(LOCAL_URLS).catch((err) => {
        console.warn('[SW] Pré-cache partiel : ', err);
      });
    })
  );
  // skipWaiting : la nouvelle version active tout de suite, sans attendre
  // que tous les onglets soient fermés.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(
      // Supprime tous les caches d'anciennes versions (toutes les clés qui
      // ne sont pas exactement le cache local ou externe courant).
      names.filter(n => n !== CACHE_LOCAL && n !== CACHE_EXTERNAL)
           .map(n => caches.delete(n))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isLocal = url.origin === self.location.origin;

  if (event.request.method !== 'GET') return;

  // NETWORK-FIRST pour tout : on essaie le réseau, on met le résultat à
  // jour dans le cache, et si ça échoue (offline), on retombe sur la
  // dernière version cachée. C'est le pattern qui élimine le besoin de
  // Ctrl+F5 après un push.
  //
  // Pour les ressources locales, on force { cache: 'no-store' } sur la
  // requête réseau pour bypasser le cache HTTP du navigateur (qui peut
  // servir une version périmée même quand le SW essaie d'aller au réseau).
  // Les CDN externes gardent un fetch normal — leurs URLs sont déjà
  // versionnées (katex@0.16.9/…) donc immutables.
  const cacheName = isLocal ? CACHE_LOCAL : CACHE_EXTERNAL;
  const fetchOptions = isLocal ? { cache: 'no-store' } : {};
  event.respondWith(
    fetch(event.request, fetchOptions).then((resp) => {
      if (resp && resp.ok) {
        const clone = resp.clone();
        caches.open(cacheName).then((c) => c.put(event.request, clone));
      }
      return resp;
    }).catch(() => caches.match(event.request).then((cached) => {
      return cached || new Response('Offline et pas en cache', {
        status: 503, statusText: 'Service Unavailable'
      });
    }))
  );
});

// Message channel : permet à la page de demander un skipWaiting manuel
// (utile pour forcer la mise à jour sans recharger).
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
