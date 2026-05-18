/* ===================================================================
   SUJET — Les grandes religions du monde
   ===================================================================
   Panorama comparatif des cinq grandes religions vivantes, leurs
   origines, leurs textes et leurs cartes contemporaines.
   Domaine : Religions
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'religions-du-monde',
    titre: 'Les grandes <em>religions</em> du monde',
    domaines: ['Religions'],
    tags: ['christianisme', 'islam', 'hindouisme', 'bouddhisme', 'judaisme', 'monotheisme', 'spiritualite'],
    difficulte: 2,
    duree_estimee_min: 40,
    prerequis: [],
    lie_a: ['stoicisme', 'route-de-la-soie', 'empire-byzantin'],
    date_creation: '2026-05-17',
    date_maj: '2026-05-17'
  },

  resume: `Comprendre les cinq grandes traditions religieuses encore pratiquées aujourd'hui — christianisme, islam, hindouisme, bouddhisme, judaïsme — à travers leurs origines historiques, leurs textes fondateurs, leurs principes structurants et la carte démographique qu'elles dessinent au XXIᵉ siècle.`,

  points_cles: [
    `Cinq grandes religions concentrent **plus de 75 %** de l'humanité contemporaine : **christianisme** (~2,4 Md de fidèles), **islam** (~1,9 Md), **hindouisme** (~1,2 Md), **bouddhisme** (~500 M), **judaïsme** (~15 M).`,
    `Le **judaïsme** apparaît vers **-1500 à -1200 av. J.-C.** dans le Proche-Orient ancien. Premier **monothéisme** structuré : un seul Dieu, l'**Alliance** avec Abraham, la **Torah** comme texte fondateur. Tronc commun du christianisme et de l'islam.`,
    `L'**hindouisme** émerge progressivement entre **-1500 et -500** dans le sous-continent indien autour des **Védas**, un corpus de textes sanskrits. Non monothéiste (panthéon riche, mais souvent vu comme **manifestations d'un absolu unique**, le *brahman*). Cycle des **réincarnations** (*samsara*), libération (*moksha*).`,
    `Le **bouddhisme** est fondé par **Siddhartha Gautama** (le Bouddha), né au Népal vers **-563 et mort vers -483**. Pas de dieu créateur. Quatre **nobles vérités** sur la souffrance et son extinction. Diffusé sur la [[route-de-la-soie]] vers la Chine, le Japon, le Tibet.`,
    `Le **christianisme** naît au Iᵉʳ siècle dans la Palestine romaine autour de la figure de **Jésus de Nazareth** (~-4 à ~30) — juif réformateur que ses disciples confessent comme *Messie* et fils de Dieu. Devient religion d'État de l'Empire romain en **380** (édit de Thessalonique). Voir [[empire-byzantin]].`,
    `L'**islam** est fondé par le prophète **Mahomet** (~570-632) en Arabie. Texte central : le **Coran**, reçu en révélations sur 23 ans. **Cinq piliers** structurants. Expansion fulgurante : en un siècle, califats du Maroc à l'Indus. Sunnites (~85 %) et chiites (~15 %), schisme dès le VIIᵉ siècle.`,
    `Trois grandes familles spirituelles non-religieuses se sont historiquement constituées en parallèle : la **sagesse grecque** (cf. [[stoicisme]]), le **confucianisme** chinois (éthique sociale et rituelle, non théiste), le **taoïsme** (philosophie de la voie naturelle). Souvent classées comme religions par convention bien qu'elles n'aient pas de dieu.`,
    `Au XXIᵉ siècle, **environ 16 % de l'humanité** se déclare sans religion (athée, agnostique, ou simplement non-affiliée) — chiffre en croissance rapide dans le monde occidental et en Chine, stable ou en recul ailleurs.`
  ],

  carte_mentale: {
    central: 'religions',
    noeuds: [
      { id: 'religions', label: 'Religions', description: 'Cinq grandes traditions vivantes concentrent les trois quarts de l\'humanité. Leurs questions communes : que devient-on après la mort, comment vivre, à quoi appartient-on.' },

      { id: 'monotheismes', label: 'Trois monothéismes', description: 'Judaïsme, christianisme, islam. Tronc commun abrahamique : un Dieu unique, créateur, qui se révèle dans l\'histoire à travers des prophètes et des textes.' },
      { id: 'indien', label: 'Traditions indiennes', description: 'Hindouisme et bouddhisme. Cycle des réincarnations, recherche d\'une libération. Très différentes des monothéismes dans leur structure métaphysique.' },
      { id: 'extreme-orient', label: 'Extrême-Orient', description: 'Confucianisme, taoïsme, shintoïsme. Souvent appelées religions par convention bien qu\'elles ressemblent plus à des sagesses ou systèmes ritualisés.' },
      { id: 'questions', label: 'Questions communes', description: 'Origine du monde, sens de la souffrance, sort après la mort, fondements de la morale, rituel et communauté. Toutes les religions répondent à ces cinq familles.' },
      { id: 'carte-mondiale', label: 'Carte mondiale', description: 'Répartition contemporaine : Amériques et Europe à dominante chrétienne, Afrique partagée chrétienne/musulmane, monde arabe et Asie centrale musulmans, Inde hindouiste, Extrême-Orient bouddhiste-confucéen, Israël juif. 16 % sans religion.' },

      // Monothéismes
      { id: 'judaisme', label: 'Judaïsme', description: '**Vers -1500 à -1200**. Premier monothéisme structuré. **Torah** (les 5 premiers livres de la Bible), **Talmud** (commentaires). Peuple de l\'Alliance avec Dieu. ~15 millions de fidèles.', parent: 'monotheismes' },
      { id: 'christianisme', label: 'Christianisme', description: '**Iᵉʳ siècle**. Naît du judaïsme autour de **Jésus de Nazareth**. Trois grandes branches : catholiques (~1,3 Md), protestants (~900 M), orthodoxes (~220 M). **2,4 milliards** de fidèles au total.', parent: 'monotheismes' },
      { id: 'islam', label: 'Islam', description: '**VIIᵉ siècle**. Fondé par **Mahomet** (~570-632). **Coran** comme texte révélé. Sunnites (~85 %) et chiites (~15 %). **1,9 milliard** de fidèles, deuxième religion mondiale.', parent: 'monotheismes' },

      // Traditions indiennes
      { id: 'hindouisme', label: 'Hindouisme', description: '**Vers -1500**. Pas de fondateur unique. **Védas**, **Upanishads**, **Bhagavad-Gita**. *Samsara* (réincarnation), *karma*, *moksha* (libération). Trimurti : Brahma, Vishnu, Shiva. **1,2 milliard** de fidèles, principalement en Inde.', parent: 'indien' },
      { id: 'bouddhisme', label: 'Bouddhisme', description: '**Vers -500**. Fondé par **Siddhartha Gautama**, le Bouddha. **Quatre nobles vérités** sur la souffrance. Pas de Dieu. *Nirvana* = extinction du désir. Theravada (Sud-Est asiatique), Mahayana (Asie de l\'Est), Vajrayana (Tibet). **~500 millions**.', parent: 'indien' },

      // Extrême-Orient
      { id: 'confucianisme', label: 'Confucianisme', description: '**Vers -500**. Fondé par **Confucius** (-551, -479). Éthique de la relation, du rite, de la mesure. Non théiste. Structure la pensée chinoise et est-asiatique pendant 2 500 ans.', parent: 'extreme-orient' },
      { id: 'taoisme', label: 'Taoïsme', description: '**Vers -500**. Fondé par **Lao-Tseu** (figure semi-légendaire). *Tao* = la voie, le principe naturel. *Wu wei* = non-agir. Influence l\'art, la médecine, la calligraphie chinoises.', parent: 'extreme-orient' },

      // Questions communes
      { id: 'origine', label: 'Origine du monde', description: 'Création par Dieu (monothéismes), émanation cyclique d\'un absolu (hindouisme), pas de question (bouddhisme — peu importe), harmonie cosmique (taoïsme).', parent: 'questions' },
      { id: 'salut', label: 'Salut & libération', description: 'Vie éternelle au paradis (chrétiens, musulmans), résurrection au jour du jugement (juifs, chrétiens), *moksha* / sortie du cycle (hindous), *nirvana* (bouddhistes).', parent: 'questions' },
      { id: 'rituel', label: 'Rituel & communauté', description: 'Pratique commune autour de gestes répétés : prière, jeûne, pèlerinage, fête, sacrement. Plus que la croyance individuelle, le rituel fait la religion comme corps social.', parent: 'questions' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Cinq <em>traditions</em>, trois familles`,
      contenu_md:
`Comprendre les religions du monde aujourd'hui, c'est d'abord accepter qu'il n'en existe **pas une infinité** : à l'échelle planétaire, **cinq grandes traditions** concentrent l'écrasante majorité des fidèles, et celles-ci s'organisent en trois grandes familles cohérentes.

La première famille, celle des [monothéismes abrahamiques]{accent}, partage un tronc commun : un Dieu unique, créateur, qui se révèle dans l'histoire à travers des prophètes et des textes. Elle comprend le **judaïsme** (le plus ancien et le moins nombreux), le **christianisme** (la plus grande religion du monde par effectif), et l'**islam** (la deuxième). Ces trois religions, malgré leurs conflits historiques, partagent les patriarches (Abraham, Moïse), une géographie commune (le Proche-Orient), et une structure théologique proche.

La deuxième famille est celle des **traditions indiennes**, nées dans le sous-continent à partir du IIᵉ millénaire avant notre ère : l'**hindouisme** (sans fondateur unique, polymorphe), et le **bouddhisme** (qui en a partiellement émergé et s'en est détaché). Ces religions partagent l'idée de **réincarnations** (*samsara*), du *karma* (les actes ont des conséquences sur les vies futures), et d'une **libération** ultime comme objectif spirituel.

La troisième famille, celle de l'**Extrême-Orient**, comprend le **confucianisme**, le **taoïsme** et le **shintoïsme** japonais. Ces traditions sont moins "religieuses" au sens occidental du terme : peu de dogmes, pas toujours de divinité créatrice, mais des rituels collectifs structurants et une vision du monde fondée sur l'harmonie cosmique.

À cela s'ajoute, depuis le XIXᵉ siècle et surtout depuis 1950, une **quatrième catégorie démographique** non religieuse : athées, agnostiques, ou simplement non-affiliés. **Environ 16 % de l'humanité** se classe ainsi aujourd'hui — chiffre qui croît rapidement dans le monde occidental et en Chine.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      titre: 'Les grandes religions, chronologiquement',
      params: {
        evenements: [
          { date: '-1500', titre: 'Védas (Inde)', description: 'Composition orale des **Védas**, les plus anciens textes religieux indiens en sanskrit. Naissance progressive de l\'**hindouisme** comme tradition continue.' },
          { date: '-1300', titre: 'Moïse', description: 'Selon la tradition, **Moïse** reçoit la **Torah** au mont Sinaï. Naissance structurée du **judaïsme** comme premier monothéisme.' },
          { date: '-563', titre: 'Naissance du Bouddha', description: '**Siddhartha Gautama** naît à Lumbini (Népal actuel). Vers 35 ans, il atteint l\'éveil sous l\'arbre de la Bodhi à Bodh Gaya.' },
          { date: '-551', titre: 'Naissance de Confucius', description: '**Kong Fuzi** ("Maître Kong") naît dans l\'État de Lu (Chine). Fonde une éthique du rite et de la mesure qui structurera 2 500 ans de pensée chinoise.' },
          { date: '~30', titre: 'Crucifixion de Jésus', description: '**Jésus de Nazareth** est exécuté à Jérusalem par les autorités romaines. Ses disciples annoncent sa résurrection — événement fondateur du **christianisme**.' },
          { date: '380', titre: 'Christianisme religion d\'État', description: 'L\'empereur **Théodose** fait du christianisme la **religion officielle** de l\'Empire romain (édit de Thessalonique). Bascule majeure pour l\'histoire mondiale.' },
          { date: '610-632', titre: 'Révélation du Coran', description: '**Mahomet** reçoit les premières révélations à La Mecque, puis structure la communauté musulmane à Médine. Naissance de l\'**islam**.' },
          { date: '1054', titre: 'Schisme d\'Orient', description: 'Séparation entre les Églises latine (catholique, Rome) et grecque (orthodoxe, Constantinople). Voir [[empire-byzantin]].' },
          { date: '1517', titre: 'Luther et la Réforme', description: '**Martin Luther** affiche ses 95 thèses à Wittenberg. Naissance des Églises **protestantes** par scission du catholicisme.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>judaïsme</em>, premier monothéisme`,
      contenu_md:
`Le judaïsme est la plus ancienne des religions abrahamiques encore pratiquées. Sa structuration remonte au **deuxième millénaire avant notre ère** quelque part dans le Proche-Orient ancien — la datation précise reste discutée, mais les premières traces archéologiques d'un Israël distinct datent du XIIIᵉ siècle av. J.-C.

Sa **rupture fondamentale** avec les religions du temps est le **monothéisme strict** : *« Écoute, Israël, l'Éternel notre Dieu, l'Éternel est UN »* (Shema Israël, *Deutéronome* 6:4). Là où les Égyptiens, Babyloniens, Grecs avaient des panthéons hiérarchisés, Israël n'a qu'un seul Dieu, sans image, sans représentation possible. C'est ce qu'on appelle l'**aniconisme**.

Trois éléments structurent le judaïsme : la **Torah** (les cinq premiers livres de la Bible : Genèse, Exode, Lévitique, Nombres, Deutéronome), le **Talmud** (un immense corpus de commentaires rabbiniques composé entre le IIIᵉ et le VIᵉ siècle), et l'**Alliance** entre Dieu et le peuple — d'abord avec Abraham, puis Moïse, puis David. Cette dernière notion est centrale : le peuple juif n'est pas "élu" au sens d'une supériorité, mais "chargé" d'une responsabilité particulière vis-à-vis de Dieu.

Aujourd'hui, le judaïsme compte **environ 15 millions de fidèles**, dont la moitié vit en Israël (fondé en 1948) et l'autre moitié dans la diaspora — principalement aux États-Unis (~6 millions), en France (~450 000), en Argentine, au Royaume-Uni. Quatre grandes branches : **orthodoxe**, **conservateur** (massorti), **réformé** (libéral), et **reconstructionniste**.`
    },

    {
      type: 'texte',
      titre: `<em>Christianisme</em> et islam, deux fils du judaïsme`,
      contenu_md:
`Si le judaïsme est resté longtemps une religion ethnique, ses deux grandes descendances — le christianisme et l'islam — ont rapidement basculé vers l'**universalisme** : la prétention à s'adresser à tous les humains, indépendamment de leur lignée.

Le **christianisme** émerge au Iᵉʳ siècle dans la Palestine sous occupation romaine. **Jésus de Nazareth** (~-4 à ~30) est un juif galiléen, prédicateur charismatique, qui s'inscrit dans la tradition prophétique mais en la radicalisant : amour des ennemis, pardon, primauté de l'intériorité sur le rite, annonce d'un royaume des cieux imminent. Condamné par les autorités romaines pour des raisons politiques (l'agitation messianique de Jérusalem), il est crucifié vers l'an 30. **Trois jours plus tard**, ses disciples annoncent qu'il est ressuscité — événement qu'aucune religion antérieure n'avait formulé en ces termes pour son fondateur. La nouvelle religion se diffuse alors rapidement dans l'Empire romain, devient légale en **313** sous Constantin (édit de Milan), puis **religion d'État** en **380** sous Théodose.

L'**islam** naît six siècles plus tard, dans une Arabie restée tribale et polythéiste. **Mahomet** (~570-632), marchand de La Mecque, commence à recevoir vers l'an 610 ce qu'il identifie comme la **parole directe de Dieu** transmise par l'ange Gabriel. Ces révélations, étalées sur **23 ans**, seront ensuite compilées en un livre unique, le **Coran**. Mahomet fonde à Médine la première communauté musulmane (*oumma*) en **622** — date qui sert d'origine au calendrier islamique (*hégire*). En **un siècle après sa mort**, l'islam s'étend du Maroc à l'Indus. Ses cinq piliers — profession de foi (*shahada*), prière (*salat*), aumône (*zakat*), jeûne du ramadan (*sawm*), pèlerinage à La Mecque (*hadj*) — structurent la pratique quotidienne.

Le **schisme** sunnites/chiites apparaît dès la mort de Mahomet, sur la question de la succession. Les sunnites (~85 %) reconnaissent les califes élus ; les chiites (~15 %) considèrent que seuls les descendants directs du Prophète, à travers son cousin **Ali**, pouvaient légitimement gouverner la communauté.`
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      titre: 'Quatre figures fondatrices',
      params: {
        cartes: [
          { tag: '~-1300', titre: 'Moïse', description: 'Législateur du judaïsme. Reçoit la **Torah** au mont Sinaï selon la tradition. Conduit son peuple hors d\'Égypte. Figure historique partiellement attestée — l\'archéologie ne confirme pas le récit de l\'Exode tel quel.' },
          { tag: '~-563 à -483', titre: 'Bouddha', description: '**Siddhartha Gautama**. Prince népalais qui renonce à sa richesse à 29 ans face à la souffrance. Atteint l\'**éveil** sous l\'arbre de la Bodhi vers 35 ans. Enseigne 45 ans dans le bassin du Gange.' },
          { tag: '~-4 à 30', titre: 'Jésus de Nazareth', description: 'Juif galiléen, prédicateur itinérant. Crucifié par les autorités romaines vers 30. Ses disciples le confessent comme *Messie*, *Fils de Dieu*, *Christ*. Bien attesté historiquement.' },
          { tag: '~570-632', titre: 'Mahomet', description: 'Marchand mecquois. Reçoit vers 610 ce qu\'il identifie comme la parole directe de Dieu via l\'ange Gabriel. Fonde la communauté musulmane à Médine (622 = hégire). Meurt à Médine en 632.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Les <em>traditions indiennes</em>`,
      contenu_md:
`Avant même que les monothéismes ne se constituent au Proche-Orient, le **sous-continent indien** développe une famille de traditions religieuses radicalement différentes dans leur structure. Pas de dieu créateur unique. Pas de prophète historique fondateur (du moins pour l'hindouisme). Mais une vision **cyclique** du temps et de l'existence.

L'**hindouisme** n'est pas une religion au sens monothéiste : c'est une tradition continue de pratiques, de textes et de spéculations qui s'enchaînent depuis les **Védas** (~-1500) jusqu'à aujourd'hui, sans rupture institutionnelle. Le panthéon est vaste — **Brahma** (créateur), **Vishnu** (préservateur), **Shiva** (destructeur), plus des milliers de divinités locales —, mais la plupart des écoles philosophiques hindoues insistent : ces dieux sont des **manifestations** d'un absolu unique, le *brahman*, principe ultime de l'univers.

Le **bouddhisme** émerge vers -500 comme une **réforme** de cette tradition. Le Bouddha enseigne quatre **nobles vérités** : (1) la vie est marquée par la souffrance (*dukkha*) ; (2) cette souffrance a une cause, le désir (*tanha*) ; (3) on peut s'en libérer ; (4) la voie pour y parvenir est l'**octuple sentier** — compréhension juste, intention juste, parole juste, action juste, etc. Note remarquable : Bouddha ne se prétend pas dieu, ne nie pas l'existence des dieux mais affirme qu'ils sont **non pertinents** pour la libération. C'est une religion sans transcendance théologique.

Le bouddhisme essaime ensuite : **Theravada** (la voie ancienne) s'enracine au Sri Lanka, en Birmanie, Thaïlande, Cambodge ; **Mahayana** (le grand véhicule) gagne la Chine, le Japon, la Corée le long de la [[route-de-la-soie]] ; **Vajrayana** (le véhicule diamantin) se développe au Tibet à partir du VIIIᵉ siècle. Curiosité : le bouddhisme a **disparu d'Inde** vers le XIIᵉ siècle, où il avait pourtant pris naissance — réabsorbé par un hindouisme dynamique.`
    },

    {
      type: 'widget',
      composant: 'SelecteurValeurs',
      titre: 'Effectifs des grandes religions (XXIᵉ siècle)',
      params: {
        unite: 'fidèles',
        options: [
          { label: 'Christianisme', valeur: '2,4 Md', description: 'Première religion mondiale. Catholiques (~1,3 Md), protestants (~900 M), orthodoxes (~220 M). Présente partout, dominante en Amérique latine, Afrique sub-saharienne, Europe, Russie, États-Unis.' },
          { label: 'Islam', valeur: '1,9 Md', description: 'Deuxième religion mondiale, en croissance la plus rapide. Sunnites (~85 %) et chiites (~15 %). Du Maroc à l\'Indonésie, avec d\'importantes diasporas en Europe.' },
          { label: 'Hindouisme', valeur: '1,2 Md', description: 'Concentré à 95 % en Inde et au Népal. Diasporas notables au Royaume-Uni, aux États-Unis, en Afrique de l\'Est, en Indonésie (Bali).' },
          { label: 'Bouddhisme', valeur: '~500 M', description: 'Asie du Sud-Est (Thaïlande, Birmanie, Cambodge, Laos), Asie de l\'Est (Chine, Japon, Corée), Tibet, Bhoutan, Mongolie. En expansion en Occident comme spiritualité non religieuse.' },
          { label: 'Judaïsme', valeur: '~15 M', description: 'Très inégalement réparti : Israël (~7 M), États-Unis (~6 M), France (~450 000), Royaume-Uni, Argentine, Canada. Diaspora urbaine principalement.' },
          { label: 'Sans religion', valeur: '~1,2 Md', description: 'Athées, agnostiques, non-affiliés. En forte croissance dans le monde occidental et la Chine. ~16 % de l\'humanité. Classification statistique délicate : non-religieux ne signifie pas absence de spiritualité.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Le constat statistique',
      contenu_md: `Au XXIᵉ siècle, **environ 84 %** de l'humanité se déclare encore d'une affiliation religieuse. La sécularisation, longtemps présentée comme une trajectoire universelle inévitable, s'est en réalité concentrée sur le **monde occidental** (Europe, Amérique du Nord blanche) et la **Chine**. Dans le reste du monde — Afrique, Inde, monde arabe, Amérique latine — la pratique religieuse reste **majoritaire et en croissance démographique**. Le pari de Voltaire et Marx d'un effacement spontané du religieux ne s'est pas vérifié à l'échelle globale.`
    },

    {
      type: 'texte',
      titre: `<em>Cinq questions</em> que toute religion pose`,
      contenu_md:
`Au-delà des différences dogmatiques, toutes les religions répondent à un même ensemble de cinq grandes familles de questions. C'est ce qui justifie qu'on les regroupe sous une catégorie commune malgré la diversité de leurs réponses.

**(1) D'où vient le monde ?** — Création divine *ex nihilo* pour les monothéismes ; émanation cyclique d'un absolu pour l'hindouisme ; question non pertinente pour le bouddhisme (le Bouddha refusait d'y répondre) ; harmonie spontanée pour le taoïsme.

**(2) Que devient-on après la mort ?** — Vie éternelle au paradis ou en enfer pour les chrétiens et musulmans ; résurrection au jour du jugement pour juifs et chrétiens ; réincarnation jusqu'à la libération (*moksha* ou *nirvana*) pour hindous et bouddhistes ; continuation diffuse via les ancêtres pour la pensée chinoise classique.

**(3) Comment vivre ?** — Loi révélée (Torah, Bible, Coran) pour les monothéismes ; *dharma* (devoir propre à sa caste, son âge, son rôle) pour l'hindouisme ; octuple sentier pour le bouddhisme ; éthique du juste milieu et de la piété filiale pour le confucianisme.

**(4) À quoi appartient-on ?** — Peuple de l'Alliance pour le judaïsme ; Église comme corps mystique pour les chrétiens ; *oumma* (communauté universelle des musulmans) pour l'islam ; caste et lignée pour l'hindouisme ; *sangha* (communauté monastique) pour le bouddhisme.

**(5) Comment pratiquer ?** — C'est sans doute le plus universel : prière, jeûne, pèlerinage, fête, méditation, sacrement. Quelle que soit la religion, la pratique passe par **des gestes répétés** dans une communauté. Les sociologues notent souvent que le *rituel* fait davantage la religion vécue que la *croyance* individuelle.`
    },

    {
      type: 'widget',
      composant: 'ListeMethodes',
      titre: 'Quatre principes structurants comparés',
      params: {
        methodes: [
          { titre: 'Texte sacré', description: '**Torah** + Talmud pour le judaïsme. **Bible** (Ancien + Nouveau Testament) pour les chrétiens. **Coran** + Hadiths pour les musulmans. **Védas**, **Upanishads**, **Bhagavad-Gita** pour les hindous. **Tipitaka** (corbeille de l\'enseignement) pour le bouddhisme theravada.' },
          { titre: 'Lieu sacré', description: 'Mont Sion et Jérusalem pour les juifs. Jérusalem, Rome, Constantinople, Saint-Jacques pour les chrétiens. La Mecque et Médine pour les musulmans. Varanasi, le Gange pour les hindous. Bodh Gaya, Lhassa pour les bouddhistes.' },
          { titre: 'Calendrier rituel', description: 'Sabbat et grandes fêtes annuelles (Pessah, Roch Hachana, Yom Kippour) pour les juifs. Noël et Pâques pour les chrétiens. Ramadan et Aïd pour les musulmans. Diwali, Holi pour les hindous. Vesak (anniversaire du Bouddha) pour les bouddhistes.' },
          { titre: 'Pratique quotidienne', description: 'Prière trois fois par jour pour les juifs orthodoxes. Une à la maison + messes pour les chrétiens. **Cinq prières quotidiennes** pour les musulmans. Pratiques très variables pour les hindous (la *puja* à domicile). Méditation pour les bouddhistes engagés.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `La <em>carte mondiale</em> au XXIᵉ siècle`,
      contenu_md:
`Quand on superpose les cinq grandes religions sur une carte du monde, le résultat est à la fois clair et nuancé. Les **Amériques** sont à dominante chrétienne, mais l'Amérique latine est très majoritairement catholique pendant que les États-Unis sont protestants majoritaires (avec une catholicité importante). L'**Europe** reste nominalement chrétienne mais la pratique s'est effondrée — la France, l'Espagne, l'Allemagne sont des "pays chrétiens d'arrière-plan" où une majorité ne pratique pas. L'**Afrique** est partagée presque exactement en deux : moitié nord musulmane, moitié sud chrétienne, avec une démarcation qui suit en gros le 10ᵉ parallèle.

Le **Proche-Orient et l'Afrique du Nord** sont à dominante musulmane, l'islam ayant remplacé en quelques siècles le christianisme oriental (qui survit en minorités coptes, maronites, syriaques). L'**Asie centrale** est musulmane depuis le Moyen Âge. L'**Inde** est hindouiste à 80 % avec une importante minorité musulmane (~14 %, soit environ 200 millions de personnes — la deuxième plus grande population musulmane au monde après l'Indonésie). L'**Asie du Sud-Est** est partagée : bouddhiste (Thaïlande, Birmanie, Cambodge), musulmane (Indonésie, Malaisie), chrétienne (Philippines).

L'**Asie de l'Est** (Chine, Japon, Corée) est plus complexe : officiellement souvent non religieuse (la Chine est même officiellement athée comme État), mais imprégnée d'un fond confucéen, taoïste et bouddhiste où l'on participe à des rituels familiaux sans pour autant se définir comme "croyant". Au Japon coexistent le **shintoïsme** (religion traditionnelle) et le bouddhisme : la même personne peut se marier au shintoïste et être enterrée au bouddhiste, sans contradiction perçue.

Enfin, **Israël** est un cas singulier : seul État-nation construit autour d'une religion (le judaïsme) au XXᵉ siècle, dans le contexte spécifique de l'après-Shoah. Il abrite environ la moitié des juifs du monde.`
    }

  ],

  quiz: [
    {
      q: `Quelles sont les cinq plus grandes religions du monde par effectif de fidèles ?`,
      options: [
        `Christianisme, islam, hindouisme, bouddhisme, judaïsme`,
        `Christianisme, islam, judaïsme, bouddhisme, taoïsme`,
        `Catholicisme, islam sunnite, hindouisme, bouddhisme, christianisme orthodoxe`,
        `Christianisme, hindouisme, bouddhisme, sikhisme, judaïsme`
      ],
      correcte: 0,
      explication: `Par effectifs décroissants : **christianisme** (~2,4 milliards), **islam** (~1,9 milliard), **hindouisme** (~1,2 milliard), **bouddhisme** (~500 millions), **judaïsme** (~15 millions). À elles cinq, elles concentrent plus de 75 % de l'humanité. Le judaïsme est numériquement le plus petit du groupe, mais il est inclus car il forme le tronc commun avec les deux grandes religions abrahamiques qui en sont issues.`
    },
    {
      q: `Quelle est la singularité métaphysique du judaïsme par rapport aux religions de son époque ?`,
      options: [
        `Sa croyance en la réincarnation`,
        `Son monothéisme strict : un seul Dieu, sans image possible`,
        `Son culte des ancêtres`,
        `Sa vénération du soleil comme divinité suprême`
      ],
      correcte: 1,
      explication: `Au IIᵉ millénaire avant notre ère, alors que les Égyptiens, Babyloniens, Cananéens, Grecs avaient tous des **panthéons hiérarchisés** avec une multitude de dieux représentés par des statues, Israël structure une religion autour d'un **Dieu unique**, créateur de l'univers, qui interdit explicitement toute représentation matérielle (aniconisme). C'est cette rupture qui fait du judaïsme le **premier monothéisme structuré** de l'histoire, et c'est ce socle que reprendront ensuite christianisme et islam.`
    },
    {
      q: `Que signifie l'année 622 dans l'islam, qui sert de point zéro au calendrier musulman ?`,
      options: [
        `La naissance de Mahomet`,
        `La mort de Mahomet`,
        `L'hégire : l'émigration de Mahomet de La Mecque à Médine, où il fonde la première communauté musulmane`,
        `La date de la conquête de Jérusalem par les armées musulmanes`
      ],
      correcte: 2,
      explication: `L'**hégire** (de l'arabe *hijra*, "émigration") désigne le départ de Mahomet et de ses premiers fidèles de **La Mecque** (où il est persécuté par les autorités polythéistes mecquoises) vers **Médine** en **622** de l'ère chrétienne. C'est là que la première *oumma* (communauté musulmane) est structurée politiquement, qu'une mosquée est construite, et qu'un mode de vie islamique formalisé voit le jour. Le calendrier musulman compte les années à partir de ce moment — il est en 2026 de l'année hégire ~1448.`
    },
    {
      q: `Quelle est la différence fondamentale entre le bouddhisme et l'hindouisme dont il est issu ?`,
      options: [
        `Le bouddhisme rejette la réincarnation, contrairement à l'hindouisme`,
        `Le bouddhisme refuse la pertinence des dieux pour la libération, et n'a pas de système de castes`,
        `L'hindouisme est plus récent que le bouddhisme`,
        `Le bouddhisme se pratique uniquement en monastère, jamais en famille`
      ],
      correcte: 1,
      explication: `Bien qu'il partage la **réincarnation** (*samsara*) et le ***karma*** avec l'hindouisme, le bouddhisme s'en distingue sur deux points majeurs : (1) le Bouddha **ne nie pas l'existence des dieux** mais affirme qu'ils sont **non pertinents** pour atteindre la libération — chacun est son propre maître ; (2) le bouddhisme **refuse le système des castes** hindou, considérant que la libération est accessible à tous indépendamment de leur naissance. Cette dimension égalitaire a contribué à son succès originel — et explique aussi pourquoi il a partiellement disparu d'Inde face à un hindouisme socialement très structuré.`
    },
    {
      q: `Combien y a-t-il de "piliers" dans l'islam, et que sont-ils ?`,
      options: [
        `Trois piliers : prière, jeûne, aumône`,
        `Quatre piliers : foi, prière, pèlerinage, charité`,
        `Cinq piliers : profession de foi, prière, aumône, jeûne, pèlerinage`,
        `Six piliers : foi, prière, jeûne, charité, pèlerinage, lecture du Coran`
      ],
      correcte: 2,
      explication: `Les **cinq piliers de l'islam** structurent la pratique du croyant musulman : (1) la **shahada** (profession de foi : *"Il n'y a de divinité que Dieu, et Mahomet est son prophète"*), (2) la **salat** (cinq prières quotidiennes), (3) la **zakat** (aumône obligatoire, environ 2,5 % du patrimoine), (4) le **sawm** (jeûne du mois de Ramadan), (5) le **hadj** (pèlerinage à La Mecque, au moins une fois dans sa vie pour ceux qui le peuvent). Ces piliers sont communs aux sunnites et aux chiites, malgré leurs divergences sur la succession.`
    },
    {
      q: `Pourquoi parle-t-on des religions abrahamiques pour désigner les trois monothéismes ?`,
      options: [
        `Parce qu'elles sont toutes nées en Abraham, une ville du Proche-Orient`,
        `Parce qu'elles reconnaissent toutes Abraham comme patriarche et figure fondatrice commune`,
        `Parce qu'elles partagent toutes les mêmes textes sacrés`,
        `Parce qu'elles ont été codifiées par un même concile au IVᵉ siècle`
      ],
      correcte: 1,
      explication: `Les **trois monothéismes abrahamiques** — judaïsme, christianisme et islam — partagent la figure d'**Abraham** comme patriarche et témoin de la première Alliance avec Dieu. Pour les juifs, il est l'ancêtre direct du peuple d'Israël par son fils Isaac. Pour les chrétiens, il est le père spirituel de tous les croyants. Pour les musulmans, il est *Ibrahim*, prophète majeur dont le fils Ismaël est l'ancêtre des Arabes. Cette reconnaissance commune ne supprime pas les divergences théologiques profondes, mais elle fonde une famille religieuse cohérente. Le terme "abrahamique" est moderne (XXᵉ siècle, popularisé par Louis Massignon) et permet justement de souligner cette parenté.`
    },
    {
      q: `Quelle proportion de l'humanité contemporaine se déclare sans religion ?`,
      options: [
        `Moins de 1 %`,
        `Environ 16 %`,
        `Environ 35 %`,
        `Plus de 50 %`
      ],
      correcte: 1,
      explication: `Selon les estimations du **Pew Research Center** et d'autres instituts démographiques, **environ 16 % de l'humanité** se classe comme "non religieuse" — athée, agnostique, ou simplement non-affiliée à une religion identifiée. Cette catégorie est en forte **croissance** dans le monde occidental (Europe en tête) et en Chine, mais reste minoritaire à l'échelle planétaire. Important : "sans religion" ne signifie pas "sans spiritualité" — de nombreuses personnes se déclarent non religieuses tout en conservant des pratiques rituelles, des croyances en une transcendance, ou un attachement aux traditions culturelles d'une religion.`
    },
    {
      q: `Où le bouddhisme est-il aujourd'hui le moins présent, malgré ses origines ?`,
      options: [
        `Au Japon`,
        `En Chine`,
        `En Inde, son pays de naissance, où il a quasiment disparu vers le XIIᵉ siècle`,
        `En Thaïlande`
      ],
      correcte: 2,
      explication: `Curiosité historique majeure : le bouddhisme, **né en Inde** au VIᵉ siècle av. J.-C., y a **quasiment disparu** vers le XIIᵉ siècle de notre ère — réabsorbé par un hindouisme dynamique et finalement éliminé par les invasions musulmanes qui ont détruit les grands centres monastiques (Nalanda, Vikramashila). Aujourd'hui, l'Inde compte moins de **1 %** de bouddhistes (autour de 8 millions). Les grandes terres bouddhistes contemporaines sont la Thaïlande, la Birmanie, le Sri Lanka, le Cambodge, la Chine (où il a été apporté par la [[route-de-la-soie]]), le Japon, le Tibet. Le **bouddhisme renaît en Inde** à partir des années 1950 grâce au mouvement initié par **B.R. Ambedkar** parmi les *dalits* (anciens "intouchables").`
    }
  ],

  vocabulaire: [
    {
      terme: 'Monothéisme',
      definition: `Système religieux qui reconnaît **un seul Dieu** unique, créateur et transcendant. Premier exemple historique structuré : le judaïsme (vers -1500). Les trois grands monothéismes contemporains — judaïsme, christianisme, islam — sont dits **abrahamiques** car ils reconnaissent Abraham comme patriarche commun.`
    },
    {
      terme: 'Torah',
      definition: `Les **cinq premiers livres** de la Bible hébraïque : *Genèse*, *Exode*, *Lévitique*, *Nombres*, *Deutéronome*. Cœur textuel du judaïsme, lue par les chrétiens comme *Ancien Testament*. Aurait été transmise à **Moïse** au mont Sinaï selon la tradition. Compose le Pentateuque.`
    },
    {
      terme: 'Coran',
      definition: `Texte sacré de l'islam, considéré par les musulmans comme la **parole directe de Dieu** transmise à **Mahomet** par l'ange Gabriel entre **610 et 632**. 114 chapitres (*sourates*), récitation rituelle quotidienne. Compilé sous forme écrite définitive sous le calife **Othman** vers 650.`
    },
    {
      terme: 'Védas',
      definition: `Les plus anciens textes religieux **hindous**, composés en sanskrit védique entre **-1500 et -500**. Quatre recueils : *Rig-Véda*, *Sama-Véda*, *Yajur-Véda*, *Atharva-Véda*. Hymnes, formules rituelles, spéculations cosmiques. Considérés comme **révélation** non humaine (*shruti*) transmise oralement pendant des millénaires avant d'être fixés.`
    },
    {
      terme: 'Samsara',
      definition: `Cycle des **renaissances** dans les traditions indiennes (hindouisme, bouddhisme, jaïnisme). L'âme ou la conscience se réincarne indéfiniment de vie en vie, conditionnée par ses actes (*karma*). Le but spirituel ultime est d'en **sortir** — par la libération (*moksha* dans l'hindouisme) ou l'extinction (*nirvana* dans le bouddhisme).`
    },
    {
      terme: 'Quatre nobles vérités',
      definition: `Cœur de l'enseignement du **Bouddha** : (1) la vie comporte de la **souffrance** (*dukkha*) ; (2) cette souffrance a une **cause** — le désir, l'attachement (*tanha*) ; (3) on peut s'en libérer ; (4) la voie pour y parvenir est l'**octuple sentier** (compréhension, intention, parole, action, mode de vie, effort, attention, concentration justes).`
    },
    {
      terme: 'Cinq piliers de l\'islam',
      definition: `Pratiques obligatoires pour tout musulman : (1) **shahada** (profession de foi), (2) **salat** (cinq prières quotidiennes), (3) **zakat** (aumône obligatoire, ~2,5 % du patrimoine), (4) **sawm** (jeûne du mois de Ramadan), (5) **hadj** (pèlerinage à La Mecque, au moins une fois dans la vie). Communs aux sunnites et aux chiites.`
    },
    {
      terme: 'Religions abrahamiques',
      definition: `Famille des trois grands monothéismes — **judaïsme**, **christianisme**, **islam** — qui reconnaissent **Abraham** comme patriarche commun et figure fondatrice. Terme moderne (XXᵉ siècle, popularisé par *Louis Massignon*) qui souligne la parenté théologique de trois religions historiquement souvent en conflit, mais partageant un même socle.`
    },
    {
      terme: 'Schisme sunnites / chiites',
      definition: `Division fondamentale de l'islam, apparue dès la **mort de Mahomet en 632**, sur la question de la succession. Les **sunnites** (~85 % des musulmans) reconnaissent les califes élus ; les **chiites** (~15 %) considèrent que seuls les descendants du Prophète à travers son cousin **Ali** pouvaient légitimement lui succéder. Le chiisme est majoritaire en Iran, Irak, Bahreïn, Azerbaïdjan.`
    },
    {
      terme: 'Hégire',
      definition: `**Émigration** de **Mahomet** et de ses premiers fidèles de **La Mecque** à **Médine** en **622**, fuyant les persécutions des autorités mecquoises polythéistes. Acte fondateur de la première communauté musulmane (*oumma*) organisée politiquement. Sert de **point zéro** au calendrier islamique (l'année 2026 du calendrier grégorien correspond à ~1448 de l'hégire).`
    }
  ]

});
