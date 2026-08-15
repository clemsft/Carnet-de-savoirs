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
    date_maj: '2026-05-26'
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
      type: 'texte',
      titre: `Petit lexique : qu'est-ce qu'un *future* d'indice ?`,
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
          { titre: `Renforcement du **contrôle interne**`, description: `Toutes les grandes banques ont durci leurs procédures : double authentification, audits inopinés, séparation étanche middle/front, obligation de prendre des congés (les fraudes se voient pendant les vacances du trader).` },
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
