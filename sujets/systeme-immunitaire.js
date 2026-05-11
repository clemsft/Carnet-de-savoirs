/* ===================================================================
   SUJET — Le système immunitaire
   ===================================================================
   L'armée intérieure du corps humain.
   Domaine : Biologie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'systeme-immunitaire',
    titre: 'Le <em>système immunitaire</em>',
    domaines: ['Biologie'],
    tags: ['immunologie', 'anticorps', 'lymphocytes', 'vaccin', 'maladies'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['le-sommeil'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Comprendre le réseau de cellules, organes et molécules qui défend en permanence ton corps contre des milliards d\'agresseurs — et qui apprend, au fil de la vie, à reconnaître chacun d\'eux individuellement.',

  points_cles: [
    'Le **système immunitaire** est l\'ensemble des cellules, tissus et molécules qui défendent l\'organisme contre les agents pathogènes (bactéries, virus, parasites) et les cellules anormales.',
    'Il comporte deux grands étages : l\'**immunité innée** (réponse rapide, non spécifique) et l\'**immunité adaptative** (lente, spécifique, dotée de mémoire).',
    'Les **lymphocytes B** produisent des **anticorps** ; les **lymphocytes T** détruisent directement les cellules infectées.',
    'Chaque humain peut produire jusqu\'à **un milliard d\'anticorps différents** grâce à un mécanisme génétique de recombinaison aléatoire — Nobel de Tonegawa en 1987.',
    'La **vaccination**, inventée par Jenner en 1796, exploite la mémoire immunitaire pour immuniser sans subir la maladie. Les vaccins **à ARN messager** (2020-2021) ont marqué une rupture technologique.',
    'Quand le système immunitaire se trompe de cible et attaque les propres tissus du corps, on parle de **maladie auto-immune** : diabète de type 1, sclérose en plaques, lupus, polyarthrite rhumatoïde.',
    'L\'**immunothérapie** anti-cancer (anti-PD-1, anti-CTLA-4) — Nobel 2018 — réveille les lymphocytes contre les tumeurs. Elle a transformé le pronostic de plusieurs cancers.'
  ],

  carte_mentale: {
    central: 'immunite',
    noeuds: [
      { id: 'immunite', label: 'Système immunitaire', description: 'Le réseau de défense biologique de l\'organisme.' },
      { id: 'innee', label: 'Immunité innée', description: 'Réaction rapide (minutes/heures), non spécifique. Première ligne de défense.' },
      { id: 'adaptative', label: 'Immunité adaptative', description: 'Réaction lente (jours/semaines), **spécifique** à un agent précis, dotée de **mémoire**.' },
      { id: 'organes', label: 'Organes lymphoïdes', description: 'Moelle osseuse, thymus, ganglions, rate. Les "casernes" et "écoles" du système.' },
      { id: 'memoire', label: 'Mémoire immunitaire', description: 'Le système se "souvient" des agents rencontrés. Base de la vaccination.' },
      { id: 'pathologies', label: 'Quand ça déraille', description: 'Auto-immunité, allergies, immunodéficiences, rejet de greffe.' },
      { id: 'therapies', label: 'Manipuler l\'immunité', description: 'Vaccins, immunosuppresseurs, immunothérapies anti-cancer.' },

      // Innée
      { id: 'barriere', label: 'Barrières', description: 'Peau, muqueuses, sucs digestifs, larmes. Empêchent l\'entrée des pathogènes.', parent: 'innee' },
      { id: 'phago', label: 'Phagocytes', description: '**Macrophages**, **neutrophiles** : ils mangent les intrus. Découverts par Metchnikoff au XIXᵉ siècle.', parent: 'innee' },
      { id: 'inflammation', label: 'Inflammation', description: 'Rougeur, chaleur, douleur, gonflement. C\'est le **signal d\'alarme** qui mobilise les défenses.', parent: 'innee' },

      // Adaptative
      { id: 'lymphoB', label: 'Lymphocytes B', description: 'Produisent les **anticorps**, protéines qui se fixent spécifiquement sur les antigènes pour les neutraliser ou les marquer.', parent: 'adaptative' },
      { id: 'lymphoT', label: 'Lymphocytes T', description: 'Deux grandes familles : les T **CD4** (chefs d\'orchestre) et les T **CD8** (tueurs de cellules infectées).', parent: 'adaptative' },
      { id: 'anticorps', label: 'Anticorps', description: 'Protéines en forme de Y. Diversité quasi infinie générée par recombinaison génétique aléatoire.', parent: 'adaptative' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Une <em>armée</em> sans général',
      contenu_md:
`Ton corps est, à chaque seconde, le théâtre d\'un conflit invisible. Sur ta peau et tes muqueuses se promènent en permanence des **dizaines de billions** de bactéries, virus, levures, parasites. Tu en respires des milliers à chaque inspiration. Et pourtant, tu ne tombes pas malade chaque jour.

C\'est l\'œuvre de ton **système immunitaire** — un réseau de cellules, d\'organes et de molécules qui occupe environ **2 %** de ta masse corporelle, soit l\'équivalent du foie. Sans général qui le commande, sans plan central : juste des dizaines de types cellulaires qui interagissent par signaux chimiques, en s\'auto-organisant.

Et surtout : ce système **apprend**. Chaque infection rencontrée, chaque vaccin reçu lui laisse une trace. À l\'âge adulte, ton système immunitaire connaît individuellement des **milliers d\'agents pathogènes** différents.

Son efficacité dépend aussi de facteurs externes : nutrition, stress chronique, et — un effet aujourd\'hui bien documenté — la qualité du [[le-sommeil]], pendant lequel se déroulent plusieurs étapes clés de maturation et de mémorisation lymphocytaires.`
    },

    {
      type: 'texte',
      titre: 'Deux <em>étages</em>, deux logiques',
      contenu_md:
`Le système immunitaire fonctionne en deux temps successifs, parfaitement complémentaires.

L\'**immunité innée** est la première ligne. Elle est présente dès la naissance, identique chez tout le monde, et **non spécifique** : elle réagit à tout intrus de la même façon. Elle inclut les barrières physiques (peau, muqueuses), les protéines circulantes (système du complément), et les cellules de la phagocytose qui « mangent » les agresseurs (macrophages, neutrophiles). Sa réaction est **rapide** — quelques minutes à quelques heures — mais grossière.

Quand l\'innée ne suffit pas, l\'**immunité adaptative** prend le relais. Elle est lente à mobiliser (5 à 14 jours) mais elle est **spécifique** : elle développe une réponse sur mesure, ciblée précisément sur l\'agent rencontré. Et elle laisse une **mémoire**, qui rendra une nouvelle rencontre avec le même agent beaucoup plus rapide et efficace. C\'est cette mémoire qui fait que tu n\'attrapes la varicelle qu\'une fois.`
    },

    {
      type: 'widget',
      titre: 'Quatre acteurs cellulaires majeurs',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Innée',
            titre: 'Macrophages',
            description: 'Cellules « mangeuses » présentes dans tous les tissus. Phagocytent les pathogènes, **présentent** des fragments aux lymphocytes T pour activer la réponse adaptative.'
          },
          {
            tag: 'Innée',
            titre: 'Cellules NK',
            description: '*Natural Killers*. Détruisent les cellules infectées par des virus ou les cellules cancéreuses. Reconnaissent les cellules « anormales » sans entraînement préalable.'
          },
          {
            tag: 'Adaptative',
            titre: 'Lymphocytes B',
            description: 'Produits dans la **moelle osseuse**. Une fois activés par un antigène, ils se transforment en **plasmocytes** qui sécrètent des anticorps en quantité.'
          },
          {
            tag: 'Adaptative',
            titre: 'Lymphocytes T',
            description: 'Maturent dans le **thymus** (d\'où le « T »). Les T **CD4** orchestrent la réponse en activant B et T CD8. Les T **CD8** tuent les cellules infectées au contact.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>anticorps</em>, sniper du vivant',
      contenu_md:
`Les **anticorps** sont des protéines en forme de Y, capables de se fixer avec une précision extraordinaire sur une **molécule spécifique** — l\'**antigène** — qu\'elles reconnaissent comme étrangère. Une fois fixés, ils neutralisent l\'intrus, ou le marquent pour qu\'il soit détruit par d\'autres cellules.

Le génie du système : tu peux produire des anticorps contre **n\'importe quoi**. Une molécule créée en laboratoire qu\'aucune espèce vivante n\'avait jamais rencontrée ? Ton système immunitaire saura, en quelques jours, fabriquer un anticorps qui s\'y fixe spécifiquement.

Comment ? Pas en stockant un répertoire de plans préfabriqués — il en faudrait trop. Le mécanisme, élucidé par **Susumu Tonegawa** (Nobel 1987), est une **recombinaison génétique aléatoire** dans les lymphocytes B. Chaque cellule mélange ses gènes différemment, produisant un anticorps unique. À l\'échelle du corps entier, on estime que tu peux générer environ **un milliard d\'anticorps différents**. Quand l\'un d\'eux se révèle utile, sa cellule productrice est massivement clonée.`
    },

    {
      type: 'encadre',
      label: 'Une horloge à recombinaison',
      contenu_md: 'C\'est la seule fonction du corps humain qui réorganise activement ton ADN. Pendant la maturation des lymphocytes, des **enzymes coupent et recollent** les gènes des anticorps dans des combinaisons quasi infinies. Ton système immunitaire est, en un sens, un atelier de bricolage moléculaire qui génère des solutions par mutation rapide. Il fonctionne sur le **même principe que l\'évolution** — par variation et sélection — mais à l\'échelle de quelques jours.'
    },

    {
      type: 'texte',
      titre: 'La <em>vaccination</em>, en bref',
      contenu_md:
`En **1796**, **Edward Jenner** observe que les laitières exposées à la *vaccine* (variole bovine, bénigne) ne contractent pas la **variole** humaine, qui tue alors une personne sur trois infectée. Il inocule volontairement la vaccine à un enfant, puis lui fait subir l\'épreuve de la variole humaine. L\'enfant ne tombe pas malade. La vaccination est née — le mot vient de *vacca*, la vache.

La logique est simple : exposer le système immunitaire à un agent **inoffensif mais ressemblant** à un agent dangereux, pour qu\'il développe une mémoire sans subir la maladie. Les techniques se sont multipliées au fil des siècles : pathogènes morts, atténués, fragments de protéines, vecteurs viraux modifiés.

La rupture la plus récente : les **vaccins à ARN messager**, déployés à l\'échelle planétaire en 2020-2021 contre le SARS-CoV-2. Au lieu d\'injecter une protéine virale, on injecte les **instructions** (ARN) pour que les cellules la fabriquent elles-mêmes. **Katalin Karikó** et **Drew Weissman**, qui ont rendu cette technologie possible après des décennies de travaux décriés, ont reçu le **Nobel de médecine 2023**.`
    },

    {
      type: 'widget',
      titre: 'Histoire abrégée de l\'immunologie',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1796', titre: 'Vaccination', description: 'Edward Jenner inocule la vaccine à un enfant pour le protéger de la **variole**. Naissance de la prophylaxie immunologique.' },
          { date: '1880-1885', titre: 'Pasteur', description: 'Louis Pasteur développe les **vaccins atténués** (charbon, rage). Confirme par l\'expérimentation l\'idée de Jenner.' },
          { date: '1890', titre: 'Anticorps', description: 'Behring et Kitasato isolent les **antitoxines** dans le sérum — ancêtres des anticorps. Premier Nobel de médecine en 1901.' },
          { date: '1908', titre: 'Phagocytose', description: 'Metchnikoff (Nobel partagé) découvre que des cellules « mangent » les microbes. L\'immunité innée prend forme.' },
          { date: '1959', titre: 'Sélection clonale', description: 'Burnet propose que chaque lymphocyte ne reconnaît qu\'**un antigène**, et se multiplie quand il le rencontre. Cadre conceptuel de l\'immunité adaptative.' },
          { date: '1987', titre: 'Recombinaison génétique', description: 'Susumu Tonegawa explique comment un répertoire **quasi infini** d\'anticorps peut être généré à partir d\'un nombre fini de gènes. **Nobel** la même année.' },
          { date: '2018', titre: 'Immunothérapie anti-cancer', description: 'Allison et Honjo reçoivent le **Nobel** pour avoir montré qu\'on peut « lever le frein » des lymphocytes T contre les tumeurs. Révolution clinique.' },
          { date: '2020', titre: 'Vaccins ARNm', description: 'Premiers vaccins **ARN messager** déployés à l\'échelle mondiale contre la COVID-19. Rapidité de développement inédite.' },
          { date: '2023', titre: 'Karikó & Weissman', description: 'Nobel de médecine pour les recherches fondamentales qui ont rendu possibles les vaccins ARNm.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Quand le <em>système</em> se trompe',
      contenu_md:
`L\'immunité doit faire un travail délicat : reconnaître ce qui est « soi » et ne pas l\'attaquer, tout en attaquant tout ce qui est « non-soi » et hostile. Ce travail repose en grande partie sur la **maturation thymique** des lymphocytes T : ceux qui réagissent trop fort au soi sont éliminés avant d\'entrer en circulation.

Mais le mécanisme n\'est pas parfait. Quand des lymphocytes auto-réactifs échappent au filtre, ils peuvent attaquer les tissus du corps : c\'est la [maladie auto-immune]{accent}. Le **diabète de type 1** détruit les cellules β du pancréas. La **sclérose en plaques** s\'attaque à la gaine de myéline des neurones. Le **lupus**, la **polyarthrite rhumatoïde**, la **maladie cœliaque** sont d\'autres exemples. Plus de **80 maladies auto-immunes** connues, qui touchent ensemble environ **5 % de la population mondiale**.

Autre dérèglement : l\'**allergie**, où le système réagit fort à des substances inoffensives (pollens, arachides, acariens). Et à l\'opposé, l\'**immunodéficience**, où la réponse est insuffisante (VIH, certaines maladies génétiques rares).`
    },

    {
      type: 'encadre',
      label: 'Le cancer comme fuite immunitaire',
      contenu_md: 'On pensait jadis que le système immunitaire était impuissant face au cancer. On sait aujourd\'hui qu\'il **détecte et élimine** régulièrement des cellules tumorales naissantes — ce sont celles qui parviennent à se rendre invisibles qui prospèrent. Les **immunothérapies** modernes (anticorps anti-PD-1, anti-CTLA-4) consistent à lever ce camouflage. Pour certains cancers (mélanome avancé, certains cancers du poumon), les pronostics ont été **transformés** : des patients incurables il y a quinze ans guérissent désormais durablement.'
    }

  ],

  quiz: [
    {
      type: 'ordre-chrono',
      q: 'Remets ces grandes étapes de l\'histoire de l\'immunologie dans l\'ordre chronologique :',
      items: [
        '1796 — Jenner : première vaccination (variole)',
        '1880-1885 — Pasteur développe les vaccins atténués',
        '1890 — Behring et Kitasato isolent les antitoxines (anticorps)',
        '1987 — Tonegawa explique la diversité des anticorps (Nobel)',
        '2020 — Premiers vaccins à ARN messager déployés (COVID-19)'
      ],
      explication: 'Jenner pose la prophylaxie vaccinale (1796), Pasteur étend par les vaccins atténués (1880s), Behring découvre les antitoxines (1890), Tonegawa élucide la recombinaison génétique des anticorps (Nobel 1987), vaccins à ARNm déployés à grande échelle en 2020-2021 (Nobel Karikó & Weissman 2023).'
    },
    {
      type: 'associer',
      q: 'Associe chaque cellule immunitaire à sa fonction principale :',
      paires: [
        { gauche: 'Lymphocyte B', droite: 'Produit les anticorps' },
        { gauche: 'Lymphocyte T CD8', droite: 'Tue les cellules infectées' },
        { gauche: 'Macrophage', droite: 'Phagocyte les pathogènes' },
        { gauche: 'Cellule NK', droite: 'Détruit cellules virales et tumorales' }
      ],
      explication: 'Lymphocytes B : produits dans la moelle osseuse, fabriquent les anticorps. Lymphocytes T CD8 : tueurs au contact. Macrophages : "mangeurs" innés présents dans tous les tissus. Cellules NK (Natural Killers) : reconnaissent et détruisent les cellules "anormales" sans entraînement préalable.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le corps humain peut produire environ un milliard d\'anticorps différents grâce à un mécanisme génétique de recombinaison aléatoire dans les lymphocytes B.',
      reponse: true,
      explication: 'Mécanisme élucidé par Susumu Tonegawa (Nobel 1987). Pendant la maturation des lymphocytes B, des enzymes coupent et recollent les gènes des anticorps dans des combinaisons quasi infinies. C\'est la seule fonction du corps humain qui réorganise activement l\'ADN.'
    },
    {
      q: 'Quelle est la différence principale entre immunité innée et adaptative ?',
      options: [
        'L\'innée est génétique, l\'adaptative est apprise',
        'L\'innée est rapide et non spécifique ; l\'adaptative est plus lente, spécifique à chaque agent et dotée de mémoire',
        'L\'innée n\'existe que chez les humains',
        'Il n\'y a pas de différence biologique réelle'
      ],
      correcte: 1,
      explication: 'L\'innée réagit en minutes/heures de manière identique à tout agresseur. L\'adaptative met 5 à 14 jours mais développe une réponse sur mesure et un souvenir durable.'
    },
    {
      q: 'Que produisent les lymphocytes B ?',
      options: [
        'Des bactéries amies',
        'Des anticorps spécifiques d\'un antigène donné',
        'De l\'adrénaline',
        'Des hormones'
      ],
      correcte: 1,
      explication: 'Une fois activés par leur antigène, les lymphocytes B se différencient en plasmocytes qui produisent en masse l\'anticorps correspondant.'
    },
    {
      q: 'Comment ton corps peut-il produire des anticorps contre une molécule jamais rencontrée auparavant, même synthétique ?',
      options: [
        'Le génome contient un anticorps pour chaque cas possible',
        'Par recombinaison génétique aléatoire dans les lymphocytes B, qui génère un répertoire quasi infini',
        'Par mutation rapide une fois la molécule reconnue',
        'Par l\'apprentissage de la mère pendant la grossesse'
      ],
      correcte: 1,
      explication: 'Pendant leur maturation, les lymphocytes B "mélangent" leurs gènes d\'anticorps, produisant chacun une combinaison unique. À l\'échelle du corps : environ un milliard de spécificités différentes possibles. Découvert par Tonegawa, Nobel 1987.'
    },
    {
      q: 'Qu\'a démontré Edward Jenner en 1796 ?',
      options: [
        'Que toutes les maladies sont causées par des microbes',
        'Que l\'inoculation de la vaccine bovine protège de la variole humaine — première vaccination',
        'Que les vaccins existent dans la nature',
        'Que les microbes peuvent être tués par la chaleur'
      ],
      correcte: 1,
      explication: 'C\'est l\'expérience fondatrice de la vaccination. Le mot lui-même vient de "vacca" (la vache), parce que Jenner utilisait la variole bovine.'
    },
    {
      q: 'Quel est le principe d\'un vaccin à ARN messager ?',
      options: [
        'Injecter un virus affaibli',
        'Injecter les instructions (ARN) qui font fabriquer une protéine virale par les propres cellules du corps, qui apprend alors à la reconnaître',
        'Injecter un mélange d\'anticorps',
        'Injecter de l\'ADN modifié'
      ],
      correcte: 1,
      explication: 'Au lieu d\'injecter directement la protéine virale, on injecte les instructions ARN pour que tes cellules la fabriquent elles-mêmes. Le système immunitaire la reconnaît comme étrangère et apprend à la combattre. Karikó et Weissman ont reçu le Nobel 2023 pour avoir rendu cela possible.'
    },
    {
      q: 'Qu\'est-ce qu\'une maladie auto-immune ?',
      options: [
        'Une maladie où le système immunitaire ne fonctionne plus du tout',
        'Une infection chronique',
        'Une maladie où le système immunitaire attaque par erreur les propres tissus du corps',
        'Une déficience génétique'
      ],
      correcte: 2,
      explication: 'Quand des lymphocytes auto-réactifs échappent à l\'élimination thymique, ils peuvent attaquer le soi. Diabète de type 1, sclérose en plaques, lupus, polyarthrite : plus de 80 maladies auto-immunes connues.'
    },
    {
      q: 'Sur quelle idée repose l\'immunothérapie moderne contre le cancer (anti-PD-1, anti-CTLA-4) ?',
      options: [
        'Tuer directement les cellules cancéreuses avec un médicament',
        'Lever les "freins" qui empêchent les lymphocytes T d\'attaquer les cellules tumorales',
        'Remplacer le système immunitaire',
        'Injecter de nouveaux gènes dans les tumeurs'
      ],
      correcte: 1,
      explication: 'Les tumeurs activent des "checkpoints" qui freinent les lymphocytes. Les immunothérapies bloquent ces freins, libérant la réponse immunitaire contre la tumeur. Allison et Honjo ont reçu le Nobel 2018 pour cette découverte qui a transformé la cancérologie.'
    }
  ]

});
