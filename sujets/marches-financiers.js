/* ===================================================================
   SUJET — Les marchés financiers
   ===================================================================
   Architecture des marchés, classes d'actifs, acteurs, dérivés,
   régulation post-2008.
   Domaine : Économie
   =================================================================== */

window.CarnetDeSavoirs.register({
  meta: {
    id: 'marches-financiers',
    titre: 'Les <em>marchés financiers</em>',
    domaines: ['Économie'],
    tags: ['bourse', 'actions', 'obligations', 'dérivés', 'finance', 'capital', 'liquidité'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['epargne-et-placements', 'capitalisme', 'inflation', 'monnaies-numeriques', 'probabilites'],
    date_creation: '2026-05-26',
    date_maj: '2026-05-26'
  },

  resume: `Comprendre l'architecture des marchés financiers : comment l'épargne devient capital, comment se forment les prix, et comment les instruments dérivés transfèrent le risque entre les agents économiques.`,

  points_cles: [
    `Un **marché financier** confronte une [offre]{accent} et une [demande]{accent} de capitaux, et lui assigne un **prix**.`,
    `Le **marché primaire** émet des titres neufs ; le **marché secondaire** échange les titres déjà existants — c'est lui qui assure la *liquidité*.`,
    `Les grandes classes d'actifs sont les **actions** (parts de capital), les **obligations** (dettes négociables), les **devises** et les **matières premières**.`,
    `Un **produit dérivé** est un contrat dont la valeur dépend d'un [sous-jacent]{accent} : action, indice, taux, devise, matière première.`,
    `Les trois grandes familles de dérivés sont les **contrats à terme** (futures/forwards), les **options** et les **swaps**.`,
    `Les dérivés permettent à la fois de se *couvrir* contre un risque, de *spéculer* avec un fort effet de levier, et de réaliser de l'*arbitrage*.`,
    `La **régulation** (AMF, SEC, BCE, BRI…) encadre transparence, fonds propres et concentration du risque depuis la crise de 2008.`
  ],

  carte_mentale: {
    central: 'marches-financiers',
    noeuds: [
      { id: 'marches-financiers', label: 'Marchés financiers', description: `Lieu — physique ou électronique — où se rencontrent **offre** et **demande** de capitaux. Le prix qui en sort agrège l'information disponible à l'instant t.` },

      { id: 'compartiments', label: 'Compartiments', description: `Le marché primaire **émet** les titres neufs ; le marché secondaire les **échange** ensuite.` },
      { id: 'actifs', label: `Classes d'actifs`, description: `Quatre grandes familles : actions, obligations, devises, matières premières — chacune avec son couple rendement-risque propre.` },
      { id: 'acteurs', label: 'Acteurs', description: `Émetteurs, investisseurs, intermédiaires et régulateurs : chacun joue un rôle complémentaire dans la formation des prix.` },
      { id: 'derives', label: 'Produits dérivés', description: `Contrats dont la valeur **dérive** d'un sous-jacent. Permettent de *couvrir*, *spéculer* ou *arbitrer*.` },
      { id: 'regulation', label: 'Régulation', description: `Autorités publiques (AMF, SEC, BCE, BRI) et règles prudentielles qui encadrent le système après 2008.` },

      { id: 'primaire', label: 'Marché primaire', description: `Émission de titres **neufs** : IPO, augmentations de capital, émissions obligataires. L'argent va à l'émetteur.`, parent: 'compartiments' },
      { id: 'secondaire', label: 'Marché secondaire', description: `Échange de titres **déjà existants** entre investisseurs. Source principale de la [liquidité]{accent}.`, parent: 'compartiments' },

      { id: 'actions', label: 'Actions', description: `Parts du capital d'une société. Rendement = dividendes + plus-value, mais perte possible jusqu'au capital investi.`, parent: 'actifs' },
      { id: 'obligations', label: 'Obligations', description: `Titres de dette à échéance fixe. Versent des coupons. Risque = défaut de l'émetteur et hausse des taux.`, parent: 'actifs' },
      { id: 'devises', label: 'Devises (Forex)', description: `Plus gros marché mondial en volume — environ **7 500 milliards** de dollars échangés chaque jour.`, parent: 'actifs' },
      { id: 'matieres', label: 'Matières premières', description: `Pétrole, or, blé, cuivre… négociés principalement via contrats à terme.`, parent: 'actifs' },

      { id: 'investisseurs', label: 'Investisseurs', description: `Particuliers, fonds de pension, assureurs, hedge funds, États (fonds souverains).`, parent: 'acteurs' },
      { id: 'intermediaires', label: 'Intermédiaires', description: `Banques d'investissement, courtiers, chambres de compensation, plateformes (Euronext, NYSE, Nasdaq).`, parent: 'acteurs' },

      { id: 'futures', label: 'Contrats à terme', description: `Obligation d'acheter ou vendre un actif à une **date** et à un **prix** fixés à l'avance.`, parent: 'derives' },
      { id: 'options', label: 'Options', description: `**Droit** (et non obligation) d'acheter (*call*) ou de vendre (*put*) un actif à un prix fixé.`, parent: 'derives' },
      { id: 'swaps', label: 'Swaps', description: `Échange de flux financiers entre deux contreparties — taux fixe contre taux variable, par exemple.`, parent: 'derives' }
    ],
    liens: []
  },

  cours: [
    {
      type: 'texte',
      titre: `Qu'est-ce qu'un <em>marché financier</em> ?`,
      contenu_md:
`Un marché financier est un lieu — physique ou, le plus souvent aujourd'hui, électronique — où des agents qui disposent d'un excédent d'épargne rencontrent des agents qui ont besoin de capitaux. De cette rencontre émerge un [prix]{accent} : taux d'intérêt, cours d'une action, parité d'une devise.

Trois fonctions économiques s'y croisent. Le **financement** d'abord : les entreprises et les États y lèvent les capitaux nécessaires à leurs projets. La **liquidité** ensuite : un investisseur peut à tout moment céder ses titres à un autre, sans demander la permission à l'émetteur. La **gestion du risque** enfin : par l'assurance, la couverture, la diversification — et tout particulièrement par les produits dérivés.

Ce que l'on appelle improprement *« la Bourse »* recouvre en réalité une mosaïque de marchés interconnectés : actions, obligations, changes, matières premières, dérivés.`
    },

    {
      type: 'texte',
      titre: `Marché primaire et marché secondaire`,
      contenu_md:
`La distinction est fondamentale. Sur le **marché primaire**, des titres *neufs* sont créés et vendus pour la première fois : c'est l'introduction en Bourse (*IPO*), l'augmentation de capital, l'émission obligataire d'un État. L'argent va directement à l'émetteur — l'entreprise ou le Trésor public.

Sur le **marché secondaire**, ces titres déjà existants changent de mains entre investisseurs. L'émetteur ne reçoit rien à ce stade. Pourtant, c'est ce marché qui rend le précédent possible : sans la promesse de pouvoir [revendre]{accent} son action demain, personne n'accepterait de l'acheter aujourd'hui. Le marché secondaire est l'usine à *liquidité* du système.`
    },

    {
      type: 'widget',
      titre: `Les quatre grandes classes d'actifs`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: 'Capital', titre: 'Actions', description: `Parts du capital d'une société. Rendement attendu élevé sur longue durée, mais volatilité importante. Rémunérées par les *dividendes* et la *plus-value*.` },
          { tag: 'Dette', titre: 'Obligations', description: `Titres de créance à échéance fixe versant un *coupon*. Moins volatiles que les actions, mais sensibles aux **taux d'intérêt** et au risque de défaut.` },
          { tag: 'Forex', titre: 'Devises', description: `Échange de monnaies. Le marché le plus liquide du monde — environ **7 500 Mds$** de volume quotidien. Cours guidé par taux, inflation, balance commerciale.` },
          { tag: 'Commodities', titre: 'Matières premières', description: `Pétrole, or, blé, cuivre… Négociées surtout via des contrats à terme, car la livraison physique est lourde.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Qui sont les acteurs ?`,
      contenu_md:
`Quatre familles d'acteurs animent les marchés.

Les **émetteurs** — entreprises, États, collectivités — lèvent des capitaux en vendant des titres. Les **investisseurs** apportent ces capitaux : ce sont les ménages, mais surtout les *investisseurs institutionnels* (fonds de pension, compagnies d'assurance, fonds souverains, hedge funds) qui pèsent la grande majorité des volumes.

Entre les deux, les **intermédiaires** — banques d'investissement, courtiers, *market makers* — fournissent les services d'exécution, de tenue de marché et de compensation. Les plateformes (Euronext, NYSE, Nasdaq, Deutsche Börse) hébergent les transactions.

Enfin, les **régulateurs** (AMF en France, SEC aux États-Unis, ESMA au niveau européen) édictent les règles et surveillent les abus.`
    },

    {
      type: 'encadre',
      label: 'À retenir',
      contenu_md: `La [liquidité]{accent} d'un marché mesure la capacité à y acheter ou vendre **rapidement** et **sans déplacer le prix**. C'est elle qui rend le marché secondaire indispensable au marché primaire.`
    },

    {
      type: 'texte',
      titre: `Les <em>marchés dérivés</em> : transférer le risque`,
      contenu_md:
`Un **produit dérivé** est un contrat financier dont la valeur ne tient pas à lui-même, mais à un autre actif : le [sous-jacent]{accent}. Ce sous-jacent peut être une action, un indice (CAC 40, S&P 500), un taux d'intérêt, une devise, une matière première, voire un événement (météo, défaut de crédit).

Les dérivés ne servent pas à *posséder* l'actif — ils servent à *parier sur son évolution*, à *s'en protéger*, ou à *l'arbitrer*. Trois usages bien distincts cohabitent. Un agriculteur qui vend sa récolte à terme se [couvre]{accent} contre une chute du prix du blé. Un hedge fund qui achète des options se livre à de la *spéculation*. Un trader qui exploite un écart de prix entre deux places fait de *l'arbitrage*.

Leur force, c'est aussi leur danger : l'**effet de levier**. Avec une mise réduite, on s'expose à des variations bien plus larges que la mise elle-même. La crise de 2008, déclenchée par les dérivés de crédit (*CDS*) adossés aux subprimes, a rappelé que ces instruments amplifient autant les gains que les pertes.`
    },

    {
      type: 'widget',
      titre: `Les trois grandes familles de dérivés`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          { titre: 'Contrats à terme (futures et forwards)', description: `Engagement **ferme** d'acheter ou de vendre un actif à une date future, à un prix fixé aujourd'hui. Les *futures* sont standardisés et négociés en Bourse, les *forwards* sont sur mesure et de gré à gré.` },
          { titre: 'Options', description: `**Droit** (et non obligation) d'acheter (*call*) ou de vendre (*put*) le sous-jacent à un prix d'exercice (*strike*) jusqu'à une échéance. L'acheteur paie une [prime]{accent} ; le vendeur l'encaisse en contrepartie de son risque.` },
          { titre: 'Swaps', description: `Échange de flux financiers entre deux contreparties. Le plus courant : le *swap de taux* — l'une paie un taux fixe, l'autre un taux variable, sur un même nominal.` }
        ]
      }
    },

    {
      type: 'widget',
      titre: `Payoff d'un call à l'échéance`,
      composant: 'Equation',
      params: {
        tex: 'P_T = \\max(S_T - K,\\ 0) - c_0',
        legende: `Gain net à l'échéance pour l'acheteur d'un call : différence entre le cours du sous-jacent S_T et le strike K, plancher à zéro, moins la prime c_0 payée à l'origine.`,
        affichage: 'block'
      }
    },

    {
      type: 'widget',
      titre: `Histoire des marchés financiers`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1602', titre: `Première Bourse — Amsterdam`, description: `La **Compagnie néerlandaise des Indes orientales** émet les premières actions négociables. Naissance du marché secondaire.` },
          { date: '1792', titre: `Buttonwood Agreement`, description: `Vingt-quatre courtiers signent à New York l'accord qui deviendra le [NYSE]{accent}.` },
          { date: '1973', titre: `Modèle de Black-Scholes`, description: `Publication de la formule de valorisation des options — elle ouvre la voie à l'explosion moderne des marchés dérivés.` },
          { date: '1987', titre: `Lundi noir`, description: `Le Dow Jones perd **22,6 %** en une séance. Première grande crise de l'ère électronique.` },
          { date: '2008', titre: `Crise des subprimes`, description: `Effondrement de Lehman Brothers ; les dérivés de crédit (*CDS*) entraînent le système bancaire mondial.` },
          { date: '2010', titre: `Dodd-Frank Act`, description: `Réponse réglementaire américaine : compensation centralisée des dérivés OTC, supervision systémique.` },
          { date: '2024', titre: `ETF Bitcoin spot`, description: `La SEC autorise les premiers ETF Bitcoin au comptant — étape symbolique de l'intégration des crypto-actifs aux marchés régulés.` }
        ]
      }
    },

    {
      type: 'widget',
      titre: `Quelques ordres de grandeur de volume quotidien`,
      composant: 'SelecteurValeurs',
      params: {
        unite: 'Mds $',
        indexInitial: 0,
        options: [
          { label: 'Forex', valeur: 7500, description: `Le marché des changes — de très loin le plus liquide du monde (BIS, 2022).` },
          { label: 'Actions (global)', valeur: 600, description: `Volume quotidien moyen toutes places confondues.` },
          { label: 'Obligations US Treasuries', valeur: 900, description: `Le marché de la dette souveraine américaine — référence mondiale du sans-risque.` },
          { label: 'Dérivés OTC (nominal)', valeur: 2000, description: `Volume en montant notionnel — le réel transfert de risque est plus faible.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Régulation et risques systémiques`,
      contenu_md:
`Les marchés financiers ne s'autorégulent pas. Leur efficacité même — la rapidité de propagation de l'information — devient un défaut lorsqu'elle propage la panique. Quatre catégories de risques sont surveillées : le risque de *marché* (variation des prix), de *crédit* (défaut d'une contrepartie), de *liquidité* (impossibilité de vendre) et le risque *systémique* (effondrement en chaîne).

La crise de 2008 a marqué un tournant. Les régulateurs ont imposé la compensation centralisée des dérivés de gré à gré, renforcé les exigences en **fonds propres** des banques (Bâle III), et multiplié les obligations de transparence. L'enjeu d'aujourd'hui se déplace vers les acteurs *non-bancaires* (gestionnaires d'actifs, plateformes crypto) et vers les risques liés au climat et à l'algorithmisation des échanges.`
    }
  ],

  quiz: [
    {
      q: `Quelle est la différence essentielle entre marché primaire et marché secondaire ?`,
      options: [
        `Le primaire concerne les actions, le secondaire les obligations`,
        `Le primaire émet des titres neufs, le secondaire échange ceux qui existent déjà`,
        `Le primaire est réservé aux institutionnels, le secondaire aux particuliers`,
        `Il n'y a pas de différence réelle, ce sont deux termes pour la même chose`
      ],
      correcte: 1,
      explication: `Sur le marché primaire, l'émetteur reçoit l'argent contre des titres neufs (IPO, émission obligataire). Sur le secondaire, les titres existants changent de mains entre investisseurs.`
    },
    {
      q: `Quelle classe d'actifs représente le plus gros volume d'échange quotidien au monde ?`,
      options: [
        `Les actions cotées`,
        `Les obligations souveraines`,
        `Les devises (Forex)`,
        `Les matières premières`
      ],
      correcte: 2,
      explication: `Le marché des changes brasse environ 7 500 milliards de dollars par jour selon la Banque des règlements internationaux — bien plus que toute autre classe d'actifs.`
    },
    {
      q: `Qu'est-ce qu'un produit dérivé ?`,
      options: [
        `Un titre émis en seconde intention par une entreprise`,
        `Un contrat dont la valeur dépend d'un actif sous-jacent`,
        `Une action versant un dividende variable`,
        `Une obligation indexée sur l'inflation`
      ],
      correcte: 1,
      explication: `Un dérivé n'a pas de valeur propre : il tire la sienne d'un sous-jacent (action, indice, taux, devise, matière première…).`
    },
    {
      q: `Quelle est la différence entre une option et un contrat à terme (future) ?`,
      options: [
        `Aucune, ce sont des synonymes`,
        `L'option est un droit, le future est une obligation`,
        `L'option porte sur des actions, le future sur des matières premières`,
        `L'option est cotée, le future est de gré à gré`
      ],
      correcte: 1,
      explication: `Le détenteur d'une option peut exercer ou non son droit. Le détenteur d'un future est tenu d'exécuter le contrat à l'échéance.`
    },
    {
      q: `Qu'appelle-t-on l'effet de levier sur les produits dérivés ?`,
      options: [
        `Le pouvoir des banques centrales sur les taux`,
        `La capacité à s'exposer à des variations supérieures à la mise initiale`,
        `La règle imposant un capital minimum aux investisseurs`,
        `L'intervention coordonnée de plusieurs régulateurs`
      ],
      correcte: 1,
      explication: `Avec une faible mise (prime, dépôt de garantie), on s'expose à des mouvements bien plus larges que la somme engagée — d'où l'amplification des gains comme des pertes.`
    },
    {
      q: `Quel est le rôle de la chambre de compensation sur un marché dérivé ?`,
      options: [
        `Fixer le prix des sous-jacents`,
        `Servir de contrepartie centrale et garantir la bonne exécution des contrats`,
        `Émettre les actions et obligations`,
        `Détenir l'épargne des particuliers`
      ],
      correcte: 1,
      explication: `La chambre de compensation s'interpose entre acheteur et vendeur : elle garantit l'exécution même si une contrepartie fait défaut, ce qui réduit le risque de crédit.`
    },
    {
      q: `Quelle crise a conduit à imposer la compensation centralisée des dérivés de gré à gré ?`,
      options: [
        `La crise asiatique de 1997`,
        `L'éclatement de la bulle internet en 2000`,
        `La crise des subprimes de 2008`,
        `La crise de la dette grecque de 2011`
      ],
      correcte: 2,
      explication: `La défaillance en chaîne déclenchée par les CDS adossés aux subprimes en 2008 a motivé Dodd-Frank aux États-Unis et EMIR en Europe — qui imposent la compensation centralisée.`
    },
    {
      q: `Quelle fonction économique principale remplit le marché secondaire ?`,
      options: [
        `Permettre aux entreprises de lever de nouveaux capitaux`,
        `Fixer le taux directeur de la banque centrale`,
        `Apporter la liquidité indispensable au marché primaire`,
        `Fiscaliser les transactions financières`
      ],
      correcte: 2,
      explication: `Sans la promesse de pouvoir revendre, personne n'achèterait sur le primaire. Le secondaire est l'usine à liquidité du système.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Liquidité',
      definition: `Capacité d'un actif à être acheté ou vendu **rapidement** et **sans déplacer significativement son prix**. Plus un marché est liquide, plus l'écart entre prix d'achat et prix de vente (*spread*) est faible.`
    },
    {
      terme: 'Action',
      definition: `Titre représentant une **part du capital** d'une société. Donne droit à un *dividende* (variable) et à un droit de vote en assemblée générale. La perte maximale est limitée au capital investi.`
    },
    {
      terme: 'Obligation',
      definition: `Titre de **créance** émis par une entreprise ou un État, à échéance définie. Verse un *coupon* (intérêt) à l'investisseur. Le risque principal est le défaut de l'émetteur et la sensibilité aux taux d'intérêt.`
    },
    {
      terme: 'Marché primaire',
      definition: `Compartiment du marché financier où les titres sont **émis pour la première fois** (introductions en Bourse, augmentations de capital, émissions obligataires). Les fonds vont directement à l'émetteur.`
    },
    {
      terme: 'Produit dérivé',
      definition: `Contrat financier dont la valeur dépend d'un actif [sous-jacent]{accent} (action, indice, taux, devise, matière première). Sert à se couvrir, à spéculer ou à arbitrer, avec un fort effet de levier.`
    },
    {
      terme: 'Sous-jacent',
      definition: `Actif de référence dont **dérive** la valeur d'un produit dérivé. Peut être une action, un panier (indice), un taux, une devise, une matière première, voire un événement (défaut de crédit, indice climatique).`
    },
    {
      terme: 'Option',
      definition: `Contrat donnant le **droit**, mais non l'obligation, d'acheter (*call*) ou de vendre (*put*) un sous-jacent à un prix d'exercice fixé, jusqu'à une échéance. L'acheteur paie une *prime* au vendeur.`
    },
    {
      terme: 'Effet de levier',
      definition: `Mécanisme par lequel une mise initiale réduite expose à des variations bien **supérieures** à cette mise — typique des dérivés et de l'endettement. Amplifie symétriquement les gains et les pertes.`
    },
    {
      terme: 'Marché de gré à gré (OTC)',
      definition: `Marché où les contrats sont négociés **bilatéralement** entre deux contreparties, hors d'une Bourse organisée. Permet des contrats sur mesure, mais expose à un risque de contrepartie plus élevé qu'en marché organisé.`
    }
  ]
});
