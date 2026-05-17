/* ===================================================================
   SUJET — Les probabilités
   ===================================================================
   Comment les mathématiques apprivoisent le hasard, depuis les cartes
   à jouer de Pascal et Fermat jusqu'aux algorithmes bayésiens.
   Domaine : Mathématiques
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'probabilites',
    titre: 'Les <em>probabilités</em>',
    domaines: ['Mathématiques'],
    tags: ['hasard', 'statistique', 'bayes', 'pascal', 'fermat', 'esperance', 'gauss', 'kolmogorov'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['nombres-premiers', 'infini-mathematiques', 'ia-generative'],
    date_creation: '2026-05-17',
    date_maj: '2026-05-17'
  },

  resume: `Comprendre comment les mathématiques apprivoisent le hasard, depuis une correspondance entre Pascal et Fermat en 1654 autour d'un problème de jeu de cartes interrompu, jusqu'aux théorèmes modernes qui font tourner l'intelligence artificielle, les marchés financiers, l'épidémiologie et la météo.`,

  points_cles: [
    `La **probabilité** d'un événement est un nombre entre **0 et 1** qui mesure à quel point il est attendu. **0 = impossible**, **1 = certain**, **0,5 = autant de chances que pas**. Toute la théorie consiste à manipuler ces nombres rigoureusement.`,
    `La science formelle naît en **1654** d'une **correspondance entre Blaise Pascal et Pierre de Fermat**, sollicités par le chevalier de Méré pour résoudre le **problème des partis** : comment répartir équitablement les mises d'un jeu interrompu ?`,
    `La **loi des grands nombres** (Jacques Bernoulli, **1713**, *Ars Conjectandi*) dit que la moyenne d'une expérience aléatoire répétée tend vers la **probabilité théorique**. Pile-ou-face 10 fois : irrégulier. 10 millions de fois : très proche de 50 %.`,
    `La **loi normale** ou "courbe en cloche", introduite par **Gauss** en **1809**, apparaît dès qu'on additionne beaucoup de petites contributions aléatoires indépendantes. Taille des humains, erreurs de mesure, bruit de fond : tout y converge.`,
    `La **probabilité conditionnelle** P(A | B) est la probabilité de A *sachant* que B est vrai. Elle ne vaut généralement pas P(A) : un test médical positif change l'estimation que tu sois malade, sans la rendre certaine.`,
    `Le [théorème de Bayes]{accent} (formulé par le révérend Thomas Bayes vers **1763**, publié à titre posthume) inverse la conditionnelle. C'est la grammaire de toute **mise à jour rationnelle** des croyances face à un nouveau fait — et le moteur de l'apprentissage automatique.`,
    `L'**espérance** d'une variable aléatoire est sa valeur moyenne pondérée par les probabilités. Au casino, l'espérance d'un joueur est toujours **négative** : c'est ce qu'on appelle l'*avantage de la maison*, qui garantit le profit à long terme.`,
    `La théorie devient axiomatique en **1933** avec **Andreï Kolmogorov** : une probabilité est une **mesure positive de masse totale 1** sur un ensemble (l'univers des possibles). Fondation moderne qui sous-tend la statistique, la finance, l'apprentissage automatique, la mécanique quantique.`
  ],

  carte_mentale: {
    central: 'proba',
    noeuds: [
      { id: 'proba', label: 'Probabilités', description: 'Branche des mathématiques qui mesure rigoureusement le hasard. Toute probabilité est un nombre entre 0 et 1.' },

      { id: 'bases', label: 'Notions de base', description: 'Univers, événement, probabilité, indépendance. Le vocabulaire de la théorie.' },
      { id: 'histoire', label: 'Histoire', description: 'De Pascal et Fermat (1654) à Kolmogorov (1933). Trois siècles pour passer d\'un jeu de cartes à une axiomatique complète.' },
      { id: 'lois', label: 'Lois classiques', description: 'Lois empiriques qui apparaissent partout : grands nombres, normale, Poisson, exponentielle. Chacune décrit une famille de phénomènes.' },
      { id: 'conditionnelle', label: 'Conditionnelle', description: 'Le hasard *sachant* qu\'un autre événement est vrai. Mène au théorème de Bayes, à l\'inférence statistique, à l\'apprentissage machine.' },
      { id: 'esperance', label: 'Espérance & variance', description: 'Mesurer la valeur moyenne et la dispersion d\'une variable aléatoire. Fondation de toute analyse quantitative du risque.' },
      { id: 'applications', label: 'Applications', description: 'De l\'assurance à l\'épidémiologie en passant par la finance, la météo, la mécanique quantique et l\'IA — voir [[ia-generative]].' },

      // Histoire
      { id: 'pascal-fermat', label: 'Pascal & Fermat', description: 'Correspondance de 1654 autour du **problème des partis**. Fonde la théorie. Pascal calcule par récurrence, Fermat par dénombrement.', parent: 'histoire' },
      { id: 'bernoulli', label: 'Jacques Bernoulli', description: '*Ars Conjectandi* (1713) : démonstration rigoureuse de la **loi des grands nombres**. Pose le pont entre probabilité théorique et fréquence observée.', parent: 'histoire' },
      { id: 'laplace', label: 'Laplace', description: '*Théorie analytique des probabilités* (1812) : synthèse encyclopédique. Définit la probabilité comme "le rapport du nombre de cas favorables au nombre de cas possibles".', parent: 'histoire' },
      { id: 'kolmogorov', label: 'Kolmogorov (1933)', description: 'Axiomatisation moderne : une probabilité est une **mesure** sur un ensemble. Fonde la théorie sur la théorie de la mesure de Lebesgue.', parent: 'histoire' },

      // Lois classiques
      { id: 'lgn', label: 'Loi des grands nombres', description: 'La moyenne d\'une expérience répétée tend vers la probabilité théorique. Justifie l\'estimation par fréquence.', parent: 'lois' },
      { id: 'normale', label: 'Loi normale', description: 'La courbe en cloche. Apparaît dès qu\'on **additionne** beaucoup de petites contributions aléatoires. Théorème central limite.', parent: 'lois' },
      { id: 'poisson', label: 'Loi de Poisson', description: 'Compte les événements rares en grand nombre : accidents par jour, mutations par génome, désintégrations par seconde.', parent: 'lois' },

      // Conditionnelle
      { id: 'bayes', label: 'Théorème de Bayes', description: 'Inverse la probabilité conditionnelle. P(A|B) à partir de P(B|A). Grammaire de la mise à jour rationnelle des croyances.', parent: 'conditionnelle' },
      { id: 'indep', label: 'Indépendance', description: 'A et B sont indépendants si P(A|B) = P(A). Notion subtile : indépendance deux à deux ne signifie pas indépendance mutuelle.', parent: 'conditionnelle' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Le <em>hasard</em> et sa mesure`,
      contenu_md:
`Pendant la quasi-totalité de l'histoire humaine, le hasard a été traité par les religions, jamais par les mathématiques. Les Grecs, les Romains, les Arabes lancent des dés mais ne calculent pas leurs probabilités. Trois raisons à cela : pas de notation algébrique commode (longtemps !), une morale méfiante vis-à-vis du jeu d'argent, et une intuition fausse — celle que l'aléa relève des dieux et donc échappe par essence au calcul. Le hasard n'est mesurable qu'à condition qu'on accepte d'abord qu'il puisse l'être.

L'idée moderne, simple en apparence, est radicale : **assigner à chaque événement possible un nombre** compris entre 0 et 1, qui mesure à quel point cet événement est *attendu*. 0 signifie qu'il ne se produira pas. 1 qu'il est certain. 0,5 qu'il est exactement aussi probable que son contraire. Une fois ces nombres assignés (et soumis à quelques règles de cohérence), on peut **les manipuler** : additionner les probabilités d'événements incompatibles, multiplier celles d'événements indépendants, conditionner l'un par l'autre. La théorie n'est rien d'autre qu'une grammaire pour ces manipulations.

L'intuition la plus directe est la définition **fréquentiste** : la probabilité d'un événement est la limite vers laquelle tend sa fréquence d'apparition quand on répète l'expérience un très grand nombre de fois. Lance une pièce une fois : on ne sait rien. Cent fois : un peu mieux. Un million de fois : la fréquence s'approche très près de 50 %. C'est ce que démontrera rigoureusement Bernoulli en 1713 — mais l'idée est en germe dès Pascal et Fermat.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      titre: 'Naissance et formalisation de la probabilité',
      params: {
        evenements: [
          { date: '1654', titre: 'Pascal & Fermat', description: 'Correspondance autour du **problème des partis** (chevalier de Méré). Fonde le calcul des probabilités. **Année de naissance** conventionnelle de la discipline.' },
          { date: '1657', titre: 'Huygens', description: 'Le mathématicien hollandais **Christiaan Huygens** publie *De Ratiociniis in Ludo Aleae*, premier traité de probabilités. Introduit la notion d\'**espérance**.' },
          { date: '1713', titre: 'Bernoulli', description: '*Ars Conjectandi* publié à titre posthume par **Jacques Bernoulli**. Démontre la **loi des grands nombres**.' },
          { date: '1733', titre: 'Loi normale (de Moivre)', description: '**Abraham de Moivre** découvre la courbe en cloche comme limite de la loi binomiale. Premier pas vers le théorème central limite.' },
          { date: '1763', titre: 'Bayes', description: 'Publication posthume du *Essay Towards Solving a Problem in the Doctrine of Chances*. Le révérend **Thomas Bayes** y formule le théorème qui portera son nom.' },
          { date: '1809', titre: 'Gauss', description: 'Justifie la loi normale en théorie des **erreurs de mesure** astronomiques. La courbe en cloche devient outil central.' },
          { date: '1812', titre: 'Laplace', description: '*Théorie analytique des probabilités*. Synthèse encyclopédique. Définit la probabilité comme rapport des cas favorables aux cas possibles (définition "classique").' },
          { date: '1933', titre: 'Kolmogorov', description: '*Grundbegriffe der Wahrscheinlichkeitsrechnung*. **Axiomatisation moderne** sur la théorie de la mesure. Fondation rigoureuse définitive.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>problème des partis</em>`,
      contenu_md:
`En 1654, un noble français, le **chevalier de Méré**, soumet à son ami Blaise Pascal un problème pratique : deux joueurs jouent une série de manches à pile ou face jusqu'à ce que l'un d'eux gagne, disons, dix manches. La mise totale est dans le pot. Mais le jeu est interrompu (police, départ urgent, peu importe) à un moment où le joueur A a gagné 7 manches et le joueur B en a gagné 4. **Comment partager équitablement la mise ?**

Une réponse intuitive : 7/11 pour A, 4/11 pour B, proportionnellement aux manches gagnées. Mais elle est fausse : elle ignore que B est plus près de la défaite qu'A. Une autre réponse : 100 % pour A puisqu'il mène. Aussi fausse : B peut encore gagner si la chance tourne.

Pascal écrit à **Pierre de Fermat**, le génie toulousain. Les deux échangent en quelques mois — *Provinciales*, *Pensées* et le calcul des probabilités sont écrits en parallèle —, et trouvent la solution correcte. Il faut calculer, pour chaque issue possible des manches restantes, le gagnant final, puis répartir la mise proportionnellement à la **probabilité que chacun gagne** étant donné l'état du jeu au moment de l'interruption. Pascal utilise une **récurrence** (qui anticipe son fameux triangle), Fermat un **dénombrement combinatoire**. Ils trouvent le même résultat. La théorie des probabilités vient de naître, à partir d'une question de cartes à jouer.`
    },

    {
      type: 'widget',
      composant: 'Equation',
      titre: 'Définition fréquentiste',
      params: {
        tex: 'P(A) = \\lim_{n \\to \\infty} \\frac{N_A(n)}{n}',
        legende: 'Probabilité d\'un événement A : limite de la fréquence de A quand le nombre d\'essais n tend vers l\'infini. Justifié rigoureusement par la loi des grands nombres de Bernoulli (1713).'
      }
    },

    {
      type: 'encadre',
      label: 'La loi des grands nombres',
      contenu_md: `Démontrée par **Jacques Bernoulli** en **1713**, la loi des grands nombres garantit que la **fréquence empirique** d'un événement répété tend vers sa **probabilité théorique** quand le nombre d'expériences tend vers l'infini. C'est elle qui autorise l'**estimation par fréquence**, donc toute la statistique appliquée. Sans elle, les probabilités resteraient un exercice abstrait sans contact avec le réel : c'est elle qui ancre la théorie dans l'observation.`
    },

    {
      type: 'widget',
      composant: 'CurseurParametrique',
      titre: 'Lance une pièce N fois et observe l\'écart à 50 %',
      params: {
        label: 'Nombre de lancers',
        min: 10,
        max: 100000,
        step: 10,
        valeurInitiale: 100,
        unite: 'lancers',
        seuils: [
          {
            jusqua: 50,
            titre: 'Très peu de lancers — n\'importe quoi',
            description: 'Sur 10 à 50 lancers, l\'écart typique à 50 % de pile reste **énorme** : on peut tomber sur 70 % de pile ou 30 % de pile sans rien d\'anormal. Aucune fréquence stable.',
            couleur: '#ff6b35'
          },
          {
            jusqua: 1000,
            titre: 'Convergence visible',
            description: 'Vers 100-1000 lancers, l\'écart typique à 50 % descend autour de 5 % ou moins. La fréquence commence à **clairement révéler** la probabilité théorique sous-jacente.',
            couleur: '#ffb86c'
          },
          {
            jusqua: 10000,
            titre: 'Précision honnête',
            description: 'À partir de 10 000 lancers, l\'écart typique est de l\'ordre de **0,5 %**. Si la pièce est truquée à 51 % vs 49 %, c\'est encore détectable. Loi des grands nombres en action.',
            couleur: '#5b8def'
          },
          {
            jusqua: Infinity,
            titre: 'Quasi-certitude',
            description: 'Au-delà de 100 000 lancers, l\'écart typique tombe sous **0,15 %**. On distingue **statistiquement** entre une pièce parfaitement équilibrée et une pièce biaisée même d\'un demi-pour-cent.',
            couleur: '#52d273'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `La <em>courbe en cloche</em>`,
      contenu_md:
`Une chose étrange apparaît dès qu'on observe avec assez de soin n'importe quel phénomène où **plusieurs petites causes aléatoires s'additionnent** : la distribution des résultats prend la forme d'une **cloche symétrique**. La taille des humains adultes en France (qui résulte de centaines de gènes et facteurs nutritionnels), les erreurs de mesure d'un astronome (qui cumulent micro-fluctuations atmosphériques, tremblements de main, vibrations de l'instrument), les vitesses des molécules d'un gaz, les notes d'un grand examen anonymisé : tous se distribuent en cloche.

Cette forme s'appelle la **loi normale** ou loi de Gauss. Découverte par Abraham de Moivre vers 1733 (comme limite de la loi binomiale), elle est popularisée et nommée par **Carl Friedrich Gauss** en **1809** dans ses travaux sur les orbites astronomiques. Sa formule fait intervenir deux paramètres : la **moyenne** μ (centre de la cloche) et l'**écart-type** σ (largeur de la cloche). Plus σ est grand, plus la cloche est aplatie ; plus σ est petit, plus elle est pointue.

La généralité de cette loi vient du [théorème central limite]{accent} : si on additionne **un grand nombre** de variables aléatoires indépendantes (de même loi, ou presque), la somme — après normalisation — tend toujours vers une loi normale, **quelle que soit la loi des variables initiales**. C'est ce théorème stupéfiant qui explique pourquoi la cloche est partout. La nature n'aime pas particulièrement les cloches ; elle aime additionner des aléas, et la cloche en est la conséquence mathématique forcée.`
    },

    {
      type: 'widget',
      composant: 'Equation',
      titre: 'La loi normale',
      params: {
        tex: 'f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\!\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right)',
        legende: 'Densité de probabilité de la loi normale, de moyenne μ et d\'écart-type σ. Forme en cloche symétrique autour de μ. Centre du théorème central limite.'
      }
    },

    {
      type: 'texte',
      titre: `Le <em>conditionnement</em> et Bayes`,
      contenu_md:
`Jusqu'ici les probabilités étaient *absolues* : la probabilité qu'un événement se produise, point. Mais en pratique, on dispose presque toujours d'**informations partielles** qui restreignent les possibles. La pièce vient de tomber sur pile cinq fois de suite : quelle est la probabilité du sixième lancer ? Le test PCR est positif : quelle est la probabilité que tu sois vraiment malade ? Le ciel se couvre : quelle est la probabilité qu'il pleuve dans l'heure ?

Pour traiter ces situations, on introduit la **probabilité conditionnelle**, notée P(A | B) — "probabilité de A sachant B". Définition : c'est la probabilité que A et B soient tous deux vrais, divisée par la probabilité que B soit vrai. Intuitivement, on restreint l'univers aux cas où B est vrai, puis on compte la proportion où A est aussi vrai.

Et c'est ici qu'intervient le théorème le plus important — et le plus contre-intuitif — de toute la théorie : le [théorème de Bayes]{accent}, formulé vers 1763 par le révérend anglais **Thomas Bayes**. Il permet d'**inverser** la conditionnelle. À partir de P(test+ | malade) — facile à mesurer en clinique — il calcule P(malade | test+) — ce qui vraiment intéresse le patient. Et ces deux nombres peuvent être très différents si la maladie est rare. C'est la grammaire de toute **mise à jour rationnelle des croyances** face à un nouveau fait : on part d'une probabilité *a priori* (avant l'observation), on la met à jour avec la nouvelle information, on obtient une probabilité *a posteriori*. C'est aussi le moteur mathématique central de l'**apprentissage automatique** moderne — voir [[ia-generative]].`
    },

    {
      type: 'widget',
      composant: 'Equation',
      titre: 'Théorème de Bayes',
      params: {
        tex: 'P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}',
        legende: 'La probabilité de A sachant B, exprimée à partir de la probabilité de B sachant A et des probabilités absolues. Inverse la conditionnelle. Cœur de toute inférence statistique moderne.'
      }
    },

    {
      type: 'encadre',
      label: 'Le piège du test médical',
      contenu_md: `Soit une maladie touchant **1 personne sur 1 000**. Un test est fiable à **99 %** (1 % de faux positifs *et* de faux négatifs). Tu es testé positif. Quelle est la probabilité que tu sois vraiment malade ? L'intuition souffle "99 %". Bayes calcule autre chose. Sur 1 000 personnes : 1 vraiment malade (testée positive), et environ 10 saines mais testées **faussement** positives. Donc parmi les **11 personnes testées positives, 1 seule est malade** : ta probabilité réelle est de **9 %**, pas 99 %. Le test reste utile pour orienter un examen plus poussé, mais l'effet **fréquence de base** est massif et largement ignoré.`
    },

    {
      type: 'widget',
      composant: 'ListeMethodes',
      titre: 'Où vivent les probabilités aujourd\'hui',
      params: {
        methodes: [
          { titre: 'Assurance & actuariat', description: 'Calcul des **primes d\'assurance** à partir des probabilités d\'événements (décès, accident, vol). Métier organisé dès le XVIIᵉ siècle (Lloyd\'s of London, 1688) à mesure que la théorie progresse.' },
          { titre: 'Finance quantitative', description: 'Modélisation des **mouvements boursiers** comme processus aléatoires (Brown, Bachelier). **Black-Scholes** (1973) calcule le prix d\'une option à partir de la volatilité — prix Nobel 1997.' },
          { titre: 'Apprentissage automatique', description: 'Les modèles d\'**IA** sont entraînés à estimer des **distributions de probabilité** sur les sorties possibles, et à les mettre à jour bayésiennement avec chaque exemple. Voir [[ia-generative]].' },
          { titre: 'Épidémiologie', description: 'Estimation du **R0** (nombre moyen de personnes infectées par un malade), des **intervalles de confiance** sur l\'efficacité des vaccins. Bayes structure les analyses depuis 1950.' },
          { titre: 'Météorologie', description: 'Les **prévisions probabilistes** ("70 % de chance de pluie demain") sont des estimations bayésiennes mises à jour à partir de millions de simulations d\'ensemble.' },
          { titre: 'Mécanique quantique', description: 'Le formalisme quantique ne prédit pas où sera une particule mais la **probabilité** qu\'on la trouve en un point donné. Probabilité fondamentale, pas conséquence de notre ignorance.' }
        ]
      }
    }

  ],

  quiz: [
    {
      q: `À quoi correspond la valeur 0,5 d'une probabilité ?`,
      options: [
        `L'événement est impossible`,
        `L'événement est certain`,
        `L'événement a autant de chances de se produire que de ne pas se produire`,
        `L'événement se produit toujours à la deuxième tentative`
      ],
      correcte: 2,
      explication: `Une probabilité est par convention un nombre entre **0 et 1**. Une probabilité de 0 signifie que l'événement est impossible, de 1 qu'il est certain, et de 0,5 que l'événement est **exactement aussi probable que son contraire** — autrement dit, sur un grand nombre d'essais, il se produira en moyenne dans la moitié des cas. Cas typique : la face "pile" d'une pièce équilibrée a une probabilité de 0,5 d'apparaître au prochain lancer.`
    },
    {
      q: `Qui a fondé la théorie des probabilités, et à quelle occasion ?`,
      options: [
        `Newton, à propos de la trajectoire des planètes`,
        `Pascal et Fermat, en 1654, à partir du problème des partis posé par le chevalier de Méré`,
        `Einstein, à propos de la mécanique quantique`,
        `Aristote, en classifiant les types de cause`
      ],
      correcte: 1,
      explication: `La théorie naît en **1654** d'une correspondance entre **Blaise Pascal** et **Pierre de Fermat**, sollicités par le chevalier de Méré pour résoudre le **problème des partis** : comment répartir la mise d'un jeu de cartes interrompu avant la fin ? Leur solution — partager au prorata des **probabilités de victoire** de chaque joueur étant donné l'état du jeu — est considérée comme l'acte fondateur. Pascal calcule par récurrence, Fermat par dénombrement combinatoire ; ils trouvent le même résultat.`
    },
    {
      q: `Que dit la loi des grands nombres ?`,
      options: [
        `La somme de grands nombres tend vers l'infini`,
        `La moyenne d'un grand nombre d'expériences aléatoires identiques tend vers la probabilité théorique`,
        `Les grands nombres sont toujours premiers`,
        `Plus on multiplie les essais, plus le résultat est aléatoire`
      ],
      correcte: 1,
      explication: `Démontrée par **Jacques Bernoulli** dans *Ars Conjectandi* (publication posthume, **1713**), la loi des grands nombres dit que la **fréquence empirique** d'un événement répété tend vers sa **probabilité théorique** quand le nombre d'essais tend vers l'infini. Concrètement : si tu lances une pièce un million de fois, la fréquence de "pile" sera très proche de 0,5 (à condition que la pièce soit équilibrée). C'est ce théorème qui justifie l'**estimation par fréquence** et donc toute la statistique appliquée.`
    },
    {
      q: `Pourquoi la loi normale (courbe en cloche) apparaît-elle aussi souvent dans la nature ?`,
      options: [
        `Parce que la nature préfère les cloches`,
        `À cause du théorème central limite : la somme d'un grand nombre de petites variables aléatoires indépendantes tend toujours vers une loi normale, quelle que soit la loi de chaque variable individuelle`,
        `Parce qu'elle est imposée par la mécanique quantique`,
        `C'est une illusion d'optique : la loi normale est rarissime en réalité`
      ],
      correcte: 1,
      explication: `Le **théorème central limite** est l'un des résultats les plus profonds des mathématiques : il établit que si on additionne un grand nombre de variables aléatoires indépendantes (de même loi, ou presque), la somme normalisée **converge vers une loi normale**, et ce **quelle que soit la loi initiale** de chaque variable. C'est pour cela que tout phénomène résultant de l'addition de petites causes aléatoires — taille humaine, erreurs de mesure, bruit, notes d'examens — suit une cloche. La nature ne préfère pas la cloche : elle additionne des aléas, et la cloche est la conséquence mathématique forcée.`
    },
    {
      q: `Que permet le théorème de Bayes ?`,
      options: [
        `Calculer la moyenne d'une distribution normale`,
        `Inverser une probabilité conditionnelle : calculer P(A | B) à partir de P(B | A), P(A) et P(B)`,
        `Démontrer que tout événement aléatoire est en réalité déterministe`,
        `Prouver que les probabilités n'existent qu'au-dessus de 0,5`
      ],
      correcte: 1,
      explication: `Le théorème de Bayes, formulé par le révérend **Thomas Bayes** (publication posthume, 1763), permet d'**inverser** la probabilité conditionnelle. En clinique, on mesure facilement P(test positif | malade), mais ce qui intéresse le patient c'est P(malade | test positif) : ces deux quantités peuvent être très différentes si la maladie est rare. Bayes donne la formule pour passer de l'une à l'autre. Plus généralement, c'est la grammaire de toute **mise à jour rationnelle des croyances** face à un nouveau fait — et le moteur central de l'apprentissage automatique moderne.`
    },
    {
      q: `Une maladie touche 1 personne sur 1 000. Un test est fiable à 99 % (1 % de faux positifs). Tu es testé positif. Quelle est approximativement la probabilité que tu sois vraiment malade ?`,
      options: [
        `99 %`,
        `Environ 50 %`,
        `Environ 9 %`,
        `Moins de 1 %`
      ],
      correcte: 2,
      explication: `C'est l'exemple classique du **paradoxe du test médical**. Sur 1 000 personnes : **1 vraiment malade** (qui sera testée positive avec une fiabilité de 99 %), et **environ 10 saines** mais testées **faussement positives** (1 % des 999 personnes saines). Donc parmi les **11 personnes testées positives, 1 seule est malade** : la probabilité conditionnelle est d'environ **1/11 ≈ 9 %**. L'intuition souffle "99 %" parce qu'on oublie la **fréquence de base** (la rareté de la maladie). Bayes ramène à la réalité. Cela ne signifie pas que le test est inutile : il fait passer la probabilité de 0,1 % à 9 %, ce qui justifie un examen plus poussé.`
    },
    {
      q: `Qu'est-ce que l'espérance d'une variable aléatoire ?`,
      options: [
        `La valeur la plus probable de la variable`,
        `La valeur moyenne de la variable pondérée par les probabilités de chaque résultat`,
        `La valeur maximale possible de la variable`,
        `La valeur que tu espères obtenir personnellement`
      ],
      correcte: 1,
      explication: `L'**espérance** (notée E[X]) d'une variable aléatoire X est la **moyenne pondérée** de ses valeurs possibles par leurs probabilités respectives. Pour un dé à six faces : E[X] = (1+2+3+4+5+6)/6 = 3,5. Au casino, l'espérance de gain d'un joueur est toujours **négative** (typiquement -2 à -5 % de la mise selon le jeu) : c'est l'**avantage de la maison**, qui garantit le profit du casino à long terme par la loi des grands nombres. C'est aussi le concept clé en finance quantitative pour évaluer le rendement attendu d'un investissement risqué.`
    },
    {
      q: `Qui axiomatise la théorie moderne des probabilités, et en quelle année ?`,
      options: [
        `Newton en 1687`,
        `Laplace en 1812`,
        `Kolmogorov en 1933`,
        `Turing en 1936`
      ],
      correcte: 2,
      explication: `En **1933**, le mathématicien soviétique **Andreï Kolmogorov** publie *Grundbegriffe der Wahrscheinlichkeitsrechnung* (Fondements de la théorie des probabilités), qui axiomatise la discipline sur la base de la théorie de la mesure de Lebesgue. Une probabilité y est définie comme une **mesure positive de masse totale 1** sur un ensemble (l'univers des possibles). Cette axiomatisation, comparable à celle d'Euclide pour la géométrie, donne à la théorie sa rigueur définitive. C'est sur elle que reposent aujourd'hui la statistique, la finance, l'épidémiologie, l'apprentissage automatique, la mécanique quantique.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Probabilité',
      definition: `Nombre compris entre **0 et 1** qui mesure à quel point un événement est attendu. **0** = impossible, **1** = certain, **0,5** = autant de chances que pas. Toute la théorie consiste à manipuler ces nombres avec cohérence pour modéliser le hasard.`
    },
    {
      terme: 'Univers',
      definition: `Ensemble (noté Ω) de **tous les résultats possibles** d'une expérience aléatoire. Pour un dé : {1, 2, 3, 4, 5, 6}. Pour un pile-ou-face : {pile, face}. La probabilité est définie comme une mesure sur ce Ω, dans l'axiomatique de Kolmogorov.`
    },
    {
      terme: 'Loi des grands nombres',
      definition: `Théorème démontré par **Jacques Bernoulli** en **1713** : la **fréquence empirique** d'un événement répété tend vers sa **probabilité théorique** quand le nombre d'essais tend vers l'infini. Justifie l'estimation par fréquence et fonde la statistique appliquée.`
    },
    {
      terme: 'Loi normale',
      definition: `Distribution de probabilité en forme de **cloche symétrique**, paramétrée par sa moyenne μ et son écart-type σ. Apparaît dès qu'on additionne beaucoup de petites variables aléatoires indépendantes (théorème central limite). Modélise les tailles, les erreurs de mesure, le bruit, les notes — quasiment partout en science.`
    },
    {
      terme: 'Théorème central limite',
      definition: `Résultat fondamental : la **somme normalisée** d'un grand nombre de variables aléatoires indépendantes converge vers une **loi normale**, et ce **quelle que soit la loi initiale** de ces variables. Explique pourquoi la cloche est si universelle en sciences naturelles, sociales et expérimentales.`
    },
    {
      terme: 'Probabilité conditionnelle',
      definition: `Probabilité d'un événement A **sachant** qu'un autre événement B est vrai, notée **P(A | B)**. Mesure à quel point B change l'estimation que l'on fait de A. Le test médical positif change la probabilité que tu sois malade sans la rendre certaine.`
    },
    {
      terme: 'Théorème de Bayes',
      definition: `Formule qui **inverse** la probabilité conditionnelle : P(A | B) = P(B | A) × P(A) / P(B). Formulée par le révérend **Thomas Bayes** vers 1763. Grammaire de la **mise à jour rationnelle des croyances** face à un nouveau fait. Cœur mathématique de l'inférence statistique moderne et de l'apprentissage automatique.`
    },
    {
      terme: 'Espérance',
      definition: `**Moyenne pondérée** des valeurs possibles d'une variable aléatoire par leurs probabilités, notée **E[X]**. Pour un dé équilibré : E[X] = 3,5. Au casino, l'espérance d'un joueur est toujours négative : c'est l'**avantage de la maison** qui garantit son profit à long terme.`
    },
    {
      terme: 'Variance & écart-type',
      definition: `La **variance** mesure la dispersion d'une variable aléatoire autour de son espérance ; l'**écart-type** (sa racine carrée, noté σ) est exprimé dans la même unité que la variable. Deux variables peuvent avoir la même espérance et des écarts-type très différents : la première stable, la seconde imprévisible.`
    },
    {
      terme: 'Kolmogorov',
      definition: `Mathématicien soviétique (1903-1987). En **1933**, axiomatise la théorie moderne des probabilités sur la **théorie de la mesure** : une probabilité est une mesure positive de masse totale 1 sur un univers Ω. Fondation rigoureuse de toute la discipline contemporaine, comparable à l'axiomatisation d'Euclide pour la géométrie.`
    }
  ]

});
