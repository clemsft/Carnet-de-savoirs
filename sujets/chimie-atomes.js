/* ===================================================================
   SUJET — Les atomes et le tableau périodique
   ===================================================================
   118 briques élémentaires, une table qui les ordonne, et une grammaire
   minuscule qui explique pourquoi le monde est ce qu'il est.
   Domaine : Chimie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'chimie-atomes',
    titre: 'Les <em>atomes</em> et le tableau périodique',
    domaines: ['Chimie'],
    tags: ['atome', 'mendeleiev', 'element', 'electron', 'liaison', 'molecule'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['mecanique-quantique', 'energie-nucleaire', 'adn-genetique'],
    date_creation: '2026-05-17',
    date_maj: '2026-05-17'
  },

  resume: `Comprendre comment toute la matière de l'univers — pierre, eau, ADN, étoiles — est faite d'à peine plus d'une centaine de briques élémentaires, les atomes, classées dans un tableau dont les colonnes prédisent depuis 1869 le comportement chimique de chaque case, y compris celles que personne n'avait encore découvertes.`,

  points_cles: [
    `Un **atome** est une structure de noyau (**protons** chargés positivement et **neutrons** neutres) entouré d'**électrons** négatifs. C'est la plus petite quantité d'un **élément chimique** qui en conserve les propriétés.`,
    `Le **numéro atomique Z** — nombre de protons dans le noyau — définit l'élément. 1 proton = **hydrogène**, 6 = **carbone**, 26 = **fer**, 92 = **uranium**. C'est lui qui ordonne le tableau périodique de gauche à droite et de haut en bas.`,
    `**Dimitri Mendeleïev** publie en **1869** la première table périodique. Son génie : laisser des **cases vides** pour des éléments qu'il prédit théoriquement (germanium, gallium, scandium) — tous découverts dans les vingt années suivantes, aux propriétés exactement annoncées.`,
    `Les **lignes** du tableau s'appellent **périodes**, les **colonnes** **groupes**. Une même colonne signifie un **même nombre d'électrons sur la couche externe** — donc des **propriétés chimiques très voisines**, à toute température.`,
    `Les **gaz nobles** (colonne 18 : hélium, néon, argon...) ont leur couche externe **saturée** et ne réagissent quasiment pas. Les **alcalins** (colonne 1 : lithium, sodium...) ont un seul électron en trop : ils explosent au contact de l'eau pour s'en débarrasser.`,
    `Une **liaison chimique** est une mise en commun ou un transfert d'électrons entre atomes, dans le but d'atteindre une **couche externe stable** (la fameuse **règle de l'octet** : huit électrons sur la couche externe).`,
    `Trois grands types de liaisons expliquent presque toute la matière ordinaire : **covalente** (partage d'électrons — molécules organiques), **ionique** (transfert — sel de table), **métallique** (mer d'électrons mobiles — d'où conductivité et éclat des métaux).`,
    `Le tableau actuel compte **118 éléments**, dont 94 trouvés à l'état naturel sur Terre. Les éléments 95 à 118 sont **synthétisés en laboratoire** par collision de noyaux. L'**oganesson** (Z=118, 2002) a une durée de vie de l'ordre de la **milliseconde**.`
  ],

  carte_mentale: {
    central: 'atome',
    noeuds: [
      { id: 'atome', label: 'Atome', description: 'Brique élémentaire de la matière : noyau positif entouré d\'un nuage d\'électrons négatifs. Diamètre ~10⁻¹⁰ m, dont 99,9 % de vide.' },

      { id: 'noyau', label: 'Noyau', description: 'Cœur compact de l\'atome : protons et neutrons liés par la force forte. Contient quasi toute la masse, sur 10⁻¹⁵ m seulement.' },
      { id: 'electrons', label: 'Électrons', description: 'Particules négatives qui occupent des **orbitales** quantifiées autour du noyau. Leur agencement détermine toute la chimie.' },
      { id: 'element', label: 'Élément', description: 'Tous les atomes ayant le même nombre de protons (Z). 118 éléments connus, dont 94 naturels.' },
      { id: 'tableau', label: 'Tableau périodique', description: 'Classement par Z croissant. Lignes = **périodes**, colonnes = **groupes**. Les colonnes ont des propriétés similaires.' },
      { id: 'liaisons', label: 'Liaisons chimiques', description: 'Mise en commun ou transfert d\'électrons entre atomes pour atteindre une couche externe stable (règle de l\'octet).' },
      { id: 'applications', label: 'Applications', description: 'De la respiration cellulaire à la batterie au lithium en passant par les semi-conducteurs : tout y est de la chimie en action.' },

      // Noyau
      { id: 'protons', label: 'Protons', description: 'Particules de charge +1. Leur nombre Z définit l\'élément. Lithium = 3 protons, carbone = 6, oxygène = 8.', parent: 'noyau' },
      { id: 'neutrons', label: 'Neutrons', description: 'Particules sans charge. Leur nombre peut varier pour un même élément : ce sont les **isotopes**. Carbone-12 et carbone-14 sont deux isotopes du même élément.', parent: 'noyau' },
      { id: 'energie-nucl', label: 'Énergie nucléaire', description: 'Briser ou fusionner des noyaux libère des quantités d\'énergie millions de fois supérieures à toute réaction chimique. Voir [[energie-nucleaire]].', parent: 'noyau' },

      // Électrons
      { id: 'orbitales', label: 'Orbitales', description: 'Volumes de probabilité de présence de l\'électron, quantifiés en formes (s sphérique, p en haltère, d en trèfle). Hérité de la [[mecanique-quantique]].', parent: 'electrons' },
      { id: 'couches', label: 'Couches électroniques', description: 'Niveaux d\'énergie permis pour les électrons (K, L, M, N...). Chaque couche a une capacité maximale : 2, 8, 18, 32 électrons.', parent: 'electrons' },
      { id: 'octet', label: 'Règle de l\'octet', description: 'Un atome est stable si sa couche externe contient **huit électrons** (deux pour l\'hydrogène et l\'hélium). C\'est la cause profonde de toute la chimie.', parent: 'electrons' },

      // Tableau périodique
      { id: 'mendeleiev', label: 'Mendeleïev (1869)', description: 'Le chimiste russe range les éléments par masse croissante en regroupant ceux aux propriétés similaires. Laisse des cases vides : ses prédictions seront confirmées.', parent: 'tableau' },
      { id: 'groupes-cles', label: 'Groupes clés', description: 'Alcalins (col. 1), alcalino-terreux (2), halogènes (17), gaz nobles (18), métaux de transition (3-12), lanthanides et actinides (séries inférieures).', parent: 'tableau' },
      { id: 'periodes-cles', label: 'Périodes', description: '7 périodes du tableau. Chaque période ajoute une **nouvelle couche électronique**. L\'hydrogène est seul tout en haut à gauche.', parent: 'tableau' },

      // Liaisons
      { id: 'covalente', label: 'Liaison covalente', description: 'Deux atomes **partagent** une paire d\'électrons. Forte, directionnelle. Construit toutes les molécules organiques — du méthane à l\'ADN ([[adn-genetique]]).', parent: 'liaisons' },
      { id: 'ionique', label: 'Liaison ionique', description: 'Un atome **donne** un électron à un autre. Résulte en deux ions de charges opposées attirés. Sel de table = Na⁺ + Cl⁻.', parent: 'liaisons' },
      { id: 'metallique', label: 'Liaison métallique', description: 'Les électrons externes deviennent **délocalisés** : ils baignent tous les noyaux comme une mer. D\'où conductivité, éclat, malléabilité des métaux.', parent: 'liaisons' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>question</em> très ancienne`,
      contenu_md:
`Que se passe-t-il quand on coupe un caillou en deux ? On obtient deux cailloux. Quand on les recoupe ? Quatre. La question, posée par **Démocrite** vers **-450** à Abdère, est simple : peut-on continuer indéfiniment, ou bien arrive-t-on à un grain de matière qu'on ne peut plus diviser ? Démocrite parie pour la seconde réponse et nomme ce grain *atomos* — *insécable*, en grec. Il faudra attendre **vingt-trois siècles** pour que cette intuition philosophique devienne une science expérimentale.

L'atome moderne est très loin du caillou minuscule rêvé par Démocrite. C'est une structure **presque vide** : un **noyau** minuscule chargé positivement, autour duquel orbitent à grande distance des **électrons** chargés négativement. Si l'atome avait la taille d'un stade de foot, le noyau serait un petit pois posé sur le rond central. Tout le reste serait l'espace où circulent les électrons. Et pourtant, c'est cet espace presque vide qui constitue la quasi-totalité de la matière qui nous entoure et nous compose.`
    },

    {
      type: 'encadre',
      label: 'Définition',
      contenu_md: `Un [atome]{accent} est la plus petite quantité d'un **élément chimique** qui en conserve les propriétés. Il est composé d'un **noyau** (protons + neutrons) et d'un nuage d'**électrons** qui l'entoure. Ses dimensions sont de l'ordre du **dixième de nanomètre** (10⁻¹⁰ m) ; son noyau, dix mille fois plus petit encore.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      titre: 'Les grandes étapes de la théorie atomique',
      params: {
        evenements: [
          { date: '-450', titre: 'Démocrite', description: 'Le philosophe grec d\'Abdère postule l\'existence d\'**atomes insécables**. Pure intuition spéculative, sans expérience.' },
          { date: '1808', titre: 'Dalton', description: 'Le chimiste anglais **John Dalton** propose que chaque élément est fait d\'atomes identiques entre eux, différents d\'un élément à l\'autre. Première théorie scientifique.' },
          { date: '1869', titre: 'Mendeleïev', description: 'Le Russe **Dimitri Mendeleïev** publie son tableau périodique. Il laisse des **cases vides** pour des éléments prédits — tous découverts dans les vingt années suivantes.' },
          { date: '1897', titre: 'L\'électron', description: '**J.J. Thomson** identifie une particule plus petite que l\'atome, négative : l\'**électron**. L\'atome n\'est donc **pas insécable**. Démocrite avait tort sur ce point.' },
          { date: '1911', titre: 'Le noyau', description: '**Ernest Rutherford** bombarde une feuille d\'or de particules alpha. La plupart traversent, quelques-unes rebondissent : preuve que la masse est concentrée dans un **noyau minuscule**.' },
          { date: '1913', titre: 'Bohr', description: '**Niels Bohr** propose que les électrons occupent des **orbites quantifiées**. L\'atome devient quantique. Premier modèle prédictif des spectres lumineux.' },
          { date: '1932', titre: 'Le neutron', description: '**James Chadwick** découvre le **neutron** : la particule neutre du noyau qui explique pourquoi les atomes ont une masse plus grande que le seul compte des protons.' },
          { date: '2002', titre: 'Oganesson', description: 'Synthèse en Russie de l\'élément **Z=118**, le plus lourd connu. Quelques atomes seulement, durée de vie de la milliseconde. Nommé en 2016.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>noyau</em> et les électrons`,
      contenu_md:
`Le noyau atomique contient deux sortes de particules, appelées **nucléons** : les **protons**, de charge électrique +1, et les **neutrons**, de charge nulle. Ce sont des cousins très proches en masse : un proton pèse 1836 fois plus qu'un électron, un neutron à peine plus qu'un proton. Le nombre de protons est noté Z (de l'allemand *Zahl*, *nombre*). Z définit l'élément : **un hydrogène a 1 proton**, un carbone 6, un fer 26, un uranium 92. Pas d'exception. Changer Z, c'est changer d'élément, comme transformer du plomb en or — le rêve des alchimistes, possible aujourd'hui en bombardant un noyau, mais à un coût ridiculement supérieur à la valeur de l'or produit.

Le nombre de neutrons, lui, peut varier sans changer l'identité chimique de l'élément : ce sont les [isotopes]{accent}. Le **carbone-12** (6 protons, 6 neutrons) et le **carbone-14** (6 protons, 8 neutrons) sont tous deux du carbone, mais le second est **instable** et se désintègre lentement (demi-vie 5 730 ans) — ce qui en fait l'horloge des archéologues.

Autour du noyau, les électrons ne tournent pas comme des planètes autour d'un soleil — l'image scolaire est commode mais fausse. Ils occupent des volumes de probabilité appelés **orbitales**, dont les formes sont fixées par la [[mecanique-quantique]] : sphérique pour les orbitales *s*, en double haltère pour les orbitales *p*, en quadrilobes pour les orbitales *d*. Chaque orbitale peut contenir au plus **deux électrons**, et ces orbitales se groupent en **couches** d'énergie croissante.`
    },

    {
      type: 'widget',
      composant: 'SelecteurValeurs',
      titre: 'Cinq éléments fondamentaux pour la vie',
      params: {
        options: [
          { label: 'Hydrogène (Z=1)', valeur: '1 électron', description: 'L\'élément le plus simple et le plus abondant de l\'univers (74 % de la masse ordinaire). 75 % des liaisons de l\'eau et des protéines.' },
          { label: 'Carbone (Z=6)', valeur: '6 électrons', description: 'Le squelette de toute la chimie du vivant. Quatre liaisons covalentes possibles permettent une variété quasi infinie de molécules. Sans le carbone, pas d\'[[adn-genetique]].' },
          { label: 'Azote (Z=7)', valeur: '7 électrons', description: 'Trois liaisons typiques. Composant des acides aminés et des bases nucléiques. 78 % de l\'atmosphère terrestre sous forme de N₂.' },
          { label: 'Oxygène (Z=8)', valeur: '8 électrons', description: 'Deux liaisons typiques. Avec l\'hydrogène : H₂O. Avec lui-même : O₂, le comburant respiratoire de toute vie aérobie depuis 2,4 milliards d\'années.' },
          { label: 'Fer (Z=26)', valeur: '26 électrons', description: 'Métal de transition. Au cœur de l\'hémoglobine, transporte l\'O₂ dans le sang. Aussi noyau central des dernières fusions stellaires avant la supernova.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>tableau</em> de Mendeleïev`,
      contenu_md:
`En **1869**, le chimiste russe **Dimitri Mendeleïev**, professeur à Saint-Pétersbourg, prépare un manuel pour ses étudiants. Il connaît 63 éléments. Il joue avec leurs cartes — il a noté chaque élément sur une fiche avec sa masse atomique et ses propriétés —, les pose sur sa table, les déplace, comme un patient solitaire. Il finit par les ranger par **masse croissante**, mais en **passant à la ligne** à chaque fois qu'il rencontre un élément aux propriétés voisines d'un précédent. Soudain, le tableau parle : les éléments aux propriétés similaires s'alignent en **colonnes**.

Plus fort encore : pour que les colonnes soient cohérentes, Mendeleïev doit **laisser trois cases vides**. Il refuse de tricher avec les masses. Il prédit donc l'existence de trois éléments alors inconnus, qu'il appelle *eka-aluminium*, *eka-bore*, *eka-silicium* — il en calcule théoriquement les propriétés. En **1875**, le Français **Lecoq de Boisbaudran** découvre le **gallium** : exactement les propriétés prédites. En **1879**, le Suédois **Nilson** découvre le **scandium**. En **1886**, l'Allemand **Winkler** découvre le **germanium**. Mendeleïev est devenu en quinze ans la figure la plus respectée de la chimie mondiale.

Ce qu'on comprendra plus tard, après 1913, c'est que l'ordre n'est pas vraiment par masse mais par [numéro atomique Z]{accent}, c'est-à-dire par nombre de protons. Et la périodicité des propriétés vient de la structure quantique des couches électroniques : à chaque ligne, on remplit une nouvelle couche, et la chimie repart d'une famille à la suivante.`
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      titre: 'Quatre grandes familles du tableau',
      params: {
        cartes: [
          { tag: 'Colonne 1', titre: 'Alcalins', description: 'Lithium, sodium, potassium... Un seul électron sur la couche externe. **Très réactifs** : explosent au contact de l\'eau. Toujours conservés sous huile.' },
          { tag: 'Colonne 17', titre: 'Halogènes', description: 'Fluor, chlore, brome, iode. Sept électrons sur la couche externe. À un cheveu de l\'octet : **avides d\'un électron supplémentaire**. Très oxydants.' },
          { tag: 'Colonne 18', titre: 'Gaz nobles', description: 'Hélium, néon, argon, krypton, xénon. Couche externe **saturée** (huit électrons, deux pour He). **Inertes** : ne forment quasiment aucune molécule.' },
          { tag: 'Colonnes 3-12', titre: 'Métaux de transition', description: 'Fer, cuivre, or, mercure... Électrons d en jeu. Plusieurs degrés d\'oxydation, couleurs vives, catalyse industrielle. Le squelette de la métallurgie.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `La <em>liaison</em> chimique`,
      contenu_md:
`Un atome isolé est rarement un atome heureux. Les **gaz nobles** sont l'exception : leur couche externe est saturée, ils n'ont rien à gagner d'une rencontre. Tous les autres atomes cherchent à atteindre cette même configuration — huit électrons sur la couche externe, *l'octet stable*. C'est la cause profonde de toute la chimie : la matière s'agence pour que les couches électroniques externes soient saturées.

Trois stratégies sont possibles. Soit deux atomes **partagent une paire d'électrons** : c'est la [liaison covalente]{accent}, fondement de toute la chimie organique. Deux atomes d'hydrogène forment H₂ en partageant chacun leur unique électron : la molécule a maintenant deux électrons sur sa couche commune, comme un atome d'hélium artificiel. Le carbone, avec quatre électrons à compléter, forme **quatre liaisons** — d'où la richesse infinie de la chimie du vivant. Une molécule d'eau, c'est un oxygène qui partage deux paires avec deux hydrogènes.

Deuxième stratégie : un atome **donne** carrément un de ses électrons à un autre, qui l'accepte avidement. Le sodium (1 électron en trop) donne au chlore (1 électron manquant). Résultat : Na devient Na⁺, Cl devient Cl⁻, et les deux ions opposés s'attirent. C'est la **liaison ionique**, celle du sel de table.

Troisième stratégie, propre aux métaux : les électrons externes deviennent **collectifs**. Ils ne sont plus attachés à un atome particulier, ils baignent l'ensemble du métal comme une mer fluide. C'est la **liaison métallique**, qui explique pourquoi les métaux conduisent l'électricité (les électrons se déplacent librement), pourquoi ils sont brillants (la mer d'électrons réfléchit la lumière), et pourquoi ils sont malléables (les couches d'ions glissent les unes sur les autres dans la mer).`
    },

    {
      type: 'widget',
      composant: 'ListeMethodes',
      titre: 'Les trois liaisons en bref',
      params: {
        methodes: [
          { titre: 'Covalente — partage', description: 'Deux atomes **mettent en commun** une paire d\'électrons. Forte, directionnelle. Construit toutes les molécules : eau, méthane, glucose, protéines, ADN. La chimie organique entière est covalente.' },
          { titre: 'Ionique — transfert', description: 'Un atome **donne** un électron à un autre. Deux ions de charges opposées se forment et s\'attirent. Cristaux comme NaCl, KCl. Très solubles dans l\'eau, conducteurs en solution.' },
          { titre: 'Métallique — mer commune', description: 'Les électrons externes deviennent **délocalisés** sur l\'ensemble du solide. D\'où conductivité électrique, conductivité thermique, éclat métallique, malléabilité. Spécifique aux métaux.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'L\'ordre de grandeur',
      contenu_md: `Une cuillère à café d'eau contient environ **5 × 10²²** molécules d'eau, soit 50 000 milliards de milliards. Si on numérotait chaque molécule à raison d'une par seconde, sans dormir, il faudrait **un million et demi de milliards d'années** pour finir — soit cent mille fois l'âge de l'univers. La chimie quotidienne brasse l'inimaginable.`
    }

  ],

  quiz: [
    {
      q: `Qu'est-ce qui définit un élément chimique ?`,
      options: [
        `Sa masse atomique (nombre de nucléons)`,
        `Son nombre de protons (numéro atomique Z)`,
        `Son nombre d'électrons sur la couche externe`,
        `Sa température de fusion`
      ],
      correcte: 1,
      explication: `L'identité d'un élément est fixée par son **nombre de protons** Z. Tous les atomes à 6 protons sont du carbone, qu'ils aient 6, 7 ou 8 neutrons (carbone-12, carbone-13, carbone-14). Changer le nombre de neutrons donne un **isotope** du même élément ; changer le nombre d'électrons donne un **ion** du même élément ; mais changer le nombre de protons donne un **élément différent**.`
    },
    {
      q: `Pourquoi Mendeleïev a-t-il laissé des cases vides dans son tableau de 1869 ?`,
      options: [
        `Il manquait de place sur sa feuille`,
        `Il pensait qu'il existait des éléments inconnus dont il pouvait prédire les propriétés à partir de leur position`,
        `Il ne savait pas où placer les gaz nobles`,
        `Il les avait oubliés et les a complétés plus tard`
      ],
      correcte: 1,
      explication: `Le génie de Mendeleïev est précisément d'avoir refusé de tricher sur les masses pour combler son tableau. Il a préféré **laisser des cases vides** et prédire l'existence d'éléments alors inconnus, en calculant leurs propriétés à partir de leur position dans le tableau. Le gallium (1875), le scandium (1879) et le germanium (1886) ont été découverts dans les vingt années suivantes, avec exactement les propriétés annoncées. C'est ce qui a transformé la périodicité en science prédictive.`
    },
    {
      q: `Pourquoi les gaz nobles (hélium, néon, argon...) sont-ils chimiquement quasi inertes ?`,
      options: [
        `Leur noyau est instable et les empêche de réagir`,
        `Leur couche électronique externe est déjà saturée — ils n'ont rien à gagner d'une liaison`,
        `Ils sont trop légers pour entrer en contact avec d'autres atomes`,
        `Ils ne possèdent pas d'électrons`
      ],
      correcte: 1,
      explication: `Les gaz nobles ont leur couche externe pleine (deux électrons pour l'hélium, huit pour les autres). C'est précisément la **configuration que tous les autres atomes cherchent à atteindre** via la liaison chimique. N'ayant rien à gagner, ils ne réagissent quasiment pas. C'est ce qui en fait des gaz isolants idéaux : argon dans les ampoules, hélium dans les ballons, néon dans les enseignes. Quelques composés du xénon ont été synthétisés depuis 1962, mais cela reste exceptionnel.`
    },
    {
      q: `Qu'est-ce qu'une liaison covalente ?`,
      options: [
        `Un atome donne définitivement un électron à un autre`,
        `Deux atomes partagent une paire d'électrons pour saturer leurs couches externes`,
        `Les électrons sont mobiles et baignent collectivement un solide métallique`,
        `Deux noyaux fusionnent en libérant de l'énergie`
      ],
      correcte: 1,
      explication: `Dans une liaison covalente, deux atomes **mettent en commun** une (ou plusieurs) paires d'électrons. Chaque atome "compte" les électrons partagés comme s'ils lui appartenaient, et atteint ainsi sa couche stable. La liaison covalente est forte, directionnelle (elle impose des angles précis aux molécules), et constitue le fondement de toute la chimie organique — du méthane (CH₄) aux protéines en passant par l'ADN. Elle s'oppose à la liaison ionique (transfert) et à la liaison métallique (délocalisation).`
    },
    {
      q: `Combien d'éléments compte le tableau périodique actuel, et combien existent à l'état naturel ?`,
      options: [
        `92 éléments, tous naturels`,
        `100 éléments, dont 80 naturels`,
        `118 éléments, dont 94 naturels`,
        `120 éléments, dont 100 naturels`
      ],
      correcte: 2,
      explication: `Le tableau périodique compte aujourd'hui **118 éléments** (jusqu'à l'oganesson, Z=118, synthétisé en 2002 et nommé en 2016). Parmi eux, **94 ont été trouvés à l'état naturel** sur Terre (de l'hydrogène à l'élément 94, le plutonium, présent à l'état de traces dans les minerais d'uranium). Les éléments 95 à 118 sont **uniquement synthétisés** dans des accélérateurs de particules par collision de noyaux. Plusieurs ne durent que quelques millisecondes avant de se désintégrer.`
    },
    {
      q: `Que sont deux isotopes du même élément ?`,
      options: [
        `Deux atomes avec un nombre de protons différent`,
        `Deux atomes avec le même nombre de protons mais un nombre de neutrons différent`,
        `Deux atomes avec un nombre d'électrons différent (un ion et un atome neutre)`,
        `Deux atomes appartenant à des colonnes différentes du tableau périodique`
      ],
      correcte: 1,
      explication: `Les isotopes d'un élément partagent le **même nombre de protons** (donc la même identité chimique) mais ont un **nombre de neutrons différent**, donc une masse différente. Le carbone-12 (6 protons, 6 neutrons) et le carbone-14 (6 protons, 8 neutrons) sont deux isotopes du carbone. L'un est stable, l'autre radioactif avec une demi-vie de 5 730 ans — base de la datation au carbone 14. Changer le nombre de protons donne un autre élément ; changer le nombre d'électrons donne un ion.`
    },
    {
      q: `Pourquoi les métaux conduisent-ils l'électricité, contrairement aux cristaux ioniques solides ?`,
      options: [
        `Parce que leurs électrons externes sont délocalisés et libres de se déplacer dans tout le solide`,
        `Parce qu'ils ont plus d'électrons par atome`,
        `Parce qu'ils sont plus lourds`,
        `Parce que leurs noyaux peuvent se déplacer librement`
      ],
      correcte: 0,
      explication: `Dans un métal, les électrons externes ne sont plus liés à un atome particulier : ils baignent l'ensemble du solide comme une mer. Sous l'effet d'une tension électrique, cette mer d'électrons se met en mouvement — c'est le courant. Dans un cristal ionique solide (sel, par exemple), les électrons sont strictement liés à un ion donné et ne peuvent pas circuler. En revanche, **dissous dans l'eau**, les ions deviennent libres de bouger, et la solution salée conduit alors le courant. La conductivité n'est donc pas une propriété d'un élément mais de la **structure de la matière** dans laquelle il est engagé.`
    },
    {
      q: `Combien de liaisons covalentes le carbone forme-t-il typiquement, et pourquoi cela en fait-il l'élément central de la vie ?`,
      options: [
        `Une seule, ce qui le rend très stable`,
        `Deux, comme l'oxygène`,
        `Quatre, ce qui permet une variété quasi infinie de molécules en chaîne et ramifiées`,
        `Huit, comme les gaz nobles`
      ],
      correcte: 2,
      explication: `Le carbone (Z=6) a quatre électrons à compléter pour atteindre l'octet. Il forme donc **quatre liaisons covalentes**, qu'il peut faire avec d'autres atomes de carbone (formant des chaînes, des cycles, des branches) ou avec d'autres éléments (H, O, N, S, P principalement). Cette capacité de **chaîner avec soi-même** tout en formant des structures **tridimensionnelles complexes** est unique parmi les éléments légers — le silicium en théorie aussi, mais moins efficacement. Elle explique pourquoi la chimie organique compte plusieurs millions de molécules connues, et pourquoi la vie est carbonée.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Atome',
      definition: `Plus petite quantité d'un **élément chimique** qui en conserve les propriétés. Structure d'un **noyau** central (protons et neutrons) entouré d'**électrons** occupant des orbitales quantifiées. Diamètre de l'ordre de 10⁻¹⁰ m, dont 99,9 % de vide.`
    },
    {
      terme: 'Numéro atomique (Z)',
      definition: `**Nombre de protons** dans le noyau d'un atome. C'est lui — et lui seul — qui définit l'identité d'un élément. 1 = hydrogène, 6 = carbone, 26 = fer, 92 = uranium. Sert d'ordre de lecture du tableau périodique.`
    },
    {
      terme: 'Isotope',
      definition: `Variante d'un élément ayant le **même nombre de protons** (donc même identité chimique) mais un **nombre de neutrons différent**, donc une masse différente. Carbone-12 et carbone-14 sont deux isotopes du carbone, le second étant radioactif (demi-vie 5 730 ans, base de la datation archéologique).`
    },
    {
      terme: 'Tableau périodique',
      definition: `Classification des **118 éléments chimiques** par numéro atomique Z croissant, organisée en lignes (**périodes**) et colonnes (**groupes**). Publiée en **1869** par *Dimitri Mendeleïev*. La périodicité reflète le remplissage régulier des couches électroniques externes.`
    },
    {
      terme: 'Règle de l\'octet',
      definition: `Tendance d'un atome à acquérir une couche externe contenant **huit électrons** (deux pour l'hydrogène et l'hélium) pour atteindre la stabilité chimique des gaz nobles. Cause profonde de toute la chimie : la formation des liaisons obéit à cette recherche d'octet.`
    },
    {
      terme: 'Liaison covalente',
      definition: `Liaison où deux atomes **partagent une paire d'électrons** pour saturer leurs couches externes. Forte, directionnelle, fondement de la chimie organique. Construit l'eau, le méthane, le glucose, les protéines, l'ADN (voir [[adn-genetique]]).`
    },
    {
      terme: 'Liaison ionique',
      definition: `Liaison où un atome **donne** un électron à un autre, formant deux **ions** de charges opposées qui s'attirent. Construit les sels (NaCl, KCl). Solubles dans l'eau, conducteurs en solution.`
    },
    {
      terme: 'Gaz nobles',
      definition: `Famille d'éléments occupant la **colonne 18** du tableau périodique (hélium, néon, argon, krypton, xénon, radon). Leur couche externe est **saturée**, donc ils ne forment quasiment aucune molécule. Modèle de stabilité que tous les autres atomes cherchent à imiter par leurs liaisons.`
    },
    {
      terme: 'Orbitale',
      definition: `Volume tridimensionnel autour du noyau où la **probabilité de présence d'un électron** est concentrée. Formes héritées de la [[mecanique-quantique]] : sphérique (orbitale *s*), en haltère (*p*), en quadrilobes (*d*). Chaque orbitale contient au plus deux électrons.`
    },
    {
      terme: 'Mendeleïev',
      definition: `Chimiste russe (1834-1907), professeur à Saint-Pétersbourg. Publie en **1869** le premier tableau périodique des éléments en les classant par masse et propriétés. Son génie : laisser des cases vides pour des éléments inconnus dont il prédit les propriétés — tous découverts dans les vingt années suivantes.`
    }
  ]

});
