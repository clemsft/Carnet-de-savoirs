# Briefing — Déploiement & maintenance du Carnet de Savoirs

> Document à fournir au Claude côté Cowork pour qu'il prenne en charge le déploiement local de l'app et sa maintenance dans le temps.

---

## 1. Contexte

**Le projet :** *Carnet de Savoirs* — une application web locale single-folder, autonome, qui sert d'**atelier d'apprentissage personnel** à son utilisateur. Chaque sujet exploré dans une discussion avec Claude devient une fiche multi-vues (résumé, cours interactif, quiz, carte mentale) consultable durablement.

**Conception :** vanilla JS, pas de build step, pas de serveur, pas d'API externe. L'app fonctionne en ouvrant `index.html` directement dans un navigateur (`file://`). Toutes les données utilisateur sont en `localStorage`.

**État actuel :** v1 livrée, fonctionnelle, avec un premier sujet (*Trous noirs*) déjà intégré.

---

## 2. Architecture

```
CarnetDeSavoirs/
├── index.html           ← Point d'entrée (à ouvrir)
├── styles.css           ← Design system (1 100 lignes)
├── app.js               ← Cœur (state, routing, widgets, persistance — 1 200 lignes)
├── README.md
└── sujets/
    └── trous-noirs.js   ← Un fichier .js par sujet
```

**Mécanique d'enregistrement des sujets :** chaque fichier dans `sujets/` est un script qui s'auto-enregistre dans l'app via `window.CarnetDeSavoirs.register({...})`. L'app les charge via des balises `<script>` listées dans `index.html`.

---

## 3. Tâches initiales attendues côté Cowork

### a. Déploiement local

1. **Décompresser** `CarnetDeSavoirs.zip` (joint à cette conversation) à un emplacement choisi par l'utilisateur sur son poste Windows. Suggestion :
   - `C:\Users\<utilisateur>\Documents\CarnetDeSavoirs\`
   - ou un dossier de synchronisation cloud si l'utilisateur le souhaite.
2. **Créer un raccourci** vers `index.html` sur le bureau ou dans le menu Démarrer pour ouverture en un clic.
3. **Vérifier** que l'app s'ouvre correctement dans son navigateur par défaut et que le sujet *Trous noirs* est bien chargé (4 onglets fonctionnels : Résumé, Cours, Quiz, Carte mentale).

### b. Validation rapide

Demander à l'utilisateur de tester :
- L'ouverture du sujet *Trous noirs*
- Le widget interactif "Curseur de masse stellaire" dans l'onglet Cours
- Une session complète du quiz (vérifie que le score est bien sauvegardé)
- L'export des données depuis le profil (génération d'un fichier JSON)

---

## 4. Workflow récurrent (le cœur du job de Cowork)

À chaque nouvelle discussion d'apprentissage entre l'utilisateur et Claude (côté chat.claude.ai), un nouveau sujet doit être ajouté à l'app. Voici la procédure :

### Étape 1 — Réception du fichier sujet

Claude (côté chat) génère un fichier `{nom-slug}.js` (ex. `relativite-restreinte.js`). L'utilisateur le récupère et le partage avec toi (Cowork).

### Étape 2 — Placement du fichier

Le placer dans le dossier `sujets/` du projet :
```
CarnetDeSavoirs/sujets/{nom-slug}.js
```

### Étape 3 — Enregistrement dans index.html

Ajouter une balise script juste avant le commentaire `<!-- ============ DÉMARRAGE ============ -->` dans `index.html` :

```html
<script src="sujets/{nom-slug}.js"></script>
```

L'ordre des balises n'a pas d'importance (chaque sujet est indépendant). Mais tu peux maintenir un ordre alphabétique ou chronologique pour la lisibilité.

### Étape 4 — Validation

Ouvrir `index.html` (rafraîchir si déjà ouvert) et vérifier :
- Le nouveau sujet apparaît dans la bibliothèque
- Son badge de domaine s'affiche avec la bonne couleur
- Il est cliquable et ses 4 onglets se chargent sans erreur console

Si erreur : ouvrir la console navigateur (F12), copier le message, et le partager pour correction.

---

## 5. Modèle de données d'un sujet (référence)

Voir `sujets/trous-noirs.js` pour un exemple complet et commenté. Structure générale :

```js
window.CarnetDeSavoirs.register({
  meta: {
    id: 'mon-sujet',                // identifiant unique (slug)
    titre: 'Mon <em>sujet</em>',    // <em> autorisé pour mise en italique
    domaines: ['Astrophysique'],
    tags: ['relativité'],
    difficulte: 2,                  // 1, 2 ou 3
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: [],
    date_creation: '2026-05-09',
    date_maj: '2026-05-09'
  },
  resume: '...',
  points_cles: ['...', '...'],
  carte_mentale: { central, noeuds, liens },
  cours: [ /* blocs de cours */ ],
  quiz: [ /* questions QCM */ ]
});
```

**Types de blocs de cours** : `texte`, `encadre`, `widget`, `html_libre`.

**Widgets disponibles** : `SelecteurValeurs`, `CurseurParametrique`, `GrilleCartes`, `ListeMethodes`.

Documentation complète : voir `README.md` joint et commentaires dans `app.js`.

---

## 6. Domaines & couleurs

Couleurs prédéfinies dans `styles.css` (variables CSS `--d-{slug}`) :

| Domaine | Slug | Couleur |
|---|---|---|
| Astrophysique | `astrophysique` | `#ff6b35` (orange feu) |
| Physique | `physique` | `#5b8def` (bleu cobalt) |
| Mathématiques | `mathematiques` | `#d946ef` (magenta) |
| Histoire | `histoire` | `#f5b342` (ambre) |
| Biologie | `biologie` | `#4ade80` (vert) |
| Philosophie | `philosophie` | `#a78bfa` (violet) |
| Informatique | `informatique` | `#06b6d4` (cyan) |
| Littérature | `litterature` | `#fb7185` (rose) |

**Pour ajouter un nouveau domaine** : ajouter une variable CSS dans `styles.css` (section `:root`), puis utiliser ce nom de domaine dans le tableau `meta.domaines` du sujet. Le slug est obtenu en minusculisant et retirant accents/caractères non-alphabétiques.

---

## 7. Sauvegarde

Les données utilisateur (progression, scores, favoris, notes) sont en `localStorage` du navigateur uniquement. **Il est recommandé de proposer à l'utilisateur un export régulier** (depuis l'app : *Mon profil → Exporter mes données*) sauvegardé dans un dossier de backup.

Suggestion à mettre en place : tâche planifiée Cowork qui rappelle à l'utilisateur tous les mois de faire un export manuel.

---

## 8. Points d'attention

- **Pas d'API ni de fetch externe** dans l'app. Toute interactivité est locale. Si une fonctionnalité nécessite du réseau (ex. chargement d'une police Google Fonts), elle doit pouvoir échouer sans casser l'app.
- **Compatibilité navigateur** : le CSS utilise `color-mix()` (Chrome 111+, Firefox 113+, Safari 16.2+). À jour, ça passe partout.
- **Caractères spéciaux dans les fichiers JS** : les sujets utilisent abondamment l'apostrophe française (`l'app`, `c'est`...). Les chaînes JS sont délimitées par des backticks (template literals) ou des single quotes échappées. Vérifier qu'aucun encodage UTF-8 BOM n'est ajouté en sauvegardant.

---

## 9. Suite envisagée (roadmap libre, non urgente)

- Carte globale en graphe force-directed (au lieu des clusters actuels) quand la bibliothèque dépassera ~10 sujets
- Système de prérequis avec parcours suggérés
- Nouveaux widgets : `Frise` (chronologique), `SchemaAnnote` (image + hotspots), `Equation` (rendu LaTeX si besoin pour les sujets de physique/maths)
- Mode hors-ligne complet (Service Worker pour cacher les Google Fonts)

À discuter au cas par cas selon les besoins qui émergeront avec les nouveaux sujets.

---

*v1.0 — Conçu avec Claude, mai 2026*
