/* ===================================================================
   SUJET — L'ADN et le code génétique
   ===================================================================
   La molécule qui porte la recette du vivant.
   Domaines : Biologie, Génétique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'adn-genetique',
    titre: `L'<em>ADN</em> et le code génétique`,
    domaines: ['Biologie', 'Génétique'],
    tags: ['adn', 'gènes', 'watson-crick', 'crispr', 'génome', 'protéines'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['evolution-darwin', 'systeme-immunitaire'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Comprendre comment quatre lettres chimiques, enroulées en une double hélice de deux mètres pliée dans chacune de tes cellules, suffisent à écrire l'intégralité d'un être vivant — et comment on a appris, en moins d'un siècle, à les lire puis à les réécrire.`,

  points_cles: [
    `L'**ADN** est une longue molécule en **double hélice** dont la structure a été élucidée par **Watson et Crick** en **1953**, à partir des clichés de diffraction de **Rosalind Franklin**.`,
    `Le code génétique repose sur **4 lettres** chimiques — **A**, **T**, **G**, **C** — lues par triplets (**codons**) pour spécifier les **20 acides aminés** qui composent les protéines.`,
    `Chaque cellule humaine contient environ **2 mètres** d'ADN repliés dans un noyau de **6 micromètres** de diamètre — soit l'équivalent de 200 km de fil dans une balle de tennis.`,
    `La fabrication d'une protéine se fait en deux temps : **transcription** de l'ADN en ARN messager, puis **traduction** de cet ARN en chaîne d'acides aminés par les ribosomes.`,
    `Le **Projet Génome Humain** (1990-2003) a séquencé les **3,2 milliards** de paires de bases du génome humain. Une opération qui a coûté **3 milliards de dollars** ; aujourd'hui, séquencer un génome coûte moins de **200 dollars**.`,
    `**CRISPR-Cas9**, adapté en 2012 par **Charpentier et Doudna** (Nobel 2020), permet de **réécrire** l'ADN avec une précision inédite. Premières thérapies géniques approuvées en 2023.`,
    `Seuls environ **1,5 %** du génome humain codent pour des protéines : le reste — longtemps appelé « ADN poubelle » — joue en réalité des rôles de régulation, de structure, ou demeure de fonction inconnue.`
  ],

  carte_mentale: {
    central: 'adn',
    noeuds: [
      { id: 'adn', label: 'ADN', description: `Molécule en double hélice qui porte l'information génétique de tout être vivant connu.` },
      { id: 'structure', label: 'Structure', description: `Double hélice de deux brins antiparallèles, appariés par les bases A-T et G-C.` },
      { id: 'code', label: 'Code génétique', description: `Correspondance entre triplets de bases (codons) et acides aminés.` },
      { id: 'expression', label: 'Expression des gènes', description: `Comment l'information de l'ADN devient une protéine fonctionnelle.` },
      { id: 'sequencage', label: 'Séquençage', description: `Lire l'ordre exact des bases d'un brin d'ADN.` },
      { id: 'edition', label: 'Édition du génome', description: `Modifier l'ADN avec précision — révolution **CRISPR**.` },
      { id: 'genome', label: 'Génome', description: `Ensemble de l'ADN d'un organisme — environ 3,2 milliards de paires de bases chez l'humain.` },

      // Structure
      { id: 'bases', label: 'Quatre bases', description: `**A**dénine, **T**hymine, **G**uanine, **C**ytosine. A s'apparie à T, G s'apparie à C.`, parent: 'structure' },
      { id: 'helice', label: 'Double hélice', description: `Découverte par Watson et Crick en **1953**, à partir des clichés de Rosalind Franklin (cliché 51).`, parent: 'structure' },
      { id: 'chromosome', label: 'Chromosomes', description: `ADN compacté autour des **histones**. L'humain en compte **46** (23 paires).`, parent: 'structure' },

      // Expression
      { id: 'transcription', label: 'Transcription', description: `L'ADN est copié en ARN messager dans le noyau.`, parent: 'expression' },
      { id: 'traduction', label: 'Traduction', description: `Les ribosomes lisent l'ARN par codons et assemblent les acides aminés.`, parent: 'expression' },

      // Séquençage
      { id: 'pgh', label: 'Projet Génome Humain', description: `**1990-2003**. 3 milliards de dollars. Premier séquençage complet de l'humain.`, parent: 'sequencage' },
      { id: 'ngs', label: 'Séquençage nouvelle génération', description: `Depuis ~2008 : un génome humain en quelques heures pour moins de 200 $.`, parent: 'sequencage' },

      // Édition
      { id: 'crispr', label: 'CRISPR-Cas9', description: `Outil d'édition génétique précis adapté en **2012**. Nobel de chimie 2020 pour **Charpentier et Doudna**.`, parent: 'edition' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `La molécule la plus <em>élégante</em> du vivant`,
      contenu_md:
`Pendant la première moitié du XXᵉ siècle, on savait qu'il existait, quelque part dans les cellules, une « substance de l'hérédité » capable de transmettre les caractères des parents aux enfants. On l'imaginait protéique, parce que les protéines étaient riches et complexes — l'ADN, fait de seulement quatre composants chimiques, semblait trop pauvre pour porter une telle information.

On se trompait.

En **1953**, deux jeunes chercheurs de Cambridge, **James Watson** et **Francis Crick**, publient un article d'une page dans *Nature*. Ils y proposent la structure de l'ADN : une **double hélice** régulière, deux brins enroulés l'un autour de l'autre, reliés par des paires de bases complémentaires. La structure expliquait d'un coup comment l'information pouvait être stockée — dans la séquence des bases — et copiée — chaque brin servant de matrice pour reconstituer son complément.

Le génie de leur modèle s'appuyait sur les **clichés de diffraction aux rayons X** de **Rosalind Franklin** (cliché 51, en particulier), obtenus au King's College de Londres, et qu'elle leur avait montrés sans qu'elle ne soit créditée à l'époque. Franklin meurt en 1958 d'un cancer à 37 ans ; le Nobel attribué en 1962 à Watson, Crick et Wilkins ne peut, par règle, être attribué à titre posthume.`
    },

    {
      type: 'widget',
      titre: `L'appariement des quatre bases`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Purine',
            titre: 'Adénine (A)',
            description: `S'apparie **toujours** avec la thymine (T) par **deux liaisons hydrogène**. Présente aussi dans l'ATP, monnaie énergétique cellulaire.`
          },
          {
            tag: 'Pyrimidine',
            titre: 'Thymine (T)',
            description: `Partenaire exclusif de l'adénine. Dans l'ARN, elle est remplacée par l'**uracile** (U).`
          },
          {
            tag: 'Purine',
            titre: 'Guanine (G)',
            description: `S'apparie avec la cytosine (C) par **trois liaisons hydrogène** — une paire plus stable que A-T.`
          },
          {
            tag: 'Pyrimidine',
            titre: 'Cytosine (C)',
            description: `Partenaire de la guanine. Sa **méthylation** est l'un des principaux mécanismes épigénétiques de régulation des gènes.`
          }
        ]
      }
    },

    {
      type: 'encadre',
      label: `Une règle simple, une conséquence majeure`,
      contenu_md: `La règle de **complémentarité** — A face à T, G face à C — n'est pas un détail. Elle implique que chaque brin contient **toute l'information du brin opposé**. Pour copier l'ADN, il suffit de séparer les deux brins et de reconstituer le complément de chacun. La cellule fait cela des milliards de fois par jour avec un taux d'erreur inférieur à **1 sur un milliard de bases**.`
    },

    {
      type: 'texte',
      titre: `Quatre lettres, vingt <em>acides aminés</em>`,
      contenu_md:
`Une protéine est une chaîne de **20 acides aminés** différents, repliée dans une forme tridimensionnelle qui détermine sa fonction. La séquence de ces acides aminés est entièrement spécifiée par la séquence de l'ADN — mais comment 4 lettres peuvent-elles désigner 20 objets distincts ?

La réponse est mathématique : par **groupes de trois**. Trois bases prises ensemble forment un **codon**, ce qui donne 4³ = **64 combinaisons** possibles — largement assez pour les 20 acides aminés. Le code est légèrement **redondant** (plusieurs codons pour un même acide aminé), ce qui le rend robuste aux petites mutations.

Le code génétique est **quasi universel**. Une bactérie, un champignon, un éléphant, toi — tous utilisent la même table de correspondance entre codons et acides aminés. C'est l'un des indices les plus puissants que toute la vie connue descend d'un **ancêtre commun** unique, il y a peut-être 3,8 milliards d'années. Ce constat est central pour l'[[evolution-darwin]].

Quelques codons jouent des rôles particuliers : **AUG** est le « départ » (signal de début de traduction, code aussi pour la méthionine), tandis que **UAA**, **UAG** et **UGA** sont les codons « stop » qui mettent fin à la chaîne.`
    },

    {
      type: 'widget',
      titre: `De l'ADN à la protéine — les deux grandes étapes`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: 'Transcription',
            description: `Dans le noyau, une enzyme — l'**ARN polymérase** — sépare localement la double hélice et copie le brin codant en un brin d'**ARN messager** (ARNm). C'est la même information, transcrite dans un alphabet voisin (l'uracile remplace la thymine).`
          },
          {
            titre: 'Maturation de l\'ARNm',
            description: `Avant de quitter le noyau, l'ARNm est édité : les **introns** (séquences non codantes) sont retirés, les **exons** sont raboutés. Une coiffe et une queue poly-A sont ajoutées pour le stabiliser. Un même gène peut donner **plusieurs protéines différentes** selon les exons retenus — c'est l'**épissage alternatif**.`
          },
          {
            titre: 'Traduction',
            description: `L'ARNm sort dans le cytoplasme. Un **ribosome** s'y fixe et lit la séquence par codons de 3 bases. À chaque codon, un **ARN de transfert** apporte l'acide aminé correspondant, qui est ajouté à la chaîne en construction. Quand un codon stop est atteint, la protéine est relâchée.`
          },
          {
            titre: 'Repliement',
            description: `La chaîne d'acides aminés se replie en quelques millisecondes en une structure tridimensionnelle spécifique. C'est cette forme qui détermine la fonction de la protéine — enzyme, récepteur, fibre structurale, etc. Prédire ce repliement à partir de la séquence est resté un problème ouvert pendant 50 ans, résolu en 2020 par l'IA **AlphaFold** de DeepMind.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Lire un <em>génome</em> entier`,
      contenu_md:
`Connaître la structure de l'ADN ne suffit pas. Encore faut-il pouvoir **lire** la séquence exacte des bases qui composent le génome d'un organisme. Cette opération — le **séquençage** — a longtemps été lente, coûteuse, manuelle.

En **1990**, un consortium international lance le [Projet Génome Humain]{accent} : séquencer l'intégralité des **3,2 milliards de paires de bases** réparties sur les 23 paires de chromosomes humains. Coût prévisionnel : **3 milliards de dollars**. Durée prévisionnelle : 15 ans. Une entreprise comparable au programme Apollo.

Le projet aboutit en **2003** — deux ans avant l'échéance, grâce notamment à la concurrence d'une société privée, **Celera Genomics** de Craig Venter, qui développe en parallèle des méthodes plus rapides. La première version « complète » est publiée en 2003 ; la version réellement complète, comprenant les régions centromériques difficiles, n'est finalisée qu'en **2022**.

Depuis, le coût du séquençage a chuté **plus vite que la loi de Moore**. Un génome humain qui coûtait 3 milliards de dollars en 2003 en coûte **moins de 200** aujourd'hui, et se séquence en quelques heures. Cette accélération a ouvert la médecine de précision, la génomique comparée des espèces, la paléogénétique (séquençage de l'ADN de Néandertal par **Svante Pääbo**, Nobel 2022).`
    },

    {
      type: 'widget',
      titre: `Repères chronologiques`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1869', titre: 'Découverte de la "nucléine"', description: `**Friedrich Miescher** isole pour la première fois ce qui s'appellera plus tard l'ADN, à partir de pansements purulents. Il n'en mesure pas la portée.` },
          { date: '1944', titre: 'L\'ADN porte l\'hérédité', description: `**Avery, MacLeod et McCarty** démontrent expérimentalement que c'est l'ADN — pas les protéines — qui transmet les caractères héréditaires chez les bactéries.` },
          { date: '1953', titre: 'La double hélice', description: `**Watson, Crick, Wilkins** (et **Rosalind Franklin**, sans crédit officiel) publient la structure de l'ADN dans *Nature*. Nobel en **1962**.` },
          { date: '1977', titre: 'Méthode de Sanger', description: `**Frederick Sanger** met au point la première méthode de séquençage utilisable à grande échelle. Deuxième Nobel pour lui en 1980.` },
          { date: '1990', titre: 'Lancement du Projet Génome Humain', description: `Coût prévu : **3 milliards de dollars**. Durée prévue : 15 ans.` },
          { date: '2003', titre: 'Génome humain séquencé', description: `Achevé deux ans en avance. **3,2 milliards de paires de bases** lues, environ 20 000 gènes recensés (bien moins que les 100 000 attendus initialement).` },
          { date: '2012', titre: 'CRISPR-Cas9', description: `**Emmanuelle Charpentier** et **Jennifer Doudna** adaptent un système immunitaire bactérien pour en faire un outil d'édition génétique précis. Nobel de chimie **2020**.` },
          { date: '2020', titre: 'AlphaFold', description: `L'IA de DeepMind résout le problème du **repliement des protéines**, ouvert depuis 1972. Permet de prédire la structure 3D de quasi toutes les protéines connues.` },
          { date: '2023', titre: 'Première thérapie CRISPR approuvée', description: `**Casgevy**, traitement de la drépanocytose par édition génétique des cellules sanguines du patient. Approbation FDA et UE.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `<em>Réécrire</em> le code`,
      contenu_md:
`Pendant cinquante ans, on a su lire l'ADN sans pouvoir y intervenir précisément. Modifier un gène spécifique chez un organisme vivant était possible mais lent, coûteux, peu fiable. Cela a radicalement changé en **2012**.

Cette année-là, **Emmanuelle Charpentier** et **Jennifer Doudna** publient un article qui décrit comment réutiliser un mécanisme de défense des bactéries — le système [CRISPR-Cas9]{accent} — pour cibler et couper n'importe quelle séquence d'ADN au choix. Les bactéries s'en servaient pour neutraliser des virus envahisseurs ; les chercheurs s'en sont servis pour éditer le génome avec une précision inégalée.

Le principe est d'une simplicité confondante. Un **ARN guide** est conçu pour s'apparier à la séquence d'ADN que l'on veut modifier. La protéine **Cas9**, fixée à cet ARN, joue le rôle de paire de ciseaux moléculaires : elle coupe l'ADN exactement à cet endroit. La cellule répare la coupure — soit en désactivant le gène, soit, si on lui fournit un modèle, en y insérant une nouvelle séquence.

Charpentier et Doudna reçoivent le **Nobel de chimie 2020**. En **2023**, la première thérapie CRISPR — **Casgevy**, pour la drépanocytose — est approuvée par la FDA. Une maladie génétique héréditaire devient guérissable par réécriture du génome du patient lui-même.

L'outil ouvre des perspectives vertigineuses (correction de maladies génétiques, agriculture, lutte contre les vecteurs de maladies) et soulève des questions éthiques majeures — notamment lorsqu'en 2018, le chercheur chinois **He Jiankui** annonce avoir modifié l'ADN d'embryons humains conduits à naître. Condamnation internationale, prison, moratoire de facto sur l'édition germinale humaine.`
    },

    {
      type: 'encadre',
      label: `L'ADN au-delà des protéines`,
      contenu_md: `Une surprise du Projet Génome Humain : seuls **1,5 %** des 3,2 milliards de bases codent directement pour des protéines. Le reste, longtemps appelé « **ADN poubelle** », a été progressivement réhabilité. On y trouve des séquences **régulatrices** qui contrôlent quand et où chaque gène s'exprime, des **ARN non codants** aux fonctions diverses, des **éléments transposables** (vestiges de virus anciens), et beaucoup de séquences dont la fonction — s'il y en a une — reste à élucider. Le génome ressemble moins à un livre de recettes qu'à un orchestre symphonique : ce qui compte n'est pas seulement les notes (les gènes), mais leur **mise en scène**.`
    }

  ],

  quiz: [
    {
      q: `Qui a élucidé la structure en double hélice de l'ADN en 1953 ?`,
      options: [
        `Mendel et Pasteur`,
        `Watson et Crick, à partir des clichés de Rosalind Franklin`,
        `Darwin et Wallace`,
        `Pasteur et Koch`
      ],
      correcte: 1,
      explication: `James Watson et Francis Crick publient la structure dans Nature en 1953. Leur modèle s'appuie crucialement sur les clichés de diffraction de Rosalind Franklin, notamment le célèbre cliché 51. Nobel attribué en 1962 (Franklin, morte en 1958, ne pouvait pas être co-récipiendaire — règle de non-attribution posthume).`
    },
    {
      q: `Combien de bases différentes composent l'ADN ?`,
      options: [`2`, `4`, `20`, `64`],
      correcte: 1,
      explication: `Quatre bases : A (adénine), T (thymine), G (guanine), C (cytosine). Lues par triplets (codons), elles génèrent 4³ = 64 combinaisons possibles, ce qui suffit largement à coder les 20 acides aminés des protéines.`
    },
    {
      q: `Pourquoi le code génétique est-il qualifié de "redondant" ?`,
      options: [
        `Parce que l'ADN est copié en double`,
        `Parce qu'il existe des séquences identiques sur les deux brins`,
        `Parce que plusieurs codons différents peuvent coder le même acide aminé`,
        `Parce que les gènes sont répétés plusieurs fois dans le génome`
      ],
      correcte: 2,
      explication: `Il y a 64 codons possibles pour seulement 20 acides aminés : la plupart des acides aminés sont donc codés par plusieurs codons différents. Cette redondance rend le code partiellement robuste aux mutations ponctuelles.`
    },
    {
      q: `Quelles sont les deux grandes étapes de la fabrication d'une protéine ?`,
      options: [
        `Réplication puis division cellulaire`,
        `Transcription de l'ADN en ARNm, puis traduction de l'ARNm en chaîne d'acides aminés par les ribosomes`,
        `Phosphorylation puis oxydation`,
        `Synthèse puis dégradation`
      ],
      correcte: 1,
      explication: `Transcription dans le noyau (ADN → ARN messager), puis traduction dans le cytoplasme par les ribosomes (ARNm → protéine). C'est le "dogme central" de la biologie moléculaire, formulé par Crick en 1958.`
    },
    {
      q: `Combien le génome humain compte-t-il de paires de bases environ ?`,
      options: [
        `3 millions`,
        `300 millions`,
        `3,2 milliards`,
        `30 milliards`
      ],
      correcte: 2,
      explication: `Environ 3,2 milliards de paires de bases réparties sur 23 paires de chromosomes. Le Projet Génome Humain (1990-2003) a fourni la première lecture quasi complète, finalisée vraiment en 2022.`
    },
    {
      q: `Qu'est-ce que CRISPR-Cas9 ?`,
      options: [
        `Une méthode de séquençage rapide`,
        `Un type de virus utilisé en thérapie génique`,
        `Un outil d'édition du génome dérivé d'un système immunitaire bactérien, qui permet de couper l'ADN à un endroit précis`,
        `Un nouveau modèle de double hélice`
      ],
      correcte: 2,
      explication: `Adapté par Emmanuelle Charpentier et Jennifer Doudna en 2012 (Nobel de chimie 2020). Un ARN guide cible une séquence précise ; la protéine Cas9 y coupe l'ADN. Première thérapie CRISPR approuvée en 2023 contre la drépanocytose.`
    },
    {
      q: `Quelle fraction du génome humain code directement pour des protéines ?`,
      options: [
        `Environ 1,5 %`,
        `Environ 25 %`,
        `Environ 50 %`,
        `Environ 90 %`
      ],
      correcte: 0,
      explication: `Seuls ~1,5 % du génome contiennent les gènes codant pour des protéines. Le reste, longtemps appelé "ADN poubelle", joue des rôles de régulation, contient des ARN non codants, des éléments transposables — beaucoup reste mal compris.`
    },
    {
      q: `Qu'est-ce qui montre que toute la vie connue partage un ancêtre commun ?`,
      options: [
        `Toutes les espèces ont la même apparence à l'embryon`,
        `Le code génétique (correspondance codon-acide aminé) est quasi universel chez tous les êtres vivants`,
        `Toutes les espèces ont 46 chromosomes`,
        `Tous les organismes utilisent l'oxygène`
      ],
      correcte: 1,
      explication: `Bactéries, champignons, plantes, animaux utilisent quasiment la même table de correspondance entre codons et acides aminés. Une telle conservation s'explique le plus simplement par une descendance commune — c'est l'un des indices les plus puissants à l'appui de la théorie de l'évolution.`
    }
  ]

});
