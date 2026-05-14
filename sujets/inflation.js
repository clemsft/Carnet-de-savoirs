/* ===================================================================
   SUJET — L'inflation
   ===================================================================
   Hausse générale et durable des prix, IPC, banques centrales.
   Domaine : Économie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'inflation',
    titre: 'L\'<em>inflation</em>',
    domaines: ['Économie'],
    tags: ['prix', 'monnaie', 'banque centrale', 'hyperinflation', 'weimar', 'friedman'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['monnaies-numeriques', 'capitalisme', 'consumerisme'],
    date_creation: '2026-05-12',
    date_maj: '2026-05-12'
  },

  resume: 'Quand une boule de pain coûte deux salaires en quelques mois, ce n\'est pas un accident comptable : c\'est une économie qui perd ses repères. Comprendre l\'inflation — sa mesure, ses causes, ses mécanismes monétaires — et pourquoi les banques centrales en ont fait leur ennemie principale.',

  points_cles: [
    'L\'**inflation** est une hausse **générale et durable** du niveau des prix. Une seule hausse ponctuelle, ou la hausse d\'un seul bien, ne suffit pas.',
    'Elle se mesure par l\'**IPC** (Indice des Prix à la Consommation), calculé à partir d\'un **panier de biens** représentatif des dépenses des ménages.',
    'Deux grands moteurs : l\'inflation **par la demande** (les ménages dépensent trop face à une offre limitée) et l\'inflation **par les coûts** (les coûts de production augmentent et sont répercutés).',
    'La **théorie monétariste** de **Milton Friedman** résume : *« l\'inflation est toujours et partout un phénomène monétaire »*. Trop de monnaie poursuit trop peu de biens.',
    'Les **hyperinflations** historiques — Weimar 1923, Hongrie 1946, Zimbabwe 2008 — ont vu les prix doubler chaque jour ou chaque heure. Elles ruinent l\'épargne et déstabilisent les régimes.',
    'Les **banques centrales** (Fed, BCE) pilotent l\'inflation via le **taux directeur** : le relever freine le crédit et l\'activité, donc les prix.',
    'La **courbe de Phillips** postulait un arbitrage entre chômage et inflation. La **stagflation** des années 1970 a montré que les deux pouvaient grimper ensemble.',
    'L\'inflation **perçue** dépasse souvent l\'inflation **mesurée** : les prix les plus visibles au quotidien (alimentation, énergie) pèsent plus dans le souvenir que dans le panier statistique.'
  ],

  carte_mentale: {
    central: 'inflation',
    noeuds: [
      { id: 'inflation', label: 'Inflation', description: 'Hausse **générale et durable** du niveau des prix dans une économie.' },
      { id: 'mesure', label: 'Mesure', description: 'Comment quantifier la hausse des prix — panier, indices, méthodologie.' },
      { id: 'causes', label: 'Causes', description: 'Pourquoi les prix montent — déséquilibres réels et monétaires.' },
      { id: 'politique', label: 'Politique monétaire', description: 'Les banques centrales et leurs outils pour piloter l\'inflation.' },
      { id: 'crises', label: 'Crises historiques', description: 'Hyperinflations, désinflations, déflations qui ont marqué le XXᵉ et XXIᵉ siècle.' },

      { id: 'ipc', label: 'IPC', description: 'Indice des Prix à la Consommation. Calculé à partir d\'un **panier de biens** pondéré.', parent: 'mesure' },
      { id: 'perception', label: 'Inflation perçue', description: 'L\'écart entre ce que mesure l\'INSEE et ce que les ménages ressentent au supermarché.', parent: 'mesure' },

      { id: 'demande', label: 'Par la demande', description: 'La demande globale dépasse l\'offre disponible — surchauffe économique.', parent: 'causes' },
      { id: 'couts', label: 'Par les coûts', description: 'Hausse des **salaires**, des matières premières ou de l\'énergie répercutée dans les prix.', parent: 'causes' },
      { id: 'monetaire', label: 'Monétaire', description: 'Thèse de **Friedman** : trop de monnaie en circulation par rapport à la production réelle.', parent: 'causes' },

      { id: 'taux', label: 'Taux directeur', description: 'Levier principal des banques centrales : relever le taux freine l\'économie et l\'inflation.', parent: 'politique' },
      { id: 'phillips', label: 'Courbe de Phillips', description: 'L\'idée d\'un arbitrage entre [chômage]{accent} et [inflation]{accent} — battue en brèche par les années 1970.', parent: 'politique' },

      { id: 'weimar', label: 'Weimar 1923', description: 'L\'hyperinflation allemande emblématique : **29 500 % par mois** en octobre 1923.', parent: 'crises' },
      { id: 'volcker', label: 'Choc Volcker', description: 'La Fed de **Paul Volcker** monte ses taux à 20 % en 1980 pour briser l\'inflation américaine.', parent: 'crises' },
      { id: 'covid', label: 'Post-COVID', description: 'Retour brutal de l\'inflation entre 2021 et 2023, après quarante ans d\'oubli relatif.', parent: 'crises' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Qu\'est-ce que l\'<em>inflation</em>, exactement ?',
      contenu_md:
`Quand le prix de la baguette passe de 1,20 € à 1,40 €, on parle d\'une hausse de prix. Quand presque **tous** les prix montent en même temps, mois après mois, on parle d\'[inflation]{accent}.

La définition officielle est précise : l\'inflation est une hausse **générale** (elle touche un large éventail de biens et services) et **durable** (elle persiste dans le temps) du niveau des prix. Une bouffée temporaire, ou la flambée d\'un produit isolé, ne suffit pas.

L\'effet le plus concret se lit à l\'envers. Quand les prix montent, la **valeur de la monnaie** baisse : avec le même billet de 50 €, on remplit moins son caddie. L\'inflation est donc, pour qui détient de la monnaie ou de l\'épargne non rémunérée, une **érosion silencieuse** de la richesse.`
    },

    {
      type: 'texte',
      titre: 'Mesurer la hausse : l\'<em>IPC</em>',
      contenu_md:
`Comment quantifier une hausse « générale » des prix ? L\'instrument standard s\'appelle l\'**Indice des Prix à la Consommation** (IPC).

L\'idée est de constituer un **panier de biens** représentatif de ce que les ménages achètent : alimentation, logement, transports, vêtements, loisirs, services. Chaque poste est **pondéré** selon son poids réel dans le budget moyen — environ 13 % pour l\'alimentation, 27 % pour le logement, 16 % pour les transports en France. Tous les mois, les statisticiens (INSEE en France, BLS aux États-Unis) relèvent des dizaines de milliers de prix dans le pays.

L\'IPC est ensuite calculé comme le rapport entre le coût du panier aujourd\'hui et son coût à une période de référence. Le **taux d\'inflation** annuel est la variation de cet indice sur douze mois.`
    },

    {
      type: 'widget',
      titre: 'Le calcul de l\'IPC, en formule',
      composant: 'Equation',
      params: {
        tex: '\\text{Inflation}_t = \\frac{\\text{IPC}_t - \\text{IPC}_{t-1}}{\\text{IPC}_{t-1}} \\times 100',
        legende: 'Taux d\'inflation sur un an : variation relative de l\'Indice des Prix à la Consommation entre deux périodes.',
        affichage: 'block'
      }
    },

    {
      type: 'encadre',
      label: 'Inflation perçue vs mesurée',
      contenu_md: 'L\'IPC mesure une **moyenne pondérée**. Mais le quotidien d\'un ménage n\'est pas une moyenne : si la baguette, l\'essence et le café — les achats les plus visibles — flambent, tout le monde a l\'impression d\'une forte inflation, même si d\'autres postes (électronique, télécoms) baissent. C\'est l\'écart entre [inflation perçue]{accent} et [inflation mesurée]{accent}, source classique de défiance envers les statistiques officielles — et reflet de la place qu\'occupe désormais le [[consumerisme]] dans la structure même de nos repères économiques.'
    },

    {
      type: 'texte',
      titre: 'Les <em>deux moteurs</em> classiques',
      contenu_md:
`L\'analyse économique distingue traditionnellement deux grandes causes d\'inflation, selon que la pression vient de la consommation ou de la production.

L\'**inflation par la demande** survient quand la demande globale dépasse les capacités de production. Les ménages, dotés de plus de pouvoir d\'achat (hausse des salaires, baisse d\'impôts, plans de relance), veulent acheter plus que l\'économie ne peut produire. Les entreprises ajustent en montant les prix. C\'est l\'inflation des **booms économiques**.

L\'**inflation par les coûts**, à l\'inverse, vient d\'en haut de la chaîne. Quand le pétrole double (chocs de 1973 et 1979), quand les salaires explosent suite à une grève généralisée, quand une rupture d\'approvisionnement renchérit les semi-conducteurs (post-COVID 2021), les entreprises répercutent ces coûts sur leurs prix de vente. La demande, elle, n\'a pas bougé.

Une **spirale** peut s\'enclencher : les salariés, voyant leur pouvoir d\'achat diminuer, exigent des hausses de salaires ; ces hausses renchérissent encore les coûts ; les prix montent à nouveau. C\'est la **boucle prix-salaires** que les banques centrales redoutent par-dessus tout.`
    },

    {
      type: 'texte',
      titre: 'La <em>thèse monétariste</em>',
      contenu_md:
`Une troisième analyse, plus radicale, fut portée à partir des années 1960 par l\'économiste américain **Milton Friedman** et son école dite [monétariste]{accent} : *« L\'inflation est toujours et partout un phénomène monétaire. »*

Son argument repose sur une équation très ancienne (Irving Fisher, 1911), connue sous le nom d\'**équation quantitative de la monnaie** : la masse de monnaie en circulation, multipliée par sa vitesse de rotation, est égale au volume des transactions multiplié par les prix. Si l\'on suppose la vitesse et le volume relativement stables, alors une augmentation de la masse monétaire se traduit **mécaniquement** par une hausse des prix.

Pour Friedman, les inflations résultent toujours, en dernière analyse, d\'une **création monétaire excessive** par les banques centrales. La solution : une règle stricte de croissance modérée et stable de la masse monétaire. Cette pensée inspirera profondément les politiques anti-inflationnistes des années 1980 — et redéfinira durablement la doctrine monétaire du [[capitalisme]] contemporain.`
    },

    {
      type: 'widget',
      titre: 'L\'équation quantitative de la monnaie',
      composant: 'Equation',
      params: {
        tex: 'M \\cdot V = P \\cdot T',
        legende: 'Équation de Fisher : M = masse monétaire, V = vitesse de circulation, P = niveau des prix, T = volume des transactions. Pilier théorique du monétarisme.',
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>hyperinflations</em>, ou la monnaie qui meurt',
      contenu_md:
`Le cas pathologique extrême s\'appelle l\'**hyperinflation**. Le seuil conventionnel est fixé à **50 % par mois** — soit, en taux annuel composé, un prix multiplié par environ 130 en un an.

À ce stade, la monnaie cesse de jouer son rôle. Les commerçants refixent les prix plusieurs fois par jour. Les salariés sont payés en milieu de journée pour pouvoir dépenser avant que la valeur ne s\'évapore. L\'épargne en monnaie nationale fond en quelques semaines. Les billets sont parfois utilisés comme combustible ou papier peint.

Les **causes** sont presque toujours les mêmes : un État en crise (guerre perdue, sanctions, effondrement politique) qui finance ses déficits en faisant fonctionner la planche à billets — la **banque centrale** imprime de la monnaie pour payer les fonctionnaires, plutôt que de lever l\'impôt. La masse monétaire explose, la confiance s\'effondre, le cercle vicieux se referme.`
    },

    {
      type: 'widget',
      titre: 'Les grandes hyperinflations du XXᵉ et XXIᵉ siècle',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Allemagne, 1923',
            titre: 'République de Weimar',
            description: 'Pic à **29 500 %** d\'inflation **par mois** en octobre 1923. Un dollar valait 4,2 milliards de marks à la fin. Conséquence directe du fardeau des réparations de guerre et du financement monétaire des déficits.'
          },
          {
            tag: 'Hongrie, 1946',
            titre: 'Le record absolu',
            description: 'Le **pengő** hongrois fut détruit à un rythme inégalé : prix doublant **toutes les 15 heures**. Un taux mensuel de 4 × 10¹⁶ %. Le billet le plus émis : 100 quintillions de pengő.'
          },
          {
            tag: 'Zimbabwe, 2008',
            titre: 'Le règne de Mugabe',
            description: 'Pic à **79,6 milliards de %** par mois en novembre 2008. Émission de billets de **100 000 milliards** de dollars zimbabwéens. Abandon de la monnaie nationale au profit du dollar US en 2009.'
          },
          {
            tag: 'Venezuela, années 2010-2020',
            titre: 'Le bolivar effondré',
            description: 'Inflation cumulée supérieure à **1 700 000 %** en 2018. Trois redénominations successives. Effondrement consécutif à la chute du pétrole et à la mauvaise gestion économique du régime.'
          },
          {
            tag: 'Argentine, récurrente',
            titre: 'Le mal chronique',
            description: 'Plusieurs vagues d\'hyperinflation (1989-1990, années 2020). En 2023, inflation annuelle à **211 %**. Recours massif au dollar par les ménages — et aux stablecoins. Voir [[monnaies-numeriques]].'
          }
        ]
      }
    },

    {
      type: 'widget',
      titre: 'Épisodes inflationnistes du XXᵉ et XXIᵉ siècle',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1923', titre: 'Hyperinflation de Weimar', description: 'L\'Allemagne sombre dans l\'hyperinflation, **29 500 %** par mois en octobre. La classe moyenne ruinée nourrira l\'extrémisme politique.' },
          { date: '1946', titre: 'Record hongrois', description: 'Le **pengő** entre dans l\'Histoire avec le pire taux jamais mesuré : prix doublant toutes les 15 heures.' },
          { date: '1971', titre: 'Fin du Bretton Woods', description: 'Nixon suspend la convertibilité du dollar en or. Début d\'une décennie d\'inflation occidentale soutenue.' },
          { date: '1973-1979', titre: 'Chocs pétroliers', description: 'Le pétrole quadruple en 1973, double en 1979. **Stagflation** : inflation et chômage progressent ensemble — un cas que la théorie classique excluait.' },
          { date: '1979-1982', titre: 'Choc Volcker', description: 'Paul Volcker, président de la **Fed**, monte les taux jusqu\'à **20 %**. Récession brutale, mais inflation cassée — de 14 % à 3 % en trois ans.' },
          { date: 'Années 1990-2010', titre: 'Déflation japonaise', description: 'Le Japon enchaîne deux décennies de prix stagnants ou en baisse, malgré des taux directeurs nuls. Cas d\'école de la **trappe à liquidité**.' },
          { date: '2008', titre: 'Zimbabwe', description: 'Pic à **79,6 milliards de %** par mois. Émission de billets de 100 000 milliards de dollars zimbabwéens. Abandon de la monnaie nationale l\'année suivante.' },
          { date: '2021-2023', titre: 'Retour post-COVID', description: 'L\'inflation ressurgit en Occident après quarante ans d\'oubli : **9,1 %** aux États-Unis en juin 2022, **10,6 %** en zone euro en octobre 2022.' },
          { date: '2022-2024', titre: 'Resserrement monétaire', description: 'Fed et BCE remontent rapidement leurs taux. L\'inflation reflue progressivement vers la cible de **2 %**.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>banques centrales</em>, gardiennes de la valeur',
      contenu_md:
`Depuis les années 1990, la plupart des **banques centrales** des grandes économies se sont vu confier un mandat de stabilité des prix, autour d\'une **cible d\'inflation de 2 %** par an. C\'est le cas de la **Réserve fédérale américaine** (Fed) et de la **Banque centrale européenne** (BCE).

Leur outil principal s\'appelle le **taux directeur** : le taux auquel les banques commerciales peuvent emprunter de la monnaie centrale. Quand ce taux monte, les banques répercutent sur leurs propres crédits aux ménages et entreprises ; le crédit devient cher, la consommation et l\'investissement ralentissent, la pression sur les prix retombe. C\'est l\'instrument du **resserrement monétaire**.

À l\'inverse, baisser les taux relance le crédit et l\'activité — au risque, si l\'on va trop loin, de relancer l\'inflation. C\'est l\'**assouplissement monétaire**, dont les banques centrales ont massivement usé après la crise de 2008 et pendant la pandémie de 2020.`
    },

    {
      type: 'widget',
      titre: 'Faites varier le taux directeur — quel effet sur l\'inflation ?',
      composant: 'CurseurParametrique',
      params: {
        label: 'Taux directeur (simplifié)',
        min: 0,
        max: 10,
        step: 0.25,
        valeurInitiale: 2,
        unite: '%',
        degradePiste: '#3aa67c 0%, #3aa67c 25%, #e8c547 25%, #e8c547 60%, #d97757 60%, #d97757 100%',
        seuils: [
          {
            jusqua: 1,
            titre: 'Politique très accommodante',
            description: 'Crédit quasi gratuit. **L\'activité s\'emballe**, le risque inflationniste monte. Configuration typique de l\'après-2008 et de 2020-2021 — qui a contribué au retour de l\'inflation post-COVID.',
            couleur: '#5b8def'
          },
          {
            jusqua: 2.5,
            titre: 'Politique neutre',
            description: 'Taux proche du **taux neutre** (ni accommodant, ni restrictif). L\'inflation tend à se stabiliser autour de la cible de **2 %**.',
            couleur: '#3aa67c'
          },
          {
            jusqua: 5,
            titre: 'Politique restrictive',
            description: 'Le crédit devient cher, la consommation et l\'investissement ralentissent. **L\'inflation reflue**, au prix d\'une croissance plus faible.',
            couleur: '#e8c547'
          },
          {
            jusqua: Infinity,
            titre: 'Choc monétaire',
            description: 'Taux exceptionnellement élevés, comme **Volcker en 1980-1981** (jusqu\'à 20 %). Bris brutal de l\'inflation, au prix d\'une **récession** sévère et d\'un chômage en forte hausse.',
            couleur: '#d97757'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>courbe de Phillips</em> et la stagflation',
      contenu_md:
`En 1958, l\'économiste néo-zélandais **A. W. Phillips** publie une étude célèbre : il observe, sur près d\'un siècle de données britanniques, qu\'une relation **inverse** semble lier le chômage et le taux d\'inflation des salaires. Plus le chômage est bas, plus les salaires montent — et donc, à terme, les prix.

Cette **courbe de Phillips** suggère un arbitrage commode pour le décideur : on peut « acheter » du plein emploi au prix d\'un peu d\'inflation. Beaucoup de politiques keynésiennes des années 1960 reposent sur cette idée.

La décennie 1970 démolira cette confiance. Sous l\'effet des **chocs pétroliers** et de l\'inertie des comportements, les économies occidentales connaissent simultanément une forte inflation **et** un chômage croissant — phénomène baptisé [stagflation]{accent}. La courbe de Phillips s\'aplatit, voire s\'inverse. Friedman et **Phelps** théorisent une « courbe verticale à long terme » : tout effort durable pour pousser le chômage en dessous de son taux naturel se solde par une inflation toujours plus forte, sans gain réel d\'emploi.`
    },

    {
      type: 'texte',
      titre: 'Le <em>choc Volcker</em> et la <em>déflation</em> japonaise',
      contenu_md:
`Deux épisodes opposés, mais éclairants.

En 1979, l\'inflation américaine atteint **13,3 %**, après une décennie d\'érosion continue de la confiance dans le dollar. Le nouveau président de la Fed, **Paul Volcker**, prend une décision radicale : monter les taux directeurs jusqu\'à **20 %** en 1980-1981. Le crédit s\'effondre, l\'économie entre en récession, le chômage grimpe à 10 %. Mais l\'inflation tombe : **3,2 %** en 1983. Le coût social fut lourd, mais Volcker démontra qu\'une banque centrale **déterminée** pouvait casser l\'inflation. C\'est l\'acte de naissance de la doctrine moderne de stabilité des prix.

L\'autre extrême, c\'est le **Japon post-1990**. L\'éclatement de la bulle immobilière et boursière plonge le pays dans deux décennies de **déflation** — baisse continue des prix. Malgré des taux directeurs à zéro dès la fin des années 1990 puis des achats massifs d\'actifs (l\'« assouplissement quantitatif »), les prix refusent de remonter. La déflation, en encourageant les ménages à reporter leurs achats, paralyse l\'économie. Le Japon ne retrouvera durablement un taux d\'inflation positif qu\'au milieu des années 2020.`
    },

    {
      type: 'encadre',
      label: 'Pourquoi 2 %, exactement ?',
      contenu_md: 'La **cible de 2 %** adoptée par la Fed et la BCE n\'a rien de magique. Elle reflète un compromis : trop bas, on risque la [déflation]{accent} (cas japonais), perçue comme bien plus dangereuse car difficile à enrayer ; trop haut, on dégrade durablement le pouvoir d\'achat et la confiance dans la monnaie. Deux pour cent, c\'est jugé assez bas pour préserver la valeur de la monnaie, et assez haut pour garder une marge de manœuvre.'
    },

    {
      type: 'texte',
      titre: 'Le <em>retour post-COVID</em> (2021-2023)',
      contenu_md:
`Après quarante ans de quasi-disparition dans les économies développées, l\'**inflation** est revenue brutalement entre 2021 et 2023.

Plusieurs causes se sont superposées : ruptures de chaînes d\'approvisionnement post-confinements, redémarrage de la demande, plans de relance massifs (1 900 milliards $ aux États-Unis sous Biden), création monétaire des banques centrales pendant la pandémie, puis **invasion de l\'Ukraine** en février 2022 — qui a fait flamber le gaz, le pétrole et les céréales.

Le pic fut atteint en **juin 2022** aux États-Unis (**9,1 %**), en **octobre 2022** en zone euro (**10,6 %**). La Fed et la BCE ont réagi en remontant rapidement leurs taux directeurs — de 0 à 5,5 % aux États-Unis, de 0 à 4 % en zone euro — pour ramener progressivement l\'inflation vers la cible de 2 % à l\'horizon 2024-2025.

Cet épisode a ressuscité un débat ancien : et si la *résistance* à l\'inflation, gravée depuis le choc Volcker dans la doctrine des banques centrales, avait commencé à se relâcher ? La défiance des ménages envers la monnaie traditionnelle a notamment nourri l\'intérêt pour des alternatives — or, immobilier, et **cryptomonnaies** présentées comme actifs « anti-inflation » (voir [[monnaies-numeriques]]).`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Une hausse ponctuelle du prix de l\'essence suffit à parler d\'inflation.',
      reponse: false,
      explication: 'Non. L\'inflation est par définition une hausse générale (un large éventail de biens) et durable (qui persiste dans le temps) du niveau des prix. La flambée d\'un seul produit, ou un sursaut isolé d\'un mois, ne suffit pas.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'L\'inflation perçue par les ménages est généralement plus élevée que l\'inflation mesurée par l\'IPC.',
      reponse: true,
      explication: 'Effectivement. Les achats les plus visibles (alimentation, essence, café) pèsent plus dans le ressenti que dans le panier statistique, qui agrège tous les postes — y compris ceux qui baissent (électronique, télécoms). L\'écart entre les deux est une source classique de défiance envers les statistiques officielles.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets dans l\'ordre chronologique ces grandes hyperinflations du XXᵉ et XXIᵉ siècle :',
      items: [
        'Hyperinflation de la République de Weimar',
        'Effondrement du pengő hongrois',
        'Hyperinflation du Zimbabwe sous Mugabe',
        'Crise inflationniste du Venezuela'
      ],
      explication: 'Weimar (1923) → Hongrie (1946) → Zimbabwe (2008) → Venezuela (années 2010-2020). À chaque fois, le même schéma : un État en crise finance ses dépenses en faisant tourner la planche à billets, la confiance s\'effondre, la monnaie meurt.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'Selon Milton {Friedman}, l\'inflation est toujours et partout un phénomène {monétaire}, résultant d\'une croissance excessive de la masse de monnaie en circulation.',
      explication: 'C\'est la thèse centrale du monétarisme, popularisée par Milton Friedman dans les années 1960. Elle s\'appuie sur l\'équation quantitative MV = PT et inspirera profondément les politiques anti-inflationnistes des années 1980, notamment celle de Paul Volcker à la Fed.'
    },
    {
      type: 'associer',
      q: 'Associe chaque pays à l\'épisode d\'hyperinflation qui l\'a marqué :',
      paires: [
        { gauche: 'Allemagne 1923', droite: '29 500 % par mois (octobre)' },
        { gauche: 'Hongrie 1946', droite: 'Prix doublant toutes les 15 heures' },
        { gauche: 'Zimbabwe 2008', droite: 'Billets de 100 000 milliards' },
        { gauche: 'Argentine 2023', droite: 'Inflation annuelle à 211 %' }
      ],
      explication: 'Quatre étalons de l\'instabilité monétaire. Weimar reste l\'épisode politiquement le plus lourd, la Hongrie détient le record absolu, le Zimbabwe est le cas africain le plus emblématique, et l\'Argentine illustre une forme chronique, récurrente depuis des décennies.'
    },
    {
      type: 'associer',
      q: 'Associe chaque économiste à sa thèse principale sur l\'inflation :',
      paires: [
        { gauche: 'Milton Friedman', droite: 'L\'inflation est un phénomène monétaire' },
        { gauche: 'A. W. Phillips', droite: 'Arbitrage entre chômage et inflation' },
        { gauche: 'Irving Fisher', droite: 'Équation quantitative MV = PT' },
        { gauche: 'Paul Volcker', droite: 'Casser l\'inflation par des taux à 20 %' }
      ],
      explication: 'Fisher pose le cadre théorique dès 1911, Phillips observe la corrélation empirique en 1958, Friedman théorise le monétarisme dans les années 1960, et Volcker met cette doctrine en pratique à la Fed à partir de 1979.'
    },
    {
      q: 'Qu\'est-ce que l\'IPC ?',
      options: [
        'L\'Indicateur de Performance Commerciale',
        'L\'Indice des Prix à la Consommation, calculé à partir d\'un panier de biens représentatif',
        'L\'Indice de Production Centrale',
        'L\'Indicateur de Pouvoir Calorifique'
      ],
      correcte: 1,
      explication: 'L\'IPC est l\'instrument standard de mesure de l\'inflation. Il repose sur un panier de biens et services pondéré selon le poids réel des dépenses des ménages, dont les prix sont relevés mensuellement par les instituts statistiques (INSEE en France, BLS aux États-Unis).'
    },
    {
      q: 'Quelle est la principale différence entre inflation par la demande et inflation par les coûts ?',
      options: [
        'L\'une concerne les biens, l\'autre les services',
        'L\'inflation par la demande vient d\'un excès de demande face à l\'offre, l\'inflation par les coûts vient d\'une hausse des coûts de production répercutée dans les prix',
        'L\'une concerne le court terme, l\'autre le long terme',
        'L\'une est mesurée par l\'IPC, l\'autre non'
      ],
      correcte: 1,
      explication: 'L\'inflation par la demande est tirée vers le haut : trop d\'argent qui poursuit trop peu de biens. L\'inflation par les coûts est poussée par le bas de la chaîne : hausse du pétrole, des salaires ou des matières premières que les entreprises répercutent sur leurs prix de vente.'
    },
    {
      q: 'Que représente l\'équation MV = PT, dite équation de Fisher ?',
      options: [
        'L\'équilibre du marché du travail',
        'L\'équation quantitative de la monnaie : la masse monétaire multipliée par sa vitesse de circulation égale les prix multipliés par les transactions',
        'La courbe de demande agrégée',
        'La fonction de production néoclassique'
      ],
      correcte: 1,
      explication: 'Formulée par Irving Fisher en 1911, cette équation est le pilier théorique du monétarisme. Si V (vitesse) et T (volume) sont relativement stables, alors une augmentation de M (masse monétaire) se traduit mécaniquement par une hausse de P (prix). C\'est sur cette base que Friedman a bâti sa thèse.'
    },
    {
      q: 'Quel taux d\'inflation mensuel correspond conventionnellement à une hyperinflation ?',
      options: [
        '2 % par mois',
        '10 % par mois',
        '50 % par mois ou plus',
        '500 % par an'
      ],
      correcte: 2,
      explication: 'Le seuil conventionnel d\'hyperinflation, popularisé par l\'économiste Philip Cagan en 1956, est de 50 % par mois — soit, en taux annuel composé, une multiplication des prix par environ 130 en un an.'
    },
    {
      q: 'Quel président de la Réserve fédérale est célèbre pour avoir cassé l\'inflation américaine au début des années 1980 ?',
      options: [
        'Alan Greenspan',
        'Ben Bernanke',
        'Paul Volcker',
        'Janet Yellen'
      ],
      correcte: 2,
      explication: 'Nommé à la Fed en 1979 face à une inflation de 13,3 %, Paul Volcker a monté brutalement les taux directeurs jusqu\'à 20 % en 1980-1981. La récession qui s\'ensuivit fut sévère, mais l\'inflation tomba à 3,2 % en 1983. Acte de naissance de la doctrine moderne de stabilité des prix.'
    },
    {
      q: 'Qu\'est-ce que la stagflation, terme apparu dans les années 1970 ?',
      options: [
        'Une période de croissance forte sans inflation',
        'Une coexistence d\'une forte inflation et d\'un chômage élevé, ce que la courbe de Phillips classique excluait',
        'Une déflation persistante comme au Japon',
        'Une politique monétaire restrictive'
      ],
      correcte: 1,
      explication: 'La stagflation est la conjonction d\'une stagnation économique (chômage élevé) et d\'une forte inflation. Apparue dans les années 1970 sous l\'effet des chocs pétroliers, elle a invalidé la lecture simple de la courbe de Phillips et ouvert la voie au monétarisme de Friedman.'
    },
    {
      q: 'Quelle est la cible d\'inflation officiellement adoptée par la Fed et la BCE ?',
      options: [
        '0 %',
        '2 % par an',
        '5 % par an',
        'Aucune cible explicite'
      ],
      correcte: 1,
      explication: 'Les deux grandes banques centrales visent 2 % d\'inflation annuelle. Cette cible est jugée assez basse pour préserver la valeur de la monnaie, et assez haute pour garder une marge de sécurité face à la déflation — bien plus difficile à enrayer, comme l\'a montré le cas japonais.'
    }
  ]

});
