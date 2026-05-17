/* ===================================================================
   PARCOURS — La pensée du monde
   ===================================================================
   Cinq étapes qui montent depuis une éthique antique jusqu'aux théories
   physiques les plus spéculatives — comment penser ce qui est, des
   passions humaines aux cordes vibrantes.
   =================================================================== */

window.CarnetDeSavoirs.registerParcours({
  meta: {
    id: 'pensee-du-monde',
    titre: 'La <em>pensée</em> du monde',
    domaine: 'Philosophie et physique',
    description: `Penser le monde, c'est articuler deux gestes : se gouverner soi-même et formaliser ce qui est. Le parcours commence par le **stoïcisme**, qui propose une discipline intérieure face à ce qui dépasse l'humain, puis bascule vers l'abstraction mathématique avec l'**infini** et les **probabilités**, avant de plonger dans les deux grandes révolutions physiques du XXᵉ siècle — **quantique** et **relativité** — et leur tentative d'unification dans la **théorie des cordes**. Six fiches pour suivre comment la raison humaine s'aventure de plus en plus loin de l'expérience ordinaire.`,
    duree_estimee_min: 235
  },
  etapes: [
    {
      slug: 'stoicisme',
      note: `Le point de départ est éthique. Le **stoïcisme** propose une distinction fondatrice — ce qui dépend de toi, ce qui n'en dépend pas — et une discipline intérieure pour vivre en accord avec la **nature**. C'est la première forme de pensée qui consiste à se tenir à hauteur du cosmos.`
    },
    {
      slug: 'infini-mathematiques',
      note: `Pour penser le cosmos, il faut un langage. Les mathématiques en ont forgé un — et l'**infini** en est la pièce la plus vertigineuse. De Cantor aux différentes tailles d'infinis, la pensée mathématique prouve qu'on peut **raisonner** rigoureusement sur ce qu'on ne peut pas dénombrer.`
    },
    {
      slug: 'probabilites',
      note: `Même langage, autre extrême : non plus l'infini mais le **hasard**. De **Pascal et Fermat** (1654) à **Kolmogorov** (1933), les mathématiques apprivoisent ce qui semblait par essence échapper au calcul. Bayes, courbe en cloche, espérance — autant d'outils sans lesquels la mécanique quantique de l'étape suivante serait littéralement impensable.`
    },
    {
      slug: 'mecanique-quantique',
      note: `Premier choc physique du XXᵉ siècle : à l'échelle des atomes, la nature cesse d'être [déterministe]{accent}. La **mécanique quantique** introduit les probabilités, la superposition, l'intrication. Le réel devient quelque chose qu'on ne peut décrire qu'en termes statistiques — rupture profonde avec l'intuition classique.`
    },
    {
      slug: 'theorie-relativite',
      note: `Second choc, à l'autre bout de l'échelle. **Einstein** lie espace et temps en une seule structure que la masse déforme. La **relativité** explique l'orbite de Mercure, les trous noirs et la dilatation temporelle des satellites GPS — mais elle reste incompatible avec la quantique vue à l'étape précédente.`
    },
    {
      slug: 'theorie-des-cordes',
      note: `Dernier étage, le plus spéculatif. La **théorie des cordes** tente d'unifier quantique et relativité en postulant que les particules sont des cordes vibrantes dans un espace à dix ou onze dimensions. Aucune confirmation expérimentale à ce jour — mais la plus belle tentative actuelle d'une **théorie du tout**.`
    }
  ]
});
