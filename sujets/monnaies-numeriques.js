/* ===================================================================
   SUJET — Les monnaies numériques
   ===================================================================
   Bitcoin, stablecoins, monnaies de banque centrale.
   Domaines : Économie, Informatique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'monnaies-numeriques',
    titre: 'Les <em>monnaies numériques</em>',
    domaines: ['Économie', 'Informatique'],
    tags: ['bitcoin', 'crypto', 'blockchain', 'stablecoin', 'cbdc'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['ia-generative', 'nombres-premiers', 'histoire-internet', 'inflation'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'En seize ans, l\'idée d\'une monnaie sans État ni banque est passée du manifeste cypherpunk au système financier mainstream. Comprendre Bitcoin, les stablecoins et les monnaies numériques de banque centrale — et pourquoi ces trois familles racontent trois projets de société radicalement différents.',

  points_cles: [
    'Une **monnaie numérique** est une monnaie purement électronique, sans support physique. Le concept regroupe plusieurs familles aux logiques très différentes.',
    'Le **Bitcoin**, lancé en **2009** par un mystérieux Satoshi Nakamoto, fut la première monnaie sans tiers de confiance, garantie par une **blockchain** publique.',
    'Sa **rareté est programmée** : il n\'existera jamais plus de 21 millions de bitcoins. Cette rareté nourrit son usage comme « or numérique ».',
    'Les **stablecoins** (USDT, USDC) sont des monnaies numériques **adossées au dollar** : chaque token vaut **1 $** et reste stable. Capitalisation cumulée : plus de **300 milliards $** en 2026.',
    'Les **CBDC** (monnaies numériques de banque centrale) sont l\'inverse philosophique du Bitcoin : monnaie publique, contrôlée par l\'État, traçable. La Chine a déployé l\'**e-yuan** dès 2020.',
    'Le **Bitcoin** a atteint un sommet historique de **126 000 $** en octobre 2025, avant de corriger fortement ; les ETF Bitcoin gèrent désormais plus de **140 milliards $** d\'actifs.',
    'Aux États-Unis, le **GENIUS Act** signé en **juillet 2025** a créé un cadre fédéral réglementaire pour les stablecoins, ouvrant la porte à leur intégration au système bancaire.'
  ],

  carte_mentale: {
    central: 'monnaies-num',
    noeuds: [
      { id: 'monnaies-num', label: 'Monnaies numériques', description: 'Toutes les formes de monnaie purement électronique, des cryptomonnaies aux CBDC.' },
      { id: 'familles', label: 'Trois familles', description: 'Cryptomonnaies, stablecoins, monnaies de banque centrale — trois projets très différents.' },
      { id: 'tech', label: 'Blockchain', description: 'La technologie commune : un registre distribué et infalsifiable, validé par un réseau d\'ordinateurs.' },
      { id: 'enjeux', label: 'Enjeux', description: 'Souveraineté monétaire, vie privée, lutte anti-blanchiment, accès financier mondial.' },
      { id: 'risques', label: 'Risques', description: 'Volatilité, fraude, consommation énergétique, instabilité financière.' },

      // Familles
      { id: 'crypto', label: 'Cryptomonnaies', description: 'Bitcoin, Ethereum... Monnaies sans émetteur central, garanties par cryptographie et consensus distribué.', parent: 'familles' },
      { id: 'stablecoin', label: 'Stablecoins', description: 'Tokens numériques **adossés au dollar** ou à un autre actif. **USDT** (Tether) et **USDC** (Circle) dominent le marché.', parent: 'familles' },
      { id: 'cbdc', label: 'CBDC', description: '[Central Bank Digital Currency]{accent}. Monnaies numériques émises par les banques centrales — euro numérique, e-yuan.', parent: 'familles' },

      // Tech
      { id: 'mining', label: 'Minage', description: 'Pour Bitcoin : vérification des transactions par calcul intensif. **Coût énergétique** d\'environ 160 TWh/an, l\'équivalent d\'un pays moyen.', parent: 'tech' },
      { id: 'pos', label: 'Preuve d\'enjeu', description: 'Alternative au minage. Ethereum est passé à ce mode en 2022, divisant sa consommation énergétique par **plus de 99 %**.', parent: 'tech' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'L\'<em>idée</em> d\'une monnaie sans État',
      contenu_md:
`Le **31 octobre 2008**, en pleine crise financière mondiale, un texte de neuf pages est publié sur une liste de discussion cryptographique. Son titre : *« Bitcoin: A Peer-to-Peer Electronic Cash System »*. Son auteur signe **Satoshi Nakamoto** — un pseudonyme dont l\'identité réelle reste, à ce jour, **inconnue**.

L\'idée, simple à formuler, paraît techniquement folle : créer une monnaie électronique qui n\'aurait besoin d\'**aucune banque** pour garantir les transactions. Pas d\'État derrière. Pas d\'institution centrale. Juste un réseau d\'ordinateurs anonymes qui valident, ensemble, qui possède quoi.

Le 3 janvier 2009, Nakamoto démarre le réseau Bitcoin. Le premier bloc contient une référence à un titre du *Times* du jour : *« Chancellor on brink of second bailout for banks »*. Le message politique est clair.`
    },

    {
      type: 'texte',
      titre: 'La <em>blockchain</em>, en bref',
      contenu_md:
`Toute la prouesse de Bitcoin tient dans une idée : remplacer la confiance dans une institution par la **confiance dans un mécanisme**.

Le mécanisme s\'appelle [blockchain]{accent} — littéralement « chaîne de blocs ». C\'est un **registre public** où chaque transaction est inscrite, copié simultanément sur des milliers d\'ordinateurs partout dans le monde. Toutes les dix minutes environ, un nouveau « bloc » de transactions est ajouté à la chaîne, après avoir été validé par un calcul intensif réalisé par les **mineurs**.

Falsifier une transaction reviendrait à modifier la même donnée sur des milliers d\'ordinateurs simultanément, ce qui est computationnellement irréaliste. Le résultat : un livre comptable que personne ne possède, et qui pourtant, pour tout le monde, dit la vérité.`
    },

    {
      type: 'encadre',
      label: 'Rareté programmée',
      contenu_md: 'Le code de Bitcoin garantit qu\'il n\'existera **jamais** plus de **21 millions** de bitcoins. Cette limite est inscrite dans le protocole et ne peut être modifiée sans l\'accord de la quasi-totalité du réseau. C\'est le contraire absolu d\'une monnaie d\'État, dont la quantité peut être augmentée par décision politique. C\'est aussi ce qui fait dire à ses partisans que le Bitcoin est un [or numérique]{accent} — réserve de valeur plutôt que moyen d\'échange.'
    },

    {
      type: 'widget',
      titre: 'Quelques jalons de l\'histoire des monnaies numériques',
      composant: 'Frise',
      params: {
        evenements: [
          { date: 'Oct. 2008', titre: 'Whitepaper de Bitcoin', description: 'Satoshi Nakamoto publie le texte fondateur. **Neuf pages** qui changeront le secteur financier.' },
          { date: 'Janv. 2009', titre: 'Lancement du réseau', description: 'Premier bloc miné. Le réseau démarre à zéro utilisateur.' },
          { date: '2015', titre: 'Lancement d\'Ethereum', description: 'Vitalik Buterin lance une blockchain plus polyvalente, capable d\'exécuter des **contrats intelligents** (programmes décentralisés).' },
          { date: '2017', titre: 'Bulle des ICO', description: 'Le boom des [Initial Coin Offerings]{accent} fait exploser le marché. Première spéculation massive, suivie d\'un krach brutal en 2018.' },
          { date: '2020', titre: 'L\'e-yuan déployé', description: 'La Chine devient la première grande économie à tester sa **monnaie numérique de banque centrale** à grande échelle.' },
          { date: '2022', titre: 'Effondrement de Terra/Luna', description: 'L\'effondrement d\'un stablecoin algorithmique fait perdre **40 milliards $** au marché en quelques jours, suivi de la faillite de l\'exchange FTX.' },
          { date: 'Janvier 2024', titre: 'ETF Bitcoin approuvés aux USA', description: 'La SEC autorise les fonds indiciels Bitcoin. **Wall Street** entre massivement dans le marché.' },
          { date: 'Juillet 2025', titre: 'GENIUS Act', description: 'Cadre fédéral américain pour les stablecoins. Légitimation institutionnelle majeure.' },
          { date: 'Octobre 2025', titre: 'Bitcoin à 126 000 $', description: 'Sommet historique, avant une correction majeure début 2026.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Trois <em>familles</em>, trois philosophies',
      contenu_md: 'Toutes les monnaies numériques ne se ressemblent pas. Trois grandes familles coexistent aujourd\'hui, avec des projets politiques radicalement différents.'
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Sans État',
            titre: 'Cryptomonnaies',
            description: '**Bitcoin**, Ethereum, Solana, etc. Pas d\'émetteur, prix volatil, garanties par la blockchain. Promesse d\'autonomie individuelle face à l\'État. Capitalisation Bitcoin ~**1 800 milliards $** en 2026.'
          },
          {
            tag: 'Adossées au dollar',
            titre: 'Stablecoins',
            description: '**USDT** (58 % du marché), **USDC** (~25 %). Chaque token = 1 $ détenu en réserve. Utilisés massivement comme dollar numérique mondial — surtout dans les pays à monnaie instable. Marché total : **~316 milliards $**.'
          },
          {
            tag: 'Émises par les États',
            titre: 'CBDC',
            description: 'Monnaies numériques **de banque centrale**. La Chine a déployé son **e-yuan** dès 2020. L\'**euro numérique** est en projet. Modèle inverse de Bitcoin : monnaie publique, traçable, sous contrôle étatique.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>Bitcoin</em>, vingt ans après',
      contenu_md:
`En seize ans, le Bitcoin est passé d\'une curiosité de geeks à un actif financier suivi par les plus grandes banques du monde.

Sa **valeur** a connu une trajectoire spectaculaire : 0,001 $ à ses débuts, 1 000 $ en 2013, 20 000 $ en 2017, **69 000 $** en novembre 2021, **126 000 $** en octobre 2025. Entre chaque sommet, des **chutes brutales** — souvent de plus de 70 % — qui ont ruiné autant qu\'elles ont enrichi.

Le tournant institutionnel est venu en **janvier 2024**, quand la SEC américaine a autorisé les **ETF Bitcoin spot** — des fonds indiciels permettant à tout investisseur classique d\'acheter du Bitcoin via son compte-titres ordinaire. En deux ans, ces ETF ont accumulé plus de **140 milliards $** d\'actifs.

Bitcoin est-il devenu une vraie monnaie ? La réponse est nuancée : peu de gens l\'utilisent pour des achats quotidiens. Mais comme **réserve de valeur** — un actif spéculatif qu\'on conserve dans l\'espoir qu\'il prenne de la valeur — il s\'est fait une place durable dans la finance mondiale.`
    },

    {
      type: 'texte',
      titre: 'Les <em>stablecoins</em>, pivots de la crypto',
      contenu_md:
`Plus discrets que le Bitcoin, mais probablement plus importants au quotidien : les **stablecoins**.

Le principe est simple : pour chaque token émis (USDT, USDC), l\'émetteur (Tether, Circle) prétend détenir **1 dollar** en réserve, dans des actifs liquides — surtout des bons du Trésor américain. Le token vaut donc, en théorie, toujours 1 $.

L\'usage est massif : les traders s\'en servent pour passer d\'une cryptomonnaie à l\'autre sans repasser par un compte bancaire. Les habitants de pays à **monnaie instable** (Argentine, Nigeria, Turquie, Liban) s\'en servent comme dollar numérique de fait — ils peuvent envoyer ou recevoir des dollars sans compte bancaire américain.

En **juillet 2025**, le **GENIUS Act** signé par le président Trump a créé un cadre fédéral réglementaire pour les stablecoins aux États-Unis. Conséquence inattendue : les émetteurs de stablecoins (Tether, Circle) sont devenus le **7ᵉ plus grand acheteur** de bons du Trésor américain — soutenant la dette américaine tout en propageant le dollar mondialement.`
    },

    {
      type: 'encadre',
      label: 'Le retournement géopolitique',
      contenu_md: 'L\'administration américaine a explicitement embrassé les stablecoins comme **outil de domination du dollar**. Le secrétaire au Trésor Scott Bessent a déclaré en 2025 : *« Nous allons garder le dollar comme monnaie de réserve mondiale, et nous utiliserons les stablecoins pour cela. »* Pendant ce temps, la Chine, qui interdit les cryptomonnaies privées, pousse son **e-yuan**. Bruxelles temporise. Trois projets, une même question : **qui contrôlera la monnaie numérique de demain ?**'
    },

    {
      type: 'widget',
      titre: 'Capitalisations en 2026 (en milliards de dollars)',
      composant: 'SelecteurValeurs',
      params: {
        unite: 'milliards $',
        indexInitial: 0,
        options: [
          { label: 'USDT (Tether)', valeur: 176, description: 'Le **leader** des stablecoins, 58 % du marché. Adossé au dollar par des bons du Trésor américains.' },
          { label: 'USDC (Circle)', valeur: 74, description: 'Le **second**, 25 % du marché. Adossé uniquement à des liquidités et bons du Trésor.' },
          { label: 'Marché stablecoins total', valeur: 316, description: '**Multiplié par 1,5** en 2025 — croissance fulgurante.' },
          { label: 'Bitcoin', valeur: 1800, description: 'Capitalisation du seul Bitcoin, après correction depuis le sommet d\'octobre 2025.' },
          { label: 'Or (référence)', valeur: 18000, description: 'Pour comparaison : le marché de l\'or représente environ 18 000 milliards $.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>coût</em> et le <em>doute</em>',
      contenu_md:
`Tout n\'est pas rose dans cet écosystème.

L\'**impact énergétique** du Bitcoin est massif : son réseau consomme entre **150 et 175 TWh par an**, soit autant qu\'un pays comme l\'Argentine. Ethereum, lui, est passé en 2022 à un autre mécanisme (la **preuve d\'enjeu**), divisant sa consommation par plus de **99 %**.

Les **fraudes et faillites** ont jalonné l\'histoire récente : effondrement de Terra/Luna en 2022 (40 milliards $ effacés), faillite de FTX la même année (Sam Bankman-Fried condamné à 25 ans de prison), arnaques aux ICO, vols par milliards via failles informatiques.

La **volatilité** reste extrême : le Bitcoin peut perdre 30 % en une semaine. La plupart des cryptomonnaies « alternatives » (altcoins) ont vu leur valeur tomber à zéro. Pour l\'investisseur lambda, l\'écart entre l\'engouement médiatique et la prudence raisonnable reste considérable.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le Bitcoin garantit l\'anonymat complet de ses utilisateurs.',
      reponse: false,
      explication: 'Bitcoin est pseudonyme, pas anonyme. Toutes les transactions sont publiquement inscrites sur la blockchain et associées à des adresses : si une adresse est reliée à une identité réelle (via un exchange régulé, par exemple), tout l\'historique devient traçable.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces étapes de l\'histoire des monnaies numériques dans l\'ordre :',
      items: [
        'Publication du white paper de Satoshi Nakamoto',
        'Minage du bloc genesis de Bitcoin',
        'Bulle spéculative des ICO',
        'Bitcoin atteint ses records autour de 69 000 $',
        'Effondrement de Terra/Luna et faillite de FTX'
      ],
      explication: 'Octobre 2008 (white paper) → janvier 2009 (bloc genesis) → 2017 (bulle des ICO) → 2021 (records à ~69 000 $) → 2022 (chute de Terra/Luna puis FTX). Chaque cycle a oscillé entre euphorie et crise.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'Le protocole Bitcoin limite à jamais l\'émission à {21} millions d\'unités, ce qui en fait, selon ses partisans, un {or} numérique.',
      explication: 'Cette rareté programmée est inscrite dans le code et ne peut être modifiée sans l\'accord de la quasi-totalité du réseau. C\'est l\'opposé absolu d\'une monnaie d\'État dont la quantité peut être augmentée par décision politique.'
    },
    {
      q: 'Qui a inventé le Bitcoin ?',
      options: [
        'Elon Musk en 2010',
        'Une personne (ou un groupe) sous le pseudonyme de Satoshi Nakamoto, en 2008-2009',
        'Le MIT en collaboration avec Visa',
        'Un consortium de banques européennes'
      ],
      correcte: 1,
      explication: 'Le whitepaper de Bitcoin a été publié en octobre 2008 par "Satoshi Nakamoto" — pseudonyme dont l\'identité réelle n\'a jamais été établie publiquement. Le réseau a démarré en janvier 2009.'
    },
    {
      q: 'Pourquoi dit-on que la quantité de Bitcoin est "rare" ?',
      options: [
        'Parce qu\'il est difficile à miner',
        'Parce que le code du protocole limite l\'émission à 21 millions de bitcoins maximum, à jamais',
        'Parce qu\'il est plus cher que l\'or',
        'Parce que peu de gens en possèdent'
      ],
      correcte: 1,
      explication: 'C\'est inscrit dans le protocole : il n\'existera jamais plus de 21 millions de bitcoins. Cette rareté programmée est ce qui fait dire à ses partisans qu\'il est un "or numérique".'
    },
    {
      q: 'Qu\'est-ce qu\'un stablecoin ?',
      options: [
        'Une cryptomonnaie qui se recharge automatiquement',
        'Un token numérique adossé à un actif stable (généralement le dollar) pour conserver une valeur fixe',
        'Une technologie de minage économique',
        'Un type de carte bancaire'
      ],
      correcte: 1,
      explication: 'Stablecoin = "monnaie stable". Chaque token vaut 1 $ (ou 1 € pour certains) parce que son émetteur détient en réserve l\'équivalent en dollars (ou bons du Trésor) pour chaque token émis.'
    },
    {
      q: 'Que signifie l\'acronyme CBDC ?',
      options: [
        'Crypto-Block Distributed Coin',
        'Central Bank Digital Currency (monnaie numérique de banque centrale)',
        'Cross-Border Digital Capital',
        'Centralized Blockchain Data Center'
      ],
      correcte: 1,
      explication: 'Une monnaie numérique émise par une banque centrale (donc par un État). C\'est l\'inverse philosophique du Bitcoin : monnaie publique, traçable, sous contrôle souverain. La Chine a été pionnière avec son e-yuan dès 2020.'
    },
    {
      q: 'Pourquoi les stablecoins comme USDT et USDC sont-ils massivement utilisés dans les pays à monnaie instable ?',
      options: [
        'Parce qu\'ils paient des intérêts',
        'Ils permettent d\'accéder à un "dollar numérique" sans compte bancaire américain, comme protection contre l\'inflation locale',
        'Parce qu\'ils sont gratuits',
        'Parce qu\'ils sont obligatoires dans certains pays'
      ],
      correcte: 1,
      explication: 'Argentine, Nigeria, Turquie, Liban : dans des pays où la monnaie locale perd rapidement de la valeur, les stablecoins offrent un moyen simple d\'épargner en dollars sans avoir à ouvrir un compte bancaire à l\'étranger. C\'est l\'un des usages les plus tangibles de l\'écosystème crypto.'
    },
    {
      q: 'Quel est le principal problème environnemental associé au Bitcoin ?',
      options: [
        'Sa fabrication produit beaucoup de plastique',
        'Le minage consomme énormément d\'électricité — entre 150 et 175 TWh/an, comme un pays moyen',
        'Il rejette du CO₂ directement',
        'Il pollue les océans'
      ],
      correcte: 1,
      explication: 'Le mécanisme de "preuve de travail" de Bitcoin nécessite des calculs intensifs. Sa consommation électrique est comparable à celle d\'un pays comme l\'Argentine. Ethereum, lui, a quitté ce modèle en 2022 pour réduire sa consommation de plus de 99 %.'
    },
    {
      q: 'Qu\'est-ce que le GENIUS Act, signé en juillet 2025 ?',
      options: [
        'Une loi européenne contre les cryptomonnaies',
        'Un cadre fédéral américain réglementant les stablecoins, signé sous l\'administration Trump',
        'Une loi chinoise sur l\'e-yuan',
        'Un accord entre Coinbase et la Banque mondiale'
      ],
      correcte: 1,
      explication: 'Le GENIUS Act (Guiding and Establishing National Innovation for U.S. Stablecoins Act) impose aux stablecoins une réserve 1:1 en actifs liquides et les place sous supervision fédérale. Étape majeure d\'institutionnalisation.'
    }
  ]

});
