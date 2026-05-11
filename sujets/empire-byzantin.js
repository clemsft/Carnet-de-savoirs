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
    lie_a: ['empire-mongol', 'empire-ottoman'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
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
      type: 'encadre',
      label: 'Théodora',
      contenu_md: 'Justinien règne avec sa femme, **Théodora**, ancienne actrice et fille d\'un montreur d\'ours du cirque — un mariage scandaleux pour l\'époque. En **532**, lors de la sédition Nika qui menace de renverser le couple impérial, Justinien songe à fuir. C\'est Théodora qui le retient, par un discours resté célèbre : *« la pourpre est un beau linceul »*. Le règne est sauvé. La place des femmes dans le pouvoir byzantin restera, plusieurs fois, déterminante.'
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
        'Constantin Iᵉʳ fonde Constantinople (330)',
        'Apogée sous Justinien et construction de Sainte-Sophie (527-537)',
        'Grand Schisme entre catholiques et orthodoxes (1054)',
        'Sac de Constantinople par les croisés (1204)',
        'Chute de Constantinople, prise par Mehmet II (1453)'
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
  ]

});
