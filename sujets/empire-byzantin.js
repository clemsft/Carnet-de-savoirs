/* ===================================================================
   SUJET — L'Empire byzantin
   ===================================================================
   Mille ans de Rome après Rome.
   Domaine : Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'empire-byzantin',
    titre: 'L\'<em>Empire byzantin</em>',
    domaines: ['Histoire'],
    tags: ['rome', 'constantinople', 'moyen âge', 'orthodoxie', 'justinien'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['empire-mongol', 'empire-ottoman', 'cathedrales-gothiques'],
    date_creation: '2026-05-10',
    date_maj: '2026-08-18'
  },

  resume: 'Mille cent vingt-trois ans après sa fondation, l\'Empire romain ne s\'est pas effondré : il a continué en Orient, sous une autre forme. Comprendre comment Rome a survécu à Rome, et pourquoi l\'année 1453 reste un seuil dans l\'histoire mondiale.',

  points_cles: [
    'L\'Empire byzantin est la **continuation directe** de l\'Empire romain dans sa partie orientale, après la chute de Rome en 476.',
    'Sa capitale, **Constantinople** (l\'actuelle Istanbul), fut fondée par **Constantin Iᵉʳ** en **330** sur le site de l\'antique Byzance.',
    'L\'apogée se situe sous **Justinien Iᵉʳ** (527-565) : reconquête partielle de l\'Italie et de l\'Afrique, **Sainte-Sophie**, codification du droit romain.',
    'En 1054, le **Grand Schisme** sépare durablement les Églises chrétiennes d\'**Orient** (orthodoxe) et d\'**Occident** (catholique).',
    'Le sac de Constantinople par les croisés en **1204** affaiblit l\'empire de manière irréversible.',
    'Constantinople tombe le **29 mai 1453** sous les coups de **Mehmet II** : 1 123 ans après sa fondation, l\'Empire romain disparaît définitivement.',
    'L\'héritage byzantin est immense : droit, liturgie orthodoxe, architecture, transmission des textes grecs vers la **Renaissance** italienne.'
  ],

  carte_mentale: {
    central: 'byzance',
    noeuds: [
      { id: 'byzance', label: 'Empire byzantin', description: '330-1453. Continuation orientale de Rome.' },
      { id: 'fondation', label: 'Fondation', description: 'Constantin Iᵉʳ inaugure Constantinople en 330. Une nouvelle Rome chrétienne.' },
      { id: 'apogee', label: 'Apogée justinienne', description: 'Justinien (527-565) : reconquête, codification du droit, Sainte-Sophie.' },
      { id: 'religion', label: 'Christianisme orthodoxe', description: 'L\'empire est foncièrement chrétien. Le **basileus** est lieutenant de Dieu sur Terre.' },
      { id: 'menaces', label: 'Menaces récurrentes', description: 'Perses, Arabes, Bulgares, Turcs, Croisés latins : l\'empire combat sur tous les fronts pendant un millénaire.' },
      { id: 'declin', label: 'Déclin', description: 'Sac de 1204 par les croisés, puis grignotage par les Ottomans. L\'empire se réduit à une cité-État.' },
      { id: 'chute', label: 'Chute de 1453', description: 'Constantinople tombe sous les canons de Mehmet II. Fin de l\'Empire romain, 1 123 ans après la fondation de Constantinople.' },
      { id: 'heritage', label: 'Héritage', description: 'Droit, art religieux, transmission du grec, modèle de l\'orthodoxie russe.' },

      // Sous-niveau apogée
      { id: 'justinien', label: 'Justinien', description: 'Empereur (527-565). Couronné par sa femme **Théodora**, ancienne actrice qui le sauve lors de la sédition Nika en 532.', parent: 'apogee' },
      { id: 'ste-sophie', label: 'Sainte-Sophie', description: 'Cathédrale construite **532-537**. Coupole de 31 m, prouesse architecturale inégalée pendant mille ans.', parent: 'apogee' },
      { id: 'corpus', label: 'Corpus juris civilis', description: 'Codification monumentale du droit romain. Base juridique de la plupart des systèmes européens modernes.', parent: 'apogee' },

      // Sous-niveau menaces
      { id: 'feu-gregeois', label: 'Feu grégeois', description: 'Arme secrète byzantine. Liquide incendiaire qui brûle sur l\'eau. **Détruit deux fois** la flotte arabe assiégeant Constantinople (674-678 et 717-718).', parent: 'menaces' },
      { id: 'sac-1204', label: 'Sac de 1204', description: 'Les croisés latins, détournés par Venise, prennent et pillent Constantinople. **L\'empire ne s\'en relèvera jamais vraiment**.', parent: 'menaces' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'La <em>Rome</em> qui ne tomba pas',
      contenu_md:
`En **476** après J.-C., un chef barbare nommé Odoacre dépose le dernier empereur romain d\'Occident, un adolescent au nom dérisoire de Romulus Augustule. La date est devenue synonyme de la « chute de Rome » dans la mémoire occidentale.

Mais l\'Empire romain ne tombe pas, en réalité, en 476. **L\'autre moitié** — l\'Empire d\'Orient — continue. Sa capitale, Constantinople, n\'a même pas été touchée. Pour ses contemporains, l\'Empire romain existe toujours. Il faudra attendre les **historiens du XVIᵉ siècle** pour qu\'on lui invente un nom rétrospectif, *byzantin*, du nom antique de la cité où il a son siège.

Cet empire « byzantin » va survivre encore **mille ans**. Il développera sa propre identité — **grecque**, **chrétienne orthodoxe**, **romaine** par filiation — et sera le **rempart oriental** de l\'Europe contre les invasions venues d\'Asie pendant tout le Moyen Âge.`
    },

    {
      type: 'encadre',
      label: 'Une question de nom',
      contenu_md: 'Les habitants de cet empire ne se sont **jamais** appelés « byzantins ». Ils se nommaient eux-mêmes [Romaioi]{accent} — Romains. La pertinence historique est claire : ils étaient les héritiers institutionnels directs de Rome. C\'est l\'historiographie occidentale tardive qui leur a imposé un autre nom, en partie pour ne pas reconnaître la concurrence d\'une autre Rome.'
    },

    {
      type: 'texte',
      titre: 'Constantinople, <em>nouvelle Rome</em>',
      contenu_md:
`Le **11 mai 330**, l\'empereur **Constantin Iᵉʳ** inaugure une nouvelle capitale. Il l\'a fait construire sur le site de l\'antique Byzance, à un emplacement stratégique exceptionnel : le **Bosphore**, étroit verrou maritime entre la mer Noire et la Méditerranée, et entre l\'Europe et l\'Asie.

La ville est protégée sur **trois côtés par la mer**, et sera dotée du quatrième côté — face à la terre — d\'une triple ligne de remparts colossaux, les **murs théodosiens**, achevés en 413, qui résisteront à tous les assauts pendant **mille ans**.

Constantinople devient à la fois la plus grande ville d\'Europe (jusqu\'à **500 000 habitants** au VIᵉ siècle, sans équivalent en Occident jusqu\'à la Renaissance), un carrefour commercial majeur entre Orient et Occident, et le centre intellectuel du christianisme orthodoxe.`
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Cliquez sur chaque élément des murailles',
      params: {
        image: 'data:image/png;base64,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',
        legende: 'Coupe schématique des murailles théodosiennes de Constantinople (échelle non respectée).',
        hotspots: [
          { x: 16.2, y: 84.3, label: 'Le fossé', description: 'Environ 20 mètres de large et 7 de profondeur, pouvant être mis en eau. Première ligne : y amener des machines de siège est déjà un exploit.' },
          { x: 39.7, y: 67.2, label: 'Le mur extérieur', description: '~8 mètres, garni de tours. Les assaillants qui le franchissent se retrouvent piégés dans un couloir à découvert.' },
          { x: 51.4, y: 77.6, label: 'Le péribole', description: 'Le terrain entre les deux murs : une zone de tir parfaite pour les défenseurs du grand mur, une nasse pour les attaquants.' },
          { x: 65.0, y: 57.7, label: 'Le mur intérieur', description: '~12 mètres de haut, 5 d\'épaisseur. Tant qu\'il tient, la ville tient : il ne cédera qu\'en 1453, sous l\'artillerie ottomane.' },
          { x: 80.1, y: 50.1, label: 'Les tours', description: 'Jusqu\'à 20 mètres de haut, assez larges pour porter des machines de jet. Signaux, réserves, casernements.' }
        ]
      }
    },

    {
      type: 'widget',
      titre: 'Les grandes étapes en bref',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '330', titre: 'Fondation de Constantinople', description: 'Constantin Iᵉʳ inaugure la nouvelle capitale impériale, première grande cité christianisée.' },
          { date: '395', titre: 'Division définitive de l\'Empire', description: 'À la mort de Théodose, l\'Empire est partagé entre ses deux fils. La séparation Orient-Occident devient irréversible.' },
          { date: '527-565', titre: 'Règne de Justinien', description: 'Apogée. Reconquête partielle de l\'**Italie**, de l\'**Afrique du Nord** et du sud de l\'**Espagne**. Édification de Sainte-Sophie. Codification du droit romain.' },
          { date: '1054', titre: 'Grand Schisme', description: 'Excommunications réciproques entre le pape de Rome et le patriarche de Constantinople. Séparation définitive entre catholicisme et **orthodoxie**.' },
          { date: '1204', titre: 'Sac de Constantinople par les croisés', description: 'La Quatrième croisade, détournée par les Vénitiens, prend et pille la ville chrétienne. **Choc moral et matériel** dont l\'empire ne se remettra jamais.' },
          { date: '1261', titre: 'Restauration', description: 'Les Byzantins reprennent leur capitale, mais l\'empire est désormais réduit, affaibli, sans ses anciennes provinces.' },
          { date: '29 mai 1453', titre: 'Chute de Constantinople', description: 'Mehmet II prend la ville après un siège de **deux mois**. L\'empereur **Constantin XI** meurt au combat. Sainte-Sophie devient mosquée.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>siècle d\'or</em> de Justinien',
      contenu_md:
`Si l\'Empire byzantin a un apogée incontesté, c\'est sous **Justinien Iᵉʳ** (527-565). Cet empereur d\'origine modeste, monté au pouvoir grâce à son oncle, est animé d\'un projet politique radical : **restaurer l\'Empire romain dans son intégralité**.

Avec son général **Bélisaire**, il reconquiert l\'**Afrique du Nord** (533-534, vandales défaits), l\'**Italie** (entre 535 et 554, après une guerre épuisante contre les Ostrogoths), et une partie du sud de l\'**Espagne**. Pour un temps, la Méditerranée redevient un lac romain.

En parallèle, Justinien fait construire **Sainte-Sophie** (532-537) — un édifice à la coupole stupéfiante de **31 mètres**, qui restera la plus grande cathédrale chrétienne pendant **mille ans** et demeure aujourd\'hui l\'un des sommets de l\'architecture mondiale.

Et surtout, il fait codifier l\'ensemble du droit romain dans le **Corpus juris civilis** — somme monumentale qui sera le fondement juridique de l\'Europe entière jusqu\'à l\'époque moderne.`
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Sainte-Sophie, le chef-d\'œuvre de Justinien',
      params: {
        image: 'images/empire-byzantin--sainte-sophie.jpg',
        legende: 'Sainte-Sophie, consacrée en 537 : la plus grande coupole du monde pendant près d\'un millénaire. « Salomon, je t\'ai surpassé », aurait dit Justinien. (Photo Wikimedia Commons, licence Creative Commons — crédit selon le fichier)',
        hotspots: []
      }
    },

    {
      type: 'encadre',
      label: 'Théodora',
      contenu_md: 'Justinien règne avec sa femme, **Théodora**, ancienne actrice et fille d\'un montreur d\'ours du cirque — un mariage scandaleux pour l\'époque. En **532**, lors de la sédition Nika qui menace de renverser le couple impérial, Justinien songe à fuir. C\'est Théodora qui le retient, par un discours resté célèbre : *« la pourpre est un beau linceul »*. Le règne est sauvé. La place des femmes dans le pouvoir byzantin restera, plusieurs fois, déterminante.'
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Justinien en majesté',
      params: {
        image: 'images/empire-byzantin--justinien-mosaique.jpg',
        legende: 'Justinien entouré de sa cour, mosaïque de Saint-Vital de Ravenne (vers 547) : l\'image officielle du pouvoir byzantin en Occident. (Domaine public)',
        hotspots: []
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>menaces</em> permanentes',
      contenu_md:
`L\'Empire byzantin passe son existence à se défendre. Sa position centrale — entre Europe, Asie et Afrique — l\'expose à toutes les invasions et à toutes les ambitions.

Au VIIᵉ siècle, les **Arabes** déferlent et lui arrachent l\'Égypte, la Syrie, l\'Afrique du Nord. Constantinople elle-même est assiégée à deux reprises (674-678, puis 717-718) — et sauvée à chaque fois grâce à une arme terrifiante : le [feu grégeois]{accent}, liquide incendiaire qui **brûle même sur l\'eau** et que les Byzantins gardent jalousement secret. Sa formule exacte n\'est, à ce jour, toujours pas connue.

Aux VIIIᵉ-Xᵉ siècles, ce sont les **Bulgares** dans les Balkans, puis les **Turcs seldjoukides** qui prennent l\'Anatolie après le désastre de **Manzikert (1071)** — la **principale cause** du long déclin militaire byzantin.

Mais le coup le plus traumatisant viendra des **chrétiens occidentaux** eux-mêmes.`
    },

    {
      type: 'widget',
      titre: 'Quatre piliers de la civilisation byzantine',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: 'Le droit romain',
            description: 'Le **Corpus juris civilis** de Justinien est la plus grande synthèse juridique du monde antique. Il influencera profondément le droit civil européen, du Code Napoléon au droit allemand moderne.'
          },
          {
            titre: 'L\'art religieux',
            description: 'Mosaïques d\'or, **icônes**, architecture à coupole. Sainte-Sophie est l\'archétype d\'un style qui rayonnera jusqu\'à Venise, Moscou et Kiev. La querelle des [icônes]{accent} (VIIIᵉ-IXᵉ siècle) marque la pensée orthodoxe pour mille ans.'
          },
          {
            titre: 'La diplomatie',
            description: 'Les Byzantins inventent la **diplomatie moderne** — réseaux d\'ambassadeurs permanents, manipulation des barbares, alliances de revers, mariages princiers. Préférer la ruse à la guerre, quand on peut.'
          },
          {
            titre: 'La transmission du grec',
            description: 'Pendant que l\'Occident perd l\'usage du grec, **Byzance le préserve**. Aristote, Platon, Euclide, Archimède — leurs textes survivent grâce aux moines byzantins. Leur fuite vers l\'Italie aux XIVᵉ-XVᵉ siècles allumera la **Renaissance**.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>sac</em> de 1204',
      contenu_md:
`En **1204**, la Quatrième croisade est en route pour la Terre sainte. Mais les croisés sont endettés auprès des **Vénitiens**, qui leur ont fourni la flotte. Ces derniers, qui voient en Byzance un rival commercial gênant, **détournent la croisade vers Constantinople**.

Sous le prétexte d\'une querelle de succession au trône byzantin, l\'armée croisée prend et **pille** la plus grande cité chrétienne du monde. Pendant trois jours, les chevaliers chrétiens massacrent, violent, brûlent. Sainte-Sophie est saccagée — une prostituée est même installée sur le trône du patriarche pendant les fêtes. Les **trésors** byzantins (reliques, mosaïques, sculptures antiques) sont expédiés vers l\'Occident — beaucoup ornent encore aujourd\'hui Saint-Marc de Venise.

L\'empire est démantelé en plusieurs fragments dirigés par des seigneurs latins. Il sera **restauré en 1261**, mais ne retrouvera jamais sa puissance d\'avant. C\'est à partir de cette **fracture** que le déclin devient irréversible.`
    },

    {
      type: 'texte',
      titre: 'Le <em>29 mai 1453</em>',
      contenu_md:
`Au milieu du XVᵉ siècle, l\'Empire byzantin n\'est plus que l\'ombre de lui-même : Constantinople, le Péloponnèse, et quelques rivages égéens. Tout autour, l\'**Empire ottoman** (voir [[empire-ottoman]]) est devenu la grande puissance régionale.

En **avril 1453**, le sultan **Mehmet II**, âgé de 21 ans, met le siège devant Constantinople avec **80 000 à 100 000 hommes** et une flotte de plus de 120 navires. Face à eux, l\'empereur **Constantin XI Paléologue** ne peut aligner qu\'environ **7 000 défenseurs** — dont à peine 5 000 Grecs et quelques contingents italiens.

L\'arme décisive est l\'**artillerie** : Mehmet II a fait fondre des canons gigantesques, dont une bombarde de **8 mètres** qui peut percer les murs théodosiens — invincibles depuis mille ans. Après deux mois de siège acharné, dans la nuit du 28 au 29 mai 1453, les Ottomans donnent l\'assaut final. Constantin XI meurt au combat, l\'épée à la main, sans qu\'on retrouve jamais son corps.

Mehmet II entre dans la ville et y prie à Sainte-Sophie, désormais **convertie en mosquée**. Il fait de Constantinople — qu\'il rebaptisera plus tard **Istanbul** — sa capitale.`
    },

    {
      type: 'encadre',
      label: 'Une fin du Moyen Âge ?',
      contenu_md: 'L\'historien Jules Michelet a popularisé l\'idée que la chute de Constantinople en 1453 marque la **fin du Moyen Âge** et le début de la **Renaissance**. La thèse est aujourd\'hui nuancée — la Renaissance avait commencé plus tôt en Italie — mais l\'événement reste un seuil : fin de l\'Empire romain (1 123 ans après la fondation de Constantinople), accélération de la fuite des **savants grecs** vers l\'Italie avec leurs manuscrits, début de l\'**âge des grandes découvertes** (les Européens cherchant des routes alternatives vers l\'Orient maintenant fermé). 1453 est l\'une de ces rares **dates-pivot** qui réorientent réellement l\'histoire mondiale.'
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Les habitants de l\'Empire byzantin s\'appelaient eux-mêmes "byzantins".',
      reponse: false,
      explication: 'Faux. Ils se nommaient eux-mêmes "Romaioi" — Romains. Le terme "byzantin" est une invention rétrospective de l\'historiographie occidentale (à partir du XVIᵉ siècle), construite sur le nom de l\'antique Byzance, sur laquelle Constantinople a été bâtie.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces grandes dates byzantines dans l\'ordre chronologique :',
      items: [
        'Constantin Iᵉʳ fonde Constantinople',
        'Apogée sous Justinien et construction de Sainte-Sophie',
        'Grand Schisme entre catholiques et orthodoxes',
        'Sac de Constantinople par les croisés latins',
        'Chute de Constantinople, prise par Mehmet II'
      ],
      explication: 'Cinq dates pour mille ans : la fondation par Constantin (330), l\'apogée de Justinien et Sainte-Sophie (532-537), le schisme (1054), le sac latin qui amorce le déclin irréversible (1204), et la chute finale face à Mehmet II (29 mai 1453).'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète cette phrase sur la chute de Constantinople :',
      texte: 'En {1453}, {Mehmet II} prend Constantinople après un siège de {deux mois}, grâce à une artillerie de canons géants capables de percer les murs théodosiens.',
      explication: 'Mehmet II, alors âgé de 21 ans, met le siège en avril 1453 et prend la ville dans la nuit du 28 au 29 mai. Une bombarde de 8 mètres parvient à percer les remparts invincibles depuis mille ans.'
    },
    {
      q: 'Pourquoi parle-t-on d\'"Empire byzantin" alors que ses habitants se nommaient eux-mêmes Romains ?',
      options: [
        'Parce qu\'ils ont changé de nom au XᵉI siècle',
        'C\'est un terme inventé par les historiens occidentaux postérieurs, du nom antique de la cité (Byzance)',
        'Parce qu\'ils étaient grecs et non romains',
        'Parce que leur empereur portait le titre de "byzantin"'
      ],
      correcte: 1,
      explication: 'Pour eux-mêmes, ils étaient Romaioi — Romains. Le terme "byzantin" est une invention rétrospective de l\'historiographie occidentale (à partir du XVIᵉ siècle), construite sur le nom de l\'antique Byzance, sur laquelle Constantinople a été bâtie.'
    },
    {
      q: 'En quelle année Constantinople est-elle fondée par Constantin Iᵉʳ ?',
      options: ['313', '330', '395', '476'],
      correcte: 1,
      explication: 'L\'inauguration officielle a lieu le 11 mai 330. La date est l\'un des points de naissance possibles de l\'Empire byzantin.'
    },
    {
      q: 'Sous quel empereur l\'Empire byzantin a-t-il connu son apogée territoriale ?',
      options: [
        'Constantin Iᵉʳ',
        'Théodose',
        'Justinien Iᵉʳ',
        'Basile II'
      ],
      correcte: 2,
      explication: 'Justinien (527-565) reconquiert une partie de l\'Italie, l\'Afrique du Nord, le sud de l\'Espagne. Il fait aussi construire Sainte-Sophie et codifier le droit romain dans le Corpus juris civilis.'
    },
    {
      q: 'Qu\'est-ce que le "feu grégeois" ?',
      options: [
        'Un rite religieux byzantin',
        'Une arme incendiaire byzantine, qui brûlait même sur l\'eau, dont la formule exacte est encore inconnue',
        'Un type de canon ottoman',
        'Un signal lumineux entre forteresses'
      ],
      correcte: 1,
      explication: 'Liquide projeté par siphons sur les navires ennemis, il a sauvé Constantinople des sièges arabes (VIIᵉ-VIIIᵉ siècles). Sa composition exacte (probablement à base de naphte, soufre, salpêtre) reste un mystère, secret d\'État jalousement gardé.'
    },
    {
      q: 'Qu\'est-ce que le Grand Schisme de 1054 ?',
      options: [
        'Une guerre civile dans l\'Empire byzantin',
        'La séparation définitive entre l\'Église catholique romaine et l\'Église orthodoxe',
        'La perte de l\'Égypte',
        'L\'invasion de Constantinople par les Vikings'
      ],
      correcte: 1,
      explication: 'Excommunications réciproques entre le pape de Rome et le patriarche de Constantinople en 1054. Les divergences théologiques et politiques entre les deux Églises chrétiennes deviennent définitives — fracture qui dure encore aujourd\'hui.'
    },
    {
      q: 'Pourquoi le sac de Constantinople en 1204 est-il un tournant majeur dans l\'histoire byzantine ?',
      options: [
        'C\'est la première fois que la ville est prise',
        'Ce sont les Ottomans qui s\'en emparent',
        'Ce sont les croisés latins (chrétiens) qui pillent la plus grande cité chrétienne, et l\'empire ne s\'en relèvera jamais vraiment',
        'C\'est la fin de l\'Empire byzantin'
      ],
      correcte: 2,
      explication: 'La Quatrième croisade, détournée par les Vénitiens, prend et pille Constantinople en 1204. Choc moral et matériel : c\'est le début du déclin irréversible. L\'empire sera bien restauré en 1261, mais réduit et fragilisé.'
    },
    {
      q: 'Comment Mehmet II a-t-il finalement réussi à percer les murs théodosiens, invincibles depuis mille ans ?',
      options: [
        'Par la trahison d\'un défenseur',
        'En les contournant par mer',
        'Grâce à une artillerie de canons géants spécialement fondus pour le siège',
        'En affamant la ville pendant un an'
      ],
      correcte: 2,
      explication: 'Mehmet II a fait fondre des canons gigantesques, dont une bombarde de 8 mètres, capables d\'ébranler des murs jusque-là réputés invincibles. C\'est l\'avènement de l\'**artillerie de siège**, qui va transformer l\'art de la guerre en Europe.'
    },
    {
      q: 'Quelle est l\'une des conséquences culturelles majeures de la chute de Constantinople en 1453 ?',
      options: [
        'L\'invention de l\'imprimerie',
        'La fuite des savants grecs vers l\'Italie avec leurs manuscrits, qui nourrira la Renaissance',
        'L\'arrêt total des échanges commerciaux',
        'La conversion de l\'Europe à l\'islam'
      ],
      correcte: 1,
      explication: 'De nombreux érudits byzantins (Bessarion, Manuel Chrysoloras, etc.) émigrent en Italie, emportant des manuscrits grecs anciens (Platon, Aristote, etc.) qui alimentent la Renaissance italienne.'
    }
  ],

  vocabulaire: [
    {
      terme: 'Romaioi',
      definition: `Nom que se donnaient les habitants de l'Empire byzantin : **Romains**. Souligne leur conscience d'être les héritiers institutionnels directs de Rome, et non d'une civilisation distincte. Le terme « byzantin » est une invention occidentale tardive.`
    },
    {
      terme: 'Basileus',
      definition: `Titre du **souverain byzantin** à partir du VIIᵉ siècle, du grec ancien signifiant « roi ». Conçu comme [lieutenant de Dieu]{accent} sur terre, il cumule autorité politique et primauté religieuse au sein de l'Église orthodoxe.`
    },
    {
      terme: 'Corpus juris civilis',
      definition: `**Codification monumentale** du droit romain ordonnée par *Justinien* (529-534). Synthèse de mille ans de jurisprudence, elle est la base du droit civil européen moderne — du Code Napoléon aux droits germaniques.`
    },
    {
      terme: 'Sainte-Sophie',
      definition: `Cathédrale de Constantinople bâtie par Justinien (**532-537**). Sa coupole de 31 m fut une prouesse architecturale **inégalée pendant mille ans**. Devenue mosquée en 1453, musée en 1934, à nouveau mosquée en 2020.`
    },
    {
      terme: 'Feu grégeois',
      definition: `Arme incendiaire byzantine, liquide projeté par siphons qui **brûlait même sur l'eau**. Sauva deux fois Constantinople des sièges arabes (VIIᵉ-VIIIᵉ s.). Sa **formule exacte** demeure inconnue à ce jour — secret d'État jalousement gardé.`
    },
    {
      terme: 'Grand Schisme',
      definition: `Rupture de **1054** entre le pape de Rome et le patriarche de Constantinople, par excommunications réciproques. Sépare durablement le christianisme **catholique** d'Occident et **orthodoxe** d'Orient — fracture toujours active aujourd'hui.`
    },
    {
      terme: 'Iconoclasme',
      definition: `Crise religieuse byzantine (**726-843**) opposant les partisans des images saintes (**icônes**) à ceux qui les considéraient comme idolâtres. La victoire des iconodoules a fixé pour mille ans la centralité de l'icône dans la liturgie orthodoxe.`
    },
    {
      terme: 'Manzikert',
      definition: `Bataille de **1071** en Anatolie orientale où l'empereur Romain IV est défait et capturé par les **Turcs seldjoukides**. Ouvre l'Anatolie aux Turcs, prive Byzance de son principal réservoir de soldats et d'impôts. Tournant militaire majeur.`
    },
    {
      terme: 'Quatrième croisade',
      definition: `Expédition de 1202-1204 partie pour la Terre sainte mais **détournée** par les Vénitiens vers Constantinople, qu'elle pille en 1204. Trahison fondatrice qui démantèle l'empire et accentue durablement le fossé entre chrétiens d'Orient et d'Occident.`
    },
    {
      terme: 'Murs théodosiens',
      definition: `Triple ligne de **remparts** terrestres édifiée à Constantinople au début du Vᵉ siècle sous *Théodose II*. Résistent à tous les assauts pendant un millénaire — jusqu'à l'**artillerie** de Mehmet II en 1453, qui les rend obsolètes.`
    }
  ]

});
