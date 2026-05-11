/* ===================================================================
   SUJET — Le sport et la physiologie
   ===================================================================
   Comment le corps produit, dépense et adapte son énergie à l'effort.
   Domaines : Sport, Médecine
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'sport-physiologie',
    titre: 'Le <em>sport</em> et la physiologie',
    domaines: ['Sport', 'Médecine'],
    tags: ['vo2max', 'muscles', 'endurance', 'dopage', 'entraînement', 'récupération'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['le-sommeil', 'cerveau-humain', 'systeme-immunitaire'],
    date_creation: '2026-05-12',
    date_maj: '2026-05-12'
  },

  resume: 'Comprendre ce qui se passe sous la peau d\'un sportif : les trois filières qui produisent l\'énergie, les fibres musculaires qui la consomment, les adaptations spectaculaires que produit l\'entraînement — et les raccourcis chimiques qui ont marqué l\'histoire du sport de haut niveau.',

  points_cles: [
    'Le muscle dispose de **trois filières énergétiques** mobilisables selon la durée et l\'intensité : **anaérobie alactique** (0-10 s), **anaérobie lactique** (10-60 s), **aérobie** (au-delà de 2 min).',
    'La **VO2max** — volume maximal d\'oxygène consommé — est l\'indicateur cardinal de l\'endurance : **35-45 mL/min/kg** chez un sédentaire, **80-90** chez un cycliste professionnel.',
    'Les fibres musculaires se répartissent en trois types : **type I** (lentes, oxydatives, endurantes), **type IIa** (intermédiaires) et **type IIx** (rapides, glycolytiques, explosives). La proportion est ~50/50 à la naissance ; l\'entraînement la déplace surtout entre IIa et IIx.',
    'L\'entraînement provoque des **adaptations profondes** : plus de **mitochondries**, plus de **capillaires**, plus de **volume sanguin**, **hypertrophie** du ventricule gauche.',
    'La **surcompensation** : après un effort qui fatigue, la récupération ramène le corps **au-dessus** de son niveau initial — c\'est le moteur du progrès. Mal calibrée, elle bascule en **surentraînement**.',
    'Le **dopage** (EPO, anabolisants, stimulants) cherche à court-circuiter ces adaptations. L\'affaire **Lance Armstrong** (2012) a montré qu\'un système entier pouvait être organisé autour.',
    'Après **30 ans**, la VO2max chute d\'environ **1 %** par an chez le sédentaire — mais reste largement préservable par l\'entraînement régulier.'
  ],

  carte_mentale: {
    central: 'sport',
    noeuds: [
      { id: 'sport', label: 'Sport et physiologie', description: 'Étude des mécanismes biologiques de l\'effort, de la production d\'énergie aux adaptations à long terme.' },
      { id: 'filieres', label: 'Filières énergétiques', description: 'Les trois voies de production d\'ATP par le muscle, mobilisées selon la durée de l\'effort.' },
      { id: 'fibres', label: 'Fibres musculaires', description: 'Trois types principaux, du plus endurant (type I) au plus explosif (type IIx). Proportion partiellement génétique.' },
      { id: 'vo2max', label: 'VO2max', description: 'Volume maximal d\'oxygène consommé par minute et par kilo. Indicateur reine de l\'endurance.' },
      { id: 'adaptations', label: 'Adaptations', description: 'Modifications structurelles et biochimiques produites par l\'entraînement régulier.' },
      { id: 'recuperation', label: 'Récupération', description: 'Phase où le corps s\'adapte et progresse — pas un luxe mais un mécanisme central.' },
      { id: 'dopage', label: 'Dopage', description: 'Substances et méthodes interdites visant à dépasser les limites physiologiques.' },
      { id: 'age', label: 'Âge et déclin', description: 'Baisse progressive des capacités après 30 ans, fortement modulée par le mode de vie.' },

      // Filières
      { id: 'alactique', label: 'Anaérobie alactique', description: 'Phosphocréatine. **0-10 secondes** d\'effort maximal. Sprint court, haltérophilie.', parent: 'filieres' },
      { id: 'lactique', label: 'Anaérobie lactique', description: 'Glycolyse anaérobie produisant du **lactate**. **10-60 secondes**. 400 m, 800 m.', parent: 'filieres' },
      { id: 'aerobie', label: 'Aérobie', description: 'Phosphorylation oxydative dans les mitochondries. **Au-delà de 2 min**. Endurance, marathon.', parent: 'filieres' },

      // Fibres
      { id: 'type1', label: 'Type I (lentes)', description: 'Riches en mitochondries et en myoglobine. Endurantes, peu puissantes. Dominent chez les marathoniens.', parent: 'fibres' },
      { id: 'type2a', label: 'Type IIa', description: 'Intermédiaires : à la fois oxydatives et glycolytiques. Plastiques — déplaçables par l\'entraînement.', parent: 'fibres' },
      { id: 'type2x', label: 'Type IIx (rapides)', description: 'Glycolytiques, fortes et explosives, fatigables. Dominent chez les sprinters et haltérophiles.', parent: 'fibres' },

      // Adaptations
      { id: 'mito', label: 'Mitochondries', description: 'L\'entraînement aérobie augmente leur **nombre et leur taille** — plus d\'usines énergétiques par cellule.', parent: 'adaptations' },
      { id: 'coeur', label: 'Cœur d\'athlète', description: 'Hypertrophie excentrique du ventricule gauche. Volume d\'éjection accru, fréquence cardiaque de repos très basse (parfois < 40).', parent: 'adaptations' },
      { id: 'seuil', label: 'Seuil lactique', description: 'Intensité au-delà de laquelle le lactate s\'accumule plus vite qu\'il n\'est éliminé. Recule avec l\'entraînement.', parent: 'adaptations' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Le corps, <em>machine énergétique</em>',
      contenu_md:
`Le mouvement coûte de l\'énergie. Pour contracter un muscle, il faut une seule molécule : l\'**ATP** (adénosine triphosphate). Mais le muscle n\'en stocke qu\'une quantité ridicule — quelques secondes d\'effort. Tout l\'enjeu de la physiologie sportive est là : comment **régénérer de l\'ATP**, assez vite et assez longtemps pour soutenir l\'effort en cours ?

La réponse est élégante. Le corps dispose de **trois filières** distinctes, chacune optimisée pour une fenêtre temporelle particulière. La première est **explosive et brève**. La deuxième est **puissante mais coûteuse**. La troisième est **infiniment soutenable mais lente à démarrer**. Elles ne s\'opposent pas — elles se relayent, se chevauchent, dosent leur contribution selon l\'intensité.

C\'est l\'orchestration de ces trois voies qui distingue un sprinter d\'un marathonien, et qui explique pourquoi un même corps ne peut pas exceller dans les deux.`
    },

    {
      type: 'widget',
      titre: 'Les trois filières énergétiques',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: '0 — 10 secondes',
            titre: 'Anaérobie alactique',
            description: 'Recyclage immédiat de l\'ATP par la **phosphocréatine** stockée dans le muscle. Sans oxygène, sans lactate. **Puissance maximale** mais réserve minuscule. Sprint sur 100 m, haltérophilie, smash de tennis.'
          },
          {
            tag: '10 — 60 secondes',
            titre: 'Anaérobie lactique',
            description: '**Glycolyse anaérobie** : dégradation du glucose sans oxygène, produisant du **lactate**. Très puissante, mais l\'acidification musculaire devient vite intolérable. 400 m, 800 m, dernier sprint d\'une course.'
          },
          {
            tag: 'Au-delà de 2 minutes',
            titre: 'Aérobie',
            description: '**Phosphorylation oxydative** dans les mitochondries — le glucose et les graisses sont brûlés avec de l\'oxygène. Rendement très élevé, ressources quasi illimitées. Marathon, cyclisme, ski de fond. La filière de l\'[endurance]{accent}.'
          }
        ]
      }
    },

    {
      type: 'widget',
      titre: 'Selon l\'intensité de l\'effort, quelle filière domine ?',
      composant: 'CurseurParametrique',
      params: {
        label: 'Durée de l\'effort maximal',
        min: 3,
        max: 600,
        step: 1,
        valeurInitiale: 30,
        unite: 's',
        degradePiste: '#ff6b35 0%, #ff6b35 18%, #ffb86c 18%, #ffb86c 30%, #5b8def 30%, #5b8def 100%',
        seuils: [
          {
            jusqua: 10,
            titre: 'Anaérobie alactique dominante',
            description: 'Effort très bref et explosif. La phosphocréatine fournit l\'essentiel de l\'ATP. Au-delà de 10 s, ses stocks s\'épuisent.',
            couleur: '#ff6b35'
          },
          {
            jusqua: 60,
            titre: 'Anaérobie lactique dominante',
            description: 'La glycolyse anaérobie prend le relais. Le **lactate** s\'accumule, l\'acidification musculaire monte. Intolérable au-delà d\'une minute environ.',
            couleur: '#ffb86c'
          },
          {
            jusqua: 120,
            titre: 'Transition aérobie / anaérobie',
            description: 'La filière aérobie monte en puissance. À cette intensité, les deux systèmes contribuent à parts comparables.',
            couleur: '#a78bfa'
          },
          {
            jusqua: Infinity,
            titre: 'Aérobie dominante',
            description: 'Phosphorylation oxydative dans les mitochondries. C\'est ici que se joue l\'endurance — et que la **VO2max** devient le facteur limitant.',
            couleur: '#5b8def'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>VO2max</em>, indicateur reine',
      contenu_md:
`Quand on parle de potentiel d\'endurance, un chiffre revient toujours : la [VO2max]{accent}, ou **consommation maximale d\'oxygène**. Elle mesure la quantité d\'O₂ que ton organisme peut prélever, transporter et utiliser **par minute et par kilo de masse corporelle**. Exprimée en **mL/min/kg**.

Pourquoi ce chiffre est-il si central ? Parce que l\'oxygène est le facteur limitant de la filière aérobie. Plus tu peux en consommer, plus tu peux brûler de carburant, plus tu peux soutenir une intensité élevée pendant longtemps.

La VO2max dépend d\'une chaîne : la **ventilation pulmonaire** (faire entrer l\'O₂), le **transport sanguin** (le volume de globules rouges et le débit cardiaque), et l\'**extraction tissulaire** (mitochondries et capillaires). C\'est la performance la plus intégrative du corps : un seul nombre qui résume cœur, poumons, sang, muscles.

L\'écart entre humains est saisissant — d\'un facteur 3 environ entre un sédentaire et un champion. Une partie est génétique. Une partie, considérable, vient de l\'entraînement.`
    },

    {
      type: 'widget',
      titre: 'VO2max selon le niveau',
      composant: 'SelecteurValeurs',
      params: {
        unite: 'mL/min/kg',
        indexInitial: 1,
        options: [
          { label: 'Sédentaire', valeur: '35-45', description: 'Adulte non sportif en bonne santé. En dessous de 30, on parle de **déconditionnement** marqué.' },
          { label: 'Amateur entraîné', valeur: '50-60', description: 'Coureur ou cycliste loisir avec entraînement régulier (3 à 5 séances par semaine).' },
          { label: 'Élite endurance', valeur: '70-80', description: 'Athlète professionnel : marathonien, triathlète, skieur de fond de haut niveau.' },
          { label: 'Cycliste pro', valeur: '80-90', description: 'Cyclistes du Tour de France. Le Tour est l\'épreuve la plus exigeante en VO2max au monde.' },
          { label: 'Records absolus', valeur: '~96', description: 'Le cycliste norvégien **Oskar Svendsen** a été mesuré à 96,7 mL/min/kg en 2012. Le skieur **Bjørn Dæhlie** dans la même zone. Limite physiologique supposée de l\'humain.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>seuil lactique</em>, ligne rouge mobile',
      contenu_md:
`La VO2max dit ce que tu peux faire à 100 % d\'effort. Mais en course, tu ne tiens pas longtemps à 100 %. Ce qui compte, c\'est **quel pourcentage de ta VO2max tu peux soutenir longuement** — et là entre en jeu le [seuil lactique]{accent}.

À basse intensité, ton muscle produit du lactate, mais il est éliminé en continu (recyclé par le cœur, le foie, d\'autres muscles). À mesure que l\'intensité monte, la production augmente jusqu\'à un point où l\'élimination ne suit plus : le lactate **s\'accumule**, le pH baisse, le muscle s\'acidifie. C\'est le seuil. Au-delà, tu ne peux tenir que quelques minutes.

L\'entraînement **recule ce seuil**. Un coureur amateur saturera autour de 75 % de sa VO2max. Un marathonien d\'élite tient un marathon à **85-88 %**. Pour deux athlètes de même VO2max, celui qui a le meilleur seuil gagnera.

Le seuil est donc, en pratique, **plus important que la VO2max** pour les efforts longs — et il est plus entraînable.`
    },

    {
      type: 'texte',
      titre: 'Les <em>fibres musculaires</em>',
      contenu_md:
`Sous le microscope, tous les muscles ne se ressemblent pas. Chaque muscle est composé d\'un mélange de fibres de trois types principaux, aux propriétés très différentes.

Les [fibres de type I]{accent}, dites **lentes** ou **oxydatives**, sont rouges (riches en myoglobine), bourrées de mitochondries, capillarisées à outrance. Elles produisent peu de force d\'un coup, mais elles sont quasi infatigables. Ce sont les fibres des marathoniens, des cyclistes, des muscles posturaux qui tiennent debout toute la journée.

Les **fibres de type IIx** (anciennement IIb) sont les **rapides glycolytiques**. Blanches, pauvres en mitochondries, riches en enzymes glycolytiques. Elles produisent une force énorme en une fraction de seconde — et fatiguent immédiatement. Ce sont les fibres des sprinters, des haltérophiles, des sauteurs.

Entre les deux, les **fibres de type IIa** sont les **intermédiaires** : rapides mais relativement endurantes, à la fois oxydatives et glycolytiques. Plastiques — c\'est principalement par elles que passent les adaptations à l\'entraînement.

À la naissance, la répartition est proche de **50/50** entre lentes et rapides chez la plupart des humains. L\'entraînement modifie surtout les **propriétés** des fibres (taille, équipement enzymatique, capillarisation) et déplace l\'équilibre entre IIa et IIx, mais il **convertit peu** les lentes en rapides ou inversement. Le sprinter né n\'est pas tout à fait fabriqué.`
    },

    {
      type: 'widget',
      titre: 'Les trois types de fibres musculaires',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Lentes',
            titre: 'Type I',
            description: 'Rouges, riches en **mitochondries** et **myoglobine**, très capillarisées. Faibles en puissance, **infatigables**. Endurance. Dominantes chez les marathoniens — parfois 80 % des fibres du soléaire (mollet).'
          },
          {
            tag: 'Intermédiaires',
            titre: 'Type IIa',
            description: 'Hybrides : **à la fois oxydatives et glycolytiques**. Rapides mais relativement endurantes. Très **plastiques** — l\'entraînement les déplace vers I ou vers IIx selon la sollicitation.'
          },
          {
            tag: 'Rapides',
            titre: 'Type IIx',
            description: 'Blanches, **glycolytiques**, pauvres en mitochondries. Puissance et vitesse maximales. **Fatigables**. Dominantes chez les sprinters, haltérophiles. Souvent **70-80 %** chez les sprinters d\'élite.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Ce que l\'<em>entraînement</em> change',
      contenu_md:
`Le corps humain est étonnamment plastique. Quelques mois d\'entraînement bien conduit suffisent à transformer profondément un organisme — et plusieurs années à le rendre méconnaissable.

Du côté **musculaire**, l\'entraînement en endurance multiplie le nombre de **mitochondries** par cellule (jusqu\'à doubler), agrandit le réseau de **capillaires** qui les irrigue, et augmente la concentration d\'enzymes oxydatives. La cellule devient une meilleure brûleuse d\'oxygène. L\'entraînement en force, lui, fait grossir les fibres elles-mêmes (**hypertrophie**) et améliore leur recrutement nerveux.

Du côté **cardiovasculaire**, le **volume sanguin** augmente (jusqu\'à +20-25 % chez l\'athlète d\'endurance), tout comme la masse de globules rouges. Le **cœur** s\'adapte : le ventricule gauche grossit (hypertrophie excentrique), son volume d\'éjection systolique augmente. Conséquence : la **fréquence cardiaque de repos** chute — souvent **40-50 bpm** chez le cycliste pro, parfois moins de 35. Le cœur fait le même travail en battant moins.

Du côté **métabolique**, le seuil lactique recule, l\'utilisation des graisses à intensité modérée s\'améliore (on épargne le précieux glycogène), la régulation hormonale et thermique se raffine.

Toutes ces adaptations ne se produisent pas pendant l\'effort, mais **pendant la récupération**.`
    },

    {
      type: 'widget',
      titre: 'Trois grandes méthodes d\'entraînement en endurance',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: 'Entraînement continu (foncier)',
            description: 'Effort prolongé à **intensité modérée et stable** (60-75 % de la VO2max). Construit la base aérobie, développe les mitochondries et la capillarisation. Indispensable mais peu spectaculaire.'
          },
          {
            titre: 'Entraînement fractionné (intervalles)',
            description: 'Alternance de **phases intenses** (proches de la VO2max) et de récupérations actives. Tire la VO2max vers le haut, recule le seuil lactique. Efficace mais coûteux nerveusement — quelques séances par semaine maximum.'
          },
          {
            titre: 'Entraînement polarisé',
            description: 'Approche **80/20** popularisée par l\'analyse des athlètes d\'élite : ~80 % du volume à basse intensité (en dessous du premier seuil), ~20 % à très haute intensité. **Très peu de zone intermédiaire** — c\'est cette zone "grise" qui fatigue sans faire progresser autant.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>récupération</em>, et la surcompensation',
      contenu_md:
`On a longtemps cru qu\'on progressait *pendant* l\'entraînement. La compréhension moderne est inverse : on progresse **pendant la récupération**. L\'effort est un stimulus — la cassure ; les adaptations ont lieu dans les heures et les jours qui suivent — la réparation.

Le principe fondamental est celui de la **surcompensation**. Un effort suffisant déprime temporairement les capacités (fatigue immédiate). Pendant la récupération, le corps répare et **dépasse** son niveau d\'avant. Si la prochaine séance arrive à ce moment-là, on progresse. Si elle arrive trop tôt, on s\'enfonce — c\'est le **surentraînement**. Si elle arrive trop tard, la surcompensation retombe et on stagne.

Le **sommeil** est ici central : voir [[le-sommeil]]. C\'est en sommeil lent profond que l\'**hormone de croissance** est sécrétée par pulses massifs — elle pilote la réparation tissulaire. Un athlète d\'élite dort souvent **9 à 10 heures** par nuit, complétées par des siestes. La privation chronique de sommeil ruine littéralement les bénéfices de l\'entraînement.

L\'hydratation, l\'apport en glucides et en protéines, la gestion du stress complètent l\'équation. On ne récupère pas par défaut — on récupère **activement**.`
    },

    {
      type: 'encadre',
      label: 'Surentraînement',
      contenu_md: 'Quand le déséquilibre stimulus/récupération s\'installe sur des semaines, on entre en **syndrome de surentraînement** : performances qui régressent malgré le travail, fatigue persistante, troubles du sommeil, sautes d\'humeur, **immunodépression** (voir [[systeme-immunitaire]]) avec infections respiratoires à répétition. Chez les athlètes d\'élite, les fenêtres de vulnérabilité immunitaire après une compétition (« open window ») sont bien documentées. La sortie d\'un surentraînement avéré peut demander plusieurs mois — la prévention est la seule vraie stratégie.'
    },

    {
      type: 'texte',
      titre: 'Le <em>dopage</em>, ou court-circuiter la physiologie',
      contenu_md:
`Si l\'entraînement consiste à provoquer des adaptations, le dopage consiste à **les obtenir sans le stimulus**, ou à les amplifier au-delà du naturel. Trois grandes familles dominent.

L\'**EPO** (érythropoïétine) est une hormone naturellement sécrétée par les reins, qui stimule la production de **globules rouges**. Synthétique depuis les années 1980, elle a transformé les sports d\'endurance : plus de globules rouges = plus d\'oxygène transporté = VO2max effective plus élevée. Le cyclisme des années 1990-2000 en a été ravagé. L\'**affaire Lance Armstrong** (révélée en 2012, sept Tours de France retirés) a montré que tout un système d\'équipe pouvait être bâti autour. Détection longtemps difficile, désormais possible mais imparfaite — le « passeport biologique » suit les paramètres sanguins dans le temps pour détecter les anomalies.

Les **anabolisants stéroïdiens** (dérivés de la testostérone) augmentent la synthèse protéique et donc la masse musculaire. Sports de force, sprints, mais aussi haut niveau féminin où les effets sont massifs (le dopage d\'État est-allemand des années 1970-80 en a fait la démonstration tragique).

Les **stimulants** (amphétamines, cocaïne, modafinil…) repoussent la sensation de fatigue, parfois jusqu\'à des accidents cardiovasculaires fatals — Tom Simpson sur le Mont Ventoux en 1967, amphétamines et alcool.

Le coût biologique est lourd : cancers, accidents cardiovasculaires, dépressions, dérèglements hormonaux durables. Et au-delà du corps, le sport lui-même y perd — la performance cesse de signifier ce qu\'elle prétend signifier.`
    },

    {
      type: 'texte',
      titre: '<em>Âge</em> et déclin',
      contenu_md:
`Les capacités physiques ne sont pas une donnée fixe : elles dessinent une courbe. Croissance et maturation jusqu\'à 20-25 ans, plateau dans la décennie suivante, puis **déclin progressif**.

Après **30 ans**, la VO2max chute d\'environ **1 % par an** chez le sédentaire moyen. À 70 ans, c\'est une moitié envolée. La masse musculaire suit (**sarcopénie** : perte d\'environ 1 % de masse maigre par an après 50 ans), les fibres rapides régressent plus vite que les lentes, la souplesse diminue, la récupération s\'allonge.

Mais ces chiffres décrivent une trajectoire **par défaut**, pas une fatalité. Chez les athlètes restés actifs, le déclin est divisé par deux ou trois. Des marathoniens courent en 3 h à 70 ans. Des cyclistes amateurs maintiennent une VO2max de 50-55 mL/min/kg au-delà de 60 ans — supérieure à celle de la majorité des trentenaires sédentaires.

L\'enjeu n\'est pas tant de battre la nature que de **comprimer la phase de dépendance** : maintenir, le plus longtemps possible, des capacités fonctionnelles compatibles avec une vie autonome. À ce titre, le sport d\'entretien après 50 ans est probablement l\'**intervention médicale la plus efficace jamais documentée**.`
    }

  ],

  quiz: [
    {
      q: 'Quelle filière énergétique domine pour un effort maximal d\'environ 5 secondes (par exemple un départ de 100 m) ?',
      options: [
        'L\'anaérobie alactique (phosphocréatine)',
        'L\'anaérobie lactique (glycolyse anaérobie)',
        'L\'aérobie (phosphorylation oxydative)',
        'Les trois à parts égales'
      ],
      correcte: 0,
      explication: 'Pour les efforts brefs et explosifs (0 à 10 secondes), c\'est la phosphocréatine stockée dans le muscle qui régénère immédiatement l\'ATP, sans oxygène et sans production de lactate. Au-delà, ses stocks s\'épuisent et la glycolyse anaérobie prend le relais.'
    },
    {
      q: 'Quel ordre de grandeur de VO2max est typique chez un cycliste professionnel du Tour de France ?',
      options: [
        '35-45 mL/min/kg',
        '50-60 mL/min/kg',
        '80-90 mL/min/kg',
        '120-130 mL/min/kg'
      ],
      correcte: 2,
      explication: 'Les cyclistes pros se situent entre 80 et 90 mL/min/kg. À titre de repères : sédentaire 35-45, amateur entraîné 50-60, élite endurance 70-80. Le record mesuré (Oskar Svendsen, 2012) est à 96,7 — considéré comme proche de la limite humaine.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux : l\'entraînement peut transformer librement les fibres musculaires lentes en fibres rapides (et inversement).',
      affirmation: 'L\'entraînement transforme librement les fibres lentes en fibres rapides.',
      reponse: false,
      explication: 'Faux. La répartition entre fibres de type I (lentes) et type II (rapides) est en grande partie fixée — proche de 50/50 à la naissance et influencée par la génétique. L\'entraînement modifie surtout les propriétés des fibres (taille, mitochondries, capillaires) et déplace l\'équilibre entre IIa et IIx, mais convertit très peu I en II ou inversement. Le sprinter né n\'est pas tout à fait fabriqué.'
    },
    {
      type: 'ordre-chrono',
      q: 'Pour un effort maximal qui s\'allonge dans le temps, dans quel ordre les filières énergétiques deviennent-elles dominantes ?',
      items: [
        'Anaérobie alactique (phosphocréatine) — 0 à 10 s',
        'Anaérobie lactique (glycolyse anaérobie) — 10 à 60 s',
        'Aérobie (phosphorylation oxydative) — au-delà de 2 min'
      ],
      explication: 'Le corps mobilise d\'abord ses stocks immédiats (phosphocréatine, quasi instantanée mais épuisée en quelques secondes), puis la glycolyse anaérobie produisant du lactate (puissante mais limitée par l\'acidification), enfin la voie aérobie dans les mitochondries (lente à démarrer mais quasi inépuisable). Ces filières se chevauchent en réalité — il ne s\'agit pas de relais nets, mais de dominantes successives.'
    },
    {
      q: 'Qu\'est-ce que le seuil lactique ?',
      options: [
        'La quantité de lactate maximale qu\'un muscle peut produire avant rupture',
        'L\'intensité d\'effort au-delà de laquelle le lactate s\'accumule plus vite qu\'il n\'est éliminé',
        'Le taux de lactate dans le sang au repos',
        'La durée maximale d\'un effort anaérobie'
      ],
      correcte: 1,
      explication: 'Le seuil lactique est l\'intensité au-delà de laquelle la production de lactate dépasse les capacités d\'élimination — il s\'accumule, le pH chute, le muscle s\'acidifie. L\'entraînement recule ce seuil : un marathonien d\'élite tient sa course à 85-88 % de sa VO2max, contre 75 % chez un amateur.'
    },
    {
      q: 'Lesquelles de ces adaptations physiologiques sont produites par l\'entraînement en endurance ?',
      options: [
        'Diminution du volume sanguin et baisse de la fréquence cardiaque de repos',
        'Augmentation du nombre de mitochondries, de capillaires, du volume sanguin, et hypertrophie du ventricule gauche',
        'Conversion massive des fibres rapides en fibres lentes',
        'Diminution du nombre de globules rouges'
      ],
      correcte: 1,
      explication: 'L\'entraînement en endurance multiplie les mitochondries musculaires, étend le réseau capillaire, augmente le volume sanguin (jusqu\'à +25 %) et la masse de globules rouges, et fait grossir le ventricule gauche (hypertrophie excentrique). Conséquence : la fréquence cardiaque de repos chute — souvent 40-50 bpm chez les pros.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète ces chiffres clés de la physiologie du sport :',
      texte: 'La VO2max d\'un cycliste professionnel se situe autour de {80-90} mL/min/kg. Après 30 ans, elle chute en moyenne d\'environ {1} % par an chez le sédentaire.',
      explication: 'Les cyclistes pros se situent dans la fourchette 80-90 mL/min/kg, soit deux fois plus qu\'un sédentaire moyen. Le déclin par défaut est d\'environ 1 % par an après 30 ans, mais peut être divisé par 2 ou 3 par un entraînement régulier.'
    },
    {
      q: 'Qu\'est-ce que le phénomène de surcompensation ?',
      options: [
        'Un état pathologique du surentraînement',
        'La capacité du corps à dépasser temporairement son niveau initial pendant la récupération après un effort suffisant',
        'L\'effet placebo de la prise de compléments alimentaires',
        'Le rebond de fréquence cardiaque après l\'arrêt d\'un effort'
      ],
      correcte: 1,
      explication: 'Après un effort qui fatigue, la récupération ne ramène pas au niveau initial mais le **dépasse** — c\'est la surcompensation. Le moteur du progrès. Si la séance suivante tombe au sommet de cette fenêtre, on progresse ; trop tôt, on s\'enfonce (surentraînement) ; trop tard, on retombe et on stagne.'
    },
    {
      q: 'Pourquoi l\'EPO est-elle si efficace (et si recherchée) en sports d\'endurance ?',
      options: [
        'Elle dilate les vaisseaux sanguins et abaisse la tension',
        'Elle stimule la production de globules rouges, ce qui augmente le transport d\'oxygène et donc la VO2max effective',
        'Elle convertit les fibres lentes en fibres rapides',
        'Elle accélère directement le métabolisme cellulaire'
      ],
      correcte: 1,
      explication: 'L\'EPO (érythropoïétine) augmente la masse de globules rouges, donc la capacité de transport d\'oxygène par le sang, donc la VO2max effective. Le cyclisme des années 1990-2000 en a été ravagé — l\'affaire Lance Armstrong (2012, sept Tours retirés) a révélé un système d\'équipe entier bâti autour.'
    },
    {
      type: 'associer',
      q: 'Associe chaque substance dopante à son effet recherché principal :',
      paires: [
        { gauche: 'EPO', droite: 'Augmenter le transport d\'oxygène (globules rouges)' },
        { gauche: 'Anabolisants stéroïdiens', droite: 'Augmenter la masse et la force musculaires' },
        { gauche: 'Amphétamines', droite: 'Repousser la sensation de fatigue' }
      ],
      explication: 'Trois grandes familles aux mécanismes distincts. L\'EPO vise le transport d\'oxygène (endurance). Les anabolisants, dérivés de la testostérone, agissent sur la synthèse protéique et la masse musculaire (force, sprint). Les stimulants masquent la fatigue centrale — au prix d\'accidents cardiovasculaires parfois fatals (Tom Simpson, Mont Ventoux, 1967).'
    },
    {
      q: 'Quel rôle joue le sommeil dans la récupération sportive ?',
      options: [
        'Aucun rôle particulier',
        'Il provoque la libération pulsatile d\'hormone de croissance pendant le sommeil profond, indispensable à la réparation tissulaire',
        'Il vide les muscles de leur lactate',
        'Il convertit les graisses en glycogène'
      ],
      correcte: 1,
      explication: 'C\'est en sommeil lent profond que l\'hormone de croissance est sécrétée par grands pulses — elle pilote la réparation tissulaire et les adaptations à l\'entraînement. Les athlètes d\'élite dorment souvent 9-10 h par nuit. La privation chronique ruine les bénéfices de l\'entraînement.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux : après 30 ans, le déclin de la VO2max est inéluctable et identique chez tous les individus.',
      affirmation: 'Après 30 ans, le déclin de la VO2max est inéluctable et identique chez tous les individus.',
      reponse: false,
      explication: 'Faux. La VO2max chute en moyenne d\'environ 1 % par an chez le sédentaire après 30 ans, mais ce chiffre décrit une trajectoire par défaut, pas une fatalité. Chez les athlètes restés actifs, le déclin est divisé par 2 ou 3. Des cyclistes amateurs maintiennent 50-55 mL/min/kg au-delà de 60 ans — au-dessus de la moyenne des trentenaires sédentaires.'
    },
    {
      q: 'Pourquoi parle-t-on d\'« entraînement polarisé » en endurance moderne ?',
      options: [
        'Parce qu\'il alterne chaud et froid',
        'Parce qu\'il fait travailler des muscles opposés',
        'Parce qu\'il concentre ~80 % du volume à basse intensité et ~20 % à très haute intensité, en évitant la zone intermédiaire',
        'Parce qu\'il est réservé aux régions polaires'
      ],
      correcte: 2,
      explication: 'L\'analyse des athlètes d\'élite a révélé un schéma 80/20 robuste : beaucoup de volume facile pour développer la base aérobie, des séances très dures pour tirer la VO2max et le seuil, et très peu de zone "grise" intermédiaire — qui fatigue sans produire d\'adaptations équivalentes.'
    }
  ]

});
