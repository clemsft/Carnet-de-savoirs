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
  quiz: [ /* ... */ ]
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

Dans **toutes les chaînes contenant du contenu rédactionnel** (`points_cles[]`, `cours[].contenu_md`, `cours[].cartes[].description` du widget GrilleCartes, `cours[].methodes[].description` du widget ListeMethodes, `carte_mentale.noeuds[].description`, `cours[].seuils[].description` du widget CurseurParametrique), tu peux utiliser :

| Syntaxe              | Rendu                                       |
|----------------------|---------------------------------------------|
| `**gras**`           | **gras** (mot clé important)                |
| `*italique*`         | *italique* (subtil)                         |
| `` `code` ``         | `monospace` (terme technique)               |
| `[terme]{accent}`    | terme **dans la couleur d'accent du sujet** |
| `[[slug-du-sujet]]`  | **lien navigable** vers la fiche dont `meta.id == slug-du-sujet`. Si ce sujet n'existe pas (encore) dans le carnet, le lien s'affiche en gris atténué pour signaler le sujet manquant. |
| Lignes vides         | nouveau paragraphe                          |
| Retour à la ligne    | `<br>` (saut de ligne sans nouveau paragraphe) |

**Le HTML brut n'est pas interprété** dans ces zones (sauf dans le `titre` des blocs où `<em>` est autorisé). Les caractères `<`, `>`, `&` sont échappés.

**Recommandation** : utilise `[terme]{accent}` avec parcimonie pour les concepts les plus importants — c'est puissant car la couleur attire l'œil.

---

## 7. Le bloc `cours` — types de blocs

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

Un composant interactif. Voir §8 pour les 7 composants disponibles.

```js
{
  type: 'widget',
  titre: 'Sélectionnez un astre pour visualiser sa vitesse de libération',  // [optionnel]
  composant: 'SelecteurValeurs',        // un des 7 noms de §8
  params: { /* params spécifiques au composant */ }
}
```

### 7.4. `type: 'html_libre'`

Échappatoire pour insérer du HTML brut. **À éviter sauf nécessité**. Si tu y recours, vérifie que le HTML est self-contained et ne dépend de rien d'externe.

```js
{
  type: 'html_libre',
  contenu: '<div style="...">...</div>'
}
```

---

## 8. Les 7 widgets disponibles

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

- `valeur` peut être un nombre (formaté automatiquement avec espaces en milliers en français) ou une chaîne.
- `description` est en texte simple (pas de markdown lite ici).
- 3 à 8 options idéalement.

### 8.2. `CurseurParametrique`

Un curseur (slider) qui révèle un résultat différent selon des seuils.

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

- L'ordre des seuils compte : on prend le premier dont `jusqua > valeur courante`. Termine toujours par un seuil avec `jusqua: Infinity`.
- 2 à 4 seuils idéalement.

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

- `image` est une **data URL base64** : `data:image/png;base64,…` ou `data:image/jpeg;base64,…`. Encode l'image en base64 (outils en ligne abondants) et colle le résultat. Reste self-contained dans le `.js`.
- `x` et `y` sont des **pourcentages** (0-100) de la dimension de l'image (x depuis la gauche, y depuis le haut).
- Chaque hotspot apparaît comme un cercle numéroté orange. Clic = la carte de description s'affiche en bas de l'image.
- 3 à 8 hotspots idéalement. Au-delà, l'image devient trop chargée.
- **Taille image recommandée** : ≤ 300 KB en base64 (= ~225 KB binaire). Au-delà, le `.js` du sujet devient lourd à charger.

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

---

## 10. Style et ton

L'app a une voix : **élégante, dense, posée, à la fois rigoureuse et émerveillée**. Reproduis-la.

- **Tutoiement neutre ou voix narrative impersonnelle**, pas de "vous". Évite "imaginez", "découvrons ensemble", etc. — ton trop scolaire.
- **Phrases courtes alternant avec quelques longues** pour le rythme.
- **Emphase typographique** : un mot-clé ou deux par paragraphe avec `**gras**`. Un concept central avec `[terme]{accent}` à sa première mention.
- **Pas de listes à puces dans `contenu_md`** sauf si vraiment nécessaire (le rendu n'est pas géré). Préfère du texte structuré en paragraphes.
- **Pas d'emoji** dans le contenu (réservé à l'interface).
- **Citations et chiffres précis** quand pertinents (dates, ordres de grandeur, noms de lois) — c'est ce qui donne du poids.
- **Dimensionnement** : un sujet typique fait 5 à 10 blocs `cours` (mélange texte / encadre / widget), 5 à 8 questions de quiz, 6 à 10 nœuds de carte mentale.

---

## 11. Erreurs courantes à éviter

1. ❌ `<strong>` ou `<em>` dans `contenu_md` → ❌ apparaît en littéral. Utilise `**gras**` et `*italique*`.
2. ❌ Apostrophe non échappée en chaîne single-quote : `'l'app'` → erreur de syntaxe. Utilise des template literals (backticks) ou échappe : `'l\'app'`.
3. ❌ `correcte` qui dépasse `options.length - 1` → la question plante.
4. ❌ Oublier `jusqua: Infinity` sur le dernier seuil de `CurseurParametrique` → les valeurs hautes ne matchent rien.
5. ❌ `meta.id` qui ne correspond pas au nom de fichier → confusion.
6. ❌ Référence dans `liens` (`de`, `vers`) à un `id` de nœud qui n'existe pas → le lien est silencieusement ignoré.

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
- [ ] 5-10 blocs de `cours` mélangeant texte, encadré et au moins un widget.
- [ ] 5-10 questions de `quiz` avec `correcte` valide.
- [ ] Aucun `<script>`, aucun `fetch()`, aucune dépendance externe.

Une fois ces points cochés, tu peux livrer le fichier à l'utilisateur qui l'ajoutera à son atelier via Cowork.

---

*v1.0 — réf pour génération de sujets, mai 2026*
