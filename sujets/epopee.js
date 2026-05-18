/* ===================================================================
   SUJET — L'épopée
   ===================================================================
   Le plus ancien genre littéraire, depuis Gilgamesh jusqu'à
   Tolkien — chants des origines, de la guerre et des dieux.
   Domaine : Littérature
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'epopee',
    titre: 'L\'<em>épopée</em>',
    domaines: ['Littérature'],
    tags: ['gilgamesh', 'homere', 'iliade', 'odyssee', 'mahabharata', 'enéide', 'chanson-de-roland', 'tolkien'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['rome-antique', 'ecriture-cuneiforme', 'sapiens-neolithique'],
    date_creation: '2026-05-17',
    date_maj: '2026-05-17'
  },

  resume: `Comprendre le plus ancien genre littéraire de l'humanité — l'épopée — depuis la tablette mésopotamienne de Gilgamesh (~-2100) jusqu'aux fresques contemporaines de Tolkien et Lucas. Récits longs, en vers, du combat fondateur, des origines d'un peuple, et des relations entre les hommes et leurs dieux.`,

  points_cles: [
    `L'**épopée** est un long récit poétique narrant les actions héroïques d'un personnage ou d'un peuple, situées dans un passé légendaire et impliquant souvent une intervention divine. C'est le **genre fondateur** de la littérature mondiale.`,
    `La plus ancienne épopée conservée est l'**Épopée de Gilgamesh**, composée en akkadien sur des tablettes d'argile en Mésopotamie. Version la plus complète : **-1200**. Premières traces orales : **-2100**. Voir [[ecriture-cuneiforme]].`,
    `**Homère** (VIIIᵉ siècle av. J.-C.) compose, ou compile, l'**Iliade** (la guerre de Troie) et l'**Odyssée** (le retour d'Ulysse). Deux textes qui structureront toute la culture grecque, romaine, puis européenne. Vers en hexamètres dactyliques.`,
    `Le **Mahabharata** indien est, à 1,8 million de mots, **dix fois l'Iliade et l'Odyssée réunies**. Composé entre -400 et 400. Raconte la guerre fratricide des Kuru et inclut la **Bhagavad-Gita**, dialogue spirituel central de l'[[religions-du-monde|hindouisme]].`,
    `À Rome, **Virgile** compose l'**Énéide** entre -29 et -19 pour donner à Rome une généalogie troyenne héroïque. Modèle de toutes les épopées européennes médiévales et renaissantes.`,
    `Le **Moyen Âge européen** produit des **chansons de geste** : la **Chanson de Roland** (~1100, France), le **Cantar de Mio Cid** (~1200, Espagne), les sagas islandaises. Récits chevaleresques liés à l'honneur féodal.`,
    `**Cinq traits structurels** définissent l'épopée : (1) un héros surhumain mais mortel ; (2) une action collective au destin de tout un peuple ; (3) l'intervention de dieux ou de forces surnaturelles ; (4) un style élevé, en vers ; (5) un répertoire de **formules** récurrentes (l'aurore aux doigts de rose, etc.).`,
    `Au XXᵉ siècle, l'épopée renaît sous forme de **roman moderne** (Tolkien, *Le Seigneur des Anneaux*) ou de cinéma à grand spectacle (*Star Wars*, **Lord of the Rings** au cinéma, *Dune*). Le format change, la structure narrative reste.`
  ],

  carte_mentale: {
    central: 'epopee',
    noeuds: [
      { id: 'epopee', label: 'Épopée', description: 'Le plus ancien genre littéraire. Long récit en vers d\'actions héroïques, situées dans un passé légendaire, avec intervention divine. Fondateur de presque toutes les traditions littéraires nationales.' },

      { id: 'definition', label: 'Définition', description: 'Cinq traits caractéristiques : héros surhumain, action collective, intervention divine, style élevé en vers, formules récurrentes.' },
      { id: 'mesopotamie', label: 'Mésopotamie', description: 'Gilgamesh. La plus ancienne épopée conservée. Composée en akkadien sur tablettes d\'argile, version complète vers -1200, traces orales dès -2100.' },
      { id: 'grece', label: 'Grèce', description: 'Homère. Iliade et Odyssée vers -750. Fondement de toute la culture grecque, modèles de la rhétorique et de l\'épopée.' },
      { id: 'inde', label: 'Inde', description: 'Mahabharata et Ramayana. Composés entre -400 et 400. Le Mahabharata est l\'œuvre littéraire la plus longue jamais écrite — dix fois l\'Iliade + l\'Odyssée.' },
      { id: 'rome', label: 'Rome', description: 'Énéide de Virgile (-29 à -19). Donne à Rome une généalogie héroïque issue de Troie. Modèle de toutes les épopées européennes ultérieures. Voir [[rome-antique]].' },
      { id: 'moyen-age', label: 'Moyen Âge', description: 'Chansons de geste : Chanson de Roland (France, ~1100), Cantar de Mio Cid (Espagne), Niebelungenlied (Allemagne), sagas islandaises. Récits féodaux et chevaleresques.' },
      { id: 'modernite', label: 'Modernité', description: 'Renaissance (Arioste, Le Tasse, Camões) puis épuisement progressif au XVIIIᵉ-XIXᵉ siècle. Renaissance au XXᵉ via le roman (Tolkien) et le cinéma de blockbuster.' },

      // Mésopotamie
      { id: 'gilgamesh', label: 'Gilgamesh', description: 'Héros-roi d\'Uruk, deux tiers divin, un tiers humain. Cherche l\'immortalité après la mort de son ami Enkidu. Échoue mais comprend qu\'on est immortel par les œuvres que l\'on laisse.', parent: 'mesopotamie' },
      { id: 'tablettes', label: 'Sur tablettes d\'argile', description: 'L\'épopée s\'écrit en akkadien sur 12 tablettes en cunéiforme. Redécouvertes dans la bibliothèque d\'Assurbanipal à Ninive en **1853** par Hormuzd Rassam.', parent: 'mesopotamie' },

      // Grèce
      { id: 'homere', label: 'Homère', description: 'Aède aveugle de Smyrne, figure semi-légendaire. La "question homérique" : un seul poète ou compilation orale d\'aèdes pendant des siècles ? Probablement les deux.', parent: 'grece' },
      { id: 'iliade', label: 'Iliade', description: 'Récit de **51 jours** de la guerre de Troie (-1200 légendaire). 15 693 vers. Centré sur la colère d\'**Achille** envers Agamemnon et la mort d\'**Hector**.', parent: 'grece' },
      { id: 'odyssee', label: 'Odyssée', description: 'Le retour d\'**Ulysse** vers Ithaque après la guerre de Troie. 10 ans d\'errance. 12 109 vers. Le **nostos** (retour) devient archétype littéraire universel.', parent: 'grece' },

      // Inde
      { id: 'mahabharata', label: 'Mahabharata', description: 'Guerre fratricide entre les Pandava et les Kaurava sur le trône de Hastinapura. 1,8 million de mots, 100 000 vers (*shloka*). Contient la **Bhagavad-Gita** (dialogue Krishna-Arjuna).', parent: 'inde' },
      { id: 'ramayana', label: 'Ramayana', description: 'Voyage de **Rama** pour récupérer sa femme Sita enlevée par le démon Ravana. Plus court que le Mahabharata (24 000 vers) mais plus connu en Asie du Sud-Est où il est adapté en théâtre traditionnel.', parent: 'inde' },

      // Rome
      { id: 'eneide', label: 'Énéide', description: 'Le Troyen **Énée** fuit Troie en flammes pour fonder une nouvelle cité — qui sera Rome. Virgile (-70 à -19) compose ce poème sur commande d\'Auguste. 12 livres. Modèle de toute épopée européenne ultérieure.', parent: 'rome' },

      // Moyen Âge
      { id: 'roland', label: 'Chanson de Roland', description: 'Plus ancien texte littéraire majeur en français, vers 1100. 4 002 décasyllabes. Mort héroïque de **Roland**, neveu de Charlemagne, à Roncevaux (vers 778 historiquement).', parent: 'moyen-age' },
      { id: 'sagas', label: 'Sagas islandaises', description: 'Récits en prose composés en Islande aux XIIIᵉ-XIVᵉ siècles, racontant les exploits des familles vikings établies pendant la colonisation (IXᵉ siècle). *Edda*, *Njal*, *Egil*.', parent: 'moyen-age' },

      // Modernité
      { id: 'renaissance', label: 'Renaissance', description: '**Roland furieux** de l\'Arioste (1516, Italie), **La Jérusalem délivrée** du Tasse (1581), **Les Lusiades** de Camões (1572, Portugal). Ambition de fonder une épopée moderne sur le modèle de Virgile.', parent: 'modernite' },
      { id: 'tolkien', label: 'Tolkien', description: 'Le Seigneur des Anneaux (1954-55). Tolkien, philologue oxonien spécialiste du germanique ancien, **reconstruit littéralement** une épopée à l\'usage du XXᵉ siècle en s\'inspirant des sagas nordiques, du Beowulf, des chansons de geste.', parent: 'modernite' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Le <em>plus ancien</em> genre littéraire`,
      contenu_md:
`Imagine une humanité qui vient juste d'inventer l'écriture. Tu fais quoi avec ? À en juger par les premières civilisations qui ont laissé des traces (Sumer, Akkad, Babylone), tu fais d'abord de la **comptabilité** — combien de moutons doit cette personne au temple ? — et tu fais ensuite quelque chose de beaucoup plus émouvant : tu **écris des histoires**. Et l'histoire que tu écris en premier, c'est l'épopée.

L'**Épopée de Gilgamesh** est la plus ancienne œuvre littéraire connue de l'humanité. Composée d'abord oralement vers **-2100** en sumérien, fixée par écrit en akkadien sur 12 tablettes d'argile vers **-1200**, elle raconte les aventures d'un roi semi-divin de la cité d'**Uruk** : ses combats contre des monstres, sa rencontre avec son ami **Enkidu**, la mort de cet ami, et la quête vaine de Gilgamesh pour l'immortalité. Ce qu'on comprend déjà à cette époque, et qui sera la matrice de toute épopée ultérieure : un héros plus grand que nature, un combat, une perte, et une **leçon métaphysique** sur la condition humaine.

Pourquoi l'épopée vient-elle si tôt et partout ? Parce qu'avant l'écriture, les sociétés humaines transmettaient leurs valeurs par le **récit oral** — et qu'un long récit en vers, riche en images et en formules répétées, est plus facile à mémoriser. L'épopée est née comme **outil de mémoire collective** ; l'écriture l'a fixée, mais ne l'a pas inventée.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      titre: 'Les grandes épopées mondiales',
      params: {
        evenements: [
          { date: '-2100', titre: 'Gilgamesh (oral)', description: 'Premières versions orales du cycle de Gilgamesh en sumérien à Uruk. Tablettes les plus anciennes datées de **-2100 à -2000**.' },
          { date: '-1200', titre: 'Gilgamesh (akkadien)', description: 'Version "standard" en akkadien sur 12 tablettes. Découverte en **1853** dans la bibliothèque d\'Assurbanipal à Ninive. Premier déchiffrement par **George Smith** en 1872.' },
          { date: '-750', titre: 'Homère', description: 'Composition (ou mise par écrit) de l\'**Iliade** et de l\'**Odyssée**. Fondement de toute la culture grecque, puis romaine, puis européenne.' },
          { date: '-400 à 400', titre: 'Mahabharata', description: 'Composition progressive en sanskrit. **1,8 million de mots**, **100 000 vers** — l\'œuvre littéraire la plus longue jamais écrite. Inclut la *Bhagavad-Gita*.' },
          { date: '-29 à -19', titre: 'Énéide', description: '**Virgile** compose à Rome l\'**Énéide** sur commande de l\'empereur Auguste. 12 livres en hexamètres. Donne à Rome une généalogie héroïque issue de Troie.' },
          { date: '~700', titre: 'Beowulf', description: 'Plus ancienne épopée en vieil anglais. Le héros saxon **Beowulf** combat le monstre Grendel puis un dragon. Conservé dans un seul manuscrit du Xᵉ siècle.' },
          { date: '~1100', titre: 'Chanson de Roland', description: 'Plus ancien grand texte littéraire en français. **Roland**, neveu de Charlemagne, meurt à Roncevaux en sonnant son olifant.' },
          { date: '1516', titre: 'Roland furieux', description: '**L\'Arioste** publie le *Orlando Furioso* à Ferrare. Synthèse Renaissance des matières médiévales (Roland, le roi Arthur) dans le moule virgilien.' },
          { date: '1954-55', titre: 'Tolkien', description: '*Le Seigneur des Anneaux* paraît en trois tomes. **J.R.R. Tolkien**, philologue à Oxford, reconstruit littéralement une épopée moderne sur les modèles anciens.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `<em>Homère</em>, fondation de la littérature européenne`,
      contenu_md:
`Au VIIIᵉ siècle avant notre ère, quelque part en Ionie (Asie Mineure grecque), un poète aveugle nommé **Homère** compose — ou compile, c'est la fameuse "question homérique" — deux poèmes qui structureront ensuite toute la culture grecque, romaine, et finalement européenne : l'**Iliade** et l'**Odyssée**.

L'**Iliade** raconte **51 jours** de la guerre de Troie (un conflit semi-légendaire qui aurait eu lieu vers -1200, donc cinq siècles avant Homère). Mais l'épopée ne raconte pas TOUTE la guerre — elle se concentre sur un épisode précis : la **colère d'Achille**, héros grec, qui se retire du combat après une querelle avec le roi Agamemnon. Sans Achille, les Grecs reculent. La mort de son ami **Patrocle** ramène Achille à la bataille, où il tue **Hector**, prince troyen. Le texte se clôt sur le cadavre d'Hector rendu à son père Priam — une scène d'une profonde humanité. C'est **15 693 vers** en hexamètres dactyliques.

L'**Odyssée** raconte les **dix ans d'errance** d'**Ulysse**, autre héros grec, qui tente de rentrer chez lui à Ithaque après la chute de Troie. Cyclope, sirènes, lotophages, descente aux enfers : Ulysse traverse un monde fantastique pour finir par retrouver son île et sa femme Pénélope. Le mot grec ***nostos*** (retour) devient à partir de là un archétype : toute l'histoire littéraire de l'Occident est traversée de "retours" — *Ulysse* de Joyce en 1922, *L'Odyssée de Pi* de Yann Martel, etc.

Ce qui est fascinant chez Homère : il **n'écrit pas, à l'origine**. Les textes étaient déclamés par des **aèdes**, poètes professionnels qui parcouraient les cités grecques et qui improvisaient à partir d'un répertoire mémorisé de formules — *l'aurore aux doigts de rose*, *Achille aux pieds rapides*, *la mer vineuse*. Ces formules récurrentes (les "épithètes homériques") permettaient aux aèdes de gagner du temps dans la composition orale en utilisant des blocs de vers tout faits. Les linguistes modernes — **Milman Parry** et **Albert Lord** dans les années 1930 — ont retrouvé exactement le même mécanisme chez les bardes serbo-croates contemporains, ce qui a confirmé l'oralité originelle d'Homère.`
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      titre: 'Cinq traits structurels de toute épopée',
      params: {
        cartes: [
          { tag: 'Trait 1', titre: 'Héros surhumain mais mortel', description: 'Gilgamesh est deux tiers divin. Achille a une mère déesse. Énée est fils de Vénus. Roland est neveu de Charlemagne. Mais tous **meurent** ou affrontent la mort : c\'est ce qui les distingue des dieux et fait la matière tragique de l\'épopée.' },
          { tag: 'Trait 2', titre: 'Action collective', description: 'L\'épopée ne raconte pas une aventure individuelle — elle raconte le **destin d\'un peuple**. La guerre de Troie unit les Grecs. L\'Énéide fonde Rome. Le Mahabharata établit l\'ordre dynastique. La Chanson de Roland incarne la chrétienté contre l\'islam.' },
          { tag: 'Trait 3', titre: 'Intervention divine', description: 'Les dieux **interviennent** activement : Athéna protège Ulysse, Junon poursuit Énée, Krishna conseille Arjuna, Vishnu se réincarne en Rama. L\'épopée n\'est pas seulement humaine, elle est cosmique.' },
          { tag: 'Trait 4', titre: 'Style élevé et vers', description: 'Hexamètres dactyliques (Homère, Virgile), shloka (Inde), décasyllabes (chansons de geste). Le **rythme** est essentiel : il facilite la mémorisation orale et donne sa solennité au texte.' },
          { tag: 'Trait 5', titre: 'Formules récurrentes', description: '*L\'aurore aux doigts de rose*, *Ulysse aux mille tours*, *la mer vineuse*. Les **épithètes homériques** sont des blocs de vers réutilisables qui structurent la déclamation orale et donnent une signature stylistique immédiatement reconnaissable.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Les <em>épopées indiennes</em> : l'inflation monumentale`,
      contenu_md:
`Si Homère donne le ton avec ses ~28 000 vers cumulés, les épopées indiennes opèrent à une **échelle complètement différente**. Le **Mahabharata** — composé progressivement entre **-400 et 400** de notre ère par des poètes brahmanes — fait **1,8 million de mots**, soit **dix fois l'Iliade et l'Odyssée réunies**, ou environ **quatre fois la Bible**. C'est l'**œuvre littéraire la plus longue jamais écrite** de toute l'histoire humaine.

L'histoire centrale : la guerre dynastique entre deux branches d'une même famille royale, les **Pandava** (cinq frères) et les **Kaurava** (cent frères), pour le trône de Hastinapura. La bataille a lieu sur le champ de **Kurukshetra** et dure 18 jours. Mais le Mahabharata n'est pas seulement un récit guerrier : c'est une **encyclopédie** de la civilisation indienne classique. Cosmogonie, mythes, généalogies royales, traités de morale et de politique, manuels de yoga, théologie — tout y est. Au centre, dialogue avant la bataille entre **Krishna** (incarnation du dieu Vishnu) et le prince **Arjuna** qui hésite à combattre ses cousins : c'est la **Bhagavad-Gita** ("Chant du Bienheureux"), texte spirituel le plus important de l'hindouisme et que Gandhi lisait quotidiennement.

À côté du Mahabharata, l'**Ramayana** (24 000 vers, composé entre -300 et 300) raconte un récit plus resserré : le **prince Rama**, exilé injustement, voit sa femme **Sita** enlevée par le démon-roi **Ravana** de Lanka. Avec l'aide du **roi-singe Hanuman** et d'une armée de singes, Rama traverse l'océan, libère Sita et restaure l'ordre. Le Ramayana, plus accessible que le Mahabharata, est devenu la matrice de **toute la culture populaire** indienne et sud-est-asiatique : adapté en théâtre traditionnel à Bali, au Cambodge, en Thaïlande ; à la base de séries télévisées hindoues encore aujourd'hui.

Ce que ces épopées montrent, c'est qu'**une civilisation à part entière peut tenir dans un poème** — et que celui-ci peut continuer à structurer la pensée morale de centaines de millions de personnes deux mille ans après sa composition.`
    },

    {
      type: 'encadre',
      label: 'Le format dominant a duré 3 000 ans',
      contenu_md: `De Gilgamesh (~-2100) à *Le Seigneur des Anneaux* (1954), **plus de quatre millénaires** ont passé. Pendant les **trois mille premières années**, l'épopée est restée le **format littéraire dominant** : on ne questionnait pas qu'un grand récit méritait des vers, un style élevé, des dieux et des héros. Le **roman moderne** — narration en prose centrée sur un individu psychologique — n'apparaît qu'au XVIIIᵉ siècle, et finit par éclipser l'épopée. Mais au XXᵉ siècle, le besoin de grands récits collectifs revient — sous forme de cinéma à grand spectacle, de saga romanesque, de jeu vidéo narratif. La forme change, la structure reste.`
    },

    {
      type: 'texte',
      titre: `<em>Rome</em>, le Moyen Âge et la Renaissance`,
      contenu_md:
`Quand l'**Empire romain** atteint son apogée sous Auguste (-27 à 14), il manque cruellement d'une **épopée à sa mesure**. Les Grecs ont Homère, les Romains n'ont que des compilations mineures. L'empereur commande donc à **Virgile** (-70 à -19), poète déjà célèbre, de **composer l'épopée fondatrice de Rome**. Virgile y travaille **onze ans**, demande sur son lit de mort qu'on brûle son manuscrit inachevé (refusé par Auguste), et meurt en 19 av. J.-C. L'**Énéide** est publiée à titre posthume.

L'idée : le Troyen **Énée**, fils du roi Anchise et de la déesse Vénus, fuit Troie en flammes après sa chute, emmène son père sur ses épaules et son fils par la main, et erre pendant des années sur la Méditerranée avant de débarquer en Italie pour y fonder la lignée dont sortira Rome. Le poème mêle ainsi **généalogie héroïque** (Rome descend de Troie, donc des dieux), **prophétie politique** (Énée voit dans le futur la gloire de Rome jusqu'à Auguste) et **éloge** indirect de l'empereur (qui est lui-même de la *gens Iulia* descendant d'Iulus, fils d'Énée). C'est de la **propagande géniale**, mais c'est surtout un chef-d'œuvre qui devient pendant **mille cinq cents ans** le modèle obligé de toute épopée européenne ultérieure.

Au **Moyen Âge**, les **chansons de geste** appliquent le moule épique aux exploits chevaleresques chrétiens. La **Chanson de Roland** (~1100), plus ancien grand texte de la littérature française, raconte la mort héroïque de Roland — neveu de Charlemagne — à Roncevaux en 778 (historiquement, une embuscade basque ; littérairement, une bataille contre les Sarrasins musulmans). C'est l'archétype de l'**honneur féodal** : Roland préfère mourir plutôt que de sonner son **olifant** pour appeler à l'aide.

À la **Renaissance**, l'ambition épique connaît un nouveau souffle : Ariosto avec son *Roland furieux* (1516), le Tasse avec *La Jérusalem délivrée* (1581), Camões avec *Les Lusiades* (1572, qui célèbre les expéditions portugaises de Vasco de Gama vers l'Inde). Ces œuvres tentent de fonder des **épopées nationales modernes** — sur le modèle virgilien — pour donner aux jeunes nations européennes l'équivalent de ce que Rome avait reçu de Virgile.`
    },

    {
      type: 'widget',
      composant: 'SelecteurValeurs',
      titre: 'Longueurs comparées de quelques grandes épopées',
      params: {
        unite: 'vers',
        options: [
          { label: 'Mahabharata (Inde)', valeur: '~100 000', description: '~1,8 million de mots. L\'œuvre littéraire la plus longue jamais écrite. Composé entre -400 et 400. Sanskrit. Inclut la Bhagavad-Gita.' },
          { label: 'Shahnameh (Iran)', valeur: '~50 000', description: 'Livre des rois de **Ferdowsi** (~1000). Histoire mythique et historique de l\'Iran depuis la création jusqu\'à la conquête arabe (651). Texte fondateur de la culture iranienne contemporaine.' },
          { label: 'Ramayana (Inde)', valeur: '~24 000', description: 'Composé entre -300 et 300. Sanskrit, attribué à Valmiki. Plus accessible que le Mahabharata, à la base de toute la culture populaire indienne et sud-est-asiatique.' },
          { label: 'Iliade (Grèce)', valeur: '~15 700', description: 'Hexamètres dactyliques, VIIIᵉ siècle av. J.-C. attribué à Homère. 51 jours de la guerre de Troie. La colère d\'Achille.' },
          { label: 'Énéide (Rome)', valeur: '~9 900', description: 'Hexamètres dactyliques, 12 livres. Virgile, -29 à -19. Énée fuit Troie pour fonder Rome.' },
          { label: 'Chanson de Roland (France)', valeur: '~4 000', description: 'Décasyllabes, ~1100. Mort de Roland à Roncevaux. Plus ancien grand texte littéraire en français.' },
          { label: 'Beowulf (Angleterre)', valeur: '~3 200', description: 'Vieil anglais, vers 700. Conservé dans un seul manuscrit du Xᵉ siècle. Beowulf combat Grendel puis un dragon.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>XXᵉ siècle</em> et la renaissance épique`,
      contenu_md:
`Au XVIIIᵉ et XIXᵉ siècle, l'épopée semble morte. Le **roman moderne** prend toute la place : Stendhal, Balzac, Tolstoï, Flaubert s'intéressent à l'individu psychologique et à la société bourgeoise, pas aux héros divinisés. Les rares tentatives épiques (le *Faust* de Goethe, *Les Châtiments* de Hugo) sont des objets isolés.

Et puis, au XXᵉ siècle, le besoin de **grands récits collectifs** revient — sous des formes nouvelles. Trois œuvres marquent ce retour.

**J.R.R. Tolkien**, professeur de philologie médiévale à Oxford, spécialiste du vieil anglais et du germanique, publie entre **1954 et 1955** *Le Seigneur des Anneaux*. Tolkien n'écrit pas une épopée par hasard : il **reconstruit littéralement** une épopée moderne en s'inspirant directement des sagas islandaises, du Beowulf, des chansons de geste. Il invente même des langues complètes (les langues elfiques, le sindarin et le quenya). Le succès est tel qu'il fonde le genre du *high fantasy* qui domine encore aujourd'hui la littérature de l'imaginaire.

**Frank Herbert** publie ***Dune*** en **1965** : épopée de science-fiction sur une planète désert, avec dynasties impériales, prophéties, religion politico-spirituelle, monstres géants (les Vers des sables). Le récit de Paul Atréides reprend exactement les codes du héros épique — naissance prophétisée, exil, descente aux enfers, retour vengeur, fondation d'un nouvel ordre.

**George Lucas** sort ***Star Wars*** en **1977**. Construction explicitement épique fondée sur les travaux de l'anthropologue **Joseph Campbell** (*Le Héros aux mille et un visages*, 1949) qui avait identifié dans toutes les épopées mondiales — Gilgamesh, Homère, le Mahabharata, le Christ, Roland — la même **structure narrative** : l'appel à l'aventure, le refus, la rencontre du mentor, l'épreuve, la mort symbolique, la renaissance, le retour. Luke Skywalker est conçu à partir de cette grille. Le succès est planétaire.

Le format change — du parchemin au pellicule, des vers à la prose puis à l'image — mais la **structure narrative** que Gilgamesh inaugure il y a 4 100 ans continue de répondre à un besoin humain fondamental : se raconter à soi-même les grands récits qui donnent sens au monde et à la communauté.`
    }

  ],

  quiz: [
    {
      q: `Quelle est la plus ancienne épopée connue de l'humanité ?`,
      options: [
        `L'Iliade d'Homère`,
        `L'Épopée de Gilgamesh, composée en Mésopotamie`,
        `Le Mahabharata indien`,
        `L'Énéide de Virgile`
      ],
      correcte: 1,
      explication: `L'**Épopée de Gilgamesh** est la plus ancienne œuvre littéraire conservée de l'humanité. Composée d'abord oralement en sumérien à partir de **-2100** environ, puis fixée par écrit en akkadien sur 12 tablettes d'argile vers **-1200**. Elle raconte les aventures du roi semi-divin Gilgamesh à Uruk, sa rencontre avec Enkidu, et sa quête vaine de l'immortalité. Redécouverte dans la bibliothèque d'Assurbanipal à Ninive en 1853, déchiffrée par George Smith en 1872 — qui découvrit qu'elle contenait un récit du Déluge antérieur à celui de la Bible.`
    },
    {
      q: `Pourquoi l'Iliade ne raconte-t-elle pas toute la guerre de Troie, mais seulement 51 jours ?`,
      options: [
        `Parce qu'Homère est mort avant de finir`,
        `Parce que le texte se concentre sur la colère d'Achille et son retour au combat — pas sur la guerre dans son ensemble`,
        `Parce que les tablettes manquantes ont été perdues`,
        `Parce que les autres événements sont racontés dans l'Odyssée`
      ],
      correcte: 1,
      explication: `L'**Iliade** ne raconte pas les neuf premières années de la guerre de Troie (déjà bien avancée au début du poème) ni sa fin (la chute de Troie par le cheval, racontée seulement en flashback dans l'Odyssée et plus tard chez Virgile). Le poème se concentre exclusivement sur **51 jours** marqués par la **colère d'Achille** : retrait du combat après querelle avec Agamemnon, mort de Patrocle, retour fulminant d'Achille, duel avec Hector, restitution du corps. Cette focalisation sur un épisode psychologique tendu est une décision esthétique remarquable pour une épopée — Homère choisit la profondeur dramatique plutôt que l'exhaustivité narrative.`
    },
    {
      q: `Quelle est la longueur du Mahabharata ?`,
      options: [
        `Environ 10 000 vers, comparable à l'Iliade`,
        `Environ 30 000 vers, comparable à l'Iliade plus l'Odyssée`,
        `Environ 100 000 vers, soit dix fois l'Iliade plus l'Odyssée`,
        `Environ 500 000 vers`
      ],
      correcte: 2,
      explication: `Le **Mahabharata** est l'œuvre littéraire **la plus longue jamais écrite** par l'humanité. Composé progressivement entre **-400 et 400** par des poètes brahmanes, il fait **environ 100 000 *shloka*** (vers sanskrits) soit **1,8 million de mots**, c'est-à-dire **dix fois l'Iliade et l'Odyssée d'Homère réunies**, et environ **quatre fois la Bible**. Au-delà du récit central de la guerre fratricide des Pandava et des Kaurava, il englobe une véritable **encyclopédie** de la civilisation indienne classique : mythologie, généalogies, théologie, traités de morale, manuels de yoga.`
    },
    {
      q: `Pourquoi Virgile a-t-il composé l'Énéide, et pour qui ?`,
      options: [
        `Pour exprimer son hostilité au pouvoir impérial`,
        `Sur commande de l'empereur Auguste, pour donner à Rome une généalogie héroïque issue de Troie`,
        `Pour participer à un concours littéraire`,
        `Pour traduire l'Iliade en latin`
      ],
      correcte: 1,
      explication: `**Auguste**, premier empereur romain, perçoit le manque d'une **épopée fondatrice** pour Rome qui équivaudrait à l'Iliade pour les Grecs. Il commande donc à **Virgile** (-70 à -19), poète déjà très célèbre, une œuvre majeure. Virgile y travaille **11 ans** (-29 à -19), mais meurt avant de pouvoir la polir. Sur son lit de mort, il demande qu'on brûle son manuscrit — Auguste refuse et le fait publier à titre posthume. L'Énéide donne à Rome une **généalogie troyenne** : Énée, fils de Vénus, fuit Troie en flammes pour fonder la lignée dont sortiront Romulus et Auguste lui-même. C'est à la fois propagande politique et chef-d'œuvre durable, qui restera **le modèle obligé** de toute épopée européenne jusqu'au XVIIIᵉ siècle.`
    },
    {
      q: `Qu'est-ce qu'une "épithète homérique" et à quoi servait-elle ?`,
      options: [
        `Une critique formelle du texte d'Homère ajoutée plus tard par les commentateurs`,
        `Un bloc de vers réutilisable (formule récurrente comme "l'aurore aux doigts de rose") qui aidait l'aède à composer oralement`,
        `Un type de manuscrit d'Homère copié en Égypte`,
        `Une marque de prononciation utilisée par les acteurs grecs`
      ],
      correcte: 1,
      explication: `Les **épithètes homériques** sont des **formules récurrentes** — *l'aurore aux doigts de rose*, *Achille aux pieds rapides*, *la mer vineuse*, *Ulysse aux mille tours* — qui apparaissent dans l'Iliade et l'Odyssée à chaque mention d'un personnage ou d'un phénomène. Loin d'être une simple ornementation stylistique, elles servaient un **but pratique** : permettre aux **aèdes** (poètes oraux qui déclamaient l'épopée de mémoire) de gagner du temps dans la composition en utilisant des **blocs de vers tout faits** parfaitement adaptés à la métrique de l'hexamètre. Les linguistes *Milman Parry* et *Albert Lord* dans les années 1930 ont retrouvé exactement le même mécanisme chez les bardes serbo-croates contemporains, confirmant définitivement l'**oralité originelle** d'Homère.`
    },
    {
      q: `Pourquoi Tolkien dit-on qu'il a "reconstruit" une épopée plutôt qu'inventé un genre nouveau ?`,
      options: [
        `Parce qu'il avait des sources orales secrètes héritées de sa famille`,
        `Parce qu'en tant que philologue spécialiste du germanique ancien (sagas, Beowulf, chansons de geste), il s'est consciemment inspiré des modèles épiques anciens pour Le Seigneur des Anneaux`,
        `Parce qu'il a en fait traduit une épopée perdue du XIᵉ siècle`,
        `Parce que C.S. Lewis a écrit le livre à sa place`
      ],
      correcte: 1,
      explication: `**J.R.R. Tolkien** (1892-1973) n'était pas un romancier ordinaire : c'était un **professeur de philologie médiévale** à Oxford, spécialiste mondial du **vieil anglais**, du **vieux norrois** (sagas islandaises) et de la **chanson de geste**. Sa traduction de *Beowulf* fait référence. Quand il a composé *Le Seigneur des Anneaux* (1937-1949, publié 1954-55), il a délibérément **convoqué l'héritage épique entier** : les sagas pour les nains, Beowulf pour les rohirrim, les chansons de geste pour la mort héroïque, l'Iliade et l'Énéide pour la structure narrative. Il a même **inventé des langues complètes** (sindarin, quenya) avec grammaire et histoire interne. Son ambition explicite était de doter l'Angleterre d'une mythologie nationale qu'elle n'avait jamais eue.`
    },
    {
      q: `Selon Joseph Campbell (Le Héros aux mille et un visages, 1949), qu'ont en commun toutes les épopées mondiales ?`,
      options: [
        `Elles racontent toutes la même histoire historique transformée`,
        `Elles partagent une même structure narrative archétypale : appel, refus, mentor, épreuve, mort symbolique, renaissance, retour`,
        `Elles utilisent toutes les mêmes vers métriques`,
        `Elles sont toutes issues d'une même civilisation perdue`
      ],
      correcte: 1,
      explication: `Dans *Le Héros aux mille et un visages* (1949), l'anthropologue **Joseph Campbell** identifie ce qu'il appelle le **monomythe** ou **voyage du héros** : une **structure narrative archétypale** qu'il retrouve dans presque toutes les épopées mondiales — Gilgamesh, Iliade, Odyssée, Mahabharata, Vie du Bouddha, Christ, Roland, etc. Étapes principales : (1) appel à l'aventure, (2) refus initial, (3) rencontre du mentor, (4) franchissement du seuil, (5) épreuves, (6) descente aux enfers ou mort symbolique, (7) récompense, (8) retour avec le don. Cette grille a directement inspiré **George Lucas** pour la conception de Luke Skywalker dans Star Wars (1977), et reste l'une des références les plus citées dans l'industrie du récit (cinéma, jeu vidéo, série).`
    }
  ],

  vocabulaire: [
    {
      terme: 'Épopée',
      definition: `Long **récit poétique** narrant les actions héroïques d'un personnage ou d'un peuple, situées dans un passé légendaire et impliquant souvent une intervention divine. **Genre fondateur** de la littérature mondiale : Gilgamesh (-2100), Iliade, Mahabharata, Énéide, Chanson de Roland, jusqu'à Tolkien.`
    },
    {
      terme: 'Aède',
      definition: `Poète **oral** professionnel de la Grèce archaïque, qui déclamait l'épopée de mémoire dans les cours royales et les fêtes publiques. **Homère** en est le plus illustre exemple. L'aède s'appuyait sur un répertoire de **formules récurrentes** (épithètes homériques) pour improviser dans la métrique de l'hexamètre dactylique.`
    },
    {
      terme: 'Épithète homérique',
      definition: `**Formule récurrente** — *l'aurore aux doigts de rose*, *Achille aux pieds rapides*, *la mer vineuse* — réutilisée par Homère à chaque mention d'un personnage ou d'un phénomène. Pas une simple ornementation : un **outil pratique** pour la composition orale, permettant à l'aède de gagner du temps avec des blocs de vers tout faits.`
    },
    {
      terme: 'Hexamètre dactylique',
      definition: `**Mètre poétique** de l'épopée grecque et latine : six pieds composés chacun d'un long suivi de deux brèves (ou équivalent). Rythme grave et solennel. Utilisé par Homère (Iliade, Odyssée), Virgile (Énéide), Lucrèce, Hésiode. Décodage par les modernes : *DUM-da-da DUM-da-da*…`
    },
    {
      terme: 'Iliade',
      definition: `Épopée d'**Homère** (~-750), 15 693 vers en hexamètres. Récit de **51 jours** de la guerre de Troie centré sur la **colère d'Achille**, la mort de **Patrocle**, le duel avec **Hector**. Ne raconte pas la chute de Troie elle-même. Premier texte fondateur de toute la culture grecque, puis européenne.`
    },
    {
      terme: 'Odyssée',
      definition: `Épopée d'**Homère** (~-750), 12 109 vers. Le retour (*nostos*) d'**Ulysse** vers Ithaque après la guerre de Troie. **Dix ans d'errance** marqués par le Cyclope, les sirènes, la descente aux enfers, Calypso, les Phéaciens. Archétype absolu du voyage initiatique.`
    },
    {
      terme: 'Mahabharata',
      definition: `Épopée indienne en sanskrit composée entre **-400 et 400**, attribuée traditionnellement à **Vyasa**. **100 000 *shloka*** (vers), **1,8 million de mots** — l'œuvre littéraire la plus longue jamais écrite. Guerre fratricide des Pandava et des Kaurava. Inclut la **Bhagavad-Gita**, texte spirituel central de l'hindouisme.`
    },
    {
      terme: 'Bhagavad-Gita',
      definition: `**Dialogue spirituel** entre le prince **Arjuna** et le dieu **Krishna** (incarnation de Vishnu) sur le champ de bataille de Kurukshetra, avant la bataille. **18 chapitres**, **700 vers**. Inséré dans le **Mahabharata** mais lu indépendamment. Texte le plus important de l'hindouisme dévotionnel, traduit dans toutes les langues, médité quotidiennement par Gandhi.`
    },
    {
      terme: 'Énéide',
      definition: `Épopée latine de **Virgile** (-29 à -19), commandée par l'empereur **Auguste**. **12 livres**, 9 896 vers en hexamètres dactyliques. Le Troyen **Énée** fuit Troie en flammes pour fonder la lignée romaine. Modèle obligé de toute épopée européenne pendant **1 500 ans**.`
    },
    {
      terme: 'Voyage du héros',
      definition: `**Structure narrative archétypale** identifiée par l'anthropologue **Joseph Campbell** dans *Le Héros aux mille et un visages* (1949), retrouvée dans presque toutes les épopées mondiales : appel à l'aventure, refus, mentor, franchissement du seuil, épreuves, mort symbolique, renaissance, retour avec le don. A directement inspiré la conception de Luke Skywalker dans **Star Wars** (1977).`
    }
  ]

});
