/* ===================================================================
   SUJET — L'affaire Jérôme Kerviel
   ===================================================================
   Scandale de trading à la Société Générale (2008) — 4,9 Mds € de
   perte, plus grosse fraude bancaire de l'histoire à sa date.
   Domaine : Économie
   =================================================================== */

window.CarnetDeSavoirs.register({
  meta: {
    id: 'jerome-kerviel',
    titre: `L'affaire <em>Jérôme Kerviel</em>`,
    domaines: ['Économie'],
    tags: ['trading', 'fraude', 'société générale', 'derivés', 'risque', 'banque'],
    difficulte: 2,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: ['marches-financiers', 'crise-subprimes'],
    date_creation: '2026-05-26',
    date_maj: '2026-08-18'
  },

  resume: `En janvier 2008, la Société Générale annonce avoir découvert une fraude interne d'une ampleur inédite : 4,9 milliards d'euros de perte, œuvre d'un trader trentenaire, Jérôme Kerviel. Un cas d'école sur les défaillances du contrôle interne bancaire, la culture du profit à court terme et la responsabilité individuelle dans un système collectif.`,

  points_cles: [
    `**Jérôme Kerviel** (né en 1977) est un trader du desk *Delta One* de la Société Générale, spécialisé dans l'arbitrage sur [futures]{accent} d'indices européens.`,
    `Entre 2006 et 2008, il accumule des positions directionnelles massives sur les indices boursiers (Eurostoxx, DAX) tout en les *masquant* par des opérations fictives symétriques.`,
    `En janvier 2008, la banque découvre l'ampleur du désastre : une exposition brute d'environ **50 milliards d'euros** — plus que ses fonds propres.`,
    `Le débouclage précipité des positions, dans un marché en chute, transforme une perte latente en perte réelle de **4,9 milliards d'euros**.`,
    `Kerviel est condamné en 2010 à 5 ans de prison (dont 3 ferme) et à des dommages initialement fixés à 4,9 Mds € — ramenés en appel puis annulés en cassation.`,
    `L'affaire révèle des [défaillances systémiques]{accent} du contrôle interne bancaire : alertes ignorées, incitations perverses, culture de la performance à tout prix.`
  ],

  carte_mentale: {
    central: 'jerome-kerviel',
    noeuds: [
      { id: 'jerome-kerviel', label: 'Jérôme Kerviel', description: `Trader de la Société Générale à l'origine, en 2008, de la plus grosse perte de trading interne de l'histoire bancaire.` },

      { id: 'contexte', label: 'Contexte', description: `Le desk Delta One, l'arbitrage sur dérivés d'indices, la culture du bonus.` },
      { id: 'mecanisme', label: 'Mécanisme de la fraude', description: `Positions directionnelles massives masquées par des opérations fictives.` },
      { id: 'decouverte', label: 'Découverte', description: `Une alerte de conformité, un débouclage précipité, une annonce fracassante.` },
      { id: 'proces', label: 'Procès', description: `Cinq ans de procédure, condamnation, appels, cassation partielle.` },
      { id: 'lecons', label: 'Leçons', description: `Ce que l'affaire a changé dans la régulation bancaire.` },

      { id: 'delta-one', label: 'Delta One', description: `Desk spécialisé dans les produits dérivés répliquant la performance d'un actif sous-jacent — souvent des indices.`, parent: 'contexte' },
      { id: 'bonus', label: 'Culture du bonus', description: `Rémunération variable indexée sur les résultats du desk — incite à la prise de risque asymétrique.`, parent: 'contexte' },

      { id: 'positions', label: 'Positions directionnelles', description: `Paris massifs sur la hausse (puis la baisse) des indices européens — non couverts.`, parent: 'mecanisme' },
      { id: 'fictives', label: 'Opérations fictives', description: `Transactions inventées avec des contreparties inexistantes pour équilibrer artificiellement le book.`, parent: 'mecanisme' },
      { id: 'controles', label: 'Contrôles contournés', description: `Utilisation des accès du middle office et connaissance des seuils d'alerte pour rester sous les radars.`, parent: 'mecanisme' },

      { id: 'alerte', label: 'Alerte Eurex', description: `Le 18 janvier 2008, la bourse allemande signale une anomalie sur des futures Eurostoxx.`, parent: 'decouverte' },
      { id: 'debouclage', label: 'Débouclage', description: `Trois jours (21-23 janvier) pour liquider 50 Mds € de positions dans un marché en chute libre.`, parent: 'decouverte' },

      { id: 'condamnation', label: 'Condamnation 2010', description: `5 ans de prison dont 3 ferme, 4,9 Mds € de dommages — quantum inédit.`, parent: 'proces' },
      { id: 'cassation', label: 'Cassation 2016', description: `La Cour de cassation annule les dommages ; nouveau procès ramène la somme à 1 M €.`, parent: 'proces' }
    ],
    liens: []
  },

  cours: [
    {
      type: 'texte',
      titre: `Un trader ordinaire, un desk stratégique`,
      contenu_md:
`Jérôme Kerviel entre à la Société Générale en 2000, à 23 ans, après une école de commerce moyenne — pas polytechnicien, pas de la caste habituelle des salles de marché parisiennes. Il passe cinq ans au **middle office** — l'arrière-boutique qui contrôle et enregistre les opérations des traders. Une expérience qui lui donnera, plus tard, la clé pour contourner ces mêmes contrôles.

En 2005, il rejoint le **front office** sur le desk **Delta One**, une équipe spécialisée dans les produits dérivés qui répliquent linéairement le prix d'un sous-jacent — d'où le nom, *delta* = 1. Le desk fait principalement de l'[arbitrage]{accent} : exploiter les micro-écarts de prix entre des futures d'indices et les paniers d'actions qui les composent. Le risque est en principe faible, la marge unitaire aussi, mais les volumes sont énormes. Un desk Delta One est censé être une machine à gains réguliers et modestes.

Ce n'est pas ce que Kerviel fait. Dès 2005, puis massivement à partir de 2007, il ouvre des **positions directionnelles** : de purs paris sur la direction du marché, sans couverture. Les gains sont plus larges, mais les pertes potentielles aussi. Or son mandat officiel ne le permet pas.`
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Le décor : La Défense',
      params: {
        image: 'images/jerome-kerviel--tours-socgen.jpg',
        legende: 'Les tours de la Société Générale à La Défense, siège du desk Delta One où se noue l\'affaire. (Photo Wikimedia Commons, licence Creative Commons — crédit selon le fichier)',
        hotspots: []
      }
    },

    {
      type: 'texte',
      titre: `Petit lexique : qu'est-ce qu'un <em>future</em> d'indice ?`,
      contenu_md: `Un **future** sur indice est un contrat à terme standardisé : on s'engage à acheter ou vendre à une date future la valeur d'un indice (Eurostoxx 50, DAX, CAC 40) à un prix fixé aujourd'hui. La grande caractéristique : un très fort [effet de levier]{accent}. Avec un dépôt de garantie de quelques pourcents du montant notionnel, on s'expose à la totalité de la variation. C'est pourquoi une position de 30 milliards d'euros peut être « portée » avec quelques centaines de millions de collatéral. C'est ce qui rend possible, mais aussi ce qui rend catastrophique, ce que fait Kerviel. Voir [[marches-financiers]].`
    },

    {
      type: 'texte',
      titre: `Le mécanisme de la <em>dissimulation</em>`,
      contenu_md:
`La question n'est pas seulement *comment* Kerviel prend des positions énormes — c'est *comment il les cache*. Chaque desk a des limites de risque, contrôlées quotidiennement. Une position ouverte de 30 milliards devrait déclencher une avalanche d'alertes.

Son système repose sur trois piliers.

D'abord, il [saisit dans le système]{accent} des **opérations fictives** : des transactions qui n'existent pas, avec des contreparties inventées, symétriques à ses vraies positions. Vu de la salle de contrôle, son book paraît équilibré.

Ensuite, il **modifie ou annule** ces fausses transactions juste avant les échéances où elles seraient contrôlées — puis en saisit d'autres après. Il connaît, pour y avoir travaillé, les fenêtres de vérification du middle office.

Enfin, quand des questions surgissent malgré tout, il fournit des **faux e-mails** et de **fausses confirmations** aux services de contrôle. Plusieurs alertes internes sont ainsi neutralisées entre 2006 et 2007.

Le débat sur son procès portera sur un point crucial : sa hiérarchie *savait-elle* ? Kerviel affirme que oui, ou du moins qu'elle fermait les yeux tant qu'il gagnait. La banque nie fermement. La justice trancha en faveur de la banque, tout en reconnaissant des « défaillances graves » du contrôle interne.`
    },

    {
      type: 'widget',
      titre: `Chronologie de l'affaire`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '2005', titre: 'Arrivée sur Delta One', description: `Après cinq ans au middle office, Kerviel devient trader arbitragiste.` },
          { date: '2007', titre: 'Premières positions massives', description: `À partir de mars 2007, il ouvre des positions directionnelles atteignant plusieurs milliards.` },
          { date: 'Déc. 2007', titre: 'Gain latent de 1,5 Md €', description: `Grâce à un pari baissier sur les subprimes qui commencent à s'effondrer, il est virtuellement en très gros bénéfice.` },
          { date: 'Janv. 2008', titre: 'Bascule haussière', description: `Il retourne complètement ses positions vers un pari haussier — au moment où le marché commence à plonger.` },
          { date: '18 janv. 2008', titre: 'Alerte Eurex', description: `La bourse allemande signale à la SocGen des positions anormales.` },
          { date: '21-23 janv. 2008', titre: 'Débouclage catastrophe', description: `La banque liquide en trois jours 50 Mds € de positions dans un marché en chute libre.` },
          { date: '24 janv. 2008', titre: `Annonce publique`, description: `La SocGen révèle une perte de 4,9 Mds €. Choc mondial.` },
          { date: '5 oct. 2010', titre: 'Condamnation en 1re instance', description: `5 ans de prison dont 3 ferme, dommages fixés à 4,9 Mds €.` },
          { date: '19 mars 2014', titre: 'Confirmation en appel', description: `Peine confirmée. Kerviel entre en prison.` },
          { date: '23 sept. 2016', titre: 'Cassation partielle', description: `La Cour d'appel de Versailles ramène les dommages à 1 M €. La responsabilité pénale demeure.` }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Chiffre clé',
      contenu_md: `Au moment de la découverte, le **notionnel brut** des positions de Kerviel s'élève à environ **50 milliards d'euros** — soit **plus que les fonds propres** de la Société Générale à l'époque. Une faillite bancaire majeure n'a été évitée que grâce à la solidité générale du bilan et à la vitesse du débouclage.`
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Les ordres de grandeur de l\'affaire',
      params: {
        image: 'data:image/png;base64,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',
        legende: 'Comparaison des montants en jeu, en milliards d\'euros.',
        hotspots: []
      }
    },

    {
      type: 'texte',
      titre: `Le débouclage : quand vendre aggrave la perte`,
      contenu_md:
`Le 20 janvier 2008, la Société Générale prend la mesure du désastre. Elle a trois jours (le week-end du 19-20 puis les 21-23 janvier) pour vendre discrètement 50 milliards d'euros de positions avant que le marché n'apprenne quoi que ce soit.

Or ces trois jours coïncident avec le début d'une chute mondiale des marchés — les premiers effets visibles de la crise des subprimes. Chaque milliard vendu pèse sur les cours, ce qui aggrave la perte sur ce qu'il reste à vendre. C'est un cercle vicieux classique en trading. La banque perd ainsi environ **6,4 Mds €** sur le débouclage, à comparer à un gain latent de 1,5 Mds € en fin d'année précédente. Solde net : **-4,9 Mds €**.

Une question a longtemps hanté les analystes : et si la banque avait attendu ? Certains estiment que, dans un marché qui rebondit deux mois plus tard, la perte réelle aurait pu être bien moindre. Mais ce raisonnement ignore le risque systémique — la SocGen ne pouvait juridiquement pas conserver ces positions sans les faire valider par ses instances de risque, ce qui était impossible sans révéler la fraude.`
    },

    {
      type: 'widget',
      titre: `Ce que l'affaire a changé`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          { titre: `Renforcement du contrôle interne`, description: `Toutes les grandes banques ont durci leurs procédures : double authentification, audits inopinés, séparation étanche middle/front, obligation de prendre des congés (les fraudes se voient pendant les vacances du trader).` },
          { titre: `Nouveaux standards Bâle`, description: `L'affaire a alimenté les discussions ayant mené à **Bâle III** : capital additionnel pour couvrir le risque opérationnel, y compris la fraude interne.` },
          { titre: `Débat sur la culture de risque`, description: `L'idée qu'une culture organisationnelle qui glorifie le profit à court terme *produit* mécaniquement des Kerviel a gagné du terrain. Programmes de *conduct risk*, revues éthiques.` },
          { titre: `Statut du trader lanceur d'alerte`, description: `Kerviel s'est présenté comme victime d'un système ; le débat sur la responsabilité individuelle vs. collective dans la fraude bancaire reste ouvert.` }
        ]
      }
    }
  ],

  quiz: [
    {
      q: `Sur quel type de produits Jérôme Kerviel prenait-il ses positions ?`,
      options: [
        `Des actions individuelles`,
        `Des obligations souveraines`,
        `Des contrats à terme (futures) sur indices européens`,
        `Des matières premières agricoles`
      ],
      correcte: 2,
      explication: `Il opérait sur le desk Delta One, spécialisé dans les futures d'indices européens (Eurostoxx, DAX) — produits à fort effet de levier.`
    },
    {
      q: `Quel est le montant de la perte finalement subie par la Société Générale ?`,
      options: [`0,9 Md €`, `2,5 Mds €`, `4,9 Mds €`, `10 Mds €`],
      correcte: 2,
      explication: `4,9 milliards d'euros — plus grosse perte de trading interne de l'histoire bancaire à sa date. Elle résulte principalement du débouclage précipité dans un marché en chute.`
    },
    {
      q: `Comment Kerviel dissimulait-il ses positions ?`,
      options: [
        `En les portant sur un compte offshore`,
        `Par des transactions fictives symétriques dans le système`,
        `En les ouvrant sur des marchés étrangers`,
        `En les enregistrant hors bilan`
      ],
      correcte: 1,
      explication: `Il saisissait de fausses opérations symétriques, avec des contreparties inventées, pour équilibrer visuellement son book. Sa connaissance du middle office lui permettait de contourner les fenêtres de contrôle.`
    },
    {
      q: `Quel événement de janvier 2008 précipite la découverte de la fraude ?`,
      options: [
        `Une inspection surprise de l'AMF`,
        `Une alerte d'Eurex sur des positions anormales`,
        `La dénonciation d'un collègue`,
        `Un audit interne annuel`
      ],
      correcte: 1,
      explication: `Le 18 janvier 2008, Eurex — la bourse à terme allemande — signale à la SocGen des positions inhabituelles. Le contrôle interne remonte à Kerviel.`
    },
    {
      q: `Quel était le poste précédent de Kerviel avant de devenir trader ?`,
      options: [
        `Analyste crédit`,
        `Middle office`,
        `Conseiller clientèle`,
        `Auditeur externe`
      ],
      correcte: 1,
      explication: `Cinq ans au middle office lui avaient donné une connaissance intime des procédures de contrôle — connaissance qu'il utilisera ensuite pour les contourner.`
    },
    {
      q: `Quelle décision majeure la Cour de cassation prend-elle en 2016 ?`,
      options: [
        `Elle acquitte Kerviel`,
        `Elle confirme les 4,9 Mds € de dommages`,
        `Elle casse la partie civile — les dommages seront ramenés à 1 M € en appel`,
        `Elle ordonne un nouveau procès pénal complet`
      ],
      correcte: 2,
      explication: `La Cour de cassation confirme la culpabilité pénale mais casse la partie civile en raison des « fautes » de la banque. La Cour d'appel de Versailles ramène ensuite les dommages à 1 million d'euros symboliques.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Delta One',
      definition: `Desk de trading spécialisé dans les produits dérivés qui répliquent linéairement le prix de leur sous-jacent (delta = 1). Vise principalement l'arbitrage entre futures d'indices et paniers d'actions, avec de faibles marges unitaires mais de gros volumes.`
    },
    {
      terme: `Future d'indice`,
      definition: `Contrat à terme standardisé sur la valeur d'un indice boursier (Eurostoxx, DAX…). Fort **effet de levier** : un dépôt de garantie de quelques pourcents suffit à porter une exposition totale. Voir [[marches-financiers]].`
    },
    {
      terme: 'Middle office',
      definition: `Fonction bancaire d'appui aux salles de marché : validation, valorisation, contrôle des risques et de la conformité des opérations enregistrées par les traders. Distinct du back office (règlement-livraison) et du front office (trading).`
    },
    {
      terme: `Position directionnelle`,
      definition: `Prise de position financière qui parie sur l'évolution du prix d'un actif (à la hausse ou à la baisse), sans couverture symétrique. À la différence de l'arbitrage, elle expose le portefeuille au risque de marché plein.`
    },
    {
      terme: 'Débouclage',
      definition: `Opération consistant à liquider (par des transactions inverses) une position ouverte sur un marché. Un débouclage massif et rapide déplace mécaniquement les prix contre le vendeur — d'où l'aggravation de la perte dans le cas Kerviel.`
    },
    {
      terme: 'Risque opérationnel',
      definition: `Risque de perte résultant de défaillances internes : erreurs humaines, fraude, dysfonctionnements informatiques, failles de contrôle. Distinct du risque de marché et du risque de crédit. Réglementé par les accords de **Bâle II** puis Bâle III.`
    },
    {
      terme: 'Bâle III',
      definition: `Ensemble de standards prudentiels internationaux adoptés après 2010, en réponse à la crise financière. Renforce les exigences de fonds propres, introduit des ratios de liquidité et un ratio de levier. Inclut des exigences accrues sur le risque opérationnel.`
    }
  ]
});
