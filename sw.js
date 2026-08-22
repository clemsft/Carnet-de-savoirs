/* Service Worker — Carnet de Savoirs
 * Cache des assets pour un fonctionnement hors-ligne complet.
 *
 * Stratégie :
 *  - Ressources LOCALES (HTML, JS, CSS, sujets, parcours) : NETWORK-FIRST
 *    avec revalidation HTTP (`cache: 'no-cache'` → ETag/304 gratuits sur
 *    GitHub Pages) et repli sur le cache si hors-ligne. Un simple F5 voit
 *    la nouvelle version après un push, et l'app reste utilisable offline.
 *  - CDN (KaTeX, Google Fonts) : STALE-WHILE-REVALIDATE — on sert le cache
 *    tout de suite s'il existe et on rafraîchit en arrière-plan. Les
 *    réponses « opaques » (sans CORS) sont AUSSI mises en cache : avant,
 *    `resp.ok` était faux pour elles et KaTeX/les polices n'étaient jamais
 *    disponibles hors-ligne.
 *  - Correspondance cache insensible à la query (`ignoreSearch`) : les
 *    scripts sont chargés en `app.js?v=…` mais pré-cachés en `app.js`.
 *
 * LOCAL_URLS est régénérée automatiquement par Update-Cache-Version.ps1
 * (appelé par Snapshot.bat) à partir des <script>/<link> de index.html :
 * ne pas éditer la liste à la main, elle serait écrasée.
 *
 * VERSION : bumpée automatiquement par Snapshot.bat à chaque push.
 *
 * Note : les Service Workers ne fonctionnent QUE en HTTP(S), pas en
 * file://. L'enregistrement est conditionnel côté app.js.
 */

const VERSION = '202608221901';
const CACHE_LOCAL = 'carnet-local-' + VERSION;
const CACHE_EXTERNAL = 'carnet-external-' + VERSION;

// __LOCAL_URLS_START__
const LOCAL_URLS = [
  './',
  './index.html',
  './manifest.json',
  './carnet.ico',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './styles.css',
  './app.js',
  './sujets/abysses-oceaniques.js',
  './sujets/adn-genetique.js',
  './sujets/antibiotiques.js',
  './sujets/arctique.js',
  './sujets/baudouin-iv.js',
  './sujets/bauhaus.js',
  './sujets/big-bang.js',
  './sujets/capitalisme.js',
  './sujets/cathedrales-gothiques.js',
  './sujets/cerveau-humain.js',
  './sujets/changement-climatique.js',
  './sujets/chimie-atomes.js',
  './sujets/conquete-spatiale-moderne.js',
  './sujets/consumerisme.js',
  './sujets/crise-subprimes.js',
  './sujets/detroit-de-taiwan.js',
  './sujets/droit.js',
  './sujets/ecriture-cuneiforme.js',
  './sujets/effet-placebo.js',
  './sujets/empire-byzantin.js',
  './sujets/empire-mongol.js',
  './sujets/empire-ottoman.js',
  './sujets/energie-nucleaire.js',
  './sujets/epargne-et-placements.js',
  './sujets/epopee.js',
  './sujets/evolution-darwin.js',
  './sujets/gastronomie.js',
  './sujets/histoire-internet.js',
  './sujets/ia-generative.js',
  './sujets/infini-mathematiques.js',
  './sujets/inflation.js',
  './sujets/jazz.js',
  './sujets/jerome-kerviel.js',
  './sujets/le-rap.js',
  './sujets/le-sommeil.js',
  './sujets/les-animes.js',
  './sujets/les-templiers.js',
  './sujets/les-volcans.js',
  './sujets/linguistique.js',
  './sujets/marc-aurele.js',
  './sujets/marches-financiers.js',
  './sujets/marco-polo.js',
  './sujets/mecanique-quantique.js',
  './sujets/megafeux.js',
  './sujets/memoire-humaine.js',
  './sujets/monnaies-numeriques.js',
  './sujets/napoleon.js',
  './sujets/nombres-premiers.js',
  './sujets/paris-geographie.js',
  './sujets/photosynthese.js',
  './sujets/probabilites.js',
  './sujets/pyramides-egypte.js',
  './sujets/religions-du-monde.js',
  './sujets/renaissance-italienne.js',
  './sujets/revolution-francaise.js',
  './sujets/rome-antique.js',
  './sujets/route-de-la-soie.js',
  './sujets/saddam-hussein.js',
  './sujets/samourais.js',
  './sujets/sapiens-neolithique.js',
  './sujets/sport-physiologie.js',
  './sujets/stoicisme.js',
  './sujets/syndrome-stendhal.js',
  './sujets/systeme-immunitaire.js',
  './sujets/theorie-des-cordes.js',
  './sujets/theorie-relativite.js',
  './sujets/trous-noirs.js',
  './sujets/vitesse-de-la-lumiere-limite.js',
  './parcours/climat-environnement.js',
  './parcours/du-cosmos-a-lhomme.js',
  './parcours/economie-moderne.js',
  './parcours/empires.js',
  './parcours/geopolitique-xxie.js',
  './parcours/histoire-france.js',
  './parcours/le-vivant.js',
  './parcours/pensee-du-monde.js',
  './parcours/sciences-de-l-ecriture.js',
  './parcours/sciences-de-l-esprit.js',
  './images/baudouin-iv--couronnement.jpg',
  './images/empire-byzantin--justinien-mosaique.jpg',
  './images/empire-byzantin--sainte-sophie.jpg',
  './images/epopee--tablette-gilgamesh.jpg',
  './images/jerome-kerviel--tours-socgen.jpg',
  './images/le-rap--grandmaster-flash.jpg',
  './images/les-animes--akihabara.jpg',
  './images/les-templiers--bucher-molay.jpg',
  './images/les-templiers--sceau.jpg',
  './images/marc-aurele--statue-equestre.jpg',
  './images/mecanique-quantique--solvay-1927.jpg',
  './images/napoleon--sacre-david.jpg',
  './images/saddam-hussein--firdos-2003.jpg',
  './images/vitesse-de-la-lumiere-limite--aldrin-apollo11.jpg',
  './images/vitesse-de-la-lumiere-limite--webb-deep-field.jpg'
];
// __LOCAL_URLS_END__

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_LOCAL).then((cache) => {
      // Pré-cache best-effort, fichier par fichier : un 404 (ex. icône
      // absente) n'annule pas les autres, contrairement à cache.addAll.
      return Promise.all(LOCAL_URLS.map((u) =>
        fetch(new Request(u, { cache: 'no-cache' }))
          .then((resp) => (resp && resp.ok) ? cache.put(u, resp) : null)
          .catch(() => null)
      ));
    })
  );
  // La nouvelle version s'active tout de suite ; la page est prévenue via
  // 'controllerchange' (toast « nouvelle version » côté app.js).
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(
      names.filter(n => n !== CACHE_LOCAL && n !== CACHE_EXTERNAL)
           .map(n => caches.delete(n))
    )).then(() => self.clients.claim())
  );
});

function cacheable(resp) {
  // 200 OK ou réponse opaque (CDN sans CORS : status 0, type 'opaque')
  return !!resp && (resp.ok || resp.type === 'opaque');
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isLocal = url.origin === self.location.origin;

  if (isLocal) {
    // NETWORK-FIRST (revalidation HTTP), repli cache, repli index.html pour
    // les navigations (l'app est une SPA en hash-routing).
    event.respondWith(
      fetch(req, { cache: 'no-cache' }).then((resp) => {
        if (cacheable(resp)) {
          const clone = resp.clone();
          caches.open(CACHE_LOCAL).then((c) => c.put(req, clone));
        }
        return resp;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then((cached) => {
        if (cached) return cached;
        if (req.mode === 'navigate') return caches.match('./index.html', { ignoreSearch: true });
        return new Response('Hors-ligne et ressource absente du cache', {
          status: 503, statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }))
    );
    return;
  }

  // CDN : STALE-WHILE-REVALIDATE
  event.respondWith(
    caches.open(CACHE_EXTERNAL).then((cache) =>
      cache.match(req).then((cached) => {
        const network = fetch(req).then((resp) => {
          if (cacheable(resp)) cache.put(req, resp.clone());
          return resp;
        }).catch(() => cached || new Response('', { status: 503, statusText: 'Service Unavailable' }));
        return cached || network;
      })
    )
  );
});

// Message channel : la page peut demander un skipWaiting manuel.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
