/* ===================================================================
   SUJET — La photosynthèse
   ===================================================================
   Le moteur silencieux qui nourrit et oxygène la planète.
   Domaine : Biologie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'photosynthese',
    titre: `La <em>photosynthèse</em>`,
    domaines: ['Biologie'],
    tags: ['plantes', 'chloroplaste', 'oxygène', 'co2', 'climat', 'évolution'],
    difficulte: 2,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: ['evolution-darwin', 'megafeux', 'les-volcans'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Comprendre comment quelques familles d'organismes — plantes, algues, cyanobactéries — ont appris à transformer la lumière du Soleil en sucres, libérant au passage l'oxygène qui rend possible la quasi-totalité de la vie complexe sur Terre.`,

  points_cles: [
    `La photosynthèse capte l'énergie lumineuse pour transformer **CO₂** et **eau** en **glucose** et **dioxygène**. Bilan : *6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂*.`,
    `Elle se déroule dans des organites spécialisés, les **chloroplastes**, dont la **chlorophylle** absorbe préférentiellement les longueurs d'onde bleues et rouges — réfléchissant le vert.`,
    `Le processus comporte deux phases : la **phase claire** (capture de la lumière, électrolyse de l'eau, production d'ATP et de NADPH) et la **phase sombre** ou **cycle de Calvin** (fixation du CO₂ en sucres).`,
    `Sans la photosynthèse, l'atmosphère terrestre serait pauvre en oxygène : la **Grande Oxygénation**, il y a environ **2,4 milliards d'années**, est une des plus grandes révolutions de l'histoire de la Terre.`,
    `On estime que la photosynthèse fixe chaque année environ **130 milliards de tonnes de carbone** atmosphérique, dont près de la moitié vient des **océans** (phytoplancton).`,
    `L'enzyme clé — la **Rubisco** — est la **protéine la plus abondante de la biosphère**. Étonnamment lente et peu spécifique, elle confond parfois CO₂ et O₂ : c'est la **photorespiration**, source d'inefficacité.`,
    `Face au **changement climatique**, la photosynthèse est à la fois un acteur (puits naturel de CO₂) et un enjeu : sa stimulation par l'agriculture, son ralentissement par les sécheresses et les [[megafeux]] sont des facteurs majeurs du bilan carbone global.`
  ],

  carte_mentale: {
    central: 'photosynthese',
    noeuds: [
      { id: 'photosynthese', label: 'Photosynthèse', description: `Transformation biologique de l'énergie lumineuse en énergie chimique, avec libération d'**oxygène**.` },
      { id: 'equation', label: 'Bilan global', description: `**6 CO₂ + 6 H₂O + lumière → C₆H₁₂O₆ + 6 O₂**. Le glucose stocke l'énergie ; l'oxygène est un sous-produit.` },
      { id: 'chloroplaste', label: 'Chloroplaste', description: `Organite cellulaire qui abrite la photosynthèse. Issu d'une **endosymbiose** ancienne avec une cyanobactérie.` },
      { id: 'phases', label: 'Deux phases', description: `Phase claire (capture de la lumière) puis phase sombre (fixation du carbone).` },
      { id: 'pigments', label: 'Pigments', description: `Molécules qui absorbent la lumière. La **chlorophylle a** est la principale ; les caroténoïdes et la chlorophylle b complètent le spectre.` },
      { id: 'histoire', label: 'Histoire évolutive', description: `Inventée par les **cyanobactéries** il y a ~3,5 milliards d'années. À l'origine de la Grande Oxygénation.` },
      { id: 'climat', label: 'Enjeu climatique', description: `Puits naturel de CO₂, sensible aux sécheresses, aux feux, à la déforestation.` },

      // Phases
      { id: 'phase-claire', label: 'Phase claire', description: `Dans les **thylakoïdes** : la lumière excite la chlorophylle, l'eau est cassée (**H₂O → ½ O₂ + 2 H⁺ + 2 e⁻**), on produit ATP et NADPH.`, parent: 'phases' },
      { id: 'calvin', label: 'Cycle de Calvin', description: `Dans le **stroma**, à l'aide de l'ATP et du NADPH : le CO₂ est fixé en molécules carbonées, finalement en glucose. Découvert par **Melvin Calvin**, Nobel 1961.`, parent: 'phases' },
      { id: 'rubisco', label: 'Rubisco', description: `Enzyme du cycle de Calvin. **Protéine la plus abondante** sur Terre. Lente et imparfaite (confond CO₂ et O₂).`, parent: 'phases' },

      // Chloroplaste
      { id: 'endosymbiose', label: 'Endosymbiose', description: `Les chloroplastes descendent de **cyanobactéries** englobées il y a ~1,5 milliard d'années par une cellule eucaryote ancestrale. Ils possèdent leur propre ADN.`, parent: 'chloroplaste' },
      { id: 'thylakoide', label: 'Thylakoïdes', description: `Membranes empilées en grana à l'intérieur du chloroplaste. Siège de la phase claire.`, parent: 'chloroplaste' },

      // Histoire
      { id: 'cyanobacteries', label: 'Cyanobactéries', description: `Premières inventrices de la photosynthèse oxygénique, il y a ~3,5 milliards d'années.`, parent: 'histoire' },
      { id: 'oxygenation', label: 'Grande Oxygénation', description: `Il y a ~2,4 milliards d'années. L'oxygène devient majoritaire dans l'atmosphère, **extinction massive** des anaérobies, ouverture vers la vie complexe.`, parent: 'histoire' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `La <em>réaction</em> qui a tout changé`,
      contenu_md:
`Tout, ou presque, dans ton corps a un jour été du soleil. Le sucre que tu manges, le bois qui chauffe ta maison, le pétrole qui alimente ta voiture, l'oxygène que tu respires, jusqu'aux protéines qui te constituent : tout vient, en remontant la chaîne, d'un même processus chimique extraordinaire — la [photosynthèse]{accent}.

Sur le papier, l'équation est simple :

**six molécules de dioxyde de carbone + six molécules d'eau + lumière → une molécule de glucose + six molécules d'oxygène**.

Ce qui se cache derrière cette simplicité apparente est l'un des plus prodigieux exploits chimiques de la biologie. Une plante prend deux substances stables et pauvres en énergie — le **CO₂** atmosphérique, l'**eau** du sol — et les recombine, à température et pression ordinaires, en un sucre riche en énergie. Et elle libère, comme « déchet », de l'**oxygène** moléculaire — un sous-produit dont nous, animaux, sommes devenus dépendants à un point que nous oublions trop souvent.

Aucune cellule animale ne sait faire cela. Aucune technologie humaine ne le fait avec un rendement comparable. La photosynthèse est l'**interface** entre le monde minéral et le monde vivant — la porte par laquelle l'énergie solaire entre dans la biosphère.`
    },

    {
      type: 'widget',
      titre: `L'équation bilan, formellement`,
      composant: 'Equation',
      params: {
        tex: `6\\,\\mathrm{CO_2} + 6\\,\\mathrm{H_2O} \\xrightarrow{\\text{lumière}} \\mathrm{C_6H_{12}O_6} + 6\\,\\mathrm{O_2}`,
        legende: `Bilan global de la photosynthèse oxygénique. Six dioxydes de carbone et six eaux donnent, à l'aide de la lumière, un glucose et six dioxygènes.`,
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      titre: `Dans le <em>chloroplaste</em>`,
      contenu_md:
`Toute la machinerie de la photosynthèse est concentrée dans un organite cellulaire spécialisé : le [chloroplaste]{accent}. Une cellule de feuille en contient typiquement quelques dizaines, parfois plus de cent. Chacun mesure quelques micromètres et possède une structure interne extrêmement organisée : une double membrane externe, un fluide intérieur (le **stroma**), et un système de **membranes empilées** en formes de piles d'assiettes — les **grana**, formés de **thylakoïdes**.

C'est dans la membrane des thylakoïdes que se trouve la **chlorophylle** — ce pigment vert qui donne sa couleur au monde végétal. La chlorophylle est étonnamment sélective : elle absorbe efficacement le **bleu** (autour de 430 nm) et le **rouge** (autour de 660 nm) du spectre solaire, mais réfléchit le **vert**. C'est pourquoi les plantes nous apparaissent vertes — non parce qu'elles utilisent le vert, mais parce qu'elles ne s'en servent pas.

Détail vertigineux : le chloroplaste n'a pas toujours fait partie des cellules végétales. Il y a environ **1,5 milliard d'années**, une cellule eucaryote ancestrale a **englouti une cyanobactérie** — une bactérie capable de photosynthèse — sans la digérer. Au lieu de cela, elles ont vécu en symbiose, puis fusionné durablement. Tous les chloroplastes des plantes actuelles descendent de cet événement unique. Ils ont conservé leur **propre ADN** circulaire, vestige de leur passé bactérien.`
    },

    {
      type: 'widget',
      titre: `Les deux grandes phases`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Membrane des thylakoïdes',
            titre: 'Phase claire (photochimique)',
            description: `La lumière excite la chlorophylle, qui éjecte des électrons. L'eau est **cassée** : H₂O → ½ O₂ + 2 H⁺ + 2 e⁻ (l'O₂ est libéré, sous-produit historique). Les électrons activent une chaîne de transport qui produit deux "monnaies" énergétiques : **ATP** et **NADPH**. Exige la lumière.`
          },
          {
            tag: 'Stroma',
            titre: 'Phase sombre (cycle de Calvin)',
            description: `Utilise l'ATP et le NADPH produits par la phase claire pour **fixer le CO₂** atmosphérique dans des molécules organiques, finalement du **glucose**. Catalysée par l'enzyme **Rubisco**. Ne nécessite pas directement la lumière — d'où son nom, parfois trompeur, de "sombre" : elle a aussi lieu le jour.`
          }
        ]
      }
    },

    {
      type: 'encadre',
      label: `La Rubisco, championne maladroite`,
      contenu_md: `La **Ribulose-1,5-bisphosphate carboxylase/oxygénase** — heureusement abrégée en **Rubisco** — est l'enzyme qui fixe le CO₂ atmosphérique dans le cycle de Calvin. C'est, en tonnage, la **protéine la plus abondante de la biosphère** : on estime sa masse mondiale à plusieurs **milliards de tonnes**. Pourtant, c'est une enzyme étonnamment **lente** (quelques réactions par seconde, là où d'autres enzymes en font des milliers) et **peu spécifique** : elle confond parfois CO₂ et O₂. Quand elle fixe par erreur de l'oxygène, la cellule perd de l'énergie en récupération — c'est la **photorespiration**. Certaines plantes (maïs, canne à sucre) ont évolué un mécanisme de **concentration du CO₂** autour de la Rubisco (photosynthèse en C4) qui contourne ce défaut. La rendre plus performante par génie génétique est l'un des graals actuels de l'amélioration agronomique.`
    },

    {
      type: 'texte',
      titre: `La <em>Grande Oxygénation</em>`,
      contenu_md:
`Pendant plus d'**un milliard d'années**, l'atmosphère terrestre n'a contenu **aucun oxygène libre**. Les océans grouillaient de microbes anaérobies, qui se passaient très bien d'oxygène — qui, pour eux, aurait été toxique.

Puis sont apparues les **cyanobactéries**, il y a environ **3,5 milliards d'années**. Elles ont inventé la photosynthèse oxygénique — c'est-à-dire la version qui produit de l'O₂ à partir de l'eau, telle qu'on la connaît aujourd'hui. Pendant longtemps, l'oxygène qu'elles libéraient a été immédiatement consommé par l'oxydation du fer dissous dans les océans, qui précipitait au fond sous forme d'oxydes de fer rouges — les **bandes rubanées** (banded iron formations) qu'on retrouve aujourd'hui dans les roches anciennes.

Mais autour de **2,4 milliards d'années** avant notre ère, la production d'oxygène par les cyanobactéries a fini par dépasser la capacité d'absorption des océans et des roches. L'oxygène a commencé à s'accumuler dans l'atmosphère. C'est l'événement appelé la [Grande Oxygénation]{accent} (*Great Oxidation Event*).

Conséquences planétaires : extinction massive des anaérobies (la première grande extinction connue), refroidissement durable du climat (le méthane atmosphérique, puissant gaz à effet de serre, est détruit par l'oxygène), apparition d'une **couche d'ozone** stratosphérique qui protège enfin la surface du rayonnement UV, et — surtout — possibilité de la **respiration aérobie**, beaucoup plus efficace que les fermentations anaérobies. Sans cette accumulation, la vie complexe — eucaryotes, animaux, plantes — n'aurait probablement jamais émergé.

L'évolution oxygénique des cyanobactéries est l'un des pivots majeurs de l'histoire du vivant, au même titre que la sélection naturelle décrite par [[evolution-darwin]].`
    },

    {
      type: 'widget',
      titre: `Trois jalons dans l'histoire de la photosynthèse`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '~3,5 Ga', titre: 'Cyanobactéries', description: `Premières traces fossiles de cyanobactéries pratiquant la photosynthèse oxygénique. La planète est encore largement anoxique.` },
          { date: '~2,4 Ga', titre: 'Grande Oxygénation', description: `L'oxygène s'accumule durablement dans l'atmosphère. Première grande extinction de masse (anaérobies). Refroidissement climatique majeur.` },
          { date: '~1,5 Ga', titre: 'Endosymbiose', description: `Une cyanobactérie est englobée par une cellule eucaryote ancestrale et devient le **chloroplaste**. Naissance des algues et, à terme, des plantes.` },
          { date: '~470 Ma', titre: 'Plantes terrestres', description: `Les plantes colonisent la terre ferme. La photosynthèse remodèle profondément les paysages, le climat, l'érosion.` },
          { date: '1771', titre: 'Joseph Priestley', description: `Le chimiste anglais montre qu'une plante peut "rétablir" l'air vicié par une bougie. Premier indice expérimental de la libération d'oxygène par les plantes.` },
          { date: '1779', titre: 'Jan Ingenhousz', description: `Démontre que la libération d'oxygène par les plantes **nécessite la lumière**. Le rôle essentiel de la lumière est établi.` },
          { date: '1940-50', titre: 'Calvin', description: `**Melvin Calvin** élucide le cycle de fixation du CO₂ en sucres grâce au carbone 14 radioactif. **Nobel de chimie en 1961**.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le bilan <em>carbone</em> planétaire`,
      contenu_md:
`Aujourd'hui, la photosynthèse continue, à grande échelle, son travail discret. On estime qu'elle fixe chaque année environ **130 milliards de tonnes** de carbone atmosphérique sous forme de matière organique. C'est plus que **vingt fois** les émissions humaines annuelles de CO₂.

La répartition est étonnante. Quand on imagine la "respiration" de la planète, on pense aux forêts. Pourtant, environ **la moitié** de cette photosynthèse globale a lieu dans les **océans**, opérée par le **phytoplancton** — un nuage de micro-organismes invisibles à l'œil nu mais dont la masse cumulée surpasse celle de toutes les forêts. Une part importante de l'oxygène que tu respires vient des océans.

La photosynthèse est aussi un **puits de carbone** — elle retire du CO₂ de l'atmosphère pour le stocker, temporairement (dans les feuilles, puis le sol) ou très durablement (quand la matière organique s'enfouit et se fossilise sur des millions d'années — c'est l'origine du charbon, du pétrole, du gaz).

Face au [changement climatique]{accent}, cette dimension prend une importance critique. Les forêts et les océans absorbent actuellement environ **un tiers** des émissions humaines de CO₂. Mais ce puits faiblit : les sécheresses, les [[megafeux]] et la déforestation tropicale réduisent la capacité d'absorption des écosystèmes. Stimuler la photosynthèse — par la reforestation, l'amélioration agronomique, l'agriculture régénérative — figure parmi les leviers identifiés pour atténuer le changement climatique. Mais cela ne pourra jamais compenser à lui seul les émissions actuelles.`
    },

    {
      type: 'encadre',
      label: `Le poumon n'est pas où on croit`,
      contenu_md: `La métaphore courante voudrait que la **forêt amazonienne** soit « le poumon de la planète ». La formule est belle mais inexacte sur deux plans. D'abord, à l'échelle mondiale, **les océans** produisent autant ou plus d'oxygène que toutes les forêts terrestres réunies. Ensuite, une forêt mature **consomme presque autant d'oxygène qu'elle en produit** : les arbres respirent aussi, et la décomposition de la matière organique au sol consomme massivement de l'O₂. Le bilan net d'une forêt en équilibre est proche de **zéro** sur le long terme. Cela ne diminue en rien son importance — pour la biodiversité, le climat local, le carbone stocké dans la biomasse — mais l'oxygène que tu respires aujourd'hui a été produit sur des **centaines de millions d'années** d'accumulation et de fossilisation de matière organique, pas par les arbres vivants en ce moment.`
    },

    {
      type: 'texte',
      titre: `Imiter la nature ?`,
      contenu_md:
`Depuis les années 1970, plusieurs équipes de recherche tentent de construire des dispositifs de [photosynthèse artificielle]{accent} : des cellules qui utiliseraient la lumière du Soleil pour casser l'eau et produire du dihydrogène (carburant propre), ou pour fixer le CO₂ atmosphérique en molécules organiques utilisables.

Les défis sont considérables. La photosynthèse naturelle est, sur le plan énergétique, **étonnamment peu efficace** : seuls **1 à 2 %** de l'énergie lumineuse incidente sur une feuille sont convertis en biomasse. Les meilleures cellules photovoltaïques actuelles dépassent **25 %** de rendement pour produire de l'électricité, ce qui rend la voie « panneaux solaires + électrolyse » plus compétitive en pratique.

Pourquoi cherche-t-on alors à imiter la photosynthèse ? Parce qu'elle fonctionne à **température ambiante**, à partir de **matériaux abondants** (eau, CO₂), et qu'elle stocke l'énergie sous forme chimique transportable. Maîtriser cela permettrait de fabriquer des carburants liquides directement à partir du CO₂ atmosphérique et de la lumière — une voie séduisante pour la transition énergétique. Le concept reste expérimental, mais des progrès rapides ont été enregistrés au cours des dernières années.`
    }

  ],

  quiz: [
    {
      q: `Quels sont les produits de la photosynthèse à partir de CO₂ et d'eau ?`,
      options: [
        `Glucose et oxygène`,
        `Oxygène et azote`,
        `Glucose seul`,
        `Eau et chlorophylle`
      ],
      correcte: 0,
      explication: `L'équation bilan est : 6 CO₂ + 6 H₂O + lumière → C₆H₁₂O₆ + 6 O₂. Le glucose stocke l'énergie chimique, l'oxygène est libéré comme "sous-produit" — sous-produit dont la quasi-totalité de la vie complexe est aujourd'hui dépendante.`
    },
    {
      q: `Pourquoi les plantes apparaissent-elles vertes ?`,
      options: [
        `Parce que la chlorophylle absorbe le vert`,
        `Parce que la chlorophylle réfléchit le vert (elle absorbe surtout le bleu et le rouge)`,
        `Parce qu'elles produisent de la chlorophylle verte`,
        `Parce qu'elles reflètent toutes les couleurs sauf le vert`
      ],
      correcte: 1,
      explication: `La chlorophylle absorbe préférentiellement les longueurs d'onde bleues (~430 nm) et rouges (~660 nm). Le vert est largement réfléchi — c'est précisément la couleur que les plantes "n'utilisent pas" et donc renvoient à nos yeux.`
    },
    {
      q: `Où se déroule la photosynthèse dans la cellule végétale ?`,
      options: [
        `Dans le noyau`,
        `Dans la mitochondrie`,
        `Dans le chloroplaste`,
        `Dans le réticulum endoplasmique`
      ],
      correcte: 2,
      explication: `Le chloroplaste est l'organite spécialisé qui abrite toute la machinerie photosynthétique. Une cellule de feuille en contient typiquement des dizaines, parfois plus. Le chloroplaste descend d'une cyanobactérie ancestrale englobée il y a ~1,5 milliard d'années par une cellule eucaryote — endosymbiose.`
    },
    {
      q: `Qu'est-ce que la "Grande Oxygénation" ?`,
      options: [
        `Une découverte chimique du XIXᵉ siècle`,
        `L'enrichissement durable de l'atmosphère en oxygène il y a ~2,4 milliards d'années, conséquence de la photosynthèse des cyanobactéries`,
        `La création de la couche d'ozone par l'industrie`,
        `Un événement géologique sans rapport avec le vivant`
      ],
      correcte: 1,
      explication: `Vers -2,4 milliards d'années, l'oxygène produit par les cyanobactéries dépasse la capacité d'absorption des océans et des roches, et s'accumule dans l'atmosphère. Cela déclenche la première extinction de masse (anaérobies), un refroidissement climatique, et ouvre la voie à la respiration aérobie puis à la vie complexe.`
    },
    {
      q: `Qu'est-ce que la Rubisco ?`,
      options: [
        `Un pigment végétal`,
        `L'enzyme qui fixe le CO₂ atmosphérique dans le cycle de Calvin — la protéine la plus abondante de la biosphère`,
        `Une vitamine`,
        `Un gaz produit par les plantes`
      ],
      correcte: 1,
      explication: `Ribulose-1,5-bisphosphate carboxylase/oxygénase. Étonnamment lente et peu spécifique (elle confond parfois CO₂ et O₂, ce qui cause la photorespiration), mais elle est l'enzyme qui permet la fixation de tout le carbone organique. Sa masse mondiale se compte en milliards de tonnes.`
    },
    {
      q: `Quelle est la part approximative de la photosynthèse mondiale qui se déroule dans les océans ?`,
      options: [
        `Quasiment nulle`,
        `Environ 10 %`,
        `Environ 50 %`,
        `Plus de 90 %`
      ],
      correcte: 2,
      explication: `Le phytoplancton — un nuage de micro-organismes invisibles à l'œil nu — assure environ la moitié de la photosynthèse mondiale. Une part importante de l'oxygène que nous respirons vient des océans, pas seulement des forêts.`
    },
    {
      q: `Que se passe-t-il pendant la "phase claire" de la photosynthèse ?`,
      options: [
        `Le CO₂ est directement transformé en glucose`,
        `La lumière est captée, l'eau est cassée libérant l'O₂, et l'on produit ATP et NADPH`,
        `Les plantes respirent comme les animaux`,
        `Le glucose est stocké dans les feuilles`
      ],
      correcte: 1,
      explication: `Dans les thylakoïdes, la lumière excite la chlorophylle qui éjecte des électrons. L'eau est cassée (H₂O → ½ O₂ + 2 H⁺ + 2 e⁻), produisant l'oxygène libéré dans l'atmosphère. L'énergie capturée est stockée en ATP et NADPH, utilisés ensuite par le cycle de Calvin pour fixer le CO₂.`
    },
    {
      q: `Pourquoi le terme "poumon de la planète" pour la forêt amazonienne est-il imprécis ?`,
      options: [
        `La forêt amazonienne ne fait pas de photosynthèse`,
        `Une forêt mature en équilibre consomme presque autant d'oxygène qu'elle en produit ; et les océans contribuent autant que toutes les forêts à la production globale`,
        `L'Amazonie n'est pas une vraie forêt`,
        `L'oxygène n'est pas produit par photosynthèse`
      ],
      correcte: 1,
      explication: `La forêt amazonienne reste écologiquement et climatiquement cruciale, mais elle n'est pas le "poumon" qu'on imagine : son bilan oxygène net est proche de zéro à long terme (la respiration et la décomposition consomment ce que la photosynthèse produit), et le phytoplancton océanique assure une part comparable de la production d'O₂ mondiale.`
    }
  ]

});
