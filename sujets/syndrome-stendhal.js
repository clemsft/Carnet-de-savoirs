/* ===================================================================
   SUJET — Le syndrome de Stendhal
   ===================================================================
   Quand la beauté terrasse — un trouble psychiatrique singulier né à Florence.
   Domaines : Psychologie, Médecine
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'syndrome-stendhal',
    titre: 'Le <em>syndrome de Stendhal</em>',
    domaines: ['Sciences cognitives', 'Médecine'],
    tags: ['florence', 'art', 'voyage', 'psychiatrie', 'esthetique'],
    difficulte: 2,
    duree_estimee_min: 25,
    prerequis: [],
    lie_a: ['cerveau-humain', 'effet-placebo', 'paris-geographie', 'renaissance-italienne', 'gastronomie'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Comprendre un trouble psychiatrique rare et fascinant : le malaise — vertiges, tachycardie, parfois hallucinations — qui saisit certains visiteurs face à une concentration extrême d'œuvres d'art, observé pour la première fois par Stendhal à Florence en 1817 et formalisé par la psychiatre Graziella Magherini en 1989.`,

  points_cles: [
    `Le **syndrome de Stendhal** désigne un trouble psychosomatique aigu (vertiges, tachycardie, sentiments de dépersonnalisation, parfois hallucinations) survenant face à une exposition intense à des œuvres d'art.`,
    `L'écrivain français **Stendhal** (1783-1842) en décrit le premier épisode connu en sortant de la basilique **Santa Croce** à Florence en 1817, dans son livre de voyage *Rome, Naples et Florence*.`,
    `Le syndrome n'est formalisé cliniquement que **172 ans plus tard**, en **1989**, par la psychiatre italienne **Graziella Magherini**, qui dirige le service de psychiatrie de l'hôpital **Santa Maria Nuova** à Florence.`,
    `Magherini observe et documente **environ 100 cas** entre 1977 et 1986 chez des touristes hospitalisés après un effondrement dans les musées florentins, principalement aux **Offices** et à l'Accademia.`,
    `Le **terrain typique** : voyageur **solitaire**, en première visite, **occidental** d'âge moyen, à forte **sensibilité esthétique** et préparation culturelle, parfois fatigué par un long voyage. Les groupes organisés et les visiteurs italiens semblent quasi-immunisés.`,
    `Les **hypothèses neurologiques** parlent de **saturation perceptive** : surcharge sensorielle, émotionnelle et symbolique dépassant les capacités de régulation, dans un contexte de fatigue et d'attente démesurée.`,
    `Le syndrome a des **cousins** documentés : **syndrome de Jérusalem** (idées délirantes à connotation religieuse), **syndrome de Paris** (déception choquée chez des touristes asiatiques), **syndrome de l'Inde** (rejet ou conversion brusque).`,
    `Reconnu de façon **contestée** par la communauté psychiatrique internationale : ni le DSM-5 ni la CIM-11 ne le mentionnent comme entité clinique distincte. Il reste un syndrome **culturellement spécifique**, étudié dans la lignée des « *cultural-bound syndromes* ».`
  ],

  carte_mentale: {
    central: 'syndrome',
    noeuds: [
      { id: 'syndrome', label: 'Syndrome de Stendhal', description: 'Trouble psychosomatique aigu déclenché par une exposition esthétique intense. Observé à Florence depuis 1817, formalisé en 1989.' },
      { id: 'stendhal', label: 'Le récit fondateur', description: `Stendhal à Florence en 1817, sortant de Santa Croce, décrit un vertige célèbre qui donnera son nom au syndrome.` },
      { id: 'magherini', label: 'Graziella Magherini', description: `Psychiatre florentine. Publie en 1989 *La Sindrome di Stendhal*, après une centaine de cas observés au Santa Maria Nuova.` },
      { id: 'symptomes', label: 'Symptômes', description: 'Manifestations somatiques, émotionnelles, cognitives — du simple vertige à la crise délirante brève.' },
      { id: 'terrain', label: 'Terrain', description: 'Profils prédisposés : voyageur solitaire, sensible, sur-préparé, en première visite. Florence joue un rôle particulier.' },
      { id: 'hypotheses', label: 'Hypothèses', description: 'Saturation perceptive, attentes excessives, dissociation temporaire entre émotion et cognition.' },
      { id: 'cousins', label: 'Syndromes cousins', description: 'Jérusalem, Paris, Inde : autres syndromes culturellement spécifiques liés à un lieu chargé.' },
      { id: 'statut', label: 'Statut clinique', description: 'Reconnu dans la pratique florentine, contesté internationalement. Absent des grandes nosographies (DSM-5, CIM-11).' },

      // Symptômes
      { id: 'somatique', label: 'Symptômes somatiques', description: `**Tachycardie**, sueurs, vertige, malaise vagal, tremblements. Le corps signale avant la pensée.`, parent: 'symptomes' },
      { id: 'emotionnel', label: 'Symptômes émotionnels', description: `**Angoisse**, attaque de panique, sentiment d'**écrasement**, larmes incontrôlables, parfois euphorie paradoxale.`, parent: 'symptomes' },
      { id: 'cognitif', label: 'Symptômes cognitifs', description: `**Dépersonnalisation**, déréalisation, **hallucinations** brèves (visuelles, auditives), parfois état confusionnel transitoire.`, parent: 'symptomes' },

      // Cousins
      { id: 'jerusalem', label: 'Syndrome de Jérusalem', description: `Documenté depuis les années 1980. **Délires mystiques** chez certains pèlerins (~100/an) : se prennent pour des personnages bibliques, prêchent en chemise blanche.`, parent: 'cousins' },
      { id: 'paris', label: 'Syndrome de Paris', description: `Décrit en 1986 par le psychiatre **Hiroaki Ota**. Choc dépressif chez des touristes japonais déçus de l'écart entre Paris rêvé et Paris réel. Voir [[paris-geographie]].`, parent: 'cousins' },
      { id: 'inde', label: 'Syndrome de l\'Inde', description: `Identifié par **Régis Airault** dans les années 2000. Crises chez de jeunes voyageurs occidentaux : rejet violent, ou au contraire conversion mystique brusque.`, parent: 'cousins' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>sortie de Santa Croce</em>, hiver 1817`,
      contenu_md:
`**Henri Beyle**, plus connu sous son pseudonyme **Stendhal**, a trente-quatre ans quand il pénètre dans la basilique **Santa Croce**, à Florence, le **22 janvier 1817**. C'est là que reposent **Michel-Ange**, **Galilée**, **Machiavel**, **Rossini**. Le jeune écrivain est un voyageur cultivé, romantique, fervent admirateur de l'Italie. Il vient d'arpenter Naples et s'apprête à atteindre Bologne.

Sortant de l'église, il ressent quelque chose dont il rapportera la description dans son carnet de voyage *Rome, Naples et Florence*, publié l'année suivante :

> *« J'étais arrivé à ce point d'émotion où se rencontrent les sensations célestes données par les beaux-arts et les sentiments passionnés. En sortant de Santa Croce, j'avais un battement de cœur, la vie était épuisée chez moi, je marchais avec la crainte de tomber. »*

C'est l'un des passages les plus célèbres de la littérature de voyage. Stendhal n'invente pas un syndrome — il décrit, en grand styliste, un état dont il est le sujet et l'analyste. Près de deux siècles plus tard, ce vertige aura un nom : le **syndrome de Stendhal**.`
    },

    {
      type: 'encadre',
      label: `Précision`,
      contenu_md: `Stendhal ne nomme évidemment pas son malaise. Il le décrit avec précision littéraire. Le **baptême du syndrome** est rétrospectif : c'est la psychiatre **Graziella Magherini** qui, en 1989, choisit de donner à un trouble qu'elle observe quotidiennement à Florence le nom de l'écrivain qui en avait laissé le récit le plus marquant 172 ans plus tôt.`
    },

    {
      type: 'widget',
      titre: `Du récit littéraire au syndrome clinique`,
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1817', titre: `Stendhal à Florence`, description: `Le 22 janvier, Henri Beyle visite **Santa Croce**. En sortant, il décrit son fameux malaise — battements de cœur, vertige, vie « épuisée ». Le récit paraîtra l'année suivante dans *Rome, Naples et Florence*.` },
          { date: '1817-1977', titre: `Cent soixante ans de silence`, description: `Pendant ce temps, des récits similaires sont consignés par des voyageurs européens, mais le trouble n'est jamais formalisé. Les médecins florentins voient régulièrement des touristes étrangers s'évanouir dans les musées sans qu'on y voie une pathologie distincte.` },
          { date: '1977', titre: `Les premiers cas documentés`, description: `**Graziella Magherini**, psychiatre à l'hôpital **Santa Maria Nuova** à Florence — l'établissement le plus proche des Offices — commence à documenter systématiquement les cas qu'elle reçoit. Les patients arrivent en ambulance, en pleine crise, depuis les musées.` },
          { date: '1989', titre: `Publication de l'ouvrage`, description: `Magherini publie ***La Sindrome di Stendhal***, où elle décrit ~**100 cas** observés entre 1977 et 1986. Elle propose le terme, le profil clinique, les déclencheurs et les hypothèses étiologiques. Le syndrome entre dans la littérature psychiatrique internationale.` },
          { date: '1996', titre: `Film de Dario Argento`, description: `*La Sindrome di Stendhal*, thriller du réalisateur italien Dario Argento (avec sa fille Asia), porte le syndrome à l'écran grand public. La fiction installe le terme dans la culture populaire — au prix d'une dérive sensationnaliste.` },
          { date: 'Années 2000', titre: `Études neurologiques`, description: `Plusieurs équipes (notamment italiennes et japonaises) tentent de cerner les **corrélats neurobiologiques** : hyperactivation de l'amygdale, surcharge du cortex préfrontal, dysrégulation neurovégétative. Aucun marqueur spécifique n'émerge.` },
          { date: '2010-2020', titre: `Reconnaissance contestée`, description: `Le syndrome reste **absent du DSM-5** (2013) et de la **CIM-11** (2022). Il est étudié comme **syndrome culturellement spécifique**, dans la lignée des syndromes de Jérusalem, de Paris ou de l'Inde. Sa réalité clinique reste reconnue à Florence où l'hôpital prépare encore les internes à le diagnostiquer.` }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Ce que <em>Magherini</em> a observé`,
      contenu_md:
`Quand **Graziella Magherini** prend en charge le service psychiatrique de **Santa Maria Nuova**, à deux pas des Offices, elle découvre une particularité épidémiologique propre à Florence. Régulièrement, des touristes étrangers sont amenés en ambulance depuis les musées, en pleine crise — vertiges, palpitations, sensation de mort imminente, parfois confusion mentale.

Ces patients ne présentent pas de pathologie sous-jacente identifiable. Ils ne sont pas drogués, pas alcoolisés, n'ont pas d'antécédents psychiatriques majeurs. Après quelques heures de repos, parfois une nuit d'hospitalisation, ils retrouvent leur état normal — souvent gênés, parfois éberlués par ce qui leur est arrivé. Beaucoup quittent Florence dès le lendemain, sans achever leur voyage.

Magherini, sur **dix ans d'observation**, recense environ **100 cas** suffisamment caractérisés pour faire l'objet d'une étude clinique. Elle en tire trois constats marquants :

D'abord, le **profil des patients** est remarquablement homogène. Voyageurs occidentaux, principalement européens du Nord et nord-américains, d'âge moyen entre 25 et 45 ans, **voyageant seuls**, en **première visite** culturelle à Florence, dotés d'une **sensibilité esthétique préparée** (lectures, attentes, parfois professions artistiques). Très peu d'**Italiens** dans la cohorte — comme si la familiarité culturelle protégeait. Quasiment aucun visiteur en **groupe organisé** — comme si le groupe encadrait, distrayait, dédramatisait.

Ensuite, le **déclencheur typique** est non pas une œuvre quelconque, mais une **concentration extrême** d'œuvres dans un lieu identifié : Santa Croce, les Offices, l'Accademia (où trône le *David* de Michel-Ange). L'effet est **rarement** déclenché par une œuvre isolée — il faut la saturation.

Enfin, les **symptômes** se déploient selon trois registres mêlés : somatique, émotionnel, cognitif.`
    },

    {
      type: 'widget',
      titre: `Les trois registres symptomatiques`,
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: `Corps`,
            titre: `Symptômes somatiques`,
            description: `**Tachycardie**, palpitations, oppression thoracique, sueurs, vertiges, **malaise vagal** pouvant aller jusqu'à la syncope, tremblements, sensation de nausée. C'est souvent ce qui motive l'appel des secours — les témoins voient quelqu'un *« avoir un malaise »*, sans soupçonner la cause esthétique.`
          },
          {
            tag: `Émotion`,
            titre: `Symptômes émotionnels`,
            description: `**Crise d'angoisse**, **attaque de panique**, sentiment d'**écrasement** ou de **submersion**, larmes incontrôlables. À l'opposé, plus rare : **euphorie paradoxale**, rire incoercible, exaltation. Le point commun : un débordement affectif que la personne ne parvient pas à réguler par sa volonté.`
          },
          {
            tag: `Esprit`,
            titre: `Symptômes cognitifs`,
            description: `**Dépersonnalisation** (sentiment de ne plus être soi-même), **déréalisation** (le monde paraît irréel, scénique), troubles de l'attention, **hallucinations** brèves visuelles ou auditives — souvent en lien avec les œuvres regardées (figures qui *« bougent »*, voix). État confusionnel transitoire, parfois amnésie partielle de l'épisode.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Pourquoi <em>Florence</em>, et pourquoi <em>eux</em> ?`,
      contenu_md:
`La question fascine. Pourquoi cette concentration de cas à Florence, et pas à Rome, Paris, ou Saint-Pétersbourg, villes pourtant aussi denses en art ?

Plusieurs facteurs convergent. D'abord, Florence est une ville **petite, dense, intense**. En quelques centaines de mètres, on traverse Santa Croce, le Bargello, les Offices, le Ponte Vecchio, le Palazzo Pitti. La concentration d'œuvres au mètre carré y est sans équivalent. Le visiteur enchaîne, sans pause, des chefs-d'œuvre absolus.

Ensuite, Florence est le berceau de la [[renaissance-italienne]] — et c'est précisément cette culture-là qui structure l'**imaginaire esthétique** des visiteurs occidentaux. Botticelli, Léonard, Michel-Ange, Raphaël : on arrive à Florence avec des **attentes démesurées**, construites par des décennies de reproductions, de cours d'histoire de l'art, de récits de voyage. La rencontre **directe** avec les originaux est un événement chargé qui peut être trop chargé.

Enfin, il y a la **fatigue du voyage**. Le touriste type des cas de Magherini débarque souvent au terme d'un périple italien (Rome puis Florence puis Venise) — manque de sommeil, décalage horaire, repas irréguliers, marche prolongée. L'organisme est déjà en alerte. Voir [[le-sommeil]] pour comprendre à quel point la privation de sommeil fragilise la régulation émotionnelle.

Sur le plan **neurologique**, plusieurs hypothèses coexistent. L'imagerie a montré que la contemplation esthétique active des réseaux cérébraux complexes — récompense, mémoire émotionnelle (amygdale), évaluation symbolique (cortex préfrontal). Quand l'intensité dépasse les capacités de régulation neurovégétative, le système bascule : tachycardie, hyperventilation, sensation d'étranger à soi-même. C'est une **crise de saturation perceptive** plutôt qu'une maladie au sens strict.

Le rôle des **attentes** est crucial — et fait écho au mécanisme de [[effet-placebo]] (ou plutôt son envers, l'effet nocebo). Quand on s'attend à une expérience esthétique transcendante, le [[cerveau-humain]] mobilise des ressources émotionnelles avant même la rencontre. Si la rencontre les déborde, le système se cabre.`
    },

    {
      type: 'widget',
      titre: `Trois syndromes cousins`,
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `Syndrome de Jérusalem`,
            description: `Décrit depuis les années 1980 par des psychiatres israéliens (notamment **Yair Bar-El**). Concerne environ **100 pèlerins par an**, principalement protestants évangéliques. Idées **délirantes à thématique religieuse** : se prendre pour un personnage biblique, prêcher dans les rues de la vieille ville, se vêtir d'un drap blanc. Symptômes typiquement résolutifs en quelques jours après retour au pays. Plus de **40 cas / an** auraient été pris en charge à l'hôpital psychiatrique Kfar Shaul de Jérusalem.`
          },
          {
            titre: `Syndrome de Paris`,
            description: `Décrit en **1986** par le psychiatre japonais **Hiroaki Ota** travaillant à Paris. Concerne principalement de jeunes touristes **japonais** (mais aussi chinois et coréens) confrontés à l'écart entre la **Paris rêvée** (raffinement, douceur, élégance) et la **Paris vécue** (foule, saleté locale, comportements perçus comme brusques). Symptômes : dépression aiguë, attaques de panique, idées de persécution. L'ambassade du Japon à Paris dispose d'une **ligne dédiée** au rapatriement de ces cas. Voir [[paris-geographie]].`
          },
          {
            titre: `Syndrome de l'Inde`,
            description: `Étudié notamment par le psychiatre français **Régis Airault** dans son livre *Fous de l'Inde* (2000). Concerne de jeunes voyageurs occidentaux backpackers en Inde du Nord. Deux pôles : soit **rejet violent** (panique, fuite précipitée du pays), soit **conversion mystique brusque** (abandon de l'Occident, séjour prolongé en ashram). Le sous-continent agit comme un **révélateur** psychologique chez des personnalités fragilisées par l'âge ou les questionnements identitaires.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>statut clinique</em> contesté`,
      contenu_md:
`Malgré sa célébrité culturelle, le syndrome de Stendhal n'a **jamais été admis** comme entité diagnostique dans les grandes classifications psychiatriques internationales. Ni le **DSM-5** (manuel américain, 2013), ni la **CIM-11** (classification de l'OMS, 2022) ne le mentionnent comme catégorie autonome.

Les critiques formulées par les sceptiques sont sérieuses. D'abord, l'**échantillon de Magherini** est petit et géographiquement localisé : 100 cas en 10 ans sur une seule ville. Difficile d'en déduire un syndrome universel. Ensuite, les symptômes décrits — tachycardie, vertige, dépersonnalisation, anxiété — sont **non spécifiques** : on les retrouve dans toute attaque de panique, quel que soit le contexte. Ce qui serait propre au syndrome de Stendhal, c'est uniquement le **déclencheur esthétique** — ce qui en fait davantage un **contexte** qu'un syndrome au sens nosologique strict.

D'autres voix soulignent une dimension **culturelle et historique** : le syndrome n'existe peut-être que parce qu'il est *attendu*. À Florence, le personnel hospitalier sait reconnaître ces crises, les patients les identifient eux-mêmes par référence à Stendhal, les médias en parlent. Ce **cercle culturel** facilite à la fois la survenue et le diagnostic — comme tant d'autres troubles psychiatriques culturellement modelés.

Les défenseurs du concept répondent que le syndrome existe **cliniquement** — les patients sont bien là, les crises sont bien réelles — même si sa **catégorisation théorique** reste à affiner. Florence continue de prendre au sérieux ces patients ; **Santa Maria Nuova** garde la tradition d'une prise en charge spécifique, et l'office du tourisme local recommande discrètement aux visiteurs de **limiter** leurs visites de musée à quelques heures par jour, et de **boire et manger** régulièrement.

Au-delà de la querelle nosologique, le syndrome conserve une **valeur épistémique** précieuse. Il rappelle que la frontière entre **expérience esthétique** et **réaction physiologique** est poreuse, que le [[cerveau-humain]] ne distingue pas aussi nettement qu'on l'imagine les ressources qu'il mobilise pour contempler un tableau et celles qu'il déploie en présence d'un danger. La beauté peut foudroyer — au sens, presque, médical du terme.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: `Vrai ou faux ?`,
      affirmation: `Le syndrome de Stendhal est officiellement reconnu comme entité clinique distincte dans le DSM-5 et la CIM-11.`,
      reponse: false,
      explication: `Faux. Le syndrome n'est admis ni dans le DSM-5 (2013) ni dans la CIM-11 (2022). Il est plutôt étudié comme syndrome culturellement spécifique. Critiques : échantillon de Magherini limité (100 cas en 10 ans à Florence), symptômes non spécifiques, possible artefact culturel. Il reste cliniquement reconnu à Florence.`
    },
    {
      type: 'associer',
      q: `Associe chaque syndrome au lieu (ou personnage) auquel il est associé :`,
      paires: [
        { gauche: `Stendhal`, droite: `Florence (1817)` },
        { gauche: `Magherini`, droite: `Hôpital Santa Maria Nuova` },
        { gauche: `Hiroaki Ota`, droite: `Syndrome de Paris` },
        { gauche: `Régis Airault`, droite: `Syndrome de l'Inde` }
      ],
      explication: `Stendhal décrit son malaise à Florence en 1817 (sortie de Santa Croce). Graziella Magherini, psychiatre au Santa Maria Nuova (hôpital florentin le plus proche des Offices), formalise le syndrome en 1989. Hiroaki Ota décrit le syndrome de Paris en 1986. Régis Airault étudie le syndrome de l'Inde (livre "Fous de l'Inde", 2000).`
    },
    {
      type: 'texte-a-trou',
      q: `Complète ces deux dates clés du syndrome :`,
      texte: `Stendhal décrit son malaise à Florence en {1817}. La psychiatre Graziella Magherini formalise cliniquement le syndrome en {1989}, soit 172 ans plus tard.`,
      explication: `1817 : Stendhal visite Santa Croce le 22 janvier et décrit son fameux vertige dans "Rome, Naples et Florence" (1818). 1989 : Magherini publie "La Sindrome di Stendhal" après dix ans d'observation systématique d'environ 100 cas à l'hôpital Santa Maria Nuova.`
    },
    {
      q: `Qui a décrit le premier épisode connu du syndrome qui porte son nom, et où ?`,
      options: [
        `Goethe à Rome en 1786`,
        `Stendhal à Florence en 1817, en sortant de la basilique Santa Croce`,
        `Proust à Venise en 1900`,
        `Byron à Naples en 1820`
      ],
      correcte: 1,
      explication: `Henri Beyle (Stendhal) décrit son malaise dans Rome, Naples et Florence (1818) : « En sortant de Santa Croce, j'avais un battement de cœur, la vie était épuisée chez moi, je marchais avec la crainte de tomber. » Santa Croce, basilique franciscaine de Florence, abrite les tombeaux de Michel-Ange, Galilée et Machiavel.`
    },
    {
      q: `Qui a formalisé cliniquement le syndrome, et quand ?`,
      options: [
        `Sigmund Freud en 1900`,
        `Henri Ey en 1950`,
        `Graziella Magherini en 1989, à partir d'environ 100 cas observés à Florence`,
        `Boris Cyrulnik en 2000`
      ],
      correcte: 2,
      explication: `La psychiatre italienne Graziella Magherini, qui dirige le service de psychiatrie de l'hôpital Santa Maria Nuova à Florence (le plus proche des Offices), publie La Sindrome di Stendhal en 1989, après dix ans d'observation systématique d'environ 100 cas chez des touristes hospitalisés.`
    },
    {
      q: `Quels symptômes caractérisent typiquement le syndrome de Stendhal ?`,
      options: [
        `Uniquement des hallucinations visuelles`,
        `Vertige, tachycardie, dépersonnalisation, parfois hallucinations brèves et attaque de panique`,
        `Migraines chroniques`,
        `Insomnies persistantes`
      ],
      correcte: 1,
      explication: `Les symptômes se déploient sur trois registres : somatique (tachycardie, vertiges, sueurs), émotionnel (angoisse, écrasement, larmes), cognitif (dépersonnalisation, déréalisation, parfois hallucinations brèves). L'épisode est généralement résolutif en quelques heures à quelques jours.`
    },
    {
      q: `Quel est le profil typique des patients dans la cohorte de Magherini ?`,
      options: [
        `Adolescents italiens en groupe scolaire`,
        `Personnes âgées locales`,
        `Voyageurs occidentaux solitaires, en première visite, à forte sensibilité esthétique`,
        `Touristes pressés en transit court`
      ],
      correcte: 2,
      explication: `Magherini observe une remarquable homogénéité : voyageurs occidentaux (nord-européens et nord-américains), entre 25 et 45 ans, voyageant seuls, en première visite à Florence, culturellement préparés. Les Italiens et les visiteurs en groupes organisés sont quasi-absents de la cohorte.`
    },
    {
      q: `Quelle est l'hypothèse neurologique principale du syndrome ?`,
      options: [
        `Une infection virale`,
        `Une saturation perceptive et émotionnelle dépassant les capacités de régulation, dans un contexte de fatigue et d'attentes culturelles élevées`,
        `Une intoxication aux peintures anciennes`,
        `Une carence vitaminique`
      ],
      correcte: 1,
      explication: `L'hypothèse dominante : l'exposition intense et concentrée à des œuvres chargées d'attentes culturelles active de multiples réseaux cérébraux (récompense, amygdale, cortex préfrontal). Quand l'intensité dépasse les capacités de régulation neurovégétative, le système bascule en crise. Le rôle des attentes est crucial — proche par mécanisme de l'effet nocebo.`
    },
    {
      q: `Quel syndrome cousin concerne principalement des touristes japonais déçus par la capitale française ?`,
      options: [
        `Syndrome de Marseille`,
        `Syndrome de Paris, décrit en 1986 par le psychiatre Hiroaki Ota`,
        `Syndrome de Lyon`,
        `Syndrome de Versailles`
      ],
      correcte: 1,
      explication: `Décrit par Hiroaki Ota, il concerne principalement de jeunes touristes japonais (mais aussi chinois et coréens) confrontés au choc entre Paris rêvée et Paris vécue. L'ambassade du Japon à Paris dispose d'une ligne dédiée au rapatriement de ces cas, qui présentent dépression aiguë, panique, idées de persécution.`
    },
    {
      q: `Quel est le statut du syndrome de Stendhal dans les grandes classifications psychiatriques internationales ?`,
      options: [
        `Reconnu comme trouble distinct dans le DSM-5`,
        `Reconnu dans la CIM-11`,
        `Absent du DSM-5 et de la CIM-11 — son existence reste contestée, il est plutôt étudié comme syndrome culturellement spécifique`,
        `Classé comme maladie infectieuse`
      ],
      correcte: 2,
      explication: `Malgré sa célébrité culturelle, le syndrome n'est admis ni dans le DSM-5 (2013) ni dans la CIM-11 (2022). Critiques : échantillon initial limité, symptômes non spécifiques, possible artefact culturel. Il reste cependant pris au sérieux cliniquement à Florence et dans les études sur les syndromes culturellement spécifiques.`
    },
    {
      q: `Pourquoi Florence semble-t-elle particulièrement propice au déclenchement du syndrome ?`,
      options: [
        `Son climat humide`,
        `Sa concentration extrême d'œuvres dans un périmètre réduit, son statut de berceau de la Renaissance, et les attentes culturelles démesurées qu'elle suscite chez les visiteurs préparés`,
        `Sa pollution atmosphérique`,
        `L'altitude de la ville`
      ],
      correcte: 1,
      explication: `Trois facteurs convergent : la densité d'œuvres au mètre carré (Santa Croce, Bargello, Offices, Accademia en quelques centaines de mètres) ; Florence comme berceau de la Renaissance qui structure l'imaginaire esthétique occidental ; et la fatigue du voyage qui fragilise les capacités de régulation émotionnelle.`
    }
  ]

});
