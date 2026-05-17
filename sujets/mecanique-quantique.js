/* ===================================================================
   SUJET — La mécanique quantique
   ===================================================================
   La théorie qui décrit l'infiniment petit — et qui a tout changé.
   Domaine : Physique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'mecanique-quantique',
    titre: 'La <em>mécanique quantique</em>',
    domaines: ['Physique'],
    tags: ['quantique', 'einstein', 'bohr', 'incertitude', 'intrication'],
    difficulte: 3,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['trous-noirs', 'ia-generative', 'theorie-des-cordes'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Comprendre la théorie qui régit l\'infiniment petit — où une particule peut être à deux endroits à la fois, où la mesure modifie l\'objet mesuré, et où la corrélation entre deux particules défie l\'idée même d\'une réalité indépendante de l\'observateur.',

  points_cles: [
    'La **mécanique quantique** est la théorie physique qui décrit le comportement de la matière et de l\'énergie aux **échelles atomique et subatomique**.',
    'Une particule quantique se comporte à la fois comme une **onde** et comme une **particule** — c\'est la **dualité onde-corpuscule**.',
    'Le **principe d\'incertitude** d\'Heisenberg (1927) : on ne peut pas connaître simultanément avec précision la position **et** la vitesse d\'une particule.',
    'Une particule peut exister dans une **superposition** d\'états — elle n\'a pas de valeur définie tant qu\'on ne mesure pas. La mesure « effondre » la fonction d\'onde.',
    'Deux particules **intriquées** restent corrélées instantanément, même séparées par des années-lumière — un phénomène qu\'Einstein appelait « action fantôme à distance ».',
    'La théorie est **d\'une précision expérimentale inégalée** : ses prédictions sont vérifiées à 12 décimales près. Elle fonde toute l\'électronique, le laser, l\'IRM.',
    'Le **prix Nobel 2022** a couronné Aspect, Clauser et Zeilinger pour avoir prouvé expérimentalement que la nature est non-locale — Einstein avait tort.'
  ],

  carte_mentale: {
    central: 'quantique',
    noeuds: [
      { id: 'quantique', label: 'Mécanique quantique', description: 'Théorie de l\'infiniment petit, élaborée entre 1900 et 1930.' },
      { id: 'naissance', label: 'Naissance', description: 'Planck (1900), Einstein (1905), Bohr (1913), De Broglie (1924), Heisenberg & Schrödinger (1925-1926).' },
      { id: 'principes', label: 'Quatre principes étranges', description: 'Quantification, dualité, superposition, intrication.' },
      { id: 'mesure', label: 'Le problème de la mesure', description: 'Mesurer, c\'est forcer la nature à choisir un état parmi plusieurs possibles.' },
      { id: 'interpretations', label: 'Interprétations', description: 'Copenhague, multivers, ondes-pilotes : les équations sont d\'accord, leur sens reste débattu.' },
      { id: 'applications', label: 'Applications', description: 'Électronique, laser, IRM, GPS, et désormais ordinateurs quantiques.' },

      // Naissance — sous-niveau
      { id: 'planck', label: 'Planck (1900)', description: 'Pour expliquer le rayonnement du corps noir, Planck postule que l\'énergie ne s\'échange que par **paquets** discrets — les *quanta*.', parent: 'naissance' },
      { id: 'einstein-photon', label: 'Einstein (1905)', description: 'L\'effet photoélectrique impose que **la lumière elle-même** soit composée de quanta : les **photons**. Prix Nobel 1921 pour cela, pas pour la relativité.', parent: 'naissance' },
      { id: 'bohr-atome', label: 'Bohr (1913)', description: 'Modèle atomique où les électrons occupent des orbites discrètes, sautant brutalement de l\'une à l\'autre en émettant un photon.', parent: 'naissance' },
      { id: 'de-broglie', label: 'De Broglie (1924)', description: 'Si la lumière est aussi particule, **toute matière** doit aussi être onde. Idée folle confirmée trois ans plus tard.', parent: 'naissance' },
      { id: 'schrodinger', label: 'Schrödinger (1926)', description: 'Pose **l\'équation** qui régit l\'évolution de la fonction d\'onde. La pierre angulaire mathématique de toute la théorie.', parent: 'naissance' },

      // Principes
      { id: 'dualite', label: 'Dualité onde-corpuscule', description: 'Une particule quantique manifeste tour à tour des propriétés d\'onde (interférences) et de particule (impacts ponctuels).', parent: 'principes' },
      { id: 'superposition', label: 'Superposition', description: 'Tant qu\'on n\'a pas mesuré, une particule peut être dans plusieurs états à la fois — c\'est le sens du célèbre [chat de Schrödinger]{accent}.', parent: 'principes' },
      { id: 'incertitude', label: 'Incertitude (Heisenberg)', description: 'Plus on connaît précisément la position, moins on peut connaître la vitesse. Δx · Δp ≥ ℏ/2. Limite **fondamentale**, pas instrumentale.', parent: 'principes' },
      { id: 'intrication', label: 'Intrication', description: 'Deux particules « intriquées » se comportent comme un seul système, même à distance arbitraire. Confirmé expérimentalement, **prix Nobel 2022**.', parent: 'principes' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Une <em>révolution</em> en cinq actes',
      contenu_md:
`À la fin du XIXᵉ siècle, la physique paraît achevée. Mécanique de Newton, électromagnétisme de Maxwell, thermodynamique : tout semble réglé. Lord Kelvin lui-même croit qu\'il ne reste plus qu\'à mesurer les constantes physiques avec une décimale supplémentaire.

Quelques **anomalies** persistent pourtant. Le rayonnement émis par un corps chauffé ne suit pas les prédictions classiques. L\'effet photoélectrique se moque de la théorie ondulatoire de la lumière. Les spectres atomiques montrent des raies discrètes incompréhensibles.

Sur ces failles, en moins de **trente ans** (1900-1930), une nouvelle physique va s\'inventer. Elle ne corrige pas la physique classique : elle la remplace, à l\'échelle atomique, par quelque chose de profondément étranger à l\'intuition humaine. Les physiciens qui la construisent — Planck, Einstein, Bohr, Heisenberg, Schrödinger, Dirac, Pauli — savent qu\'ils touchent au plus profond du réel. Ils n\'aiment souvent pas ce qu\'ils trouvent.`
    },

    {
      type: 'widget',
      titre: 'Quelques jalons fondateurs',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1900', titre: 'Planck postule les quanta', description: 'Pour résoudre le problème du **corps noir**, Max Planck propose que l\'énergie ne s\'échange que par paquets discrets : *E = hν*. Il croit que c\'est un artifice mathématique. Ce n\'en est pas un.' },
          { date: '1905', titre: 'Le photon d\'Einstein', description: 'Einstein interprète l\'effet photoélectrique en disant que la lumière elle-même est faite de **photons**. C\'est cette idée — pas la relativité — qui lui vaudra le **Nobel 1921**.' },
          { date: '1913', titre: 'L\'atome de Bohr', description: 'Bohr propose un modèle atomique où les électrons sautent brutalement entre des orbites discrètes. Calcul correct du spectre de l\'hydrogène. Le saut quantique est né.' },
          { date: '1925-1926', titre: 'Heisenberg, Schrödinger', description: 'Deux formalismes mathématiques émergent presque simultanément. Schrödinger publie son équation. Heisenberg sa mécanique des matrices. Ils s\'avèrent **équivalents**.' },
          { date: '1927', titre: 'Congrès Solvay', description: 'À Bruxelles, les pères fondateurs débattent. **Bohr** et **Einstein** s\'opposent. Einstein rejette les implications philosophiques : *« Dieu ne joue pas aux dés »*. Bohr lui répond : *« Cessez de dire à Dieu ce qu\'il doit faire »*.' },
          { date: '1935', titre: 'Paradoxe EPR', description: 'Einstein, Podolsky et Rosen publient un article qui pointe l\'**intrication** comme preuve que la mécanique quantique doit être incomplète. Le débat s\'enlise pendant trente ans.' },
          { date: '1964', titre: 'Inégalités de Bell', description: 'John Bell trouve un moyen de **trancher expérimentalement** le débat Einstein-Bohr. Il faudra des décennies pour réaliser l\'expérience.' },
          { date: '1982', titre: 'Aspect tranche', description: 'Alain Aspect réalise à Orsay l\'expérience décisive. Bell avait raison, **Einstein avait tort** : la nature est non-locale.' },
          { date: '2022', titre: 'Prix Nobel', description: 'Aspect, Clauser et Zeilinger reçoivent le **Nobel de physique** pour leurs travaux sur l\'intrication.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>dualité</em> onde-corpuscule',
      contenu_md:
`L\'expérience la plus emblématique de toute la mécanique quantique est celle des **fentes de Young** appliquée à des particules individuelles.

Imagine une plaque percée de deux fentes parallèles, et derrière elle un écran qui détecte ce qui passe. Si tu envoies des particules une par une — un électron à la fois — vers les deux fentes, tu t\'attends à voir deux bandes lumineuses, en face des fentes. Et pendant un moment, c\'est ce qui se passe : chaque électron arrive en un point précis, comme une bille.

Mais avec le temps, les impacts s\'organisent en **franges d\'interférences** — exactement comme si chaque électron, individuellement, était passé par les deux fentes à la fois et avait interféré avec lui-même.

Or si tu places un détecteur à l\'une des fentes pour vérifier par laquelle l\'électron est passé, **les franges disparaissent immédiatement**. Le simple fait de regarder change le comportement. Le mystère central de la quantique est entier dans cette expérience.`
    },

    {
      type: 'encadre',
      label: 'Que veut dire "observer" ?',
      contenu_md: 'Ne te laisse pas piéger par l\'anthropocentrisme : l\'**observation** ne nécessite pas de conscience humaine. C\'est toute interaction qui échange de l\'information avec la particule — un photon qui rebondit dessus, un atome avec lequel elle se couple. La quantique ne dit pas que « la conscience crée la réalité ». Elle dit que la mesure est une **interaction physique** qui force le système à choisir un état.'
    },

    {
      type: 'texte',
      titre: 'Le principe d\'<em>incertitude</em>',
      contenu_md:
`En 1927, **Werner Heisenberg** énonce une inégalité qui ébranle l\'idée même du déterminisme :

*Plus tu connais précisément la position d\'une particule, moins tu peux connaître sa vitesse — et inversement. Le produit des deux incertitudes ne peut jamais descendre en dessous d\'une valeur minimale, fixée par la **constante de Planck** ℏ.*

Ce n\'est pas une limite de nos instruments, ni une approximation : c\'est une **propriété fondamentale** de la nature elle-même. À l\'échelle atomique, la trajectoire bien définie d\'une bille newtonienne n\'existe simplement pas.

Une conséquence vertigineuse : un atome au repos est **mathématiquement impossible**. S\'il était parfaitement immobile (vitesse nulle, parfaitement connue), sa position serait totalement indéterminée. La matière trépide donc en permanence — c\'est ce qu\'on appelle l\'**énergie de point zéro**.`
    },

    {
      type: 'widget',
      titre: 'L\'équation de Schrödinger : le cœur mathématique',
      composant: 'Equation',
      params: {
        tex: 'i\\hbar \\frac{\\partial \\Psi}{\\partial t} = \\hat{H} \\Psi',
        legende: 'Équation de Schrödinger dépendante du temps. Ψ est la fonction d\'onde — qui contient toute l\'information disponible sur le système. Ĥ est l\'opérateur hamiltonien (l\'énergie totale).',
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      contenu_md:
`Cette équation joue pour la quantique le rôle que joue *F = ma* en mécanique classique. Elle dit comment évolue la **fonction d\'onde** Ψ — un objet mathématique abstrait dont le **carré du module** donne la probabilité de trouver la particule à tel endroit, dans tel état.

C\'est le tournant philosophique de la théorie : la quantique ne décrit plus la **réalité** des objets, mais des **probabilités**. Une particule n\'a pas une position avant qu\'on la mesure. Elle a une distribution de positions probables, qui se concrétise au moment de l\'observation.`
    },

    {
      type: 'texte',
      titre: 'L\'<em>intrication</em> : ce qu\'Einstein détestait',
      contenu_md:
`Le phénomène le plus déroutant — et aujourd\'hui le mieux vérifié — de la mécanique quantique est l\'[intrication]{accent}.

Quand deux particules sont créées ensemble dans certaines conditions (par exemple deux photons issus d\'une même source), elles forment un **système indivisible**. Mesure le spin de l\'une : tu connais instantanément le spin de l\'autre, **même si elles sont à des années-lumière**.

Einstein, Podolsky et Rosen publient en **1935** un article qui pointe cette propriété comme un argument *contre* la mécanique quantique. Pour eux, c\'est inconcevable : ou bien les particules « savaient » à l\'avance ce qu\'elles allaient afficher (« variables cachées »), ou bien il y a une influence instantanée à distance (« action fantôme »).

Le débat reste théorique pendant trente ans. Puis en **1964**, **John Bell** propose une inégalité mathématique qui permettrait de **trancher expérimentalement**. En 1982, **Alain Aspect** réalise l\'expérience à Orsay et conclut sans ambiguïté : **les variables cachées d\'Einstein sont fausses**. La nature est bien non-locale, comme la quantique le prédit.

Le **prix Nobel 2022** a couronné cette saga, presque un siècle après le débat de Solvay.`
    },

    {
      type: 'encadre',
      label: 'Et la communication instantanée ?',
      contenu_md: 'Hélas, l\'intrication ne permet **pas** d\'envoyer de l\'information plus vite que la lumière. Quand tu mesures ta particule, le résultat est aléatoire — donc tu ne peux pas l\'utiliser pour transmettre un message à ton partenaire distant. La nature est non-locale **dans ses corrélations**, mais respecte la causalité d\'Einstein. C\'est l\'une des subtilités les plus profondes de la théorie.'
    },

    {
      type: 'texte',
      titre: 'À quoi ça <em>sert</em> ?',
      contenu_md:
`On entend parfois que la mécanique quantique serait une théorie ésotérique sans applications. C\'est exactement l\'inverse.

Elle est le fondement de **toute l\'électronique moderne** : transistors, diodes, semi-conducteurs (revoir [[detroit-de-taiwan]]). Sans quantique, pas d\'ordinateur, pas de smartphone, pas d\'internet. Elle explique le **laser** (cohérence quantique des photons stimulés), l\'**IRM** (résonance magnétique nucléaire), le **GPS** (qui doit corriger les effets relativistes ET quantiques pour rester précis).

Elle est aujourd\'hui l\'une des **précisions expérimentales les plus extrêmes** de toute la science : le moment magnétique anomal de l\'électron est prédit avec **12 décimales correctes**. Aucune théorie scientifique n\'a jamais été aussi bien vérifiée.

La frontière actuelle : les **ordinateurs quantiques**, qui exploitent superposition et intrication pour traiter en parallèle des calculs inaccessibles aux machines classiques. Google, IBM, Microsoft, et plusieurs start-ups (PsiQuantum, IonQ) y investissent des milliards. Les premières machines utiles à grande échelle sont attendues pour **la fin de la décennie**. Une partie de l'effort se concentre désormais sur le couplage entre ces machines et l'**intelligence artificielle** (voir [[ia-generative]]) — soit pour accélérer l'entraînement de modèles, soit à l'inverse pour utiliser l'IA dans la correction d'erreurs quantiques.`
    },

    {
      type: 'encadre',
      label: 'Et le sens de tout cela ?',
      contenu_md: 'Les équations sont incontestées, mais leur **interprétation** divise toujours les physiciens. L\'**interprétation de Copenhague** (Bohr) accepte que les particules n\'ont pas de propriétés définies hors mesure. L\'interprétation des **mondes multiples** (Everett) postule que toutes les possibilités se réalisent dans des univers parallèles. La théorie de la **décohérence** explique pourquoi le monde macroscopique paraît classique. **Aucune** ne fait l\'unanimité. C\'est l\'un des chantiers philosophiques majeurs de la physique contemporaine — et il est probable qu\'il restera ouvert longtemps.'
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'L\'intrication quantique permet d\'envoyer un message plus vite que la lumière entre deux particules distantes.',
      reponse: false,
      explication: 'Bien que les corrélations entre particules intriquées soient instantanées, on ne peut pas s\'en servir pour transmettre de l\'information : les résultats individuels des mesures sont aléatoires. La causalité relativiste reste respectée — c\'est l\'une des subtilités les plus profondes de la théorie.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces jalons fondateurs de la mécanique quantique dans l\'ordre chronologique :',
      items: [
        'Planck postule les quanta d\'énergie',
        'Einstein propose le photon pour expliquer l\'effet photoélectrique',
        'Bohr publie son modèle atomique avec orbites discrètes',
        'Heisenberg énonce le principe d\'incertitude',
        'Le congrès Solvay oppose Bohr et Einstein quelques mois plus tard',
        'Aspect réalise à Orsay l\'expérience qui tranche en faveur de la non-localité'
      ],
      explication: 'La mécanique quantique se construit en moins de trente ans, de Planck (1900) à Heisenberg et au congrès Solvay (1927). Le débat Einstein-Bohr sur l\'intrication, ouvert en 1935 (EPR), ne sera tranché expérimentalement qu\'en 1982 par Aspect.'
    },
    {
      type: 'associer',
      q: 'Associe chaque physicien à sa contribution majeure :',
      paires: [
        { gauche: 'Planck', droite: 'Quanta d\'énergie (1900)' },
        { gauche: 'Heisenberg', droite: 'Principe d\'incertitude' },
        { gauche: 'Schrödinger', droite: 'Équation d\'onde' },
        { gauche: 'Bohr', droite: 'Modèle atomique à orbites discrètes' },
        { gauche: 'Aspect', droite: 'Confirmation expérimentale de l\'intrication' }
      ],
      explication: 'Chacun des pères fondateurs apporte une pierre. Planck ouvre le bal en 1900, Bohr quantifie l\'atome en 1913, Heisenberg et Schrödinger formalisent la théorie en 1925-1926, et Aspect (Nobel 2022) tranche expérimentalement en 1982 le débat ouvert par Einstein.'
    },
    {
      q: 'Que signifie "quantification" en mécanique quantique ?',
      options: [
        'L\'utilisation de mathématiques pour décrire les phénomènes',
        'Le fait que certaines grandeurs (énergie, moment) ne prennent que des valeurs discrètes, par paquets',
        'La compression numérique de l\'information',
        'L\'évaluation statistique des résultats'
      ],
      correcte: 1,
      explication: 'Planck a découvert en 1900 que l\'énergie ne s\'échange que par paquets (quanta) de valeur E = hν. Cette discrétisation est le point de départ de toute la théorie.'
    },
    {
      q: 'Que dit le principe d\'incertitude d\'Heisenberg ?',
      options: [
        'Les mesures sont toujours imprécises à cause des instruments',
        'On ne peut pas connaître simultanément avec précision la position et la vitesse d\'une particule — c\'est une limite fondamentale, pas instrumentale',
        'Les particules disparaissent quand on les regarde',
        'Tout est subjectif en physique'
      ],
      correcte: 1,
      explication: 'C\'est une propriété **intrinsèque** de la nature, pas un défaut de mesure. Le produit des deux incertitudes est toujours ≥ ℏ/2. Une particule n\'a tout simplement pas de trajectoire bien définie au sens classique.'
    },
    {
      q: 'Que se passe-t-il dans l\'expérience des fentes de Young avec des électrons individuels ?',
      options: [
        'Les électrons forment deux bandes face aux fentes',
        'Chaque électron, envoyé un par un, produit avec le temps des franges d\'interférences — comme s\'il était passé par les deux fentes à la fois',
        'Les électrons sont arrêtés par la plaque',
        'Rien d\'observable'
      ],
      correcte: 1,
      explication: 'Même un par un, les électrons produisent un motif d\'interférences sur l\'écran final, signe qu\'ils se comportent comme des ondes interférant avec elles-mêmes. Mais si on observe par quelle fente ils passent, le motif disparaît : c\'est tout le mystère central de la mécanique quantique.'
    },
    {
      q: 'À quoi correspond la fonction d\'onde Ψ d\'une particule en mécanique quantique ?',
      options: [
        'À la position exacte de la particule',
        'À une fonction mathématique dont le carré du module donne la probabilité de trouver la particule dans tel ou tel état',
        'À sa vitesse instantanée',
        'À sa masse'
      ],
      correcte: 1,
      explication: 'La fonction d\'onde n\'est pas la "position" de la particule, mais un objet mathématique qui code toutes les probabilités possibles. C\'est l\'effondrement de cette fonction lors de la mesure qui donne un résultat précis.'
    },
    {
      q: 'Qu\'est-ce que l\'intrication quantique ?',
      options: [
        'Un emmêlement de fils dans un détecteur',
        'Un phénomène où deux particules forment un système indivisible et restent corrélées même à très grande distance',
        'Une fusion de deux atomes',
        'L\'état où toutes les particules sont au repos'
      ],
      correcte: 1,
      explication: 'Deux particules intriquées se comportent comme un seul système quantique. Mesurer l\'une "fixe" instantanément l\'état de l\'autre, même séparées par des kilomètres. Einstein détestait cela ("action fantôme à distance"). Confirmé expérimentalement par Aspect en 1982.'
    },
    {
      q: 'Pourquoi le prix Nobel de physique 2022 a-t-il été attribué à Aspect, Clauser et Zeilinger ?',
      options: [
        'Pour avoir construit le premier ordinateur quantique',
        'Pour leurs travaux expérimentaux sur l\'intrication, qui ont confirmé la mécanique quantique contre l\'objection d\'Einstein',
        'Pour avoir découvert le boson de Higgs',
        'Pour leurs travaux sur les trous noirs'
      ],
      correcte: 1,
      explication: 'Leurs expériences ont prouvé la violation des inégalités de Bell — c\'est-à-dire que les "variables cachées" d\'Einstein sont fausses, et que la nature est non-locale comme le prédit la quantique.'
    },
    {
      q: 'L\'intrication permet-elle d\'envoyer de l\'information instantanément à distance ?',
      options: [
        'Oui, c\'est le fondement de l\'internet quantique',
        'Non — bien que les corrélations soient instantanées, on ne peut pas s\'en servir pour transmettre un message plus vite que la lumière',
        'Oui, mais seulement avec des photons',
        'Oui, sur de courtes distances'
      ],
      correcte: 1,
      explication: 'Les résultats individuels des mesures sont aléatoires, donc on ne peut pas y encoder de message. La causalité relativiste reste sauve. C\'est l\'une des subtilités les plus profondes de la théorie.'
    },
    {
      q: 'Pourquoi la mécanique quantique n\'est-elle pas seulement une curiosité théorique ?',
      options: [
        'Parce qu\'elle a été abandonnée',
        'Parce qu\'elle fonde toute l\'électronique moderne, le laser, l\'IRM, et bientôt les ordinateurs quantiques',
        'Parce qu\'elle ne s\'applique qu\'aux étoiles',
        'Parce qu\'elle est née il y a longtemps'
      ],
      correcte: 1,
      explication: 'Sans mécanique quantique, pas de transistor, pas de semi-conducteur, donc pas d\'ordinateur ni de smartphone. Sans elle, pas de laser, pas d\'IRM, pas de GPS précis. C\'est probablement la théorie scientifique la plus utile et la mieux vérifiée jamais formulée.'
    }
  ],

  vocabulaire: [
    {
      terme: 'Quantum',
      definition: `**Paquet discret** par lequel certaines grandeurs (énergie, moment) ne peuvent s'échanger qu'en multiples entiers. Postulé par **Planck** en 1900 pour résoudre le problème du corps noir : *E = hν*. Discrétisation fondatrice de toute la théorie.`
    },
    {
      terme: 'Photon',
      definition: `**Quantum de lumière** : la lumière n'est pas seulement onde mais aussi composée de particules indivisibles. Interprétation d'**Einstein** (1905) pour expliquer l'effet photoélectrique — la découverte qui lui vaudra le Nobel 1921, pas la relativité.`
    },
    {
      terme: 'Dualité onde-corpuscule',
      definition: `Propriété fondamentale des objets quantiques qui manifestent tour à tour des comportements d'**onde** (interférences) et de **particule** (impacts ponctuels). Étendue à toute la matière par **de Broglie** en 1924.`
    },
    {
      terme: 'Fonction d\'onde',
      definition: `Objet mathématique noté **Ψ** qui contient toute l'information disponible sur un système quantique. Son **carré du module** donne la probabilité de trouver la particule dans tel ou tel état. Évolue selon l'équation de Schrödinger.`
    },
    {
      terme: 'Superposition',
      definition: `État où une particule existe **simultanément dans plusieurs états** possibles tant qu'aucune mesure n'a été effectuée. Illustré par le célèbre paradoxe du *chat de Schrödinger* — à la fois mort et vivant tant que la boîte reste fermée.`
    },
    {
      terme: 'Principe d\'incertitude',
      definition: `Énoncé par **Heisenberg** (1927) : on ne peut pas connaître simultanément avec précision la **position** *et* la **vitesse** d'une particule. Δx · Δp ≥ ℏ/2. Limite **fondamentale** de la nature elle-même, pas un défaut instrumental.`
    },
    {
      terme: 'Intrication',
      definition: `Phénomène où deux particules forment un **système indivisible** restant corrélées instantanément à distance arbitraire. Qualifiée par Einstein d'*« action fantôme »*, confirmée expérimentalement par **Aspect** en 1982. Prix Nobel 2022.`
    },
    {
      terme: 'Effondrement de la fonction d\'onde',
      definition: `Réduction brutale, lors d'une **mesure**, de la superposition d'états en un **résultat unique**. La mesure force la nature à choisir : c'est le passage du probable au défini. Mécanisme central — et toujours philosophiquement débattu.`
    },
    {
      terme: 'Non-localité',
      definition: `Propriété de la mécanique quantique selon laquelle deux systèmes intriqués restent corrélés **indépendamment de la distance** qui les sépare. Démontrée par la violation des inégalités de Bell. Coexiste paradoxalement avec la causalité relativiste.`
    },
    {
      terme: 'Inégalités de Bell',
      definition: `Critère mathématique proposé par **John Bell** en 1964 permettant de **trancher expérimentalement** entre la mécanique quantique et la thèse einsteinienne des *variables cachées*. Leur violation, vérifiée par Aspect en 1982, signe la non-localité de la nature.`
    }
  ]

});
