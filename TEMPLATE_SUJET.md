# Template — Génération d'un sujet pour le Carnet de Savoirs

> **À l'usage de Claude (côté chat.claude.ai)** quand l'utilisateur demande de générer un nouveau sujet pour son atelier d'apprentissage personnel. Ce document est volontairement self-contained : tu n'as besoin de rien d'autre pour produire un fichier compatible.

---

## 1. Ce que tu dois produire

Un **unique fichier JavaScript** nommé `{slug}.js` (exemple : `relativite-restreinte.js`, `cellule-eucaryote.js`) dont le contenu est un seul appel à `window.CarnetDeSavoirs.register({...})`.

Pas d'imports, pas de dépendances, pas de build step. Le fichier est chargé tel quel dans un navigateur.

**Squelette minimal :**

```js
window.CarnetDeSavoirs.register({
  meta: { /* ... */ },
  resume: '...',
  points_cles: [ /* ... */ ],
  carte_mentale: { /* ... */ },
  cours: [ /* ... */ ],
  quiz: [ /* ... */ ],
  vocabulaire: [ /* ... */ ]   // [optionnel mais recommandé] mini-glossaire
});
```

Le `slug` du fichier doit correspondre exactement à `meta.id`.

---

## 2. Le bloc `meta`

```js
meta: {
  id: 'relativite-restreinte',          // [requis] kebab-case, doit être unique, identique au nom de fichier sans .js
  titre: 'La <em>relativité restreinte</em>',  // [requis] HTML : <em> autorisé pour mise en italique, rien d'autre
  domaines: ['Physique'],               // [requis] tableau de noms de domaines (voir §3)
  tags: ['einstein', 'lumière', 'temps'],  // [optionnel] mots-clés pour la recherche
  difficulte: 2,                        // [requis] 1 = initiation, 2 = intermédiaire, 3 = avancé
  duree_estimee_min: 30,                // [optionnel] entier, minutes pour parcourir le sujet
  prerequis: [],                        // [optionnel] tableau d'ids de sujets prérequis
  lie_a: ['trous-noirs'],               // [optionnel] tableau d'ids de sujets liés
  date_creation: '2026-05-09',          // [requis] format ISO yyyy-mm-dd
  date_maj: '2026-05-09'                // [requis] idem
}
```

**Règles strictes :**
- L'`id` est minuscule, sans accent, mots séparés par des tirets. Pattern : `[a-z0-9-]+`.
- Le `titre` peut contenir des balises `<em>...</em>` (et seulement celles-là) pour mettre une partie en italique. Toute autre balise sera affichée en littéral.
- `difficulte` est strictement 1, 2 ou 3.

---

## 3. Domaines & couleurs

Les **14 domaines** retenus pour le carnet (palette consolidée et volontairement large) :

| Domaine                  | Couleur (rappel visuel) | Englobe |
|--------------------------|-------------------------|---------|
| `Astrophysique`          | orange feu              | astronomie, cosmologie, espace |
| `Physique`               | bleu cobalt             | physique fondamentale, énergie |
| `Mathématiques`          | magenta                 | maths pures et appliquées |
| `Biologie`               | vert                    | vie, ADN, génétique, microbio, évolution |
| `Médecine`               | rouge clinique          | médecine, santé |
| `Sciences cognitives`    | violet doux             | neurosciences, psychologie, cognition |
| `Sciences de la Terre`   | brun terre              | géologie, géographie, océanographie |
| `Environnement`          | vert profond            | climat, écologie |
| `Histoire`               | ambre                   | histoire, urbanisme |
| `Géopolitique`           | rouge brique            | relations internationales |
| `Informatique`           | cyan                    | tech, IA, réseaux |
| `Économie`               | jaune-or                | finance, marchés |
| `Philosophie`            | violet                  | philosophie, éthique |
| `Arts`                   | magenta profond         | art, littérature, linguistique |

**Reste dans cette liste autant que possible.** Si vraiment un sujet n'entre dans aucune de ces 14 cases, tu peux en inventer une, l'app générera une couleur stable automatiquement — mais préfère élargir une catégorie existante.

Un sujet peut appartenir à plusieurs domaines (ex. `['Astrophysique', 'Physique']` pour les trous noirs). La couleur d'accent du sujet est celle du **premier** domaine listé.

---

## 4. `resume` et `points_cles`

```js
resume: 'Comprendre les objets les plus extrêmes de l\'univers : depuis le concept de vitesse de libération jusqu\'au rôle cosmique des trous noirs supermassifs.',

points_cles: [
  'Un **trou noir** est un objet si compact que sa **vitesse de libération** dépasse celle de la lumière.',
  'L\'**horizon des événements** est la frontière de non-retour.',
  // 4 à 8 points-clés idéalement
]
```

- `resume` : 1 à 3 phrases. Le pitch du sujet. Affiché sur la carte de la bibliothèque + en exergue dans l'onglet Résumé.
- `points_cles` : 4 à 8 idées-force courtes (1 à 2 phrases chacune). Tu peux y utiliser le markdown lite (voir §6).

---

## 5. `carte_mentale`

Un **arbre radial multi-niveaux** : un nœud central, ses enfants directs (niveau 1), leurs propres enfants (niveau 2), etc. La hiérarchie est exprimée par le champ optionnel `parent` sur chaque nœud.

```js
carte_mentale: {
  central: 'trou-noir',                 // id du nœud central
  noeuds: [
    // Le central — pas de parent
    { id: 'trou-noir', label: 'Trou noir', description: 'Objet ultra-compact...' },

    // Niveau 1 — enfants directs du central (parent omis = parent par défaut = central)
    { id: 'horizon',     label: 'Horizon des événements', description: '...' },
    { id: 'naissance',   label: 'Effondrement stellaire', description: '...' },
    { id: 'observation', label: 'Détection',              description: '...' },

    // Niveau 2 — enfants d'un nœud niveau 1, via "parent"
    { id: 'singularite', label: 'Singularité',     description: '...', parent: 'horizon' },
    { id: 'supernova',   label: 'Supernova',       description: '...', parent: 'naissance' },
    { id: 'eht',         label: 'Event Horizon Telescope', description: '...', parent: 'observation' },
    { id: 'ligo',        label: 'LIGO/Virgo',      description: '...', parent: 'observation' },

    // Niveau 3 — petit-enfant
    { id: 'm87',         label: 'M87*',            description: '...', parent: 'eht' }
  ],
  liens: []                             // [optionnel] relations transverses entre branches (rare)
}
```

**Champs des nœuds :**

| Champ         | Type   | Requis | Rôle                                                                                  |
|---------------|--------|--------|---------------------------------------------------------------------------------------|
| `id`          | string | oui    | court, kebab-case, unique dans le sujet                                               |
| `label`       | string | oui    | s'affiche dans le SVG (≤ 25 caractères idéalement)                                    |
| `description` | string | non    | 1 à 2 phrases, **markdown lite supporté**, affichée en survol dans une carte flottante |
| `parent`      | string | non    | `id` du parent dans la hiérarchie. **Omis** = enfant direct du central               |

**Règles :**
- `central` doit pointer vers un `id` existant.
- Chaque `parent` doit pointer vers un `id` existant (sinon l'enfant est rattaché au central avec un warning).
- Un nœud ne peut pas être son propre parent.
- Profondeur recommandée : **2 à 4 niveaux**. Au-delà, la carte devient illisible.
- Largeur recommandée : **3 à 7 enfants** par nœud parent. Au-delà, les secteurs angulaires deviennent étroits.

**Couleurs automatiques :** chaque enfant direct du central reçoit une teinte distincte de la palette des domaines (orange, bleu, vert, magenta, cyan, violet, ambre, rose). Tous ses descendants partagent cette teinte. Tu n'as rien à configurer.

**Liens transverses (`liens`) :** optionnel, pour exprimer une relation entre deux branches qui n'est pas un lien parent-enfant (ex. un sujet de la branche A qui « cause » un sujet de la branche B). Format : `[{ de: 'idA', vers: 'idB' }, ...]`. Rendu sous forme de courbe Bezier additionnelle.

---

## 6. Markdown lite supporté

Le markdown lite est interprété dans les champs suivants (liste **exacte**, vérifiée dans `app.js`) :

- `resume`, `points_cles[]`, `vocabulaire[].definition`, `carte_mentale.noeuds[].description`
- `cours[].contenu_md` (blocs `texte` et `encadre`), `cours[].q` / `indice` / `reponse` (bloc `mini-quiz`)
- les **`description`** de : `SelecteurValeurs.options[]`, `CurseurParametrique.seuils[]`, `GrilleCartes.cartes[]`, `ListeMethodes.methodes[]`, `Frise.evenements[]`, `SchemaAnnote.hotspots[]`

Il n'est **PAS** interprété (texte brut, les `**` s'afficheraient tels quels) dans : `meta.titre` et les `titre` de blocs/widgets (seul `<em>` y est autorisé), `label` d'encadré, `titre` des seuils, `label` des presets, `tag`/`titre` des cartes, `titre` des méthodes, `date`/`titre` de frise, `legende` d'Equation et de SchemaAnnote, `label` des hotspots, `unite`, colonnes/cellules de TableauComparatif, et **tout le quiz** (`q`, `options`, `explication`, `affirmation`, `items`, `texte`, `paires`).

Syntaxes disponibles :

| Syntaxe              | Rendu                                       |
|----------------------|---------------------------------------------|
| `**gras**`           | **gras** (mot clé important)                |
| `*italique*`         | *italique* (subtil)                         |
| `` `code` ``         | `monospace` (terme technique)               |
| `[terme]{accent}`    | terme **dans la couleur d'accent du sujet** |
| `[[slug-du-sujet]]`  | **lien navigable** vers la fiche dont `meta.id == slug-du-sujet`. Si ce sujet n'existe pas (encore) dans le carnet, le lien s'affiche en gris atténué pour signaler le sujet manquant. |
| `[[slug\|alias]]`    | même lien, mais le texte affiché est `alias` (« voir [[epopee\|les épopées]] »). |
| `# Titre` / `## Sous-titre` | en début de ligne dans `contenu_md` : titres internes (h2 / h3) |
| `- item`             | en début de ligne : puce ; les puces consécutives forment une liste (à utiliser avec parcimonie) |
| Lignes vides         | nouveau paragraphe                          |
| Retour à la ligne    | `<br>` (saut de ligne sans nouveau paragraphe) |

**Le HTML brut n'est pas interprété** dans ces zones (sauf dans le `titre` des blocs où `<em>` est autorisé). Les caractères `<`, `>`, `&` sont échappés.

**Recommandation** : utilise `[terme]{accent}` avec parcimonie pour les concepts les plus importants — c'est puissant car la couleur attire l'œil.

---

## 7. Le bloc `cours` — types de blocs

**Règle d'or : un widget = une intention pédagogique.** Avant d'insérer un widget, nomme ce qu'il fait faire au lecteur :

- **S'engager / prédire** → `Prediction` (s'engager sur une valeur avant de savoir), `mini-quiz` (répondre de tête avant de révéler). **Obligatoires : au moins 1 `Prediction` et 1 à 2 `mini-quiz` par sujet.** Toujours placer la `Prediction` AVANT le passage qui donne la réponse.
- **Se tester** → `GrilleCartes` (l'app ajoute automatiquement des boutons « su / à revoir » persistants : rédige les faces avant comme des questions implicites), `Frise` (l'app propose automatiquement « Masquer les dates »).
- **Explorer / manipuler** → `CurseurParametrique`, `SelecteurValeurs` (+ comparateur), `Equation` en mode manipulable.
- **Structurer** → `TableauComparatif`, `ListeMethodes`, `SchemaAnnote`.

Un widget qui ne fait que reformater du texte lisible en paragraphe (une « grille » de définitions qu'on aurait pu écrire en prose, une frise de 2 événements) est un widget-décoration : ne l'insère pas.

```js
cours: [
  // ... succession de blocs de différents types ...
]
```

### 7.1. `type: 'texte'`

Le bloc le plus courant.

```js
{
  type: 'texte',
  titre: 'L\'idée fondamentale : la <em>vitesse de libération</em>',  // [optionnel]
  contenu_md:
`Tout commence par une question simple : à quelle vitesse faut-il aller pour échapper à la gravité ?

Sur Terre, il faut **11,2 km/s**. Sur la Lune, beaucoup moins. Sur le Soleil, énormément plus.

Cette vitesse dépend de **deux ingrédients** : la [masse]{accent} et la [compacité]{accent} de l'astre.`
}
```

- `titre` accepte `<em>` pour les italiques (comme `meta.titre`).
- `contenu_md` est multilignes, séparé en paragraphes par des lignes vides. Utilise des template literals (backticks) pour la lisibilité.

### 7.2. `type: 'encadre'`

Une mise en valeur visuelle pour insister sur un point.

```js
{
  type: 'encadre',
  label: 'À retenir',                   // [optionnel] court, en majuscules dans le rendu
  contenu_md: 'Un [trou noir]{accent} est un objet si compact que sa vitesse de libération **dépasse celle de la lumière**.'
}
```

À utiliser pour : définitions clés, idées fortes, mises en garde. **Maximum 2-3 par cours**, sinon ça perd son effet.

### 7.3. `type: 'widget'`

Un composant interactif. Voir §8 pour les 9 composants disponibles.

```js
{
  type: 'widget',
  titre: 'Sélectionnez un astre pour visualiser sa vitesse de libération',  // [optionnel]
  composant: 'SelecteurValeurs',        // un des 9 noms de §8
  params: { /* params spécifiques au composant */ }
}
```

### 7.4. `type: 'mini-quiz'`

Une question de vérification insérée **dans le fil du cours** (différente du quiz de l'onglet Quiz), avec réponse masquée à révéler. **1 à 2 par sujet, obligatoire** — idéalement après un passage dense, en formulant la question de façon à obliger un rappel de mémoire (« Sans remonter dans la page… », « De mémoire… »).

```js
{
  type: 'mini-quiz',
  q: 'Pourquoi un objet massif ne peut-il pas atteindre `c` ?',   // markdown lite OK
  indice: 'Pense à ce que devient l\'énergie quand v → c.',        // [optionnel]
  reponse: 'Parce que l\'énergie nécessaire tend vers **l\'infini** (facteur de Lorentz).'
}
```

### 7.5. `type: 'html_libre'`

Échappatoire pour insérer du HTML brut. **À éviter sauf nécessité**. Si tu y recours, vérifie que le HTML est self-contained et ne dépend de rien d'externe.

```js
{
  type: 'html_libre',
  contenu: '<div style="...">...</div>'
}
```

---

## 8. Les 9 widgets disponibles

### 8.1. `SelecteurValeurs`

Une rangée de boutons. Cliquer un bouton affiche une valeur + une description. Idéal pour comparer une grandeur entre plusieurs entités.

```js
{
  type: 'widget',
  composant: 'SelecteurValeurs',
  titre: 'Vitesse de libération de divers astres',
  params: {
    unite: 'km/s',                      // [optionnel] suffixe affiché après la valeur
    indexInitial: 0,                    // [optionnel] index de l'option active au départ (default 0)
    options: [
      { label: 'Lune', valeur: 2.4, description: 'Faible gravité.' },
      { label: 'Terre', valeur: 11.2, description: 'Notre planète.' },
      { label: 'Soleil', valeur: 617, description: 'Notre étoile.' }
    ]
  }
}
```

- `valeur` peut être un nombre (formaté en français : espace des milliers, virgule décimale) ou une chaîne (« ≈ 1,3 s »).
- `description` supporte le markdown lite.
- Si toutes les valeurs sont numériques, l'app propose automatiquement un **mode comparateur** (Maj + clic sur une seconde option : écart et ratio).
- 3 à 8 options idéalement.

### 8.2. `CurseurParametrique`

Un curseur (slider) qui révèle un résultat différent selon des seuils. Des **presets** (boutons « Repères ») peuvent repositionner le curseur sur des valeurs nommées.

```js
{
  type: 'widget',
  composant: 'CurseurParametrique',
  titre: 'Faites varier la masse d\'une étoile pour voir son destin',
  params: {
    label: 'Masse de l\'étoile',        // libellé affiché à gauche du curseur
    min: 0.5,                           // borne basse
    max: 50,                            // borne haute
    step: 0.1,                          // pas
    valeurInitiale: 8,                  // [optionnel] valeur de départ (default = min)
    unite: 'M☉',                        // [optionnel] suffixe affiché à côté de la valeur
    presets: [                          // [optionnel] boutons « Repères » qui positionnent le curseur
      { label: 'Soleil', valeur: 1 },
      { label: 'Géante bleue', valeur: 30 }
    ],
    degradePiste: '#5b8def 0%, #5b8def 16%, #ffb86c 16%, #ffb86c 50%, #ff6b35 50%, #ff6b35 100%',  // [optionnel] gradient CSS pour la barre
    seuils: [
      {
        jusqua: 8,                      // s'applique si valeur < 8
        titre: 'Naine blanche',
        description: 'L\'étoile expulse ses couches externes...',
        couleur: '#5b8def'              // teinte du résultat
      },
      {
        jusqua: 25,
        titre: 'Étoile à neutrons',
        description: '...',
        couleur: '#ffb86c'
      },
      {
        jusqua: Infinity,               // dernier seuil = catch-all
        titre: 'Trou noir stellaire',
        description: '...',
        couleur: '#ff6b35'
      }
    ]
  }
}
```

- L'ordre des seuils compte : on prend le premier dont `jusqua > valeur courante` ; à défaut, le **dernier** seuil sert de repli. Termine quand même par un seuil `jusqua: Infinity` par lisibilité.
- 2 à 5 seuils idéalement. Le `titre` de chaque seuil est affiché comme repère sur la piste : garde-le court.
- `description` supporte le markdown lite ; `titre` et `presets[].label` non.
- La valeur affichée suit le nombre de décimales de `step` (`step: 0.5` → « 2,5 »), séparateur décimal virgule.

### 8.3. `GrilleCartes`

Une grille de cartes uniformes — idéale pour des classifications, des comparaisons, des familles d'objets.

```js
{
  type: 'widget',
  composant: 'GrilleCartes',
  params: {
    cartes: [
      { tag: '3 — 100 M☉', titre: 'Stellaires', description: 'Nés de l\'effondrement d\'étoiles très massives.' },
      { tag: '100 — 100 000 M☉', titre: 'Intermédiaires', description: 'Le chaînon manquant.' },
      { tag: 'Millions — Milliards M☉', titre: 'Supermassifs', description: 'Au centre des galaxies.' }
    ]
  }
}
```

- `tag` : optionnel, court, affiché en italique au-dessus du titre.
- 2 à 6 cartes idéalement.
- **Auto-test automatique** : après retournement, l'app propose « ✓ su / ✗ à revoir » et persiste les réponses (pastilles + bilan). Tire parti de ce mécanisme : rédige la **face avant comme une invite à deviner** (le nom seul, la date seule, le concept nu) et la face arrière comme la réponse complète.

### 8.4. `ListeMethodes`

Une liste numérotée en chiffres romains minuscules — pour énumérer des techniques, des étapes, des approches.

```js
{
  type: 'widget',
  composant: 'ListeMethodes',
  titre: 'Quatre méthodes de détection',
  params: {
    methodes: [
      { titre: 'Émission de rayons X', description: 'Détection des **disques d\'accrétion** ultra-chauds via télescopes spatiaux.' },
      { titre: 'Mouvements gravitationnels', description: 'Suivi d\'étoiles tournant autour d\'un point invisible.' }
    ]
  }
}
```

- `description` accepte le markdown lite.
- 2 à 8 méthodes (au-delà ça devient lourd).

### 8.5. `Frise`

Une timeline chronologique verticale. Idéale pour les sujets historiques, l'évolution d'une théorie, la séquence des découvertes, etc.

```js
{
  type: 'widget',
  composant: 'Frise',
  titre: 'Histoire de la relativité',   // [optionnel]
  params: {
    evenements: [
      { date: '1905', titre: 'Relativité restreinte', description: 'Einstein publie son article fondateur — l\'espace et le temps deviennent **relatifs**.' },
      { date: '1915', titre: 'Relativité générale',   description: 'Einstein finalise sa théorie de la gravitation — la gravité devient une [courbure de l\'espace-temps]{accent}.' },
      { date: '1919', titre: 'Confirmation par Eddington', description: 'Une éclipse solaire vérifie la déviation de la lumière prédite.' }
    ]
  }
}
```

- Chaque événement a `date` (chaîne libre — date, période, ordre de grandeur), `titre` (court), `description` (markdown lite supporté).
- **Auto-test automatique** : dès 3 événements datés, l'app affiche un bouton « Masquer les dates » qui transforme la frise en exercice de datation (clic sur une date voilée pour la révéler). Rien à configurer.
- 3 à 8 événements idéalement.
- Les dates s'affichent en italique colorées, le marqueur sur la ligne verticale, la description en dessous.

### 8.6. `Equation`

Rendu d'une formule mathématique en LaTeX, via KaTeX (chargé en CDN). Indispensable pour la physique, les maths, la chimie quantitative.

```js
{
  type: 'widget',
  composant: 'Equation',
  params: {
    tex: 'E = mc^2',                     // [requis] formule LaTeX
    legende: 'Équivalence masse-énergie d\'Einstein, 1905.',  // [optionnel]
    affichage: 'block'                   // 'block' (défaut, gros centré) ou 'inline'
  }
}
```

- `tex` accepte la syntaxe LaTeX standard. Exemples : `\frac{a}{b}`, `\sqrt{x}`, `\sum_{i=0}^{n}`, `\int_a^b f(x)\,dx`, `\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}`.
- Caractères grecs : `\alpha`, `\beta`, `\Gamma`, `\Delta`...
- Si KaTeX n'est pas chargé (offline complet), le widget retombe sur le texte brut + un message discret.
- À utiliser pour les formules NOTABLES (3 ou 4 max par sujet). Pour des notations inline dans une phrase, utilise plutôt le markdown lite avec `` `code inline` `` qui suffira souvent.
- **Mode manipulable** [optionnel] : ajoute `variables` (sliders) et une fonction `compute` qui renvoie le nouveau `tex` (et éventuellement une `note`) :

```js
params: {
  tex: 'E = mc^2',
  variables: [ { nom: 'm', label: 'Masse', min: 1, max: 1000, step: 1, init: 1, unite: 'kg' } ],
  compute: (v) => ({ tex: 'E = ' + v.m + ' \\cdot c^2 \\approx ' + (v.m * 9e16).toExponential(2) + '\\ \\text{J}', note: 'Énergie de masse au repos.' })
}
```

- Le rendu attend le chargement de KaTeX (CDN) et se met à jour tout seul dès qu'il arrive.

### 8.7. `SchemaAnnote`

Une image avec des points cliquables (« hotspots ») qui révèlent une annotation. Parfait pour anatomie, schémas physiques, cartes historiques, structures moléculaires…

```js
{
  type: 'widget',
  composant: 'SchemaAnnote',
  params: {
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhE...', // [requis] data URL base64
    legende: 'Le système solaire (échelle non respectée).',  // [optionnel]
    hotspots: [
      { x: 50, y: 50, label: 'Soleil',  description: 'Notre étoile, 99,86 % de la masse du système.' },
      { x: 65, y: 45, label: 'Mercure', description: 'La plus proche du Soleil. Aucune atmosphère significative.' },
      { x: 75, y: 50, label: 'Vénus',   description: 'Effet de serre extrême. **460 °C** en surface.' }
    ]
  }
}
```

- `image` accepte **deux formes** :
  - une **data URL base64** (`data:image/png;base64,…`) — à utiliser pour les **schémas générés** (voir §8ter) : le `.js` reste self-contained ;
  - un **chemin relatif** vers le dossier `images/` du carnet (`'images/{slug}--nom.jpg'`) — à utiliser pour les **photos** (voir §8ter) : les photos sont trop lourdes pour du base64.
- `hotspots: []` est valide : le widget devient alors une **simple image légendée** (photo d'illustration, reproduction d'œuvre…).
- `x` et `y` sont des **pourcentages** (0-100) de la dimension de l'image (x depuis la gauche, y depuis le haut).
- Chaque hotspot apparaît comme un cercle numéroté orange. Clic = la carte de description s'affiche en bas de l'image.
- 3 à 8 hotspots idéalement. Au-delà, l'image devient trop chargée.
- **Taille image recommandée** : ≤ 300 KB en base64 (= ~225 KB binaire). Au-delà, le `.js` du sujet devient lourd à charger.

### 8.8. `TableauComparatif`

Un tableau n × m triable au clic sur les en-têtes, avec surlignage automatique du max et du min des colonnes numériques. Idéal pour comparer des entités sur plusieurs critères chiffrés (empires, planètes, matériaux…).

```js
{
  type: 'widget',
  composant: 'TableauComparatif',
  titre: 'Les grands empires comparés',
  params: {
    colonnes: [
      { id: 'nom',     label: 'Empire',   type: 'text' },
      { id: 'surface', label: 'Surface',  unite: 'M km²', type: 'number' },
      { id: 'duree',   label: 'Durée',    unite: 'ans',   type: 'number' }
    ],
    lignes: [
      { nom: 'Empire mongol', surface: 24, duree: 162 },
      { nom: 'Empire romain', surface: 5,  duree: 503 }
    ],
    surlignageExtremes: true              // [optionnel] défaut true
  }
}
```

- Cellules et en-têtes en texte brut (pas de markdown). Les nombres sont formatés en français.
- 2 à 8 lignes, 2 à 6 colonnes idéalement.

### 8.9. `Prediction`

**Le widget d'engagement actif — au moins un par sujet.** L'utilisateur s'engage sur une valeur chiffrée au curseur AVANT de connaître la réponse, clique « Je me prononce », et l'app révèle la vraie valeur, l'écart, un verdict et l'explication. C'est le mécanisme de calibration qui rend les ordres de grandeur mémorables.

```js
{
  type: 'widget',
  composant: 'Prediction',
  titre: 'Avant le graphique, ton estimation',      // [optionnel]
  params: {
    question: 'Sur les 422 000 hommes entrés en Russie, combien repassent le Niémen ?',  // [requis]
    min: 0,
    max: 422000,
    step: 1000,
    valeurInitiale: 200000,       // [optionnel] position de départ du curseur (défaut : milieu)
    reponse: 10000,               // [requis] la vraie valeur
    unite: 'hommes',              // [optionnel]
    explication: '**10 000** hommes en état de combattre — soit 2 %. Froid, typhus, faim…'  // markdown lite
  }
}
```

**Règles d'usage :**
- Place TOUJOURS la `Prediction` **avant** le bloc qui donne la réponse (texte, schéma, sélecteur) — jamais après.
- Choisis une valeur **surprenante** : si tout le monde tombe juste, le widget n'apprend rien. Les meilleurs candidats : ordres de grandeur contre-intuitifs, pourcentages extrêmes, durées mal calibrées.
- `question` et `titre` en texte brut ; `explication` en markdown lite.
- Cale `min`/`max` pour que la réponse ne soit ni au bord ni au centre exact, et `valeurInitiale` loin de la réponse.

---

## 8ter. Visuels : schémas générés et photos

Chaque sujet comporte obligatoirement : **au moins 3 photos** et **1 à 2 schémas générés** quand le propos s'y prête. Le schéma explique là où le texte ne suffit pas (mécanisme, échelle, cycle, anatomie, carte) ; la photo montre le réel (œuvre d'art, monument, personnage, organisme, événement historique, image d'observatoire, objet de musée). Chaque image doit enseigner quelque chose que le texte seul ne montre pas — mais avec 3 photos minimum par sujet, on assume aussi leur rôle d'ancrage : donner un visage, un lieu, une matière au sujet.

**Trouver 3 photos, même pour un sujet abstrait** — quelques pistes qui marchent toujours : les *acteurs* (portrait d'époque, buste, photo officielle), les *lieux* (bâtiment, site, ville, laboratoire), les *objets et documents* (manuscrit, tablette, instrument, première édition, une du journal), les *œuvres* (tableau, mosaïque, affiche d'époque), les *moments* (photo d'événement, congrès, signature). Un sujet de mathématiques peut montrer un portrait, un manuscrit et un instrument de calcul ; un sujet d'économie, un lieu de pouvoir, une une de presse et un acteur clé.

### A. Schémas et graphiques générés (par Claude, au moment de la génération du sujet)

Le schéma est produit en Python (matplotlib) ou en SVG rendu en PNG, puis intégré en **base64** dans un widget `SchemaAnnote` — avec des hotspots calculés programmatiquement à partir des coordonnées des données, jamais estimés à l'œil.

**Charte graphique (obligatoire — le schéma doit sembler natif de l'app) :**

| Élément | Valeur |
|---|---|
| Fond | `#12121e` (ou `#0a0a14`) |
| Texte principal / secondaire / atténué | `#ece4d3` / `#c8c0b0` / `#8a8298` |
| Lignes, axes, grilles | `rgba(236, 228, 211, 0.16)` |
| Accents (dans l'ordre de préférence) | orange `#ff6b35`, bleu `#5b8def`, ambre `#f5b342`, vert `#4ade80`, magenta `#d946ef`, violet `#a78bfa`, cyan `#06b6d4`, rouge `#fb7185` |
| Police | une sérif (DejaVu Serif sous matplotlib — proche du Spectral de l'app) |

**Recette matplotlib éprouvée :** `figsize` ≈ (11, 5) à (11, 7), `dpi=110`, titre dans l'image (`fig.text`, ~14 pt), sous-légende italique en pied (~9,5 pt, couleur atténuée), puis **quantisation à 128 couleurs** avant sauvegarde (`PIL : im.quantize(colors=128)`) → un schéma pèse **15 à 30 Ko** au lieu de 150+.

```python
import matplotlib; matplotlib.use('Agg')
import matplotlib.pyplot as plt
plt.rcParams.update({'font.family': 'DejaVu Serif', 'text.color': '#ece4d3',
  'axes.labelcolor': '#c8c0b0', 'xtick.color': '#c8c0b0', 'ytick.color': '#c8c0b0',
  'axes.edgecolor': (0.93, 0.89, 0.83, 0.16), 'figure.facecolor': '#12121e',
  'axes.facecolor': '#12121e', 'savefig.facecolor': '#12121e'})
```

**Hotspots calculés, pas devinés** — convertir les coordonnées de données en pourcentages de la figure :

```python
def pct(fig, ax, x, y):
    X, Y = fig.transFigure.inverted().transform(ax.transData.transform((x, y)))
    return round(X * 100, 1), round((1 - Y) * 100, 1)   # y inversé (0 = haut)
```

**Sujets qui s'y prêtent bien** : échelles et ordres de grandeur (axe log annoté), spectres et gradients, courbes de fonctions avec points remarquables, diagrammes espace-temps, cycles (eau, carbone, Krebs), coupes (Terre, cellule, volcan), cartes stylisées, chronologies visuelles. **Vérifier le rendu** (relire l'image générée) avant d'intégrer : chevauchements de labels et texte coupé sont les défauts classiques.

### B. Photos (workflow en deux temps, avec l'utilisateur)

Claude ne peut pas télécharger d'images depuis le web pendant la génération. Le workflow est donc :

1. **Côté génération (chat)** : Claude identifie **au minimum 3 photos** pertinentes (davantage si le sujet est visuel) et fournit à l'utilisateur des **sources libres de droits précises** (Wikimedia Commons, NASA/ESA — domaine public ou CC), sous forme de **liste numérotée de liens** en fin de livraison, avec pour chaque lien l'image exacte à prendre. L'utilisateur télécharge et glisse les fichiers dans la conversation ; Claude (ou Cowork) identifie chaque image à son contenu, la redimensionne et la dépose. Dans la fiche, chaque widget référence le chemin **prévu** :

```js
{
  type: 'widget',
  composant: 'SchemaAnnote',
  titre: 'La nébuleuse du Crabe',
  params: {
    image: 'images/nebuleuses--crabe-hubble.jpg',   // convention : {slug-du-sujet}--{nom}.jpg
    legende: 'Rémanent de la supernova de 1054, vu par Hubble. (NASA/ESA, domaine public)',
    hotspots: []    // [] = simple image légendée ; ou des hotspots si des détails méritent annotation
  }
}
```

2. **Côté intégration (Cowork)** : l'utilisateur dépose les photos téléchargées ; Cowork les **redimensionne** (bord long ≤ 1200 px, JPEG qualité ~80, cible ≤ 200 Ko), les nomme selon la convention `{slug}--{nom}.jpg`, les place dans `images/`, et vérifie l'affichage. Le script de snapshot ajoute automatiquement le dossier `images/` au cache hors-ligne.

**Règles :**
- Uniquement des images **libres de droits** (domaine public, CC0, CC-BY avec crédit). Le crédit va dans la `legende`.
- Pas de photo « décorative » générique ; pas de photo de personne vivante identifiable hors contexte encyclopédique.
- Si la photo n'est pas encore déposée, l'app affiche une image cassée : c'est attendu, elle apparaîtra dès le dépôt. Le mentionner à l'utilisateur en livrant la fiche.

### C. Choisir entre schéma, photo… et rien

- Le **schéma** montre un *mécanisme*, une *relation*, une *échelle* → générable, précis, dans la charte.
- La **photo** montre une *réalité singulière* (cette œuvre, ce monument, cette galaxie) qu'un dessin trahirait.
- Un `GrilleCartes`, une `Frise` ou un `TableauComparatif` remplacent avantageusement un visuel quand l'information est déjà structurée.
- En cas de doute : pas d'image.

---

## 9. Le bloc `quiz`

```js
quiz: [
  {
    q: 'De quoi dépend la vitesse de libération d\'un astre ?',  // [requis] énoncé
    options: [                          // [requis] tableau de 2 à 6 propositions
      'Uniquement de sa masse',
      'Uniquement de sa température',
      'De sa masse et de sa compacité',
      'De sa vitesse de rotation'
    ],
    correcte: 2,                        // [requis] index 0-based de la bonne réponse
    explication: 'Plus un astre est massif et compact, plus la vitesse de libération est grande.'  // [requis] s'affiche après la réponse
  },
  // ... 5 à 10 questions idéalement
]
```

**Règles :**
- `correcte` est strictement entre 0 et `options.length - 1`. Une erreur ici fait planter la question.
- Pas de markdown dans `q`, `options[]` ni `explication` — ce sont des chaînes texte simple.
- Couvre les principales idées du cours, pas les détails anecdotiques.
- **Varie la position de la bonne réponse** (index 0, 1, 2, 3…) : les options ne sont pas mélangées à l'affichage.

### 9.1. Autres types de questions

Le champ `type` (défaut `'qcm'`) permet quatre autres formats, mélangeables dans le même tableau `quiz`. Ils sont utilisables tels quels dans le quiz de la fiche, le quiz mixte, la révision et le mode Champion.

```js
// Vrai / Faux
{ type: 'vrai-faux', affirmation: 'Un photon a une masse très faible mais non nulle.', reponse: false,
  explication: 'Le photon n\'a aucune masse : c\'est précisément pour cela qu\'il se déplace à c.' },

// Remettre dans l'ordre chronologique — `items` est l'ORDRE CORRECT, l'app mélange à l'affichage
{ type: 'ordre-chrono', q: 'Remets ces jalons dans l\'ordre.',
  items: ['Équations de Maxwell (1865)', 'Relativité restreinte (1905)', 'Métrique d\'Alcubierre (1994)'],
  explication: 'Maxwell → Einstein → Alcubierre.' },

// Texte à trou — chaque {motif} devient un champ ; comparaison insensible à la casse et aux accents
{ type: 'texte-a-trou', texte: 'La vitesse de la lumière vaut environ {300000} km/s.',
  explication: '299 792 km/s exactement.' },

// Associer — les « droites » sont mélangées dans des listes déroulantes
{ type: 'associer', q: 'Associe chaque notion à son auteur.',
  paires: [ { gauche: 'Métrique de distorsion', droite: 'Alcubierre' },
            { gauche: 'Protection chronologique', droite: 'Hawking' },
            { gauche: 'Trous de ver traversables', droite: 'Thorne' } ],
  explication: '…' }
```

- Un texte-à-trou n'accepte qu'une réponse par trou : choisis un mot sans variante orthographique probable.
- 2 à 5 items pour `ordre-chrono`, 3 à 5 paires pour `associer`.

---

## 9bis. Le bloc `vocabulaire` (mini-glossaire du sujet)

Une **liste curatée** de 5 à 10 termes-clés du sujet, chacun accompagné d'une vraie définition autoporteuse (1-2 phrases). Le carnet agrège tous les `vocabulaire` de tous les sujets en un **lexique transverse** consultable depuis l'entrée *Vocabulaire* de la sidebar, avec mode flashcards de révision.

```js
vocabulaire: [
  {
    terme: 'Plus-value',
    definition: 'Concept central de l\'analyse marxiste : différence entre la valeur produite par le travail du salarié et la rémunération versée. Source structurelle du profit dans le capitalisme.'
  },
  {
    terme: 'Main invisible',
    definition: 'Métaphore d\'**Adam Smith** (*Recherches sur la nature et les causes de la richesse des nations*, 1776) : la poursuite par chacun de son intérêt personnel produit, sans intention collective, l\'ordre économique le plus efficace.'
  },
  // ... 5 à 10 entrées
]
```

**Règles strictes :**
- `terme` : le mot ou l'expression à retenir. Une seule forme par entrée. Préfère la majuscule pour les noms propres (*Adam Smith*, *Plus-value*), minuscule pour les concepts communs (*main invisible*).
- `definition` : 1 à 2 phrases **autoporteuses**. Quelqu'un qui lit cette définition seule doit comprendre le concept sans avoir besoin de lire le sujet entier. Markdown-lite supporté (`**gras**`, `*italique*`, `[terme]{accent}`, `` `code` ``, `[[slug]]`).
- **Curation, pas exhaustivité** : 5 à 10 termes maximum. Choisis les concepts les plus importants, ceux qui méritent d'être mémorisés pour eux-mêmes.
- Évite les termes anecdotiques (dates, événements isolés, noms propres ponctuels).
- Si un même terme apparaît dans plusieurs sujets (ex. `Improvisation` dans `jazz` et `le-rap`), le lexique global affichera les **deux définitions complémentaires** — c'est voulu, ça enrichit.
- **Ton** : posé, dense, autoporteur. Pas de "voir le sujet pour plus de détails", pas de référence à des passages externes — la définition doit se suffire.

---

## 10. Style et ton

L'app a une voix : **élégante, dense, posée, à la fois rigoureuse et émerveillée**. Reproduis-la.

- **Tutoiement neutre ou voix narrative impersonnelle**, pas de "vous". Évite "imaginez", "découvrons ensemble", etc. — ton trop scolaire.
- **Phrases courtes alternant avec quelques longues** pour le rythme.
- **Emphase typographique** : un mot-clé ou deux par paragraphe avec `**gras**`. Un concept central avec `[terme]{accent}` à sa première mention.
- **Pas de listes à puces dans `contenu_md`** sauf si vraiment nécessaire (le rendu n'est pas géré). Préfère du texte structuré en paragraphes.
- **Pas d'emoji** dans le contenu (réservé à l'interface).
- **Citations et chiffres précis** quand pertinents (dates, ordres de grandeur, noms de lois) — c'est ce qui donne du poids.
- **Dimensionnement** : un sujet typique fait 10 à 16 blocs `cours` (mélange texte / encadre / widget, au moins 2-3 widgets **dont 1 `Prediction` et 1-2 `mini-quiz`**), 8 à 10 questions de quiz (dont 1 ou 2 d'un autre type que QCM), 12 à 20 nœuds de carte mentale sur 2-3 niveaux (max 7 enfants par nœud, labels ≤ 25 caractères), 6 à 10 termes de vocabulaire.
- **Dates de Frise** : formats reconnus par la Timeline globale : `1789`, `-450`, `~2500 av. J.-C.`, `117 ap. J.-C.`, `XVᵉ siècle`, `IXᵉ-Xᵉ s.`, `IVe millénaire av. J.-C.`, `1914-1918`, `1954-55`, `26 avril 1986`, `Années 1990-2000`, `il y a 300 000 ans`, `3,5 Ga`, `470 Ma`, `9 thermidor an II`. Une date libre (« Waterloo », « Jour 1 ») reste affichée dans la fiche mais est ignorée par la Timeline.

---

## 11. Erreurs courantes à éviter

1. ❌ `<strong>` ou `<em>` dans `contenu_md` → ❌ apparaît en littéral. Utilise `**gras**` et `*italique*`.
2. ❌ Apostrophe non échappée en chaîne single-quote : `'l'app'` → erreur de syntaxe. Utilise des template literals (backticks) ou échappe : `'l\'app'`.
3. ❌ `correcte` qui dépasse `options.length - 1` → la question plante.
4. ❌ Backticks non échappés dans un `contenu_md` écrit en template literal (`` `…` ``) : le `` `code` `` inline doit s'écrire `` \`code\` `` → sinon erreur de syntaxe.
5. ❌ Markdown (`**`, `` ` ``) dans un champ texte brut (quiz, titres de seuils, légendes…) → affiché littéralement.
6. ❌ `meta.id` qui ne correspond pas au nom de fichier → confusion.
7. ❌ Référence dans `liens` (`de`, `vers`) à un `id` de nœud qui n'existe pas → le lien est silencieusement ignoré.
8. ❌ `lie_a` / `prerequis` pointant vers un id qui n'existe pas dans `sujets/` → lien mort. Vérifie la liste des fichiers existants.
9. ❌ Toutes les bonnes réponses du quiz au même index → quiz devinable.

---

## 12. Checklist avant de livrer le fichier

- [ ] Le fichier compile (pas d'erreur de syntaxe — pas de virgule manquante, pas d'apostrophe non échappée).
- [ ] `meta.id` est unique, kebab-case, identique au nom du fichier.
- [ ] `meta.titre` est défini, peut contenir `<em>...</em>`.
- [ ] `meta.difficulte` est 1, 2 ou 3.
- [ ] `meta.domaines` est un tableau d'au moins un élément.
- [ ] `resume` est 1-3 phrases.
- [ ] 4-8 `points_cles` courts.
- [ ] `carte_mentale` a un `central` qui pointe vers un nœud existant.
- [ ] Tous les `liens` réfèrent à des nœuds existants.
- [ ] 10-16 blocs de `cours` mélangeant texte, encadré et widgets — **dont au moins 1 `Prediction` (placée avant la réponse) et 1-2 `mini-quiz`** ; aucun widget-décoration.
- [ ] 5-10 questions de `quiz` avec `correcte` valide.
- [ ] 5-10 entrées de `vocabulaire` avec définitions autoporteuses.
- [ ] Aucun `<script>`, aucun `fetch()`, aucune dépendance externe.
- [ ] Le fichier a été chargé une fois dans un moteur JS (`node -e "global.window={CarnetDeSavoirs:{register(){}}}; require('./slug.js')"`) sans erreur.
- [ ] `lie_a` ne référence que des ids existants ; les `[[slug]]` aussi.
- [ ] **Au moins 3 photos** (chemins `images/{slug}--nom.jpg`, crédit en légende, liste de liens de téléchargement fournie avec la livraison) + 1 à 2 schémas générés si le propos s'y prête (charte graphique, hotspots calculés, images relues).

Une fois ces points cochés, tu peux livrer le fichier à l'utilisateur qui l'ajoutera à son atelier via Cowork.

---

*v1.4 — réf pour génération de sujets, août 2026 (v1.3 + widgets pédagogiques : règle « un widget = une intention », widget `Prediction` obligatoire, mini-quiz obligatoires, auto-test GrilleCartes et Frise)*
