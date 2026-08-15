/* ===================================================================
   SUJET — Saddam Hussein
   ===================================================================
   Dictateur irakien (1937-2006), du parti Baas à la potence.
   Domaine : Histoire / Géopolitique
   =================================================================== */

window.CarnetDeSavoirs.register({
  meta: {
    id: 'saddam-hussein',
    titre: '<em>Saddam Hussein</em>',
    domaines: ['Histoire', 'Géopolitique'],
    tags: ['irak', 'baas', 'moyen-orient', 'guerre du golfe', 'dictature', 'panarabisme'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: [],
    date_creation: '2026-05-26',
    date_maj: '2026-05-26'
  },

  resume: `De l'ascension au sein du parti Baas dans l'Irak des années 1960 à sa pendaison à Bagdad en 2006, Saddam Hussein incarne l'archétype du dictateur arabe du second XXᵉ siècle : nationaliste, laïc, guerrier, écrasant sa propre société tout en défiant les puissances régionales et occidentales.`,

  points_cles: [
    `Né en **1937** dans un village sunnite près de Tikrit, Saddam gravit les échelons du **parti Baas** — panarabe et laïc — jusqu'à prendre le pouvoir en **1979**.`,
    `Il impose une [dictature personnelle]{accent} fondée sur la police politique (**Mukhabarat**), le culte de la personnalité, et la répression brutale des Kurdes et des chiites.`,
    `Il déclenche la **guerre Iran-Irak** (1980-1988) : huit ans, un million de morts, aucun vainqueur.`,
    `L'invasion du **Koweït** en août 1990 provoque la **première guerre du Golfe** (1991) : une coalition internationale l'expulse en cent heures d'opérations terrestres.`,
    `Douze ans d'embargo et d'inspections onusiennes le maintiennent isolé mais au pouvoir jusqu'en **2003**.`,
    `L'invasion américaine de 2003, justifiée par des [armes de destruction massive]{accent} qui n'existaient pas, provoque sa chute. Il est capturé, jugé, pendu le 30 décembre 2006.`
  ],

  carte_mentale: {
    central: 'saddam-hussein',
    noeuds: [
      { id: 'saddam-hussein', label: 'Saddam Hussein', description: `Dictateur irakien de 1979 à 2003. Panarabisme, guerres à répétition, chute par intervention américaine.` },

      { id: 'ascension', label: 'Ascension', description: `Du militantisme baasiste clandestin à la présidence par purge interne.` },
      { id: 'regime', label: 'Régime', description: `Parti unique, culte du chef, appareil répressif totalitaire.` },
      { id: 'guerres', label: 'Guerres', description: `Iran, Koweït, coalition internationale : trois grandes guerres en vingt-trois ans.` },
      { id: 'repression', label: 'Répression interne', description: `Écrasement des Kurdes du Nord et des chiites du Sud.` },
      { id: 'chute', label: 'Chute', description: `Invasion américaine, capture dans un trou près de Tikrit, procès et pendaison.` },

      { id: 'baas', label: 'Parti Baas', description: `Parti nationaliste arabe fondé en 1947 à Damas — laïc, socialisant, panarabe.`, parent: 'ascension' },
      { id: 'coup-1968', label: `Coup d'État de 1968`, description: `Les baasistes prennent le pouvoir ; Saddam devient l'homme fort dans l'ombre de Bakr.`, parent: 'ascension' },
      { id: 'purge-1979', label: 'Purge de 1979', description: `À peine investi président, il fait exécuter en direct 22 cadres du parti dénoncés comme comploteurs.`, parent: 'ascension' },

      { id: 'culte', label: 'Culte de la personnalité', description: `Portraits monumentaux, palais démesurés, biographies officielles héroïsées.`, parent: 'regime' },
      { id: 'mukhabarat', label: 'Mukhabarat', description: `Réseau de services de renseignement et de police politique — surveillance totale.`, parent: 'regime' },

      { id: 'iran-irak', label: 'Guerre Iran-Irak', description: `1980-1988. Environ un million de morts. Utilisation des armes chimiques par l'Irak. Aucun gain territorial.`, parent: 'guerres' },
      { id: 'koweit', label: 'Invasion du Koweït', description: `Août 1990. Annexion revendiquée d'un « 19ᵉ gouvernorat ». Erreur stratégique fatale.`, parent: 'guerres' },
      { id: 'tempete', label: `Tempête du désert`, description: `Janvier-février 1991. Coalition de 35 nations menée par les États-Unis. Cent heures pour libérer le Koweït.`, parent: 'guerres' },

      { id: 'anfal', label: 'Campagne Al-Anfal', description: `Génocide des Kurdes en 1988. Halabja : 5 000 civils gazés en un jour.`, parent: 'repression' },
      { id: 'chiites-91', label: 'Répression chiite 1991', description: `Écrasement du soulèvement chiite du Sud après la première guerre du Golfe. Dizaines de milliers de morts.`, parent: 'repression' }
    ],
    liens: []
  },

  cours: [
    {
      type: 'texte',
      titre: `De Tikrit au sommet`,
      contenu_md:
`Saddam Hussein al-Tikriti naît en **1937** dans le village d'Al-Awja, près de Tikrit, dans une famille sunnite pauvre. Son père a disparu avant sa naissance ; il grandit chez un oncle, ancien officier nationaliste qui lui transmet la haine des Britanniques et l'idéal panarabe.

Adolescent à Bagdad, il rejoint le parti **Baas** — Parti socialiste de la Résurrection arabe —, fondé à Damas en 1947 par Michel Aflak. Le Baas rêve d'une nation arabe unifiée, laïque, socialisante, débarrassée du colonialisme. En 1959, à 22 ans, Saddam participe à une tentative d'assassinat manquée contre le Premier ministre Qassem, s'enfuit à pied jusqu'en Syrie, puis au Caire.

Le parti prend le pouvoir en Irak par un coup d'État en juillet **1968**. Le président officiel, **Ahmad Hassan al-Bakr**, cousin de Saddam, s'appuie sur lui pour construire l'appareil sécuritaire. Pendant onze ans, Saddam est l'homme fort dans l'ombre. Il fait nationaliser le pétrole en 1972 — bonne fortune : le premier choc pétrolier de 1973 quadruple les revenus de l'État en quelques mois. L'argent finance l'industrialisation, mais aussi et surtout la construction de la [machine policière]{accent} qu'il perfectionnera.`
    },

    {
      type: 'texte',
      titre: `<em>1979 :</em> la prise du pouvoir absolu`,
      contenu_md:
`En juillet **1979**, al-Bakr démissionne officiellement pour raisons de santé. Saddam accède formellement à la présidence. Quelques jours plus tard, il convoque au grand amphithéâtre du Palais un congrès extraordinaire du parti. Devant les cadres réunis, un rescapé désigne « les traîtres » cachés parmi eux : soixante-six noms. Ceux dont le nom est lu se lèvent, escortés hors de la salle sous les applaudissements des autres — puis vingt-deux sont exécutés dans les jours suivants, souvent par leurs pairs à qui on remet le peloton.

La scène est **filmée**. La diffusion en interne pétrifie le parti. Saddam a démontré en une matinée qu'il ne tolérerait aucune contestation, et surtout qu'il exigerait de chacun une complicité personnelle dans la terreur. C'est la matrice de son régime.

L'année 1979 est décisive à un autre titre : de l'autre côté de la frontière, la révolution iranienne renverse le Shah et installe **Khomeini**. Un rival idéologique — chiite et islamiste — surgit face au Baas panarabe et laïc. Saddam voit une opportunité : profiter du désordre iranien pour s'emparer du Chatt-el-Arab et se poser en champion du monde arabe sunnite.`
    },

    {
      type: 'widget',
      titre: `Trois guerres en vingt-trois ans`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: '1980-1988', titre: 'Guerre Iran-Irak', description: `Huit ans, guerre de tranchées, armes chimiques, environ **un million** de morts. Aucun gain territorial. Saddam en sort ruiné mais héros du monde arabe sunnite.` },
          { tag: '1990-1991', titre: 'Guerre du Golfe', description: `Après l'invasion du Koweït (août 1990), une coalition internationale menée par les États-Unis libère l'émirat en cent heures. L'Irak est militairement décapité.` },
          { tag: '2003', titre: `Guerre d'Irak`, description: `Invasion américano-britannique justifiée par des [ADM]{accent} qui n'existaient pas. Bagdad tombe en trois semaines. Ouverture d'une guerre civile qui durera plus d'une décennie.` }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'À retenir',
      contenu_md: `L'invasion du Koweït en 1990 constitue l'**erreur stratégique fatale** de Saddam. Il pense que les États-Unis, absorbés par la fin de la guerre froide, laisseront faire. Il obtient exactement l'inverse : une coalition internationale de trente-cinq nations, dont plusieurs États arabes, avec un mandat onusien explicite.`
    },

    {
      type: 'texte',
      titre: `La répression intérieure`,
      contenu_md:
`Le régime a deux ennemis intérieurs structurels : les **Kurdes** au Nord et les **chiites** au Sud. Ensemble, ils forment la majorité de la population — les sunnites arabes qui tiennent le pouvoir ne sont qu'environ 20 %.

Contre les Kurdes, Saddam mène en 1987-1988 la campagne **Al-Anfal** (« le butin », référence coranique). Villages rasés, populations déplacées, gazages. Le point culminant est le **massacre de Halabja** le 16 mars 1988 : la ville est bombardée à l'arme chimique — sarin, tabun, gaz moutarde. Environ **5 000 civils** meurent en quelques heures. Total estimé de la campagne : entre 50 000 et 100 000 morts. Reconnu comme génocide par plusieurs parlements dans les années 2000.

Après la défaite de 1991, les chiites du Sud se soulèvent, croyant à un soutien américain qui ne vient pas. La répression est massive : bombardement des villes saintes, marais du Chatt-el-Arab asséchés pour priver les rebelles de refuge, exécutions de masse. Dizaines de milliers de morts.`
    },

    {
      type: 'widget',
      titre: `Chronologie 1979-2006`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1979', titre: 'Accession à la présidence', description: `Purge sanglante du parti Baas. Verrouillage total du pouvoir personnel.` },
          { date: '1980', titre: `Invasion de l'Iran`, description: `Attaque du Chatt-el-Arab pour profiter du chaos post-révolutionnaire iranien.` },
          { date: '1988', titre: 'Halabja et fin de guerre Iran-Irak', description: `Gazage de Halabja. Cessez-le-feu épuisé, sans vainqueur.` },
          { date: '1990', titre: 'Invasion du Koweït', description: `Le 2 août. Annexion comme « 19ᵉ gouvernorat » de l'Irak.` },
          { date: '1991', titre: 'Tempête du désert', description: `Défaite face à la coalition. Sanctions et embargo onusiens.` },
          { date: '2003', titre: 'Chute de Bagdad', description: `Invasion américaine. Le régime s'effondre en trois semaines.` },
          { date: '2003 (déc.)', titre: 'Capture', description: `Saddam est trouvé dans un trou près de Tikrit, sale, hagard, sans résistance.` },
          { date: '2006', titre: 'Pendaison', description: `Condamné à mort par le Haut Tribunal irakien, exécuté le 30 décembre à l'aube.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Chute, procès, pendaison`,
      contenu_md:
`Après les attentats du 11 septembre 2001, l'administration américaine de **George W. Bush** cible Saddam. La justification officielle repose sur deux piliers : l'existence supposée d'un [programme d'armes de destruction massive]{accent} — jamais retrouvé —, et un lien allégué avec Al-Qaïda — jamais démontré. Le rapport Duelfer de 2004 conclura que les stocks avaient été détruits dès 1991.

L'invasion débute le 20 mars 2003. Bagdad tombe le 9 avril. Saddam disparaît. Il est finalement capturé le 13 décembre 2003 dans un boyau souterrain près de Tikrit — barbe hirsute, désarmé, sans un combat.

Son procès s'ouvre en 2005 devant le Haut Tribunal irakien. Il est jugé pour le massacre de 148 chiites du village de Doujaïl en 1982 — représailles à une tentative d'attentat contre lui. Condamné à mort le 5 novembre 2006, il est pendu à Bagdad le **30 décembre 2006**, jour de l'Aïd al-Adha. La vidéo — filmée en cachette au téléphone, où on l'insulte pendant l'exécution — fait le tour du monde et devient un scandale.

Sa chute ne pacifie pas l'Irak. Elle ouvre au contraire une décennie de guerre civile confessionnelle, la montée d'**Al-Qaïda en Irak** puis de l'**État islamique**, et une déstabilisation régionale dont les effets se font encore sentir.`
    }
  ],

  quiz: [
    {
      q: `À quel parti politique appartient Saddam Hussein ?`,
      options: [
        `Les Frères musulmans`,
        `Le Parti communiste irakien`,
        `Le parti Baas`,
        `L'Union patriotique du Kurdistan`
      ],
      correcte: 2,
      explication: `Le parti Baas, panarabe et laïc, fondé à Damas en 1947, prend le pouvoir en Irak en 1968. Saddam en devient l'homme fort avant d'accéder officiellement à la présidence en 1979.`
    },
    {
      q: `Combien de temps dure la guerre Iran-Irak déclenchée par Saddam en 1980 ?`,
      options: [`Deux ans`, `Quatre ans`, `Huit ans`, `Douze ans`],
      correcte: 2,
      explication: `Huit années (1980-1988) de guerre de tranchées avec environ un million de morts pour un statu quo territorial. Utilisation massive d'armes chimiques par l'Irak.`
    },
    {
      q: `Quel pays Saddam envahit-il en août 1990 ?`,
      options: [`L'Iran`, `Le Koweït`, `L'Arabie saoudite`, `La Syrie`],
      correcte: 1,
      explication: `L'invasion du Koweït déclenche la première guerre du Golfe et l'intervention d'une coalition internationale menée par les États-Unis.`
    },
    {
      q: `Quelle ville kurde est bombardée à l'arme chimique en mars 1988 ?`,
      options: [`Kirkouk`, `Halabja`, `Erbil`, `Souleimaniyeh`],
      correcte: 1,
      explication: `Halabja : environ 5 000 civils tués en quelques heures par un cocktail de gaz — sarin, tabun, moutarde. Épisode le plus emblématique de la campagne Al-Anfal contre les Kurdes.`
    },
    {
      q: `Quelle justification principale les États-Unis avancent-ils pour envahir l'Irak en 2003 ?`,
      options: [
        `La libération des Kurdes`,
        `La possession d'armes de destruction massive`,
        `L'invasion imminente de l'Arabie saoudite`,
        `Le soutien officiel au régime iranien`
      ],
      correcte: 1,
      explication: `Le prétexte central — programme d'ADM actif — s'est avéré infondé. Le rapport Duelfer (2004) a établi que les stocks avaient été détruits dès 1991.`
    },
    {
      q: `Où Saddam Hussein est-il capturé en décembre 2003 ?`,
      options: [
        `Dans un palais présidentiel de Bagdad`,
        `À la frontière syrienne`,
        `Dans un trou souterrain près de Tikrit`,
        `Au Yémen, où il s'était réfugié`
      ],
      correcte: 2,
      explication: `Dans une exploitation agricole près de Tikrit, sa ville natale — désarmé, hirsute, sans opposer de résistance.`
    },
    {
      q: `Pour quel massacre spécifique est-il jugé et condamné à mort ?`,
      options: [
        `Le gazage de Halabja`,
        `L'exécution des 148 chiites de Doujaïl`,
        `L'écrasement du soulèvement chiite de 1991`,
        `L'invasion du Koweït`
      ],
      correcte: 1,
      explication: `Il est jugé pour le massacre de 148 villageois chiites de Doujaïl en 1982, en représailles d'un attentat manqué. Condamné à mort en 2006, pendu le 30 décembre de la même année.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Parti Baas',
      definition: `Parti politique fondé à Damas en 1947 par Michel Aflak. Doctrine : nationalisme arabe unitaire, laïcité, socialisme d'État. Prend le pouvoir en Syrie (1963) et en Irak (1968), où il devient l'instrument du régime de Saddam.`
    },
    {
      terme: 'Mukhabarat',
      definition: `Terme arabe désignant les services de renseignement et la police politique dans plusieurs pays arabes. Sous Saddam, système de surveillance totale de la population, avec plusieurs agences rivales pour empêcher tout coup d'État interne.`
    },
    {
      terme: 'Al-Anfal',
      definition: `Campagne militaire menée par le régime irakien contre la population kurde en 1987-1988. Environ 50 000 à 100 000 morts. Nom tiré d'une sourate du Coran (« Le Butin »). Reconnue comme génocide par plusieurs pays.`
    },
    {
      terme: 'Halabja',
      definition: `Ville kurde d'Irak bombardée le 16 mars 1988 à l'arme chimique par l'aviation irakienne. Environ **5 000 civils** tués en quelques heures. Symbole mondial de l'utilisation d'armes chimiques contre des populations civiles.`
    },
    {
      terme: 'Guerre Iran-Irak',
      definition: `Conflit (1980-1988) déclenché par Saddam Hussein contre l'Iran post-révolutionnaire. Guerre de tranchées, usage massif d'armes chimiques par l'Irak. Environ un million de morts, aucun vainqueur, aucun changement territorial.`
    },
    {
      terme: 'Tempête du désert',
      definition: `Opération militaire (janvier-février 1991) menée par une coalition de 35 nations sous mandat de l'ONU pour libérer le Koweït envahi par l'Irak. Cent heures d'offensive terrestre, victoire écrasante des coalisés.`
    },
    {
      terme: 'Armes de destruction massive (ADM)',
      definition: `Catégorie regroupant les armes nucléaires, chimiques, biologiques et radiologiques. Justification officielle de l'invasion américaine de 2003 — aucun stock actif ne sera retrouvé, ces armes ayant été détruites après 1991.`
    },
    {
      terme: 'Baasisme',
      definition: `Doctrine du parti Baas : unité arabe, laïcité de l'État, socialisme (nationalisations, planification), anti-impérialisme. Concurrencée dès les années 1980 par l'islamisme politique, qui finira par la supplanter dans le monde arabe.`
    }
  ]
});
