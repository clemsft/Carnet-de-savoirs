/* ===================================================================
   SUJET — Les volcans
   ===================================================================
   La Terre qui crache son intérieur.
   Domaine : Géologie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'les-volcans',
    titre: 'Les <em>volcans</em>',
    domaines: ['Sciences de la Terre'],
    tags: ['terre', 'magma', 'tectonique', 'éruption', 'islande'],
    difficulte: 1,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: [],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Comprendre comment et où se forment les volcans, pourquoi certains coulent paisiblement quand d\'autres explosent en catastrophe, et comment lire dans leurs comportements la dynamique interne de notre planète.',

  points_cles: [
    'Un **volcan** est un point de la croûte terrestre où du magma, des gaz et des roches fondues remontent à la surface depuis l\'intérieur de la Terre.',
    'Il existe environ **1 500 volcans actifs** sur Terre, dont **80 %** se trouvent autour de la **Ceinture de feu du Pacifique**.',
    'La quasi-totalité des volcans naissent à des **frontières de plaques tectoniques** — soit là où elles s\'écartent (dorsales), soit là où elles plongent l\'une sous l\'autre (subduction).',
    'Les **points chauds**, comme Hawaï ou la Réunion, sont l\'exception : des volcans **isolés au milieu d\'une plaque**, alimentés par une remontée de magma profonde et fixe.',
    'Selon leur composition, les magmas donnent des éruptions **effusives** (fluides, laves coulantes, éruptions hawaïennes) ou **explosives** (visqueuses, projections de cendres, type Vésuve).',
    'L\'**indice d\'explosivité volcanique** (VEI) classe les éruptions de 0 à 8 sur une échelle logarithmique. Pinatubo 1991 = VEI 6 ; Tambora 1815 = VEI 7.',
    'Les très grandes éruptions ont des **effets climatiques globaux** : Tambora a provoqué l\'« année sans été » 1816 dans tout l\'hémisphère nord.'
  ],

  carte_mentale: {
    central: 'volcans',
    noeuds: [
      { id: 'volcans', label: 'Volcans', description: 'Points où la matière fondue de la Terre rejoint la surface.' },
      { id: 'origine', label: 'Origine du magma', description: 'Le magma se forme par fusion partielle du manteau, à des dizaines de kilomètres de profondeur, dans certaines conditions précises.' },
      { id: 'localisation', label: 'Pourquoi ici plutôt que là ?', description: 'La répartition des volcans n\'est pas aléatoire — elle dessine la carte des plaques tectoniques.' },
      { id: 'types-erup', label: 'Types d\'éruptions', description: 'Les volcans n\'éclatent pas tous pareil. Composition du magma et teneur en gaz décident du style.' },
      { id: 'edifices', label: 'Édifices volcaniques', description: 'Cônes, boucliers, calderas, dômes : la forme du volcan reflète son histoire éruptive.' },
      { id: 'risques', label: 'Risques', description: 'Coulées, cendres, lahars, nuées ardentes, tsunamis : les dangers sont multiples.' },
      { id: 'climat', label: 'Effets climatiques', description: 'Les très grandes éruptions modifient le climat planétaire, parfois pendant des années.' },

      // Localisation
      { id: 'dorsales', label: 'Dorsales océaniques', description: 'Là où deux plaques s\'écartent (Atlantique nord, Pacifique est). **Magma fluide**, éruptions calmes, surtout sous-marines.', parent: 'localisation' },
      { id: 'subduction', label: 'Zones de subduction', description: 'Là où une plaque plonge sous une autre. **Magma riche en gaz, visqueux** : éruptions souvent explosives. Andes, Japon, Indonésie.', parent: 'localisation' },
      { id: 'points-chauds', label: 'Points chauds', description: 'Anomalies thermiques **fixes** dans le manteau, traversées par des plaques mobiles. Hawaï, Réunion, Yellowstone, Islande (mixte avec dorsale).', parent: 'localisation' },

      // Types
      { id: 'effusif', label: 'Effusif', description: 'Magma **fluide** (basaltique), pauvre en gaz. Coulées de lave, fontaines. Spectaculaire mais souvent sans danger éloigné. Type **hawaïen**.', parent: 'types-erup' },
      { id: 'explosif', label: 'Explosif', description: 'Magma **visqueux** (andésitique, rhyolitique), riche en gaz. Le bouchon explose : nuées ardentes, panaches kilométriques. Type **plinien** (du nom du témoin du Vésuve, Pline le Jeune).', parent: 'types-erup' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Une <em>fissure</em> vers l\'intérieur de la Terre',
      contenu_md:
`Quand on regarde une éruption, on a l\'impression assez juste d\'assister à une rare fenêtre directe sur l\'intérieur de la planète. La Terre interne est un monde de **plus de 6 000 km** de profondeur, où les températures atteignent 5 000 °C au noyau, mais elle reste en quasi-totalité hors d\'atteinte. Les forages les plus profonds jamais réalisés (le puits de Kola, en Russie) ont atteint à peine **12 km** — moins de 0,2 % du rayon terrestre.

Les volcans contournent ce verrou. À certains endroits, du **magma** — de la roche en fusion à 1 000-1 200 °C, parfois davantage — parvient à se frayer un chemin jusqu\'à la surface. Dès qu\'il sort à l\'air libre, on l\'appelle **lave**. Ce qu\'on observe en surface est, à l\'échelle géologique, un goutte-à-goutte mineur. Mais c\'est l\'unique échantillon direct de la profondeur dont nous disposions.

Et la grande question, pendant des siècles, a été : **pourquoi ici plutôt qu\'ailleurs ?** La réponse est venue dans les années 1960, avec la **tectonique des plaques**.`
    },

    {
      type: 'texte',
      titre: 'La <em>tectonique</em> explique presque tout',
      contenu_md:
`La surface de la Terre est découpée en une dizaine de grandes **plaques** rigides — la lithosphère — qui flottent sur un manteau visqueux et se déplacent les unes par rapport aux autres de quelques centimètres par an. C\'est cette dynamique qui dessine la carte mondiale des volcans (et celle des séismes, qui se superpose presque parfaitement).

Trois grands contextes engendrent du volcanisme. Aux **dorsales océaniques**, deux plaques s\'écartent ; le manteau remonte, fond par décompression, et alimente un volcanisme **fluide** mais discret, souvent invisible parce que sous-marin. Aux **zones de subduction**, une plaque océanique plonge sous une plaque continentale ou océanique ; les fluides qu\'elle libère font fondre le manteau au-dessus, produisant un magma **visqueux et explosif** — c\'est le cas des Andes, du Japon, des Philippines, du Mexique, et de la fameuse **Ceinture de feu** du Pacifique.

Reste un cas atypique : les **points chauds**, anomalies thermiques fixes dans le manteau, indépendantes des plaques. Quand une plaque passe au-dessus, elle se fait percer en série. C\'est ainsi que se forment les chapelets d\'îles volcaniques d\'Hawaï : la plaque Pacifique avance lentement vers le nord-ouest, et chaque île nouvelle s\'allume à l\'aplomb du même point chaud, tandis que les plus anciennes s\'éloignent et s\'éteignent. La Réunion, Yellowstone et l\'Islande sont d\'autres exemples célèbres.`
    },

    {
      type: 'encadre',
      label: 'La Ceinture de feu',
      contenu_md: 'C\'est l\'arc volcanique qui borde l\'océan Pacifique — Indonésie, Philippines, Japon, Kamtchatka, Alaska, Cascades américaines, Mexique, Andes. Il concentre environ **75 %** des volcans actifs du monde et **90 %** des séismes. L\'explication tient en deux mots : **subduction**. La plaque Pacifique plonge tout autour, alimentant en magma visqueux et explosif un anneau de volcans dangereux. C\'est aussi pour cela que cette région est, pour les sciences de la Terre, la zone la mieux instrumentée et étudiée au monde.'
    },

    {
      type: 'texte',
      titre: 'Pourquoi <em>certains</em> coulent et <em>d\'autres</em> explosent',
      contenu_md:
`Tous les magmas ne se valent pas. Leur **comportement** dépend principalement de deux paramètres : leur **viscosité** (à quel point ils sont fluides) et leur **teneur en gaz dissous**.

Un magma **fluide** comme celui d\'Hawaï est **basaltique** : pauvre en silice, peu visqueux, faible en gaz. Quand il atteint la surface, les gaz s\'échappent facilement et la lave coule. Les éruptions sont spectaculaires (fontaines, rivières incandescentes, lacs de lave) mais souvent peu meurtrières : la coulée avance lentement, on a le temps de fuir, l\'explosion violente est rare.

Un magma **visqueux** comme celui du Mont St Helens, du Pinatubo ou du Vésuve est **andésitique** ou **rhyolitique** : riche en silice, gluant comme une pâte épaisse, gorgé de gaz. Les gaz ne peuvent pas s\'échapper en remontant. Pression et pression, jusqu\'à ce que le bouchon **éclate**. Le magma est alors fragmenté en cendres et projeté à grande vitesse — éruption **explosive**.

C\'est ce type d\'éruption qui produit les phénomènes les plus meurtriers : les [nuées ardentes]{accent} (avalanches de gaz et de cendres à 700 °C, dévalant à 200 km/h — celle du Mont Pelée a anéanti la ville de Saint-Pierre en Martinique en 1902 en quelques minutes), les **lahars** (coulées de boue volcanique meurtrières), et les vastes **panaches** de cendres qui peuvent perturber l\'aviation pendant des semaines.`
    },

    {
      type: 'widget',
      titre: 'Trois grands types de volcans',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Effusif',
            titre: 'Volcan-bouclier',
            description: 'Magma **fluide**, coulées peu épaisses, larges étalements. Forme évasée, basse, comme un bouclier renversé. **Mauna Loa** à Hawaï : 4 169 m émergés, 9 700 m totaux depuis le fond océanique — **le plus grand volcan** de la Terre par volume.'
          },
          {
            tag: 'Mixte',
            titre: 'Stratovolcan',
            description: 'Alternance de coulées et de phases explosives. Forme **conique** classique. **Vésuve, Fuji, Etna, Mont Saint-Helens, Pinatubo, Cotopaxi** : la plupart des volcans iconiques. Ce sont aussi les plus dangereux pour les populations voisines.'
          },
          {
            tag: 'Catastrophique',
            titre: 'Caldera',
            description: 'Cratère immense formé par l\'**effondrement** du sommet après une éruption massive. **Yellowstone, Toba, Phlégréens** : leurs précédentes éruptions ont eu des effets climatiques globaux. Heureusement très espacées dans le temps.'
          }
        ]
      }
    },

    {
      type: 'widget',
      titre: 'L\'échelle d\'explosivité (VEI)',
      composant: 'SelecteurValeurs',
      params: {
        unite: '',
        indexInitial: 4,
        options: [
          { label: 'VEI 0', valeur: 'Hawaïenne', description: '< 10 000 m³ de matière émise. Effusion calme, fontaines de lave. Exemple : éruptions courantes du **Kilauea**.' },
          { label: 'VEI 2', valeur: 'Strombolienne', description: '~10 millions m³. Explosions modérées, projections. Exemple : **Stromboli** (Italie), en activité quasi continue depuis 2 000 ans.' },
          { label: 'VEI 3', valeur: 'Vulcanienne', description: '~100 millions m³. Éruptions plus violentes, panaches de plusieurs kilomètres. Mont Saint-Helens en activité régulière post-1980.' },
          { label: 'VEI 5', valeur: 'Plinienne', description: '~1 km³. Éruptions catastrophiques régionales. **Vésuve 79** (Pompéi), **Mont Saint-Helens 1980** (57 morts), **Vésuve 1631**.' },
          { label: 'VEI 6', valeur: 'Plinienne+', description: '~10 km³. Effets climatiques sur quelques années. **Pinatubo 1991** (dispersion de SO₂, refroidissement global de 0,5 °C pendant deux ans).' },
          { label: 'VEI 7', valeur: 'Ultra-plinienne', description: '~100 km³. **Tambora 1815** : "année sans été" 1816 dans tout l\'hémisphère nord, famines, ~100 000 morts directs et indirects.' },
          { label: 'VEI 8', valeur: 'Super-éruption', description: '> 1 000 km³. **Toba ~74 000 ans** : possible goulot d\'étranglement génétique de l\'humanité. **Yellowstone, il y a 640 000 ans**. Très rares.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Une échelle logarithmique',
      contenu_md: 'L\'**indice d\'explosivité volcanique** (VEI), défini en 1982, est **logarithmique** : chaque palier correspond à un volume de matière émise environ **10 fois supérieur** au précédent. VEI 6 = 10 × VEI 5. Un VEI 8 émet **un million** de fois plus de matière qu\'un VEI 2. C\'est pourquoi les éruptions catégorisées 7 ou 8 sont si rares — et si redoutables.'
    },

    {
      type: 'texte',
      titre: 'Quand un <em>volcan</em> change le climat',
      contenu_md:
`Les très grandes éruptions volcaniques ne sont pas seulement des catastrophes locales. Elles peuvent **modifier le climat de la planète entière**, parfois pendant plusieurs années.

Le mécanisme passe par les **gaz soufrés** (SO₂) projetés dans la **stratosphère** lors d\'éruptions explosives. Ces gaz se transforment en aérosols sulfatés, qui réfléchissent une partie du rayonnement solaire vers l\'espace. La Terre se refroidit légèrement.

L\'exemple historique le plus documenté est l\'éruption du **Tambora**, en Indonésie, en avril **1815** (VEI 7). Le panache atteint 43 km d\'altitude. Le SO₂ émis circule dans la stratosphère pendant plus d\'un an. Résultat : l\'**année 1816** est appelée *« année sans été »* en Europe et en Amérique du Nord. Les récoltes échouent en France, en Suisse, dans la vallée du Saint-Laurent. Des centaines de milliers de personnes meurent de faim. La météo détraquée enferme aussi les écrivains dans leurs résidences au bord du lac Léman, où Mary Shelley écrit *Frankenstein*.

Plus près de nous, le **Pinatubo** en 1991 (VEI 6) a refroidi la planète d\'environ **0,5 °C** pendant deux ans. Les **super-éruptions** de type VEI 8, comme celle du **Toba** il y a environ 74 000 ans, ont peut-être eu des conséquences encore plus durables — certains anthropologues y voient un possible goulet d\'étranglement génétique pour l\'humanité de l\'époque.`
    },

    {
      type: 'texte',
      titre: 'Vivre <em>avec</em>',
      contenu_md:
`Environ **800 millions de personnes** vivent dans la zone d\'influence directe d\'un volcan actif. La cohabitation est ancienne : Pompéi, Herculanum, ou plus récemment Catane (sous l\'Etna), Naples (sous le Vésuve), Yogyakarta (sous le Merapi) sont d\'immenses agglomérations construites sur des sols volcaniques fertiles, irriguées par des sources chaudes, vivant d\'un patrimoine culturel volcanique.

L\'aléa est réel. Mais la **prévention** a fait des progrès considérables. Les volcanologues surveillent en continu la **sismicité**, le **gonflement** des édifices (mesuré au GPS et au radar satellite), les **émissions gazeuses**, les **anomalies thermiques** depuis l\'espace. Quelques heures à quelques semaines avant une éruption majeure, les signes précurseurs sont aujourd\'hui généralement détectés. Le **Pinatubo** en 1991 — l\'une des plus grosses éruptions du XXᵉ siècle — a été correctement anticipé : 60 000 personnes évacuées à temps, et probablement autant de vies sauvées.

L\'Islande, perchée sur la dorsale atlantique, vit dans une éruption quasi permanente : depuis 2021, la péninsule de **Reykjanes** est entrée dans une phase d\'activité qui devrait durer plusieurs décennies. La gestion fine de cet aléa volcanique fait partie intégrante de la vie politique islandaise.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'L\'échelle d\'explosivité volcanique (VEI) est logarithmique : chaque palier correspond à environ 10 fois plus de matière émise que le précédent.',
      reponse: true,
      explication: 'Le VEI, défini en 1982, est bien logarithmique : un VEI 7 (Tambora 1815) émet environ 10 fois plus de matière qu\'un VEI 6 (Pinatubo 1991), et un VEI 8 un million de fois plus qu\'un VEI 2.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces éruptions historiques dans l\'ordre chronologique :',
      items: [
        'Vésuve, destruction de Pompéi',
        'Tambora en Indonésie, "année sans été" qui suit',
        'Krakatoa en Indonésie',
        'Mont Pelée en Martinique, anéantissement de Saint-Pierre',
        'Mont Saint-Helens dans l\'État de Washington',
        'Pinatubo aux Philippines'
      ],
      explication: 'Ces éruptions jalonnent l\'histoire de la volcanologie. Le Vésuve (79) reste l\'archétype, le Tambora (1815, VEI 7) a provoqué l\'"année sans été" 1816, le Krakatoa (1883) a fait entendre son explosion à des milliers de km, la Pelée (1902) a tué 28 000 personnes, et le Pinatubo (1991, VEI 6) a refroidi la planète de 0,5 °C pendant deux ans.'
    },
    {
      type: 'associer',
      q: 'Associe chaque type d\'éruption à un exemple emblématique :',
      paires: [
        { gauche: 'Hawaïenne (effusive)', droite: 'Kilauea' },
        { gauche: 'Strombolienne', droite: 'Stromboli' },
        { gauche: 'Plinienne (explosive)', droite: 'Vésuve' },
        { gauche: 'Point chaud océanique', droite: 'Hawaï' },
        { gauche: 'Super-éruption (caldera)', droite: 'Yellowstone' }
      ],
      explication: 'Le type d\'éruption dépend principalement de la viscosité et de la teneur en gaz du magma : fluide et pauvre en gaz pour les hawaïennes ; visqueux et riche en gaz pour les pliniennes. Les points chauds (Hawaï) et les caldeiras (Yellowstone) sont des contextes géologiques particuliers.'
    },
    {
      q: 'Combien de volcans actifs estime-t-on présents sur Terre, et où se trouve la majorité d\'entre eux ?',
      options: [
        '~50, en Europe',
        '~1 500, dont 75-80 % autour de la Ceinture de feu du Pacifique',
        '~10 000, sur tous les continents',
        '~200, surtout en Afrique'
      ],
      correcte: 1,
      explication: 'Environ 1 500 volcans considérés comme potentiellement actifs (éruption dans l\'Holocène, depuis ~10 000 ans). Les trois quarts environ se trouvent autour du Pacifique, dans la Ceinture de feu, en raison de la subduction généralisée qui borde cet océan.'
    },
    {
      q: 'Quelle est la principale cause de la formation des volcans ?',
      options: [
        'Les chocs de météorites',
        'L\'érosion des montagnes',
        'La dynamique des plaques tectoniques (dorsales, subductions) et les points chauds',
        'Les variations climatiques'
      ],
      correcte: 2,
      explication: 'Le volcanisme suit presque parfaitement les frontières de plaques tectoniques. À l\'exception des points chauds (Hawaï, Réunion, Yellowstone), qui sont des anomalies fixes du manteau, les volcans naissent là où les plaques bougent — surtout en zones de subduction et le long des dorsales.'
    },
    {
      q: 'Pourquoi certaines éruptions sont-elles "effusives" (coulées tranquilles) et d\'autres "explosives" ?',
      options: [
        'Cela dépend de la météo',
        'Cela dépend de la viscosité et de la teneur en gaz du magma',
        'Cela dépend de l\'âge du volcan',
        'Cela dépend de la lune'
      ],
      correcte: 1,
      explication: 'Magma fluide et pauvre en gaz (basaltique, type Hawaï) → coulées effusives. Magma visqueux et riche en gaz (andésitique, rhyolitique) → les gaz ne peuvent pas s\'échapper, la pression monte, et l\'éruption devient explosive (Vésuve, Pinatubo, Mont Saint-Helens).'
    },
    {
      q: 'Que sont les "points chauds" en volcanologie ?',
      options: [
        'Des volcans très récents',
        'Des anomalies thermiques fixes dans le manteau, indépendantes des plaques tectoniques, qui produisent des volcans isolés (Hawaï, Réunion)',
        'Les zones où il fait le plus chaud',
        'Les bords des plaques'
      ],
      correcte: 1,
      explication: 'Les points chauds ne se déplacent pas avec les plaques. Quand une plaque passe au-dessus, elle se fait percer en série, créant des chapelets d\'îles volcaniques d\'âges décroissants — l\'archipel d\'Hawaï est le cas d\'école.'
    },
    {
      q: 'Qu\'est-ce qu\'une nuée ardente ?',
      options: [
        'Un nuage qui annonce une éruption',
        'Une avalanche de gaz et de cendres incandescents (~700 °C) dévalant les flancs d\'un volcan à 100-200 km/h',
        'Une coulée de lave très lente',
        'Un nuage volcanique inoffensif'
      ],
      correcte: 1,
      explication: 'Les nuées ardentes (ou écoulements pyroclastiques) sont les phénomènes volcaniques les plus meurtriers. La plus connue est celle de la Montagne Pelée en 1902 : elle a anéanti la ville de Saint-Pierre en Martinique en quelques minutes — 28 000 morts.'
    },
    {
      q: 'Que représente l\'indice VEI (Volcanic Explosivity Index) ?',
      options: [
        'L\'âge du volcan',
        'L\'altitude du sommet',
        'Une échelle logarithmique d\'explosivité, de 0 à 8, basée sur le volume émis et la hauteur du panache',
        'La température de la lave'
      ],
      correcte: 2,
      explication: 'Le VEI, défini en 1982, classe les éruptions selon leur ampleur. Logarithmique : chaque palier multiplie environ par 10 le volume émis. VEI 6 = Pinatubo 1991, VEI 7 = Tambora 1815, VEI 8 = très rares super-éruptions (Toba, Yellowstone).'
    },
    {
      q: 'Quel a été l\'effet climatique de l\'éruption du Tambora en 1815 ?',
      options: [
        'Aucun effet notable',
        'Une "année sans été" 1816 dans l\'hémisphère nord, famines en Europe et en Amérique du Nord',
        'Un réchauffement global',
        'Une augmentation des précipitations'
      ],
      correcte: 1,
      explication: 'L\'éruption du Tambora (avril 1815, VEI 7) projeta tellement de SO₂ dans la stratosphère que l\'année suivante fut "sans été" : récoltes désastreuses, famines, des centaines de milliers de morts. C\'est aussi cette météo détraquée qui enferma Mary Shelley sur les bords du Léman, où elle écrivit Frankenstein.'
    }
  ],

  vocabulaire: [
    {
      terme: 'Magma',
      definition: `Roche en **fusion** à 1 000-1 200 °C (parfois davantage), située dans la croûte ou le manteau supérieur, mélange de liquide silicaté, de cristaux et de gaz dissous. Devient **lave** dès qu'elle atteint la surface et perd ses gaz.`
    },
    {
      terme: 'Tectonique des plaques',
      definition: `Théorie des années 1960 décrivant la surface terrestre comme une dizaine de **plaques rigides** flottant sur un manteau visqueux, se déplaçant de quelques cm/an. Explique la répartition presque totale des volcans et des séismes.`
    },
    {
      terme: 'Subduction',
      definition: `Plongée d'une **plaque océanique** sous une autre plaque (continentale ou océanique). Les fluides libérés font fondre le manteau au-dessus, produisant un magma **visqueux et explosif**. Mécanisme dominant de la Ceinture de feu du Pacifique.`
    },
    {
      terme: 'Dorsale océanique',
      definition: `Frontière de plaques **divergentes** où le manteau remonte et fond par décompression. Volcanisme fluide (basaltique), souvent sous-marin et discret. L'Islande est une dorsale émergée traversant aussi un point chaud.`
    },
    {
      terme: 'Point chaud',
      definition: `**Anomalie thermique fixe** du manteau, indépendante du mouvement des plaques. Quand une plaque passe au-dessus, elle se fait percer en série, formant un *chapelet d'îles* d'âges décroissants (Hawaï, Réunion, Yellowstone).`
    },
    {
      terme: 'Éruption effusive',
      definition: `Éruption à magma **fluide** (basaltique), pauvre en gaz : les gaz s'échappent facilement et la lave coule. Spectaculaire (fontaines, rivières incandescentes) mais rarement très meurtrière. Type **hawaïen**.`
    },
    {
      terme: 'Éruption plinienne',
      definition: `Éruption **explosive** à magma visqueux et riche en gaz : le bouchon éclate, projetant cendres et fragments à grande vitesse dans un panache kilométrique. Nommée d'après Pline le Jeune, témoin du Vésuve en 79. Type le plus dangereux.`
    },
    {
      terme: 'Nuée ardente',
      definition: `Avalanche de gaz et de cendres incandescents (~**700 °C**) dévalant les flancs d'un volcan à **100-200 km/h**. Phénomène volcanique le plus meurtrier — celle de la Montagne Pelée a anéanti Saint-Pierre en 1902 (~28 000 morts).`
    },
    {
      terme: 'VEI',
      definition: `*Volcanic Explosivity Index* (1982) : échelle **logarithmique** de 0 à 8 classant les éruptions selon leur volume émis et la hauteur du panache. Chaque palier représente environ **10 fois** la matière du précédent. Pinatubo 1991 = VEI 6, Tambora 1815 = VEI 7.`
    },
    {
      terme: 'Caldera',
      definition: `Vaste cratère formé par l'**effondrement du sommet** d'un volcan après une éruption massive ayant vidé sa chambre magmatique. Yellowstone, Toba, les Phlégréens en sont les exemples spectaculaires — siège des plus grandes éruptions de l'histoire géologique.`
    }
  ]

});
