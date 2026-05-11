/* ===================================================================
   SUJET — La mémoire humaine
   ===================================================================
   Ce qui reste, ce qui s'efface, et pourquoi.
   Domaines : Neurosciences, Psychologie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'memoire-humaine',
    titre: `La <em>mémoire</em> humaine`,
    domaines: ['Neurosciences', 'Psychologie'],
    tags: ['cerveau', 'hippocampe', 'apprentissage', 'oubli', 'alzheimer'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['cerveau-humain', 'le-sommeil'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Comprendre comment ton cerveau capture, trie, stocke et restitue des bribes du monde — et pourquoi cette mémoire, loin d'être un magnétoscope fidèle, est plutôt un atelier de reconstruction permanent, dont la fragilité se voit dans l'oubli ordinaire comme dans la maladie d'Alzheimer.`,

  points_cles: [
    `La mémoire n'est **pas une faculté unique** mais plusieurs systèmes en parallèle : mémoire **sensorielle** (millisecondes), **court terme/de travail** (~20 secondes), **long terme** (de quelques minutes à toute la vie).`,
    `La mémoire à long terme se divise en **mémoire explicite** (consciente : faits et événements) et **mémoire implicite** (non-consciente : gestes, conditionnements, habitudes).`,
    `Dans la mémoire explicite, on distingue la mémoire **épisodique** (événements vécus, situés dans le temps et l'espace) et la mémoire **sémantique** (connaissances générales sans contexte personnel).`,
    `Le cas du patient **H.M.**, opéré en 1953 de son **hippocampe** pour soigner son épilepsie, a révélé que cette structure est indispensable à la formation des nouveaux souvenirs explicites — mais inutile aux habitudes motrices.`,
    `Les souvenirs sont **consolidés** pendant le sommeil, notamment en sommeil lent profond, durant lequel l'hippocampe « rejoue » les expériences récentes et les transfère vers le cortex. Voir [[le-sommeil]].`,
    `**Hermann Ebbinghaus** (1885) a quantifié la "courbe de l'oubli" : on oublie ~50 % d'une liste de syllabes dans l'heure, ~70 % en une journée. La répétition espacée combat efficacement cet effet.`,
    `Chaque rappel d'un souvenir le **reconstruit** et le rend modifiable : la mémoire n'est pas une lecture passive mais une réécriture. Phénomène à l'origine des **faux souvenirs** (Elizabeth Loftus).`,
    `La **maladie d'Alzheimer**, qui touche ~55 millions de personnes dans le monde en 2024, débute typiquement par une dégénérescence de l'hippocampe — d'où la perte précoce des souvenirs récents.`
  ],

  carte_mentale: {
    central: 'memoire',
    noeuds: [
      { id: 'memoire', label: 'Mémoire', description: `Ensemble de systèmes cérébraux qui captent, stockent et restituent l'information acquise par l'expérience.` },
      { id: 'systemes', label: 'Trois systèmes', description: `Mémoire sensorielle, court terme/de travail, long terme. Trois temporalités, trois mécanismes distincts.` },
      { id: 'lt-types', label: 'Types de mémoire LT', description: `Épisodique, sémantique, procédurale, émotionnelle. Chacune mobilise des circuits cérébraux différents.` },
      { id: 'bases', label: 'Bases neurales', description: `**Hippocampe**, cortex, amygdale, cervelet. Mémoire = modification durable des connexions entre neurones (synapses).` },
      { id: 'consolidation', label: 'Consolidation', description: `Le passage d'un souvenir fragile à un souvenir durable se fait surtout pendant le **sommeil profond**.` },
      { id: 'oubli', label: 'L\'oubli', description: `Étonnamment, ce n'est pas une panne mais une fonction : oublier permet de hiérarchiser, de généraliser, de réagir au présent.` },
      { id: 'alzheimer', label: 'Alzheimer', description: `Maladie neurodégénérative qui détruit progressivement l'hippocampe puis le cortex. Première cause de démence dans le monde.` },

      // Systèmes
      { id: 'sensorielle', label: 'Mémoire sensorielle', description: `Persistance brève d'une perception (~250 ms pour le visuel, ~3 s pour l'auditif). Permet la continuité perceptive.`, parent: 'systemes' },
      { id: 'court-terme', label: 'Mémoire de travail', description: `Maintient et manipule ~7 items pendant ~20 s. Le "bureau de travail" mental. Modèle de **Baddeley**.`, parent: 'systemes' },
      { id: 'long-terme', label: 'Mémoire à long terme', description: `Capacité virtuellement illimitée, durée potentielle d'une vie. Se subdivise en explicite et implicite.`, parent: 'systemes' },

      // Types LT
      { id: 'episodique', label: 'Épisodique', description: `**Événements vécus** situés dans le temps et l'espace. "Hier, j'ai bu un café avec Léa au Pavillon."`, parent: 'lt-types' },
      { id: 'semantique', label: 'Sémantique', description: `**Connaissances générales** sans contexte personnel. "Paris est la capitale de la France."`, parent: 'lt-types' },
      { id: 'procedurale', label: 'Procédurale', description: `**Gestes et savoir-faire** automatisés. Faire du vélo, taper au clavier, jouer du piano. Indépendante de l'hippocampe.`, parent: 'lt-types' },

      // Bases
      { id: 'hippocampe', label: 'Hippocampe', description: `Structure clé pour la formation des nouveaux souvenirs **explicites**. Détruit chez H.M. — incapable d'apprendre quoi que ce soit de nouveau.`, parent: 'bases' },
      { id: 'synapses', label: 'Plasticité synaptique', description: `À l'échelle moléculaire : un souvenir = renforcement durable des connexions entre certains neurones (**LTP**, *long-term potentiation*).`, parent: 'bases' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>fonction</em>, plusieurs mémoires`,
      contenu_md:
`Le mot **mémoire** prête à confusion. Il évoque une faculté unique — une sorte de cassette intérieure sur laquelle on enregistre des images, des sons, des idées, et qu'on rejoue à la demande. La réalité neurobiologique est tout autre : ce qu'on appelle "la mémoire" est en fait un **ensemble de systèmes distincts** qui fonctionnent en parallèle, mobilisent des régions cérébrales différentes, et peuvent défaillir indépendamment les uns des autres.

On distingue d'abord la mémoire selon sa **durée**. Une **mémoire sensorielle** retient pendant quelques centaines de millisecondes ce qui vient d'effleurer tes sens — l'impression rétinienne d'une scène qui te permet de comprendre la suivante. Une **mémoire à court terme** ou **mémoire de travail** conserve quelques éléments pendant environ vingt secondes — le temps de composer un numéro qu'on vient de te dicter. Et une **mémoire à long terme**, virtuellement illimitée, stocke des souvenirs qui peuvent durer toute une vie.

Mais à l'intérieur même de la mémoire à long terme, il existe plusieurs systèmes. Tu peux te souvenir parfaitement de **comment** faire du vélo (mémoire procédurale) tout en ayant oublié la dernière fois que tu en as fait (mémoire épisodique). Tu peux connaître la date de naissance de Napoléon (mémoire sémantique) sans avoir le moindre souvenir d'avoir appris cette information. Ce sont des systèmes distincts, supportés par des circuits cérébraux différents.

Comprendre la mémoire, c'est d'abord renoncer à l'unifier — et la voir comme l'orchestre cohérent de plusieurs mémoires.`
    },

    {
      type: 'widget',
      titre: `Les trois grandes durées`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Millisecondes',
            titre: 'Mémoire sensorielle',
            description: `Persistance très brève de la trace perceptive. ~**250 ms** pour le visuel (rémanence rétinienne), ~**3 s** pour l'auditif. C'est ce qui te permet d'identifier le mot que ton interlocuteur vient de dire pendant que tu en entends un nouveau. Inconsciente et automatique.`
          },
          {
            tag: '~20 secondes',
            titre: 'Mémoire de travail',
            description: `Capacité limitée à **~7 éléments** (Miller, 1956) — révisée à 4 ± 1 dans des études récentes. Active dès qu'on retient un numéro à composer, qu'on calcule mentalement, qu'on suit un raisonnement. Modèle de référence : **Baddeley** (1974), avec une boucle phonologique, un calepin visuo-spatial et un administrateur central.`
          },
          {
            tag: 'Minutes à toute la vie',
            titre: 'Mémoire à long terme',
            description: `Capacité virtuellement illimitée. C'est elle qui contient l'ensemble de tes souvenirs, connaissances, savoir-faire. Se subdivise en **explicite** (déclarative : faits et événements) et **implicite** (non-déclarative : gestes, habitudes, conditionnements). Repose sur des modifications **durables** des synapses.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le cas <em>H.M.</em> et la révélation de l'hippocampe`,
      contenu_md:
`En **1953**, un jeune Américain de 27 ans, **Henry Molaison** (connu pendant des décennies sous les initiales **H.M.** pour préserver son anonymat), souffre depuis l'enfance d'une **épilepsie** sévère et résistante à tous les traitements. Un neurochirurgien, **William Beecher Scoville**, lui propose une opération expérimentale : ablation bilatérale des structures du lobe temporal médian, incluant **l'hippocampe**.

L'opération guérit en grande partie l'épilepsie. Mais elle a une conséquence dévastatrice et imprévue. Dès son réveil, H.M. **ne peut plus former de nouveaux souvenirs**. Il se souvient de son enfance et de la guerre. Mais à partir de l'opération, c'est comme si chaque instant s'évanouissait au moment où il en sortait. Il peut converser quelques minutes avec quelqu'un, puis l'oublier complètement. Il rencontre sa psychologue, la neuropsychologue canadienne **Brenda Milner**, des centaines de fois pendant les décennies suivantes — chaque fois, c'est pour lui la première.

Le destin tragique de H.M. ouvre une porte capitale pour la science. Brenda Milner et son équipe étudient le patient pendant **plus de cinquante ans** (jusqu'à sa mort en 2008). Et leurs observations sont décisives.

D'abord, ils confirment que [l'hippocampe est indispensable à la formation des nouveaux souvenirs explicites]{accent} — événements et faits. Ensuite, ils découvrent quelque chose d'inattendu : H.M. peut **apprendre de nouvelles compétences motrices** (comme dessiner en regardant dans un miroir), bien que chaque fois il croie en faire l'expérience pour la première fois. La mémoire procédurale est donc **séparée** de la mémoire explicite : elle ne passe pas par l'hippocampe.

Le cas H.M. transforme à lui seul la conception de la mémoire. Brenda Milner reçoit le Kavli Prize en 2014, à 96 ans.`
    },

    {
      type: 'encadre',
      label: `Comment l'hippocampe "fabrique" un souvenir`,
      contenu_md: `Quand tu vis un événement, plusieurs régions corticales encodent ses différentes facettes : le **cortex visuel** la scène, le **cortex auditif** les paroles, l'**amygdale** l'émotion, le **cortex pariétal** la localisation spatiale. L'**hippocampe** sert d'**index** : il lie ces fragments en un ensemble cohérent. Au moment du rappel, l'hippocampe **réactive** simultanément les régions corticales correspondantes, et tu "revois" la scène. Avec le temps, sous l'effet de la consolidation (notamment pendant le sommeil), ces liens se renforcent dans le cortex lui-même, et le souvenir devient progressivement moins dépendant de l'hippocampe — c'est pourquoi H.M. gardait ses souvenirs anciens malgré la perte de l'hippocampe.`
    },

    {
      type: 'widget',
      titre: `Trois mémoires à long terme, trois exemples`,
      composant: 'SelecteurValeurs',
      params: {
        unite: '',
        indexInitial: 0,
        options: [
          {
            label: 'Épisodique',
            valeur: `Mon premier baiser`,
            description: `Souvenir d'un événement vécu, **situé dans le temps et l'espace**, avec un contexte personnel et émotionnel. C'est ce qu'on perd d'abord dans Alzheimer. Repose sur l'hippocampe et le lobe temporal médian.`
          },
          {
            label: 'Sémantique',
            valeur: `Paris est en France`,
            description: `**Connaissance générale** indépendante du contexte personnel d'apprentissage. Tu sais que Paris est la capitale de la France, sans savoir quand tu l'as appris. Repose sur le **cortex temporal latéral**. Plus résistante à la dégénérescence.`
          },
          {
            label: 'Procédurale',
            valeur: `Faire du vélo`,
            description: `**Savoir-faire moteur** automatisé. Une fois acquis, il s'exécute sans intervention consciente. Repose sur le **cervelet** et les **ganglions de la base**, pas sur l'hippocampe. C'est pourquoi H.M. pouvait apprendre de nouvelles habiletés motrices malgré son amnésie.`
          },
          {
            label: 'Émotionnelle',
            valeur: `Peur des araignées`,
            description: `Association inconsciente entre un stimulus et une émotion (souvent la peur). Repose principalement sur l'**amygdale**. Très résistante à l'effacement. À l'origine de nombreuses phobies.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `<em>Consolider</em>, oublier`,
      contenu_md:
`Pourquoi se souvient-on de certaines choses et pas d'autres ? Ce que ton cerveau retient n'est pas l'événement brut, mais ce que la **consolidation** en aura fait dans les heures et les jours qui suivent.

La consolidation est le passage d'un souvenir fragile, encore dépendant de l'hippocampe, à un souvenir durable, intégré dans le cortex. Elle se déroule principalement pendant le [sommeil]{accent} — voir [[le-sommeil]]. Les neuroscientifiques ont observé que pendant le **sommeil lent profond**, l'hippocampe **"rejoue"** les séquences d'activité enregistrées dans la journée, à grande vitesse, comme s'il les répétait à l'oreille du cortex. C'est pendant ces rejeux que les connexions corticales se renforcent et que les souvenirs se stabilisent.

Cela explique un fait robuste : **une nuit après un apprentissage améliore mesurablement la mémorisation**. Apprendre une liste de mots avant de dormir donne de meilleurs résultats au réveil que d'apprendre et tester sans sommeil intermédiaire. À l'inverse, une **dette de sommeil** chronique altère profondément la consolidation et la mémoire.

Mais consolider, c'est aussi **oublier**. Notre cerveau ne stocke pas tout ce qu'il a vu — ce serait absurde et débilitant. Il **filtre** activement, hiérarchise, généralise. L'oubli n'est pas une panne de la mémoire : c'est une **fonction** essentielle qui permet à la mémoire de servir.`
    },

    {
      type: 'widget',
      titre: `Quelques jalons dans l'étude de la mémoire`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1885', titre: 'Ebbinghaus', description: `**Hermann Ebbinghaus** mesure expérimentalement la **courbe de l'oubli** sur lui-même, avec des listes de syllabes sans signification. Premier modèle quantitatif de la mémoire.` },
          { date: '1949', titre: 'Donald Hebb', description: `Énonce le principe qui porte son nom : « **Les neurones qui s'activent ensemble se câblent ensemble.** » Base théorique de la plasticité synaptique.` },
          { date: '1953', titre: 'Patient H.M.', description: `Henry Molaison est opéré bilatéralement du lobe temporal. **Brenda Milner** étudiera son amnésie pendant 50 ans — révolution dans la compréhension des mémoires multiples.` },
          { date: '1956', titre: 'Le "magique" 7±2', description: `**George Miller** publie son article célèbre : la mémoire à court terme contient environ **7 ± 2 éléments**. Limite révisée à 4 ± 1 dans des études récentes.` },
          { date: '1957', titre: 'Mémoires séparées', description: `Milner publie : H.M. peut apprendre des compétences motrices nouvelles, malgré l'amnésie pour les événements. **Mémoire procédurale ≠ mémoire déclarative**.` },
          { date: '1974', titre: 'Modèle de Baddeley', description: `**Alan Baddeley** propose le modèle de la **mémoire de travail** avec ses sous-composantes : boucle phonologique, calepin visuo-spatial, administrateur central.` },
          { date: '1973', titre: 'LTP', description: `**Bliss et Lømo** observent dans l'hippocampe la **potentialisation à long terme** : une stimulation brève renforce durablement la transmission entre deux neurones. Mécanisme moléculaire de la mémoire.` },
          { date: '1990s-2000s', titre: 'Faux souvenirs', description: `**Elizabeth Loftus** démontre qu'on peut implanter des souvenirs entiers d'événements jamais vécus. Conséquences pour les témoignages judiciaires.` },
          { date: '2000', titre: 'Nobel pour Kandel', description: `**Eric Kandel** reçoit le Nobel pour avoir décrit les mécanismes moléculaires de la mémoire chez l'aplysie (un mollusque). Conservation surprenante avec les vertébrés.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `La mémoire qui se <em>reconstruit</em>`,
      contenu_md:
`Pendant longtemps, on a imaginé la mémoire comme une bibliothèque. On y range des souvenirs comme des livres ; quand on rappelle un souvenir, on va le chercher dans son rayon, on le consulte, on le remet en place tel qu'il était.

C'est faux.

Les recherches des cinquante dernières années montrent que chaque **rappel d'un souvenir le rend à nouveau malléable**. Le souvenir est extrait, lu, et **réécrit** — pas exactement comme il était. Si entre-temps tu as appris quelque chose qui modifie le contexte, ou si ton humeur est différente, ou si quelqu'un t'a suggéré un détail erroné, ces influences contamineront la version "ré-stockée" du souvenir.

La psychologue américaine **Elizabeth Loftus** a démontré ce phénomène par des expériences spectaculaires. Elle a réussi, par la simple suggestion répétée, à faire croire à des adultes qu'ils s'étaient **perdus dans un centre commercial à l'âge de 5 ans** — épisode totalement inventé, mais que les sujets finissaient par "se souvenir" en détail, avec émotion. Ces expériences ont des implications juridiques majeures : un témoignage oculaire, même sincère, peut être profondément faux, surtout après plusieurs interrogatoires.

Cela ne signifie pas que la mémoire ne sert à rien. Elle est même remarquablement fiable pour beaucoup d'usages quotidiens. Mais sa **fiabilité varie** beaucoup selon les conditions, le délai, le type de souvenir, et les sollicitations entre encodage et rappel. Comprendre cela rend humble sur la confiance qu'on peut accorder à ses propres souvenirs anciens.`
    },

    {
      type: 'encadre',
      label: `Combattre l'oubli : la répétition espacée`,
      contenu_md: `Ebbinghaus l'a montré dès **1885** : on oublie environ **50 % d'une liste neuve dans l'heure**, et **70 % en une journée**. Mais il a aussi montré que chaque répétition espacée dans le temps **aplatit la courbe de l'oubli**. Apprendre cinq fois en cinq jours est radicalement plus efficace que cinq fois en une heure. La science cognitive moderne (Pimsleur, Leitner, puis les logiciels Anki et SuperMemo) a transformé ce constat en algorithmes d'**apprentissage espacé** : on revoit une carte juste avant qu'on l'oublierait, en augmentant graduellement les intervalles. Méthode éprouvée pour les langues, les classifications biologiques, les listes médicales. Le principe : faire travailler la consolidation à long terme plutôt que la mémoire de travail.`
    },

    {
      type: 'texte',
      titre: `Quand la mémoire <em>s'effrite</em> : Alzheimer`,
      contenu_md:
`La [maladie d'Alzheimer]{accent}, identifiée en **1906** par le neurologue allemand **Aloïs Alzheimer**, est aujourd'hui la première cause de **démence** dans le monde. Environ **55 millions de personnes** en sont atteintes en 2024 ; la projection est d'un triplement d'ici 2050 avec le vieillissement démographique.

La maladie débute typiquement par une **perte des souvenirs récents** — la mémoire épisodique. Le patient peut décrire avec précision son mariage cinquante ans plus tôt, mais oublier en quelques minutes ce qu'il vient de manger. Cette dissociation entre souvenirs anciens (conservés) et nouveaux souvenirs (impossibles à former) reflète exactement l'atteinte précoce de l'**hippocampe** — la même structure dont l'ablation a rendu H.M. amnésique. Avec la progression, la maladie gagne le cortex, et les souvenirs anciens s'effritent à leur tour.

Au plan microscopique, on observe deux marqueurs : des **plaques amyloïdes** (agrégats extracellulaires de protéine bêta-amyloïde) et des **dégénérescences neurofibrillaires** (filaments intracellulaires de protéine tau anormalement phosphorylée). Lesquels causent vraiment la maladie reste l'objet d'un débat scientifique tendu, prolongé depuis trois décennies.

Plusieurs facteurs de risque sont identifiés : l'âge (le plus important), la génétique (le gène **APOE4** double ou triple le risque), les maladies cardiovasculaires, l'inactivité intellectuelle. Et — découverte des dernières années — la **mauvaise qualité du sommeil** chronique, qui empêche le système glymphatique d'évacuer les déchets bêta-amyloïdes du cerveau. Le lien avec [[le-sommeil]] est désormais bien établi.

Les premiers traitements **modificateurs** de la maladie — notamment le **lécanémab** (2023) et le **donanémab** (2024), des anticorps qui éliminent les plaques amyloïdes — produisent un ralentissement modeste de la progression. Trop tard sans doute, et trop coûteux pour devenir l'arme massive espérée. La quête d'un vrai traitement reste l'un des plus grands défis ouverts de la médecine.`
    }

  ],

  quiz: [
    {
      q: `Quelle structure cérébrale est indispensable à la formation des nouveaux souvenirs explicites ?`,
      options: [
        `Le cervelet`,
        `L'hippocampe`,
        `Le tronc cérébral`,
        `Le corps calleux`
      ],
      correcte: 1,
      explication: `Démontré dramatiquement par le cas H.M., opéré bilatéralement de l'hippocampe en 1953 : incapable dès lors de former de nouveaux souvenirs explicites (faits, événements). Étudié pendant 50 ans par Brenda Milner. L'hippocampe est aussi la première structure touchée dans Alzheimer.`
    },
    {
      q: `Combien d'éléments la mémoire de travail peut-elle maintenir environ ?`,
      options: [
        `2-3`,
        `4-9 (le "magique 7±2" de Miller)`,
        `15-20`,
        `Plus de 50`
      ],
      correcte: 1,
      explication: `George Miller, dans son article de 1956, propose le fameux "7 ± 2". Des études plus récentes (Cowan) ont révisé ce chiffre à environ 4 ± 1 pour la capacité "pure". C'est en tout cas une limite étroite, qui contraste avec la capacité quasi illimitée de la mémoire à long terme.`
    },
    {
      q: `Quelle est la différence entre mémoire épisodique et mémoire sémantique ?`,
      options: [
        `L'épisodique est consciente, la sémantique inconsciente`,
        `L'épisodique concerne les événements vécus situés dans le temps et l'espace ; la sémantique concerne les connaissances générales sans contexte personnel`,
        `L'épisodique est plus rapide`,
        `La sémantique est propre aux animaux`
      ],
      correcte: 1,
      explication: `Distinction proposée par Endel Tulving en 1972. "Hier j'ai mangé une pomme à la cuisine" (épisodique, contexte précis) vs "Une pomme est un fruit" (sémantique, connaissance générale sans contexte personnel). Dans Alzheimer, c'est l'épisodique récente qui est touchée en premier.`
    },
    {
      q: `Pourquoi le patient H.M. pouvait-il apprendre de nouvelles compétences motrices malgré son amnésie ?`,
      options: [
        `Parce que ses lésions n'étaient pas complètes`,
        `Parce que la mémoire procédurale (gestes, habitudes) ne dépend pas de l'hippocampe mais d'autres structures (cervelet, ganglions de la base)`,
        `Parce qu'il se souvenait à court terme`,
        `Parce qu'il avait des aides extérieures`
      ],
      correcte: 1,
      explication: `Découverte majeure de Brenda Milner. H.M. apprenait des compétences motrices nouvelles (dessiner dans un miroir, par exemple) sans jamais se souvenir de l'avoir fait. Preuve que la mémoire procédurale est un système séparé de la mémoire déclarative, qui passe par d'autres circuits.`
    },
    {
      q: `Quand a lieu principalement la consolidation des souvenirs ?`,
      options: [
        `Pendant les phases d'éveil concentré`,
        `Pendant le sommeil, surtout le sommeil lent profond, durant lequel l'hippocampe "rejoue" les expériences récentes`,
        `Pendant les repas`,
        `À aucun moment particulier`
      ],
      correcte: 1,
      explication: `Le sommeil lent profond est crucial pour la consolidation des souvenirs explicites : l'hippocampe rejoue les séquences enregistrées dans la journée vers le cortex, où elles se stabilisent durablement. Une dette de sommeil chronique altère profondément la mémoire — voir le sujet le-sommeil.`
    },
    {
      q: `Qu'a démontré Elizabeth Loftus dans ses recherches ?`,
      options: [
        `Que la mémoire est infaillible`,
        `Que l'on peut implanter de faux souvenirs par simple suggestion répétée`,
        `Que l'oubli est impossible`,
        `Que tous les souvenirs sont conscients`
      ],
      correcte: 1,
      explication: `Loftus a montré qu'on peut faire croire à des sujets adultes qu'ils ont vécu des événements totalement inventés (s'être perdus dans un centre commercial enfant, par exemple). Implications majeures pour les témoignages judiciaires : un témoignage sincère peut être profondément faux.`
    },
    {
      q: `Pourquoi la "répétition espacée" est-elle plus efficace que le bachotage intensif ?`,
      options: [
        `Elle prend moins de temps`,
        `Elle exploite la courbe de l'oubli (Ebbinghaus, 1885) : revoir une information juste avant qu'on l'oublierait renforce la trace à long terme et aplatit la courbe`,
        `Elle est plus amusante`,
        `Elle évite la fatigue`
      ],
      correcte: 1,
      explication: `Ebbinghaus a montré qu'on oublie ~50 % d'une liste neuve dans l'heure. Mais chaque répétition espacée renforce et aplatit la courbe. Les logiciels modernes (Anki, SuperMemo) calculent automatiquement le moment optimal de révision. Méthode très efficace pour les langues et les listes.`
    },
    {
      q: `Quelle est l'atteinte cérébrale typique au début de la maladie d'Alzheimer ?`,
      options: [
        `Le cervelet`,
        `Le tronc cérébral`,
        `L'hippocampe — d'où la perte précoce des souvenirs récents`,
        `Les nerfs périphériques`
      ],
      correcte: 2,
      explication: `Alzheimer débute typiquement par une dégénérescence de l'hippocampe, ce qui explique que les patients oublient les événements récents tout en conservant longtemps leurs souvenirs anciens (déjà consolidés dans le cortex). Au plan microscopique : plaques amyloïdes et dégénérescences neurofibrillaires (protéine tau).`
    }
  ]

});
