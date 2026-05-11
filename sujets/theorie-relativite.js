/* ===================================================================
   SUJET — La relativité d'Einstein
   ===================================================================
   De la lumière inviolable à l'espace-temps courbe.
   Domaine : Physique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'theorie-relativite',
    titre: `La <em>relativité</em> d'Einstein`,
    domaines: ['Physique'],
    tags: ['einstein', 'espace-temps', 'gravitation', 'lumière', 'cosmologie'],
    difficulte: 3,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['mecanique-quantique', 'trous-noirs', 'big-bang', 'theorie-des-cordes'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Comprendre l'œuvre maîtresse d'Einstein : la relativité restreinte (1905), qui détruit l'idée d'un temps absolu, puis la relativité générale (1915), qui transforme la gravitation en géométrie. Une théorie aujourd'hui vérifiée à chaque ping GPS.`,

  points_cles: [
    `La **relativité restreinte** (1905) repose sur deux postulats : les lois de la physique sont identiques dans tous les référentiels inertiels, et la **vitesse de la lumière** dans le vide est la même pour tous les observateurs — soit *c ≈ 299 792 458 m/s*.`,
    `Conséquences vertigineuses : **dilatation du temps**, **contraction des longueurs**, perte de simultanéité absolue. Le temps d'un voyageur rapide s'écoule plus lentement que celui d'un sédentaire.`,
    `L'équivalence **E = mc²** (1905) lie masse et énergie : un gramme de matière équivaut à environ **25 millions de kWh** — fondement énergétique de toute la physique nucléaire.`,
    `La **relativité générale** (1915) étend le principe à la gravitation : ce que Newton appelait *force* devient une **courbure de l'espace-temps** produite par la masse et l'énergie elles-mêmes.`,
    `Confirmation spectaculaire en **1919** : **Arthur Eddington** observe pendant une éclipse solaire la déviation de la lumière des étoiles par le Soleil — exactement la valeur prédite. Einstein devient une icône mondiale en quelques jours.`,
    `La théorie prédit l'**avance du périhélie de Mercure**, les **ondes gravitationnelles** (détectées en 2015 par LIGO), les **trous noirs** et l'**expansion de l'univers**.`,
    `Sans correction relativiste, le **GPS** dériverait d'environ **10 km par jour** : les horloges atomiques en orbite battent plus vite que celles au sol de quelques dizaines de microsecondes par jour.`
  ],

  carte_mentale: {
    central: 'relativite',
    noeuds: [
      { id: 'relativite', label: `Relativité d'Einstein`, description: `Cadre conceptuel élaboré entre 1905 et 1915, qui réunit espace, temps, matière et gravitation.` },
      { id: 'restreinte', label: 'Restreinte (1905)', description: `Postulats sur la lumière et l'invariance des lois. Conséquences : dilatation du temps, contraction des longueurs, équivalence masse-énergie.` },
      { id: 'generale', label: 'Générale (1915)', description: `La gravité n'est pas une force mais une **courbure** de l'espace-temps produite par la masse et l'énergie.` },
      { id: 'confirmations', label: 'Confirmations', description: `Mercure, éclipse de 1919, GPS, ondes gravitationnelles, image du trou noir M87*.` },
      { id: 'consequences', label: 'Conséquences', description: `Trous noirs, expansion de l'univers, [[big-bang]], cosmologie moderne.` },

      // Restreinte
      { id: 'postulats', label: 'Deux postulats', description: `1) Lois identiques en tous référentiels inertiels. 2) La vitesse de la lumière est invariante — la même pour tous.`, parent: 'restreinte' },
      { id: 'dilatation', label: 'Dilatation du temps', description: `Une horloge en mouvement bat plus lentement vue depuis le repos. Vérifié sur des muons cosmiques et des horloges atomiques embarquées.`, parent: 'restreinte' },
      { id: 'emc2', label: `E = mc²`, description: `Masse et énergie sont **deux faces** de la même grandeur. Justifie l'énergie nucléaire et l'énergie solaire.`, parent: 'restreinte' },

      // Générale
      { id: 'equivalence', label: `Principe d'équivalence`, description: `Un observateur en chute libre ne ressent pas son poids. Localement, **gravité = accélération**. Le point de départ d'Einstein, à partir de 1907.`, parent: 'generale' },
      { id: 'courbure', label: 'Espace-temps courbe', description: `La masse-énergie courbe l'espace-temps ; les corps suivent la géodésique la plus droite possible dans cette géométrie déformée.`, parent: 'generale' },
      { id: 'equations', label: `Équations d'Einstein`, description: `Dix équations couplées qui relient la courbure (à gauche) à la matière-énergie (à droite). Le cœur mathématique de la relativité générale.`, parent: 'generale' },

      // Confirmations
      { id: 'mercure', label: 'Périhélie de Mercure', description: `L'orbite de Mercure tourne lentement sur elle-même. Anomalie inexpliquée par Newton, prédite **exactement** par Einstein dès novembre 1915.`, parent: 'confirmations' },
      { id: 'eddington', label: 'Eddington (1919)', description: `Éclipse solaire au large de l'Afrique : la lumière des étoiles est déviée par le Soleil. Le 7 novembre 1919, le *Times* titre : *« Révolution scientifique »*.`, parent: 'confirmations' },
      { id: 'ligo', label: 'LIGO (2015)', description: `Première détection directe des **ondes gravitationnelles** issues de la fusion de deux trous noirs. Prix Nobel 2017.`, parent: 'confirmations' },
      { id: 'gps', label: 'GPS', description: `Les satellites GPS appliquent en permanence une double correction relativiste (restreinte + générale). Sans elle, ~10 km de dérive par jour.`, parent: 'confirmations' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>question</em> d'enfance`,
      contenu_md:
`Vers seize ans, Einstein se pose une question apparemment innocente : que verrait-on en chevauchant un rayon de lumière ?

D'après la mécanique de Newton, on devrait voir une onde électromagnétique **immobile** à côté de soi — comme un coureur qui rattrape une vague et la regarde figée. Mais l'électromagnétisme de Maxwell, formalisé dans les années 1860, prédit l'inverse : la lumière se propage à une vitesse *c* fixée par deux constantes universelles, indépendamment de qui regarde. Aucune onde lumineuse immobile ne peut exister.

Le jeune homme tient la contradiction. Dix ans plus tard, employé à l'office des brevets de Berne, il publie en l'**année miraculeuse 1905** quatre articles qui changent la physique — dont celui sur la relativité restreinte. Il a vingt-six ans.`
    },

    {
      type: 'widget',
      titre: `L'équivalence masse-énergie`,
      composant: 'Equation',
      params: {
        tex: 'E = mc^2',
        legende: `Une masse au repos possède une énergie *E* égale à *m* fois la vitesse de la lumière au carré. Avec c ≈ 3·10⁸ m/s, un seul gramme représente environ 9·10¹³ joules — l'équivalent de 25 millions de kWh.`,
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      titre: `Le temps qui <em>s'étire</em>, la longueur qui se contracte`,
      contenu_md:
`Les deux postulats de la relativité restreinte ont l'air anodins : les lois physiques sont les mêmes pour tous les observateurs inertiels, et la **vitesse de la lumière** dans le vide vaut *c* pour tous, quel que soit leur propre mouvement. Tout en découle.

Imagine deux jumeaux. L'un reste sur Terre, l'autre embarque dans un vaisseau à 90 % de la vitesse de la lumière, fait demi-tour, revient. À son retour, le voyageur est **plus jeune** que son frère. Le temps, pour lui, s'est réellement écoulé plus lentement. Ce n'est pas une illusion : c'est une propriété de la **géométrie** du monde.

De la même manière, un objet qui passe devant toi à vitesse relativiste apparaît **contracté** dans le sens du mouvement. Et deux événements simultanés pour un observateur ne le sont plus pour un autre qui se déplace par rapport au premier. La [simultanéité absolue]{accent} de Newton — l'idée d'un *maintenant* universel — disparaît.

Tout cela a été vérifié. Les **muons** créés dans la haute atmosphère par les rayons cosmiques devraient se désintégrer avant d'atteindre le sol ; ils y arrivent, parce que leur horloge interne ralentit vue depuis la Terre. Des horloges atomiques transportées en avion accumulent des écarts mesurables avec leurs jumelles restées au sol.`
    },

    {
      type: 'encadre',
      label: `Pourquoi "restreinte" ?`,
      contenu_md: `La théorie de 1905 ne traite que des référentiels **inertiels** — ceux qui se déplacent à vitesse constante, sans accélération ni gravité. C'est en ce sens qu'elle est *restreinte*. Étendre le principe aux référentiels accélérés et à la gravitation prendra dix années supplémentaires à Einstein — et donnera la [relativité générale]{accent}.`
    },

    {
      type: 'texte',
      titre: `Le <em>moment</em> heureux d'Einstein`,
      contenu_md:
`En 1907, Einstein a ce qu'il décrira plus tard comme *« la pensée la plus heureuse de ma vie »*. Une personne en **chute libre** ne ressent pas son poids. Localement, autour d'elle, tout se passe comme si la gravité avait disparu.

Réciproquement, dans une fusée qui accélère dans le vide intergalactique, un voyageur enfermé sans hublot ne saurait pas distinguer cette accélération d'une vraie gravité. Cette **équivalence locale** entre gravitation et accélération devient le principe fondateur de la relativité générale.

Si la gravité est indiscernable de l'accélération, et que toutes les lois de la physique doivent être valables dans tous les référentiels — accélérés compris —, alors la gravité ne peut plus être une force au sens de Newton. Elle doit être une propriété **géométrique** du décor lui-même. La masse et l'énergie courbent l'espace-temps autour d'elles ; et les corps qui tombent ne font que suivre la ligne la plus droite possible dans cette géométrie déformée.

Einstein met **huit ans** à formaliser cette intuition. Il apprend la géométrie différentielle de Riemann, peine sur les équations, écrit à son ami Marcel Grossmann *« Aide-moi, sinon je deviens fou »*. En novembre 1915, il y arrive.`
    },

    {
      type: 'widget',
      titre: `Les équations d'Einstein`,
      composant: 'Equation',
      params: {
        tex: 'R_{\\mu\\nu} - \\tfrac{1}{2}\\, g_{\\mu\\nu}\\, R = \\frac{8\\pi G}{c^4}\\, T_{\\mu\\nu}',
        legende: `À gauche, la **géométrie** : R_μν et R décrivent la courbure de l'espace-temps, g_μν sa métrique. À droite, le **contenu** : T_μν est le tenseur énergie-impulsion (matière, rayonnement, pression). John Wheeler résumait : *« La matière dit à l'espace-temps comment se courber ; l'espace-temps dit à la matière comment bouger »*.`,
        affichage: 'block'
      }
    },

    {
      type: 'widget',
      titre: `Quelques jalons de la relativité`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1905', titre: 'Relativité restreinte', description: `Einstein publie *« Sur l'électrodynamique des corps en mouvement »*. Trois mois plus tard, un article complémentaire de trois pages introduit **E = mc²**.` },
          { date: '1907', titre: `Principe d'équivalence`, description: `Einstein réalise que la chute libre annule localement la gravité. C'est le germe de la relativité générale.` },
          { date: '1915', titre: 'Équations de champ', description: `Einstein finalise sa théorie devant l'Académie de Berlin. Quelques jours plus tard, **David Hilbert** publie une dérivation indépendante des mêmes équations.` },
          { date: '1919', titre: 'Éclipse d\'Eddington', description: `À Sobral (Brésil) et Príncipe (Afrique de l'Ouest), Eddington photographie les étoiles autour du Soleil éclipsé. La déviation mesurée concorde avec la prédiction. Einstein devient une célébrité planétaire.` },
          { date: '1929', titre: 'Hubble et l\'expansion', description: `Edwin Hubble observe que les galaxies s'éloignent de nous — l'univers est en **expansion**, comme la relativité générale le permettait. Voir [[big-bang]].` },
          { date: '1971', titre: 'Hafele-Keating', description: `Deux horloges atomiques font le tour du monde en avion. À leur retour, leur écart avec une horloge restée au sol concorde avec la prédiction relativiste, **à la nanoseconde près**.` },
          { date: '2015', titre: 'Ondes gravitationnelles', description: `LIGO détecte le 14 septembre les **ondes gravitationnelles** émises par la fusion de deux trous noirs il y a 1,3 milliard d'années. Prix Nobel 2017.` },
          { date: '2019', titre: `Image d'un trou noir`, description: `L'Event Horizon Telescope publie la première image de M87*. Le disque d'accrétion correspond parfaitement aux simulations relativistes. Voir [[trous-noirs]].` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Trois <em>épreuves</em> classiques`,
      contenu_md:
`Einstein lui-même propose trois tests de sa théorie. Le premier, c'est l'**avance du périhélie de Mercure**. L'orbite de cette planète, la plus proche du Soleil, tourne lentement sur elle-même d'une fraction de seconde d'arc par siècle. Newton n'explique pas tout. Einstein recalcule en novembre 1915, retrouve **exactement** l'écart observé. Il écrit à un ami qu'il en a eu *« des palpitations cardiaques »*.

Le second test, c'est la **déviation de la lumière** par un corps massif. Si l'espace-temps est courbé par le Soleil, un rayon lumineux passant à proximité doit être légèrement infléchi. Eddington le mesure pendant l'éclipse de 1919 : l'effet est bien là, à la valeur prédite. Le 7 novembre, la presse britannique fait sa une sur la *« révolution scientifique »* et Einstein, jusque-là inconnu du grand public, devient en quelques jours l'icône scientifique du XXᵉ siècle.

Le troisième test, c'est le **décalage gravitationnel** vers le rouge : une horloge plus proche d'une masse importante bat plus lentement qu'une horloge éloignée. Mesuré en 1959 par Pound et Rebka au sommet de la tour Jefferson à Harvard, avec une précision époustouflante. C'est ce même effet qui force le GPS à appliquer une correction permanente.`
    },

    {
      type: 'widget',
      titre: `Quatre prédictions, quatre vérifications`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: '1915', titre: 'Mercure', description: `Avance du périhélie de **43"** par siècle, inexpliquée par Newton. Einstein retrouve la valeur exacte dès la première publication.` },
          { tag: '1919', titre: 'Eddington', description: `Déviation de la lumière des étoiles par le Soleil : **1,75"** d'angle, mesurée pendant une éclipse. Première vérification spectaculaire.` },
          { tag: '1959', titre: 'Pound-Rebka', description: `Décalage gravitationnel vers le rouge : un photon perd un peu d'énergie en grimpant le long d'un champ gravitationnel. Vérifié à 1 % près sur 22 mètres de hauteur.` },
          { tag: '2015', titre: 'LIGO', description: `Détection directe des **ondes gravitationnelles** émises par deux trous noirs en fusion. Signal d'à peine **un dix-millième** du diamètre d'un proton.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Pourquoi ton <em>GPS</em> doit lire Einstein`,
      contenu_md:
`L'exemple le plus tangible — et le plus quotidien — de la relativité, c'est ton téléphone. Les satellites du **GPS** orbitent à environ 20 000 km d'altitude, à 14 000 km/h. Deux effets relativistes s'y additionnent.

À cause de la **relativité restreinte**, les horloges atomiques embarquées sont en mouvement rapide par rapport au sol : leur temps s'écoule un peu plus lentement, d'environ **7 microsecondes par jour**. À cause de la **relativité générale**, ces mêmes horloges sont plus haut dans le champ gravitationnel terrestre (plus loin du centre de la Terre) : leur temps s'écoule un peu plus **vite**, d'environ **45 microsecondes par jour**.

Bilan net : les horloges en orbite avancent d'environ **38 microsecondes par jour** sur celles du sol. Si on ne corrigeait pas, l'erreur de positionnement s'accumulerait à raison de **10 kilomètres par jour**. Le GPS deviendrait inutilisable en quelques heures.

Aujourd'hui, les satellites embarquent une horloge dont la fréquence est **délibérément décalée à l'avance** pour compenser la dérive. Chaque navigation routière, chaque atterrissage d'avion, chaque livraison repose silencieusement sur les équations d'Einstein.`
    },

    {
      type: 'encadre',
      label: `La grande frontière`,
      contenu_md: `La relativité générale décrit superbement le très grand : étoiles, galaxies, [[trous-noirs]], expansion cosmique. La [[mecanique-quantique]] décrit superbement le très petit : atomes, particules, intrication. Mais aux endroits où les deux devraient se rencontrer — l'intérieur d'un trou noir, les premiers instants du [[big-bang]] —, elles sont **incompatibles**. Cent ans après Einstein, élaborer une **gravité quantique** reste le grand chantier ouvert de la physique théorique. Théorie des cordes, gravité quantique à boucles, hypothèses émergentes : aucune ne fait consensus expérimental.`
    }

  ],

  quiz: [
    {
      type: 'texte-a-trou',
      q: 'Complète l\'équation et l\'année :',
      texte: 'En {1905}, Einstein publie sa relativité restreinte, qui aboutit à la fameuse équivalence masse-énergie E = m {c}².',
      explication: 'Année miraculeuse 1905 : Einstein publie quatre articles révolutionnaires dont la relativité restreinte. L\'équivalence E = mc² (où c est la vitesse de la lumière) découle directement des postulats de la théorie.'
    },
    {
      q: `Sur quels deux postulats repose la relativité restreinte ?`,
      options: [
        `La gravité est universelle, et le temps est absolu`,
        `Les lois de la physique sont les mêmes dans tous les référentiels inertiels, et la vitesse de la lumière dans le vide est la même pour tous les observateurs`,
        `Tout est relatif, et rien ne va plus vite que la lumière`,
        `La masse est constante, et l'énergie se conserve`
      ],
      correcte: 1,
      explication: `Ces deux postulats — invariance des lois et invariance de la vitesse de la lumière — sont publiés par Einstein en 1905. Tout le reste (dilatation du temps, E=mc², etc.) en découle mathématiquement.`
    },
    {
      q: `Que signifie l'équation E = mc² ?`,
      options: [
        `L'énergie est égale à la masse multipliée par la vitesse`,
        `Masse et énergie sont équivalentes : un gramme de matière correspond à environ 9·10¹³ joules, soit ~25 millions de kWh`,
        `L'énergie d'un photon est proportionnelle à sa fréquence`,
        `Une particule au repos n'a pas d'énergie`
      ],
      correcte: 1,
      explication: `Masse et énergie sont deux faces de la même grandeur. C'est cette équivalence qui rend possible la fission nucléaire, la fusion solaire, et qui explique d'où vient l'énergie des étoiles.`
    },
    {
      q: `Qu'est-ce que la dilatation du temps ?`,
      options: [
        `Une illusion d'optique des objets rapides`,
        `Le fait qu'une horloge en mouvement bat réellement plus lentement, vue depuis un observateur au repos`,
        `Le ralentissement des montres à pile usée`,
        `Une déformation causée par la gravité uniquement`
      ],
      correcte: 1,
      explication: `Le temps lui-même s'écoule plus lentement pour un objet en mouvement rapide, vu depuis un observateur au repos. Vérifié sur les muons cosmiques, les horloges atomiques embarquées en avion, et confirmé par le fonctionnement même du GPS.`
    },
    {
      q: `Quelle idée nouvelle apporte la relativité générale (1915) par rapport à Newton ?`,
      options: [
        `La gravité est une force qui agit à distance instantanément`,
        `La gravité n'est pas une force mais une courbure de l'espace-temps produite par la masse et l'énergie`,
        `La gravité dépend de la température`,
        `Il n'y a pas de gravité`
      ],
      correcte: 1,
      explication: `Einstein remplace la *force* gravitationnelle par une **géométrie**. Les corps qui tombent ne sont pas poussés : ils suivent la ligne la plus droite possible dans un espace-temps courbé par la masse-énergie.`
    },
    {
      q: `Qu'a observé Arthur Eddington pendant l'éclipse solaire du 29 mai 1919 ?`,
      options: [
        `La disparition du Soleil`,
        `La déviation de la lumière des étoiles passant près du Soleil, exactement comme la relativité générale le prédisait`,
        `Une nouvelle planète`,
        `Le rayonnement de fond cosmologique`
      ],
      correcte: 1,
      explication: `Les positions apparentes des étoiles proches du Soleil étaient décalées de ~1,75" d'angle — la valeur précisément prédite par Einstein. Ce résultat a propulsé Einstein au rang d'icône mondiale en quelques jours.`
    },
    {
      q: `Pourquoi le GPS doit-il corriger les effets relativistes ?`,
      options: [
        `Pour économiser la batterie des satellites`,
        `Parce que les horloges en orbite, en mouvement rapide et plus haut dans le champ gravitationnel, dérivent d'environ 38 microsecondes par jour — soit ~10 km d'erreur quotidienne`,
        `Pour éviter les interférences atmosphériques`,
        `Parce que la Terre tourne sur elle-même`
      ],
      correcte: 1,
      explication: `Effet de la relativité restreinte (mouvement) : -7 μs/jour. Effet de la relativité générale (altitude) : +45 μs/jour. Net : +38 μs/jour. Sans correction permanente, le système deviendrait inutilisable en quelques heures.`
    },
    {
      q: `Qu'est-ce qu'une onde gravitationnelle ?`,
      options: [
        `Un type de marée océanique`,
        `Une ondulation de l'espace-temps lui-même, prédite par Einstein en 1916 et détectée pour la première fois par LIGO en 2015`,
        `Une onde électromagnétique de basse fréquence`,
        `Le rayonnement émis par les étoiles à neutrons`
      ],
      correcte: 1,
      explication: `Quand des masses très compactes accélèrent (deux trous noirs qui fusionnent, par exemple), elles déforment l'espace-temps autour d'elles et émettent des ondes. LIGO a détecté ces ondes pour la première fois le 14 septembre 2015. Prix Nobel 2017.`
    },
    {
      q: `Pourquoi parle-t-on de relativité *restreinte* et de relativité *générale* ?`,
      options: [
        `La restreinte est plus difficile, la générale plus accessible`,
        `La restreinte se limite aux référentiels inertiels sans gravité ; la générale étend le principe aux référentiels accélérés et à la gravitation`,
        `La restreinte concerne les particules, la générale les objets macroscopiques`,
        `Ce sont deux noms différents pour la même théorie`
      ],
      correcte: 1,
      explication: `1905 : restreinte aux référentiels inertiels (mouvement uniforme). 1915 : généralisée à tout référentiel, y compris accélérés, ce qui intègre naturellement la gravitation comme géométrie de l'espace-temps.`
    }
  ]

});
