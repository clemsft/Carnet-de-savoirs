# Briefing — Intégration & maintenance du Carnet de Savoirs (côté Cowork)

> À fournir au Claude qui travaille sur le dossier local (Cowork). Version d'août 2026, alignée sur `app.js` v1.9+.

---

## 1. Contexte

**Le projet :** *Carnet de Savoirs*, atelier d'apprentissage personnel : chaque sujet exploré avec Claude devient une fiche multi-vues (Résumé, Cours interactif, Quiz, Carte mentale) consultable durablement, reliée aux autres (liens, backlinks, parcours, vocabulaire, timeline).

**Conception :** vanilla JS, aucun build, aucun serveur, aucune API. Fonctionne en `file://` (double-clic sur `index.html`) et en ligne sur GitHub Pages (PWA installable, hors-ligne). Données utilisateur en `localStorage`.

**Emplacement :** `C:\Users\Utilisateur\Documents\Claude\Apprentissage\CarnetDeSavoirs\` (dépôt git, branche `main`).

**État actuel :** ~68 sujets, 10 parcours. Audit complet réalisé le 18/08/2026 (`AUDIT_2026-08-18.md`), lots 1 à 5 appliqués.

---

## 2. Architecture (voir README.md pour le détail)

- `index.html` liste explicitement chaque `sujets/*.js` et `parcours/*.js` dans une balise `<script>` (avec `?v=…`).
- `app.js` : IIFE unique ; `window.CarnetDeSavoirs.register()` / `.registerParcours()` / `.start()`.
- `sw.js` + `manifest.json` : PWA. `LOCAL_URLS` du SW est **régénérée automatiquement** par `Update-Cache-Version.ps1` — ne pas l'éditer à la main.
- Documentation de génération : `TEMPLATE_SUJET.md` (v1.3 — §8ter : schémas générés et ≥ 3 photos par sujet) — c'est ce fichier que le Claude « chat » utilise pour écrire une fiche.

---

## 3. Workflow récurrent : intégrer un nouveau sujet

1. **Réception** : un fichier `{slug}.js` généré à partir de `TEMPLATE_SUJET.md`.
2. **Vérification rapide** avant de le déposer :
   - `node -e "global.window={CarnetDeSavoirs:{register(){}}}; require('./{slug}.js')"` ne doit produire aucune erreur (apostrophes non échappées et backticks dans les template literals sont les erreurs classiques).
   - `meta.id` = nom du fichier ; `lie_a` / `prerequis` / `[[slug]]` ne pointent que vers des fichiers existants de `sujets/`.
   - Pas de markdown (`**`, `` ` ``) dans les champs texte brut (quiz, titres de seuils, légendes) — liste exacte dans TEMPLATE §6.
3. **Dépôt** dans `sujets/`.
4. **Enregistrement** dans `index.html`, section `SUJETS`, ordre alphabétique :
   `<script src="sujets/{slug}.js?v=000000000000" charset="UTF-8"></script>`
5. **Validation** : ouvrir/rafraîchir l'app, ouvrir la fiche, vérifier les 4 onglets et la console (F12) : `validateSujet` y liste les avertissements éventuels (`quiz[i].correcte hors plage`, `parent inconnu`, etc.).
6. **Snapshot** : l'utilisateur lance `Snapshot.bat` (bump des versions, commit, push). Vérifier dans la console du .bat les lignes `[OK] index.html`, `[OK] sw.js -> VERSION = …, LOCAL_URLS = N entrees`, `[OK] app.js -> APP_VERSION`.

Même procédure pour un parcours (`parcours/{slug}.js`, section `PARCOURS`).

### Photos accompagnant une fiche

Chaque fiche référence **au moins 3 photos** via `SchemaAnnote` avec `image: 'images/{slug}--nom.jpg'` (voir TEMPLATE §8ter). À l'intégration :

1. L'utilisateur fournit les photos (téléchargées depuis les sources libres de droits indiquées par la fiche — Wikimedia Commons, NASA/ESA…).
2. Redimensionner : bord long ≤ 1200 px, JPEG qualité ~80, cible ≤ 200 Ko par photo.
3. Nommer selon la convention `{slug}--{nom}.jpg` et déposer dans `images/`.
4. Vérifier l'affichage dans la fiche (une image manquante s'affiche cassée, sans casser le reste).
5. Snapshot : le script ajoute automatiquement `images/*` au cache hors-ligne (`LOCAL_URLS`).

Les schémas générés, eux, sont en base64 dans le `.js` : rien à faire.

---

## 4. Modifier `app.js` / `styles.css`

- Toujours partir de la **version actuelle du dossier** (le snapshot bump `APP_VERSION` dans `app.js` : ne pas écraser avec une copie plus ancienne).
- Conserver l'encodage UTF-8 ; le script de version écrit désormais **sans BOM**.
- Vérifier la syntaxe (`node --check app.js`) et, si possible, un rendu des routes principales dans un DOM simulé (jsdom) avant de livrer.
- Conventions internes : nettoyage de vue via `onRerender()` / `onLeaveView()`, overlays via `mountOverlay()`, formats numériques via `formatNumberFr()`, dates `YYYY-MM-DD` via `dateKey()` / `parseDateKey()`, état via `sanitizeUserState()` + `migrateUserState()`.
- Les enregistrements « une fois par session » (tentative de quiz, activité, records Champion) utilisent des drapeaux `sess._finalized` / `sess._recorded` : ne pas les retirer.

---

## 5. Domaines & couleurs

14 domaines (`styles.css`, variables `--d-{slug}`) : Astrophysique `#ff6b35`, Physique `#5b8def`, Mathématiques `#d946ef`, Biologie `#4ade80`, Médecine `#ef4444`, Sciences cognitives `#c084fc`, Sciences de la Terre `#92400e`, Environnement `#16a34a`, Histoire `#f5b342`, Géopolitique `#dc2626`, Informatique `#06b6d4`, Économie `#eab308`, Philosophie `#a78bfa`, Arts `#be185d`. Préférer élargir un domaine existant plutôt qu'en créer un ; un domaine inconnu reçoit une couleur par hash.

---

## 6. Sauvegarde des données utilisateur

`localStorage` uniquement → recommander un export régulier (**Mon profil → Exporter mes données**), conservé hors du dépôt (`.gitignore` exclut `carnet-de-savoirs-*.json`). L'import valide le fichier (enveloppe `{ app: 'carnet-de-savoirs', version, user }` ou ancien format brut), assainit les types et demande confirmation en affichant un récapitulatif.

---

## 7. Points d'attention

- **Pas de fetch externe dans l'app.** Seules dépendances réseau : Google Fonts et KaTeX (CDN, `crossorigin`), toutes deux facultatives et mises en cache par le SW pour le hors-ligne.
- **Service worker** : actif seulement en HTTP(S). En `file://`, rien à attendre du cache.
- **Compatibilité** : `color-mix()`, `backdrop-filter` (navigateurs 2023+). Éviter les lookbehind regex (Safari < 16.4).
- **Contenu** : le markdown lite est interprété dans une liste précise de champs (TEMPLATE §6) ; le quiz est en texte brut.
- **Cartes mentales** : ≤ 7 enfants par nœud, labels ≤ 25 caractères, 2-3 niveaux — au-delà, chevauchements.
- **Frises** : formats de dates reconnus par la Timeline listés dans TEMPLATE §10 ; les dates libres restent dans la fiche mais sont ignorées par la Timeline (compteur affiché sous son titre).

---

## 8. Reste à faire (suggestions de l'audit, hors bugs)

Mélange des options QCM à l'affichage · réponses multiples en texte-à-trou · persistance de la session de quiz au F5 · précalcul de l'index de recherche · densité de la carte mentale (allocation angulaire) · accessibilité (`role=tab`, focus trap, `aria-live`) · mini-suite de tests Node pour `md()`, `parseHistoricalDate()`, `normalizeAnswer()`, `sanitizeUserState()` · auto-hébergement de KaTeX et des polices · CSP.

---

*v1.2 — août 2026*
