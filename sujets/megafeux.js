/* ===================================================================
   SUJET — Les mégafeux
   ===================================================================
   Le nouveau visage du feu à l'âge climatique.
   Domaines : Climat, Écologie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'megafeux',
    titre: 'Les <em>mégafeux</em>',
    domaines: ['Climat', 'Écologie'],
    tags: ['climat', 'incendie', 'forêt', 'co2', 'biodiversité'],
    difficulte: 2,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: ['les-volcans'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Comprendre pourquoi les feux de forêt extrêmes se multiplient depuis vingt ans, ce qui les distingue des incendies ordinaires, et comment ils sont devenus à la fois conséquence et amplificateur du réchauffement climatique.',

  points_cles: [
    'Les **mégafeux** sont des incendies hors normes par leur **taille**, leur **intensité** et leur **comportement** — ils dépassent toute capacité humaine de contrôle.',
    'Ils représentent **3 %** des incendies mondiaux mais sont responsables de **50 %** des surfaces brûlées.',
    'À l\'échelle globale, la surface totale brûlée chaque année **diminue lentement** (recul des feux agricoles en savanes), mais à l\'échelle régionale les **feux extrêmes** ont **doublé en vingt ans**.',
    'Le **changement climatique** allonge les saisons sèches, augmente la chaleur et stresse les forêts — un combustible plus vaste, plus inflammable, plus longtemps.',
    'En **2023**, le Canada subit ses pires feux de forêt jamais enregistrés : **150 000 km²** brûlés, l\'équivalent de la **Grèce**.',
    'Les feux de forêt extrêmes 2023-2024 ont émis environ **9 milliards de tonnes de CO₂** dans le monde — soit **15 %** des émissions humaines annuelles.',
    'Les **panaches de fumée** voyagent à l\'échelle continentale : la fumée canadienne de juin 2025 a été détectée jusqu\'en France.'
  ],

  carte_mentale: {
    central: 'megafeux',
    noeuds: [
      { id: 'megafeux', label: 'Mégafeux', description: 'Incendies extrêmes par taille, intensité ou impact, hors capacité humaine de contrôle.' },
      { id: 'definition', label: 'Définition contestée', description: 'Pas de consensus scientifique strict — taille, intensité, impacts ou comportement, selon les auteurs.' },
      { id: 'ingredients', label: 'Trois ingrédients', description: 'Combustible (forêt sèche), oxygène, source d\'allumage. Le climat agit sur les trois.' },
      { id: 'climat', label: 'Climat et forêt', description: 'Sécheresses prolongées, vagues de chaleur, vents secs : la météo extrême déclenche les feux extrêmes.' },
      { id: 'comportement', label: 'Comportement extrême', description: 'Vitesses, sauts de plusieurs kilomètres, **pyrocumulonimbus** (orages générés par le feu lui-même).' },
      { id: 'impacts', label: 'Impacts', description: 'Vies humaines, biodiversité, santé publique, climat global.' },
      { id: 'gestion', label: 'Gestion et adaptation', description: 'Prévention, débroussaillage, brûlages dirigés, planification urbaine.' },

      // Ingrédients
      { id: 'secheresse', label: 'Sécheresses', description: 'Allongement des saisons sèches. Stress hydrique des arbres. La biomasse devient un combustible séché.', parent: 'ingredients' },
      { id: 'chaleur', label: 'Vagues de chaleur', description: 'Records de température battus chaque année. Évaporation accrue de l\'humidité du sol et des végétaux.', parent: 'ingredients' },
      { id: 'foudre', label: 'Foudre & humains', description: '**Foudre** : cause naturelle dominante des grands feux boréaux. **Activité humaine** (mégots, lignes électriques, brûlages mal maîtrisés) : majoritaire en Europe et Méditerranée.', parent: 'ingredients' },

      // Comportement
      { id: 'pyrocumulo', label: 'Pyrocumulonimbus', description: 'Le feu génère son propre **orage** : nuage convectif au-dessus du panache, avec foudre, vent rabattant, parfois grêle. Les feux deviennent **leur propre source météo**.', parent: 'comportement' },
      { id: 'sauts', label: 'Sauts de feu', description: 'Projection d\'**embranchements incandescents** parfois à plusieurs kilomètres en avant du front. Rend tout pare-feu classique inopérant.', parent: 'comportement' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Un mot, une <em>évidence</em>, et beaucoup de débats',
      contenu_md:
`Le terme « mégafeu » a quitté les pages spécialisées pour entrer dans le vocabulaire commun au cours des années 2010, à mesure que les images de Californie en flammes, d\'Australie embrasée, de panaches de fumée canadiens recouvrant New York se sont multipliées. Pourtant, il n\'a **pas de définition scientifique stable**.

Certains chercheurs le définissent par la **taille** — au-delà de **10 000 hectares** brûlés en un seul incendie. D\'autres par **l\'intensité** — la quantité d\'énergie libérée. D\'autres encore par les **impacts** — quand un incendie cause des dégâts hors normes, force des évacuations massives, ou déborde toute capacité de réponse humaine.

L\'élément qu\'on retrouve dans toutes les définitions est le **comportement** : un mégafeu est un feu qu\'on **ne peut pas arrêter**. Les pompiers ne combattent plus, ils **tentent de protéger** les zones habitées et attendent que la météo change. Le feu décide.`
    },

    {
      type: 'encadre',
      label: '3 % des feux, 50 % des surfaces',
      contenu_md: 'Statistique frappante établie par le Muséum national d\'Histoire naturelle : les **mégafeux représentent moins de 3 %** du nombre d\'incendies dans le monde, mais ils sont responsables de **plus de 50 %** des surfaces brûlées. L\'essentiel des incendies sont petits, locaux, vite éteints. Une minorité hors-normes accapare l\'énergie destructrice de tout le système.'
    },

    {
      type: 'texte',
      titre: 'Trois <em>ingrédients</em>, un climat qui amplifie',
      contenu_md:
`Tout feu de végétation a besoin de trois choses : du **combustible** (de la matière végétale sèche), de l\'**oxygène** (toujours disponible dans l\'air) et une **source d\'allumage** (foudre, étincelle humaine).

Ce qui rend un feu *extrême*, c\'est l\'alignement de plusieurs facteurs aggravants. Une **sécheresse prolongée** dessèche la végétation à un point où elle s\'enflamme à la moindre étincelle. Une **vague de chaleur** abaisse encore l\'humidité du combustible. Des **vents forts** propagent les flammes plus vite que les équipes au sol ne peuvent réagir, et permettent au feu de **sauter** par-dessus les coupe-feux. Une **topographie** accidentée accélère la propagation en montée.

Le **changement climatique** agit sur presque tous ces leviers à la fois. Il allonge les saisons sèches dans la plupart des régions tempérées et boréales. Il intensifie les vagues de chaleur. Il modifie les régimes de vent. Et il stresse les forêts elles-mêmes — arbres affaiblis par la sécheresse ou les insectes ravageurs (comme le scolyte en Europe centrale, qui a tué des millions d\'épicéas, transformant des forêts entières en bois mort, c\'est-à-dire en combustible idéal).

Ce n\'est pas que le climat *cause* directement les feux : c\'est qu\'il rend la nature **plus inflammable**, plus longtemps dans l\'année, sur de plus grandes surfaces.`
    },

    {
      type: 'widget',
      titre: 'Quelques mégafeux marquants',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '2009', titre: 'Black Saturday (Australie)', description: 'Victoria. **173 morts** en une seule journée — le bilan le plus lourd de l\'histoire australienne. Vents à 100 km/h, températures de 46 °C.' },
          { date: '2019-2020', titre: '"Black Summer" australien', description: 'Six mois de feux. **18,6 millions d\'hectares** brûlés (~3 % du territoire), **environ 3 milliards d\'animaux** affectés (vertébrés). Fumée détectée en Amérique du Sud.' },
          { date: '2018', titre: 'Camp Fire (Californie)', description: 'La ville de **Paradise** est entièrement détruite en quelques heures. **85 morts** — le feu le plus meurtrier de l\'histoire californienne.' },
          { date: '2019', titre: 'Amazonie', description: '**80 000 départs de feu** au Brésil, soit le double de l\'année précédente. Politique de Bolsonaro pointée du doigt internationalement.' },
          { date: '2020-2021', titre: 'Sibérie', description: 'Saisons records dans la **taïga arctique**. Le pergélisol commence à dégeler — feux qui couvent sous la neige et redémarrent au printemps suivant.' },
          { date: '2022', titre: 'Gironde (France)', description: 'Près de **30 000 hectares** brûlés. Premier épisode majeur de mégafeu sur le territoire français — déclencheur d\'une refonte de la doctrine de lutte.' },
          { date: 'Été 2023', titre: 'Canada', description: '**Pire saison de feux de forêt jamais enregistrée**. **150 000 km²** brûlés (soit la superficie de la Grèce). 232 000 personnes évacuées.' },
          { date: 'Janvier 2025', titre: 'Los Angeles', description: 'Incendies de **Pacific Palisades** et **Eaton** en plein hiver. 28 morts, 17 000 structures détruites. Symbole d\'une saison de feux qui n\'en finit plus.' },
          { date: 'Août 2025', titre: 'Aude (France)', description: 'Plus de 17 000 hectares brûlés en quelques jours dans le sud-est. Conditions extrêmes (canicule + vent + sécheresse) — une des plus grosses surfaces brûlées en France métropolitaine sur un seul foyer.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>comportement</em> extrême',
      contenu_md:
`Au-delà de la taille, ce qui caractérise un mégafeu, c\'est qu\'il **modifie sa propre météo**.

Quand un grand feu libère assez d\'énergie thermique, l\'air chaud monte massivement et forme un **panache convectif** qui peut atteindre la stratosphère. Si l\'humidité atmosphérique est suffisante, ce panache se condense en nuage. Et un nuage qui se forme par convection rapide, c\'est un **cumulonimbus** — c\'est-à-dire un nuage d\'orage. Sauf qu\'ici, il a été engendré par le feu lui-même.

Ce phénomène, baptisé [pyrocumulonimbus]{accent}, est l\'une des découvertes marquantes de la météorologie des dernières décennies. Le nuage produit alors des éclairs (qui peuvent allumer de **nouveaux foyers** à des kilomètres), des courants descendants (qui rabattent au sol des vents violents et chaotiques), parfois même de la **grêle**. Les pompiers australiens parlent de feux qui « **font leur propre météo** ».

Autre comportement extrême : les **sauts de feu**, où des fragments incandescents (les *firebrands*) sont projetés à plusieurs kilomètres en avant du front, allumant de nouveaux foyers. Aucun coupe-feu classique ne peut arrêter cela. Le « front » d\'un mégafeu n\'est plus une ligne nette — c\'est une zone diffuse de feux satellites qui fusionnent.`
    },

    {
      type: 'widget',
      titre: 'Quatre impacts majeurs',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Humain',
            titre: 'Vies et habitations',
            description: 'Camp Fire (2018) : 85 morts. Black Saturday (2009) : 173 morts. Eaton & Palisades 2025 : 28 morts, 17 000 structures détruites. Au-delà du bilan immédiat : **traumatismes** durables, déplacements forcés, valeur immobilière effondrée.'
          },
          {
            tag: 'Écologique',
            titre: 'Biodiversité',
            description: 'Black Summer australien : **environ 3 milliards** de vertébrés tués ou affectés. Espèces déjà menacées poussées vers l\'extinction. Certaines forêts ne se régénéreront pas — le feu est trop intense pour les semences enfouies, ou survient trop souvent pour permettre la maturation.'
          },
          {
            tag: 'Sanitaire',
            titre: 'Fumées et air',
            description: 'Les particules **PM2,5** émises par les feux pénètrent profondément dans les poumons. La fumée canadienne 2023 a touché des dizaines de millions de personnes en Amérique du Nord et en Europe. Études en cours sur les effets cardiovasculaires et neurologiques de l\'exposition chronique.'
          },
          {
            tag: 'Climatique',
            titre: 'CO₂ et boucle',
            description: 'Les feux extrêmes 2023-2024 ont émis **~9 milliards de tonnes de CO₂** — soit 15 % des émissions humaines annuelles. Et les **forêts mettent des décennies, voire des siècles**, à recapturer ce carbone. Boucle d\'amplification : plus de climat → plus de feux → plus de CO₂ → plus de climat.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Pourquoi les <em>chiffres</em> mondiaux sont contre-intuitifs',
      contenu_md:
`Voici une donnée surprenante : à l\'échelle de la planète entière, la **surface totale brûlée chaque année est en légère diminution** depuis le début des années 2000.

L\'explication tient en un mot : **savane**. La majorité des hectares brûlés sur Terre l\'est dans les savanes africaines et sud-américaines, pour des raisons agricoles (brûlage des chaumes, défrichement). Avec l\'**intensification agricole** et l\'**urbanisation**, ces feux d\'usage diminuent. La surface brûlée totale baisse — surtout en Afrique.

Mais cette baisse moyenne masque une **divergence régionale** brutale. Dans les **forêts tempérées et boréales** — Amérique du Nord, Sibérie, Méditerranée, Australie —, la surface brûlée par les feux extrêmes a **doublé en vingt ans**. Ces feux brûlent plus intensément, sur des écosystèmes qui stockent énormément de carbone, et qui ne sont pas adaptés à de telles fréquences.

C\'est cette transformation **qualitative** que désigne le mot mégafeu : moins de feux mais des feux plus extrêmes, plus chauds, plus longs, dans des régions et des saisons où on n\'en voyait pas. Une étude britannique publiée en 2024 montre qu\'au Canada, le changement climatique a **multiplié par trois** la probabilité des conditions météorologiques propices aux mégafeux. En Amazonie occidentale, **par plus de vingt**.`
    },

    {
      type: 'encadre',
      label: 'Adaptation et limites',
      contenu_md: 'Les sociétés exposées s\'adaptent : **brûlages dirigés** pour réduire la biomasse combustible (technique inspirée des pratiques aborigènes), réglementation des constructions en zones forestières, débroussaillage obligatoire, flottes aériennes (Canadair, hélicoptères bombardiers d\'eau) renforcées. Mais le décalage se creuse : à mesure que la météo extrême devient plus fréquente, l\'efficacité de ces moyens diminue. Les pompiers australiens ou californiens parlent de plus en plus de **« feux non combattables »** — pour lesquels il faut renoncer à l\'extinction et se concentrer uniquement sur l\'évacuation.'
    }

  ],

  quiz: [
    {
      q: 'Quelle est la part des mégafeux dans la surface totale brûlée à l\'échelle mondiale ?',
      options: [
        'Marginale, environ 5 %',
        'Environ 50 % — alors qu\'ils ne représentent que 3 % du nombre d\'incendies',
        '90 % — ils dominent totalement',
        'Aucune donnée disponible'
      ],
      correcte: 1,
      explication: 'Les mégafeux représentent moins de 3 % du nombre d\'incendies mais sont responsables d\'environ 50 % des surfaces brûlées. L\'essentiel des incendies sont petits et vite contrôlés ; une minorité hors normes accapare l\'énergie destructrice.'
    },
    {
      q: 'À l\'échelle globale, la surface totale brûlée par an évolue-t-elle à la hausse ?',
      options: [
        'Oui, elle augmente fortement chaque année',
        'Non, elle diminue légèrement, mais cette baisse cache une augmentation des feux **extrêmes** dans les forêts tempérées et boréales',
        'Elle est strictement stable',
        'On ne peut pas la mesurer'
      ],
      correcte: 1,
      explication: 'La baisse globale s\'explique par le recul des feux d\'usage en savanes africaines (intensification agricole, urbanisation). En parallèle, dans les forêts tempérées et boréales, les feux extrêmes ont doublé en vingt ans. C\'est une transformation qualitative.'
    },
    {
      q: 'Comment le changement climatique aggrave-t-il le risque de mégafeux ?',
      options: [
        'Il provoque directement les départs de feu',
        'Il agit sur plusieurs leviers : sécheresses prolongées, vagues de chaleur, stress des forêts, allongement de la saison sèche',
        'Il refroidit les forêts',
        'Il n\'a aucun effet démontré'
      ],
      correcte: 1,
      explication: 'Le climat n\'allume pas les feux directement, mais il rend la nature plus inflammable, plus longtemps, sur de plus grandes surfaces. Une étude récente montre qu\'au Canada, le changement climatique a multiplié par trois la probabilité des conditions propices aux mégafeux.'
    },
    {
      q: 'Qu\'est-ce qu\'un pyrocumulonimbus ?',
      options: [
        'Un type de feu de forêt',
        'Un nuage d\'orage généré par la chaleur d\'un grand incendie, capable de produire foudre et vents violents',
        'Une plante qui résiste au feu',
        'Une technique d\'extinction'
      ],
      correcte: 1,
      explication: 'Quand un grand feu libère assez d\'énergie thermique, l\'air chaud forme un panache convectif qui peut générer un cumulonimbus orageux. Le feu "fait sa propre météo" — éclairs (qui allument de nouveaux foyers à distance), vents rabattants, parfois grêle.'
    },
    {
      q: 'Quel pays a connu en 2023 sa pire saison de feux de forêt jamais enregistrée ?',
      options: ['Australie', 'États-Unis', 'Canada', 'Brésil'],
      correcte: 2,
      explication: 'Le Canada a vu en 2023 environ 150 000 km² brûlés (la superficie de la Grèce), 232 000 personnes évacuées. Cette année a établi un record absolu pour ce pays.'
    },
    {
      q: 'À combien sont estimées les émissions de CO₂ des feux de forêt extrêmes mondiaux en 2023-2024 ?',
      options: [
        '500 millions de tonnes',
        'Environ 9 milliards de tonnes — soit ~15 % des émissions humaines annuelles',
        '50 milliards de tonnes',
        'Aucune émission notable'
      ],
      correcte: 1,
      explication: 'Étude britannique publiée fin 2024 dans Earth System Science Data : les feux extrêmes mars 2023-février 2024 ont émis environ 9 milliards de tonnes de CO₂. Et les forêts mettront des décennies ou siècles à recapturer ce carbone.'
    },
    {
      q: 'Pourquoi les sauts de feu rendent-ils les coupe-feux classiques inefficaces face aux mégafeux ?',
      options: [
        'Parce que les coupe-feux ne sont pas assez larges',
        'Parce que des fragments incandescents (firebrands) peuvent être projetés à plusieurs kilomètres en avant du front, allumant de nouveaux foyers',
        'Parce que les pompiers ne savent pas s\'en servir',
        'Parce que le feu passe sous terre'
      ],
      correcte: 1,
      explication: 'Le front d\'un mégafeu n\'est plus une ligne nette — c\'est une zone diffuse de foyers satellites allumés par les projections. Aucun coupe-feu classique ne peut arrêter cela. C\'est l\'une des raisons pour lesquelles ces feux deviennent "non combattables".'
    }
  ]

});
