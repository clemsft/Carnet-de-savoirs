/* ===================================================================
   SUJET — Les abysses océaniques
   ===================================================================
   Le dernier territoire inexploré de la Terre.
   Domaine : Océanographie
   =================================================================== */

window.CarnetDeSavoirs.register({

  // ============== MÉTADONNÉES ==============
  meta: {
    id: 'abysses-oceaniques',
    titre: 'Les <em>abysses</em> océaniques',
    domaines: ['Sciences de la Terre'],
    tags: ['océan', 'pression', 'biologie marine', 'exploration'],
    difficulte: 1,
    duree_estimee_min: 20,
    prerequis: [],
    lie_a: [],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  // ============== RÉSUMÉ ==============
  resume: 'Plonger dans le dernier territoire inexploré de la Terre : un monde de pressions colossales, d\'obscurité absolue, et d\'organismes qui n\'auraient jamais dû exister.',

  // ============== POINTS-CLÉS ==============
  points_cles: [
    'Les **abysses** désignent les profondeurs océaniques au-delà de **1 000 m** — là où plus aucune lumière solaire ne pénètre.',
    'À ces profondeurs, la **pression** est colossale : jusqu\'à **1 100 fois** celle de la surface dans la fosse des Mariannes.',
    'L\'océan se découpe en **zones verticales** distinctes, des plus claires aux plus extrêmes : épi-, méso-, bathy-, abyssopélagique, et **hadale**.',
    'La **fosse des Mariannes** atteint **10 984 m** au Challenger Deep — plus profonde que l\'Everest n\'est haut.',
    'La vie y prospère contre toute attente, grâce à des adaptations radicales : **bioluminescence**, gigantisme, métabolisme ralenti, anatomie sans calcium.',
    'Plus de **80 %** des fonds marins restent **non cartographiés en haute résolution** — moins bien connus que la surface de Mars.',
    'L\'**exploitation minière des grands fonds** est aujourd\'hui le principal enjeu géopolitique de cet écosystème encore vierge.'
  ],

  // ============== CARTE MENTALE ==============
  carte_mentale: {
    central: 'abysses',
    noeuds: [
      { id: 'abysses', label: 'Abysses', description: 'Profondeurs océaniques au-delà de 1 000 m, sans lumière solaire.' },
      { id: 'zones', label: 'Zones verticales', description: 'L\'océan se stratifie en couches selon la profondeur et la pénétration lumineuse.' },
      { id: 'pression', label: 'Pression extrême', description: 'Chaque 10 m de profondeur ajoute environ **1 atmosphère** de pression. À 11 km : 1 100 atm.' },
      { id: 'vie', label: 'Vie abyssale', description: 'Adaptations radicales pour survivre sans lumière, sous pression, et avec peu de nourriture.' },
      { id: 'exploration', label: 'Exploration', description: 'Submersibles habités, ROV, sonars : un siècle de découvertes encore très incomplètes.' },
      { id: 'enjeux', label: 'Enjeux actuels', description: 'Minage des grands fonds, biodiversité, séquestration carbone, droit international.' },

      // Sous-niveau zones
      { id: 'epi', label: 'Épipélagique', description: '0–200 m. La zone éclairée, où vit la majorité de la vie marine connue.', parent: 'zones' },
      { id: 'meso', label: 'Mésopélagique', description: '200–1 000 m. La [zone crépusculaire]{accent} : lumière résiduelle, énormément de biomasse migrant chaque nuit vers la surface.', parent: 'zones' },
      { id: 'bathy', label: 'Bathypélagique', description: '1 000–4 000 m. Obscurité totale. Le règne de la **bioluminescence**.', parent: 'zones' },
      { id: 'abysso', label: 'Abyssopélagique', description: '4 000–6 000 m. Profondeur moyenne des grands fonds océaniques.', parent: 'zones' },
      { id: 'hadal', label: 'Hadal', description: 'Au-delà de 6 000 m. Le nom vient d\'**Hadès**, dieu grec des Enfers. Réservée aux fosses océaniques.', parent: 'zones' },

      // Sous-niveau vie
      { id: 'biolum', label: 'Bioluminescence', description: 'Plus de **75 %** des organismes abyssaux émettent leur propre lumière, pour chasser, séduire, ou se camoufler.', parent: 'vie' },
      { id: 'gigantisme', label: 'Gigantisme', description: 'Calmar géant, isopode géant : à pression constante et basse température, certaines espèces atteignent des tailles spectaculaires.', parent: 'vie' },
      { id: 'chemo', label: 'Chimiosynthèse', description: 'Autour des [sources hydrothermales]{accent}, des écosystèmes entiers vivent sans soleil — l\'énergie vient du soufre, pas de la photosynthèse.', parent: 'vie' }
    ],
    liens: []
  },

  // ============== COURS ==============
  cours: [

    {
      type: 'texte',
      titre: 'Un monde commence à <em>200 mètres</em>',
      contenu_md:
`L'océan moyen mesure 3 700 mètres de profondeur. Mais l'idée que cet immense volume serait simplement « de l'eau bleue » est trompeuse : à mesure que l'on descend, l'environnement change si radicalement qu'on parle de **mondes superposés**, séparés par des frontières invisibles.

La première frontière se franchit vers **200 m** : la limite où la lumière solaire devient trop faible pour la photosynthèse. En-dessous, plus aucune plante ne pousse. Vers **1 000 m**, la dernière trace de luminosité s'éteint. C'est là que commencent véritablement les [abysses]{accent} — un mot qui vient du grec *abyssos*, « sans fond ».`
    },

    {
      type: 'widget',
      titre: 'Comparez quelques profondeurs marquantes',
      composant: 'SelecteurValeurs',
      params: {
        unite: 'm',
        indexInitial: 0,
        options: [
          { label: 'Plongée libre (record)', valeur: 214, description: 'Apnée, Herbert Nitsch, 2012. À ce stade, le corps humain est déjà comprimé.' },
          { label: 'Plongée scaphandre', valeur: 332, description: 'Record en bouteilles. Au-delà, narcose à l\'azote et toxicité de l\'oxygène.' },
          { label: 'Sous-marin militaire', valeur: 600, description: 'Profondeur opérationnelle typique. Les sous-marins commerciaux ne descendent pas plus.' },
          { label: 'Le Titanic', valeur: 3800, description: 'Repose dans la zone abyssopélagique. Inaccessible sans submersible spécialisé.' },
          { label: 'Profondeur océan moyen', valeur: 3700, description: 'La moyenne planétaire — déjà au cœur des abysses.' },
          { label: 'Fendouzhe (Chine, 2020)', valeur: 10909, description: 'Submersible habité chinois, descente au fond de la fosse des Mariannes.' },
          { label: 'Challenger Deep', valeur: 10984, description: 'Le point le plus profond de l\'océan mondial. Plus que la hauteur de l\'Everest (8 849 m).' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Échelle',
      contenu_md: 'Si la Terre avait la taille d\'une bille, **toute** la zone habitée par l\'humain (jusqu\'au sommet de l\'Everest) tiendrait dans une couche de **moins d\'un millimètre**. La même bille, mais l\'épaisseur des abysses : pareil. Le monde profond est un domaine d\'une vastitude vertigineuse.'
    },

    {
      type: 'texte',
      titre: 'La <em>pression</em> qui tout écrase',
      contenu_md:
`Chaque tranche de **10 mètres** d'eau ajoute environ **une atmosphère** de pression — l'équivalent de la pression que tu ressens à la surface, multipliée à chaque palier.

À **1 000 m**, la pression atteint déjà 100 atmosphères. À 4 000 m, 400. Au fond du Challenger Deep : **1 100 atmosphères**, soit environ **8 tonnes par centimètre carré**, l'équivalent du poids d'un éléphant africain posé sur l'ongle de ton pouce.

À ces pressions, **les molécules d'eau elles-mêmes commencent à se déformer**. Le réseau tétraédrique des liaisons hydrogène se désorganise — un changement invisible mais qui rend la chimie de la vie problématique pour la plupart des cellules. Les organismes qui prospèrent là ne sont pas seulement résistants : ils ont une **biochimie différente**, des protéines reconfigurées pour fonctionner sous contrainte extrême.`
    },

    {
      type: 'texte',
      titre: 'Les <em>cinq étages</em> de l\'océan',
      contenu_md: 'Les océanographes découpent la colonne d\'eau en zones, chacune avec sa lumière, sa température, sa faune.'
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: '0 — 200 m',
            titre: 'Épipélagique',
            description: 'La zone éclairée. **90 %** de la vie marine connue s\'y concentre. Plancton, poissons commerciaux, baleines.'
          },
          {
            tag: '200 — 1 000 m',
            titre: 'Mésopélagique',
            description: 'La zone crépusculaire. Énormément de biomasse — la **migration verticale nocturne** y est le plus grand mouvement quotidien d\'animaux sur Terre.'
          },
          {
            tag: '1 000 — 4 000 m',
            titre: 'Bathypélagique',
            description: 'Obscurité totale. Le règne de la **bioluminescence**, des espèces étranges (poisson-pêcheur, calmar vampire), de la rareté alimentaire.'
          },
          {
            tag: '4 000 — 6 000 m',
            titre: 'Abyssopélagique',
            description: 'Le fond océanique standard. Plaines abyssales, cheminées hydrothermales, sources froides. Très vaste, très peu exploré.'
          },
          {
            tag: '6 000 — 11 000 m',
            titre: 'Hadale',
            description: 'Les **fosses océaniques**. Pression extrême. Espèces très spécialisées comme le poisson-escargot des Mariannes, vu à 8 178 m.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Comment la <em>vie</em> a colonisé l\'invivable',
      contenu_md:
`Sans soleil, sans plantes, sous une pression écrasante : la logique veut qu\'il n\'y ait là rien de vivant. Or les abysses regorgent de formes de vie — souvent étranges, parfois magnifiques, presque toujours inattendues.

La **nourriture** est le premier problème. Sans photosynthèse possible, la quasi-totalité de l\'écosystème abyssal dépend de la « **neige marine** » : les débris organiques (cadavres, déjections, morceaux de plancton) qui tombent lentement de la surface vers le fond. C\'est une pluie ténue, irrégulière, qui ne nourrit qu\'avec parcimonie.

D\'où des adaptations qui frappent : **métabolisme ralenti** à l\'extrême, [bouches énormes]{accent} pour ne rater aucune occasion, estomacs extensibles pour avaler des proies plus grandes que soi, longues durées entre deux repas. Certains poissons abyssaux vivent **plus de 200 ans**.`
    },

    {
      type: 'widget',
      titre: 'Quatre adaptations remarquables',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: 'Bioluminescence',
            description: 'Plus de **75 %** des organismes abyssaux produisent leur propre lumière par réaction chimique. Pour attirer une proie (poisson-pêcheur), pour séduire (lucioles de mer), ou pour se camoufler — la *contre-illumination* fait disparaître la silhouette vue d\'en bas.'
          },
          {
            titre: 'Bouches et dentitions extrêmes',
            description: 'Le poisson-vipère, le grand-gueule pélican, l\'anguille avaleuse : leurs mâchoires se déboîtent pour avaler des proies plus volumineuses que leur propre corps. À ces profondeurs, **on ne refuse aucun repas**.'
          },
          {
            titre: 'Anatomie sans calcium',
            description: 'À grande pression, le calcium peine à former des structures stables. Beaucoup d\'organismes hadaux ont des [corps gélatineux]{accent}, sans squelette dur. Le poisson-escargot, vu à plus de 8 000 m, en est l\'exemple le plus connu.'
          },
          {
            titre: 'Chimiosynthèse',
            description: 'Autour des **sources hydrothermales** (cheminées sous-marines crachant des fluides à 400 °C chargés en sulfures), des bactéries tirent leur énergie de la chimie du soufre, pas du soleil. Elles forment la base d\'écosystèmes entiers — vers tubicoles géants, crabes blancs aveugles — totalement indépendants de la surface. Découverts seulement en **1977**.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>exploration</em> des grands fonds',
      contenu_md:
`Le 23 janvier **1960**, le bathyscaphe *Trieste* atteint pour la première fois le fond du Challenger Deep, avec à son bord Don Walsh et Jacques Piccard. Au moment de toucher le sol à 10 916 m, Piccard aperçoit ce qu\'il croit être un poisson plat — une preuve, à ses yeux, que la vie peut prospérer même là.

Il faudra ensuite attendre **2012** et la descente solo du cinéaste **James Cameron** dans son submersible *Deepsea Challenger* pour qu\'un humain y retourne. Depuis, le submersible chinois *Fendouzhe* a effectué des dizaines de plongées au cours des années 2020.

Pourtant, le constat reste vertigineux : **plus de 80 % des fonds océaniques** sont aujourd\'hui encore non cartographiés en haute résolution. La surface visible de Mars et de la Lune est mieux connue que celle de notre propre planète sous-marine.`
    },

    {
      type: 'encadre',
      label: 'Frontière convoitée',
      contenu_md: 'Les abysses contiennent des **nodules polymétalliques** riches en cobalt, nickel, manganèse — des métaux clés pour les batteries. L\'**Autorité internationale des fonds marins** examine depuis le milieu des années 2020 les premières demandes d\'exploitation industrielle. Une course commence, sur un écosystème qu\'on connaît à peine. Faut-il l\'exploiter avant même de l\'avoir compris ? Le débat est l\'un des plus tendus du droit international contemporain.'
    }

  ],

  // ============== QUIZ ==============
  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'La surface visible de Mars est mieux cartographiée que celle des fonds océaniques terrestres.',
      reponse: true,
      explication: 'Plus de 80 % des fonds océaniques sont aujourd\'hui non cartographiés en haute résolution. La surface visible de Mars et de la Lune est paradoxalement mieux connue que celle de notre propre planète sous-marine.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces grandes étapes de l\'exploration des abysses dans l\'ordre :',
      items: [
        'Expédition du HMS Challenger',
        'Bathysphère de William Beebe',
        'Bathyscaphe Trieste au fond du Challenger Deep',
        'Descente solo de James Cameron'
      ],
      explication: '1872 (Challenger, première campagne océanographique mondiale) → 1934 (bathysphère Beebe, premier regard humain dans la zone bathyale) → 1960 (Trieste, Walsh et Piccard touchent le fond des Mariannes) → 2012 (Cameron y descend en solo à bord du Deepsea Challenger).'
    },
    {
      type: 'associer',
      q: 'Associe chaque zone océanique à sa tranche de profondeur :',
      paires: [
        { gauche: 'Épipélagique', droite: '0 — 200 m' },
        { gauche: 'Mésopélagique', droite: '200 — 1 000 m' },
        { gauche: 'Bathypélagique', droite: '1 000 — 4 000 m' },
        { gauche: 'Abyssopélagique', droite: '4 000 — 6 000 m' },
        { gauche: 'Hadale', droite: 'au-delà de 6 000 m' }
      ],
      explication: 'Les océanographes découpent la colonne d\'eau en cinq zones : épipélagique (éclairée), mésopélagique (crépusculaire), bathypélagique (obscurité totale), abyssopélagique (fond moyen), et hadale (fosses, au nom inspiré d\'Hadès).'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'Le Challenger Deep, dans la fosse des {Mariannes}, atteint environ {-11 000} mètres de profondeur — plus que l\'Everest n\'est haut.',
      explication: 'Le Challenger Deep culmine précisément à -10 984 m. C\'est le point connu le plus profond de l\'océan mondial, et la pression y atteint environ 1 100 atmosphères, soit ~8 tonnes par cm².'
    },
    {
      q: 'À partir de quelle profondeur commencent les abysses, c\'est-à-dire la zone privée de toute lumière solaire ?',
      options: ['200 m', '1 000 m', '4 000 m', '11 000 m'],
      correcte: 1,
      explication: 'Vers 200 m la photosynthèse devient impossible, mais une faible lumière persiste (zone crépusculaire). C\'est à environ 1 000 m que l\'obscurité devient totale — les abysses commencent là.'
    },
    {
      q: 'À quelle profondeur se trouve le point le plus profond de l\'océan, le Challenger Deep ?',
      options: ['Environ 5 000 m', 'Environ 8 000 m', 'Environ 11 000 m', 'Environ 15 000 m'],
      correcte: 2,
      explication: 'Le Challenger Deep, dans la fosse des Mariannes, atteint 10 984 m. C\'est plus que l\'Everest n\'est haut (8 849 m).'
    },
    {
      q: 'À 1 000 mètres de profondeur, à combien d\'atmosphères se monte la pression ?',
      options: ['10', '100', '1 000', '10 000'],
      correcte: 1,
      explication: 'Chaque 10 m ajoute environ 1 atmosphère. À 1 000 m, on atteint donc environ 100 atmosphères — soit 100 fois la pression à la surface.'
    },
    {
      q: 'D\'où vient l\'essentiel de l\'énergie alimentaire dans les abysses ?',
      options: [
        'De plantes adaptées à la pression',
        'De la "neige marine" : débris organiques tombant de la surface',
        'D\'un soleil interne propre à la Terre profonde',
        'Du courant marin réchauffé'
      ],
      correcte: 1,
      explication: 'Sans photosynthèse possible, presque tout l\'écosystème abyssal dépend de la chute lente de matière organique depuis les couches éclairées : la "neige marine".'
    },
    {
      q: 'Que sont les sources hydrothermales découvertes en 1977, et pourquoi sont-elles révolutionnaires ?',
      options: [
        'Des sources d\'eau douce sous-marines',
        'Des cheminées chaudes autour desquelles vivent des écosystèmes basés sur la chimiosynthèse, indépendants du soleil',
        'Des volcans actifs émergeant de l\'océan',
        'Des fissures révélant le manteau terrestre'
      ],
      correcte: 1,
      explication: 'Avant 1977, on pensait toute vie dépendante du soleil. Les sources hydrothermales ont prouvé qu\'un écosystème entier pouvait tirer son énergie de la chimie du soufre — bouleversant la définition même de la vie.'
    },
    {
      q: 'Quelle proportion des fonds océaniques est aujourd\'hui cartographiée en haute résolution ?',
      options: ['Plus de 90 %', 'Environ 50 %', 'Moins de 25 %', 'Près de 100 %'],
      correcte: 2,
      explication: 'Plus de 80 % des fonds restent inconnus à haute résolution. La surface de Mars et de la Lune est mieux cartographiée que celle des fonds océaniques de notre propre planète.'
    },
    {
      q: 'Pourquoi les organismes hadaux (au-delà de 6 000 m) ont-ils souvent un corps gélatineux et peu de calcium ?',
      options: [
        'Par hasard évolutif',
        'Parce que la pression rend les structures calcaires instables',
        'Parce qu\'ils ne mangent pas de calcium',
        'Pour mieux flotter'
      ],
      correcte: 1,
      explication: 'À très grande pression, le calcium peine à former des structures rigides stables. La sélection naturelle a donc favorisé les corps mous, gélatineux, comme celui du poisson-escargot des Mariannes.'
    }
  ],

  vocabulaire: [
    {
      terme: 'Abysses',
      definition: `Profondeurs océaniques situées au-delà de **1 000 m**, là où aucune lumière solaire ne pénètre. Du grec *abyssos*, « sans fond ».`
    },
    {
      terme: 'Zone hadale',
      definition: `Zone océanique au-delà de **6 000 m**, restreinte aux fosses océaniques. Doit son nom à *Hadès*, dieu grec des Enfers. Règne d'une pression écrasante et d'espèces ultra-spécialisées.`
    },
    {
      terme: 'Bioluminescence',
      definition: `Production de lumière par un organisme vivant via réaction chimique. Plus de **75 %** des espèces abyssales l'utilisent pour chasser, séduire ou se camoufler par *contre-illumination*.`
    },
    {
      terme: 'Chimiosynthèse',
      definition: `Production de matière organique à partir de l'énergie chimique (souffre, méthane), sans intervention du soleil. Base des écosystèmes des [sources hydrothermales]{accent} découvertes en 1977.`
    },
    {
      terme: 'Neige marine',
      definition: `Pluie continue de débris organiques (cadavres, déjections, plancton) tombant des couches éclairées vers le fond. Source alimentaire dominante des écosystèmes abyssaux dépourvus de photosynthèse.`
    },
    {
      terme: 'Zone mésopélagique',
      definition: `Couche océanique entre **200 et 1 000 m**, dite *zone crépusculaire* : lumière résiduelle insuffisante à la photosynthèse, mais abritant la plus grande **migration verticale** quotidienne du vivant.`
    },
    {
      terme: 'Fosse des Mariannes',
      definition: `Fosse océanique du Pacifique ouest abritant le **Challenger Deep**, point le plus profond connu de l'océan mondial (~10 984 m). Pression d'environ **1 100 atmosphères** au fond.`
    },
    {
      terme: 'Nodules polymétalliques',
      definition: `Concrétions minérales tapissant les plaines abyssales, riches en cobalt, nickel et manganèse — métaux critiques pour les batteries. Objet d'une convoitise industrielle croissante encadrée par l'Autorité internationale des fonds marins.`
    }
  ]

});
