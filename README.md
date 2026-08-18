# Carnet de Savoirs

> Atelier d'apprentissage personnel — application web locale, sans serveur, sans build, sans API. Un fichier `.js` par sujet, une app vanilla JS qui les assemble.

## Ouvrir l'app

- **En local** : double-cliquer sur `index.html` (protocole `file://`). Aucune installation.
- **En ligne** : le dossier est publié tel quel sur GitHub Pages (`Snapshot.bat` commit + push). En HTTP(S) l'app fonctionne aussi en **PWA installable** et **hors-ligne** (service worker `sw.js`, manifest, icônes PNG).

Toutes les données utilisateur (progression, scores, favoris, notes, surlignages, succès, réglages) sont dans le **localStorage** du navigateur, clé `carnetdesavoirs_v1`. Pour les sauvegarder ou changer d'appareil : **Mon profil → Exporter mes données** (JSON enveloppé `{ app, version, exportedAt, user }`), puis **Importer** sur l'autre poste (l'import valide et assainit le fichier, et affiche un récapitulatif avant d'écraser).

## Structure du dossier

```
CarnetDeSavoirs/
├── index.html                ← point d'entrée : charge app.js, styles.css, sujets/*.js, parcours/*.js
├── app.js                    ← cœur (≈ 10 500 lignes) : état, routage hash, markdown lite, widgets,
│                                quiz (5 types), carte mentale, carte globale, timeline, vocabulaire,
│                                parcours, notes, profil, succès, mode Champion, Pomodoro, recherche Ctrl+K
├── styles.css                ← design system (thème sombre, variables --d-{domaine})
├── sw.js                     ← service worker (hors-ligne ; LOCAL_URLS régénérée par le script de version)
├── manifest.json             ← PWA (id, icônes 192/512 + maskable)
├── carnet.ico, icon-*.png, apple-touch-icon.png
├── sujets/{slug}.js          ← une fiche par fichier : window.CarnetDeSavoirs.register({...})
├── parcours/{slug}.js        ← chemins guidés : window.CarnetDeSavoirs.registerParcours({...})
├── TEMPLATE_SUJET.md         ← LA référence pour générer une fiche (à donner à Claude)
├── BRIEFING_COWORK.md        ← procédure d'intégration / maintenance côté Cowork
├── AUDIT_2026-08-18.md       ← audit complet + plan d'action (lots 1-5 appliqués)
├── Snapshot.bat              ← commit + bump de version + push
├── Update-Cache-Version.ps1  ← bump ?v=, VERSION du SW, LOCAL_URLS, APP_VERSION (UTF-8 sans BOM)
└── Init-Git.bat, Voir-Historique.bat, Reset-Git-Anonyme.bat, Creer-Raccourci-Bureau.bat, Generer-Icone.ps1
```

## Ajouter un sujet

1. Générer `sujets/{slug}.js` avec Claude à partir de `TEMPLATE_SUJET.md` (le fichier appelle `window.CarnetDeSavoirs.register({...})`, `meta.id === slug`).
2. Le déposer dans `sujets/`.
3. Ajouter dans `index.html`, dans la section `SUJETS` (ordre alphabétique) :
   `<script src="sujets/{slug}.js?v=000000000000" charset="UTF-8"></script>` — la valeur de `?v=` sera réécrite au prochain snapshot.
4. F5. Le sujet apparaît dans la bibliothèque, la carte globale, la recherche, le vocabulaire, la timeline (si Frise) et le quiz mixte. Les avertissements de validation (`validateSujet`) s'affichent dans la console (F12).
5. `Snapshot.bat` pour versionner et publier (met à jour `?v=`, `sw.js`, `APP_VERSION`).

Un sujet peut lier d'autres fiches via `meta.lie_a`, `meta.prerequis` et les liens `[[slug]]` dans le texte (backlinks automatiques).

## Ajouter un parcours

`parcours/{slug}.js` :

```js
window.CarnetDeSavoirs.registerParcours({
  meta: { id: 'mon-parcours', titre: 'Mon <em>parcours</em>', domaine: 'Histoire', description: '…', duree_estimee_min: 120 },
  etapes: [ { slug: 'rome-antique', note: 'Pourquoi cette étape…' }, { slug: 'empire-byzantin' } ]   // ≥ 2 étapes, slugs existants
});
```

puis une balise `<script>` dans la section `PARCOURS` de `index.html`.

## Blocs de cours et widgets (résumé — détail dans TEMPLATE_SUJET.md)

Blocs : `texte`, `encadre`, `widget`, `mini-quiz`, `html_libre`.
Widgets : `SelecteurValeurs` (+ comparateur), `CurseurParametrique` (+ presets), `GrilleCartes` (cartes retournables), `ListeMethodes` (accordéon), `Frise` (timeline, agrégée dans la Timeline globale), `Equation` (KaTeX, mode manipulable), `SchemaAnnote` (image base64 + hotspots), `TableauComparatif` (tri + extrêmes).
Quiz : `qcm`, `vrai-faux`, `ordre-chrono`, `texte-a-trou`, `associer`.

## Domaines & couleurs

14 domaines prédéfinis dans `styles.css` (`--d-{slug}`) : Astrophysique, Physique, Mathématiques, Biologie, Médecine, Sciences cognitives, Sciences de la Terre, Environnement, Histoire, Géopolitique, Informatique, Économie, Philosophie, Arts. Slug = nom minusculisé sans accents ni caractères non alphabétiques (`Sciences cognitives` → `sciencescognitives`). Un domaine inconnu reçoit une couleur stable générée par hash.

## Raccourcis clavier

`/` recherche · `Ctrl+K` palette · `b` bibliothèque · `1`-`4` onglets d'une fiche · `Esc` quitter un overlay / le mode lecture · flèches dans les overlays (présentation, flashcards, diaporama).

## Développement

- Pas de build : éditer, F5. Le code est une IIFE unique dans `app.js`, sections délimitées par des bannières `// ====`.
- Cycle de vie des vues : `onRerender(fn)` / `onLeaveView(fn)` (nettoyage des timers, observers, écouteurs) ; overlays via `mountOverlay()`.
- État : `defaultUserState()` → `sanitizeUserState()` (types) → `migrateUserState()` (migrations one-shot).
- Vérification rapide d'un sujet en Node : `node -e "global.window={CarnetDeSavoirs:{register(){console.log('ok')}}}; require('./sujets/slug.js')"`.
- Compat : `color-mix()` et `backdrop-filter` (navigateurs 2023+) ; pas de lookbehind regex (Safari < 16.4 OK).

---

*v1.1 — août 2026. Conçu et construit avec ✦ et Claude.*
