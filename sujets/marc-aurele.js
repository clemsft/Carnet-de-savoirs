/* ===================================================================
   SUJET — Marc Aurèle
   ===================================================================
   Empereur philosophe (121-180), figure du stoïcisme impérial et
   auteur des Pensées pour moi-même.
   Domaine : Philosophie / Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({
  meta: {
    id: 'marc-aurele',
    titre: '<em>Marc Aurèle</em>',
    domaines: ['Philosophie', 'Histoire'],
    tags: ['stoïcisme', 'rome', 'empereur', 'pensées', 'sagesse', 'antiquité'],
    difficulte: 2,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: ['stoicisme', 'rome-antique'],
    date_creation: '2026-05-26',
    date_maj: '2026-08-18'
  },

  resume: `Dernier des « cinq bons empereurs », Marc Aurèle règne sur Rome à son apogée (161-180) tout en tenant, la nuit sous sa tente militaire, un journal philosophique — les *Pensées pour moi-même* — qui reste le plus haut témoignage du stoïcisme antique.`,

  points_cles: [
    `**Marc Aurèle** (121-180) est le dernier des cinq [empereurs adoptifs]{accent} qui ont porté Rome à son maximum d'extension et de stabilité.`,
    `Son règne est marqué par la **peste antonine** (165-180) et les *guerres marcomanes*, qui l'obligent à passer plus de dix ans sur le limes danubien.`,
    `Les **Pensées pour moi-même** (*Ta eis heauton*) sont un journal privé, écrit en grec, jamais destiné à publication — d'où sa singulière authenticité.`,
    `Sa philosophie prolonge le stoïcisme d'**Épictète** et de **Sénèque** : distinction entre ce qui dépend de nous et ce qui n'en dépend pas, primat du *devoir cosmique*, méditation sur la mort.`,
    `Sa succession — son fils **Commode** — marque symboliquement la fin de l'*ère antonine* et l'entrée dans une longue crise du IIIᵉ siècle.`,
    `Il est devenu, de la Renaissance à nos jours, l'archétype du *philosophe-roi* rêvé par Platon.`
  ],

  carte_mentale: {
    central: 'marc-aurele',
    noeuds: [
      { id: 'marc-aurele', label: 'Marc Aurèle', description: `Empereur romain (161-180), stoïcien, auteur des *Pensées pour moi-même*.` },

      { id: 'vie', label: 'Vie et règne', description: `De l'enfance patricienne à la co-régence, puis vingt ans d'un règne largement consacré à la guerre.` },
      { id: 'philosophie', label: 'Philosophie', description: `Un stoïcisme intériorisé, tourné vers l'examen quotidien de soi et l'acceptation du cours des choses.` },
      { id: 'oeuvre', label: 'Pensées', description: `Un journal en douze livres, écrit en grec, jamais publié de son vivant.` },
      { id: 'contexte', label: 'Contexte', description: `Rome à son apogée, mais déjà minée par la peste et les pressions barbares.` },
      { id: 'posterite', label: 'Postérité', description: `Le prince philosophe, référence permanente des humanistes et des modernes.` },

      { id: 'adoption', label: 'Adoption par Antonin', description: `Hadrien orchestre sa succession : Antonin le Pieux adopte Marc.`, parent: 'vie' },
      { id: 'coregence', label: 'Co-règne avec Vérus', description: `Fait rare : partage effectif du pouvoir avec Lucius Verus jusqu'en 169.`, parent: 'vie' },
      { id: 'commode', label: 'Commode', description: `Son fils, écarté du modèle adoptif — rupture qui achève l'âge d'or antonin.`, parent: 'vie' },

      { id: 'dichotomie', label: 'Dichotomie du contrôle', description: `Ce qui dépend de nous (jugements, désirs) ≠ ce qui n'en dépend pas.`, parent: 'philosophie' },
      { id: 'logos', label: 'Logos cosmique', description: `Raison divine ordonnant l'univers — s'y accorder, c'est vivre selon la nature.`, parent: 'philosophie' },
      { id: 'memento', label: 'Memento mori', description: `Méditer la mort comme *ars vivendi* — non morbide mais lucide.`, parent: 'philosophie' },

      { id: 'peste', label: 'Peste antonine', description: `Pandémie de variole ou rougeole (165-180), sept à dix millions de morts estimés.`, parent: 'contexte' },
      { id: 'marcomans', label: 'Guerres marcomanes', description: `Coalition germanique franchit le Danube en 166 ; Rome met vingt ans à rétablir la frontière.`, parent: 'contexte' }
    ],
    liens: []
  },

  cours: [
    {
      type: 'texte',
      titre: `L'improbable itinéraire d'un empereur philosophe`,
      contenu_md:
`Rien ne destinait Marcus Annius Verus, né en 121 dans une riche famille sénatoriale d'origine hispanique, à devenir empereur — sinon l'œil de l'empereur **Hadrien**. Repéré très jeune pour sa gravité (Hadrien le surnomme *Verissimus*, « le très véridique »), il est intégré au dispositif de succession dynastique par adoption qui fait la stabilité du IIᵉ siècle romain.

Hadrien meurt en 138. Antonin le Pieux, désigné successeur, adopte à son tour Marc et Lucius Verus. Vingt-trois ans plus tard, en 161, Marc succède à Antonin — mais associe immédiatement Lucius au pouvoir, cas unique dans l'histoire impériale. C'est le premier [co-règne]{accent} romain.

Sa formation, elle, est déjà entièrement philosophique : douze professeurs de rhétorique et de philosophie se succèdent, et surtout un maître dont il conservera la marque — **Junius Rusticus**, stoïcien, qui lui met entre les mains les *Entretiens* d'Épictète, esclave affranchi devenu maître à penser.`
    },

    {
      type: 'widget',
      titre: `Les cinq bons empereurs`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '96-98', titre: 'Nerva', description: `Sénateur âgé, choisi par le Sénat après l'assassinat de Domitien. Inaugure le principe d'adoption.` },
          { date: '98-117', titre: 'Trajan', description: `Extension maximale de l'Empire : Dacie, Arménie, Mésopotamie. Rome atteint son apogée territoriale.` },
          { date: '117-138', titre: 'Hadrien', description: `Voyageur infatigable, stratège du repli sur des frontières défendables (mur d'Hadrien). Organise la succession.` },
          { date: '138-161', titre: 'Antonin le Pieux', description: `Vingt-trois années de paix presque totale. Père adoptif de Marc.` },
          { date: '161-180', titre: 'Marc Aurèle', description: `Le philosophe. Mais son règne est déjà celui des premières fissures — peste et invasions.` }
        ]
      }
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'L\'adoption contre le sang',
      params: {
        image: 'data:image/png;base64,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',
        legende: 'La dynastie des Antonins : quatre successions par adoption, une par hérédité — et ses conséquences.',
        hotspots: []
      }
    },

    {
      type: 'texte',
      titre: `Un règne sous le signe de la crise`,
      contenu_md:
`L'ironie tragique de Marc Aurèle, c'est que ce contemplatif a passé plus de dix années sous la tente militaire. Deux crises simultanées ébranlent son règne.

D'abord, la **peste antonine**. Ramenée d'Orient en 165 par les légions revenant de la guerre parthique, elle décime la population romaine — probablement une variole. On estime les morts entre **sept et dix millions**, soit près de 10 % de la population de l'Empire. Elle ne s'éteindra qu'avec la mort de Marc Aurèle lui-même en 180 — qui en est peut-être une victime.

Ensuite, les **guerres marcomanes**. En 166, une coalition de peuples germaniques et sarmates franchit le Danube, ravage la Pannonie et pousse jusqu'en Italie du Nord — première invasion barbare en Italie depuis les Cimbres, trois siècles plus tôt. Marc Aurèle mène personnellement la contre-offensive. Il faudra treize ans, un traité, une reprise du conflit, et sa propre mort à Vindobona (Vienne) en 180 pour clore ce cycle.`
    },

    {
      type: 'encadre',
      label: 'À retenir',
      contenu_md: `Les *Pensées pour moi-même* ont été écrites **au camp**, à Aquilée, sur le Danube, entre deux batailles. Ce n'est pas un traité mais un exercice quotidien de recentrage — le [journal spirituel]{accent} d'un homme sous une tension politique et militaire permanente.`
    },

    {
      type: 'widget',
      titre: `Les trois disciplines stoïciennes qu'il pratique`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          { titre: `Discipline du désir`, description: `Ne vouloir que ce qui **dépend de nous**. Le reste — santé, succès, réputation — est *indifférent*. C'est la clé de la sérénité.` },
          { titre: `Discipline de l'action`, description: `Agir pour le [bien commun]{accent}, sans attendre reconnaissance. « L'homme est fait pour l'homme comme la main pour la main. »` },
          { titre: `Discipline du jugement`, description: `Distinguer la chose brute de l'interprétation qu'on en fait. « Retire ton jugement, tu as retiré la plainte. »` }
        ]
      }
    },

    {
      type: 'widget',
      composant: 'Prediction',
      titre: 'Un règne sous pression',
      params: {
        question: 'Combien d\'années dure le règne de Marc Aurèle ?',
        min: 1,
        max: 45,
        step: 1,
        reponse: 19,
        unite: 'ans',
        explication: '**19 ans** (161-180), presque tous passés en guerre sur le Danube — c\'est là, sous la tente, qu\'il écrit les Pensées.'
      }
    },

    {
      type: 'texte',
      titre: `Les <em>Pensées pour moi-même</em>`,
      contenu_md:
`Le texte ne portait aucun titre. Marc Aurèle écrit en grec — langue de la philosophie —, sans doute pour se démarquer de sa fonction latine, et pour lui seul. Il n'existe aucune trace d'une intention de publication. C'est un manuscrit privé qui a survécu par miracle, connu depuis le Xᵉ siècle byzantin, publié en Occident seulement en 1559.

Douze livres, sans plan, souvent répétitifs — car il s'agit de *ressasser* les mêmes vérités pour qu'elles pénètrent l'âme. Certaines pensées font trois lignes, d'autres une page. Le ton est celui d'un homme qui se parle à lui-même : injonctions, rappels, questions rhétoriques. Aucun système, aucun lecteur imaginé.

C'est cette absence de rhétorique qui lui donne sa force. Là où Sénèque écrit des *Lettres à Lucilius* clairement destinées à la postérité, Marc Aurèle ne cherche à convaincre personne. Il note pour ne pas oublier. Cette [nudité]{accent} en fait un des rares textes philosophiques que l'on peut lire sans initiation préalable.`
    },

    {
      type: 'widget',
      titre: `Le silence de la mort`,
      composant: 'Equation',
      params: {
        tex: '\\text{Vie} = \\text{présent} \\ \\text{seul}',
        legende: `Ni le passé, qui n'est plus, ni le futur, qui n'est pas encore, ne peuvent être perdus par la mort. Seul le présent nous appartient — mais il nous appartient tout entier. (Pensées, II, 14)`,
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      titre: `Commode ou l'échec paradoxal`,
      contenu_md:
`Après quatre-vingts ans de succession par adoption — où chaque empereur choisissait son meilleur héritier possible plutôt que son fils biologique —, Marc Aurèle rompt le principe : il désigne son fils **Commode**, âgé de 19 ans en 180.

Le règne de Commode (180-192) est un désastre : narcissisme, combats de gladiateurs, assassinat en fin de règne. Il ouvre une longue instabilité qui mène à la *crise du IIIᵉ siècle*.

Faut-il en faire grief à Marc Aurèle ? Il n'avait pas le choix politique — refuser sa succession à son propre fils aurait provoqué une guerre civile immédiate. Mais la coïncidence historique est troublante : le règne du philosophe, qui incarne l'idée même du pouvoir raisonnable, se ferme sur celui qui l'incarne le moins.`
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Le seul survivant',
      params: {
        image: 'images/marc-aurele--statue-equestre.jpg',
        legende: 'La statue équestre de Marc Aurèle (bronze doré, vers 175), Capitole. Au Moyen Âge, on croyait qu\'elle représentait Constantin — ce qui la sauva de la fonte. (Photo Wikimedia Commons, licence Creative Commons — crédit selon le fichier)',
        hotspots: []
      }
    },

    {
      type: 'mini-quiz',
      q: 'En quoi le choix de son successeur contredit-il toute la philosophie de Marc Aurèle ?',
      reponse: 'Quatre empereurs avant lui avaient **adopté le meilleur** plutôt que transmis au fils. Marc Aurèle, le philosophe du devoir et de la raison, choisit le **sang** : son fils Commode, 18 ans, inapte. Le stoïcien a cédé là où des empereurs sans philosophie avaient su renoncer.'
    },

    {
      type: 'texte',
      titre: `Postérité : le prince philosophe`,
      contenu_md:
`Marc Aurèle a fasciné toutes les époques qui se sont interrogées sur le pouvoir légitime. **Machiavel** l'admire à contrecœur. **Montesquieu** en fait un modèle. **Renan** écrit en 1882 un *Marc Aurèle et la fin du monde antique* où il voit en lui « le plus grand des empereurs et le premier des saints laïques ».

Au XXᵉ siècle, il devient une lecture de chevet transversale : Bill Clinton, James Mattis, ou plus récemment des lecteurs venus du monde de la Silicon Valley ou du sport de haut niveau y trouvent une éthique de la performance sous pression.

Le paradoxe reste entier : cet homme qui écrivait pour ne pas être lu est devenu, avec Épictète, la porte d'entrée moderne dans le stoïcisme antique — un mouvement de pensée que la culture contemporaine (*stoicism revival*) redécouvre depuis les années 2000.`
    }
  ],

  quiz: [
    {
      q: `À quelle école philosophique appartient Marc Aurèle ?`,
      options: [`L'épicurisme`, `Le stoïcisme`, `Le platonisme`, `Le scepticisme`],
      correcte: 1,
      explication: `Marc Aurèle s'inscrit dans la lignée du stoïcisme romain, après Sénèque et Épictète — dont il a lu les Entretiens grâce à son maître Junius Rusticus.`
    },
    {
      q: `Dans quelle langue Marc Aurèle a-t-il rédigé ses Pensées ?`,
      options: [`En latin`, `En grec`, `Alternant latin et grec`, `En syriaque`],
      correcte: 1,
      explication: `Il écrit en grec — la langue traditionnelle de la philosophie dans l'Empire romain — bien que sa fonction impériale l'oblige au latin dans le civil et le militaire.`
    },
    {
      q: `Quel événement sanitaire majeur frappe l'Empire pendant son règne ?`,
      options: [
        `La peste noire`,
        `La peste antonine`,
        `La grippe de Justinien`,
        `Le choléra romain`
      ],
      correcte: 1,
      explication: `La peste antonine (165-180), probablement une variole ramenée d'Orient, aurait tué entre sept et dix millions de personnes dans tout l'Empire.`
    },
    {
      q: `Quel principe romain de succession Marc Aurèle rompt-il en désignant son fils ?`,
      options: [
        `La succession élective par le Sénat`,
        `La succession par adoption du meilleur candidat`,
        `Le tirage au sort entre héritiers`,
        `L'acclamation par les légions`
      ],
      correcte: 1,
      explication: `Depuis Nerva, les empereurs adoptaient un successeur choisi pour ses qualités. En désignant Commode, son fils biologique, Marc Aurèle rompt ce principe — avec des conséquences désastreuses.`
    },
    {
      q: `Quelle est la « dichotomie du contrôle », idée-clé de son stoïcisme ?`,
      options: [
        `La distinction entre l'âme et le corps`,
        `La distinction entre ce qui dépend de nous et ce qui n'en dépend pas`,
        `La distinction entre le bien et le mal`,
        `La distinction entre le savoir et l'opinion`
      ],
      correcte: 1,
      explication: `Héritée d'Épictète, cette distinction fonde toute la sérénité stoïcienne : ne s'attacher qu'à ce qui dépend de nous (nos jugements, nos actes), accepter le reste.`
    },
    {
      q: `Où Marc Aurèle passe-t-il une grande partie de son règne ?`,
      options: [
        `À Rome, au palais du Palatin`,
        `À Alexandrie, pour surveiller le grenier de l'Empire`,
        `Sur le limes danubien, à faire la guerre aux Marcomans`,
        `En Grèce, auprès des écoles philosophiques`
      ],
      correcte: 2,
      explication: `Plus de dix ans sur le front danubien pendant les guerres marcomanes. Les Pensées ont été rédigées en grande partie sous la tente militaire.`
    },
    {
      q: `Qui est l'auteur des Entretiens qui a le plus marqué Marc Aurèle ?`,
      options: [`Sénèque`, `Cicéron`, `Épictète`, `Marc Aurèle lui-même`],
      correcte: 2,
      explication: `Épictète, ancien esclave devenu philosophe, dont les Entretiens (compilés par son disciple Arrien) sont la référence stoïcienne majeure du IIᵉ siècle.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Pensées pour moi-même',
      definition: `Titre conventionnel du journal philosophique de Marc Aurèle (grec *Ta eis heauton*, « à soi-même »). Douze livres écrits au camp, jamais destinés à publication.`
    },
    {
      terme: 'Stoïcisme',
      definition: `École philosophique fondée à Athènes par Zénon de Cition (IIIᵉ s. av. J.-C.). Enseigne que le [bonheur]{accent} vient de la vertu et de l'accord avec la raison universelle. Voir [[stoicisme]].`
    },
    {
      terme: 'Cinq bons empereurs',
      definition: `Formule reprise à Machiavel désignant la succession de Nerva, Trajan, Hadrien, Antonin le Pieux et Marc Aurèle (96-180) — âge d'or de l'Empire romain, marqué par la succession par adoption.`
    },
    {
      terme: 'Peste antonine',
      definition: `Pandémie qui frappe l'Empire romain de 165 à 180, probablement une **variole** ramenée d'Orient. Sept à dix millions de morts estimés — première grande crise démographique de l'Empire.`
    },
    {
      terme: 'Guerres marcomanes',
      definition: `Conflit (166-180) opposant Rome à une coalition de peuples germaniques et sarmates ayant franchi le Danube. Premier grand recul de la frontière impériale, annonce des invasions ultérieures.`
    },
    {
      terme: 'Dichotomie du contrôle',
      definition: `Distinction stoïcienne, formulée par Épictète et centrale chez Marc Aurèle, entre ce qui dépend de nous (jugements, désirs, actions) et ce qui n'en dépend pas (santé, réputation, événements). Ne se troubler que du premier.`
    },
    {
      terme: 'Logos',
      definition: `Chez les stoïciens, principe rationnel qui ordonne l'univers. Vivre « selon la nature », c'est vivre en accord avec ce logos — accepter le cours du monde comme rationnel, même quand il paraît contraire.`
    },
    {
      terme: 'Prince philosophe',
      definition: `Idéal politique remontant à Platon (*République*) : le pouvoir devrait revenir aux philosophes. Marc Aurèle en est le seul exemple historique communément admis, ce qui explique la fascination durable qu'il exerce.`
    }
  ]
});
