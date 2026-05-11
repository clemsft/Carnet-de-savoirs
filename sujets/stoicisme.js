/* ===================================================================
   SUJET — Le stoïcisme
   ===================================================================
   Une philosophie née sous un portique d'Athènes, transmise jusqu'à nous.
   Domaine : Philosophie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'stoicisme',
    titre: 'Le <em>stoïcisme</em>',
    domaines: ['Philosophie'],
    tags: ['antiquite', 'ethique', 'sagesse', 'rome', 'grece'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['cerveau-humain', 'effet-placebo'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Comprendre une philosophie née à Athènes en -301 sous le portique de Zénon de Citium, transmise par les empereurs et les esclaves romains, et redécouverte aujourd'hui jusque dans les thérapies cognitives — comme un art de vivre fondé sur la distinction de ce qui dépend de nous.`,

  points_cles: [
    `Le **stoïcisme** est fondé vers **-301** à Athènes par **Zénon de Citium**, qui enseigne sous un portique peint (*Stoa Poikilè*) qui donnera son nom à l'école.`,
    `Il repose sur **trois piliers** indissociables : la **logique** (art de raisonner juste), la **physique** (l'univers comme tout cohérent et rationnel), l'**éthique** (vivre conformément à la nature et à la raison).`,
    `La distinction centrale est celle entre **ce qui dépend de nous** (jugements, désirs, actions) et **ce qui n'en dépend pas** (corps, réputation, biens, événements extérieurs). Seule la première catégorie mérite notre effort.`,
    `Trois figures romaines incarnent l'école : **Sénèque** (-4 à 65), précepteur de Néron ; **Épictète** (~50-135), né esclave devenu maître ; **Marc Aurèle** (121-180), empereur philosophe auteur des *Pensées pour moi-même*.`,
    `Le sage stoïcien vise l'**ataraxie** (tranquillité de l'âme) par un travail quotidien : examen de conscience, **vue d'en haut** (regard cosmique), **préméditation des maux** (*praemeditatio malorum*).`,
    `Pour le stoïcien, ce ne sont **pas les choses** qui troublent les hommes, **mais les jugements** qu'ils portent sur les choses — formule d'Épictète qui résume toute l'éthique.`,
    `Quasiment oubliée pendant des siècles, l'école connaît une **résurgence contemporaine** spectaculaire : elle a directement inspiré les **thérapies cognitivo-comportementales** (TCC) d'**Albert Ellis** et **Aaron Beck** dans les années 1950-1960.`,
    `Le stoïcisme n'est pas le **stoïcisme populaire** (« rester impassible, ne rien ressentir ») : c'est une discipline du jugement, pas un anesthésique émotionnel.`
  ],

  carte_mentale: {
    central: 'stoicisme',
    noeuds: [
      { id: 'stoicisme', label: 'Stoïcisme', description: 'École philosophique fondée à Athènes vers -301. Vise la sagesse par l\'usage droit de la raison.' },
      { id: 'origines', label: 'Origines', description: 'Athènes, début du IIIᵉ siècle av. J.-C. Zénon de Citium enseigne sous un portique peint.' },
      { id: 'piliers', label: 'Trois piliers', description: 'Logique, physique, éthique — indissociables. Comme un œuf : la coquille (logique), le blanc (physique), le jaune (éthique).' },
      { id: 'principe', label: 'Principe central', description: 'Distinguer ce qui dépend de nous (jugements, désirs, actions) de ce qui n\'en dépend pas (corps, biens, réputation, événements).' },
      { id: 'figures', label: 'Figures romaines', description: 'Sénèque, Épictète, Marc Aurèle : trois sociologies (sénateur, esclave, empereur), une même philosophie.' },
      { id: 'exercices', label: 'Exercices pratiques', description: 'Le stoïcisme n\'est pas une théorie : c\'est un entraînement quotidien à penser et à vivre droit.' },
      { id: 'postérité', label: 'Postérité', description: 'Christianisme, Renaissance, Descartes, Spinoza, jusqu\'aux thérapies cognitives du XXᵉ siècle.' },

      // Piliers
      { id: 'logique', label: 'Logique', description: 'Art de raisonner juste, théorie de la connaissance, étude des sophismes. Discipline préparatoire.', parent: 'piliers' },
      { id: 'physique', label: 'Physique', description: 'L\'univers est un grand corps animé par un **logos** rationnel. Tout y est lié. Une étincelle de ce *logos* habite chaque humain.', parent: 'piliers' },
      { id: 'ethique', label: 'Éthique', description: 'Vivre conformément à la nature et à la raison. Seule la **vertu** est un vrai bien ; le reste est indifférent.', parent: 'piliers' },

      // Figures
      { id: 'seneque', label: 'Sénèque', description: 'Romain, sénateur, précepteur de Néron, auteur de **lettres** et de traités moraux. Forcé au suicide en 65.', parent: 'figures' },
      { id: 'epictete', label: 'Épictète', description: 'Né esclave en Phrygie. Affranchi, devient maître à Rome puis à Nicopolis. N\'a rien écrit ; ses leçons sont notées par son disciple **Arrien** (*Entretiens*, *Manuel*).', parent: 'figures' },
      { id: 'marc-aurele', label: 'Marc Aurèle', description: 'Empereur (161-180). Écrit en grec, **pour lui seul**, ce qui deviendra les *Pensées*. Aucune intention de publication.', parent: 'figures' },

      // Exercices
      { id: 'vue-haut', label: 'Vue d\'en haut', description: 'Imaginer la Terre vue du ciel. Relativiser ses tracas dans l\'immensité du temps et de l\'espace.', parent: 'exercices' },
      { id: 'premeditation', label: 'Préméditation des maux', description: '*Praemeditatio malorum* : se représenter à l\'avance ce qui peut nous arriver de pire, pour s\'y préparer émotionnellement.', parent: 'exercices' },
      { id: 'examen', label: 'Examen de soi', description: 'Chaque soir, repasser sa journée : qu\'ai-je bien fait ? mal fait ? que pourrais-je mieux faire demain ? Pratiqué par Sénèque.', parent: 'exercices' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Sous un <em>portique peint</em>',
      contenu_md:
`Vers **-301** à Athènes, un homme venu de Chypre, **Zénon de Citium**, commence à enseigner. Il avait été marchand. Un naufrage lui aurait fait perdre toute sa cargaison sur les côtes du Pirée. Réfugié dans une librairie, il y aurait lu Xénophon, et résolu de devenir philosophe. Anecdote ou non, c'est ainsi que la légende raconte la naissance de l'école.

Zénon n'a pas les moyens d'acquérir un terrain comme l'Académie de Platon ou le Lycée d'Aristote. Il enseigne donc en plein air, sous un portique du centre d'Athènes : la *Stoa Poikilè*, le **« portique peint »**, décoré de fresques représentant la bataille de Marathon. C'est ce mot, *stoa*, qui donnera son nom à l'école. **Stoïcien** signifie d'abord, et très littéralement : *« celui qui fréquente le portique »*.

L'école va prospérer pendant cinq siècles. Trois grands moments : un **stoïcisme ancien** grec (Zénon, **Chrysippe**) qui élabore la doctrine ; un **moyen stoïcisme** (Panétius, Posidonius) qui le porte à Rome ; et surtout un **stoïcisme impérial romain** (Sénèque, Épictète, Marc Aurèle) qui en fait, plutôt qu'un système, une **discipline de vie**.`
    },

    {
      type: 'encadre',
      label: 'Pas la « stoïcité »',
      contenu_md: `Méfions-nous du sens courant. **« Être stoïque »**, dans l'usage quotidien, c'est rester impassible devant la douleur — sans rien sentir. Or le stoïcisme philosophique n'est **pas** un anesthésique. Le sage stoïcien ressent les émotions ; il ne les laisse simplement pas dicter ses jugements ni ses actions. C'est une **discipline de la raison**, pas une amputation de la sensibilité.`
    },

    {
      type: 'widget',
      titre: `Les grandes étapes de l'école`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '~-301', titre: `Fondation par Zénon`, description: `**Zénon de Citium** commence à enseigner sous le portique peint (*Stoa Poikilè*) à Athènes. Son successeur Cléanthe puis surtout **Chrysippe** (-279/-206) systématisent la doctrine.` },
          { date: '~-150', titre: `Moyen stoïcisme`, description: `**Panétius** puis **Posidonius** adaptent la doctrine et la portent à Rome, où elle séduit les élites romaines (Scipion, Cicéron — qui n'est pas stoïcien mais s'en inspire).` },
          { date: '-4 à 65', titre: `Sénèque`, description: `Romain, sénateur, précepteur de Néron. Écrit des **lettres à Lucilius** et des traités (*De la tranquillité de l'âme*, *Sur la brièveté de la vie*). Contraint au suicide par Néron en 65.` },
          { date: '~50-135', titre: `Épictète`, description: `Né esclave en Phrygie, devient maître à Rome puis à Nicopolis après l'expulsion des philosophes par Domitien. Son disciple **Arrien** rassemble ses leçons dans les *Entretiens* et le *Manuel*.` },
          { date: '161-180', titre: `Marc Aurèle empereur`, description: `Empereur romain, il rédige en grec ce qui deviendra les *Pensées pour moi-même* — un journal philosophique strictement privé, retrouvé après sa mort.` },
          { date: 'Renaissance', titre: `Redécouverte`, description: `Au XVIᵉ siècle, **Juste Lipse** relance le stoïcisme (*De Constantia*, 1584). Influence sur Montaigne, Descartes, Spinoza. Puis l'école retombe dans l'ombre académique.` },
          { date: '1955-1962', titre: `Naissance des TCC`, description: `**Albert Ellis** puis **Aaron Beck** fondent les **thérapies cognitivo-comportementales** en s'inspirant directement d'Épictète : ce ne sont pas les événements qui nous troublent, mais nos jugements sur ces événements.` },
          { date: 'XXIᵉ siècle', titre: `Stoïcisme populaire`, description: `Renouveau public massif : livres grand public, applications, mouvement *Modern Stoicism*. Pour le meilleur (popularisation) et le pire (simplifications de productivité).` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Les <em>trois piliers</em> de la doctrine`,
      contenu_md:
`Les anciens stoïciens comparaient leur philosophie à un œuf : la **coquille**, c'est la logique ; le **blanc**, la physique ; le **jaune**, l'éthique. Inséparables. On ne peut bien vivre sans bien penser, ni bien penser sans comprendre dans quel monde on vit.

La **logique** est l'art de raisonner sans se tromper. Les stoïciens y développent une logique propositionnelle d'une finesse remarquable, longtemps oubliée puis redécouverte au XXᵉ siècle. Pour eux, beaucoup de nos malheurs viennent de **jugements faux** : confondre une opinion personnelle avec la nature des choses. La logique est l'arme contre cette confusion.

La **physique** décrit l'univers comme un **grand tout cohérent**, animé par une raison universelle qu'ils nomment **logos** (un mot que le christianisme reprendra). Ce *logos* est partout : dans les astres, dans les saisons, dans le corps humain. Chacun de nous en porte une étincelle — c'est ce que nous appelons la raison. Vivre selon la nature, c'est donc vivre selon cette raison cosmique dont nous sommes une expression locale.

L'**éthique** en découle. Le seul vrai bien, pour le stoïcien, c'est la **vertu** — c'est-à-dire l'exercice droit de la raison. Tout le reste — santé, richesse, réputation, longévité — n'est qu'**indifférent**. Pas négligeable au quotidien, mais sans valeur morale propre. Un homme vertueux pauvre est plus heureux qu'un homme vicieux fortuné.`
    },

    {
      type: 'encadre',
      label: `La phrase qu'il faut retenir`,
      contenu_md: `*« Ce ne sont pas les choses qui troublent les hommes, mais les opinions qu'ils en ont. »*<br>— **Épictète**, *Manuel*, V<br><br>Toute la doctrine éthique tient dans cette ligne. Entre l'événement extérieur et notre trouble intérieur, il y a un **jugement** — et c'est sur ce jugement, et lui seul, que nous avons prise.`
    },

    {
      type: 'widget',
      titre: `Trois maîtres, trois conditions`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: `Le sénateur`,
            titre: `Sénèque (-4 à 65)`,
            description: `Né à Cordoue, exilé en Corse, rappelé pour devenir précepteur du jeune **Néron**. Sénateur, immensément riche — un paradoxe que ses ennemis lui reprochaient. Auteur de **124 *Lettres à Lucilius***, de traités de morale, de tragédies. **Contraint au suicide** par Néron en 65. Sa philosophie est concrète, élégante, presque thérapeutique : comment gérer la colère, le deuil, la peur de la mort.`
          },
          {
            tag: `L'esclave`,
            titre: `Épictète (~50-135)`,
            description: `Né esclave en **Phrygie**, vraisemblablement boiteux. Affranchi, il devient maître à Rome puis, après l'expulsion des philosophes par **Domitien** en 93, à Nicopolis. **N'a rien écrit lui-même** : ses leçons orales sont notées par son disciple **Arrien**. Son enseignement est radical, exigeant, sans aucun confort. La distinction entre ce qui dépend de nous et ce qui n'en dépend pas est son axe central.`
          },
          {
            tag: `L'empereur`,
            titre: `Marc Aurèle (121-180)`,
            description: `Empereur romain de 161 à 180, considéré comme l'un des **« cinq bons empereurs »**. Pendant ses campagnes sur le Danube, il écrit en grec — pour lui seul, sans aucune intention de publication — un journal philosophique qui sera retrouvé après sa mort : les ***Pensées pour moi-même***. On y lit un homme qui se rappelle quotidiennement les principes du stoïcisme, à l'heure où il porte le poids d'un empire.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Ce qui <em>dépend</em> de nous`,
      contenu_md:
`Voici la phrase qui ouvre le *Manuel* d'Épictète et résume toute la pratique stoïcienne :

*« Parmi les choses qui existent, les unes dépendent de nous, les autres n'en dépendent pas. Dépendent de nous le jugement, la tendance, le désir, l'aversion ; en un mot, tout ce qui relève de notre activité propre. Ne dépendent pas de nous le corps, les biens, la réputation, les charges ; en un mot, tout ce qui ne relève pas de notre activité propre. »*

Cette **dichotomie** est l'outil pratique central du stoïcisme. À chaque instant, devant chaque trouble, le sage se demande : *cela dépend-il de moi, oui ou non ?* Si oui, agissons. Si non, acceptons. Vouloir contrôler ce qui n'en dépend pas, c'est se condamner à la frustration permanente. Ne pas exercer ce qui en dépend, c'est trahir notre humanité même.

Ce qui dépend strictement de moi, en dernière analyse, c'est **mon jugement** — l'usage de ma propre raison. Tout le reste — y compris la santé de mes proches, ma fortune, ma propre santé — peut être altéré par les événements. Le monde extérieur est hors de prise. Mais ma manière de l'interpréter, mes désirs, mes aversions, mon assentiment aux représentations qui me viennent : tout cela m'appartient, et nul ne peut me l'enlever.

Aux yeux des stoïciens, c'est cette intériorité indemne qui fonde la **liberté humaine**. On comprend mieux pourquoi cette doctrine séduisait autant un esclave qu'un empereur : ni l'un ni l'autre n'a la maîtrise du monde, mais tous deux ont la maîtrise de leur propre âme.`
    },

    {
      type: 'widget',
      titre: `Quatre exercices spirituels classiques`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `La vue d'en haut`,
            description: `Marc Aurèle s'imagine régulièrement **regarder la Terre depuis le ciel**, voir les armées comme des fourmilières, les villes comme des taches. *« Tout cela, vu d'en haut : quelle petitesse. »* (*Pensées*, VII, 48). Exercice cosmique de **relativisation** : ton problème occupe ton esprit, mais à l'échelle du monde et du temps, qu'est-il vraiment ?`
          },
          {
            titre: `La préméditation des maux`,
            description: `*Praemeditatio malorum*. Chaque matin, Sénèque conseille de se représenter ce qui pourrait arriver de pire dans la journée : trahison d'un ami, perte d'un proche, ruine, maladie. Pas pour s'angoisser : pour **désarmer** la surprise et la révolte si cela arrive vraiment. *« Ce qui n'est pas attendu écrase d'autant plus. »*`
          },
          {
            titre: `L'examen du soir`,
            description: `Sénèque recommande à Lucilius de **repasser** chaque soir sa journée, calmement : qu'ai-je fait de bien, de mal ? Où ai-je manqué à la raison ? Comment ferai-je mieux demain ? Pratique adoptée plus tard par les chrétiens (examen de conscience), puis sécularisée dans le journal intime moderne et certaines pratiques de [[le-sommeil]] hygiénique.`
          },
          {
            titre: `Le focus sur l'instant`,
            description: `Marc Aurèle revient sans cesse à ce point : **le présent est tout ce que tu as**. Le passé n'est plus, le futur n'est pas encore. Tes regrets et tes angoisses sont des projections. Cet exercice d'**attention au présent** préfigure étonnamment les pratiques contemporaines de pleine conscience (*mindfulness*).`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Stoïcisme et <em>thérapies modernes</em>`,
      contenu_md:
`Après l'Antiquité, le stoïcisme est partiellement absorbé par le christianisme (qui en hérite le *logos*, la notion de loi naturelle, certaines disciplines de soi), puis redécouvert à la Renaissance par le philologue **Juste Lipse** (*De Constantia*, 1584). **Descartes**, **Spinoza** ou **Kant** en seront marqués. Mais l'école elle-même ne renaît pas comme école — elle infuse, en sous-main.

La résurgence éclatante arrive au **XXᵉ siècle**, par une voie inattendue : la psychothérapie. Dans les années 1950, le psychologue américain **Albert Ellis** cherche une alternative à la psychanalyse, qu'il trouve trop lente et trop spéculative. Il développe la *Rational Emotive Behavior Therapy* (REBT). Son axiome de départ ? Une **citation directe d'Épictète** : *« Ce ne sont pas les choses qui nous troublent, mais nos jugements sur les choses. »*

Quelques années plus tard, le psychiatre **Aaron Beck** développe une approche très proche pour traiter la dépression, qu'il nommera **thérapie cognitive**. Idée centrale : identifier les **pensées automatiques** déformées qui causent la souffrance, et les confronter à la réalité — exactement comme l'examen stoïcien des représentations. Ces approches deviendront le socle des **thérapies cognitivo-comportementales** (TCC), aujourd'hui parmi les plus pratiquées au monde.

Le lien avec la neurobiologie n'est pas anecdotique. On sait maintenant que la perception de la **douleur**, du stress, de l'anxiété est modulable par les **jugements** et les **attentes** — c'est tout l'objet de [[effet-placebo]]. Le [[cerveau-humain]] possède en propre les leviers que les stoïciens identifiaient empiriquement il y a vingt-trois siècles. La sagesse antique n'avait pas tout faux ; elle avait simplement deux mille ans d'avance sur les preuves d'imagerie cérébrale.`
    },

    {
      type: 'texte',
      titre: `Limites et <em>critiques</em>`,
      contenu_md:
`Le stoïcisme n'est pas sans angles morts.

D'abord, son **optimisme cosmique**. L'idée que l'univers est animé par un *logos* rationnel, que tout y est pour le mieux, qu'il suffit d'accepter l'ordre du monde : cela passe mal après deux guerres mondiales, Auschwitz, et plus généralement toute pensée moderne du tragique. **Pascal** moquait déjà l'orgueil stoïcien — ce vouloir-être-tout-puissant intérieurement quand on est si peu de chose réellement.

Ensuite, son **politique**. Le stoïcisme enseigne à supporter, à composer avec ce qu'on ne peut changer — mais cela peut glisser facilement dans le **conservatisme** ou la résignation. Marc Aurèle empereur recommande la patience à un peuple opprimé qu'il administre. Sénèque, riche, prêche la frugalité. La doctrine est moins claire sur quand il faut *combattre* l'ordre injuste plutôt que d'apprendre à le supporter.

Enfin, la **mode contemporaine**. Le stoïcisme connaît aujourd'hui un succès public massif — applications, podcasts, livres de développement personnel. Pour le meilleur (popularisation d'idées profondes) et le pire : un **stoïcisme de productivité**, vidé de sa dimension cosmique et éthique, réduit à des techniques pour mieux performer dans un système qu'on ne questionne pas. C'est l'envers de l'ironie : la philosophie qui apprenait à un esclave la dignité intérieure devient un outil de **management de soi** pour cadres surchargés.

Reste, malgré tout, l'extraordinaire **actualité** de l'attitude stoïcienne. Distinguer ce qui dépend de soi, examiner ses jugements, accepter ce qui ne peut être changé, agir avec rigueur sur ce qui le peut : aucune époque, sans doute, n'a moins besoin que la nôtre d'une telle hygiène mentale.`
    }

  ],

  quiz: [
    {
      q: `Où et quand le stoïcisme est-il fondé ?`,
      options: [
        `À Rome, au Iᵉʳ siècle de notre ère`,
        `À Athènes, vers -301, par Zénon de Citium`,
        `À Alexandrie, vers -200`,
        `À Sparte, vers -400`
      ],
      correcte: 1,
      explication: `Le stoïcisme est fondé vers -301 à Athènes par Zénon de Citium, qui enseigne sous un portique peint (Stoa Poikilè) qui donnera son nom à l'école. Le stoïcisme romain (Sénèque, Épictète, Marc Aurèle) est postérieur de trois siècles.`
    },
    {
      q: `Quels sont les trois piliers de la doctrine stoïcienne ?`,
      options: [
        `Foi, espérance, charité`,
        `Logique, physique, éthique`,
        `Beau, bien, vrai`,
        `Mémoire, imagination, raison`
      ],
      correcte: 1,
      explication: `Pour les stoïciens, la philosophie comprend trois parties indissociables, qu'ils comparaient aux trois parties d'un œuf : la logique (la coquille), la physique (le blanc), l'éthique (le jaune). On ne peut bien vivre sans bien penser, ni bien penser sans comprendre dans quel monde on vit.`
    },
    {
      q: `Quelle est la distinction centrale du stoïcisme pratique selon Épictète ?`,
      options: [
        `Entre le corps et l'âme`,
        `Entre ce qui dépend de nous (jugements, désirs, actions) et ce qui n'en dépend pas (corps, biens, événements)`,
        `Entre les riches et les pauvres`,
        `Entre le bien et le mal`
      ],
      correcte: 1,
      explication: `C'est l'incipit du Manuel d'Épictète. À chaque instant, le sage se demande : cela dépend-il de moi, oui ou non ? Si oui, j'agis. Si non, j'accepte. C'est l'outil pratique central du stoïcisme.`
    },
    {
      q: `Quelle est la condition sociale d'Épictète ?`,
      options: [
        `Sénateur romain`,
        `Empereur`,
        `Né esclave, puis affranchi, devenu maître à Rome puis à Nicopolis`,
        `Marchand athénien`
      ],
      correcte: 2,
      explication: `Épictète est né esclave en Phrygie vers 50 de notre ère. Affranchi, il devient enseignant à Rome puis, après l'expulsion des philosophes par Domitien, à Nicopolis. Le contraste entre sa condition initiale d'esclave et sa stature intellectuelle ultérieure marque profondément son enseignement sur la liberté intérieure.`
    },
    {
      q: `Qu'est-ce que la « préméditation des maux » (praemeditatio malorum) ?`,
      options: [
        `Une forme de pessimisme dépressif`,
        `Un exercice consistant à se représenter à l'avance ce qui peut arriver de pire, pour s'y préparer émotionnellement`,
        `Une technique de divination`,
        `Une forme de magie noire`
      ],
      correcte: 1,
      explication: `Recommandée notamment par Sénèque, c'est un exercice spirituel : envisager calmement, à l'avance, les pertes et les épreuves possibles. Le but n'est pas de s'angoisser, mais de désarmer la surprise et la révolte si cela arrive vraiment. Ce qui est attendu écrase moins que ce qui surprend.`
    },
    {
      q: `Quel ouvrage Marc Aurèle a-t-il écrit ?`,
      options: [
        `Les Entretiens`,
        `Les Lettres à Lucilius`,
        `Les Pensées pour moi-même, journal philosophique privé sans intention de publication`,
        `Le Manuel`
      ],
      correcte: 2,
      explication: `Marc Aurèle a rédigé en grec, pendant ses campagnes militaires, un journal philosophique strictement personnel. Le titre original signifie littéralement « À soi-même ». Il n'a jamais été destiné à la publication — son existence et sa diffusion sont presque accidentelles.`
    },
    {
      q: `Quel lien le stoïcisme entretient-il avec les thérapies cognitivo-comportementales (TCC) modernes ?`,
      options: [
        `Aucun, ce sont deux traditions sans rapport`,
        `Les TCC d'Albert Ellis et Aaron Beck, dans les années 1950-1960, s'inspirent directement d'Épictète : ce ne sont pas les événements qui nous troublent mais nos jugements`,
        `Les TCC ont remplacé le stoïcisme`,
        `Le stoïcisme est antérieur aux émotions`
      ],
      correcte: 1,
      explication: `Albert Ellis (REBT) puis Aaron Beck (thérapie cognitive) ont explicitement repris le principe d'Épictète comme axiome fondateur : identifier les jugements automatiques déformés qui causent la souffrance et les confronter à la réalité. Les TCC sont aujourd'hui parmi les approches psychothérapeutiques les plus pratiquées au monde.`
    },
    {
      q: `Que signifie « être stoïque » dans le sens philosophique authentique ?`,
      options: [
        `Ne plus rien ressentir, comme une statue de pierre`,
        `Discipliner ses jugements et ses désirs par la raison, sans amputer la sensibilité`,
        `Refuser tout plaisir`,
        `Vivre seul à la campagne`
      ],
      correcte: 1,
      explication: `Contre l'usage courant : le sage stoïcien ressent les émotions, il ne les laisse simplement pas dicter ses jugements ni ses actions. C'est une discipline de la raison, pas une anesthésie. La caricature de l'impassibilité absolue est un contresens populaire.`
    }
  ]

});
