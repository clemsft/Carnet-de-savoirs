/* ===================================================================
   SUJET — Les nombres premiers
   ===================================================================
   Les briques élémentaires de l'arithmétique, rares et indomptées.
   Domaine : Mathématiques
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'nombres-premiers',
    titre: 'Les <em>nombres premiers</em>',
    domaines: ['Mathématiques'],
    tags: ['arithmétique', 'euclide', 'riemann', 'cryptographie', 'rsa'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['infini-mathematiques', 'ia-generative', 'monnaies-numeriques'],
    date_creation: '2026-05-12',
    date_maj: '2026-05-12'
  },

  resume: 'Comprendre ce que sont les nombres premiers, pourquoi ils sont les atomes de l\'arithmétique, comment Euclide a démontré leur infinité en quelques lignes, et pourquoi leur étrange distribution fascine encore mathématiciens et cryptographes — au point que sa compréhension complète vaut un million de dollars.',

  points_cles: [
    'Un **nombre premier** est un entier supérieur à 1 qui n\'admet que **deux diviseurs** : 1 et lui-même. Par convention, **1 n\'est pas premier**.',
    'Le **théorème fondamental de l\'arithmétique** établit que tout entier supérieur à 1 s\'écrit, de manière **unique**, comme produit de nombres premiers. Les premiers sont les *atomes* des entiers.',
    'Euclide a démontré dès le IIIᵉ siècle av. J.-C. qu\'il existe une **infinité** de nombres premiers — par une preuve par l\'absurde d\'une élégance restée inégalée.',
    'Le **crible d\'Ératosthène** (IIIᵉ siècle av. J.-C.) reste à ce jour l\'algorithme le plus simple pour identifier les premiers jusqu\'à une borne donnée.',
    'Les premiers se **raréfient** : le **théorème des nombres premiers** (Hadamard et de la Vallée Poussin, 1896) établit que π(n), le nombre de premiers inférieurs à n, est asymptotique à *n / ln(n)*.',
    'Leur distribution exacte reste mystérieuse. L\'**hypothèse de Riemann** (1859), qui en formulerait la régularité cachée, est l\'un des **sept problèmes du millénaire** — sa résolution est dotée d\'**un million de dollars**.',
    'La **cryptographie moderne** (RSA, signatures, blockchain) repose sur la **difficulté de factoriser** un grand nombre en ses facteurs premiers — facile à fabriquer, presque impossible à défaire (voir [[monnaies-numeriques]]).',
    'Le projet **GIMPS** traque les premiers de Mersenne géants. Le plus grand premier connu, **2^136 279 841 − 1**, possède plus de **41 millions de chiffres** — un objet mathématique plus long qu\'une bibliothèque entière.'
  ],

  carte_mentale: {
    central: 'premiers',
    noeuds: [
      { id: 'premiers', label: 'Nombres premiers', description: 'Les briques irréductibles de l\'arithmétique.' },

      // Niveau 1 — branches principales
      { id: 'definition', label: 'Définition & théorème fondamental', description: 'Entier > 1 divisible uniquement par 1 et lui-même. Tout entier se décompose **uniquement** en facteurs premiers.' },
      { id: 'infinite', label: 'Infinité', description: 'Euclide démontre par l\'absurde qu\'il existe une **infinité** de premiers. Une preuve éternelle.' },
      { id: 'distribution', label: 'Distribution', description: 'Les premiers se raréfient mais ne s\'éteignent jamais. Leur ordre fin est l\'un des plus grands mystères mathématiques.' },
      { id: 'conjectures', label: 'Conjectures ouvertes', description: 'Jumeaux, Goldbach, Riemann : des énoncés simples, des démonstrations encore introuvables.' },
      { id: 'crypto', label: 'Cryptographie', description: 'La sécurité de RSA, des banques, du web et de la blockchain repose sur les premiers.' },
      { id: 'records', label: 'Records & familles', description: 'Premiers de Mersenne, de Fermat, jumeaux, sexy... Une zoologie en expansion.' },

      // Niveau 2 — distribution
      { id: 'pnt', label: 'Théorème des nombres premiers', description: 'π(n) ~ n / ln(n). Démontré en 1896 par Hadamard et de la Vallée Poussin.', parent: 'distribution' },
      { id: 'crible', label: 'Crible d\'Ératosthène', description: 'Algorithme antique pour lister les premiers en barrant les multiples.', parent: 'distribution' },

      // Niveau 2 — conjectures
      { id: 'jumeaux', label: 'Conjecture des jumeaux', description: 'Existe-t-il une **infinité** de paires (p, p+2) tous deux premiers ? Conjecturé depuis l\'Antiquité, toujours ouvert.', parent: 'conjectures' },
      { id: 'goldbach', label: 'Conjecture de Goldbach', description: 'Tout entier pair > 2 est-il la somme de **deux** premiers ? Vérifié jusqu\'à 4 × 10^18, non démontré.', parent: 'conjectures' },
      { id: 'riemann', label: 'Hypothèse de Riemann', description: 'Les zéros non triviaux de la fonction ζ ont-ils tous pour partie réelle 1/2 ? **Un million de dollars** à la clé.', parent: 'conjectures' },

      // Niveau 2 — crypto
      { id: 'rsa', label: 'RSA', description: 'Chiffrement asymétrique inventé en 1977. Sa sécurité repose sur la difficulté de factoriser N = p × q.', parent: 'crypto' },
      { id: 'factorisation', label: 'Factorisation difficile', description: 'Multiplier deux premiers de 300 chiffres : instantané. Retrouver les facteurs : des milliers d\'années sur les meilleurs supercalculateurs.', parent: 'crypto' },

      // Niveau 2 — records
      { id: 'mersenne', label: 'Premiers de Mersenne', description: 'Forme **2^p − 1**. Les plus grands premiers connus sont tous de Mersenne — efficacité du test de Lucas-Lehmer.', parent: 'records' },
      { id: 'gimps', label: 'GIMPS', description: 'Great Internet Mersenne Prime Search : projet bénévole distribué qui traque les Mersenne géants depuis 1996.', parent: 'records' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Les <em>atomes</em> des entiers',
      contenu_md:
`Certains entiers se laissent décomposer : 12 vaut 2 × 6, ou 3 × 4, ou encore 2 × 2 × 3. D\'autres résistent : 7 ne se factorise pas, 13 non plus, ni 29.

Un [nombre premier]{accent} est un entier strictement supérieur à 1 qui n\'admet **que deux diviseurs positifs** : 1 et lui-même. Les premiers de la liste : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29... Le seul premier pair est **2** — tous les autres sont impairs, puisque divisibles par eux-mêmes uniquement.

Une convention discrète mais importante : **1 n\'est pas premier**. On pourrait croire à un caprice, mais ce choix garantit l\'unicité de la décomposition en facteurs premiers, et tient toute l\'arithmétique en équilibre.`
    },

    {
      type: 'encadre',
      label: 'Théorème fondamental de l\'arithmétique',
      contenu_md: 'Tout entier supérieur à 1 s\'écrit, de manière [unique]{accent} (à l\'ordre près des facteurs), comme un produit de nombres premiers. Les premiers sont donc les **briques élémentaires** des entiers — leurs *atomes*. Tout l\'édifice de l\'arithmétique repose sur cette propriété, énoncée par **Euclide** dans les *Éléments* il y a vingt-trois siècles.'
    },

    {
      type: 'texte',
      titre: 'L\'<em>infinité</em>, démontrée en cinq lignes',
      contenu_md:
`Une question vient naturellement : la liste des premiers s\'arrête-t-elle ? Y a-t-il un dernier premier, le plus grand de tous ?

**Euclide** répond non, dès le **IIIᵉ siècle av. J.-C.**, par l\'une des démonstrations les plus élégantes des mathématiques. L\'argument tient en cinq lignes et fonctionne par l\'absurde.

Supposons qu\'il n\'existe qu\'un nombre fini de premiers : *p₁, p₂, p₃, ..., pₙ*. Forme alors le nombre *N = p₁ × p₂ × ... × pₙ + 1*. Ce nombre *N* n\'est divisible par **aucun** des premiers de la liste — chacune des divisions laisse un reste de 1. Donc, soit *N* est lui-même premier, soit *N* est divisible par un premier **absent** de la liste. Dans les deux cas, la liste supposée *complète* ne l\'était pas. **Contradiction.**

Conclusion : il existe une infinité de premiers. La preuve est si concise, si limpide, qu\'elle est devenue l\'archétype de la *belle démonstration*. Pour aller plus loin sur ce concept d\'infinité actuelle, voir [[infini-mathematiques]].`
    },

    {
      type: 'widget',
      titre: 'La preuve d\'Euclide en formule',
      composant: 'Equation',
      params: {
        tex: 'N = p_1 \\times p_2 \\times \\cdots \\times p_n + 1',
        legende: 'Le nombre construit par Euclide : si {p₁, ..., pₙ} étaient TOUS les premiers, N serait soit un nouveau premier, soit divisible par un premier hors liste — contradiction.',
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>crible d\'Ératosthène</em>',
      contenu_md:
`Trouver les premiers en pratique : un problème vieux comme l\'arithmétique. **Ératosthène de Cyrène** (≈ 276–194 av. J.-C.), bibliothécaire d\'Alexandrie, propose une méthode d\'une simplicité désarmante.

Écris les entiers de 2 à *n*. Le premier non barré, c\'est **2** : c\'est un premier. Barre **tous ses multiples** (4, 6, 8...). Le suivant non barré est **3** : également premier. Barre tous ses multiples (6, 9, 12...). Continue avec 5, 7, 11... Les nombres qui restent à la fin sont **exactement** les premiers jusqu\'à *n*.

L\'algorithme reste à ce jour la manière la plus simple — et l\'une des plus rapides — d\'énumérer les premiers d\'un intervalle. Vingt-trois siècles et toujours en service.`
    },

    {
      type: 'widget',
      titre: 'Quatre méthodes pour tester la primalité',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          { titre: 'Division d\'essai', description: 'Tester si *n* est divisible par tous les entiers jusqu\'à √n. **Exact** mais lent. Praticable pour de petits nombres seulement.' },
          { titre: 'Crible d\'Ératosthène', description: 'Pour lister **tous** les premiers jusqu\'à une borne. Imbattable jusqu\'à quelques milliards.' },
          { titre: 'Test de Miller-Rabin', description: 'Test **probabiliste** : déclare *n* premier avec une probabilité d\'erreur arbitrairement petite. La méthode standard pour les nombres de centaines de chiffres utilisés en cryptographie.' },
          { titre: 'AKS (2002)', description: 'Premier test de primalité **déterministe** en temps polynomial. Une découverte majeure (Agrawal, Kayal, Saxena), mais en pratique plus lent que Miller-Rabin.' },
          { titre: 'Lucas-Lehmer', description: 'Spécialisé pour les premiers de **Mersenne** (2^p − 1). Permet de tester des nombres à des millions de chiffres — c\'est l\'algorithme utilisé par le projet GIMPS.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>raréfaction</em> des premiers',
      contenu_md:
`Plus on avance dans les entiers, plus les premiers se font rares. Entre 1 et 100, on en compte 25. Entre 1 et 1 000, 168. Entre 1 et un million, 78 498. La densité chute, lentement mais inexorablement.

**Gauss**, à l\'âge de quinze ans, conjecture en 1792 une régularité : la **densité** des premiers autour de *n* est approximativement de *1 / ln(n)*. Autrement dit, la fonction *π(n)* (nombre de premiers ≤ n) est asymptotique à *n / ln(n)*. C\'est le **théorème des nombres premiers**, qu\'il faudra encore un siècle pour démontrer rigoureusement — **Jacques Hadamard** et **Charles-Jean de la Vallée Poussin** y parviennent indépendamment en **1896**, en mobilisant l\'analyse complexe.`
    },

    {
      type: 'widget',
      titre: 'Le théorème des nombres premiers',
      composant: 'Equation',
      params: {
        tex: '\\pi(n) \\sim \\frac{n}{\\ln(n)}',
        legende: 'π(n) compte les premiers ≤ n. Conjecturé par Gauss vers 1792, démontré indépendamment par Hadamard et de la Vallée Poussin en 1896.',
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      titre: 'Une distribution <em>irrégulière</em>',
      contenu_md:
`Le théorème des nombres premiers décrit la **tendance moyenne**. Mais à petite échelle, la suite des premiers reste **chaotique**. Parfois deux premiers se touchent presque : (11, 13), (17, 19), (41, 43) — on les appelle des **premiers jumeaux**, séparés par un seul nombre composé.

Parfois, au contraire, on traverse un **désert** : entre 113 et 127, aucun premier. Pire, on peut construire des trous arbitrairement grands : la suite *n! + 2, n! + 3, ..., n! + n* est faite de *n − 1* composés consécutifs. L\'arithmétique sait fabriquer des déserts à volonté.

Cette dualité — régularité macroscopique, désordre microscopique — fascine les mathématiciens depuis Euler. On **conjecture** qu\'il existe une **infinité** de paires de premiers jumeaux, mais la preuve résiste depuis plus de deux mille ans. En **2013**, **Yitang Zhang**, mathématicien longtemps inconnu, réalise une percée historique : il existe une infinité de paires de premiers séparés par **moins de 70 millions**. Le seuil a depuis été ramené à **246**. Mais 2 reste hors d\'atteinte.`
    },

    {
      type: 'encadre',
      label: 'La conjecture de Goldbach',
      contenu_md: 'Une autre énigme aussi vieille que célèbre. En **1742**, dans une lettre à Euler, **Christian Goldbach** conjecture : *tout entier pair strictement supérieur à 2 peut s\'écrire comme la somme de deux nombres premiers*. Ainsi 4 = 2 + 2, 10 = 3 + 7 = 5 + 5, 100 = 3 + 97 = 11 + 89 = ... Vérifiée par ordinateur jusqu\'à [4 × 10^18]{accent}, elle reste, près de trois siècles plus tard, **non démontrée**. L\'énoncé tient en une phrase ; la preuve échappe à tous.'
    },

    {
      type: 'widget',
      titre: 'Quelques familles remarquables de premiers',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: '2^p − 1',
            titre: 'Premiers de Mersenne',
            description: 'Forme **2^p − 1** où *p* est premier. Tous les détenteurs actuels du record du plus grand premier connu en font partie. Test de **Lucas-Lehmer**, particulièrement efficace pour cette forme.'
          },
          {
            tag: '2^(2^n) + 1',
            titre: 'Premiers de Fermat',
            description: 'Forme **2^(2^n) + 1**. Fermat conjecturait que tous l\'étaient ; **Euler** a réfuté en 1732 (F₅ = 4 294 967 297 = 641 × 6 700 417). On n\'en connaît aujourd\'hui que **cinq** : 3, 5, 17, 257, 65 537.'
          },
          {
            tag: '(p, p+2)',
            titre: 'Premiers jumeaux',
            description: 'Paires (11, 13), (17, 19), (41, 43)... Leur infinité reste une **conjecture ouverte**. Avancée majeure de **Zhang en 2013** : infinité de paires séparées de moins de 70 millions.'
          },
          {
            tag: '(p, p+6)',
            titre: 'Premiers sexy',
            description: 'Du latin *sex*, six. Paires de premiers séparés de 6 : (5, 11), (7, 13), (11, 17)... L\'infinité de cette famille est, elle aussi, conjecturée.'
          },
          {
            tag: 'p, 2p+1',
            titre: 'Premiers de Sophie Germain',
            description: 'Premier *p* tel que **2p + 1** soit aussi premier. Cruciaux pour la cryptographie : ils servent à construire des groupes très sûrs pour Diffie-Hellman.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>hypothèse de Riemann</em>',
      contenu_md:
`En **1859**, dans un mémoire de huit pages, **Bernhard Riemann** formule l\'énoncé qui hantera les mathématiques pendant plus d\'un siècle. Étudiant la fonction *zêta* — l\'objet qui encode la distribution des premiers en une seule fonction complexe —, il conjecture que tous les **zéros non triviaux** de ζ(s) ont une partie réelle exactement égale à **1/2**.

C\'est sec, c\'est technique, c\'est apparemment loin des nombres premiers. Et pourtant : si l\'hypothèse de Riemann est vraie, alors la distribution des premiers obéit à la **régularité la plus fine concevable**. Toutes les fluctuations entre π(n) et son approximation *n / ln(n)* seraient contraintes dans des bornes optimales. L\'hypothèse de Riemann affirme, en somme, que **les premiers sont aussi réguliers que possible**, tout en étant pseudo-aléatoires.

En **2000**, l\'institut Clay inscrit l\'hypothèse de Riemann parmi ses **sept problèmes du millénaire**. Récompense pour celui ou celle qui la résoudra : [un million de dollars]{accent}. À ce jour, **plus de dix milliards** de zéros ont été calculés numériquement : tous se trouvent sur la droite critique. Aucune preuve, mais aucun contre-exemple non plus.`
    },

    {
      type: 'texte',
      titre: 'Les premiers, gardiens du <em>secret</em>',
      contenu_md:
`Pendant des siècles, les nombres premiers furent considérés comme une curiosité pure — la « plus inutile des mathématiques », disait fièrement **G. H. Hardy** en 1940, *au cas où certains tenteraient d\'y trouver un usage militaire*. L\'ironie est totale.

En **1977**, **Rivest, Shamir et Adleman** publient l\'algorithme **RSA**. L\'idée est asymétrique et géniale : on choisit deux grands premiers *p* et *q* (typiquement de 300 chiffres chacun), on multiplie pour obtenir *N = p × q*. Multiplier, c\'est instantané. Mais à partir de *N* seul, **retrouver *p* et *q*** — la *factorisation* — est un problème pour lequel **aucun algorithme classique rapide** n\'est connu. Sur les meilleurs supercalculateurs, factoriser un *N* de 2048 bits prendrait des milliards de milliards d\'années.

Cette asymétrie est le socle de la sécurité de toutes les transactions web (HTTPS), des signatures électroniques, et indirectement des **blockchains** des [[monnaies-numeriques]] (qui utilisent des cousines : la cryptographie elliptique, fondée sur des problèmes de difficulté analogue). Tes données médicales, ton compte bancaire, les clés d\'API qui alimentent ton modèle d\'[[ia-generative]] — tout repose, *in fine*, sur la difficulté à défaire ce que les premiers ont fait.

Une menace plane : **l\'ordinateur quantique**. L\'algorithme de **Shor** (1994) factoriserait en temps polynomial sur une machine quantique suffisamment grande. Personne ne sait quand cette machine existera. La course à la **cryptographie post-quantique** a commencé.`
    },

    {
      type: 'widget',
      titre: 'Le cœur de RSA',
      composant: 'Equation',
      params: {
        tex: 'N = p \\times q \\quad\\Longrightarrow\\quad \\text{facile} \\quad ; \\quad N \\longrightarrow (p, q) \\quad\\Longrightarrow\\quad \\text{intractable}',
        legende: 'Multiplier deux grands premiers : trivial. Retrouver les facteurs à partir du produit : impraticable avec les algorithmes classiques connus. Toute la sécurité de RSA repose sur cette asymétrie.',
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>géants</em> de Mersenne',
      contenu_md:
`Quels sont les plus grands nombres premiers connus ? Ils ont tous une forme très particulière : *2^p − 1*, où *p* est lui-même premier. On les appelle **premiers de Mersenne**, du nom du moine **Marin Mersenne** (1588–1648) qui en dressa la première liste systématique.

Pourquoi cette forme prédomine-t-elle ? Parce qu\'il existe un test de primalité, **Lucas-Lehmer**, qui leur est spécifiquement adapté et permet de tester en quelques semaines des nombres dont la décimale dépasserait à elle seule **toute la mémoire d\'un ordinateur**.

Depuis **1996**, le projet bénévole **GIMPS** (Great Internet Mersenne Prime Search) coordonne des dizaines de milliers d\'ordinateurs dans le monde pour traquer les Mersenne géants. Le record actuel, découvert en **octobre 2024** par Luke Durant, est **2^136 279 841 − 1** — un nombre comptant **plus de 41 millions de chiffres décimaux**. Imprimé en livre, il occuperait plusieurs dizaines de milliers de pages. Et c\'est *un seul nombre*.`
    },

    {
      type: 'widget',
      titre: 'Jalons de la théorie des nombres',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '≈ 300 av. J.-C.', titre: 'Euclide démontre l\'infinité des premiers', description: 'Dans le livre IX des *Éléments*, **Euclide** présente la preuve par l\'absurde qui reste, vingt-trois siècles plus tard, l\'archétype de l\'élégance mathématique.' },
          { date: '≈ 250 av. J.-C.', titre: 'Crible d\'Ératosthène', description: 'Le bibliothécaire d\'Alexandrie propose la méthode d\'énumération des premiers encore enseignée et utilisée aujourd\'hui.' },
          { date: '1742', titre: 'Conjecture de Goldbach', description: 'Dans une lettre à Euler, **Christian Goldbach** énonce une question qui résiste toujours : tout pair > 2 est-il somme de deux premiers ?' },
          { date: '1792', titre: 'Gauss conjecture le théorème des nombres premiers', description: 'À quinze ans, **Gauss** observe que π(n) ~ n / ln(n). La démonstration attendra plus d\'un siècle.' },
          { date: '1859', titre: 'Hypothèse de Riemann', description: '**Bernhard Riemann** publie un mémoire de huit pages contenant la conjecture la plus célèbre encore ouverte des mathématiques.' },
          { date: '1896', titre: 'Théorème des nombres premiers démontré', description: '**Hadamard** et **de la Vallée Poussin** prouvent indépendamment l\'asymptotique de π(n), en mobilisant l\'analyse complexe.' },
          { date: '1977', titre: 'RSA', description: '**Rivest, Shamir, Adleman** : la première application industrielle des grands premiers — la cryptographie à clé publique change le monde numérique.' },
          { date: '2000', titre: 'Problèmes du millénaire', description: 'L\'**Institut Clay** dote sept problèmes ouverts d\'un million de dollars chacun. L\'hypothèse de Riemann y figure.' },
          { date: '2013', titre: 'Percée de Zhang sur les jumeaux', description: '**Yitang Zhang** prouve qu\'il existe une infinité de paires de premiers séparés de moins de 70 millions — la première brèche dans la conjecture des jumeaux.' },
          { date: '2024', titre: 'Plus grand premier connu', description: 'Le projet **GIMPS** identifie **2^136 279 841 − 1**, premier de Mersenne à plus de 41 millions de chiffres décimaux.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Une <em>énigme</em> à ciel ouvert',
      contenu_md:
`Les nombres premiers occupent une place singulière dans le paysage scientifique. Leur définition s\'enseigne en CM1. Plusieurs des questions les plus simples qu\'on puisse formuler à leur sujet — *y en a-t-il une infinité de jumeaux ? Goldbach a-t-il raison ? Où sont les zéros de Riemann ?* — résistent depuis des siècles à l\'effort cumulé de tous les mathématiciens.

Et pendant que ces questions restent ouvertes, les premiers sont devenus les **gardiens silencieux** de l\'économie numérique : chaque connexion HTTPS, chaque transaction par carte, chaque signature électronique, chaque échange chiffré sur un service en ligne en mobilise plusieurs, immenses, fraîchement engendrés.

Curiosité pure devenue infrastructure planétaire. Un siècle après que **Hardy** s\'en fût félicité de leur inutilité, ils sont l\'un des objets mathématiques les plus utilisés au monde — et toujours, fondamentalement, **mal compris**.`
    }

  ],

  quiz: [
    {
      q: 'Quelle est la définition exacte d\'un nombre premier ?',
      options: [
        'Un entier impair',
        'Un entier strictement supérieur à 1 qui n\'admet que deux diviseurs positifs : 1 et lui-même',
        'Un entier qu\'on ne peut pas écrire en base 10',
        'Un entier supérieur à 2'
      ],
      correcte: 1,
      explication: 'La définition standard exclut 1 (qui n\'a qu\'un seul diviseur) et inclut 2 (seul premier pair). Cette convention assure l\'unicité de la décomposition en facteurs premiers — pilier du théorème fondamental de l\'arithmétique.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le nombre 1 est un nombre premier.',
      reponse: false,
      explication: 'Par convention moderne, 1 n\'est pas premier. Si on l\'incluait, la décomposition en facteurs premiers cesserait d\'être unique (par exemple 6 = 2 × 3 = 1 × 2 × 3 = 1 × 1 × 2 × 3...). Pour préserver le théorème fondamental de l\'arithmétique, on exige que les premiers soient strictement supérieurs à 1.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Il existe une infinité de nombres premiers, et la preuve la plus célèbre tient en cinq lignes — celle d\'Euclide.',
      reponse: true,
      explication: 'Démontré par Euclide vers le IIIᵉ siècle av. J.-C. dans les Éléments. L\'argument par l\'absurde : si {p₁, ..., pₙ} étaient tous les premiers, alors N = p₁ × ... × pₙ + 1 serait soit un nouveau premier, soit divisible par un premier absent de la liste — contradiction. L\'archétype de la belle démonstration.'
    },
    {
      q: 'Que dit le théorème fondamental de l\'arithmétique ?',
      options: [
        'Tout entier est un nombre premier',
        'Tout entier supérieur à 1 s\'écrit, de manière unique (à l\'ordre près), comme produit de nombres premiers',
        'Le nombre de premiers est fini',
        'Deux entiers premiers entre eux ont un PGCD égal à 0'
      ],
      correcte: 1,
      explication: 'C\'est ce théorème qui justifie l\'image des premiers comme "atomes" de l\'arithmétique. Chaque entier a une unique factorisation en facteurs premiers — propriété centrale pour toute la théorie des nombres.'
    },
    {
      q: 'Que dit le théorème des nombres premiers (Hadamard / de la Vallée Poussin, 1896) ?',
      options: [
        'Tout entier est premier ou non',
        'π(n), le nombre de premiers inférieurs à n, est asymptotique à n / ln(n)',
        'Il existe une infinité de premiers jumeaux',
        'Tout pair > 2 est somme de deux premiers'
      ],
      correcte: 1,
      explication: 'Conjecturé par Gauss à 15 ans en 1792, démontré indépendamment en 1896 par Hadamard et de la Vallée Poussin grâce à l\'analyse complexe. Il décrit la raréfaction des premiers : leur densité autour de n est environ 1 / ln(n).'
    },
    {
      q: 'Sur quoi repose la sécurité de l\'algorithme RSA ?',
      options: [
        'Sur la difficulté de calculer un logarithme',
        'Sur la difficulté de factoriser un grand entier N = p × q en ses deux facteurs premiers',
        'Sur le secret de l\'algorithme lui-même',
        'Sur l\'absence d\'ordinateur dans le monde'
      ],
      correcte: 1,
      explication: 'L\'asymétrie est totale : multiplier deux premiers de 300 chiffres est instantané, mais retrouver les facteurs à partir du produit prendrait des milliards d\'années sur les meilleurs supercalculateurs. C\'est cette dissymétrie qui rend RSA viable depuis 1977.'
    },
    {
      q: 'Quelle est la dotation associée à l\'hypothèse de Riemann par l\'Institut Clay ?',
      options: [
        '10 000 dollars',
        '100 000 dollars',
        '1 million de dollars',
        '1 milliard de dollars'
      ],
      correcte: 2,
      explication: 'L\'hypothèse de Riemann (1859) figure parmi les sept problèmes du millénaire dotés en 2000 d\'un million de dollars chacun par l\'Institut Clay. Plus de dix milliards de zéros de la fonction zêta ont été vérifiés numériquement : tous sont sur la droite critique. Aucune preuve, aucun contre-exemple.'
    },
    {
      q: 'Quel est aujourd\'hui le plus grand nombre premier connu ?',
      options: [
        'Un premier de Fermat',
        'Un premier jumeau',
        'Un premier de Mersenne de la forme 2^p − 1, possédant plus de 41 millions de chiffres décimaux',
        'Le nombre 10^100'
      ],
      correcte: 2,
      explication: 'Le record actuel, découvert en octobre 2024 par le projet GIMPS, est 2^136 279 841 − 1, qui compte plus de 41 millions de chiffres décimaux. Tous les détenteurs récents du record sont des premiers de Mersenne grâce au test de Lucas-Lehmer.'
    },
    {
      q: 'Que dit la conjecture de Goldbach ?',
      options: [
        'Il existe une infinité de premiers jumeaux',
        'Tout entier pair strictement supérieur à 2 est la somme de deux nombres premiers',
        'Tout entier est premier',
        'Les premiers sont équidistribués'
      ],
      correcte: 1,
      explication: 'Énoncée en 1742 par Christian Goldbach dans une lettre à Euler. Vérifiée par ordinateur jusqu\'à 4 × 10^18, elle n\'est toujours pas démontrée. Énoncé d\'une phrase, preuve introuvable depuis bientôt trois siècles.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'Le théorème {fondamental} de l\'arithmétique stipule que tout entier supérieur à 1 s\'écrit comme produit de {nombres premiers} de manière {unique}, à l\'ordre près des facteurs.',
      explication: 'Ce théorème, dû à Euclide, est le socle de toute l\'arithmétique : il fait des nombres premiers les briques élémentaires des entiers. L\'unicité est essentielle — elle justifie aussi pourquoi 1, par convention, n\'est pas premier.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces jalons de la théorie des nombres premiers dans l\'ordre chronologique :',
      items: [
        'Euclide démontre l\'infinité des premiers dans les Éléments',
        'Goldbach formule sa conjecture dans une lettre à Euler',
        'Riemann publie son hypothèse sur les zéros de la fonction zêta',
        'Hadamard et de la Vallée Poussin démontrent le théorème des nombres premiers',
        'Rivest, Shamir et Adleman publient l\'algorithme RSA',
        'Zhang démontre une borne finie pour les écarts entre premiers'
      ],
      explication: 'Euclide vers 300 av. J.-C., Goldbach en 1742, Riemann en 1859, Hadamard / de la Vallée Poussin en 1896, RSA en 1977, Zhang en 2013. Une chronologie qui couvre vingt-trois siècles — des Grecs aux blockchains.'
    },
    {
      type: 'associer',
      q: 'Associe chaque mathématicien à sa contribution :',
      paires: [
        { gauche: 'Euclide', droite: 'Preuve de l\'infinité des nombres premiers' },
        { gauche: 'Ératosthène', droite: 'Crible d\'énumération des premiers' },
        { gauche: 'Riemann', droite: 'Hypothèse sur les zéros de la fonction zêta' },
        { gauche: 'Rivest, Shamir, Adleman', droite: 'Cryptographie RSA' },
        { gauche: 'Zhang', droite: 'Percée sur la conjecture des premiers jumeaux (2013)' }
      ],
      explication: 'Cinq figures, vingt-trois siècles. Euclide pose la pierre angulaire, Ératosthène le calcul, Riemann l\'énigme profonde, RSA l\'application planétaire, Zhang la première brèche moderne sur les jumeaux.'
    },
    {
      q: 'Pourquoi la convention "1 n\'est pas premier" est-elle adoptée ?',
      options: [
        'Pour des raisons esthétiques',
        'Pour préserver l\'unicité de la décomposition en facteurs premiers',
        'Parce que 1 n\'est pas un entier',
        'Parce que les Grecs l\'avaient décidé'
      ],
      correcte: 1,
      explication: 'Si 1 était premier, la décomposition de 6 pourrait s\'écrire 2 × 3, ou 1 × 2 × 3, ou 1 × 1 × 2 × 3... Plus d\'unicité. Pour préserver le théorème fondamental de l\'arithmétique, on exige des premiers qu\'ils aient exactement deux diviseurs distincts — ce qui exclut 1.'
    }
  ]

});
