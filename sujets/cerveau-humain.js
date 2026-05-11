/* ===================================================================
   SUJET — Le cerveau humain
   ===================================================================
   La machine la plus complexe que nous connaissions.
   Domaine : Neurosciences
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'cerveau-humain',
    titre: 'Le <em>cerveau</em> humain',
    domaines: ['Sciences cognitives'],
    tags: ['neurones', 'plasticité', 'mémoire', 'conscience', 'cortex'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['le-sommeil', 'effet-placebo', 'sport-physiologie'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Comprendre la machine biologique la plus complexe que nous connaissions — 86 milliards de neurones organisés en couches, lobes et réseaux qui produisent la pensée, les émotions, la mémoire, et probablement la conscience.',

  points_cles: [
    'Le cerveau humain contient environ **86 milliards de neurones** — chiffre établi en 2009 par Suzana Herculano-Houzel, qui a corrigé l\'estimation classique de 100 milliards.',
    'Chaque neurone forme en moyenne **7 000 synapses** avec ses voisins. Le total des connexions est de l\'ordre de **600 000 milliards** — bien plus que d\'étoiles dans la Voie lactée.',
    'Il pèse environ **1,4 kg** (2 % de la masse corporelle) mais consomme **20 %** de l\'énergie totale, le rendant très coûteux à faire fonctionner.',
    'Il est organisé en plusieurs niveaux : **tronc cérébral** (fonctions vitales), **cervelet** (motricité fine), **système limbique** (émotion, mémoire), **cortex cérébral** (cognition supérieure).',
    'Le **cortex** se découpe en quatre **lobes** principaux (frontal, pariétal, temporal, occipital), chacun spécialisé mais interconnecté.',
    'Les neurones communiquent par **neurotransmetteurs** — dopamine, sérotonine, GABA, glutamate, acétylcholine — qui modulent émotions, vigilance, mouvement.',
    'Le cerveau adulte n\'est pas figé : il conserve une **plasticité** considérable, peut se réorganiser après lésion, et **fabrique de nouveaux neurones** dans certaines régions tout au long de la vie.'
  ],

  carte_mentale: {
    central: 'cerveau',
    noeuds: [
      { id: 'cerveau', label: 'Cerveau humain', description: 'Organe central du système nerveux. ~1,4 kg, 86 milliards de neurones.' },
      { id: 'echelle', label: 'Quelques chiffres', description: 'Neurones, synapses, énergie consommée — l\'organe le plus densément interconnecté que nous connaissions.' },
      { id: 'anatomie', label: 'Anatomie', description: 'Tronc cérébral, cervelet, système limbique, cortex : couches superposées par l\'évolution.' },
      { id: 'cortex', label: 'Cortex cérébral', description: 'Couche externe d\'environ 2-4 mm, repliée en circonvolutions. Siège des fonctions cognitives supérieures.' },
      { id: 'transmission', label: 'Transmission', description: 'Signaux électriques (potentiels d\'action) le long des neurones, signaux chimiques (neurotransmetteurs) entre neurones.' },
      { id: 'plasticite', label: 'Plasticité', description: 'Le cerveau se reconfigure tout au long de la vie : apprentissage, récupération après lésion, vieillissement.' },
      { id: 'mysteres', label: 'Mystères ouverts', description: 'Conscience, libre arbitre, mémoire à long terme : les grandes questions restent largement ouvertes.' },

      // Anatomie
      { id: 'tronc', label: 'Tronc cérébral', description: '« Cerveau ancien ». Régule **respiration, rythme cardiaque, sommeil-veille**. Une lésion sérieuse est souvent fatale.', parent: 'anatomie' },
      { id: 'cervelet', label: 'Cervelet', description: '« Petit cerveau » à l\'arrière du crâne. Coordonne mouvements fins, équilibre, apprentissage moteur. Contient à lui seul **plus de 50 %** des neurones du cerveau.', parent: 'anatomie' },
      { id: 'limbique', label: 'Système limbique', description: '**Amygdale** (peur), **hippocampe** (mémoire), **hypothalamus** (homéostasie). Émotions et mémoire affective.', parent: 'anatomie' },

      // Cortex
      { id: 'frontal', label: 'Lobe frontal', description: 'Le **plus tardivement développé**. Décision, planification, langage moteur (Broca), inhibition. Maturation jusque vers 25 ans.', parent: 'cortex' },
      { id: 'parietal', label: 'Lobe pariétal', description: 'Sensations corporelles, perception spatiale, attention. Le « **où** » des objets.', parent: 'cortex' },
      { id: 'temporal', label: 'Lobe temporal', description: 'Audition, reconnaissance des objets, langage compris (Wernicke), mémoire à long terme.', parent: 'cortex' },
      { id: 'occipital', label: 'Lobe occipital', description: 'Vision, exclusivement. **30 % du cortex** dédié à analyser l\'image rétinienne sous toutes ses dimensions.', parent: 'cortex' },

      // Transmission
      { id: 'dopamine', label: 'Dopamine', description: 'Motivation, récompense, mouvement. **Parkinson** = mort sélective des neurones dopaminergiques.', parent: 'transmission' },
      { id: 'serotonine', label: 'Sérotonine', description: 'Humeur, appétit, sommeil. Les **antidépresseurs** ISRS (Prozac et al.) augmentent sa disponibilité.', parent: 'transmission' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Le <em>kilo</em> qui pense',
      contenu_md:
`Sors-le délicatement d\'un crâne, pose-le sur une balance : il pèse environ **1,4 kilogramme**. Sa texture est étonnamment souple, presque gélatineuse — proche du tofu. Sa surface plissée évoque une noix géante. Visuellement, rien de spectaculaire.

Pourtant, cet objet est l\'organe biologique le plus complexe que nous connaissions dans tout l\'univers. Il contient environ **86 milliards de neurones** — chiffre établi par la neuroscientifique brésilienne **Suzana Herculano-Houzel** en 2009, qui a corrigé l\'estimation classique de 100 milliards qu\'on trouvait encore récemment dans les manuels. Chaque neurone forme en moyenne **7 000 connexions synaptiques** avec ses voisins. Le total avoisine **600 000 milliards de synapses** — c\'est-à-dire bien plus que d\'étoiles dans la Voie lactée.

Et tout cela tient dans un volume d\'environ **1,2 litre** et fonctionne avec **20 watts** de puissance — l\'équivalent d\'une faible ampoule.`
    },

    {
      type: 'widget',
      titre: 'Quelques chiffres pour cadrer l\'objet',
      composant: 'SelecteurValeurs',
      params: {
        unite: '',
        indexInitial: 0,
        options: [
          { label: 'Masse', valeur: '~1,4 kg', description: 'Soit environ **2 %** de la masse corporelle. Mais consomme **20 %** de l\'énergie totale du corps.' },
          { label: 'Neurones', valeur: '~86 milliards', description: 'Chiffre établi en 2009. **75 %** sont dans le **cervelet** (qui ne représente pourtant que 10 % du volume).' },
          { label: 'Synapses', valeur: '~600 mille milliards', description: '6 × 10¹⁴. Plus que d\'étoiles dans la Voie lactée. Chaque neurone forme en moyenne 7 000 connexions.' },
          { label: 'Consommation', valeur: '~20 W', description: 'L\'équivalent d\'une ampoule LED. Étonnamment efficient comparé à une IA contemporaine, qui consomme des centaines de kilowatts pour des tâches comparables.' },
          { label: 'Vitesse signal', valeur: '~120 m/s', description: 'Maximum, sur les axones les plus myélinisés (recouverts de gaine isolante). Soit environ 0,4 ms pour traverser le cerveau de part en part.' },
          { label: 'Taille corticale (déplié)', valeur: '~2 600 cm²', description: 'L\'équivalent d\'une grande serviette de table. Le repliement en circonvolutions permet de loger cette surface dans le crâne.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Une <em>architecture</em> en couches',
      contenu_md:
`Le cerveau humain n\'est pas un organe homogène : c\'est une **superposition** de structures, héritées d\'étapes successives de l\'évolution.

Le **tronc cérébral**, à la base, gère les fonctions vitales automatiques — respiration, rythme cardiaque, alternance veille-sommeil (revoir [[le-sommeil]]). Cette partie est essentielle, archaïque, partagée avec les reptiles. Une lésion sérieuse y est souvent fatale.

Au-dessus et derrière, le **cervelet** (le « petit cerveau »), responsable de la coordination motrice fine, de l\'équilibre et de l\'apprentissage des gestes. Curiosité méconnue : il contient à lui seul **plus de 50 %** des neurones de tout le cerveau, alors qu\'il n\'occupe qu\'**une dizaine de pour cent** du volume.

Plus en avant, le **système limbique** — amygdale, hippocampe, hypothalamus — orchestre les **émotions**, la **mémoire** et l\'**homéostasie** (faim, soif, température). C\'est lui qui te fait sursauter avant même que tu aies « pensé » au danger.

Enfin, le **cortex cérébral** — la couche externe pliée, de 2 à 4 mm d\'épaisseur — porte les fonctions cognitives supérieures : raisonnement, langage, conscience. Chez l\'humain, le cortex est **disproportionnellement développé** par rapport aux autres mammifères, surtout dans sa partie frontale.`
    },

    {
      type: 'widget',
      titre: 'Les quatre lobes du cortex',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Avant',
            titre: 'Lobe frontal',
            description: 'Le « PDG » du cerveau. **Décision**, **planification**, **inhibition**, **personnalité**, **langage moteur** (aire de Broca). Maturation tardive, jusque **25 ans environ**. Une lésion frontale peut transformer le caractère d\'une personne (cas célèbre de **Phineas Gage**, 1848).'
          },
          {
            tag: 'Sommet',
            titre: 'Lobe pariétal',
            description: '**Sensations corporelles** (toucher, douleur, position dans l\'espace), **perception spatiale**, **attention**. Le « **où** » des choses. Une lésion pariétale droite peut produire la **négligence spatiale** : oubli total du côté gauche du monde.'
          },
          {
            tag: 'Côté',
            titre: 'Lobe temporal',
            description: '**Audition**, **reconnaissance** d\'objets et de visages, **langage compris** (aire de Wernicke), **mémoire à long terme** (hippocampe). Une lésion bilatérale de l\'hippocampe rend incapable de former de nouveaux souvenirs (cas du patient **H. M.**).'
          },
          {
            tag: 'Arrière',
            titre: 'Lobe occipital',
            description: 'Exclusivement dédié à la **vision**. Près de **30 %** du cortex consacrés à analyser l\'image rétinienne — couleur, mouvement, formes, profondeur. Une lésion peut produire des cécités très spécifiques (impossibilité de voir le mouvement, de reconnaître les visages).'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Comment les <em>neurones</em> communiquent',
      contenu_md:
`Un neurone est une cellule étrange : un corps cellulaire, des prolongements ramifiés qui captent les signaux (les **dendrites**), et un long câble unique qui transmet (l\'**axone**, parfois long de plus d\'un mètre, jusque dans tes pieds).

Quand le neurone est suffisamment stimulé, il génère un **potentiel d\'action** : une onde électrique qui parcourt l\'axone à une vitesse de **1 à 120 m/s**. Cette onde finit dans une **synapse** — un point de contact avec un autre neurone — où elle libère des **neurotransmetteurs**, petites molécules chimiques qui traversent l\'espace synaptique et activent (ou inhibent) le neurone suivant.

C\'est cette **double nature électrique-chimique** qui fait la spécificité du système nerveux. La communication électrique le long de l\'axone est rapide. La synapse, elle, est plus lente — mais c\'est aussi le lieu de la **modulation**, de la **plasticité**, de la **mémoire**. C\'est en renforçant ou en affaiblissant des synapses que le cerveau apprend.

Les principaux **neurotransmetteurs** ont des rôles bien étudiés : la **dopamine** (motivation, plaisir, mouvement), la **sérotonine** (humeur, sommeil), le **glutamate** (excitation cérébrale dominante), le **GABA** (inhibition), l\'**acétylcholine** (apprentissage, attention). De très nombreux médicaments psychiatriques, mais aussi des drogues, agissent en modulant ces neurotransmetteurs.`
    },

    {
      type: 'encadre',
      label: 'Pourquoi la dopamine ?',
      contenu_md: 'On la présente souvent comme la « molécule du plaisir ». La réalité est plus subtile : la dopamine code surtout l\'**anticipation** d\'une récompense, plus que la récompense elle-même. Les **réseaux sociaux**, les **jeux d\'argent**, les **drogues** détournent ce système en lui fournissant des récompenses imprévisibles — ce qui maximise la libération de dopamine. La maladie de **Parkinson**, à l\'inverse, est due à la mort sélective des neurones dopaminergiques d\'une zone précise du cerveau (la *substantia nigra*).'
    },

    {
      type: 'texte',
      titre: 'La <em>plasticité</em> : un cerveau qui se réécrit',
      contenu_md:
`Pendant longtemps, on a pensé que le cerveau adulte était figé — qu\'on naissait avec un certain stock de neurones et qu\'on en perdait progressivement avec l\'âge sans jamais en regagner. Cette vision est aujourd\'hui largement révisée.

D\'abord, la **plasticité synaptique**. Les connexions entre neurones se renforcent ou s\'affaiblissent en permanence, en fonction de l\'usage. C\'est le mécanisme matériel de l\'apprentissage : *« neurons that fire together, wire together »*, formule de Donald Hebb en 1949. Apprendre à lire, à conduire, à parler une nouvelle langue, c\'est physiquement remodeler ton réseau neuronal.

Ensuite, la **plasticité structurelle**. Le cerveau peut **se réorganiser** après une lésion : si une zone est endommagée (par AVC, traumatisme), des zones voisines peuvent partiellement reprendre ses fonctions, surtout chez l\'enfant. La rééducation post-AVC repose entièrement sur ce principe.

Enfin, et c\'est plus récent comme connaissance, la **neurogenèse adulte**. On sait depuis les années 1990 que de **nouveaux neurones** sont produits tout au long de la vie dans certaines zones — notamment l\'**hippocampe**, central pour la mémoire. Cette neurogenèse est stimulée par l\'**activité physique**, le **sommeil**, l\'**enrichissement cognitif** et social. Elle est diminuée par le **stress chronique**, la **dépression**, et certaines drogues.`
    },

    {
      type: 'texte',
      titre: 'Ce que le cerveau ne nous a <em>pas encore</em> dit',
      contenu_md:
`Malgré un siècle de progrès considérables, des questions fondamentales restent **largement ouvertes**.

La plus profonde est celle de la **conscience**. Comment un kilo et demi de matière biologique génère-t-il l\'expérience subjective d\'**être quelqu\'un** — de voir le rouge, de ressentir la peur, d\'avoir conscience de soi-même ? On a identifié des **corrélats neuronaux** de la conscience : certaines régions actives quand un stimulus est consciemment perçu, certaines inactives sous anesthésie. Mais le **passage** de l\'activité neuronale à l\'expérience reste un mystère — c\'est ce que le philosophe **David Chalmers** appelle le « **problème difficile** » de la conscience.

La **mémoire** à long terme est mieux comprise mais reste partielle. On sait qu\'elle implique des modifications synaptiques durables, et probablement des changements de l\'expression génétique. Mais l\'idée d\'« engrammes » — des traces matérielles précises de souvenirs dans le tissu cérébral — n\'est qu\'imparfaitement vérifiée.

Et le **libre arbitre** ? Les expériences classiques de **Benjamin Libet** (1983) ont montré qu\'on peut détecter dans le cerveau, plusieurs centaines de millisecondes avant qu\'une personne « décide » consciemment de bouger, l\'amorce neuronale de ce mouvement. Conclusion controversée : le sentiment de décider ne précède peut-être pas la décision, il la **rationalise après coup**. Le débat entre neurosciences et philosophie est, là encore, loin d\'être tranché.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le cervelet contient à lui seul plus de 50 % des neurones du cerveau, alors qu\'il n\'occupe qu\'environ 10 % de son volume.',
      reponse: true,
      explication: 'Surprenant mais vrai : le cervelet — situé à l\'arrière du crâne — concentre plus de la moitié des neurones du cerveau humain malgré son volume modeste. C\'est sa densité neuronale extrême qui en est la cause.'
    },
    {
      type: 'associer',
      q: 'Associe chaque lobe du cortex à sa fonction principale :',
      paires: [
        { gauche: 'Lobe frontal', droite: 'Décision, planification, inhibition' },
        { gauche: 'Lobe pariétal', droite: 'Sensations corporelles, perception spatiale' },
        { gauche: 'Lobe temporal', droite: 'Audition, langage compris, mémoire' },
        { gauche: 'Lobe occipital', droite: 'Vision' }
      ],
      explication: 'Les quatre lobes du cortex : frontal (le "PDG" — décision, planification, langage moteur de Broca, maturation jusque vers 25 ans), pariétal (sensations, perception spatiale), temporal (audition, aire de Wernicke, hippocampe), occipital (~30 % du cortex dédié à la vision).'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète ces chiffres clés sur le cerveau humain :',
      texte: 'Le cerveau humain pèse environ {1,4} kg, contient environ {86} milliards de neurones, et consomme {20} % de l\'énergie totale du corps.',
      explication: '~1,4 kg (soit 2 % de la masse corporelle), ~86 milliards de neurones (chiffre établi en 2009 par Suzana Herculano-Houzel, corrigeant l\'ancienne estimation de 100 milliards), ~20 % de la consommation énergétique totale.'
    },
    {
      q: 'Combien de neurones contient approximativement le cerveau humain ?',
      options: [
        '~1 milliard',
        '~10 milliards',
        '~86 milliards',
        '~1 000 milliards'
      ],
      correcte: 2,
      explication: 'Environ 86 milliards de neurones, chiffre établi en 2009 par Suzana Herculano-Houzel. Le chiffre de 100 milliards qu\'on lisait dans les anciens manuels était une estimation basée sur des extrapolations imprécises.'
    },
    {
      q: 'Quelle proportion de l\'énergie totale du corps le cerveau consomme-t-il ?',
      options: ['~5 %', '~10 %', '~20 %', '~50 %'],
      correcte: 2,
      explication: 'Le cerveau pèse 2 % de la masse corporelle mais consomme environ 20 % de l\'énergie totale. C\'est l\'organe le plus coûteux à faire fonctionner — et c\'est l\'une des contraintes majeures de l\'évolution humaine.'
    },
    {
      q: 'Où se trouvent la majorité des neurones du cerveau ?',
      options: [
        'Dans le cortex cérébral',
        'Dans le cervelet — qui contient plus de 50 % des neurones malgré son volume modeste',
        'Dans l\'hippocampe',
        'Dans le tronc cérébral'
      ],
      correcte: 1,
      explication: 'Surprenant mais vrai : le cervelet contient à lui seul plus de la moitié des neurones du cerveau, alors qu\'il n\'occupe qu\'environ 10 % du volume cérébral. C\'est la densité neuronale qui en est la cause.'
    },
    {
      q: 'À quoi sert principalement le lobe frontal ?',
      options: [
        'À la vision',
        'À la décision, la planification, l\'inhibition et la personnalité',
        'À l\'audition',
        'À la respiration'
      ],
      correcte: 1,
      explication: 'Le lobe frontal — le plus tardivement développé chez l\'humain — porte les fonctions exécutives : décision, planification, inhibition des comportements impulsifs, langage moteur (aire de Broca). Sa maturation se poursuit jusque vers 25 ans.'
    },
    {
      q: 'Comment les neurones communiquent-ils entre eux ?',
      options: [
        'Uniquement par signaux électriques',
        'Par signaux électriques le long de l\'axone, puis par neurotransmetteurs chimiques aux synapses',
        'Par ondes magnétiques',
        'Ils ne communiquent pas directement'
      ],
      correcte: 1,
      explication: 'Un signal électrique (potentiel d\'action) parcourt l\'axone, puis déclenche la libération de neurotransmetteurs au niveau de la synapse. Ces molécules traversent l\'espace synaptique et activent (ou inhibent) le neurone suivant. Cette double nature électrique-chimique est centrale.'
    },
    {
      q: 'Qu\'est-ce que la plasticité cérébrale ?',
      options: [
        'La capacité du cerveau à réguler la température',
        'La capacité du cerveau à se reconfigurer tout au long de la vie : renforcement ou affaiblissement des connexions, neurogenèse, réorganisation après lésion',
        'Sa rigidité génétique',
        'Une maladie neurologique'
      ],
      correcte: 1,
      explication: 'Le cerveau adulte n\'est pas figé. La plasticité synaptique permet l\'apprentissage, la plasticité structurelle permet la récupération après lésion, et la neurogenèse adulte (dans l\'hippocampe notamment) génère même de nouveaux neurones tout au long de la vie.'
    },
    {
      q: 'Quel neurotransmetteur est principalement associé à la motivation, à l\'anticipation de récompense, et au mouvement ?',
      options: ['Sérotonine', 'GABA', 'Dopamine', 'Acétylcholine'],
      correcte: 2,
      explication: 'La dopamine est centrale dans le circuit de la récompense (motivation, anticipation, plaisir) et dans le contrôle moteur. La maladie de Parkinson est due à la mort sélective des neurones dopaminergiques de la substantia nigra.'
    },
    {
      q: 'Que désigne le "problème difficile" de la conscience selon David Chalmers ?',
      options: [
        'La difficulté à mesurer le cerveau',
        'L\'énigme du passage entre activité neuronale objective et expérience subjective d\'être quelqu\'un',
        'Le coût des IRM',
        'La complexité des neurotransmetteurs'
      ],
      correcte: 1,
      explication: 'On peut décrire mécaniquement le fonctionnement neuronal (problèmes "faciles"). Mais expliquer pourquoi cette activité produit une expérience subjective ressentie (le "qualia" du rouge, la douleur réellement ressentie) reste un mystère philosophique majeur. Le débat entre neurosciences et philosophie est ouvert.'
    }
  ]

});
