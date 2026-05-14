/* ===================================================================
   SUJET — Le capitalisme
   ===================================================================
   Propriété privée, marché, accumulation, salariat.
   Origines marchandes, industrielles, analyses de Smith, Marx, Weber.
   Variantes contemporaines et crises.
   Domaine : Économie
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'capitalisme',
    titre: 'Le <em>capitalisme</em>',
    domaines: ['Économie'],
    tags: ['marche', 'propriete-privee', 'accumulation', 'weber', 'marx', 'smith', 'financiarisation'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['inflation', 'monnaies-numeriques', 'revolution-francaise', 'route-de-la-soie'],
    date_creation: '2026-05-13',
    date_maj: '2026-05-13'
  },

  resume: 'Un système économique fondé sur la propriété privée des moyens de production, le libre marché et l\'accumulation indéfinie du capital. Comprendre ses origines marchandes et industrielles, les grandes analyses qui l\'ont disséqué (Smith, Marx, Weber), ses variantes nationales et les crises qui ont rythmé son histoire.',

  points_cles: [
    'Le **capitalisme** repose sur quatre piliers : la **propriété privée des moyens de production**, le **libre marché**, l\'**accumulation du capital** et le **salariat**.',
    'Il émerge entre le XIIᵉ et le XVIIIᵉ siècle, d\'abord comme **capitalisme marchand** (Venise, Gênes, Hollande), puis comme **capitalisme industriel** en Grande-Bretagne après 1750.',
    '**Adam Smith** (1776) en propose la première théorisation libérale : la **main invisible** du marché transforme les égoïsmes individuels en bien-être collectif.',
    '**Karl Marx** (1867) en livre la critique la plus radicale : extraction de la **plus-value**, exploitation du travail salarié, tendance aux crises et à la concentration.',
    '**Max Weber** (1905) cherche ses racines culturelles dans l\'**éthique protestante**, qui transforme le travail et l\'épargne en signes de l\'élection divine.',
    'Il existe plusieurs **variétés du capitalisme** : libéral anglo-saxon, rhénan continental, scandinave social-démocrate, capitalisme d\'État chinois.',
    'Les **crises** majeures — **1929**, **1973**, **2008** — ont chaque fois redéfini l\'équilibre entre marché et État : keynésianisme d\'après-guerre, néolibéralisme post-1980, retour de la régulation post-2008.',
    'Le capitalisme contemporain est marqué par la **financiarisation**, la montée des **plateformes** numériques, et la prise de conscience des **externalités** climatiques.'
  ],

  carte_mentale: {
    central: 'capitalisme',
    noeuds: [
      { id: 'capitalisme', label: 'Capitalisme', description: 'Système économique fondé sur la **propriété privée**, le **marché** et l\'**accumulation du capital**.' },

      { id: 'principes', label: 'Principes', description: 'Les piliers structurels du système : ce qui le distingue d\'autres modes de production.' },
      { id: 'origines', label: 'Origines', description: 'Du capitalisme marchand médiéval au capitalisme industriel britannique.' },
      { id: 'penseurs', label: 'Penseurs', description: 'Les grandes analyses fondatrices, défenseurs et critiques.' },
      { id: 'variantes', label: 'Variantes', description: 'Les formes nationales et culturelles que prend le capitalisme.' },
      { id: 'crises', label: 'Crises', description: 'Les ruptures historiques qui ont redéfini son équilibre avec l\'État.' },

      { id: 'propriete', label: 'Propriété privée', description: 'Les **moyens de production** (terres, usines, machines, capital) appartiennent à des acteurs privés.', parent: 'principes' },
      { id: 'marche', label: 'Libre marché', description: 'Les prix sont fixés par la **rencontre de l\'offre et de la demande**, sans planification centrale.', parent: 'principes' },
      { id: 'accumulation', label: 'Accumulation', description: 'Le profit n\'est pas consommé mais **réinvesti** pour générer davantage de profit. Croissance perpétuelle.', parent: 'principes' },
      { id: 'salariat', label: 'Salariat', description: 'Les travailleurs vendent leur **force de travail** contre un salaire, et non le produit de leur travail.', parent: 'principes' },

      { id: 'marchand', label: 'Capitalisme marchand', description: 'Banques et compagnies de commerce — **Venise**, **Gênes**, Anvers, **Amsterdam** — du XIIᵉ au XVIIIᵉ siècle. Voir [[route-de-la-soie]].', parent: 'origines' },
      { id: 'industriel', label: 'Capitalisme industriel', description: 'Né en Grande-Bretagne autour de **1750** : machine à vapeur, usines, prolétariat urbain.', parent: 'origines' },

      { id: 'smith', label: 'Adam Smith', description: '*Richesse des nations* (1776) : la **main invisible** du marché et la division du travail.', parent: 'penseurs' },
      { id: 'marx', label: 'Karl Marx', description: '*Le Capital* (1867) : extraction de la **plus-value**, lutte des classes, tendance aux crises.', parent: 'penseurs' },
      { id: 'weber', label: 'Max Weber', description: '*L\'Éthique protestante* (1905) : les racines **culturelles et religieuses** de l\'esprit capitaliste.', parent: 'penseurs' },

      { id: 'liberal', label: 'Anglo-saxon', description: 'Modèle **libéral** : marchés flexibles, État minimal, finance dominante. États-Unis, Royaume-Uni.', parent: 'variantes' },
      { id: 'rhenan', label: 'Rhénan', description: 'Modèle **coordonné** : cogestion, syndicats forts, banques patientes. Allemagne, Japon.', parent: 'variantes' },
      { id: 'etat', label: 'Capitalisme d\'État', description: 'Marché encadré par un **parti-État** stratège. **Chine** depuis 1978.', parent: 'variantes' },

      { id: '1929', label: '1929', description: 'Krach de Wall Street, **Grande Dépression**. Naissance du **keynésianisme** et du **New Deal**.', parent: 'crises' },
      { id: '1973', label: 'Choc pétrolier', description: 'Fin des Trente Glorieuses, **stagflation**, tournant **néolibéral** des années 1980 (Thatcher, Reagan).', parent: 'crises' },
      { id: '2008', label: 'Crise des subprimes', description: 'Effondrement financier mondial. Remise en cause de la dérégulation, retour partiel de l\'État.', parent: 'crises' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Qu\'est-ce que le <em>capitalisme</em> ?',
      contenu_md:
`Définir le capitalisme paraît simple — c\'est l\'économie de marché telle que nous la connaissons — et pourtant la formule échappe à un consensus précis. Les historiens, les économistes et les sociologues n\'en proposent pas exactement les mêmes contours.

On peut le caractériser par **quatre piliers** structurels. D\'abord la [propriété privée des moyens de production]{accent} : les terres, les usines, les machines, les brevets, le capital appartiennent à des acteurs privés (individus, entreprises, actionnaires). Ensuite le **libre marché** : les prix se forment par la rencontre de l\'offre et de la demande, sans planification centrale. Puis l\'**accumulation** : le profit n\'est pas seulement consommé, il est **réinvesti** pour générer davantage de profit, dans une dynamique de croissance perpétuelle. Enfin le **salariat** : la majorité des travailleurs n\'est ni propriétaire de ce qu\'elle produit, ni esclave ; elle vend sa **force de travail** contre un salaire.

Aucun de ces traits, isolément, n\'est exclusif au capitalisme. Le marché existait déjà à Babylone, la propriété privée à Rome, le salariat dans les ateliers médiévaux. Ce qui fait la singularité du système, c\'est leur **combinaison systématique** et le primat donné à l\'accumulation indéfinie. Marx parlera de *mode de production capitaliste*, Weber d\'*esprit du capitalisme*, Braudel de *civilisation matérielle*.`
    },

    {
      type: 'widget',
      titre: 'Les quatre piliers du capitalisme',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Pilier I',
            titre: 'Propriété privée',
            description: 'Les **moyens de production** (terres, usines, machines, brevets) appartiennent à des acteurs privés. Le droit de propriété est protégé par la loi et transmissible.'
          },
          {
            tag: 'Pilier II',
            titre: 'Libre marché',
            description: 'Les prix sont fixés par la **rencontre de l\'offre et de la demande**. Les acteurs s\'échangent biens, services et capitaux dans un cadre concurrentiel, sans planification centrale.'
          },
          {
            tag: 'Pilier III',
            titre: 'Accumulation du capital',
            description: 'Le profit n\'est pas consommé mais **réinvesti** pour générer davantage de profit. C\'est la **dynamique** propre au capitalisme : croître ou disparaître.'
          },
          {
            tag: 'Pilier IV',
            titre: 'Salariat',
            description: 'Les travailleurs vendent leur **force de travail** contre un salaire fixé d\'avance. Ils ne possèdent ni l\'outil de production, ni le produit de leur travail.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Du <em>capitalisme marchand</em> au <em>capitalisme industriel</em>',
      contenu_md:
`Le capitalisme n\'est pas né d\'un coup. Les historiens distinguent au moins deux grandes phases.

Le [capitalisme marchand]{accent} émerge dès le XIIᵉ siècle dans les cités-États italiennes. **Venise** et **Gênes** bâtissent leur richesse sur le commerce de longue distance : épices, soie, alun, esclaves. Voir [[route-de-la-soie]]. Les **Médicis** à Florence inventent au XIVᵉ siècle la banque moderne — comptabilité en partie double, lettre de change, escompte. Le relais est pris au XVIᵉ siècle par **Anvers**, puis au XVIIᵉ par **Amsterdam** : la **Compagnie néerlandaise des Indes orientales** (1602) est la première société par actions à grande échelle. Londres prend le relais au XVIIIᵉ siècle.

Ce capitalisme marchand est essentiellement **commercial et financier**. Il enrichit des minorités urbaines, mais ne transforme pas en profondeur les structures productives, qui restent artisanales et agricoles.

Le basculement se produit en **Grande-Bretagne** autour de **1750-1850**. Une conjonction unique de facteurs — abondance de charbon, **enclosures** chassant les paysans vers les villes, accumulation coloniale, brevets protecteurs, ingénieurs comme **James Watt** — accouche du [capitalisme industriel]{accent}. La machine à vapeur, la **filature** mécanique, le **chemin de fer** changent la nature même de la production. Apparaissent l\'**usine**, le **prolétariat** urbain, la production de masse. C\'est ce monde que Marx observe à Manchester en 1845, et dont il fera le matériau de sa critique.`
    },

    {
      type: 'widget',
      titre: 'Les grandes étapes historiques du capitalisme',
      composant: 'Frise',
      params: {
        evenements: [
          { date: 'XIIᵉ-XIIIᵉ s.', titre: 'Cités marchandes italiennes', description: 'Venise et Gênes dominent le commerce méditerranéen. Apparition des premières **banques** et des comptoirs commerciaux.' },
          { date: 'XIVᵉ s.', titre: 'Banque florentine', description: 'Les **Médicis** et autres familles inventent la **comptabilité en partie double**, la lettre de change, l\'escompte — outils techniques du capitalisme moderne.' },
          { date: '1602', titre: 'Compagnie des Indes', description: 'Création de la **VOC** néerlandaise, première **société par actions** à grande échelle. Amsterdam devient le centre financier mondial.' },
          { date: '1776', titre: 'Adam Smith', description: 'Publication de *La Richesse des nations*. Théorie de la **main invisible** : la concurrence transforme les intérêts privés en bien commun.' },
          { date: '1789', titre: 'Révolution française', description: 'Abolition des privilèges, des corporations, des entraves féodales au marché. Le capitalisme trouve son cadre **juridique bourgeois**. Voir [[revolution-francaise]].' },
          { date: '1780-1850', titre: 'Révolution industrielle', description: 'Machine à vapeur, filature mécanique, chemin de fer. La Grande-Bretagne devient l\'**atelier du monde**. Naissance du prolétariat urbain.' },
          { date: '1867', titre: 'Marx, Le Capital', description: 'Première grande **critique systématique** du capitalisme : extraction de la plus-value, tendance aux crises, lutte des classes.' },
          { date: '1929', titre: 'Krach de Wall Street', description: 'Effondrement boursier suivi de la **Grande Dépression**. Naissance du **keynésianisme** et du **New Deal** de Roosevelt.' },
          { date: '1944-1973', titre: 'Trente Glorieuses', description: 'Compromis fordiste : forte croissance, plein emploi, État-providence. **Bretton Woods** encadre la finance internationale.' },
          { date: '1979-1989', titre: 'Tournant néolibéral', description: '**Thatcher**, **Reagan**, **chute du Mur**. Dérégulation financière, privatisations, mondialisation. Le marché reprend la main sur l\'État.' },
          { date: '2008', titre: 'Crise des subprimes', description: 'Effondrement financier mondial parti des États-Unis. Remise en cause de la dérégulation. Retour partiel des États dans l\'économie.' },
          { date: 'années 2010-2020', titre: 'Capitalisme de plateformes', description: 'Montée d\'**Apple**, **Google**, **Amazon**, **Meta**, **Microsoft**. Concentration inédite, financiarisation, prise de conscience climatique.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: '<em>Adam Smith</em> et la main invisible',
      contenu_md:
`En 1776, un professeur de philosophie morale écossais, **Adam Smith**, publie un livre épais : *Recherches sur la nature et les causes de la richesse des nations*. Il pose la première théorisation systématique du capitalisme, et offre au libéralisme économique sa formule la plus célèbre : la [main invisible]{accent}.

L\'argument est élégant. Le boulanger ne fait pas son pain par bienveillance, mais par intérêt — il veut vivre de son métier. Le client, de son côté, n\'achète pas pour faire plaisir au boulanger, mais parce qu\'il a faim. Pourtant, de cette rencontre de deux égoïsmes émerge un résultat collectivement utile : le pain est produit, distribué, à un prix que la concurrence empêche de devenir abusif. *« Ce n\'est pas de la bienveillance du boucher, du brasseur ou du boulanger que nous attendons notre dîner, mais bien du soin qu\'ils apportent à leurs intérêts. »*

Smith ajoute un second concept clé : la **division du travail**. Dans sa célèbre fabrique d\'épingles, dix ouvriers spécialisés produisent 48 000 épingles par jour, là où chacun travaillant seul n\'en ferait que quelques dizaines. La productivité, et donc la richesse, naît de la **spécialisation**, elle-même rendue possible par l\'étendue du marché.

Il ne faut pas faire de Smith un libertarien : il était favorable à l\'éducation publique, méfiant envers les monopoles, conscient des dangers de la concentration. Mais l\'idée centrale — qu\'un marché concurrentiel coordonne mieux qu\'un planificateur — est restée la matrice de la pensée libérale.`
    },

    {
      type: 'encadre',
      label: 'À retenir',
      contenu_md: 'Pour [Smith]{accent}, le marché concurrentiel est un **mécanisme de coordination décentralisé** : il transforme les intérêts privés en richesse collective, sans qu\'aucune autorité ait à dicter qui produit quoi. C\'est l\'argument fondateur du libéralisme économique — et ce qui distingue radicalement le capitalisme des économies planifiées.'
    },

    {
      type: 'texte',
      titre: '<em>Marx</em> et la critique radicale',
      contenu_md:
`Près d\'un siècle plus tard, en 1867, paraît à Hambourg le premier livre du *Capital*, signé **Karl Marx**. C\'est la **critique** la plus radicale jamais formulée du capitalisme — et celle qui a structuré une part décisive du XXᵉ siècle, des révolutions communistes aux États-providence sociaux-démocrates.

Marx accepte une grande partie du diagnostic smithien : oui, le capitalisme est une formidable machine à produire des richesses ; oui, il révolutionne en permanence les techniques. *« La bourgeoisie a accompli des merveilles bien autrement plus grandes que les pyramides d\'Égypte. »* Mais derrière cette dynamique, il décèle un mécanisme d\'**exploitation** systématique.

Son concept central est celui de [plus-value]{accent}. Un ouvrier travaille, disons, dix heures par jour. La valeur qu\'il crée pendant la journée dépasse la valeur de son salaire — sinon, le capitaliste n\'aurait aucun intérêt à l\'employer. Cet **écart** entre la valeur produite et le salaire versé, c\'est la plus-value, captée par le propriétaire des moyens de production. L\'exploitation n\'est ni du vol, ni de l\'arbitraire individuel : elle est **structurelle**, inscrite dans le rapport salarial lui-même.

Marx en tire trois prédictions. D\'abord, la **concentration** : la concurrence pousse à éliminer les concurrents, le capital se concentre en quelques mains. Ensuite, la **paupérisation relative** du prolétariat. Enfin, les **crises de surproduction** récurrentes : la masse des travailleurs ne peut acheter ce qu\'elle produit, parce que ses salaires sont comprimés. Le système porte en lui les germes de son propre dépassement. Toutes ces prédictions ont été partiellement vérifiées, partiellement infirmées — mais la grille reste un outil d\'analyse incontournable.`
    },

    {
      type: 'widget',
      titre: 'L\'équation de la plus-value chez Marx',
      composant: 'Equation',
      params: {
        tex: '\\text{Valeur produite} = \\underbrace{C}_{\\text{capital constant}} + \\underbrace{V}_{\\text{salaire}} + \\underbrace{\\text{Pl}}_{\\text{plus-value}}',
        legende: 'C = matières premières, machines amorties. V = capital variable, c\'est-à-dire les salaires. Pl = plus-value, captée par le propriétaire. Le taux d\'exploitation est défini par Pl/V.',
        affichage: 'block'
      }
    },

    {
      type: 'texte',
      titre: '<em>Weber</em> et l\'éthique protestante',
      contenu_md:
`Une troisième analyse, plus inattendue, vient en 1905 sous la plume du sociologue allemand **Max Weber** : *L\'Éthique protestante et l\'esprit du capitalisme*. Là où Smith voit une mécanique économique et Marx un rapport de production, Weber cherche les **racines culturelles** du système.

Sa thèse : le capitalisme moderne, dans sa version la plus rationnelle et la plus expansive, est né dans les régions **protestantes** d\'Europe — Pays-Bas, Angleterre, Suisse, Allemagne du Nord, puis Nouvelle-Angleterre. Pourquoi ?

La théologie **calviniste** introduit une notion redoutable : la **prédestination**. Dieu a déjà choisi, de toute éternité, qui sera sauvé. Aucune œuvre, aucun rite ne peut changer la décision. Comment alors savoir si l\'on fait partie des **élus** ? Une réponse pratique s\'impose : la **réussite mondaine** dans son métier (la *Beruf*, la « vocation ») peut être lue comme un signe de la bénédiction divine. Le travail méthodique, l\'épargne, l\'ascèse, le refus du gaspillage deviennent des **devoirs religieux**.

Le résultat est une mentalité paradoxale : on accumule des richesses non pour en jouir, mais comme témoignage de l\'élection. Cette **ascèse intramondaine** fournit, selon Weber, le moteur psychologique qui a permis au capitalisme de prendre son envol — bien plus que dans des sociétés où la richesse était considérée comme suspecte (christianisme médiéval), ou destinée au prestige (féodalisme aristocratique).

Weber ne dit pas que le protestantisme a **causé** le capitalisme — il dit qu\'il a créé un **terreau culturel** particulièrement favorable. Sa thèse a été critiquée, nuancée, mais elle a ouvert un champ entier : la sociologie des religions et des **mentalités économiques**.`
    },

    {
      type: 'widget',
      titre: 'Les trois grands analystes du capitalisme',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: 'Adam Smith (1776) — La main invisible',
            description: 'Approche **libérale et économique**. Le marché concurrentiel coordonne mieux qu\'un planificateur. La division du travail démultiplie la productivité. *« Ce n\'est pas de la bienveillance du boucher que nous attendons notre dîner, mais bien du soin qu\'il apporte à ses intérêts. »*'
          },
          {
            titre: 'Karl Marx (1867) — La plus-value',
            description: 'Approche **critique et matérialiste**. Le capitaliste extrait une plus-value du travail salarié. La concurrence pousse à la concentration. Le système est traversé par des **contradictions** internes qui le mènent aux crises et, à terme, à son dépassement.'
          },
          {
            titre: 'Max Weber (1905) — L\'éthique protestante',
            description: 'Approche **sociologique et culturelle**. Le capitalisme moderne est né dans le terreau du protestantisme calviniste. L\'ascèse, l\'épargne et le travail méthodique deviennent des **vertus religieuses**, fournissant le moteur psychologique du système.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>variétés du capitalisme</em>',
      contenu_md:
`Il n\'existe pas un capitalisme, mais **plusieurs** capitalismes, façonnés par l\'histoire, le droit, la culture politique de chaque pays. Les sociologues **Peter Hall** et **David Soskice** ont popularisé en 2001 la grille des *Varieties of Capitalism*, distinguant deux grands types — auxquels on ajoute aujourd\'hui un troisième.

Le [capitalisme libéral anglo-saxon]{accent} — États-Unis, Royaume-Uni, Canada, Australie — privilégie les **marchés flexibles** : marché du travail dérégulé, financement par la bourse, syndicats faibles, État social minimal, mobilité élevée. La coordination passe par le **prix** et le **contrat**. L\'innovation radicale (Silicon Valley) y est favorisée ; l\'inégalité y est plus forte.

Le [capitalisme rhénan ou coordonné]{accent} — Allemagne, Autriche, Japon, pays nordiques dans une certaine mesure — repose sur des **institutions denses** : cogestion en entreprise, syndicats forts, financement bancaire de long terme, formation professionnelle duale, négociations collectives. La coordination passe par la **concertation**. L\'innovation incrémentale (industrie automobile, machine-outil) y excelle ; les inégalités y sont plus faibles.

Le [capitalisme d\'État]{accent}, lui, est apparu surtout depuis 1978 avec la **Chine** post-Mao. Marché et propriété privée coexistent avec un **Parti-État** stratège qui pilote les secteurs clés via des entreprises publiques et de grandes banques d\'État. Cette synthèse était théoriquement impossible — Marx la jugeait contradictoire — et pourtant elle a permis la plus grande sortie de pauvreté de l\'histoire humaine. Singapour, Vietnam, dans une moindre mesure Russie ou Émirats, s\'en rapprochent.`
    },

    {
      type: 'widget',
      titre: 'Choisis un modèle et compare ses caractéristiques',
      composant: 'SelecteurValeurs',
      params: {
        unite: '',
        indexInitial: 0,
        options: [
          { label: 'Anglo-saxon', valeur: 'États-Unis, Royaume-Uni', description: 'Marchés flexibles, syndicats faibles, financement boursier, État minimal. Forte mobilité, forte inégalité, innovation de rupture.' },
          { label: 'Rhénan', valeur: 'Allemagne, Japon', description: 'Cogestion, syndicats forts, financement bancaire patient, formation duale. Coordination par la concertation, inégalités plus faibles, innovation incrémentale.' },
          { label: 'Scandinave', valeur: 'Suède, Danemark, Norvège', description: 'Marché ouvert + État-providence dense. La flexibilité économique est compensée par une protection sociale élevée — la flexicurité.' },
          { label: 'Capitalisme d\'État', valeur: 'Chine, Singapour, Vietnam', description: 'Marché encadré par un Parti-État stratège. Coexistence de la propriété privée et d\'un secteur public massif dans les industries jugées stratégiques.' },
          { label: 'Rentier', valeur: 'Arabie saoudite, Émirats, Russie', description: 'Économie centrée sur l\'exportation de ressources naturelles (hydrocarbures, minerais). Faible diversification productive, fonds souverains, dépendance aux cours mondiaux.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>crises</em> et le balancier État-marché',
      contenu_md:
`Le capitalisme est traversé par des **crises** récurrentes. Marx y voyait une loi structurelle ; **Schumpeter** y a vu un mécanisme de **destruction créatrice** ; les keynésiens y ont vu un défaut à corriger par la politique économique. Trois grandes crises ont chaque fois redéfini l\'équilibre entre marché et État.

**1929**. Le krach de Wall Street en octobre, suivi de l\'effondrement bancaire et de la **Grande Dépression**, fait basculer 25 % de la population active américaine au chômage. La doctrine du **laissez-faire** est discréditée. **John Maynard Keynes**, dans sa *Théorie générale* (1936), théorise l\'intervention publique : quand la demande s\'effondre, l\'État doit dépenser pour la soutenir. C\'est l\'acte de naissance de l\'État-providence et du **compromis fordiste** des Trente Glorieuses (1944-1973).

**1973**. Le choc pétrolier, conjugué à la fin de **Bretton Woods** en 1971, ouvre une décennie de [stagflation]{accent} — inflation et chômage progressent ensemble. Voir [[inflation]]. Le keynésianisme semble impuissant. À la fin des années 1970, **Margaret Thatcher** (1979) et **Ronald Reagan** (1981) imposent un tournant : dérégulation, privatisations, baisse des impôts, affaiblissement des syndicats. C\'est l\'ère [néolibérale]{accent}, qui s\'étend après la **chute du Mur** (1989) à l\'ensemble du monde. Le marché reprend la main sur l\'État pendant trente ans.

**2008**. La crise des **subprimes**, partie des prêts hypothécaires américains, contamine la finance mondiale et provoque la pire récession depuis 1929. Le credo de l\'autorégulation des marchés financiers est ébranlé. Les États interviennent massivement : sauvetages bancaires, plans de relance, politique monétaire non-conventionnelle. La régulation revient en grâce. Plus récemment, la pandémie de **2020** a provoqué une intervention publique d\'une ampleur inédite en temps de paix.`
    },

    {
      type: 'encadre',
      label: 'Le balancier État-marché',
      contenu_md: 'Lire l\'histoire économique du XXᵉ siècle, c\'est observer un **balancier** : libéralisme de la *Belle Époque* (1870-1914), retour de l\'État après **1929**, apogée social-démocrate (1945-1975), revanche du marché à partir de **1980**, retour partiel de la régulation après **2008**. Le capitalisme n\'a pas d\'équilibre stable : il oscille entre deux logiques — celle de l\'**accumulation libre** et celle de la **protection sociale** — sans jamais en éliminer une au profit de l\'autre.'
    },

    {
      type: 'texte',
      titre: 'Le <em>capitalisme contemporain</em>',
      contenu_md:
`Le capitalisme du XXIᵉ siècle se distingue par trois traits.

D\'abord la [financiarisation]{accent}. Depuis les années 1980, le poids de la finance dans l\'économie a explosé : montée des marchés d\'actions et d\'obligations, multiplication des produits dérivés, gestion d\'actifs (BlackRock, Vanguard) pesant des dizaines de milliers de milliards. La logique de **rentabilité financière** à court terme tend à dicter ses arbitrages aux entreprises industrielles — politique de rachat d\'actions, distribution massive de dividendes, optimisation fiscale. Voir [[inflation]] pour les liens entre politique monétaire et flux financiers.

Ensuite, le **capitalisme de plateformes**. Apple, Google, Amazon, Meta, Microsoft — auxquels s\'ajoutent côté chinois Alibaba, Tencent, ByteDance — capturent une part inédite de la valeur mondiale. Leur modèle repose sur les **effets de réseau** : plus un service a d\'utilisateurs, plus il devient indispensable, et plus il est difficile pour un concurrent d\'émerger. La donnée devient un **actif** central. Les questions de monopole, de fiscalité, de modération du discours public, prennent une dimension politique sans précédent. Les **cryptomonnaies** (voir [[monnaies-numeriques]]) émergent comme tentative — partielle, contestée — d\'échapper à cette concentration.

Enfin, les **externalités climatiques**. Le capitalisme, comme système d\'accumulation, suppose un environnement infini : matières premières disponibles, capacité d\'absorption des pollutions. Le **changement climatique** invalide cette hypothèse. La comptabilité carbone, la finance verte, les régulations environnementales, la pression des consommateurs et des investisseurs (ESG), redéfinissent les arbitrages économiques. Une partie du débat contemporain — autour de la **décroissance**, du **capitalisme vert**, du *Green New Deal* — porte précisément sur la capacité du système à se réformer pour rester soutenable.`
    },

    {
      type: 'widget',
      titre: 'Ajuste le degré de régulation pour voir le type de capitalisme dominant',
      composant: 'CurseurParametrique',
      params: {
        label: 'Régulation publique de l\'économie',
        min: 0,
        max: 10,
        step: 0.5,
        valeurInitiale: 5,
        unite: '/10',
        degradePiste: '#d97757 0%, #d97757 25%, #e8c547 25%, #e8c547 60%, #3aa67c 60%, #3aa67c 85%, #5b8def 85%, #5b8def 100%',
        seuils: [
          {
            jusqua: 2.5,
            titre: 'Laissez-faire / libéralisme classique',
            description: 'Configuration de la **Belle Époque** (1870-1914) ou du **néolibéralisme** post-1980. Faible État social, finance dérégulée, marché du travail flexible. Croissance forte, mais inégalités élevées et risque d\'instabilité financière.',
            couleur: '#d97757'
          },
          {
            jusqua: 5,
            titre: 'Capitalisme libéral encadré',
            description: 'Régulation **modérée** : règles concurrentielles, fiscalité progressive limitée, État social mince. Modèle anglo-saxon contemporain (États-Unis, Royaume-Uni).',
            couleur: '#e8c547'
          },
          {
            jusqua: 7.5,
            titre: 'Capitalisme rhénan / social-démocrate',
            description: 'État-providence dense, négociations collectives, cogestion. Modèle des **Trente Glorieuses** européennes ou du modèle nordique actuel. Inégalités plus faibles, marchés plus contraints.',
            couleur: '#3aa67c'
          },
          {
            jusqua: Infinity,
            titre: 'Capitalisme d\'État',
            description: 'Marché encadré par un **Parti-État** stratège qui pilote les secteurs clés via des entreprises publiques. Modèle chinois post-1978, Singapour. Forte croissance, libertés économiques restreintes.',
            couleur: '#5b8def'
          }
        ]
      }
    }

  ],

  quiz: [

    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le capitalisme a été inventé par Adam Smith en 1776.',
      reponse: false,
      explication: 'Non. Adam Smith en a proposé la première grande théorisation libérale dans *La Richesse des nations*, mais le capitalisme — sous sa forme marchande — existait déjà depuis le XIIᵉ siècle dans les cités italiennes (Venise, Gênes, Florence), puis à Anvers et Amsterdam. Smith en est l\'analyste, pas l\'inventeur.'
    },

    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Selon Marx, la plus-value correspond à l\'écart entre la valeur produite par le travailleur et le salaire qu\'il reçoit.',
      reponse: true,
      explication: 'C\'est bien la définition centrale du *Capital* (1867). Pour Marx, l\'ouvrier crée pendant sa journée plus de valeur que ce que coûte sa force de travail. Cet écart, capté par le propriétaire des moyens de production, constitue la plus-value — fondement structurel de l\'exploitation capitaliste.'
    },

    {
      type: 'ordre-chrono',
      q: 'Remets dans l\'ordre chronologique ces moments clés du capitalisme :',
      items: [
        'Apogée du capitalisme marchand néerlandais avec la Compagnie des Indes',
        'Publication de La Richesse des nations par Adam Smith',
        'Publication du Capital par Karl Marx',
        'Krach de Wall Street et début de la Grande Dépression',
        'Tournant néolibéral de Thatcher et Reagan'
      ],
      explication: 'Compagnie des Indes néerlandaise (1602) → Smith (1776) → Marx (1867) → Krach de Wall Street (1929) → Thatcher-Reagan (1979-1981). Chaque étape redéfinit le rapport entre marché, État et travail.'
    },

    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'Pour Max {Weber}, le capitalisme moderne trouve ses racines culturelles dans l\'éthique {protestante}, qui transforme le travail méthodique et l\'épargne en signes de l\'élection {divine}.',
      explication: 'Thèse centrale de *L\'Éthique protestante et l\'esprit du capitalisme* (1905). La théologie calviniste de la prédestination pousse les fidèles à chercher dans la réussite mondaine un signe d\'être élus, ce qui produit une mentalité d\'ascèse intramondaine particulièrement favorable à l\'accumulation rationnelle du capital.'
    },

    {
      type: 'associer',
      q: 'Associe chaque penseur à son concept central :',
      paires: [
        { gauche: 'Adam Smith', droite: 'Main invisible du marché' },
        { gauche: 'Karl Marx', droite: 'Extraction de la plus-value' },
        { gauche: 'Max Weber', droite: 'Éthique protestante' },
        { gauche: 'John Maynard Keynes', droite: 'Soutien public de la demande' },
        { gauche: 'Joseph Schumpeter', droite: 'Destruction créatrice' }
      ],
      explication: 'Cinq grilles de lecture qui structurent encore le débat économique. Smith fonde le libéralisme, Marx la critique radicale, Weber la sociologie économique, Keynes la macroéconomie d\'intervention, Schumpeter une théorie dynamique de l\'innovation.'
    },

    {
      type: 'associer',
      q: 'Associe chaque variante de capitalisme à son trait dominant :',
      paires: [
        { gauche: 'Anglo-saxon', droite: 'Marchés flexibles, finance boursière' },
        { gauche: 'Rhénan', droite: 'Cogestion, financement bancaire patient' },
        { gauche: 'Scandinave', droite: 'Flexicurité, État-providence dense' },
        { gauche: 'Capitalisme d\'État', droite: 'Parti-État stratège, entreprises publiques' }
      ],
      explication: 'Il n\'existe pas un capitalisme mais plusieurs. Les variétés diffèrent par les modes de coordination — prix et contrat pour l\'anglo-saxon, concertation pour le rhénan, redistribution pour le scandinave, planification stratégique pour le modèle chinois.'
    },

    {
      q: 'Quels sont les quatre piliers structurels du capitalisme ?',
      options: [
        'État fort, monnaie unique, libre-échange, plein emploi',
        'Propriété privée des moyens de production, libre marché, accumulation du capital, salariat',
        'Démocratie, marché, monnaie, technologie',
        'Banque centrale, fiscalité, propriété, contrat'
      ],
      correcte: 1,
      explication: 'Ces quatre traits, pris isolément, existaient avant le capitalisme. Leur combinaison systématique, et le primat donné à l\'accumulation indéfinie, fait l\'originalité du système. Aucun système économique antérieur — féodalisme, esclavagisme, économies de subsistance — ne réunissait simultanément ces quatre éléments.'
    },

    {
      q: 'Que désigne la "main invisible" chez Adam Smith ?',
      options: [
        'L\'État qui régule discrètement les marchés',
        'Le mécanisme par lequel un marché concurrentiel transforme les intérêts privés en bien collectif sans coordination centrale',
        'La spéculation financière',
        'La banque centrale qui ajuste les taux'
      ],
      correcte: 1,
      explication: 'Pour Smith, le marché concurrentiel coordonne mieux qu\'un planificateur : la rencontre d\'égoïsmes individuels — du boulanger, du client, du concurrent — produit une allocation efficace des ressources. La concurrence empêche les prix de devenir abusifs. C\'est l\'argument fondateur du libéralisme.'
    },

    {
      q: 'Quelle crise marque le tournant keynésien et l\'essor de l\'État-providence ?',
      options: [
        'La crise des tulipes de 1637',
        'Le krach de Wall Street de 1929 et la Grande Dépression',
        'Le choc pétrolier de 1973',
        'La crise des subprimes de 2008'
      ],
      correcte: 1,
      explication: 'L\'effondrement boursier d\'octobre 1929, suivi de la Grande Dépression, discrédite le laissez-faire. Keynes publie sa *Théorie générale* en 1936. Roosevelt lance le New Deal. C\'est l\'acte de naissance de l\'État-providence moderne et du compromis fordiste des Trente Glorieuses.'
    },

    {
      q: 'Quelle est la grande nouveauté du capitalisme contemporain par rapport au capitalisme industriel du XIXᵉ siècle ?',
      options: [
        'Le retour de l\'esclavage',
        'La financiarisation, la montée des plateformes numériques et la prise en compte croissante des externalités climatiques',
        'La disparition du salariat',
        'L\'abandon de la propriété privée'
      ],
      correcte: 1,
      explication: 'Le capitalisme industriel des Marx et Engels reposait sur l\'usine, le charbon et le prolétariat. Le capitalisme contemporain repose sur la finance globalisée, les plateformes numériques (effets de réseau, données comme actif) et fait face à un défi inédit : le changement climatique, qui invalide l\'hypothèse implicite d\'un environnement infini.'
    }

  ]

});
