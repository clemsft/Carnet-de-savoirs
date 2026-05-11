/* ===================================================================
   SUJET — L'Empire mongol
   ===================================================================
   Le plus grand empire contigu de l'histoire humaine.
   Domaine : Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'empire-mongol',
    titre: 'L\'<em>Empire mongol</em>',
    domaines: ['Histoire'],
    tags: ['gengis khan', 'asie', 'route de la soie', 'moyen âge', 'conquête'],
    difficulte: 1,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: ['empire-byzantin', 'empire-ottoman'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'En un siècle à peine, des tribus nomades de la steppe ont bâti le plus vaste empire contigu de l\'histoire humaine — quatre fois plus étendu que l\'Empire romain — avant de s\'effacer presque aussi vite.',

  points_cles: [
    'Fondé en **1206** par **Gengis Khan**, l\'Empire mongol devient en moins d\'un siècle le **plus grand empire contigu** de tous les temps.',
    'Il s\'étend à son apogée sur près de **24 millions de km²**, de la mer du Japon aux frontières de la Pologne — soit environ **16 % des terres émergées**.',
    'Sa puissance militaire repose sur une **cavalerie d\'archers** mobile, disciplinée et brutalement efficace, formée dès l\'enfance.',
    'Sous Kubilaï Khan, petit-fils de Gengis, l\'empire fonde la **dynastie Yuan** en Chine (1271-1368).',
    'La **Pax Mongolica** (paix mongole) sécurise pour la première fois la route de la soie sur toute sa longueur, intensifiant les échanges entre l\'Asie et l\'Europe.',
    'À la mort de Gengis Khan, l\'empire est partagé entre ses descendants en **quatre khanats** : Yuan, Chagatai, Ilkhanat et Horde d\'Or.',
    'L\'empire **se fragmente** au XIVᵉ siècle, mais ses descendants influencent l\'Eurasie pendant des siècles encore.'
  ],

  carte_mentale: {
    central: 'empire-mongol',
    noeuds: [
      { id: 'empire-mongol', label: 'Empire mongol', description: '1206-1368. Le plus grand empire contigu de l\'histoire.' },
      { id: 'gengis', label: 'Gengis Khan', description: 'Né Temüjin (~1162-1227). Unifie les tribus mongoles en 1206 et lance les premières grandes conquêtes.' },
      { id: 'armee', label: 'Machine de guerre', description: 'Cavalerie d\'archers, mobilité extrême, discipline, terreur calculée comme outil tactique.' },
      { id: 'expansion', label: 'Expansion', description: 'En un siècle : Chine, Asie centrale, Perse, Russie, frontières de l\'Europe.' },
      { id: 'pax', label: 'Pax Mongolica', description: 'La paix imposée sur l\'immense empire sécurise la route de la soie comme jamais auparavant.' },
      { id: 'khanats', label: 'Quatre khanats', description: 'L\'empire éclate après Gengis en quatre entités, qui suivent chacune leur destin.' },
      { id: 'declin', label: 'Déclin', description: 'Fragmentation, peste noire, révoltes locales — l\'empire disparaît au XIVᵉ siècle.' },

      // Khanats
      { id: 'yuan', label: 'Dynastie Yuan', description: '**Kubilaï Khan** fonde la dynastie chinoise Yuan en 1271. Marco Polo y séjourne dans les années 1270-1290.', parent: 'khanats' },
      { id: 'horde-or', label: 'Horde d\'Or', description: 'Khanat de Russie et d\'Ukraine, descendant de Djötchi. Domine les principautés russes pendant **deux siècles**.', parent: 'khanats' },
      { id: 'ilkhanat', label: 'Ilkhanat', description: 'Khanat de Perse, fondé par Houlagou. Sac de **Bagdad en 1258**, fin du califat abbasside.', parent: 'khanats' },
      { id: 'chagatai', label: 'Chagatai', description: 'Khanat d\'Asie centrale (Transoxiane). De son éclatement émergera plus tard l\'empire de **Tamerlan**.', parent: 'khanats' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Un <em>petit garçon</em> dans la steppe',
      contenu_md:
`Vers **1162**, dans une yourte sur les rives de l'Onon, en Mongolie actuelle, naît un enfant que sa famille appelle **Temüjin**. Il appartient à un clan modeste d'éleveurs nomades. Son père est empoisonné par des Tatars rivaux quand il a une dizaine d'années. Sa famille est abandonnée par son propre clan, condamnée à survivre seule dans la steppe — une quasi-sentence de mort dans une société aussi rude.

Cet enfant deviendra **Gengis Khan**, fondateur du plus grand empire que l'humanité ait jamais vu. À sa mort en 1227, il aura conquis un territoire allant de la mer du Japon à la mer Caspienne. Ses fils et petits-fils étendront ses domaines jusqu'aux portes de Vienne et au cœur du Moyen-Orient.

Comment un nomade orphelin, né sans rien, a-t-il pu accomplir cela ?`
    },

    {
      type: 'texte',
      titre: 'L\'<em>unification</em> des tribus',
      contenu_md:
`La Mongolie du XIIᵉ siècle est un patchwork de **tribus rivales** : Mongols, Tatars, Kéraïtes, Naïmans, Merkit. Elles passent leur temps à se piller, s'assassiner, se trahir. Aucune n'a jamais réussi à dominer durablement les autres.

Temüjin, devenu chef de clan par ses qualités personnelles, applique une stratégie qu'aucun de ses prédécesseurs n'avait osée : il **détruit l'aristocratie** des tribus vaincues, redistribue leurs guerriers dans ses propres unités sans considération d'origine, et installe la **loyauté à sa personne** au-dessus de toute appartenance tribale. Le talent prime sur la naissance — révolution sociale dans un monde régi par les lignées.

En **1206**, après vingt ans de guerres, un grand *qurultay* (assemblée des chefs) le proclame **Gengis Khan** — « Khan universel ». Pour la première fois, toutes les tribus de la steppe obéissent à un seul homme.`
    },

    {
      type: 'encadre',
      label: 'Une révolution sociale',
      contenu_md: 'Gengis Khan promeut au mérite — des fils de bergers deviennent généraux, des [femmes]{accent} dirigent des camps et participent aux décisions, des étrangers (chinois, persans, ouïghours) sont recrutés pour leurs compétences administratives. Cette **méritocratie** brutale est l\'un des secrets de la cohésion mongole, dans une époque où l\'aristocratie héréditaire fait la loi partout ailleurs.'
    },

    {
      type: 'texte',
      titre: 'Une <em>machine de guerre</em> sans équivalent',
      contenu_md:
`Les Mongols n\'inventent pas l\'arc à cheval — il existait déjà chez les Scythes et les Huns. Mais ils le portent à un degré de perfection inégalé.

Un guerrier mongol vit à cheval **dès l\'enfance**. Il maîtrise plusieurs montures qu\'il échange pour conserver leur fraîcheur. Il tire à l\'arc en pleine course, dans toutes les directions, y compris vers l\'arrière. Il peut couvrir **100 km par jour** pendant des semaines, vivant du lait fermenté de ses juments et du sang qu\'il tire d\'elles sans les tuer.

Tactiquement, l\'armée mongole excelle dans la **manœuvre** : elle simule la fuite pour étirer l\'ennemi, l\'encercle, le harcèle de loin sans engager le combat rapproché tant que la victoire n\'est pas assurée. À cela s\'ajoute un usage **calculé de la terreur** : les villes qui résistent sont rasées, leur population massacrée — comme avertissement adressé à toutes les autres. Beaucoup de cités ouvrent ensuite leurs portes sans combattre.`
    },

    {
      type: 'widget',
      titre: 'Comparez la taille de quelques empires de l\'histoire',
      composant: 'SelecteurValeurs',
      params: {
        unite: 'millions de km²',
        indexInitial: 0,
        options: [
          { label: 'Empire romain (apogée)', valeur: 5, description: 'Sous Trajan, ~117 ap. J.-C. Le mythe de la puissance dans le monde occidental.' },
          { label: 'Califat abbasside', valeur: 11, description: 'Apogée vers 750. De l\'Espagne à l\'Indus.' },
          { label: 'Empire byzantin (Justinien)', valeur: 4.5, description: 'Apogée au VIᵉ siècle, après la reconquête de l\'Italie et de l\'Afrique du Nord.' },
          { label: 'Empire mongol (apogée)', valeur: 24, description: 'Vers 1280. **Le plus grand empire contigu** de tous les temps. De la Corée à l\'Ukraine.' },
          { label: 'Empire britannique', valeur: 36, description: 'Apogée en 1922. Plus vaste que l\'Empire mongol — mais **non contigu** : c\'est un empire maritime éclaté sur tous les océans.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>expansion</em> en quatre temps',
      contenu_md: 'La conquête mongole n\'est pas une avancée linéaire mais une succession de campagnes massives, chacune dirigée vers un horizon différent.'
    },

    {
      type: 'widget',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1206', titre: 'Unification mongole', description: 'Gengis Khan proclamé **khan universel**. Toutes les tribus de la steppe obéissent à un seul homme pour la première fois.' },
          { date: '1209-1227', titre: 'Conquête de la Chine du Nord et de l\'Asie centrale', description: 'Soumission des Xixia, des Jin du Nord, anéantissement de l\'**empire khwarezmien** en Asie centrale.' },
          { date: '1227', titre: 'Mort de Gengis Khan', description: 'L\'empire est partagé entre ses fils. Son testament institue une succession qui maintiendra la dynastie.' },
          { date: '1236-1242', titre: 'Invasion de l\'Europe orientale', description: '**Batu Khan** ravage la Russie, prend Kiev, écrase les armées polonaises et hongroises. Vienne est à portée — mais le retrait soudain pour cause de succession sauve l\'Occident.' },
          { date: '1258', titre: 'Sac de Bagdad', description: 'Houlagou, petit-fils de Gengis, prend Bagdad et exécute le **dernier calife abbasside**. Une bibliothèque vieille de cinq siècles est jetée dans le Tigre.' },
          { date: '1271', titre: 'Fondation de la dynastie Yuan', description: 'Kubilaï Khan, autre petit-fils de Gengis, fonde la dynastie **Yuan** en Chine et devient empereur. Marco Polo le rejoindra peu après.' },
          { date: '1368', titre: 'Chute de la dynastie Yuan', description: 'La dynastie chinoise **Ming** chasse les Mongols de Pékin. L\'empire mongol unifié est désormais éclaté pour de bon.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>Pax Mongolica</em>',
      contenu_md:
`Une fois conquis, l\'immense espace mongol est étonnamment **paisible** — du moins pour qui voyage. Pendant près d\'un siècle (1240-1340 environ), la **route de la soie** est sécurisée sur toute sa longueur, de la Chine à la Méditerranée. Les caravanes circulent sans avoir à payer dix tributs différents. Les marchands persans rencontrent des moines bouddhistes, des artisans chinois s\'installent en Iran, des techniques agricoles se diffusent.

C\'est dans ce contexte que **Marco Polo** parcourt l\'Asie de 1271 à 1295 et rédige le *Devisement du monde*. Plus tard, **Ibn Battuta**, voyageur arabe, traversera lui aussi l\'espace mongol. Ce sont les premiers grands récits de voyage qui révèlent à l\'Europe l\'existence d\'un monde immense au-delà de ses horizons.

L\'historien René Grousset parlera plus tard de [Pax Mongolica]{accent} — par analogie avec la *Pax Romana*. Une paix imposée par la force, mais qui a permis l\'**un des plus grands brassages culturels** de l\'histoire pré-moderne.`
    },

    {
      type: 'encadre',
      label: 'Le revers',
      contenu_md: 'Cette circulation a aussi permis la **diffusion de la peste**. La pandémie de **peste noire**, partie d\'Asie centrale vers les années 1340, suit les routes commerciales mongoles avant de frapper l\'Europe en 1347-1352 — où elle tuera entre **30 % et 50 %** de la population. Les épidémies, comme les marchandises, voyagent vite quand les frontières s\'effacent.'
    },

    {
      type: 'texte',
      titre: 'Le <em>partage</em> et la fin',
      contenu_md:
`À la mort de Gengis Khan en 1227, son testament partage l\'empire entre ses fils selon la tradition nomade. À mesure que les générations passent, les liens entre les **quatre khanats** se distendent.

Ils suivent chacun leur destin : la Chine des Yuan, brillante puis chassée par les Ming en **1368** ; la Horde d\'Or, qui domine les principautés russes pendant deux siècles avant de céder à Moscou ; l\'Ilkhanat persan, qui se convertit à l\'islam et fusionne progressivement avec ses sujets ; le khanat Chagatai, qui éclate et donnera plus tard l\'empire de **Tamerlan**.

L\'empire unifié n\'aura duré que **cent cinquante ans environ**. Mais ses descendants, ses institutions, ses routes commerciales, et l\'idée même qu\'un seul pouvoir puisse embrasser un continent entier auront durablement marqué l\'Eurasie.`
    },

    {
      type: 'encadre',
      label: 'L\'héritage',
      contenu_md: 'L\'historiographie a longtemps présenté les Mongols comme de purs destructeurs — vision largement façonnée par leurs ennemis (chroniqueurs persans, russes, chinois). La recherche récente nuance fortement : tolérance religieuse remarquable pour l\'époque, ouverture aux étrangers compétents, codification du droit (le [Yassa]{accent}), première poste rapide de l\'histoire (le *yam*), brassage scientifique sino-persan. La cruauté est réelle. La complexité aussi.'
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Les Mongols n\'étaient que des destructeurs : ils n\'ont rien apporté en termes de culture ou d\'organisation.',
      reponse: false,
      explication: 'Faux. Cette vision vient largement de leurs ennemis (chroniqueurs persans, russes, chinois). En réalité : tolérance religieuse remarquable pour l\'époque, méritocratie (les fils de bergers pouvaient devenir généraux), codification du droit (le Yassa), première poste rapide de l\'histoire (le yam), et la Pax Mongolica qui a permis l\'un des plus grands brassages culturels pré-modernes.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces événements de l\'Empire mongol dans l\'ordre chronologique :',
      items: [
        'Gengis Khan unifie les tribus mongoles',
        'Invasion mongole de l\'Europe orientale par Batu Khan',
        'Sac de Bagdad par Houlagou, fin du califat abbasside',
        'Kubilaï Khan fonde la dynastie Yuan en Chine',
        'La dynastie Ming chasse les Mongols de Pékin'
      ],
      explication: 'En 1206 Gengis devient khan universel ; ses petits-fils étendent l\'empire à l\'Europe orientale (1236-1242), prennent Bagdad (1258), fondent la dynastie Yuan en Chine (1271). En 1368, les Ming chassent les Mongols : fin du contrôle mongol sur la Chine.'
    },
    {
      type: 'associer',
      q: 'Associe chaque khanat à sa région de domination :',
      paires: [
        { gauche: 'Dynastie Yuan', droite: 'Chine (Kubilaï Khan)' },
        { gauche: 'Horde d\'Or', droite: 'Russie et Ukraine' },
        { gauche: 'Ilkhanat', droite: 'Perse (sac de Bagdad)' },
        { gauche: 'Chagatai', droite: 'Asie centrale (Transoxiane)' }
      ],
      explication: 'L\'empire est partagé en quatre khanats au fil des successions. Kubilaï fonde la dynastie Yuan en Chine. La Horde d\'Or domine les principautés russes pendant deux siècles. L\'Ilkhanat persan est fondé par Houlagou. Le khanat Chagatai, en Asie centrale, donnera plus tard l\'empire de Tamerlan.'
    },
    {
      q: 'En quelle année Gengis Khan est-il proclamé "khan universel" et fonde-t-il l\'Empire mongol ?',
      options: ['1162', '1206', '1227', '1271'],
      correcte: 1,
      explication: '1206, lors d\'un grand qurultay (assemblée). Auparavant simple chef de clan nommé Temüjin, il devient ce jour-là le souverain reconnu de toutes les tribus mongoles.'
    },
    {
      q: 'L\'Empire mongol à son apogée est-il le plus grand empire de l\'histoire ?',
      options: [
        'Oui, dans l\'absolu',
        'Non, c\'est l\'Empire romain qui détient ce record',
        'C\'est le plus grand empire **contigu** ; l\'Empire britannique est plus vaste mais éclaté sur les océans',
        'Non, c\'est l\'Empire chinois sous les Han'
      ],
      correcte: 2,
      explication: 'L\'Empire mongol est le plus grand empire **d\'un seul tenant** jamais constitué (~24 millions de km²). L\'Empire britannique du XXᵉ siècle l\'a dépassé en superficie totale, mais il était formé de territoires non contigus, principalement maritimes.'
    },
    {
      q: 'Sur quoi reposait principalement la puissance militaire mongole ?',
      options: [
        'Une infanterie lourdement armée',
        'Une cavalerie d\'archers extrêmement mobile et disciplinée',
        'Une marine de guerre redoutable',
        'Une artillerie de poudre noire'
      ],
      correcte: 1,
      explication: 'La cavalerie d\'archers mongole, formée dès l\'enfance, capable de longues marches forcées, de manœuvres complexes et de tirs à l\'arc en mouvement, surclassait techniquement et tactiquement la plupart des armées qu\'elle a rencontrées.'
    },
    {
      q: 'Que désigne la "Pax Mongolica" ?',
      options: [
        'Un traité de paix entre les Mongols et la Chine',
        'La période de stabilité relative qui sécurisa la route de la soie sous domination mongole',
        'Une fête annuelle dans l\'Empire mongol',
        'Un code de lois militaires'
      ],
      correcte: 1,
      explication: 'Par analogie avec la Pax Romana, ce terme désigne la période (env. 1240-1340) durant laquelle l\'Empire mongol assurait sécurité et libre circulation sur l\'immense espace de la route de la soie — favorisant un brassage culturel et commercial sans précédent.'
    },
    {
      q: 'Qui était Kubilaï Khan ?',
      options: [
        'Le frère de Gengis Khan',
        'Un général perse au service des Mongols',
        'Le petit-fils de Gengis Khan, fondateur de la dynastie Yuan en Chine',
        'Le fils aîné et premier successeur direct de Gengis Khan'
      ],
      correcte: 2,
      explication: 'Kubilaï Khan, petit-fils de Gengis, fonde la dynastie Yuan en Chine en 1271 et règne sur le plus puissant des quatre khanats. Marco Polo séjourne à sa cour à partir des années 1270.'
    },
    {
      q: 'Quel évènement marque la fin de la dynastie mongole en Chine ?',
      options: [
        'La conquête par les Britanniques',
        'L\'arrivée des Ottomans',
        'La prise du pouvoir par la dynastie Ming en 1368',
        'L\'invasion japonaise'
      ],
      correcte: 2,
      explication: 'En 1368, le rebelle Zhu Yuanzhang fonde la dynastie Ming et chasse les Yuan de Pékin, marquant la fin du contrôle mongol sur la Chine.'
    },
    {
      q: 'Quel rôle l\'Empire mongol a-t-il joué dans la propagation de la peste noire en Europe ?',
      options: [
        'Aucun, la peste vient d\'Afrique',
        'Les routes commerciales sécurisées par la Pax Mongolica ont facilité la propagation rapide de l\'épidémie depuis l\'Asie centrale',
        'Les Mongols ont volontairement empoisonné les puits européens',
        'Les Mongols ont créé un vaccin que les Européens ont refusé'
      ],
      correcte: 1,
      explication: 'La peste noire, partie d\'Asie centrale, a circulé via les caravanes commerciales pacifiées par les Mongols avant d\'atteindre l\'Europe via les comptoirs génois en Crimée vers 1347. C\'est l\'envers sombre de la Pax Mongolica : ce qui circule librement, c\'est aussi les microbes.'
    }
  ]

});
