/* ===================================================================
   SUJET — L'Empire ottoman
   ===================================================================
   Six siècles entre l'Asie et l'Europe.
   Domaine : Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'empire-ottoman',
    titre: 'L\'<em>Empire ottoman</em>',
    domaines: ['Histoire'],
    tags: ['ottoman', 'turquie', 'soliman', 'islam', 'méditerranée'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['empire-byzantin'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Comprendre l\'empire qui a tenu sur trois continents pendant six siècles, succédant à Byzance, repoussé deux fois aux portes de Vienne, et dont la disparition en 1922 a redessiné le Moyen-Orient moderne.',

  points_cles: [
    'L\'Empire ottoman est fondé vers **1299** en Anatolie par **Osman Iᵉʳ**, dont le nom donnera l\'adjectif « ottoman ».',
    'En **1453**, **Mehmet II** prend Constantinople — fin de l\'Empire byzantin, naissance de la grande capitale ottomane Istanbul.',
    'L\'apogée se situe sous **Soliman le Magnifique** (1520-1566) : trois continents, 30 millions de sujets, contrôle de la Méditerranée orientale.',
    'L\'empire est **multiethnique et multireligieux** : Turcs, Arabes, Grecs, Slaves, Arméniens, Juifs cohabitent sous le système des **millets** (communautés religieuses autonomes).',
    'Les **janissaires**, soldats d\'élite recrutés par enrôlement forcé d\'enfants chrétiens (*devchirmé*), constituent la principale force armée pendant des siècles.',
    'Vienne est assiégée **deux fois** sans succès : en 1529 par Soliman, et en 1683 — défaite qui marque le début du **long déclin**.',
    'L\'empire s\'effondre après la **Première Guerre mondiale**. Le sultanat est aboli en **1922**, la **République turque** proclamée en 1923 par **Mustafa Kemal**, dit Atatürk.'
  ],

  carte_mentale: {
    central: 'ottoman',
    noeuds: [
      { id: 'ottoman', label: 'Empire ottoman', description: '1299-1922. Six siècles d\'existence sur trois continents.' },
      { id: 'origine', label: 'Origines', description: 'Petit beylicat turc anatolien fondé par Osman Iᵉʳ, qui se transforme en empire en deux siècles.' },
      { id: 'expansion', label: 'Expansion', description: 'Conquêtes des Balkans, prise de Constantinople, expansion vers le Moyen-Orient et l\'Afrique du Nord.' },
      { id: 'apogee', label: 'Apogée', description: 'Le règne de Soliman le Magnifique au XVIᵉ siècle.' },
      { id: 'institutions', label: 'Institutions originales', description: 'Sultan, vizirat, divan, janissaires, millets : un État sophistiqué et multiconfessionnel.' },
      { id: 'declin', label: 'Long déclin', description: 'Dès le XVIIᵉ siècle, perte progressive de territoires et de poids relatif.' },
      { id: 'fin', label: 'Effondrement', description: '1918-1923 : défaite, partage, naissance de la Turquie moderne.' },
      { id: 'heritage', label: 'Héritage', description: 'Architectures, cuisine, langues, traces durables sur tout le pourtour méditerranéen oriental.' },

      // Institutions
      { id: 'sultan', label: 'Sultan-calife', description: 'À partir de 1517, le sultan ottoman est aussi **calife** — théoriquement chef de tous les musulmans sunnites.', parent: 'institutions' },
      { id: 'janissaires', label: 'Janissaires', description: 'Corps d\'élite d\'origine chrétienne, enlevés enfants par le **devchirmé**, convertis et formés à Istanbul. Pendant des siècles, principale force militaire.', parent: 'institutions' },
      { id: 'millets', label: 'Millets', description: 'Communautés religieuses (orthodoxes, juives, arméniennes...) **autonomes** dans leur droit et leur éducation, sous tutelle d\'un patriarche reconnu par le sultan.', parent: 'institutions' },
      { id: 'topkapi', label: 'Topkapı', description: 'Palais des sultans à Istanbul de 1465 à 1856. Centre administratif, religieux et symbolique de l\'empire.', parent: 'institutions' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Un <em>petit beylicat</em> qui devient empire',
      contenu_md:
`À la fin du XIIIᵉ siècle, l\'Anatolie est un puzzle politique. L\'empire seldjoukide, qui dominait la région, vient de s\'effondrer sous les coups des Mongols (revoir [[empire-mongol]]). À la place, des dizaines de petites principautés turques — les *beylicats* — se partagent le territoire.

L\'une d\'elles, dans le nord-ouest de l\'Anatolie, est dirigée par un certain **Osman**. Son territoire est minuscule, sa puissance dérisoire. Mais sa position est exceptionnelle : sa frontière touche directement les **possessions byzantines** déclinantes. À chaque génération, ses descendants vont grignoter ce voisin affaibli.

En **deux siècles**, ce petit beylicat va devenir l\'un des plus grands empires de l\'histoire. La date traditionnelle de fondation est **1299**, mais c\'est une convention : ce qui commence là, c\'est une dynastie qui restera au pouvoir **623 ans**.`
    },

    {
      type: 'widget',
      titre: 'Six siècles, en quelques jalons',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1299', titre: 'Fondation', description: 'Osman Iᵉʳ proclame son indépendance vis-à-vis du sultanat seldjoukide. Le **beylicat ottoman** est né.' },
          { date: '1389', titre: 'Bataille du Kosovo', description: 'Les Ottomans écrasent les Serbes au **champ des merles**. La voie des Balkans est ouverte. Le sultan Mourad Iᵉʳ y meurt — assassiné par un noble serbe.' },
          { date: '29 mai 1453', titre: 'Prise de Constantinople', description: '**Mehmet II** prend la ville après un siège de deux mois. Fin de l\'Empire byzantin (revoir [[empire-byzantin]]). La capitale ottomane s\'installe à **Istanbul**.' },
          { date: '1517', titre: 'Conquête de l\'Égypte', description: 'Sélim Iᵉʳ vainc les Mamelouks. L\'empire prend le contrôle de **La Mecque, Médine, Jérusalem** et de l\'Égypte. Le sultan se proclame **calife** des musulmans sunnites.' },
          { date: '1520-1566', titre: 'Soliman le Magnifique', description: 'Apogée. L\'empire s\'étend de Vienne à Bagdad, du Maghreb au Yémen. **30 millions de sujets**. Soliman réforme le droit, embellit Istanbul, signe avec **François Iᵉʳ** la première grande alliance entre une puissance chrétienne et l\'islam ottoman.' },
          { date: '1571', titre: 'Lépante', description: 'Première grande défaite navale ottomane face à la Sainte-Ligue chrétienne (Espagne, Venise, Papauté). Choc symbolique, mais l\'empire reconstruit sa flotte en un an.' },
          { date: '1683', titre: 'Échec devant Vienne', description: 'Deuxième grand siège ottoman de Vienne. La défaite, infligée par une coalition emmenée par **Jean III Sobieski**, marque le début du **long déclin militaire**.' },
          { date: '1798', titre: 'Bonaparte en Égypte', description: 'Napoléon Bonaparte débarque en Égypte ottomane. La modernité européenne fait brutalement irruption. Le sultanat comprend qu\'il doit se réformer ou périr.' },
          { date: '1839', titre: 'Tanzimat', description: 'Période de **réformes** ambitieuses : réorganisation administrative, droit moderne, éducation laïque. Volonté d\'européanisation pour préserver l\'empire.' },
          { date: '1914-1918', titre: 'Première Guerre mondiale', description: 'L\'empire choisit le mauvais camp (Allemagne, Autriche-Hongrie). Défaite, occupation. **Génocide arménien** en 1915-1916. Démantèlement programmé par les Alliés.' },
          { date: '1922', titre: 'Abolition du sultanat', description: '**Mustafa Kemal**, après avoir mené la guerre d\'indépendance turque (1919-1922), abolit le sultanat. **Mehmet VI**, dernier sultan, part en exil.' },
          { date: '1923', titre: 'République de Turquie', description: 'Atatürk proclame la République le 29 octobre 1923. Le **califat** est aboli en 1924 — fin de l\'institution islamique millénaire.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>apogée</em> de Soliman',
      contenu_md:
`En **1520**, à 26 ans, **Soliman** monte sur le trône. Son règne, qui durera 46 ans — l\'un des plus longs de l\'histoire ottomane — sera celui de la puissance maximale.

À l\'extérieur, il étend l\'empire à un rythme effréné. Belgrade tombe en 1521, Rhodes en 1522, la Hongrie est écrasée à **Mohács** en 1526. En **1529**, Soliman assiège Vienne — pour la première fois — et est repoussé de justesse, davantage par la pluie et la logistique que par la résistance autrichienne. Vers l\'est, l\'empire prend Bagdad. La Méditerranée orientale devient un *lac ottoman*.

À l\'intérieur, Soliman est nommé par les Européens *« le Magnifique »* et par ses sujets *« Kanunî »* — le législateur. Il rénove le droit, codifie la justice, embellit Istanbul. Son architecte, **Mimar Sinan**, construit la mosquée bleue, la Süleymaniye, et plus de 300 édifices. La cour ottomane devient l\'une des plus brillantes du monde — fastueuse, multilingue, ouverte. Soliman lui-même écrit des poèmes en turc, persan et arabe.

Diplomatiquement, le règne consacre l\'**alliance avec François Iᵉʳ** — première grande coopération entre une puissance chrétienne et l\'islam ottoman, dirigée contre les Habsbourg. Geste considéré comme scandaleux dans l\'Europe de l\'époque, et dont les conséquences pèseront pendant trois siècles.`
    },

    {
      type: 'encadre',
      label: 'Pourquoi "le Magnifique" ?',
      contenu_md: 'Les Européens connaissaient mal les Ottomans, mais leur cour les fascinait. Soliman en personne incarnait le contraste : à la fois conquérant redouté et protecteur des arts, des sciences et des minorités. Sa femme **Roxelane** (Hürrem), ancienne esclave d\'origine ruthène, devint sultane officielle — autre rupture avec les usages. La cour ottomane du XVIᵉ siècle est sans doute, à l\'échelle eurasienne, le centre culturel et politique le plus rayonnant de son temps.'
    },

    {
      type: 'texte',
      titre: 'Un <em>État</em> hors normes',
      contenu_md:
`L\'Empire ottoman a inventé ou perfectionné plusieurs institutions qui étonnaient les contemporains européens.`
    },

    {
      type: 'widget',
      titre: 'Quatre piliers institutionnels',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Militaire',
            titre: 'Janissaires',
            description: 'Corps d\'élite recruté par le **devchirmé** : enrôlement forcé d\'enfants chrétiens (Balkans surtout), convertis à l\'islam, formés à Istanbul, devenus soldats puis hauts fonctionnaires. Voie d\'**ascension sociale** paradoxale pour des familles paysannes. Plusieurs grands vizirs étaient d\'origine chrétienne.'
          },
          {
            tag: 'Religieux',
            titre: 'Système des millets',
            description: 'Chaque communauté religieuse non musulmane (**orthodoxes**, **arméniens**, **juifs**...) avait son propre droit civil et religieux, son chef reconnu par le sultan, ses écoles. Pour l\'époque, une **tolérance institutionnalisée** sans équivalent en Europe occidentale.'
          },
          {
            tag: 'Politique',
            titre: 'Sultan et grand vizir',
            description: 'Le **sultan** dispose d\'un pouvoir absolu, mais délègue largement au **grand vizir** qui dirige le **divan** (conseil de gouvernement). À partir de 1517, le sultan cumule le titre de **calife** — chef religieux théorique de tous les sunnites du monde.'
          },
          {
            tag: 'Symbolique',
            titre: 'Topkapı',
            description: 'Palais labyrinthique d\'Istanbul, siège du pouvoir de **1465 à 1856**. Lieu de la cour, du **harem impérial**, et symbole de l\'État. Sa visite suit un protocole codifié : trois cours successives, chacune marquant un degré d\'accès au pouvoir.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>long</em> déclin',
      contenu_md:
`Le second siège raté de Vienne, en **1683**, est généralement retenu comme le tournant. L\'armée ottomane, repoussée par la coalition européenne menée par le roi de Pologne **Jean III Sobieski**, perd la Hongrie l\'année suivante. À partir de là, l\'empire **recule**.

Les causes du déclin sont multiples et débattues. **Stagnation technique** : pendant que l\'Europe vit la révolution scientifique (Newton, Galilée), les institutions ottomanes restent immobiles. **Inflation** liée à l\'arrivée massive d\'argent américain au XVIᵉ siècle. **Routes maritimes contournant la Méditerranée** depuis les grandes découvertes : Istanbul perd son rôle de carrefour commercial obligé. **Fragmentation politique** progressive : les grands vizirs, les pachas locaux, les janissaires deviennent puissances dans la puissance.

Au XIXᵉ siècle, on parle de l\'empire comme du *« grand malade de l\'Europe »*. Les nationalismes balkaniques (Grèce indépendante en 1830, Serbie, Roumanie, Bulgarie) lui arrachent un à un ses territoires européens. Les **Tanzimat** (1839-1876) tentent une européanisation de l\'État, sans renverser la pente. La Première Guerre mondiale lui sera fatale.`
    },

    {
      type: 'texte',
      titre: 'L\'<em>après</em> : 1918-1923',
      contenu_md:
`En 1918, l\'empire ottoman, allié de l\'Allemagne et de l\'Autriche-Hongrie, sort vaincu de la Grande Guerre. Le **traité de Sèvres** (1920) prévoit son démantèlement : la Grèce reçoit la côte égéenne, l\'Italie une partie du sud, les Britanniques contrôlent l\'Irak, la France la Syrie et le Liban (mandat), une Arménie indépendante doit être créée à l\'est. Le sultan accepte. La Turquie est sur le point de disparaître.

Sauf qu\'**un général**, **Mustafa Kemal**, refuse. Héros de la défense des Dardanelles en 1915, il prend la tête d\'une **résistance nationale** depuis Ankara. Pendant trois ans, il mène une guerre d\'indépendance — d\'abord contre les Grecs débarqués à Smyrne, puis diplomatiquement contre toutes les puissances alliées. En 1923, le **traité de Lausanne** annule celui de Sèvres et reconnaît la Turquie dans ses frontières actuelles.

La même année, **Mustafa Kemal** proclame la République et abolit le sultanat. En 1924, il abolit le **califat** — institution née du prophète Muhammad au VIIᵉ siècle, vieille de **treize siècles**. Le monde musulman sunnite n\'a plus de chef spirituel théorique depuis lors.

L\'homme prend en 1934 le nom d\'**Atatürk** — « père des Turcs ». Il occidentalise massivement le pays : alphabet latin, code civil suisse, calendrier grégorien, droit de vote des femmes (1934, avant la France). Sa Turquie est explicitement laïque, militairement défensive, tournée vers l\'Europe.`
    },

    {
      type: 'encadre',
      label: 'Une mémoire qui pèse',
      contenu_md: 'L\'empire ottoman laisse des traces profondes sur tout son ancien territoire — du **Maghreb** à l\'**Anatolie**, des **Balkans** à la **péninsule arabique**. Cuisines partagées (kebab, baklava, café turc), architectures (les mosquées de Sinan ont des héritières partout), populations dispersées (millions d\'**Arméniens**, de **Grecs pontiques**, de **Bulgares** déplacés ou exterminés en 1915-1923). Les frontières actuelles du Moyen-Orient — Syrie, Irak, Liban, Israël/Palestine — sont les sous-produits directs du démantèlement de 1918-1920. Beaucoup des conflits actuels de la région trouvent leur racine dans cet effondrement-là.'
    }

  ],

  quiz: [
    {
      q: 'En quelle année est traditionnellement fondé l\'Empire ottoman ?',
      options: ['1071', '1299', '1453', '1517'],
      correcte: 1,
      explication: '1299 est la date conventionnelle où Osman Iᵉʳ proclame son indépendance, fondant la dynastie qui durera 623 ans. (1453 est la prise de Constantinople, 1517 la conquête de l\'Égypte.)'
    },
    {
      q: 'Quel sultan ottoman s\'empare de Constantinople en 1453 ?',
      options: ['Soliman le Magnifique', 'Mehmet II le Conquérant', 'Bayezid Iᵉʳ', 'Sélim Iᵉʳ'],
      correcte: 1,
      explication: 'Mehmet II, alors âgé de 21 ans, prend Constantinople le 29 mai 1453 et reçoit le titre de "Fatih" (le Conquérant). Cet événement marque la fin de l\'Empire byzantin (voir [[empire-byzantin]]) et fait d\'Istanbul la nouvelle capitale ottomane.'
    },
    {
      q: 'À quoi correspond le système des "millets" sous l\'Empire ottoman ?',
      options: [
        'À une unité de mesure agricole',
        'À l\'organisation des communautés religieuses non musulmanes (orthodoxes, juives, arméniennes) avec leur propre droit civil et leurs autorités reconnues',
        'À une caste militaire',
        'À une forme d\'impôt'
      ],
      correcte: 1,
      explication: 'Le millet permettait à chaque communauté religieuse de garder son droit civil, ses tribunaux, ses écoles, sous l\'autorité d\'un chef reconnu par le sultan. Pour l\'époque, c\'était un degré de tolérance institutionnalisée sans équivalent en Europe occidentale.'
    },
    {
      q: 'Que sont les janissaires ?',
      options: [
        'Des marchands de l\'empire',
        'Un corps d\'élite militaire ottoman, recruté par enrôlement forcé d\'enfants chrétiens (devchirmé), convertis et formés à Istanbul',
        'Une dynastie rivale',
        'Des prêtres musulmans'
      ],
      correcte: 1,
      explication: 'Le devchirmé prenait des garçons d\'environ 8-12 ans dans les villages chrétiens des Balkans, les convertissait à l\'islam et les formait à Istanbul. Devenus janissaires, ils formaient l\'élite militaire (et parfois administrative) de l\'empire. Système paradoxal, à la fois oppressif et voie d\'ascension sociale.'
    },
    {
      q: 'Sous quel sultan l\'Empire ottoman atteint-il son apogée au XVIᵉ siècle ?',
      options: ['Mehmet II', 'Sélim Iᵉʳ', 'Soliman le Magnifique', 'Mahmoud II'],
      correcte: 2,
      explication: 'Soliman régna de 1520 à 1566 (46 ans). L\'empire compte alors environ 30 millions de sujets sur trois continents. Il assiège Vienne en 1529, vainc la Hongrie à Mohács, contrôle la Méditerranée orientale, et signe une alliance avec François Iᵉʳ contre les Habsbourg.'
    },
    {
      q: 'Quel événement marque traditionnellement le début du long déclin de l\'Empire ottoman ?',
      options: [
        'La bataille de Lépante (1571)',
        'Le second siège raté de Vienne (1683)',
        'La conquête de Constantinople',
        'La Première Guerre mondiale'
      ],
      correcte: 1,
      explication: 'En 1683, l\'armée ottomane est repoussée devant Vienne par une coalition menée par Jean III Sobieski. La Hongrie est perdue dès l\'année suivante. À partir de là, l\'empire recule de manière à peu près continue pendant deux siècles.'
    },
    {
      q: 'Comment se termine officiellement l\'Empire ottoman ?',
      options: [
        'Par la prise d\'Istanbul par les Russes',
        'Par l\'abolition du sultanat en 1922 par Mustafa Kemal, suivie de la proclamation de la République turque en 1923',
        'Par un traité de paix avec l\'Iran',
        'Par dissolution naturelle après une famine'
      ],
      correcte: 1,
      explication: 'Après la défaite de 1918 et la guerre d\'indépendance turque (1919-1922), Mustafa Kemal abolit le sultanat en novembre 1922. Le 29 octobre 1923, il proclame la République de Turquie. En 1924, il abolira aussi le califat — fin d\'une institution islamique vieille de 13 siècles.'
    },
    {
      q: 'Quel surnom porte aujourd\'hui Mustafa Kemal, fondateur de la République turque ?',
      options: ['Le Magnifique', 'Le Conquérant', 'Atatürk', 'Le Législateur'],
      correcte: 2,
      explication: 'Le Parlement turc lui décerne en 1934 le nom d\'Atatürk : "père des Turcs". Il dirige une modernisation rapide du pays : alphabet latin, code civil suisse, calendrier grégorien, droit de vote des femmes (1934, avant la France).'
    }
  ]

});
