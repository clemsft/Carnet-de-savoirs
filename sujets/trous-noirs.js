/* ===================================================================
   SUJET — Voyage au cœur des trous noirs
   ===================================================================
   Premier sujet du Carnet de Savoirs, migré depuis la fiche standalone.
   Domaines : Astrophysique, Physique
   =================================================================== */

window.CarnetDeSavoirs.register({

  // ============== MÉTADONNÉES ==============
  meta: {
    id: 'trous-noirs',
    titre: 'Voyage au cœur des <em>trous noirs</em>',
    domaines: ['Astrophysique', 'Physique'],
    tags: ['relativité générale', 'cosmologie', 'gravitation', 'étoiles'],
    difficulte: 2,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: ['mecanique-quantique', 'conquete-spatiale-moderne'],
    date_creation: '2026-05-09',
    date_maj: '2026-05-09'
  },

  // ============== RÉSUMÉ ==============
  resume: 'Comprendre les objets les plus extrêmes de l\'univers : depuis le concept de vitesse de libération jusqu\'au rôle cosmique des trous noirs supermassifs au centre des galaxies.',

  // ============== POINTS-CLÉS ==============
  points_cles: [
    'Un **trou noir** est un objet si compact que sa **vitesse de libération** dépasse celle de la lumière — d\'où son nom.',
    'L\'**horizon des événements** est la frontière de non-retour : ce n\'est pas une paroi physique mais un seuil mathématique dans l\'espace.',
    'Au centre, la **singularité** : un point théorique de densité infinie où notre physique actuelle ne sait plus répondre.',
    'Les trous noirs **stellaires** naissent de l\'effondrement d\'étoiles très massives (>25 masses solaires) en fin de vie, après une supernova.',
    'Ils existent en trois familles : **stellaires**, **intermédiaires**, et **supermassifs** (au centre des galaxies).',
    'Bien qu\'invisibles directement, on les détecte par leurs effets : disque d\'accrétion en rayons X, mouvements gravitationnels, ondes gravitationnelles, ou imagerie de leur ombre.',
    'Les trous noirs supermassifs **régulent activement** la croissance de leur galaxie — corrélation 1/1000 avec le bulbe galactique.'
  ],

  // ============== CARTE MENTALE LOCALE ==============
  carte_mentale: {
    central: 'trou-noir',
    noeuds: [
      {
        id: 'trou-noir',
        label: 'Trou noir',
        description: 'Objet ultra-compact dont la gravité empêche toute lumière de s\'échapper.'
      },
      {
        id: 'vlib',
        label: 'Vitesse de libération',
        description: 'Vitesse minimale pour s\'échapper de la gravité d\'un astre. Quand elle atteint *c*, c\'est un trou noir.'
      },
      {
        id: 'horizon',
        label: 'Horizon des événements',
        description: 'Frontière mathématique au-delà de laquelle même la lumière est piégée.'
      },
      {
        id: 'singularite',
        label: 'Singularité',
        description: 'Point central de densité infinie — où la relativité générale "casse".'
      },
      {
        id: 'naissance',
        label: 'Effondrement stellaire',
        description: 'Mort d\'une étoile >25 M☉ en supernova → naissance d\'un trou noir stellaire.'
      },
      {
        id: 'familles',
        label: 'Trois familles',
        description: 'Stellaires, intermédiaires, supermassifs — selon leur masse.'
      },
      // Sous-niveau de "familles" — apparaît au clic via le drill-down
      {
        id: 'stellaires',
        label: 'Stellaires',
        description: '3 à 100 M☉. Nés de l\'effondrement d\'étoiles très massives. Probablement des centaines de millions dans la seule Voie lactée.',
        parent: 'familles'
      },
      {
        id: 'intermediaires',
        label: 'Intermédiaires',
        description: '100 à 100 000 M☉. Le [chaînon manquant]{accent}, très rare à observer. Quelques candidats détectés ces dernières années seulement.',
        parent: 'familles'
      },
      {
        id: 'supermassifs',
        label: 'Supermassifs',
        description: 'Millions à milliards de M☉. Au centre de presque toutes les galaxies. **Sagittarius A\*** ≈ 4 millions M☉. **M87\*** ≈ 6,5 milliards M☉.',
        parent: 'familles'
      },
      {
        id: 'observation',
        label: 'Détection indirecte',
        description: 'Disques d\'accrétion en X, mouvements d\'étoiles, ondes gravitationnelles, ombre EHT.'
      },
      // Sous-niveau de "observation" — chaque méthode de détection
      {
        id: 'rayons-x',
        label: 'Rayons X',
        description: 'Disques d\'accrétion ultra-chauds. **Cygnus X-1** fut le premier trou noir confirmé (années 1970).',
        parent: 'observation'
      },
      {
        id: 'ondes-grav',
        label: 'Ondes grav.',
        description: 'Détection **LIGO/Virgo** en 2015 — confirmation d\'une prédiction d\'Einstein vieille d\'un siècle.',
        parent: 'observation'
      },
      {
        id: 'eht',
        label: 'EHT',
        description: '[Event Horizon Telescope]{accent} : réseau de radiotélescopes coordonnés à l\'échelle planétaire. Première image de **M87\*** en 2019, puis Sagittarius A\* en 2022.',
        parent: 'observation'
      },
      {
        id: 'cosmique',
        label: 'Rôle cosmique',
        description: 'Les supermassifs régulent la formation stellaire de leur galaxie hôte.'
      }
    ],
    liens: [
      { de: 'trou-noir', vers: 'vlib' },
      { de: 'trou-noir', vers: 'horizon' },
      { de: 'trou-noir', vers: 'singularite' },
      { de: 'trou-noir', vers: 'naissance' },
      { de: 'trou-noir', vers: 'familles' },
      { de: 'trou-noir', vers: 'observation' },
      { de: 'trou-noir', vers: 'cosmique' }
    ]
  },

  // ============== COURS ==============
  cours: [

    // ----- Bloc 1 : Vitesse de libération -----
    {
      type: 'texte',
      titre: 'L\'idée fondamentale : la <em>vitesse de libération</em>',
      contenu_md:
`Tout commence par une question simple : à quelle vitesse faut-il aller pour échapper à la gravité d'un astre ?

Sur Terre, il faut **11,2 km/s** — c'est la vitesse minimale pour qu'une fusée s'arrache définitivement à l'attraction terrestre. Sur la Lune, beaucoup moins (2,4 km/s). Sur le Soleil, énormément plus (617 km/s).

Cette vitesse dépend de **deux ingrédients** : la [masse]{accent} de l'astre, et sa [compacité]{accent} (à quelle distance du centre on peut se trouver). Plus l'astre est massif et plus on peut s'en approcher, plus la vitesse de libération grimpe.`
    },

    // ----- Widget : Sélecteur de vitesse de libération -----
    {
      type: 'widget',
      titre: 'Sélectionnez un astre pour visualiser sa vitesse de libération',
      composant: 'SelecteurValeurs',
      params: {
        unite: 'km/s',
        indexInitial: 0,
        options: [
          { label: 'Lune', valeur: 2.4, description: 'Faible gravité, on peut sauter haut !' },
          { label: 'Terre', valeur: 11.2, description: 'Notre planète bleue.' },
          { label: 'Jupiter', valeur: 59.5, description: 'La géante gazeuse — déjà costaud.' },
          { label: 'Soleil', valeur: 617, description: 'Notre étoile, dense et massive.' },
          { label: 'Étoile à neutrons', valeur: 200000, description: 'Matière ultra-dense — un cube de la taille d\'un sucre pèse des milliards de tonnes.' },
          { label: 'Trou noir', valeur: 299792, description: 'Vitesse de la lumière atteinte. Plus rien ne peut s\'échapper. C\'est un trou noir.' }
        ]
      }
    },

    // ----- Encadré clé -----
    {
      type: 'encadre',
      label: 'À retenir',
      contenu_md: 'Un [trou noir]{accent} est un objet si compact que sa vitesse de libération **dépasse celle de la lumière**. Aucune lumière ne peut donc s\'en échapper — d\'où son nom.'
    },

    // ----- Bloc 2 : Horizon des événements -----
    {
      type: 'texte',
      titre: 'L\'horizon des <em>événements</em>',
      contenu_md:
`La frontière invisible au-delà de laquelle même la lumière ne peut plus s'échapper.

L'horizon des événements n'est **pas une paroi physique** — pas de mur, pas de surface qu'on heurterait. C'est une **frontière mathématique** dans l'espace, un seuil de non-retour.

À l'**extérieur** de l'horizon, on peut encore s'échapper si l'on va assez vite. **Sur** l'horizon, la vitesse de libération atteint exactement celle de la lumière. À l'**intérieur**, il faudrait dépasser la vitesse de la lumière pour s'échapper — chose impossible selon la relativité.

**L'effet relativiste — deux perspectives, deux vérités :** si un astronaute B franchit l'horizon, **il ne sent rien de particulier** à ce moment précis. Pour lui, l'espace continue d'avoir l'air normal. Mais depuis l'extérieur, l'astronaute A le verra **ralentir, se rougir, et sembler figé pour l'éternité** juste au-dessus de l'horizon. Les deux perspectives sont également valides — c'est la magie troublante de la relativité générale.`
    },

    // ----- Bloc 3 : Singularité -----
    {
      type: 'texte',
      titre: 'La <em>singularité</em> et la limite de notre savoir',
      contenu_md:
`Une fois la matière à l'intérieur de l'horizon, **plus rien ne peut arrêter sa chute**. Pas même les forces qui maintiennent normalement la matière "rigide" (pression atomique, forces quantiques de dégénérescence). La gravité écrase tout.

La matière s'effondre alors vers un point théorique de **volume nul et de densité infinie** : la [singularité]{accent}.

Un trou noir n'est donc **pas "rempli" de matière**. Toute la matière qui tombe dedans chute jusqu'à la singularité. Entre l'horizon et la singularité : **du vide**, mais un espace-temps tellement déformé que les notions classiques de distance et de temps perdent leur sens.`
    },

    {
      type: 'encadre',
      label: 'Le mur de la physique',
      contenu_md: 'À la singularité, les équations de la relativité générale donnent des résultats **infinis** — signe que notre théorie n\'est plus valable. Comprendre ce qui s\'y passe nécessiterait une théorie de [gravité quantique]{accent}, qui n\'existe pas encore.'
    },

    // ----- Bloc 4 : Naissance -----
    {
      type: 'texte',
      titre: 'Naissance d\'un <em>trou noir</em>',
      contenu_md:
`Un trou noir stellaire naît de la mort d'une étoile très massive.

Une étoile vit en **équilibre permanent** entre deux forces : la [gravité]{accent} qui veut l'effondrer, et la [pression interne]{accent} due à la fusion nucléaire qui pousse vers l'extérieur.

Quand le combustible s'épuise, l'équilibre se rompt. Le cœur s'effondre brutalement (**implosion**), et cette implosion provoque une onde de choc qui éjecte les couches externes : c'est la [supernova]{accent}.

Le destin du résidu central dépend alors d'un seul critère : **sa masse**.`
    },

    // ----- Widget : Curseur de masse stellaire -----
    {
      type: 'widget',
      titre: 'Faites varier la masse d\'une étoile pour voir son destin',
      composant: 'CurseurParametrique',
      params: {
        label: 'Masse initiale de l\'étoile',
        min: 0.5,
        max: 50,
        step: 0.1,
        valeurInitiale: 8,
        unite: 'M☉',
        degradePiste: '#5b8def 0%, #5b8def 16%, #ffb86c 16%, #ffb86c 50%, #ff6b35 50%, #ff6b35 100%',
        seuils: [
          {
            jusqua: 8,
            titre: 'Naine blanche',
            description: 'L\'étoile n\'est pas assez massive pour exploser en supernova classique. Elle expulse doucement ses couches externes (nébuleuse planétaire) et laisse un cœur dense mais stable, soutenu par la pression de dégénérescence des électrons. C\'est le destin de notre Soleil.',
            couleur: '#5b8def'
          },
          {
            jusqua: 25,
            titre: 'Étoile à neutrons',
            description: 'Supernova ! Le cœur s\'effondre mais s\'arrête à un stade ultra-dense où les protons et électrons ont fusionné en neutrons. Une cuillère à café pèserait des milliards de tonnes. Souvent observée comme pulsar.',
            couleur: '#ffb86c'
          },
          {
            jusqua: Infinity,
            titre: 'Trou noir stellaire',
            description: 'Supernova. Cette fois, même la pression des neutrons ne suffit pas. La gravité écrase tout, le cœur s\'effondre jusqu\'à la singularité. Un horizon des événements émerge — un trou noir vient de naître.',
            couleur: '#ff6b35'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Pourquoi le seuil des 25 masses solaires ?',
      contenu_md:
`Plus une étoile est massive au départ, plus le cœur résiduel après la supernova est lourd. À partir d'environ **25 masses solaires**, ce cœur est si massif que **même la pression de dégénérescence des neutrons ne suffit plus** à arrêter son effondrement. La gravité l'emporte définitivement, jusqu'à la singularité.`
    },

    // ----- Bloc 5 : Trois familles -----
    {
      type: 'texte',
      titre: 'Les trois familles de <em>trous noirs</em>',
      contenu_md: 'On classe les trous noirs par leur masse — qui détermine leur origine et leur rôle.'
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: '3 — 100 M☉',
            titre: 'Stellaires',
            description: 'Nés de l\'effondrement d\'étoiles très massives en fin de vie. Probablement des centaines de millions dans la seule Voie lactée.'
          },
          {
            tag: '100 — 100 000 M☉',
            titre: 'Intermédiaires',
            description: 'Le "chaînon manquant", très rare à observer. Quelques candidats détectés ces dernières années seulement.'
          },
          {
            tag: 'Millions — Milliards M☉',
            titre: 'Supermassifs',
            description: 'Au centre de presque toutes les galaxies. Sagittarius A* (notre galaxie) ≈ 4 millions M☉. M87* ≈ 6,5 milliards M☉.'
          }
        ]
      }
    },

    {
      type: 'texte',
      contenu_md: 'Il existe également des [trous noirs primordiaux]{accent} théoriques, qui auraient pu se former dans les premiers instants du Big Bang — mais aucune observation ne les a confirmés à ce jour.'
    },

    // ----- Bloc 6 : Observation -----
    {
      type: 'texte',
      titre: 'Comment observer l\'<em>invisible</em> ?',
      contenu_md:
`Un trou noir n'émet rien. Mais son environnement immédiat trahit sa présence.

Quand de la matière (gaz, étoile compagne) est arrachée par un trou noir, elle ne tombe pas en ligne droite : elle **tourbillonne** autour avant d'y plonger, formant un [disque d'accrétion]{accent}. Les frottements colossaux y portent la matière à des **millions de degrés**, qui rayonne alors intensément en rayons X.`
    },

    {
      type: 'widget',
      titre: 'Quatre méthodes de détection',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: 'Émission de rayons X',
            description: 'Détection des disques d\'accrétion ultra-chauds via télescopes spatiaux (Chandra, XMM-Newton, IXPE). Méthode historique : **Cygnus X-1** fut le premier trou noir confirmé dans les années 1970.'
          },
          {
            titre: 'Mouvements gravitationnels',
            description: 'Suivi d\'étoiles tournant autour d\'un point invisible. La méthode qui a confirmé **Sagittarius A*** au centre de notre galaxie. *Prix Nobel de physique 2020* pour Andrea Ghez et Reinhard Genzel.'
          },
          {
            titre: 'Ondes gravitationnelles',
            description: 'Vibrations de l\'espace-temps émises lors de la fusion de deux trous noirs. **Première détection en 2015** par LIGO/Virgo, confirmant une prédiction d\'Einstein vieille d\'un siècle.'
          },
          {
            titre: 'Imagerie directe de l\'ombre',
            description: 'L\'[Event Horizon Telescope]{accent}, réseau de radiotélescopes coordonnés à l\'échelle planétaire. **Première image en 2019** (M87*), suivie de Sagittarius A* en 2022. La reconstitution de l\'image elle-même a nécessité des **algorithmes d\'apprentissage** sophistiqués (voir [[ia-generative]]).'
          }
        ]
      }
    },

    // ----- Bloc 7 : Supermassifs -----
    {
      type: 'texte',
      titre: 'Les supermassifs : <em>architectes des galaxies</em>',
      contenu_md:
`Loin d'être de simples puits gravitationnels, les trous noirs supermassifs sculptent les galaxies qui les abritent.

Une découverte majeure des années 2000 : la masse du trou noir supermassif central est **proportionnelle à la masse du bulbe galactique**, dans un rapport remarquablement constant d'environ **1 / 1 000**.

Cette corrélation est intrigante : comment un objet aussi compact peut-il être en relation rigoureuse avec une galaxie 100 000 fois plus grande que sa zone d'influence ?

**Le mécanisme du feedback :** quand un trou noir supermassif avale du gaz à grande vitesse (phase de [noyau actif]{accent} ou [quasar]{accent}), son disque d'accrétion brille parfois **plus que toutes les étoiles de la galaxie réunies**. Cette énergie monstrueuse rayonne vers l'extérieur, **chauffe et souffle** le gaz interstellaire. Or un gaz chaud et dispersé ne peut plus s'effondrer pour former de nouvelles étoiles. Le trou noir **étouffe la formation stellaire** de sa propre galaxie.`
    },

    {
      type: 'encadre',
      label: 'Auto-régulation',
      contenu_md: 'Le trou noir grossit tant qu\'il y a du gaz à avaler — mais en grossissant, il rayonne tellement qu\'il chasse le gaz restant et **s\'arrête lui-même de grossir**, en même temps qu\'il stoppe la naissance de nouvelles étoiles. C\'est un mécanisme de [co-évolution]{accent} qui explique le rapport 1/1000.'
    }

  ],

  // ============== QUIZ ==============
  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'L\'horizon des événements d\'un trou noir est une paroi physique faite de matière très dense.',
      reponse: false,
      explication: 'L\'horizon n\'est pas une paroi physique : c\'est une frontière mathématique dans l\'espace, un seuil de non-retour au-delà duquel la vitesse de libération dépasse celle de la lumière. Un astronaute le franchirait sans rien sentir de particulier sur le moment.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces jalons de l\'histoire des trous noirs dans l\'ordre chronologique :',
      items: [
        'Einstein publie la relativité générale qui prédit les trous noirs',
        'Cygnus X-1 est confirmé comme premier trou noir stellaire',
        'LIGO détecte les premières ondes gravitationnelles issues d\'une fusion de trous noirs',
        'L\'Event Horizon Telescope publie la première image de M87*',
        'L\'EHT publie l\'image de Sagittarius A* au centre de notre galaxie'
      ],
      explication: 'La relativité générale prédit théoriquement les trous noirs dès 1916. Il faudra attendre les années 1970 pour la première confirmation observationnelle (Cygnus X-1), puis LIGO en 2015 pour les ondes gravitationnelles, et enfin l\'EHT pour les premières images directes (M87* en 2019, Sgr A* en 2022).'
    },
    {
      type: 'associer',
      q: 'Associe chaque famille de trous noirs à son ordre de grandeur de masse :',
      paires: [
        { gauche: 'Stellaires', droite: '3 à 100 masses solaires' },
        { gauche: 'Intermédiaires', droite: '100 à 100 000 masses solaires' },
        { gauche: 'Supermassifs', droite: 'Millions à milliards de masses solaires' }
      ],
      explication: 'Les trous noirs se classent par leur masse : les stellaires naissent de l\'effondrement d\'étoiles très massives ; les intermédiaires restent le "chaînon manquant" très rare à observer ; les supermassifs trônent au centre des galaxies (Sgr A* ≈ 4 millions M☉, M87* ≈ 6,5 milliards M☉).'
    },
    {
      q: 'De quoi dépend la vitesse de libération d\'un astre ?',
      options: [
        'Uniquement de sa masse',
        'Uniquement de sa température',
        'De sa masse et de sa compacité (distance au centre)',
        'De sa vitesse de rotation'
      ],
      correcte: 2,
      explication: 'Plus un astre est massif et plus on peut s\'en approcher (donc plus il est compact), plus la vitesse de libération est grande. Un trou noir naît quand cette vitesse atteint celle de la lumière.'
    },
    {
      q: 'L\'horizon des événements d\'un trou noir est-il une paroi physique ?',
      options: [
        'Oui, un mur de matière dense',
        'Non, une frontière mathématique dans l\'espace',
        'Oui, une coquille de plasma chaud',
        'Non, c\'est le bord de la singularité'
      ],
      correcte: 1,
      explication: 'L\'horizon n\'est pas matériel : c\'est un seuil au-delà duquel la vitesse de libération dépasse celle de la lumière. Un astronaute le franchirait sans rien sentir de particulier.'
    },
    {
      q: 'Si un astronaute franchit l\'horizon d\'un trou noir, que ressent-il à cet instant précis ?',
      options: [
        'Un choc violent',
        'Une déchirure instantanée',
        'Rien de particulier — l\'espace local lui semble normal',
        'Une accélération brutale'
      ],
      correcte: 2,
      explication: 'Localement, rien ne change pour lui au moment du franchissement. C\'est une frontière "globale", définie par rapport à l\'extérieur. Depuis dehors, on le verrait par contre ralentir et rougir indéfiniment.'
    },
    {
      q: 'Pourquoi faut-il une étoile de plus de ~25 masses solaires pour former un trou noir ?',
      options: [
        'Parce qu\'il faut beaucoup d\'hydrogène',
        'Pour que le cœur résiduel après supernova soit assez massif pour vaincre toute force de résistance',
        'Parce que les petites étoiles n\'explosent pas',
        'Pour produire assez de chaleur'
      ],
      correcte: 1,
      explication: 'Après la supernova, le cœur résiduel doit avoir une gravité telle qu\'aucune force quantique (pression de dégénérescence des neutrons) ne puisse l\'arrêter. Il faut donc partir d\'une étoile très massive.'
    },
    {
      q: 'Comment l\'image directe du trou noir M87* a-t-elle été obtenue en 2019 ?',
      options: [
        'Par un seul super-télescope spatial',
        'Par un télescope optique géant',
        'Par un réseau de radiotélescopes coordonnés à l\'échelle planétaire (EHT)',
        'Par calcul théorique uniquement'
      ],
      correcte: 2,
      explication: 'L\'Event Horizon Telescope combine plusieurs radiotélescopes répartis sur Terre pour former un télescope virtuel de la taille de notre planète, seule échelle suffisante pour résoudre l\'ombre d\'un trou noir.'
    },
    {
      q: 'Quel est l\'effet d\'un trou noir supermassif actif sur la formation stellaire de sa galaxie ?',
      options: [
        'Il favorise la formation d\'étoiles en concentrant le gaz',
        'Il n\'a aucun effet à si grande échelle',
        'Il étouffe la formation stellaire en chauffant et soufflant le gaz',
        'Il crée directement des étoiles à partir de son énergie'
      ],
      correcte: 2,
      explication: 'Le rayonnement intense du disque d\'accrétion (en phase de quasar) chauffe et disperse le gaz galactique. Or pour former des étoiles, il faut du gaz froid et dense capable de s\'effondrer. Le trou noir "stérilise" donc partiellement sa galaxie.'
    },
    {
      q: 'Que se passe-t-il, selon nos théories actuelles, au centre d\'un trou noir ?',
      options: [
        'Une étoile à neutrons hyper-comprimée',
        'Une singularité — un point théorique de densité infinie où la physique actuelle échoue',
        'Un autre univers',
        'Un noyau de plasma chaud'
      ],
      correcte: 1,
      explication: 'La relativité générale prédit une singularité, mais cette prédiction d\'infinis est plutôt le signe qu\'il manque une théorie : la gravité quantique. Comprendre vraiment ce qui s\'y passe reste l\'un des grands défis ouverts de la physique.'
    }
  ]

});
