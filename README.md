# Carnet de Savoirs

> Atelier d'apprentissage personnel — single-file local, sans serveur, sans API.

## Ouvrir l'app

Double-cliquer sur `index.html`. Aucune installation nécessaire.

L'app fonctionne en local (protocole `file://`). Toutes les données utilisateur (progression, scores, favoris, notes) sont stockées dans le **localStorage** du navigateur. Pour les sauvegarder ou transférer sur un autre appareil, utiliser **Mon profil → Exporter mes données**.

## Structure des fichiers

```
CarnetDeSavoirs/
├── index.html           ← Point d'entrée (à ouvrir)
├── styles.css           ← Design system
├── app.js               ← Cœur de l'app (state, routing, widgets)
└── sujets/
    └── trous-noirs.js   ← Un fichier .js par sujet
```

## Workflow d'ajout d'un nouveau sujet (Claude + Cowork)

À chaque nouvelle discussion d'apprentissage avec Claude :

**1. Claude génère** un fichier `sujets/{nom-sujet}.js` qui s'auto-enregistre dans l'app via `window.CarnetDeSavoirs.register({...})`.

**2. Cowork place le fichier** dans le dossier `sujets/`.

**3. Cowork ajoute une ligne** dans `index.html`, juste avant le commentaire `<!-- ============ DÉMARRAGE ============ -->` :
```html
<script src="sujets/{nom-sujet}.js"></script>
```

**4. Au prochain rechargement** de l'app, le sujet apparaît automatiquement dans la bibliothèque, intégré aux filtres par domaine et à la carte globale.

## Modèle de données d'un sujet

Voir `sujets/trous-noirs.js` pour un exemple complet et commenté.

Structure générale :
```js
window.CarnetDeSavoirs.register({
  meta: {
    id: 'mon-sujet',                // identifiant unique (slug)
    titre: 'Mon <em>sujet</em>',    // <em> autorisé pour mise en italique
    domaines: ['Astrophysique'],    // un ou plusieurs
    tags: ['relativité'],
    difficulte: 2,                  // 1, 2 ou 3
    duree_estimee_min: 25,
    prerequis: [],                  // ids d'autres sujets (futur)
    lie_a: [],                      // ids d'autres sujets (futur)
    date_creation: '2026-05-09',
    date_maj: '2026-05-09'
  },
  resume: '...',                    // affiché en carte et en intro de sujet
  points_cles: ['...', '...'],      // pour l'onglet Résumé
  carte_mentale: { central, noeuds, liens },
  cours: [ /* blocs de cours */ ],
  quiz: [ /* questions QCM */ ]
});
```

## Types de blocs de cours disponibles

- `texte` — paragraphe avec markdown léger (gras, italique, [terme]{accent})
- `encadre` — bloc à retenir / point-clé
- `widget` — composant interactif (voir liste ci-dessous)
- `html_libre` — HTML/SVG/JS arbitraire pour interactivité unique au sujet

## Bibliothèque de widgets

| Composant | Usage |
|-----------|-------|
| `SelecteurValeurs` | Boutons → affichage d'une valeur + description |
| `CurseurParametrique` | Slider qui change le résultat selon des seuils |
| `GrilleCartes` | Petites cartes côte à côte (comparaison, classification) |
| `ListeMethodes` | Liste numérotée avec titre + description |

Chaque widget est documenté dans `app.js` avec exemples de paramètres.

## Couleurs des domaines

Définies dans `styles.css`. Pour ajouter un nouveau domaine, ajouter une variable CSS `--d-{nom-slug}` :

```css
--d-astrophysique:  #ff6b35;   /* orange feu */
--d-physique:       #5b8def;   /* bleu cobalt */
--d-mathematiques:  #d946ef;   /* magenta */
--d-histoire:       #f5b342;   /* ambre */
--d-biologie:       #4ade80;   /* vert */
--d-philosophie:    #a78bfa;   /* violet */
--d-informatique:   #06b6d4;   /* cyan */
--d-litterature:    #fb7185;   /* rose */
```

Le slug est obtenu en minusculisant le nom du domaine, retirant les accents et caractères non-alphabétiques. Ex. : "Mathématiques" → `mathematiques` → variable `--d-mathematiques`.

## Roadmap (évolutions possibles)

- Carte globale en graphe interactif (force-directed) plutôt qu'en clusters
- Système de prérequis avec chemins d'apprentissage suggérés
- Widget `Frise` (chronologique) et `SchemaAnnote` (image avec hotspots)
- Mode hors-ligne (Service Worker)
- Mode "révision espacée" pour les quiz (façon Anki)

---

*v1.0 — Conçu et construit avec ✦ et Claude*
