/* ===================================================================
   SUJET — L'infini en mathématiques
   ===================================================================
   Quand le dénombrable et l'indénombrable révèlent plusieurs infinis.
   Domaine : Mathématiques
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'infini-mathematiques',
    titre: 'L\'<em>infini</em> en mathématiques',
    domaines: ['Mathématiques'],
    tags: ['cantor', 'ensembles', 'gödel', 'paradoxes', 'logique'],
    difficulte: 3,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['ia-generative', 'mecanique-quantique'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Comprendre la découverte la plus contre-intuitive des mathématiques modernes : il existe plusieurs infinis, certains plus grands que d\'autres, et l\'un d\'eux pose une question si profonde qu\'elle a été démontrée indécidable.',

  points_cles: [
    'Pendant des siècles, les mathématiciens ont évité l\'**infini en acte**, lui préférant l\'idée plus prudente d\'**infini potentiel** (ce qui peut être prolongé indéfiniment).',
    '**Georg Cantor** (1845-1918) bouleverse les mathématiques en montrant qu\'il existe **plusieurs infinis**, et que certains sont **plus grands** que d\'autres.',
    'Deux ensembles ont la même « taille » s\'il existe une **bijection** (correspondance un à un) entre eux. Étrange conséquence : il y a **autant** d\'entiers pairs que d\'entiers tout court.',
    'Les **rationnels** (les fractions) sont **dénombrables** : on peut les ranger en une liste infinie indexée par les entiers.',
    'Les **réels**, en revanche, sont **non dénombrables** : aucune liste ne peut les épuiser, comme le prouve l\'**argument diagonal** de Cantor (1891).',
    'L\'**hypothèse du continu** (existe-t-il un infini strictement entre les entiers et les réels ?) a été montrée **indécidable** par Gödel et Cohen — elle ne peut être ni prouvée ni réfutée dans les axiomes standards.',
    'Cantor lui-même a été combattu de son vivant et a fini ses jours en hôpital psychiatrique. **David Hilbert** prendra sa défense : *« Nul ne nous chassera du paradis que Cantor a créé pour nous »*.'
  ],

  carte_mentale: {
    central: 'infini',
    noeuds: [
      { id: 'infini', label: 'Infini mathématique', description: 'Le concept le plus vertigineux de la théorie des ensembles.' },
      { id: 'potentiel', label: 'Infini potentiel', description: 'Position prudente : on peut toujours prolonger un processus, mais on ne « complète » jamais l\'infini. Position d\'Aristote, des Grecs, et de la plupart des mathématiciens jusqu\'au XIXᵉ siècle.' },
      { id: 'actuel', label: 'Infini actuel', description: 'Position de Cantor : on peut **considérer** une totalité infinie comme un objet mathématique légitime, et raisonner dessus.' },
      { id: 'denombrable', label: 'Dénombrable', description: 'Tout ensemble qu\'on peut « mettre en file » et numéroter par les entiers : ℕ, ℤ, ℚ.' },
      { id: 'continu', label: 'Continu (indénombrable)', description: 'Les nombres **réels** : aucune liste ne peut les contenir tous. **Strictement plus grand** que ℕ.' },
      { id: 'cardinaux', label: 'Cardinaux infinis', description: 'Cantor introduit les **alephs** : ℵ₀ (dénombrable), ℵ₁, ℵ₂... Une infinité d\'infinis.' },
      { id: 'paradoxes', label: 'Paradoxes', description: 'Hôtel de Hilbert, paradoxe de Russell, théorème d\'incomplétude de Gödel : la pensée de l\'infini fragilise les fondations.' },

      // Sous-niveau cardinaux
      { id: 'aleph0', label: 'ℵ₀', description: 'Le **plus petit** infini. Cardinal des entiers, des rationnels, des nombres algébriques.', parent: 'cardinaux' },
      { id: 'aleph1', label: 'ℵ₁', description: 'Le cardinal du continu... ou pas. La question est précisément l\'objet de l\'**hypothèse du continu**.', parent: 'cardinaux' },
      { id: 'continu-c', label: '𝔠 (continu)', description: 'Cardinal de ℝ. Égal à 2^ℵ₀. **Strictement plus grand** que ℵ₀, prouvé par l\'argument diagonal.', parent: 'cardinaux' },

      // Paradoxes
      { id: 'hilbert', label: 'Hôtel de Hilbert', description: 'Un hôtel à une infinité de chambres, toutes occupées, peut accueillir un nouveau client en demandant à chacun de passer dans la chambre suivante.', parent: 'paradoxes' },
      { id: 'russell', label: 'Paradoxe de Russell', description: '« L\'ensemble de tous les ensembles qui ne se contiennent pas eux-mêmes se contient-il lui-même ? » Si oui, non. Si non, oui. **Crise des fondements**, 1901.', parent: 'paradoxes' },
      { id: 'godel', label: 'Incomplétude (Gödel)', description: 'En 1931, Gödel démontre que toute théorie mathématique assez riche contient des **énoncés vrais mais indémontrables**. L\'infini est rétif aux systèmes complets.', parent: 'paradoxes' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Ce qu\'on évitait soigneusement',
      contenu_md:
`Pendant deux mille trois cents ans, les mathématiciens ont eu peur de l\'infini.

**Aristote** distinguait deux infinis : l\'*infini potentiel* — ce qu\'on peut indéfiniment prolonger (ajouter 1, encore 1, encore 1...) — et l\'*infini actuel* — l\'idée d\'une totalité infinie déjà donnée. Il acceptait le premier, refusait le second. Cette position deviendra orthodoxe : on parle de droites « illimitées » mais jamais de l\'« ensemble » de tous les points d\'une droite. On démontre des propriétés vraies pour tout entier, sans jamais considérer la totalité ℕ comme un objet en soi.

Pourquoi cette prudence ? Parce que l\'infini, dès qu\'on ose l\'invoquer en bloc, **engendre des paradoxes**. Achille rattrape-t-il la tortue ? Une infinité de tâches successives peut-elle être achevée en un temps fini ? Galilée, au XVIIᵉ siècle, remarque qu\'il y a apparemment autant de carrés (1, 4, 9, 16...) que d\'entiers (1, 2, 3, 4...) — alors que les carrés sont une partie stricte des entiers. C\'est absurde. Donc, conclut Galilée, *les notions de « plus grand », « plus petit », « égal » ne s\'appliquent pas aux quantités infinies*.

Ce verrou tient jusqu\'à la fin du XIXᵉ siècle. Puis arrive **Georg Cantor**.`
    },

    {
      type: 'texte',
      titre: '<em>Cantor</em> tient l\'infini',
      contenu_md:
`Georg Cantor, mathématicien allemand né à Saint-Pétersbourg en 1845, prend le problème à bras-le-corps et l\'inverse. Pour lui, le constat de Galilée n\'est pas une absurdité : c\'est **une définition**.

*Deux ensembles ont la même taille (le même « cardinal ») s\'il existe une **bijection** entre eux* — c\'est-à-dire une correspondance un-à-un, où chaque élément de l\'un est apparié à exactement un élément de l\'autre. Cette définition fonctionne parfaitement pour les ensembles finis. Cantor décide de l\'appliquer aux ensembles infinis.

Conséquence immédiate : il y a effectivement **autant** d\'entiers pairs que d\'entiers, parce que la correspondance *n ↔ 2n* est une bijection. Il y a autant d\'entiers que d\'entiers relatifs, autant de carrés que d\'entiers. La partie peut être aussi grande que le tout. Bizarre, mais cohérent.

La question intéressante devient alors : **tous les ensembles infinis ont-ils la même taille ?**`
    },

    {
      type: 'widget',
      titre: 'Le paradoxe de l\'hôtel de Hilbert',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Situation',
            titre: 'Hôtel infini, complet',
            description: 'L\'hôtel a une infinité dénombrable de chambres (n°1, 2, 3...), toutes occupées. Un nouveau client arrive et demande une chambre.'
          },
          {
            tag: 'Astuce',
            titre: 'Tout le monde se décale',
            description: 'Le réceptionniste demande au client de la chambre 1 d\'aller en 2, à celui de 2 d\'aller en 3, etc. La chambre 1 est libérée. **Personne n\'est dehors.**'
          },
          {
            tag: 'Plus fort',
            titre: 'Un bus infini arrive',
            description: 'Tous les clients de la chambre n vont dans la chambre 2n (chambres paires). Les chambres impaires (toutes en nombre infini) sont libres pour les nouveaux arrivants.'
          },
          {
            tag: 'Le clou',
            titre: 'Une infinité de bus infinis',
            description: 'Possible aussi. La capacité de l\'infini dénombrable à absorber d\'autres infinis dénombrables est sans limite. C\'est exactement ce que montre la bijection ℕ × ℕ ↔ ℕ.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>rationnels</em> aussi sont dénombrables',
      contenu_md:
`Cantor démontre une chose plus surprenante encore : il y a **autant** de fractions que d\'entiers.

Pourtant, entre 0 et 1 il y a déjà une infinité de fractions (1/2, 1/3, 1/4...). Entre n\'importe quels deux entiers, une infinité. Comment peut-il y en avoir « la même quantité » que d\'entiers ?

L\'argument est élégant : on dispose toutes les fractions dans un tableau infini (lignes : numérateurs, colonnes : dénominateurs), et on les énumère en suivant les **diagonales** : 1/1, 2/1, 1/2, 1/3, 2/2, 3/1, 4/1... En passant ainsi diagonale après diagonale, on visite chaque fraction au moins une fois. On peut donc les **numéroter** par les entiers — donc il y en a la même quantité.

Cette technique de bijection diagonale s\'appelle l\'**argument diagonal**. Cantor s\'en est servi pour prouver le dénombrable. Il va aussitôt s\'en servir pour prouver autre chose — la chose qui change tout.`
    },

    {
      type: 'texte',
      titre: 'L\'<em>argument diagonal</em>',
      contenu_md:
`En **1891**, Cantor publie une démonstration qu\'on peut comprendre en une page. Considérons les nombres réels entre 0 et 1, écrits en notation décimale infinie : 0,123456..., 0,317281..., et ainsi de suite.

Supposons qu\'on puisse les énumérer tous dans une liste infinie :

| n° | Nombre |
| :-: | :- |
| 1 | 0,**1**45926... |
| 2 | 0,3**7**4218... |
| 3 | 0,29**8**756... |
| 4 | 0,142**5**93... |
| ... | ... |

Cantor construit alors un nombre *N* en prenant la **diagonale** (le 1, le 7, le 8, le 5...) et en modifiant chaque chiffre. Par exemple : ajoute 1 à chacun (avec convention pour 9). Tu obtiens *N* = 0,2896...

Ce nombre **diffère du premier** au premier chiffre, **du deuxième** au deuxième chiffre, **du n-ième** au n-ième chiffre. Donc il n\'est pas dans la liste — et pourtant c\'est un nombre réel entre 0 et 1.

Conclusion : **aucune liste** des réels n\'est complète. Il y a *strictement plus* de réels que d\'entiers. Le continu est non dénombrable.`
    },

    {
      type: 'encadre',
      label: 'Une explosion',
      contenu_md: 'L\'argument diagonal est l\'une des démonstrations les plus **fertiles** de l\'histoire des mathématiques. C\'est lui qui prouve qu\'il y a plusieurs infinis. C\'est lui qu\'utilise **Turing** pour démontrer l\'indécidabilité du problème de l\'arrêt — et donc fonder la théorie de la calculabilité, ancêtre directe de l\'informatique moderne et de l\'IA (voir [[ia-generative]]). C\'est lui qu\'utilise **Gödel** pour son théorème d\'incomplétude. La même idée — construire un objet qui diffère « diagonalement » de tous ceux d\'une liste — irrigue toute la logique mathématique du XXᵉ siècle.'
    },

    {
      type: 'widget',
      titre: 'La hiérarchie des infinis : quelques cardinaux',
      composant: 'SelecteurValeurs',
      params: {
        unite: '',
        indexInitial: 0,
        options: [
          { label: 'ℕ (entiers naturels)', valeur: 'ℵ₀', description: 'Le plus petit infini. Tout ensemble qui peut être numéroté par les entiers est dit **dénombrable**.' },
          { label: 'ℤ (entiers relatifs)', valeur: 'ℵ₀', description: '**Même cardinal** que ℕ. Bijection : 0→0, 1→-1, 2→1, 3→-2, 4→2... Surprenant mais correct.' },
          { label: 'ℚ (rationnels)', valeur: 'ℵ₀', description: 'Toujours **dénombrable**, malgré la densité apparente. Énumération diagonale.' },
          { label: 'ℝ (réels)', valeur: '𝔠 = 2^ℵ₀', description: 'Le **continu**. Strictement plus grand que ℵ₀. Argument diagonal de Cantor (1891).' },
          { label: 'P(ℝ) (parties de ℝ)', valeur: '2^𝔠', description: 'Encore plus grand. **Théorème de Cantor** : pour tout ensemble X, |P(X)| > |X|. Hiérarchie infinie des cardinaux.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>hypothèse du continu</em>',
      contenu_md:
`Une question naturelle se pose : **existe-t-il un infini strictement compris entre ℵ₀ et le continu 𝔠 ?**

C\'est-à-dire : peut-on trouver un ensemble qui serait plus grand que les entiers, mais plus petit que les réels ? Cantor pensait que non — il a **conjecturé** que le continu est exactement ℵ₁, le « cardinal juste au-dessus » de ℵ₀. C\'est l\'**hypothèse du continu**.

Hilbert l\'inscrit comme **premier problème** de sa célèbre liste de 23 problèmes pour le XXᵉ siècle, en 1900. Cantor mourra en 1918 sans avoir réussi à la prouver — il sombrera dans la dépression et passera ses dernières années en hôpital psychiatrique.

La réponse arrive en deux temps. En **1940**, **Kurt Gödel** démontre qu\'on ne peut **pas réfuter** l\'hypothèse du continu à partir des axiomes standards (ZFC). En **1963**, **Paul Cohen** démontre qu\'on ne peut **pas non plus la prouver**. Verdict : l\'hypothèse du continu est **indécidable**. Elle peut être vraie ou fausse selon les axiomes qu\'on se donne, et les axiomes standards ne tranchent pas.

C\'est l\'un des résultats les plus troublants des mathématiques modernes : il existe une question parfaitement précise, formulable en quelques mots, dont la réponse **n\'est pas dans les mathématiques**.`
    },

    {
      type: 'encadre',
      label: 'L\'incomplétude',
      contenu_md: 'En 1931, **Kurt Gödel** avait déjà démontré son théorème d\'**incomplétude** : toute théorie mathématique assez expressive pour contenir l\'arithmétique contient des énoncés **vrais mais indémontrables** dans la théorie elle-même. C\'était la fin du rêve de Hilbert d\'une mathématique entièrement formalisable et complète. L\'hypothèse du continu, indécidable, en est l\'illustration la plus tangible. La frontière entre ce qui est vrai et ce qui est démontrable n\'est pas une ligne droite. Cette intuition d\'une limite intrinsèque à la connaissance formelle a un cousin physique : la [[mecanique-quantique]] et son principe d\'incertitude inscrivent une indétermination au cœur de la nature elle-même.'
    },

    {
      type: 'texte',
      titre: 'Cantor et la <em>vengeance</em> des mathématiciens',
      contenu_md:
`Le travail de Cantor a longtemps été méprisé. **Leopold Kronecker**, son ancien professeur devenu collègue, l\'a personnellement persécuté pendant des années — bloquant ses publications, ses promotions, le qualifiant de *« charlatan »*, de *« corrupteur de la jeunesse »*, de *« cavalier scientifique »*. Cantor a fait plusieurs séjours en hôpital psychiatrique à partir de 1884. Il y est mort en 1918, dans la pauvreté.

Mais ses idées avaient déjà gagné. **David Hilbert**, à la conférence de Heidelberg en 1926, prononce la phrase devenue célèbre : *« Aus dem Paradies, das Cantor uns geschaffen, soll uns niemand vertreiben können »* — « Du paradis que Cantor a créé pour nous, nul ne pourra nous chasser ».

Aujourd\'hui, la **théorie des ensembles** est le langage standard des mathématiques modernes. Tout étudiant de licence en math apprend Cantor avant ses 20 ans. L\'infini en acte, qui terrifiait Aristote, Galilée et Kronecker, est devenu un outil quotidien.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Dans le cas des ensembles infinis, une partie stricte peut avoir le même cardinal que le tout.',
      reponse: true,
      explication: 'C\'est précisément la définition que Cantor a opposée à l\'intuition de Galilée : il y a autant d\'entiers pairs que d\'entiers tout court, car la correspondance n ↔ 2n est une bijection. Contre-intuitif mais cohérent — c\'est une caractéristique des ensembles infinis.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces étapes-clés de la théorie des ensembles dans l\'ordre chronologique :',
      items: [
        'Cantor publie l\'argument diagonal et fonde la théorie des ensembles (1891)',
        'Hilbert présente l\'hypothèse du continu comme premier problème de sa liste (1900)',
        'Gödel démontre que l\'hypothèse du continu ne peut être réfutée dans ZFC (1940)',
        'Cohen démontre qu\'elle ne peut pas non plus être prouvée — donc indécidable (1963)'
      ],
      explication: 'Cantor ouvre le chantier en 1891 avec son argument diagonal. Hilbert en fait le premier problème de son célèbre programme en 1900. Il faudra Gödel (1940) puis Cohen (1963) pour montrer que l\'hypothèse du continu est indécidable dans les axiomes standards ZFC.'
    },
    {
      type: 'associer',
      q: 'Associe chaque mathématicien à son résultat majeur :',
      paires: [
        { gauche: 'Cantor', droite: 'Argument diagonal, hiérarchie des infinis' },
        { gauche: 'Hilbert', droite: 'Liste des 23 problèmes pour le XXᵉ siècle' },
        { gauche: 'Gödel', droite: 'Théorème d\'incomplétude (1931)' },
        { gauche: 'Cohen', droite: 'Indécidabilité de l\'hypothèse du continu (1963)' }
      ],
      explication: 'Cantor pose les fondations, Hilbert formule les questions ouvertes, Gödel et Cohen démontrent l\'indécidabilité de certaines de ces questions — chacun apportant une pièce essentielle au paysage de la logique mathématique du XXᵉ siècle.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'Le plus petit cardinal infini, celui des entiers naturels, est la lettre hébraïque {aleph} indice zéro. Les axiomes standards de la théorie des ensembles sont notés {ZFC}.',
      explication: 'ℵ₀ (aleph zéro) désigne le cardinal des ensembles dénombrables (ℕ, ℤ, ℚ). ZFC (Zermelo-Fraenkel + axiome du Choix) est le système d\'axiomes standard de la théorie des ensembles dans lequel l\'hypothèse du continu est indécidable.'
    },
    {
      q: 'Quelle est la différence entre infini potentiel et infini actuel ?',
      options: [
        'Il n\'y en a aucune',
        'L\'infini potentiel est ce qu\'on peut indéfiniment prolonger ; l\'infini actuel est une totalité infinie considérée comme un objet en soi',
        'L\'infini potentiel est mathématique, l\'actuel est philosophique',
        'L\'infini potentiel est plus grand'
      ],
      correcte: 1,
      explication: 'Distinction d\'origine aristotélicienne. Pendant des siècles, les mathématiciens n\'acceptaient que le potentiel ; Cantor a légitimé l\'actuel à la fin du XIXᵉ siècle.'
    },
    {
      q: 'Selon la définition de Cantor, deux ensembles ont la même "taille" (cardinal) si...',
      options: [
        'L\'un est inclus dans l\'autre',
        'Il existe une bijection (correspondance un-à-un) entre eux',
        'Leurs éléments se ressemblent',
        'Leur somme est égale'
      ],
      correcte: 1,
      explication: 'La bijection est la définition opérationnelle de l\'égalité de taille. C\'est cette définition qui permet de comparer des ensembles infinis.'
    },
    {
      q: 'Combien y a-t-il d\'entiers pairs comparé au nombre total d\'entiers naturels ?',
      options: [
        'Deux fois moins',
        'Le même nombre — ils sont en bijection (n ↔ 2n)',
        'Une infinité de fois moins',
        'On ne peut pas comparer'
      ],
      correcte: 1,
      explication: 'C\'est contre-intuitif mais rigoureusement exact dans le cadre de Cantor : ℕ et 2ℕ ont le même cardinal ℵ₀. La partie peut être en bijection avec le tout, dans le cas infini.'
    },
    {
      q: 'Pourquoi les nombres rationnels (fractions) sont-ils dénombrables ?',
      options: [
        'Parce qu\'il y en a peu',
        'On peut les ranger dans un tableau infini et les énumérer en suivant les diagonales — donc bijection avec ℕ',
        'Parce qu\'ils sont compris entre 0 et 1',
        'Parce que ce sont des nombres entiers'
      ],
      correcte: 1,
      explication: 'L\'argument diagonal de Cantor permet de "lister" toutes les fractions en passant diagonale après diagonale dans le tableau (numérateur, dénominateur). Donc bijection avec ℕ. ℚ a le cardinal ℵ₀.'
    },
    {
      q: 'Que prouve l\'argument diagonal de Cantor concernant les nombres réels ?',
      options: [
        'Qu\'ils sont dénombrables comme les rationnels',
        'Qu\'ils sont strictement plus nombreux que les entiers — aucune liste ne peut les contenir tous',
        'Qu\'ils sont en nombre fini',
        'Qu\'ils sont équipotents aux complexes'
      ],
      correcte: 1,
      explication: 'Cantor construit un réel qui diffère diagonalement de tout réel d\'une liste hypothétique. Donc aucune liste exhaustive n\'existe : ℝ est non dénombrable, strictement plus grand que ℕ.'
    },
    {
      q: 'Que dit l\'hypothèse du continu de Cantor ?',
      options: [
        'Le continu n\'existe pas',
        'Il n\'existe aucun infini strictement compris entre ℵ₀ (entiers) et 𝔠 (réels)',
        'Tous les infinis sont égaux',
        'Le continu est dénombrable'
      ],
      correcte: 1,
      explication: 'Cantor conjecturait qu\'aucun ensemble n\'a un cardinal strictement entre celui de ℕ et celui de ℝ. C\'était le premier problème de la liste de Hilbert en 1900.'
    },
    {
      q: 'Quel est le statut actuel de l\'hypothèse du continu ?',
      options: [
        'Elle a été prouvée vraie',
        'Elle a été prouvée fausse',
        'Elle est indécidable dans ZFC : Gödel (1940) montre qu\'on ne peut la réfuter, Cohen (1963) qu\'on ne peut la démontrer',
        'Elle reste un problème ouvert'
      ],
      correcte: 2,
      explication: 'L\'un des résultats les plus stupéfiants de la logique moderne : il existe une question parfaitement précise dont la réponse n\'est pas dans les axiomes standards des mathématiques. Vraie ou fausse selon les axiomes qu\'on choisit d\'ajouter.'
    },
    {
      q: 'Comment David Hilbert a-t-il défendu le travail de Cantor face aux attaques de ses contemporains ?',
      options: [
        'En réécrivant ses démonstrations',
        'Par sa célèbre formule : "Du paradis que Cantor a créé pour nous, nul ne pourra nous chasser"',
        'En obtenant un prix pour Cantor',
        'En cessant lui-même de faire des mathématiques'
      ],
      correcte: 1,
      explication: 'Phrase prononcée à Heidelberg en 1926. Cantor avait été combattu, traité de charlatan, et avait fini en hôpital psychiatrique. Hilbert a contribué à sa réhabilitation posthume. Aujourd\'hui, la théorie des ensembles est la langue standard des mathématiques modernes.'
    }
  ]

});
