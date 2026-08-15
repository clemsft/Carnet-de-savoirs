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
    date_maj: '2026-05-26'
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
