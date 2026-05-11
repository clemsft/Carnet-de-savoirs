/* ===================================================================
   SUJET — Le changement climatique
   ===================================================================
   Quand la chimie de l'air remodèle la planète habitable.
   Domaine : Climat
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'changement-climatique',
    titre: `Le <em>changement climatique</em>`,
    domaines: ['Environnement'],
    tags: ['co2', 'giec', 'effet de serre', 'keeling', 'points de bascule'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['megafeux', 'les-volcans', 'abysses-oceaniques', 'energie-nucleaire'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Comprendre comment la chimie de l'atmosphère, modifiée par les activités humaines, redessine en quelques décennies le climat planétaire. De l'effet de serre découvert au XIXᵉ siècle à la courbe de Keeling, du GIEC aux scénarios SSP, des points de bascule aux leviers d'action.`,

  points_cles: [
    `L'**effet de serre** est un phénomène naturel : sans lui, la température moyenne terrestre serait d'environ **-18 °C** au lieu de +15 °C. Le problème, c'est son **renforcement** par les émissions humaines.`,
    `La **courbe de Keeling**, mesurée en continu au Mauna Loa depuis **1958**, montre une hausse régulière du CO₂ atmosphérique : de **315 ppm** à plus de **425 ppm** aujourd'hui — le niveau le plus élevé depuis 3 millions d'années.`,
    `La température moyenne globale a augmenté d'environ **+1,3 °C** depuis l'ère préindustrielle. Les terres se réchauffent presque **deux fois plus vite** que les océans.`,
    `Le **GIEC** (créé en 1988) synthétise tous les six à huit ans l'état des connaissances. Son **6ᵉ rapport** (2021-2023) établit que le réchauffement actuel est *« sans équivoque »* d'origine humaine.`,
    `Les scénarios **SSP** (Shared Socioeconomic Pathways) projettent un réchauffement compris entre **+1,4 °C** (SSP1-1.9, transition rapide) et **+4,4 °C** (SSP5-8.5, business as usual) d'ici 2100.`,
    `Les **points de bascule** — calotte du Groenland, banquise arctique, forêt amazonienne, courants océaniques — peuvent franchir des seuils irréversibles entre **+1,5 et +2 °C**. Une étude de 2022 en identifie cinq potentiellement déclenchés dès le réchauffement actuel.`,
    `Les deux leviers d'action complémentaires : la [mitigation]{accent} (réduction des émissions) et l'[adaptation]{accent} (préparation aux changements déjà inévitables). Les budgets carbone restants pour 1,5 °C s'épuisent au rythme actuel en **moins de sept ans**.`
  ],

  carte_mentale: {
    central: 'climat',
    noeuds: [
      { id: 'climat', label: 'Changement climatique', description: `Modification systémique du climat planétaire, dominée depuis ~1850 par les émissions humaines de gaz à effet de serre.` },
      { id: 'mecanisme', label: 'Mécanisme', description: `Effet de serre amplifié par CO₂, méthane, protoxyde d'azote et autres gaz d'origine industrielle, agricole et énergétique.` },
      { id: 'preuves', label: 'Preuves observationnelles', description: `Températures, courbe de Keeling, recul des glaciers, niveau des mers, acidification océanique.` },
      { id: 'institutions', label: 'Le GIEC et la science', description: `Synthèses régulières de milliers d'études évaluées par les pairs, validées par 195 gouvernements.` },
      { id: 'futurs', label: 'Scénarios SSP', description: `Trajectoires possibles selon les choix politiques et économiques mondiaux.` },
      { id: 'bascules', label: 'Points de bascule', description: `Seuils au-delà desquels certains systèmes climatiques basculent vers un nouvel état stable, parfois irréversible à l'échelle humaine.` },
      { id: 'action', label: `Leviers d'action`, description: `Mitigation et adaptation, articulées à toutes les échelles : individu, entreprise, ville, État, traités internationaux.` },

      // Mécanisme
      { id: 'gaz', label: 'Gaz à effet de serre', description: `Vapeur d'eau, **CO₂**, **méthane** (28× plus puissant sur 100 ans), N₂O, fluorés. Tous absorbent l'infrarouge réémis par la Terre.`, parent: 'mecanisme' },
      { id: 'cycle', label: 'Cycle du carbone', description: `Échanges entre atmosphère, océans, biosphère et géosphère. L'humanité en a **doublé** le flux annuel depuis 1850 en émettant ~37 Gt CO₂/an.`, parent: 'mecanisme' },

      // Preuves
      { id: 'keeling', label: 'Courbe de Keeling', description: `Mesures continues du CO₂ au sommet du Mauna Loa depuis **1958**. La hausse monotone est l'une des séries de données les plus emblématiques de la science contemporaine.`, parent: 'preuves' },
      { id: 'glaciers', label: 'Glaciers et banquise', description: `Le **Groenland** perd ~270 Gt/an de glace. La banquise arctique de septembre a diminué de **40 %** depuis 1979.`, parent: 'preuves' },
      { id: 'oceans', label: 'Océans', description: `Niveau monté de ~24 cm depuis 1900, rythme accéléré (~4,8 mm/an actuel). pH des eaux de surface diminué de 0,1 — soit **30 % d'acidité supplémentaire**.`, parent: 'preuves' },

      // Bascules
      { id: 'amazonie', label: 'Amazonie', description: `Risque de **savanisation** entre +1,5 et +3 °C, dans les régions est et sud déjà dégradées. Inversion possible du puits de carbone forestier.`, parent: 'bascules' },
      { id: 'amoc', label: 'Circulation atlantique', description: `Le **AMOC** (Gulf Stream élargi) montre des signes d'affaiblissement. Son effondrement reconfigurerait le climat européen.`, parent: 'bascules' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>découverte</em> ancienne`,
      contenu_md:
`L'effet de serre n'est pas une découverte récente. Dès **1824**, **Joseph Fourier** comprend que l'atmosphère se comporte comme une couverture qui retient une partie de la chaleur solaire. En 1856, l'Américaine **Eunice Foote** publie la première étude expérimentale : un récipient rempli de CO₂ exposé au soleil chauffe sensiblement plus qu'un récipient d'air. Trois ans plus tard, **John Tyndall** mesure précisément l'absorption infrarouge des différents gaz.

En **1896**, le chimiste suédois **Svante Arrhenius** publie le premier calcul quantitatif : un doublement du CO₂ atmosphérique devrait élever la température globale d'environ **5 à 6 °C**. Sa motivation est curieuse — il espère que le réchauffement industriel rendra la Scandinavie plus clémente. Son estimation, étonnamment robuste pour l'époque, encadre la valeur retenue aujourd'hui : entre **2,5 et 4 °C** par doublement du CO₂.

L'effet de serre est donc bien connu depuis le XIXᵉ siècle. Ce qui a changé, c'est l'**ampleur** : les activités humaines injectent dans l'atmosphère, en quelques décennies, des quantités de carbone que la nature mettait des dizaines de milliers d'années à stocker dans les sédiments.`
    },

    {
      type: 'widget',
      titre: `Le forçage radiatif élémentaire`,
      composant: 'Equation',
      params: {
        tex: '\\Delta F = 5{,}35 \\, \\ln\\!\\left(\\frac{C}{C_0}\\right)',
        legende: `Forçage radiatif additionnel (en W/m²) dû à une concentration de CO₂ *C* par rapport à une concentration de référence *C₀*. Pour C = 425 ppm et C₀ = 280 ppm (préindustriel), on obtient ΔF ≈ 2,2 W/m² — l'énergie supplémentaire que la Terre retient en permanence.`,
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      titre: `La <em>courbe</em> qui a tout changé`,
      contenu_md:
`En 1958, un jeune géochimiste de Caltech, **Charles David Keeling**, commence à mesurer en continu la concentration de CO₂ atmosphérique au sommet du **Mauna Loa**, à Hawaï — choisi pour son éloignement des sources industrielles et sa stabilité atmosphérique.

La première année donne 315 ppm. Aujourd'hui, le compteur a franchi **425 ppm** — une hausse de **35 %** en moins de soixante-dix ans. La courbe oscille au rythme des saisons (la végétation de l'hémisphère nord respire en captant et relâchant du carbone chaque année) mais sa tendance générale est **monotone à la hausse**, sans interruption depuis le début des mesures.

Les carottes de glace antarctiques permettent de reconstituer l'histoire bien plus longue : pendant les 800 000 dernières années, la concentration de CO₂ a oscillé entre **180 ppm** (périodes glaciaires) et **300 ppm** (interglaciaires). Le niveau actuel — 425 ppm — est sans précédent depuis **3 millions d'années**, à l'époque du Pliocène où les températures étaient supérieures de 2 à 3 °C et le niveau des mers de 15 à 25 mètres plus haut.`
    },

    {
      type: 'encadre',
      label: `Le méthane, l'autre gaz`,
      contenu_md: `Le CO₂ n'est pas seul. Le **méthane** (CH₄) est environ **28 fois plus puissant** que le CO₂ sur cent ans (et **80 fois** sur vingt ans), même s'il se dégrade plus vite dans l'atmosphère. Il provient de l'élevage (rumination, lisier), de la riziculture, des fuites de gaz fossile et des décharges. Sa concentration a quasiment **triplé** depuis 1850. Les **fluides frigorigènes** (HFC) sont encore plus puissants par molécule, mais en quantités plus faibles. Réduire le méthane est aujourd'hui considéré comme l'un des leviers les plus rapides pour ralentir le réchauffement.`
    },

    {
      type: 'widget',
      titre: `Quelques jalons de la science et de la politique du climat`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1824', titre: 'Fourier', description: `Joseph Fourier décrit l'effet de serre atmosphérique pour la première fois.` },
          { date: '1856', titre: 'Eunice Foote', description: `Première démonstration expérimentale de l'absorption thermique du CO₂. Étude longtemps oubliée puis redécouverte.` },
          { date: '1896', titre: 'Arrhenius', description: `Premier calcul quantitatif : un doublement du CO₂ devrait réchauffer la planète de plusieurs degrés.` },
          { date: '1958', titre: 'Mauna Loa', description: `Charles David Keeling lance les mesures continues du CO₂ atmosphérique. La courbe deviendra emblématique.` },
          { date: '1988', titre: 'GIEC', description: `Création du **Groupe d'experts intergouvernemental sur l'évolution du climat** sous l'égide de l'ONU et de l'OMM.` },
          { date: '1992', titre: 'Sommet de Rio', description: `Convention-cadre des Nations unies sur les changements climatiques (CCNUCC), signée par 154 États.` },
          { date: '1997', titre: 'Protocole de Kyoto', description: `Premier engagement chiffré de réduction des émissions par les pays industrialisés. Les États-Unis ne le ratifieront pas.` },
          { date: '2015', titre: 'Accord de Paris', description: `**195 États** s'engagent à limiter le réchauffement à *« bien en deçà de 2 °C »*, en visant 1,5 °C. Engagements non contraignants mais révision tous les 5 ans.` },
          { date: '2021-2023', titre: '6ᵉ rapport du GIEC', description: `Synthèse en plusieurs volumes : le réchauffement actuel est **sans équivoque** d'origine humaine. Atteindre 1,5 °C exige une transformation **sans précédent** des systèmes énergétiques.` },
          { date: '2024', titre: 'Première année à +1,5 °C', description: `La moyenne annuelle 2024 dépasse pour la première fois +1,5 °C par rapport à l'ère préindustrielle, même si la **moyenne décennale** reste sous ce seuil.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>GIEC</em>, ou comment une science devient consensus`,
      contenu_md:
`Le **Groupe d'experts intergouvernemental sur l'évolution du climat** est créé en 1988 par l'ONU et l'Organisation météorologique mondiale. Son rôle n'est pas de produire de la recherche, mais d'**évaluer** la recherche existante : plusieurs milliers de scientifiques, choisis dans le monde entier, synthétisent tous les six à huit ans des dizaines de milliers d'articles publiés et évalués par les pairs.

Le résultat — des rapports de plusieurs milliers de pages, accompagnés de *« Résumés pour décideurs »* — est ensuite validé ligne par ligne par les **195 gouvernements** membres. Cette double validation scientifique et diplomatique fait du GIEC l'instance la plus solide jamais constituée pour produire un consensus mondial sur un sujet scientifique.

Le **6ᵉ cycle d'évaluation** (2021-2023) établit en termes désormais sans détour : le réchauffement est *« sans équivoque »* d'origine humaine ; il s'élève déjà à environ **+1,3 °C** au-dessus de la moyenne préindustrielle ; chaque demi-degré supplémentaire augmente substantiellement la fréquence et l'intensité des canicules, sécheresses, [[megafeux]], précipitations extrêmes. Atteindre 1,5 °C nécessite une réduction des émissions globales de **43 % d'ici 2030** par rapport à 2019. Au rythme actuel, le budget carbone correspondant s'épuise avant 2032.`
    },

    {
      type: 'widget',
      titre: `Cinq scénarios du futur — les SSP`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: 'SSP1-1.9', titre: `Durabilité`, description: `Transition mondiale rapide vers les énergies décarbonées, coopération renforcée. Réchauffement contenu à **+1,4 °C** vers 2100.` },
          { tag: 'SSP1-2.6', titre: `Coopération`, description: `Atténuation forte mais retardée. Réchauffement autour de **+1,8 °C** d'ici 2100. Compatible avec la cible *« bien en deçà de 2 °C »* de l'Accord de Paris.` },
          { tag: 'SSP2-4.5', titre: `Trajectoire médiane`, description: `Politiques climatiques modérées, progrès technologiques poussifs. Réchauffement de l'ordre de **+2,7 °C** en 2100 — la trajectoire actuelle.` },
          { tag: 'SSP3-7.0', titre: `Régionalisme et inégalités`, description: `Rivalités géopolitiques, désengagement climatique, fortes émissions. Réchauffement vers **+3,6 °C**.` },
          { tag: 'SSP5-8.5', titre: `Énergie fossile maximale`, description: `Pas de transition climatique, exploitation intensive des fossiles. Réchauffement de **+4,4 °C** ou plus en 2100. Considéré comme improbable mais utile comme borne haute.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Les <em>points de bascule</em>`,
      contenu_md:
`Le climat n'évolue pas seulement de manière linéaire. Certains éléments du système climatique présentent des **seuils** au-delà desquels ils basculent vers un nouvel état stable, parfois irréversible à l'échelle humaine. Ces *« tipping points »* sont l'une des découvertes les plus inquiétantes des deux dernières décennies.

Une étude publiée dans **Science** en septembre 2022 par l'équipe de Tim Lenton identifie **16 points de bascule majeurs** dont **5 pourraient être franchis dès le réchauffement actuel** (~1,3 °C) : la calotte du **Groenland**, la calotte ouest-antarctique, le pergélisol boréal, les récifs coralliens tropicaux, les courants subpolaires de l'Atlantique nord. À +1,5 °C, 6 deviennent probables ; à +2,5 °C, 11.

Le franchissement de ces seuils ne signifie pas une catastrophe instantanée — la fonte complète du Groenland prendrait des siècles. Mais il signifie un **enclenchement irréversible** : une fois lancée, la dynamique se poursuit même si on stoppe les émissions. Le niveau des mers continuerait alors de monter pendant des millénaires.

Le plus inquiétant reste le risque de **cascades** : un point qui bascule peut en faire basculer un autre. L'effondrement du **AMOC** (la circulation thermohaline atlantique, dont fait partie le Gulf Stream) provoquerait un assèchement de l'Amazonie et un déplacement majeur de la mousson africaine. Ces interactions restent une frontière active de la recherche.`
    },

    {
      type: 'widget',
      titre: `Bascules majeures — seuils estimés (°C de réchauffement)`,
      composant: 'SelecteurValeurs',
      params: {
        unite: '°C',
        indexInitial: 0,
        options: [
          { label: `Récifs coralliens tropicaux`, valeur: 1.5, description: `Blanchissement massif déjà observé. Une perte de >99 % est probable à 2 °C. Conséquences en cascade sur les écosystèmes côtiers et la pêche.` },
          { label: `Groenland`, valeur: 1.5, description: `Calotte de 2,8 millions de km³, équivalent ~7 m de niveau des mers si totalement fondue. Le seuil de l'effondrement irréversible est estimé entre 1,5 et 3 °C. Processus lent (siècles), mais enclenchement irréversible.` },
          { label: `Antarctique ouest`, valeur: 1.5, description: `Calotte instable reposant sur un socle sous le niveau des mers. Effondrement progressif déjà engagé. ~3 m d'élévation potentielle des mers.` },
          { label: `Pergélisol boréal`, valeur: 1.5, description: `Dégel libère méthane et CO₂ stockés dans les sols depuis le dernier âge glaciaire — boucle de rétroaction positive. Voir aussi [[megafeux]] en Sibérie.` },
          { label: `AMOC (circulation atlantique)`, valeur: 2.0, description: `Affaiblissement déjà mesuré. Effondrement complet entre +1,4 et +8 °C selon les modèles. Conséquences majeures sur le climat européen et la mousson africaine.` },
          { label: `Forêt amazonienne`, valeur: 3.5, description: `Risque de savanisation entre +1,5 et +3 °C (combiné à la déforestation). Inversion possible du puits de carbone en source.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Deux <em>leviers</em>, indissociables`,
      contenu_md:
`Toute politique climatique repose sur deux leviers complémentaires. La [mitigation]{accent}, c'est la réduction des émissions de gaz à effet de serre : décarbonation de l'électricité (énergies renouvelables, [nucléaire]{accent} — voir [[energie-nucleaire]]), électrification des transports, isolation des bâtiments, alimentation moins carnée, sobriété industrielle et matérielle. L'objectif est de **stabiliser la concentration atmosphérique** de CO₂ — donc d'atteindre la neutralité carbone, où les émissions résiduelles sont compensées par des puits naturels ou technologiques.

L'[adaptation]{accent}, c'est l'autre versant : se préparer aux changements **déjà inévitables** et à ceux qui vont s'accumuler dans les prochaines décennies, même dans le meilleur scénario. Plans canicule, irrigation économe, recul des digues, déplacement de cultures, réinvention des villes (ombre, végétalisation, résilience aux inondations), évacuation des littoraux les plus exposés. Voir aussi [[megafeux]] sur l'adaptation des sociétés au feu extrême.

La justice climatique est l'angle moral et géopolitique du problème. Les pays les plus émetteurs historiques (États-Unis, Europe, Russie, Chine récente) ne sont pas ceux qui subissent les plus lourdes conséquences (Afrique sahélienne, petites îles, Asie du sud-est). Les transferts financiers et technologiques entre Nord et Sud restent l'un des points les plus tendus des négociations internationales.`
    },

    {
      type: 'encadre',
      label: `L'horloge tourne`,
      contenu_md: `Le **budget carbone** restant pour avoir 50 % de chances de tenir +1,5 °C est estimé fin 2024 à environ **260 milliards de tonnes de CO₂**. Au rythme actuel d'émissions mondiales (~37 Gt CO₂/an), il sera épuisé en **moins de sept ans**. Tenir +2 °C laisse une marge plus large (~1 100 Gt, soit ~30 ans). Mais chaque dixième de degré compte — chaque [point de bascule]{accent} franchi engage des conséquences sur plusieurs générations.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'L\'effet de serre est un phénomène artificiel entièrement créé par l\'industrie humaine.',
      reponse: false,
      explication: 'L\'effet de serre est un phénomène naturel indispensable à l\'habitabilité de la Terre : sans lui, la température moyenne serait d\'environ -18 °C au lieu de +15 °C. Le problème climatique actuel n\'est pas son existence, mais son renforcement rapide par les émissions humaines.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces jalons de la science et de la politique du climat dans l\'ordre chronologique :',
      items: [
        'Arrhenius publie le premier calcul quantitatif de l\'effet du CO₂ (1896)',
        'Keeling lance les mesures continues du CO₂ au Mauna Loa (1958)',
        'Création du GIEC sous l\'égide de l\'ONU et de l\'OMM (1988)',
        'Sommet de Rio et signature de la CCNUCC (1992)',
        'Protocole de Kyoto (1997)',
        'Accord de Paris signé par 195 États (2015)'
      ],
      explication: 'La science du climat s\'établit avec Arrhenius (1896) et Keeling (1958) ; les institutions politiques mondiales se mettent en place avec le GIEC (1988), Rio (1992), Kyoto (1997) et Paris (2015), où 195 États s\'engagent à limiter le réchauffement à "bien en deçà de 2 °C".'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'La concentration de CO₂ atmosphérique mesurée au Mauna Loa dépasse aujourd\'hui {425} ppm, contre environ 280 ppm à l\'ère préindustrielle. Le réchauffement global moyen actuel est d\'environ {1,3} °C au-dessus de l\'ère préindustrielle, et l\'Accord de Paris vise à le contenir bien en deçà de {2} °C.',
      explication: 'Le CO₂ atmosphérique a augmenté de 280 à plus de 425 ppm depuis 1850 — le niveau le plus élevé depuis 3 millions d\'années. Le réchauffement moyen atteint déjà ~1,3 °C selon le 6ᵉ rapport du GIEC. L\'Accord de Paris vise à contenir le réchauffement bien en deçà de 2 °C, en visant 1,5 °C.'
    },
    {
      q: `Quelle serait la température moyenne terrestre sans effet de serre ?`,
      options: [
        `Identique à aujourd'hui`,
        `Environ -18 °C — l'effet de serre naturel est indispensable à l'habitabilité, c'est son **renforcement** récent qui pose problème`,
        `0 °C`,
        `Environ +5 °C`
      ],
      correcte: 1,
      explication: `Sans effet de serre, la surface terrestre rayonnerait directement dans l'espace et la température moyenne serait de -18 °C. Les +33 °C entre cette valeur théorique et la réalité observée (+15 °C) résultent de l'effet de serre naturel. Le problème climatique actuel n'est pas l'existence de l'effet de serre, mais son **renforcement** rapide par les émissions humaines.`
    },
    {
      q: `Que mesure la courbe de Keeling depuis 1958 ?`,
      options: [
        `La température moyenne globale`,
        `La concentration atmosphérique de **CO₂**, mesurée en continu au sommet du Mauna Loa à Hawaï`,
        `Le niveau des mers`,
        `L'épaisseur de la couche d'ozone`
      ],
      correcte: 1,
      explication: `Charles David Keeling a commencé en 1958 à mesurer le CO₂ atmosphérique au Mauna Loa. La courbe monte de manière monotone, de 315 ppm initialement à plus de 425 ppm aujourd'hui. C'est l'une des séries de données les plus emblématiques de la science contemporaine.`
    },
    {
      q: `À combien s'élève le réchauffement global moyen actuel par rapport à l'ère préindustrielle ?`,
      options: [
        `+0,3 °C`,
        `Environ +1,3 °C selon le 6ᵉ rapport du GIEC`,
        `+3 °C`,
        `+5 °C`
      ],
      correcte: 1,
      explication: `Le 6ᵉ rapport du GIEC (2021-2023) établit que le réchauffement moyen est d'environ +1,3 °C sur la dernière décennie. Les terres se réchauffent presque deux fois plus vite que les océans, et les régions polaires davantage encore.`
    },
    {
      q: `Quel est le rôle du GIEC ?`,
      options: [
        `Mener directement des recherches climatiques`,
        `Évaluer et synthétiser tous les six à huit ans la recherche climatique mondiale, sous double validation scientifique et diplomatique des 195 États membres`,
        `Imposer des sanctions économiques`,
        `Distribuer des financements aux pays pauvres`
      ],
      correcte: 1,
      explication: `Le GIEC n'effectue pas de recherche : il rassemble plusieurs milliers de scientifiques qui évaluent la littérature publiée. Chaque rapport est validé ligne par ligne par les gouvernements, ce qui en fait l'instance de consensus la plus solide jamais constituée sur un sujet scientifique.`
    },
    {
      q: `Que désigne un "point de bascule" climatique ?`,
      options: [
        `Un sommet diplomatique`,
        `Un seuil au-delà duquel un système climatique bascule vers un nouvel état stable, souvent irréversible à l'échelle humaine`,
        `Une éclipse solaire`,
        `Une baisse temporaire des émissions`
      ],
      correcte: 1,
      explication: `Calotte du Groenland, banquise, AMOC, pergélisol, forêt amazonienne, récifs coralliens… Une étude de 2022 identifie 16 points de bascule majeurs, dont 5 potentiellement franchissables dès le réchauffement actuel. Les enclenchements sont irréversibles, même si la fonte ou la transition prend des siècles.`
    },
    {
      q: `Que sont les scénarios SSP ?`,
      options: [
        `Des modèles météorologiques quotidiens`,
        `Des trajectoires socio-économiques (Shared Socioeconomic Pathways) projetant le climat de 2100 selon différents choix politiques et économiques, du SSP1-1.9 (+1,4 °C) au SSP5-8.5 (+4,4 °C)`,
        `Des sigles de partis politiques`,
        `Des grands traités internationaux`
      ],
      correcte: 1,
      explication: `Le GIEC utilise 5 grandes familles de scénarios SSP pour représenter les futurs possibles. Ils combinent hypothèses démographiques, économiques, énergétiques et politiques. La trajectoire actuelle se situe entre SSP2-4.5 et SSP3-7.0.`
    },
    {
      q: `Que désigne le mot "mitigation" en politique climatique ?`,
      options: [
        `Adoucir le discours public`,
        `Réduire les émissions de gaz à effet de serre — par opposition à l'**adaptation**, qui consiste à se préparer aux changements déjà inévitables`,
        `Compenser financièrement les pays touchés`,
        `Refroidir artificiellement l'atmosphère`
      ],
      correcte: 1,
      explication: `Mitigation et adaptation sont les deux leviers complémentaires. La mitigation vise à stabiliser la concentration atmosphérique de CO₂ (décarbonation). L'adaptation prépare les sociétés aux changements déjà engagés. Aucune politique réaliste ne peut négliger l'un ou l'autre.`
    },
    {
      q: `Pourquoi le méthane (CH₄) joue-t-il un rôle climatique disproportionné ?`,
      options: [
        `Il bloque la lumière du soleil`,
        `Il est environ 28 fois plus puissant que le CO₂ sur 100 ans (et 80 fois sur 20 ans), même s'il se dégrade plus vite dans l'atmosphère`,
        `Il accélère la fonte des glaces directement`,
        `Il n'a aucun effet climatique`
      ],
      correcte: 1,
      explication: `Le méthane provient principalement de l'élevage, de la riziculture, des fuites de gaz fossile et des décharges. Sa courte durée de vie atmosphérique (~12 ans) en fait un levier d'action particulièrement efficace : agir maintenant sur le méthane ralentit visiblement le réchauffement en quelques décennies.`
    }
  ]

});
