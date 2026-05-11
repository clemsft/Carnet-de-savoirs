/* ===================================================================
   SUJET — La conquête spatiale moderne
   ===================================================================
   La nouvelle course, entre États et entreprises privées.
   Domaines : Espace, Géopolitique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'conquete-spatiale-moderne',
    titre: 'La <em>conquête spatiale</em> moderne',
    domaines: ['Espace', 'Géopolitique'],
    tags: ['nasa', 'spacex', 'lune', 'mars', 'artemis', 'starship'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['trous-noirs', 'ia-generative'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Comprendre la nouvelle course à l\'espace : pourquoi le retour sur la Lune ressemble à une compétition géopolitique, comment SpaceX a bouleversé l\'économie du lancement, et où Mars s\'inscrit réellement dans l\'horizon des prochaines décennies.',

  points_cles: [
    'Une **deuxième course à l\'espace** est en cours, cette fois entre les **États-Unis** et la **Chine** — les deux puissances visent l\'établissement d\'une présence permanente sur la Lune.',
    'Le programme **Artemis** de la NASA a réussi en avril **2026** son premier vol habité circumlunaire (Artemis II), premier humain au-delà de l\'orbite basse depuis Apollo 17 en 1972.',
    'Le coût de mise en orbite a chuté d\'un facteur **30** en deux décennies, principalement grâce à la **réutilisabilité** introduite par SpaceX avec Falcon 9.',
    'Le **Starship** de SpaceX, plus grand lanceur jamais construit, a réussi son 11ᵉ vol fin 2025 et entre dans sa version V3 en 2026.',
    'La **Chine** vise un alunissage habité avant 2030, dans le cadre de son programme **ILRS** (International Lunar Research Station).',
    'Le **pôle sud lunaire** est l\'enjeu central : c\'est là que se trouvent les réserves d\'eau gelée, indispensables pour une base permanente.',
    'Un **secteur privé** entièrement nouveau (constellations satellitaires, tourisme spatial, exploitation orbitale) a émergé en moins de quinze ans.'
  ],

  carte_mentale: {
    central: 'espace-moderne',
    noeuds: [
      { id: 'espace-moderne', label: 'Conquête moderne', description: 'La nouvelle ère spatiale, entre rivalité géopolitique et révolution privée.' },
      { id: 'acteurs', label: 'Acteurs', description: 'Agences publiques et entreprises privées se partagent désormais le ciel.' },
      { id: 'lune', label: 'Retour sur la Lune', description: 'Programme Artemis (USA) vs ILRS (Chine). Établir une présence permanente.' },
      { id: 'mars', label: 'Cap sur Mars', description: 'Objectif déclaré de SpaceX dès la décennie 2030. Aucune mission habitée encore programmée par la NASA.' },
      { id: 'reuse', label: 'Réutilisabilité', description: 'La rupture économique : faire revenir et réutiliser les fusées au lieu de les jeter.' },
      { id: 'enjeux', label: 'Enjeux', description: 'Géopolitique, militarisation, débris orbitaux, encombrement, exploitation des ressources.' },

      // Acteurs
      { id: 'nasa', label: 'NASA', description: 'Agence pionnière. Concentre désormais ses efforts sur Artemis et l\'exploration scientifique.', parent: 'acteurs' },
      { id: 'spacex', label: 'SpaceX', description: 'Fondée par **Elon Musk** en 2002. A révolutionné le secteur avec Falcon 9 réutilisable, Starship, et Starlink.', parent: 'acteurs' },
      { id: 'chine', label: 'CNSA', description: 'L\'agence chinoise. Station Tiangong opérationnelle depuis 2022. Ambitions lunaires fortes.', parent: 'acteurs' },
      { id: 'esa', label: 'ESA', description: 'Agence européenne. Partenaire d\'Artemis (module Orion, lanceur Ariane 6).', parent: 'acteurs' },
      { id: 'autres', label: 'Autres', description: 'Inde (ISRO, alunissage Chandrayaan-3 en 2023), Japon (JAXA), Émirats, Corée, Israël, Blue Origin, Rocket Lab...', parent: 'acteurs' },

      // Lune
      { id: 'artemis', label: 'Artemis', description: 'Programme américain. **Artemis II** réussi en avril 2026. **Artemis IV** prévu pour le premier alunissage en 2028.', parent: 'lune' },
      { id: 'ilrs', label: 'ILRS', description: '[International Lunar Research Station]{accent}. Programme sino-russe — ambition d\'une base habitée au pôle sud lunaire.', parent: 'lune' },
      { id: 'pole-sud', label: 'Pôle sud lunaire', description: 'Réserves de **glace d\'eau** dans des cratères en ombre permanente. Pics de lumière éternelle pour le solaire. Les deux puissances le visent.', parent: 'lune' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Le grand <em>retour</em>',
      contenu_md:
`Le 14 décembre **1972**, l'astronaute Eugene Cernan repose le pied sur le module lunaire d'Apollo 17 et déclare : *« Nous quittons la Lune comme nous y sommes arrivés, et, si Dieu le veut, nous y reviendrons ».* Il ne savait pas qu'il serait le **dernier humain** à fouler le sol lunaire avant un demi-siècle.

Pendant cinquante ans, l'exploration habitée s'est cantonnée à l'**orbite basse terrestre** — la Station spatiale internationale (ISS), à 400 km d'altitude, à peine plus haut que Paris-Marseille à plat. La Lune est à **384 000 km**. Mars, plus loin encore, à des dizaines de millions de kilomètres selon la position des planètes.

Ce long sommeil prend fin dans les années 2010 et s'accélère brutalement à partir de 2024. Une [nouvelle course]{accent} a commencé — moins symbolique, plus économique, plus géopolitique aussi.`
    },

    {
      type: 'widget',
      titre: 'Quelques jalons de la nouvelle ère spatiale',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '2002', titre: 'Fondation de SpaceX', description: '**Elon Musk** crée SpaceX avec l\'objectif déclaré de coloniser Mars. La majorité des observateurs juge cela délirant.' },
          { date: '2015', titre: 'Premier atterrissage de Falcon 9', description: 'Pour la première fois, un étage orbital revient se poser intact. La **réutilisabilité** des lanceurs devient une réalité industrielle.' },
          { date: '2020', titre: 'Premiers astronautes privés à l\'ISS', description: 'SpaceX (Crew Dragon) emmène des astronautes vers l\'ISS — fin du monopole russe pour les Américains depuis la retraite des navettes en 2011.' },
          { date: '2022', titre: 'Artemis I', description: 'La NASA teste avec succès le lanceur **SLS** et la capsule **Orion** lors d\'un vol inhabité autour de la Lune.' },
          { date: '2023', titre: 'Chandrayaan-3', description: 'L\'**Inde** réussit son alunissage et devient le 4ᵉ pays à se poser sur la Lune. Premier pays à atteindre le pôle sud lunaire.' },
          { date: 'Avril 2026', titre: 'Artemis II', description: 'Premier vol habité circumlunaire depuis 1972. Quatre astronautes (3 NASA + 1 ASC) effectuent un survol de la Lune et reviennent sains et saufs.' },
          { date: 'Fin 2025', titre: '11ᵉ vol Starship', description: 'SpaceX achève une année difficile sur un succès. La V3 du Starship entre en test en 2026.' },
          { date: 'Visé 2028', titre: 'Artemis IV', description: 'Premier alunissage habité du programme Artemis. Le programme a été remanié début 2026 pour ajouter une mission de qualification.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>révolution</em> de la réutilisabilité',
      contenu_md:
`Pendant six décennies, les fusées étaient jetables : on construisait un objet à plusieurs **centaines de millions de dollars**, on l'utilisait une fois, on le laissait retomber à la mer ou se désintégrer dans l'atmosphère. C'est comme s'il fallait jeter un Boeing 747 après chaque vol Paris-New York.

L'idée que les lanceurs pouvaient **revenir** se poser, être inspectés, puis re-voler, semblait techniquement irréaliste — l'énergie en jeu est colossale, et la rentrée atmosphérique brutale. SpaceX a démontré le contraire en **décembre 2015**, en faisant atterrir verticalement le premier étage d'une Falcon 9 sur une plateforme.

Depuis, certains boosters Falcon 9 ont volé **20 fois ou plus**. Le coût par kilo en orbite a chuté de plusieurs ordres de grandeur, ouvrant la voie à des activités jusque-là économiquement impossibles : constellations massives (**Starlink**, plus de 7 000 satellites), industrie de l'observation, tourisme orbital, retour des missions lunaires.

L'atterrissage autonome d'un booster en pleine rentrée atmosphérique repose massivement sur le **contrôle automatique en temps réel** par des algorithmes embarqués (revoir [[ia-generative]] pour les méthodes d'apprentissage qui irriguent aujourd'hui ces systèmes).`
    },

    {
      type: 'widget',
      titre: 'L\'effondrement du coût orbital',
      composant: 'SelecteurValeurs',
      params: {
        unite: '$/kg',
        indexInitial: 0,
        options: [
          { label: 'Saturn V (1969)', valeur: 65000, description: 'Le lanceur d\'Apollo. En dollars actualisés. Pas de réutilisabilité.' },
          { label: 'Navette spatiale', valeur: 54000, description: 'Officiellement réutilisable, mais le coût de remise en état entre vols était astronomique.' },
          { label: 'Ariane 5', valeur: 11000, description: 'Le lanceur européen historique. Jetable.' },
          { label: 'Falcon 9 (réutilisé)', valeur: 2700, description: 'Le booster réutilisable de SpaceX. La rupture économique commence ici.' },
          { label: 'Starship (visé)', valeur: 200, description: 'Objectif déclaré par SpaceX une fois la pleine réutilisabilité atteinte. Ce serait un facteur 300 par rapport à Apollo.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le retour vers la <em>Lune</em>',
      contenu_md:
`Pourquoi y retourner ? Trois raisons s'entrelacent.

**Scientifique** d'abord : la Lune conserve dans ses régolites une **mémoire géologique vieille de 4 milliards d'années**, effacée sur Terre par l'érosion. Ses cratères en ombre permanente abritent de l\'eau gelée datant probablement du système solaire primitif.

**Stratégique** ensuite : l'eau lunaire pourrait servir de carburant (oxygène + hydrogène) pour les missions plus lointaines. La Lune devient alors une **station-service** vers Mars et au-delà — à condition d'y installer l'infrastructure.

**Géopolitique** enfin : les **États-Unis** et la **Chine** ont chacun annoncé leur intention d'établir une base permanente. La Chine vise une présence avant 2030 ; les États-Unis maintiennent l'objectif d'un retour habité durable. Les **accords Artemis** (signés par une cinquantaine de pays) tentent de fixer un cadre de bonne conduite — la Chine et la Russie n'y participent pas.`
    },

    {
      type: 'encadre',
      label: 'Le pôle sud',
      contenu_md: 'Les deux puissances visent la même région exiguë : le [pôle sud lunaire]{accent}. Cratères en ombre permanente où l\'eau peut subsister à l\'état solide depuis des milliards d\'années. Pics voisins en lumière quasi-éternelle, idéaux pour le solaire. Quelques sites seulement combinent ces propriétés. **L\'arrivée première** y a une valeur stratégique réelle, comparable à celle de l\'Antarctique au XXᵉ siècle.'
    },

    {
      type: 'texte',
      titre: 'Et <em>Mars</em> ?',
      contenu_md:
`Mars reste l'horizon mythique. Aucune agence n'a programmé de mission habitée à court terme. La NASA évoque les années 2030, sans calendrier précis. SpaceX, par la voix d'**Elon Musk**, parle régulièrement de premiers vols habités fin 2020s — avec le scepticisme général de la communauté.

Les obstacles sont massifs. Un voyage Terre-Mars dure environ **6 à 9 mois**, avec une fenêtre de retour qui n\'est ouverte que tous les **26 mois** (alignement orbital). Le voyage expose les astronautes à des doses **considérables** de rayonnement cosmique. Les systèmes de support de vie autonomes nécessaires n\'ont jamais été testés en conditions réelles. Et arriver sur place ne résout rien : il faut **redécoller** depuis Mars pour rentrer.

Le pari de SpaceX repose sur le **Starship** — un vaisseau pensé dès l\'origine pour Mars, capable d\'emporter 100 tonnes en orbite, et de se ravitailler en orbite à partir d\'autres Starships pour atteindre la planète rouge.`
    },

    {
      type: 'widget',
      titre: 'Quatre acteurs majeurs',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Public, USA',
            titre: 'NASA',
            description: 'Pionnière, désormais en partenariat étroit avec le privé. Pilote Artemis. Continue les missions robotiques (Perseverance, Europa Clipper).'
          },
          {
            tag: 'Privé, USA',
            titre: 'SpaceX',
            description: 'Devenue en vingt ans la plus grande entreprise spatiale mondiale. Falcon 9, Starship, **Starlink**. Fournisseur central de la NASA.'
          },
          {
            tag: 'Public, Chine',
            titre: 'CNSA',
            description: 'Station spatiale **Tiangong** opérationnelle depuis 2022. Programme lunaire ambitieux. Mission de retour d\'échantillons martiens en préparation.'
          },
          {
            tag: 'Public, Europe',
            titre: 'ESA',
            description: 'Coopération forte avec la NASA. Fournisseur du **module de service** d\'Orion. Lanceur Ariane 6 opérationnel depuis 2024.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>encombrement</em> orbital',
      contenu_md:
`Une conséquence inattendue de la baisse des coûts : **l'orbite basse se sature**. Les constellations Starlink, OneWeb, Kuiper (Amazon) et leurs équivalents chinois (Guowang) projettent des dizaines de milliers de satellites. À cela s'ajoutent les débris : restes d\'anciens étages, satellites éteints, fragments de collisions.

Le risque est celui du [syndrome de Kessler]{accent} — un emballement où les collisions génèrent assez de débris pour provoquer d\'autres collisions, jusqu\'à rendre certaines orbites inutilisables pour des décennies. Le sujet, encore largement ignoré du grand public, est devenu central pour les agences spatiales et les compagnies d\'assurance.`
    },

    {
      type: 'encadre',
      label: 'L\'horizon proche',
      contenu_md: 'D\'ici 2030 : alunissage habité américain (Artemis IV), probable alunissage habité chinois, première station lunaire en construction, peut-être premiers tests Starship vers Mars sans équipage. La conquête spatiale passe de l\'exploit symbolique à l\'**infrastructure** — moins photogénique, mais infiniment plus structurant pour le siècle à venir.'
    }

  ],

  quiz: [
    {
      q: 'Quand le dernier humain a-t-il marché sur la Lune avant le retour planifié dans le programme Artemis ?',
      options: ['1969', '1972', '1986', '2000'],
      correcte: 1,
      explication: 'Eugene Cernan, lors d\'Apollo 17, en décembre 1972. Il aura fallu plus de 50 ans pour qu\'un nouveau vol habité circumlunaire (Artemis II en avril 2026) ait lieu.'
    },
    {
      q: 'Quelle a été la rupture économique majeure introduite par SpaceX dans le secteur du lancement spatial ?',
      options: [
        'Des fusées plus puissantes',
        'La réutilisabilité des étages de lanceurs',
        'Des moteurs nucléaires',
        'Le lancement depuis la mer'
      ],
      correcte: 1,
      explication: 'La possibilité de faire revenir et réutiliser les boosters (Falcon 9 dès 2015) a fait s\'effondrer le coût par kilo en orbite, ouvrant la voie à toute la nouvelle ère spatiale.'
    },
    {
      q: 'Pourquoi le pôle sud lunaire est-il devenu l\'enjeu géopolitique central du retour sur la Lune ?',
      options: [
        'C\'est la zone la mieux éclairée',
        'On y a détecté des dépôts d\'or',
        'Il combine cratères en ombre permanente avec eau gelée et pics quasi-éternellement éclairés',
        'C\'est le seul endroit accessible aux fusées modernes'
      ],
      correcte: 2,
      explication: 'Le pôle sud lunaire offre cette combinaison rare : eau gelée stockée depuis des milliards d\'années dans les cratères ombragés, et lumière solaire quasi-permanente sur les pics voisins (donc énergie). Indispensable pour une base habitée.'
    },
    {
      q: 'Quel programme américain doit ramener des astronautes sur la Lune dans les années 2020-2030 ?',
      options: ['Apollo II', 'Artemis', 'Constellation', 'Gemini'],
      correcte: 1,
      explication: 'Artemis (du nom de la sœur jumelle d\'Apollon dans la mythologie grecque). Premier vol habité circumlunaire réussi en avril 2026, premier alunissage habité visé pour 2028.'
    },
    {
      q: 'Quels sont les deux principaux pays en compétition pour établir une base lunaire permanente ?',
      options: [
        'États-Unis et Russie',
        'États-Unis et Chine',
        'Russie et Chine',
        'Inde et Japon'
      ],
      correcte: 1,
      explication: 'La Chine, via son programme ILRS conjoint avec la Russie, vise une présence permanente avant 2030. Les États-Unis poursuivent Artemis avec leurs partenaires (ESA, JAXA, ASC). C\'est cette rivalité qui structure la nouvelle course.'
    },
    {
      q: 'Qu\'est-ce que le syndrome de Kessler ?',
      options: [
        'Une maladie due à l\'apesanteur',
        'Un effet de désorientation chez les astronautes',
        'Un emballement de collisions de débris pouvant rendre certaines orbites inutilisables',
        'Un dérèglement des panneaux solaires en orbite'
      ],
      correcte: 2,
      explication: 'Théorisé par Donald Kessler en 1978 : si la densité de débris en orbite dépasse un seuil critique, chaque collision en génère d\'autres, en cascade. C\'est un risque réel, accentué par la prolifération récente des satellites.'
    },
    {
      q: 'Pourquoi un voyage habité vers Mars reste-t-il extrêmement difficile, malgré l\'enthousiasme médiatique ?',
      options: [
        'Mars est trop froide pour qu\'on s\'y pose',
        'Le voyage dure 6-9 mois, expose à des rayonnements considérables, et la fenêtre de retour n\'est ouverte que tous les 26 mois',
        'On ne sait pas piloter une fusée hors de l\'atmosphère terrestre',
        'Mars n\'est pas dans la même galaxie'
      ],
      correcte: 1,
      explication: 'Trajet long, contraintes de fenêtre orbitale, exposition prolongée aux radiations cosmiques, support de vie autonome non éprouvé, redécollage depuis Mars : autant de défis non résolus aujourd\'hui.'
    }
  ]

});
