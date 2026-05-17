/* ===================================================================
   SUJET — La gastronomie
   ===================================================================
   Carême, Escoffier, Bocuse, Adrià, Redzepi : deux siècles de
   haute cuisine. Et la science qui se cache dans l'assiette.
   Domaines : Cuisine, Arts
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'gastronomie',
    titre: 'La <em>gastronomie</em>',
    domaines: ['Cuisine', 'Arts'],
    tags: ['carême', 'escoffier', 'bocuse', 'umami', 'maillard', 'michelin'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['paris-geographie', 'renaissance-italienne', 'syndrome-stendhal', 'consumerisme', 'les-animes'],
    date_creation: '2026-05-12',
    date_maj: '2026-05-12'
  },

  resume: `Deux siècles d\'invention française, espagnole et nordique : de Carême et ses pièces montées architecturales au Noma de Copenhague, en passant par Escoffier, Bocuse et Adrià. Comment la cuisine est devenue un art — et ce que la science a depuis trouvé dans nos assiettes.`,

  points_cles: [
    `La **haute cuisine** moderne est largement une invention française du XIXᵉ siècle, codifiée par **Marie-Antoine Carême** (1784-1833) puis **Auguste Escoffier** (1846-1935).`,
    `La **brigade de cuisine** d\'Escoffier — chef, sous-chef, chefs de partie — calque l\'organisation militaire et structure encore aujourd\'hui les grands restaurants.`,
    `En **1973**, **Paul Bocuse** et le manifeste **Gault-Millau** lancent la *nouvelle cuisine* : retour au produit, légèreté, cuissons courtes, fin des sauces lourdes.`,
    `Le **guide Michelin** (1900) impose ses **étoiles** comme étalon mondial. Une étoile peut transformer la vie d\'un chef — la perdre peut le détruire.`,
    `À elBulli, **Ferran Adrià** réinvente la cuisine entre 1990 et 2011 : déconstruction, espumas, sphérifications. La **cuisine moléculaire** devient l\'avant-garde mondiale.`,
    `Depuis 2003, **René Redzepi** au Noma de Copenhague impose une **nouvelle cuisine nordique** : terroir hyperlocal, fermentations, foraging.`,
    `Il existe **cinq saveurs** fondamentales : sucré, salé, acide, amer, et l\'**umami** — découvert au Japon par **Kikunae Ikeda** en 1908.`,
    `**80 % du goût** est en réalité de l\'**odeur** : l\'olfaction rétronasale, perçue par voie interne pendant la mastication, fait l\'essentiel de notre expérience gustative.`,
    `Le **repas gastronomique des Français** est inscrit au **patrimoine immatériel de l\'UNESCO** depuis 2010 — premier rituel culinaire à entrer sur cette liste.`
  ],

  carte_mentale: {
    central: 'gastronomie',
    noeuds: [
      { id: 'gastronomie', label: 'Gastronomie', description: '*Art de bien manger*. Cuisine élevée au rang d\'œuvre culturelle. Mot inventé par Joseph Berchoux en 1801.' },
      { id: 'ecoles', label: 'Grandes écoles', description: 'Les courants successifs qui ont défini la haute cuisine : française classique, nouvelle cuisine, moléculaire, nordique.' },
      { id: 'chefs', label: 'Chefs fondateurs', description: 'De Carême à Redzepi, une lignée de figures qui ont redéfini ce que cuisiner veut dire.' },
      { id: 'organisation', label: 'Brigade et guides', description: 'L\'organisation hiérarchique de la cuisine, et les guides — Michelin en tête — qui notent les restaurants.' },
      { id: 'science', label: 'Science du goût', description: 'Les cinq saveurs, la chimie de la cuisson, le rôle de l\'odorat. La cuisine vue par la chimie et la neuro.' },
      { id: 'reconnaissance', label: 'Patrimoine', description: 'La reconnaissance institutionnelle : Michelin, UNESCO 2010.' },

      // Chefs
      { id: 'careme', label: 'Marie-Antoine Carême', description: '**1784-1833**. *"Le roi des chefs et le chef des rois"*. Architecte des **pièces montées**, cuisinier de Talleyrand, du tsar, du futur George IV.', parent: 'chefs' },
      { id: 'escoffier', label: 'Auguste Escoffier', description: '**1846-1935**. Codifie la cuisine française dans son *Guide Culinaire* (1903). Invente la **brigade kitchen**, simplifie Carême.', parent: 'chefs' },
      { id: 'bocuse', label: 'Paul Bocuse', description: '**1926-2018**. Figure tutélaire de la **nouvelle cuisine** (1973). 3 étoiles Michelin sans interruption de 1965 à sa mort.', parent: 'chefs' },
      { id: 'adria', label: 'Ferran Adrià', description: '**Né 1962**. Catalan. **elBulli** (1990-2011). Père de la **cuisine moléculaire** : espumas, sphérifications, déconstruction.', parent: 'chefs' },
      { id: 'redzepi', label: 'René Redzepi', description: '**Né 1977**. **Noma**, Copenhague, depuis 2003. **Nouvelle cuisine nordique** : terroir hyperlocal, fermentation, foraging.', parent: 'chefs' },

      // Écoles
      { id: 'classique', label: 'Cuisine classique', description: 'XIXᵉ-début XXᵉ siècle. Carême, Escoffier. Sauces mères, brigades, codification.', parent: 'ecoles' },
      { id: 'nouvelle', label: 'Nouvelle cuisine', description: '1973. Manifeste **Gault-Millau**. Retour au produit, légèreté, cuissons courtes, assiettes dressées.', parent: 'ecoles' },
      { id: 'moleculaire', label: 'Cuisine moléculaire', description: 'Années 1990-2010. Adrià, Blumenthal. La chimie au service du goût. **Espumas**, gels, sphérifications.', parent: 'ecoles' },
      { id: 'nordique', label: 'Nouvelle nordique', description: 'Depuis 2003. Redzepi, Noma. Terroir local extrême, fermentations, saisonnalité.', parent: 'ecoles' },

      // Organisation
      { id: 'brigade', label: 'Brigade', description: 'Hiérarchie de cuisine codifiée par Escoffier : **chef**, **sous-chef**, **chefs de partie** (saucier, poissonnier, entremétier, garde-manger…).', parent: 'organisation' },
      { id: 'michelin', label: 'Guide Michelin', description: '**1900**. Trois étoiles maximum. *"Vaut le détour"*, *"vaut le voyage"*. L\'angoisse — et la gloire — des chefs.', parent: 'organisation' },

      // Science
      { id: 'saveurs', label: 'Cinq saveurs', description: 'Sucré, salé, acide, amer, **umami**. L\'umami est découvert en **1908** par le chimiste japonais **Kikunae Ikeda**.', parent: 'science' },
      { id: 'maillard', label: 'Réaction de Maillard', description: '**1912**. Brunissage des aliments cuits. Acides aminés + sucres → centaines de composés aromatiques. Pourquoi le pain doré, la viande grillée sentent si bon.', parent: 'science' },
      { id: 'retronasal', label: 'Olfaction rétronasale', description: '**80 %** du "goût" est en réalité de l\'**odeur**, perçue par voie interne pendant la mastication. Boucher le nez = perdre presque tout.', parent: 'science' },

      // Reconnaissance
      { id: 'unesco', label: 'UNESCO 2010', description: 'Le **repas gastronomique des Français** inscrit au **patrimoine immatériel** de l\'humanité — premier rituel culinaire à l\'être.', parent: 'reconnaissance' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Le mot, et la chose',
      contenu_md:
`Le mot **gastronomie** est jeune. Il apparaît en français en **1801**, sous la plume du poète **Joseph Berchoux**, dans un petit ouvrage en vers intitulé — précisément — *La Gastronomie*. Avant lui on parlait de *bouche*, de *cuisine*, d\'*art culinaire*. Le mot nouveau, formé du grec *gastêr* (estomac) et *nomos* (loi), porte une ambition : faire de l\'acte de manger un **art réglé**, digne d\'étude.

Que se passe-t-il à ce moment précis ? À [[paris-geographie]], la Révolution a chassé l\'aristocratie. Les grands cuisiniers des hôtels particuliers se retrouvent sans patrons — et ouvrent des **restaurants**. Le mot lui-même, *restaurant*, désignait à l\'origine un bouillon *restaurateur* servi dans des établissements thématiques apparus dans les années 1760. La Révolution les démocratise : pour la première fois dans l\'histoire, n\'importe quel bourgeois — pourvu qu\'il paie — peut s\'asseoir à une table et choisir parmi des plats inscrits sur une **carte**.

C\'est dans ce Paris post-révolutionnaire qu\'éclôt la [gastronomie]{accent} moderne. Brillat-Savarin publie en 1825 sa *Physiologie du goût*, traité spirituel et savoureux. Grimod de La Reynière invente la **critique gastronomique** dans son *Almanach des Gourmands*. Et un jeune pâtissier orphelin de quatorze ans, **Marie-Antoine Carême**, commence à dessiner ses premières pièces montées.`
    },

    {
      type: 'encadre',
      label: 'Une matrice italienne',
      contenu_md: `Mythe ou réalité ? La tradition veut que ce soit **Catherine de Médicis**, fille de la Florence des Médicis et mariée en 1533 au futur Henri II, qui ait apporté à la cour de France les **fourchettes**, les sorbets, les artichauts, et tout un raffinement culinaire venu d\'Italie ([[renaissance-italienne]]). Les historiens nuancent — beaucoup d\'éléments étaient déjà connus — mais la trame est juste : la haute cuisine française du XVIIᵉ siècle s\'enrichit massivement de l\'influence italienne. Avant d\'être la patrie de la gastronomie, la France en a été l\'héritière.`
    },

    {
      type: 'widget',
      titre: 'Deux siècles, en jalons',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1784-1833', titre: 'Marie-Antoine Carême', description: 'L\'**architecte** de la haute cuisine. Cuisine pour Talleyrand, le tsar **Alexandre Iᵉʳ**, le **prince régent** d\'Angleterre. Pièces montées spectaculaires inspirées d\'architecture grecque. Surnommé *"le roi des chefs et le chef des rois"*.' },
          { date: '1846-1935', titre: 'Auguste Escoffier', description: 'Le **codificateur**. Au Savoy puis au **Carlton** de Londres avec César **Ritz**. Publie le *Guide Culinaire* en **1903** — bible de la cuisine française. Invente la **brigade kitchen**.' },
          { date: '1900', titre: 'Naissance du guide Michelin', description: 'Édouard et André **Michelin** publient un guide gratuit pour leurs clients automobilistes. **Les étoiles** apparaissent en 1926. Trois étoiles maximum à partir de 1933.' },
          { date: '1908', titre: 'Découverte de l\'umami', description: 'Le chimiste japonais **Kikunae Ikeda**, mâchant un bouillon de *kombu*, isole le **glutamate** comme molécule responsable d\'une cinquième saveur — qu\'il baptise **umami** (旨味 — "essence du goût savoureux").' },
          { date: '1912', titre: 'Réaction de Maillard', description: 'Le chimiste français **Louis-Camille Maillard** décrit la réaction entre **acides aminés** et **sucres réducteurs** qui produit, sous l\'effet de la chaleur, des centaines de composés aromatiques. Le brun et le parfum du pain, de la viande grillée.' },
          { date: 'Octobre 1973', titre: 'Nouvelle cuisine', description: '**Henri Gault** et **Christian Millau** publient dans leur magazine le manifeste *"Vive la nouvelle cuisine française"* — dix commandements : produits frais, cuissons courtes, fin des sauces lourdes. **Paul Bocuse** en est la figure de proue.' },
          { date: '1990-2011', titre: 'elBulli, Ferran Adrià', description: 'Sur la **Costa Brava** catalane, **Ferran Adrià** transforme un restaurant de bord de plage en **laboratoire culinaire mondial**. Espumas, sphérifications, airs, déconstruction. elBulli ferme volontairement en **2011** au sommet de sa gloire.' },
          { date: '2003', titre: 'Noma à Copenhague', description: '**René Redzepi** ouvre **Noma**. Manifeste de la **nouvelle cuisine nordique** : ingrédients strictement régionaux, fermentations, foraging. Élu meilleur restaurant du monde **quatre fois** entre 2010 et 2014.' },
          { date: '16 nov. 2010', titre: 'UNESCO', description: 'Le **repas gastronomique des Français** est inscrit au **patrimoine culturel immatériel** de l\'humanité. Premier rituel culinaire au monde reconnu à ce titre — non pour une recette, mais pour la **pratique sociale** du repas.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Carême, l\'<em>architecte</em>',
      contenu_md:
`Né à Paris en 1784, abandonné par sa famille à huit ans à la porte d\'une gargote du faubourg du Maine — *"Si tu as du talent, mon petit, tu feras fortune"* lui aurait dit son père —, **Marie-Antoine Carême** apprend la pâtisserie chez Bailly, rue Vivienne. Le gamin a une obsession : l\'**architecture**. Il passe ses dimanches à dessiner aux **Estampes** du cabinet du Roi, étudiant temples grecs, ruines romaines, palais palladiens. Il en tirera sa marque : les **pièces montées** monumentales, en sucre et en pâte, qui couronnent les grands dîners de l\'Empire et de la Restauration.

Carême devient le cuisinier de **Talleyrand** — qui le prête au tsar Alexandre Iᵉʳ pendant le congrès de Vienne, puis au **prince régent** d\'Angleterre, futur George IV. *"Le roi des chefs et le chef des rois"*, dira-t-on. Au baron de **Rothschild**, à la fin de sa vie, il sert pendant des années la table la plus raffinée d\'Europe.

Son œuvre écrite est encyclopédique : *Le Pâtissier royal parisien* (1815), *Le Maître d\'hôtel français* (1822), *L\'Art de la cuisine française au XIXᵉ siècle* (cinq volumes posthumes). Il y consigne tout : les **sauces mères** — espagnole, velouté, allemande, béchamel — dont dérivent toutes les autres ; les techniques de bouillon ; les présentations. Il meurt à **49 ans**, *"brûlé par la flamme de son génie comme par le charbon de ses fourneaux"* selon sa nièce. La haute cuisine française a sa première grande figure.`
    },

    {
      type: 'texte',
      titre: 'Escoffier et l\'invention de la <em>brigade</em>',
      contenu_md:
`Soixante ans après Carême, **Auguste Escoffier** (1846-1935) parachève l\'édifice. Plus pragmatique, plus moderne, il **simplifie** Carême — réduit le nombre de sauces, allège les présentations, professionnalise tout. Surtout, il transpose dans les cuisines une idée empruntée à l\'**armée** : la **brigade**.

Auparavant, dans les cuisines aristocratiques, chacun touchait à tout — souvent en désordre. Escoffier instaure une **hiérarchie stricte**, chacun à son poste. Au sommet, le **chef de cuisine** — l\'autorité absolue. Sous lui, le **sous-chef**, parfois doublé d\'un **second**. Puis les **chefs de partie**, spécialistes par secteur : le *saucier* aux sauces et plats mijotés (poste le plus prestigieux), le *poissonnier* aux produits de la mer, l\'*entremétier* aux légumes et œufs, le *garde-manger* aux préparations froides, le *pâtissier* aux desserts, le *rôtisseur* aux viandes grillées et frites. En dessous, les **commis** et les **apprentis**. Cette organisation reste, à l\'identique ou presque, celle de tous les grands restaurants du monde.

Escoffier travaille avec **César Ritz** au **Savoy** de Londres, puis au **Carlton**. Son *Guide Culinaire*, publié en **1903**, est un dictionnaire de plus de **5 000 recettes** — encore aujourd\'hui la bible des écoles hôtelières. C\'est lui qui crée la **pêche Melba** pour la cantatrice Nellie Melba, les **crêpes Suzette**, le **tournedos Rossini**. Pour la cuisine française, Escoffier est ce que Linné est à la botanique : celui qui a tout classé, tout nommé.`
    },

    {
      type: 'widget',
      titre: 'Cinq chefs, cinq révolutions',
      composant: 'SelecteurValeurs',
      params: {
        options: [
          {
            label: 'Carême',
            valeur: '1784-1833',
            description: 'L\'architecte. Sauces mères, pièces montées spectaculaires, cuisinier de Talleyrand et du tsar. Surnommé "le roi des chefs et le chef des rois". Fonde la grande cuisine française.'
          },
          {
            label: 'Escoffier',
            valeur: '1846-1935',
            description: 'Le codificateur. Guide Culinaire (1903), brigade kitchen, simplification de Carême. Au Savoy puis au Carlton de Londres avec César Ritz. La bible des écoles hôtelières.'
          },
          {
            label: 'Bocuse',
            valeur: '1926-2018',
            description: 'La nouvelle cuisine. Manifeste Gault-Millau 1973. Retour au produit, cuissons courtes, légèreté. Trois étoiles Michelin sans interruption pendant 53 ans (record absolu).'
          },
          {
            label: 'Adrià',
            valeur: '1962-',
            description: 'L\'avant-garde catalane. elBulli (1990-2011). Espumas, sphérifications, déconstruction. La cuisine devient laboratoire. Ferme volontairement au sommet de sa gloire en 2011.'
          },
          {
            label: 'Redzepi',
            valeur: '1977-',
            description: 'La nouvelle nordique. Noma (Copenhague, 2003). Terroir strictement local, fermentations, foraging. Quatre fois meilleur restaurant du monde entre 2010 et 2014.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>Michelin</em> et l\'angoisse des étoiles',
      contenu_md:
`En **1900**, deux frères industriels — **André** et **Édouard Michelin** — distribuent gratuitement à leurs clients un guide rouge, censé encourager le voyage en automobile : restaurants, hôtels, garagistes, plans de villes. C\'était à l\'origine un objet promotionnel pour vendre des pneus. C\'est devenu, malgré ses créateurs, le **plus prestigieux livre du monde culinaire**.

Les **étoiles** apparaissent en **1926** — une seule au début, puis deux dès 1931, puis trois à partir de 1933. La grille tient en trois lignes, jamais modifiée depuis : ★ *"une très bonne cuisine dans sa catégorie"*, ★★ *"une cuisine excellente qui mérite le détour"*, ★★★ *"une cuisine exceptionnelle qui vaut le voyage"*. Les inspecteurs sont **anonymes**, payent leurs additions, prennent des notes, parfois reviennent trois ou quatre fois. Aucun chef ne sait quand il sera visité.

L\'effet sur les chefs est connu — et redoutable. Une **première étoile** triple le chiffre d\'affaires. Une **troisième** transforme un restaurant en pèlerinage international. La **perte** d\'une étoile, à l\'inverse, peut être dévastatrice. En **2003**, le chef **Bernard Loiseau** se suicide à 52 ans, dans son restaurant de Saulieu, après des rumeurs (infondées) de rétrogradation imminente. Cette mort a marqué la profession entière. Certains chefs, depuis, *demandent* à être retirés du guide — Sébastien Bras à Laguiole en 2017, Marc Veyrat plus brièvement — pour se libérer de cette pression. *"Je rends mes étoiles pour retrouver le plaisir de cuisiner"*, disait Bras.

Au-delà du Michelin, la liste **World\'s 50 Best Restaurants**, lancée en 2002, joue depuis vingt ans un rôle complémentaire — plus mondialisée, plus tournée vers l\'avant-garde. C\'est elle qui a couronné quatre fois Noma, propulsé Adrià, mis l\'Amérique du Sud sur la carte mondiale (Gastón Acurio, Virgilio Martínez). Ces classements transforment aussi la gastronomie en marché d\'attention, où le [[consumerisme]] de l\'expérience — réservations à un an, listes d\'attente, voyages dédiés — devient une composante du dispositif.`
    },

    {
      type: 'texte',
      titre: 'Bocuse, la <em>nouvelle cuisine</em>',
      contenu_md:
`En **octobre 1973**, dans leur magazine éponyme, les critiques **Henri Gault** et **Christian Millau** publient un manifeste devenu célèbre : *"Vive la nouvelle cuisine française !"*. Dix commandements y sont énoncés. *"Tu ne cuiras pas trop. Tu utiliseras des produits frais. Tu allégeras ta carte. Tu ne seras pas systématiquement moderniste. Tu rechercheras ce que t\'apportent les nouvelles techniques..."*

À la figure de proue, **Paul Bocuse** — gros homme rieur, fils de cuisiniers depuis cinq générations, sacré *"cuisinier du siècle"*, tenant à Collonges-au-Mont-d\'Or trois étoiles Michelin **sans interruption de 1965 à sa mort en 2018** (record absolu et probablement insurpassable). Autour de lui, les frères **Troisgros** à Roanne, **Michel Guérard** à Eugénie-les-Bains, **Alain Chapel** à Mionnay, **Roger Vergé** sur la Côte d\'Azur.

Le mouvement est, en réalité, une **réaction**. Contre quoi ? Contre les sauces lourdes héritées d\'Escoffier — beurre, crème, farine, longues réductions. Contre les présentations massives. Contre la **codification** elle-même. La nouvelle cuisine veut : des **cuissons courtes** qui respectent le produit ; des **assiettes dressées** par le chef plutôt que des plats apportés à découper en salle ; des **sauces légères** à base de jus et d\'émulsions plutôt que de roux ; une **inventivité** assumée, le droit pour le chef d\'être *auteur* de ses plats.

L\'influence est mondiale. Les **Japonais** s\'y reconnaissent — leur cuisine pratiquait depuis toujours la légèreté, le produit, la saisonnalité ; un échange Bocuse-Tokyo s\'installe durablement, et le **soft power** culinaire japonais (umami, dashi, esthétique du dressage) accompagnera, dans les décennies suivantes, la diffusion mondiale d\'autres pans de la culture nippone — voir [[les-animes]]. Les **Américains** de Californie (Alice Waters à Chez Panisse) en tirent leur *farm-to-table*. Toute la cuisine d\'auteur des cinquante années suivantes s\'inscrit dans son sillage.`
    },

    {
      type: 'texte',
      titre: 'Adrià et la <em>cuisine moléculaire</em>',
      contenu_md:
`Sur la **Costa Brava** catalane, à Cala Montjoi — une crique accessible par une seule route en lacets —, un jeune cuisinier nommé **Ferran Adrià** prend en 1987 la direction d\'un restaurant modeste, **elBulli**. En vingt ans, il en fait le **lieu le plus influent de la gastronomie mondiale**.

Sa méthode rompt avec tout. elBulli ferme la moitié de l\'année — six mois de service, six mois de **laboratoire** à Barcelone, où Adrià et son frère Albert testent, inventent, photographient des centaines de techniques nouvelles. **Espumas** (mousses légères obtenues par siphon à protoxyde d\'azote) ; **sphérifications** (transformer un liquide en bille à fine membrane par réaction d\'alginate et de calcium — un *"caviar de melon"* éclate sous la dent) ; **airs** (mousses encore plus aériennes) ; **gels chauds** d\'agar-agar ; **fausses olives** liquides à l\'intérieur. *La cuisine devient une chimie comestible*.

L\'objectif n\'est pas la prouesse technique — c\'est la **surprise**, le **jeu**, la **déconstruction**. Un plat *"tortilla de patatas"* est servi en verre, en couches superposées et liquides. Une omelette devient une mousse. Les menus s\'allongent — trente, quarante, cinquante services minuscules, déroulés en quatre heures, transformant le dîner en spectacle narratif.

Adrià obtient sa **troisième étoile** en 1997. elBulli est élu **meilleur restaurant du monde cinq fois**. Et puis, en **juillet 2011**, au sommet absolu de sa gloire, Ferran Adrià **ferme volontairement** elBulli. *"Pour faire autre chose."* Le restaurant devient une **fondation** vouée à la recherche culinaire pure. La décision est sidérante — partir au sommet, refuser l\'or facile — et marque toute la profession.`
    },

    {
      type: 'widget',
      titre: 'Quatre techniques signatures',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `L\'espuma`,
            description: `Mousse aérienne obtenue par un **siphon** chargé de **protoxyde d\'azote** (N₂O). Le gaz se dissout sous pression dans un liquide stabilisé (gélatine, lécithine, blanc d\'œuf), puis se relâche en bulles ultrafines. Inventé par **Adrià** au début des années 1990. Permet une *"espuma d\'olive"*, une mousse de foie gras qui fond instantanément, une crème sans crème.`
          },
          {
            titre: `La sphérification`,
            description: `Une cuillerée de liquide aromatisé (jus de fruit, bouillon, fromage liquide) plongée dans un bain à base de **chlorure de calcium** se transforme instantanément en **bille à fine membrane** : la pellicule extérieure gélifie tandis que le cœur reste liquide. Sous la dent, la sphère **éclate**. Effet de surprise garanti.`
          },
          {
            titre: `La cuisson sous vide à basse température`,
            description: `La viande, le poisson, parfois les légumes, sont **mis sous vide** dans une poche plastique, plongés dans un bain-marie à **température précise** (54 °C pour un steak saignant, 63 °C pour un œuf coulant) pendant des heures. Cuisson absolument **uniforme**, jamais surcuite. Technique inventée par **Georges Pralus** vers 1974 pour Troisgros — devenue universelle.`
          },
          {
            titre: `La fermentation`,
            description: `Marque de fabrique de **Noma**. Les **lacto-fermentations** transforment baies, légumes et même viandes par action de bactéries lactiques. Le **koji** (champignon japonais) cultivé sur orge ou pois transforme les protéines en glutamate — produisant naturellement de l\'**umami** intense. Le laboratoire de fermentation de Noma teste des milliers de combinaisons.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Redzepi et le retour du <em>terroir</em>',
      contenu_md:
`Pendant qu\'Adrià pousse la déconstruction à son comble, un mouvement inverse naît en **Scandinavie**. En **2003**, le jeune **René Redzepi** ouvre **Noma** dans un ancien entrepôt de Copenhague — *Nordisk Mad*, "nourriture nordique". Le pari : ne cuisiner **que** des ingrédients du grand **Nord** — Danemark, Scandinavie, Islande, Féroé. Pas de citron. Pas d\'huile d\'olive. Pas de poivre. Que ce que le climat boréal peut donner.

Au lieu d\'appauvrir la cuisine, la contrainte la **libère**. Redzepi et son équipe partent **fourrager** dans les forêts danoises — *foraging* — pour ramener mousses, lichens, baies sauvages, herbes inconnues. Ils explorent toutes les techniques de **conservation** héritées de la pêche scandinave : séchage, salaison, fumage. Et surtout, ils érigent en méthode la **fermentation**. Noma ouvre un *fermentation lab* dirigé par **David Zilber** qui produit miso d\'orge, garum de criquet, vinaigres de pomme et de prune, lacto-fermentations de tout ce qui pousse.

Noma est élu **meilleur restaurant du monde quatre fois** entre 2010 et 2014. Le mouvement essaime — **nouvelle cuisine nordique**, manifeste signé en 2004 par douze chefs scandinaves —, puis se diffuse partout : chaque pays, chaque région, redécouvre la fierté de son **terroir local**. Le **kilomètre zéro** italien, le *farm-to-table* américain, la cuisine d\'auteur péruvienne avec Virgilio Martínez et Gastón Acurio. La gastronomie globale se *re-territorialise*.`
    },

    {
      type: 'texte',
      titre: 'La <em>science</em> qui se cache dans l\'assiette',
      contenu_md:
`Pendant que les chefs inventaient, les scientifiques observaient — et leurs découvertes ont peu à peu transformé la cuisine.

**Les cinq saveurs.** Pendant des siècles, l\'Occident en a compté quatre : **sucré, salé, acide, amer**. C\'est en **1908** que le chimiste japonais **Kikunae Ikeda**, professeur à l\'université de Tokyo, isole dans le bouillon de *kombu* (algue) une molécule responsable d\'une cinquième saveur : le **glutamate** monosodique. Il la baptise [umami]{accent} — *旨味*, "essence du goût savoureux". L\'umami est la saveur du parmesan, des tomates mûres, des champignons séchés, des sauces de soja, des viandes braisées longuement. La science occidentale a longtemps refusé sa réalité, jusqu\'à la découverte en **2000** des **récepteurs spécifiques** sur la langue (T1R1/T1R3). L\'umami est officiellement reconnu depuis. Une *sixième saveur*, le **gras** (oléogustus), fait débat parmi les chercheurs depuis les années 2010.

**La réaction de Maillard.** En **1912**, le chimiste français **Louis-Camille Maillard** décrit la réaction qui se produit, sous l\'effet de la chaleur (typiquement au-dessus de **140 °C**), entre les **acides aminés** des protéines et les **sucres réducteurs** des aliments. Le résultat : un brunissage spectaculaire et la production de **centaines de composés aromatiques** complexes. C\'est la [réaction de Maillard]{accent} qui donne au pain sa croûte dorée, à la viande grillée son parfum irrésistible, au café torréfié son arôme, à la bière brune sa couleur. Toute la cuisine du **feu vif** repose, sans le savoir, sur Maillard.

**L\'olfaction rétronasale.** Le résultat le plus contre-intuitif vient de la **neurogastronomie** des années 2000-2010 — discipline portée par **Gordon Shepherd**. Quand on mâche un aliment, l\'air chargé d\'arômes monte par l\'arrière du palais vers la cavité nasale : c\'est l\'**olfaction rétronasale**, distincte de l\'olfaction par le nez. **Environ 80 %** de ce que nous appelons *"goût"* est en réalité de l\'**odeur** perçue ainsi. Faites l\'expérience : pincez-vous le nez, mangez une fraise — vous percevez seulement le sucré et l\'acide. Relâchez : la fraise *apparaît*. La langue ne fait qu\'un cinquième du travail. Le reste, c\'est le nez.`
    },

    {
      type: 'widget',
      titre: 'Les cinq saveurs fondamentales',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          { tag: 'Sucré', titre: 'Le plaisir originel', description: 'Sucres simples, miel, fruits mûrs. Récepteur **T1R2/T1R3**. La saveur préférée des nouveau-nés — programmée pour l\'**énergie rapide**. Le lait maternel est légèrement sucré.' },
          { tag: 'Salé', titre: 'Le minéral vital', description: 'Sel de table (NaCl), surtout. Détecté par les canaux sodium **ENaC**. Indispensable à la conduction nerveuse et à l\'équilibre hydrique. Recherché par instinct.' },
          { tag: 'Acide', titre: 'Le marqueur du frais', description: 'Acides — citrique, acétique, lactique. Activé par les **protons H⁺**. Signale les aliments fermentés ou immatures. Le citron, le vinaigre, le yaourt.' },
          { tag: 'Amer', titre: 'Le signal d\'alerte', description: 'Une **quarantaine de récepteurs T2R** différents — plus que pour toute autre saveur, car les alcaloïdes toxiques sont nombreux. Café, cacao, endives — saveur acquise à l\'âge adulte.' },
          { tag: 'Umami', titre: 'L\'essence savoureuse', description: '**Glutamate**, isolé par **Kikunae Ikeda en 1908**. Récepteur **T1R1/T1R3**. La saveur du parmesan, des tomates mûres, des bouillons, du soja. Marque la richesse en protéines.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'L\'expérience submergeante',
      contenu_md: `Manger dans un grand restaurant relève parfois de l\'expérience esthétique pure — proche de ce que décrit le [[syndrome-stendhal]] devant un chef-d\'œuvre. Texture, parfum, complexité, surprise, mémoire affective : tout se conjugue. Adrià parlait de *"cuisiner des émotions"*. Brillat-Savarin déjà : *"Dis-moi ce que tu manges, je te dirai ce que tu es."* À ces sommets, le repas n\'est plus alimentation — c\'est récit, méditation, communion.`
    },

    {
      type: 'texte',
      titre: 'Un patrimoine de l\'<em>humanité</em>',
      contenu_md:
`Le **16 novembre 2010**, à Nairobi, le comité du **patrimoine culturel immatériel** de l\'**UNESCO** inscrit sur sa liste *"le repas gastronomique des Français"*. C\'est une **première** : aucun rituel culinaire n\'avait jusque-là été reconnu à ce titre. Ce n\'est ni une recette ni un produit qui est protégé — c\'est une **pratique sociale**. *"Le repas gastronomique met l\'accent sur le fait d\'être bien ensemble, le plaisir du goût, l\'harmonie entre l\'être humain et les productions de la nature"*, précise le texte.

D\'autres traditions ont suivi sur la liste UNESCO : la **diète méditerranéenne** (2013), la *washoku* japonaise (2013), la **cuisine mexicaine** traditionnelle, le **kimchi** coréen, la *pizza napolitaine* (2017), le **couscous** maghrébin (2020, candidature commune d\'Algérie, Maroc, Mauritanie, Tunisie — exemple rare d\'inscription multinationale apaisée). La gastronomie devient officiellement un **patrimoine** — au sens fort, comparable aux monuments et aux langues.

Que reste-t-il de la haute cuisine au XXIᵉ siècle ? Une scène **mondialisée** sans précédent : tokyoïtes, péruviens, sud-coréens, slovènes peuvent décrocher trois étoiles Michelin. Un dialogue entre **tradition** et **avant-garde** qui n\'a jamais été aussi vif. Une conscience nouvelle des **enjeux** — durabilité, gaspillage, bien-être animal, condition des cuisiniers (les heures de travail dans les brigades restent un scandale silencieux). Et toujours, partout, cette idée simple, vieille comme Carême : que **manger ensemble** est l\'un des actes les plus civilisés que les humains aient inventés.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Il existe quatre saveurs fondamentales : sucré, salé, acide, amer.',
      reponse: false,
      explication: 'Faux. Il y en a cinq. La cinquième, l\'umami, a été isolée en 1908 par le chimiste japonais Kikunae Ikeda dans un bouillon de kombu. Ses récepteurs spécifiques (T1R1/T1R3) ont été identifiés en 2000, validant définitivement son existence. Une sixième saveur, le gras (oléogustus), fait actuellement débat.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Environ 80 % de ce que nous appelons "le goût" est en réalité de l\'odeur perçue par voie rétronasale.',
      reponse: true,
      explication: 'Vrai. La langue ne détecte que cinq saveurs. Tout le reste — les arômes, la complexité, ce qui distingue une fraise d\'une framboise — provient de l\'olfaction rétronasale : l\'air chargé d\'arômes monte par l\'arrière du palais vers la cavité nasale pendant la mastication. Boucher le nez fait disparaître presque tout le "goût".'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets dans l\'ordre chronologique ces grandes étapes de la haute cuisine :',
      items: [
        'Marie-Antoine Carême codifie la grande cuisine française',
        'Auguste Escoffier publie le Guide Culinaire et invente la brigade kitchen',
        'Paul Bocuse et le manifeste Gault-Millau lancent la nouvelle cuisine',
        'Ferran Adrià invente la cuisine moléculaire à elBulli',
        'René Redzepi impose la nouvelle cuisine nordique au Noma'
      ],
      explication: 'De Carême (mort en 1833) à Escoffier (Guide Culinaire 1903), à la nouvelle cuisine (1973), à elBulli (années 1990-2011), au Noma (depuis 2003). Cinq écoles successives qui se répondent : codification, simplification, retour au produit, déconstruction, terroir hyperlocal.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète cette phrase sur une réaction chimique fondamentale de la cuisine :',
      texte: 'La réaction de {Maillard}, décrite en 1912, explique le brunissage des aliments cuits à haute température et produit des centaines de composés aromatiques.',
      explication: 'Louis-Camille Maillard, chimiste français, a décrit en 1912 la réaction entre acides aminés et sucres réducteurs qui se produit au-delà d\'environ 140 °C. Elle explique la croûte du pain, le parfum de la viande grillée, l\'arôme du café torréfié, la couleur de la bière brune.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète cette phrase sur une saveur fondamentale :',
      texte: 'La cinquième saveur, l\'{umami}, a été isolée en 1908 par le chimiste japonais Kikunae Ikeda dans un bouillon de kombu.',
      explication: 'L\'umami (旨味, "essence du goût savoureux") correspond à la perception du glutamate. C\'est la saveur du parmesan, des tomates mûres, des champignons séchés, du soja, des viandes longuement braisées. Ses récepteurs spécifiques sur la langue ont été identifiés en 2000.'
    },
    {
      type: 'associer',
      q: 'Associe chaque chef à sa contribution emblématique :',
      paires: [
        { gauche: 'Marie-Antoine Carême', droite: 'Pièces montées architecturales et sauces mères' },
        { gauche: 'Auguste Escoffier', droite: 'Brigade kitchen et Guide Culinaire (1903)' },
        { gauche: 'Paul Bocuse', droite: 'Nouvelle cuisine et manifeste Gault-Millau (1973)' },
        { gauche: 'Ferran Adrià', droite: 'Cuisine moléculaire à elBulli (espumas, sphérifications)' },
        { gauche: 'René Redzepi', droite: 'Nouvelle cuisine nordique au Noma (foraging, fermentation)' }
      ],
      explication: 'Cinq révolutions successives. Carême la grandeur architecturale ; Escoffier la rationalisation industrielle ; Bocuse la légèreté et le produit ; Adrià la déconstruction laboratoire ; Redzepi le retour radical au terroir. Toute la haute cuisine moderne tient dans cette généalogie.'
    },
    {
      q: 'Qui a inventé la brigade kitchen — chef, sous-chef, chefs de partie — toujours en usage dans les grands restaurants ?',
      options: [
        'Marie-Antoine Carême',
        'Auguste Escoffier',
        'Paul Bocuse',
        'Brillat-Savarin'
      ],
      correcte: 1,
      explication: 'Auguste Escoffier (1846-1935), au Savoy puis au Carlton de Londres avec César Ritz, transpose en cuisine l\'organisation militaire : chef, sous-chef, second, puis chefs de partie spécialisés (saucier, poissonnier, entremétier, garde-manger…). Cette hiérarchie reste inchangée aujourd\'hui dans le monde entier.'
    },
    {
      q: 'Quel surnom historique a été donné à Marie-Antoine Carême ?',
      options: [
        'Le père de la nouvelle cuisine',
        'Le sorcier des fourneaux',
        'Le roi des chefs et le chef des rois',
        'Le pape de la gastronomie'
      ],
      correcte: 2,
      explication: 'Carême (1784-1833), cuisinier de Talleyrand, du tsar Alexandre Iᵉʳ, du futur George IV d\'Angleterre puis des Rothschild, fut surnommé "le roi des chefs et le chef des rois". Son obsession architecturale produisait des pièces montées monumentales inspirées de temples grecs et romains.'
    },
    {
      q: 'En quelle année le manifeste de la "nouvelle cuisine" est-il publié par Gault et Millau ?',
      options: [
        '1953',
        '1973',
        '1983',
        '1993'
      ],
      correcte: 1,
      explication: 'En octobre 1973, Henri Gault et Christian Millau publient dans leur magazine le manifeste "Vive la nouvelle cuisine française !" — dix commandements : cuissons courtes, produits frais, allègement des sauces, dressage par le chef. Paul Bocuse, les frères Troisgros, Michel Guérard en sont les figures.'
    },
    {
      q: 'Qui a découvert l\'umami en 1908 ?',
      options: [
        'Auguste Escoffier, en France',
        'Kikunae Ikeda, au Japon',
        'Louis-Camille Maillard, en France',
        'Gordon Shepherd, aux États-Unis'
      ],
      correcte: 1,
      explication: 'Kikunae Ikeda, chimiste japonais de l\'université de Tokyo, isole en 1908 le glutamate monosodique comme molécule responsable d\'une cinquième saveur dans le bouillon de kombu. Il la baptise umami — "essence du goût savoureux". Les récepteurs spécifiques sur la langue (T1R1/T1R3) seront identifiés en 2000.'
    },
    {
      q: 'Quel restaurant catalan, dirigé par Ferran Adrià, a fermé volontairement en 2011 au sommet de sa gloire ?',
      options: [
        'El Celler de Can Roca',
        'elBulli',
        'Mugaritz',
        'Arzak'
      ],
      correcte: 1,
      explication: 'elBulli, situé à Cala Montjoi sur la Costa Brava, dirigé par Ferran Adrià de 1987 à 2011, a été cinq fois élu meilleur restaurant du monde. Adrià ferme volontairement en juillet 2011 pour transformer le lieu en fondation de recherche culinaire. Décision sidérante saluée comme un geste artistique fort.'
    },
    {
      q: 'En quelle année le repas gastronomique des Français a-t-il été inscrit au patrimoine immatériel de l\'UNESCO ?',
      options: [
        '2003',
        '2010',
        '2015',
        '2020'
      ],
      correcte: 1,
      explication: 'Le 16 novembre 2010, à Nairobi, l\'UNESCO inscrit "le repas gastronomique des Français" à son patrimoine culturel immatériel — premier rituel culinaire au monde reconnu à ce titre. Le texte protège la pratique sociale (être ensemble, harmonie homme-nature, plaisir du goût) plus que les recettes elles-mêmes.'
    },
    {
      q: 'Que désigne la "réaction de Maillard" en cuisine ?',
      options: [
        'La fermentation lactique des légumes',
        'Le brunissage des aliments cuits à haute température et la production de composés aromatiques',
        'La cuisson sous vide à basse température',
        'La gélification d\'un liquide en bille par sphérification'
      ],
      correcte: 1,
      explication: 'Décrite par Louis-Camille Maillard en 1912, la réaction se produit au-delà d\'environ 140 °C entre acides aminés et sucres réducteurs. Elle produit des centaines de composés aromatiques et un brunissage caractéristique. La croûte du pain, le parfum de la viande grillée, le café torréfié, la bière brune en sont les manifestations quotidiennes.'
    }
  ],

  vocabulaire: [
    {
      terme: 'Gastronomie',
      definition: `*Art de bien manger* élevé au rang d'objet culturel. Du grec *gastêr* (estomac) et *nomos* (loi). Mot forgé en français par **Joseph Berchoux** en **1801**, dans le sillage de la naissance du restaurant parisien post-révolutionnaire.`
    },
    {
      terme: 'Brigade',
      definition: `Organisation **hiérarchique** d'une cuisine professionnelle codifiée par *Escoffier* sur le modèle militaire : chef, sous-chef, [chefs de partie]{accent} spécialisés (saucier, poissonnier, entremétier, garde-manger, pâtissier). Standard mondial encore en vigueur.`
    },
    {
      terme: 'Sauces mères',
      definition: `Cinq sauces de base de la cuisine française classique dont dérivent toutes les autres : **espagnole**, **velouté**, **béchamel**, **tomate**, **hollandaise**. Codifiées par *Carême* puis simplifiées par *Escoffier*. Squelette de tout le répertoire des sauces.`
    },
    {
      terme: 'Nouvelle cuisine',
      definition: `Mouvement lancé par le **manifeste Gault-Millau** d'octobre **1973**. Réaction contre les sauces lourdes héritées d'Escoffier : produits frais, cuissons courtes, dressage par le chef, légèreté. *Paul Bocuse* en est la figure tutélaire.`
    },
    {
      terme: 'Cuisine moléculaire',
      definition: `Courant des années 1990-2010 incarné par **Ferran Adrià** à elBulli, qui applique la chimie à la cuisine : espumas, sphérifications, gels chauds, déconstruction. La cuisine devient **laboratoire** et jeu sensoriel.`
    },
    {
      terme: 'Sphérification',
      definition: `Technique d'**Adrià** : un liquide aromatisé plongé dans un bain de chlorure de calcium forme instantanément une **bille à fine membrane** gélifiée, au cœur liquide. Sous la dent, la sphère éclate — effet de surprise gustative caractéristique.`
    },
    {
      terme: 'Umami',
      definition: `**Cinquième saveur** fondamentale, isolée par *Kikunae Ikeda* en **1908** dans un bouillon de kombu. Correspond à la perception du **glutamate** monosodique. Saveur du parmesan, des tomates mûres, du soja, des bouillons longuement braisés.`
    },
    {
      terme: 'Réaction de Maillard',
      definition: `Réaction chimique décrite par *Louis-Camille Maillard* en **1912** entre acides aminés et sucres réducteurs, au-dessus d'environ 140 °C. Produit le **brunissage** et des centaines de composés aromatiques. Fondement chimique de toute la cuisine au feu vif.`
    },
    {
      terme: 'Olfaction rétronasale',
      definition: `Perception des arômes par l'**arrière du palais** pendant la mastication, lorsque l'air chargé d'odeurs monte vers la cavité nasale. Représente environ **80 %** de ce que l'on appelle « goût » — la langue ne détecte que les cinq saveurs.`
    },
    {
      terme: 'Foraging',
      definition: `Pratique de **cueillette sauvage** en forêt, prairie ou bord de mer pour s'approvisionner en herbes, baies, lichens, champignons. Marque de fabrique du **Noma** de *Redzepi* et de la nouvelle cuisine nordique : faire émerger un terroir hyperlocal.`
    }
  ]

});
