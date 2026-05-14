/* ===================================================================
   SUJET — Napoléon Bonaparte
   ===================================================================
   De Corse à Sainte-Hélène : seize années qui ont refait l'Europe.
   Domaine : Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'napoleon',
    titre: '<em>Napoléon</em>',
    domaines: ['Histoire'],
    tags: ['empire', 'consulat', 'austerlitz', 'waterloo', 'code-civil', 'sainte-helene', 'corse'],
    difficulte: 2,
    duree_estimee_min: 40,
    prerequis: [],
    lie_a: ['revolution-francaise', 'rome-antique', 'paris-geographie'],
    date_creation: '2026-05-13',
    date_maj: '2026-05-13'
  },

  resume: `D\'un cadet corse né l\'année où la France annexait son île, à l\'empereur que toute l\'Europe coalisée a fini par abattre. En quinze ans de pouvoir (1799-1815), Napoléon Bonaparte solde la Révolution, refond l\'administration, codifie le droit, redessine la carte du continent — puis se brûle dans l\'invasion de la Russie et s\'éteint sur un rocher de l\'Atlantique sud, transformé de son vivant déjà en mythe.`,

  points_cles: [
    `Né à **Ajaccio le 15 août 1769**, un an après le rattachement de la **Corse** à la France. Cadet d\'une famille noble désargentée, il entre à l\'école militaire de Brienne à 9 ans.`,
    `Ascension fulgurante grâce à la Révolution : artilleur héros du **siège de Toulon (1793)**, vainqueur de la **campagne d\'Italie (1796-1797)** à 27 ans, dirige l\'**expédition d\'Égypte (1798-1799)**.`,
    `Le **18 brumaire an VIII (9 novembre 1799)**, il renverse le Directoire et devient **Premier Consul**. Il refond la France : préfets, **Banque de France (1800)**, **lycées (1802)**, concordat avec Rome (1801), **Code civil (1804)**.`,
    `**Sacré empereur le 2 décembre 1804** à Notre-Dame, en présence du pape Pie VII — mais c\'est lui qui se couronne. Apogée militaire à **Austerlitz (1805)**, **Iéna (1806)**, **Wagram (1809)**.`,
    `Le **blocus continental** contre l\'Angleterre l\'enlise dans la **guerre d\'Espagne (1808-1814)**, puis la **campagne de Russie (1812)** détruit la Grande Armée : sur **600 000 hommes**, à peine **30 000** reviennent.`,
    `Première abdication à **Fontainebleau (avril 1814)**, exil à l\'**île d\'Elbe**. Les **Cent-Jours** (mars-juin 1815) s\'achèvent à **Waterloo le 18 juin 1815**. Déporté à **Sainte-Hélène**, il y meurt le **5 mai 1821**.`,
    `Son héritage est partout dans la France moderne : **Code civil**, départements et préfets, **Légion d\'honneur**, Conseil d\'État, cadastre, baccalauréat, numérotation des immeubles parisiens, franc germinal.`,
    `Mémoire ambiguë : génie administratif et militaire pour les uns, despote belliqueux et fossoyeur de la République pour les autres. **Trois millions de morts** dans les guerres napoléoniennes pèsent sur le bilan.`
  ],

  carte_mentale: {
    central: 'napoleon',
    noeuds: [
      { id: 'napoleon', label: 'Napoléon', description: '1769-1821. De cadet corse à empereur des Français. Quinze ans au pouvoir, deux siècles d\'écho.' },

      // Niveau 1 — grandes branches
      { id: 'ascension', label: 'Ascension', description: 'De l\'école militaire au Consulat. Corse, Toulon, Italie, Égypte, 18 brumaire.' },
      { id: 'consulat', label: 'Consulat', description: '1799-1804. Refonte de la France : Code civil, préfets, Banque, lycées, Concordat.' },
      { id: 'empire', label: 'Empire', description: '1804-1814. Sacre, victoires foudroyantes, domination du continent européen.' },
      { id: 'chute', label: 'Chute', description: 'Espagne, Russie, Leipzig, abdication, Elbe, Cent-Jours, Waterloo.' },
      { id: 'heritage', label: 'Héritage', description: 'Code civil, administration, mémoire ambiguë. Mythe napoléonien.' },

      // Niveau 2 — ascension
      { id: 'corse', label: 'Corse', description: 'Né à **Ajaccio** le 15 août 1769, un an après l\'annexion française. Famille noble pauvre, neuf enfants.', parent: 'ascension' },
      { id: 'toulon', label: 'Toulon 1793', description: 'Jeune capitaine d\'artillerie, il reprend la ville aux Anglais. Promu **général de brigade à 24 ans**.', parent: 'ascension' },
      { id: 'italie', label: 'Campagne d\'Italie', description: '**1796-1797**. À 27 ans, il bat les Autrichiens à Lodi, Arcole, Rivoli. Traité de Campo-Formio. Naissance de la légende.', parent: 'ascension' },
      { id: 'brumaire', label: '18 Brumaire', description: '**9 novembre 1799**. Coup d\'État avec Sieyès et son frère Lucien. Devient Premier Consul.', parent: 'ascension' },

      // Niveau 2 — consulat
      { id: 'code-civil', label: 'Code civil', description: '**21 mars 1804**. Codification monumentale en 2 281 articles. *Ma vraie gloire*, dira-t-il à Sainte-Hélène.', parent: 'consulat' },
      { id: 'administration', label: 'Préfets et lycées', description: '**Préfets** dans chaque département (1800), **Banque de France** (1800), **lycées** (1802), **Légion d\'honneur** (1802).', parent: 'consulat' },

      // Niveau 2 — empire
      { id: 'austerlitz', label: 'Austerlitz', description: '**2 décembre 1805**. Le chef-d\'œuvre tactique. Bat russes et autrichiens. Surnommée *bataille des trois empereurs*.', parent: 'empire' },
      { id: 'sacre', label: 'Sacre', description: '**2 décembre 1804**, Notre-Dame de Paris. Pie VII présent. Bonaparte se couronne lui-même.', parent: 'empire' },

      // Niveau 2 — chute
      { id: 'russie', label: 'Russie 1812', description: '**600 000 hommes** partent, à peine **30 000** reviennent. Désastre fondateur de la chute.', parent: 'chute' },
      { id: 'waterloo', label: 'Waterloo', description: '**18 juin 1815**. Défaite finale face à Wellington et Blücher. Fin des Cent-Jours.', parent: 'chute' },
      { id: 'sainte-helene', label: 'Sainte-Hélène', description: 'Île britannique de l\'Atlantique sud. Six ans de captivité, dictée des *Mémoires*. Mort le **5 mai 1821**.', parent: 'chute' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Un <em>Corse</em> au cœur de la Révolution',
      contenu_md:
`Napoléon Bonaparte — Napoleone di Buonaparte de naissance — voit le jour à **Ajaccio le 15 août 1769**. La Corse vient d\'être cédée par Gênes à la France l\'année précédente (1768). Le hasard du calendrier fera donc d\'un enfant de la dernière génération corse non-française le **maître ultime de la France**. Ironie qu\'il ne renia jamais : il garda toute sa vie un accent italien prononcé et écrivit son nom *Napoleone* jusqu\'à ses vingt ans.

La famille [Buonaparte]{accent} est noble mais désargentée — neuf enfants, peu de revenus. À **neuf ans**, grâce à une bourse royale, il entre à l\'école militaire de Brienne. Petit, taciturne, isolé par son accent, il s\'absorbe dans les livres : Plutarque, César, Tacite. La **Rome antique** ([[rome-antique]]) deviendra plus qu\'une lecture — un modèle politique entier : il imitera ses **consuls**, sa **dictature de salut public**, son sénat, son aigle légionnaire, jusqu\'à ses arcs de triomphe. À 16 ans, il est sous-lieutenant d\'artillerie.

C\'est la **Révolution française** ([[revolution-francaise]]) qui débloque sa trajectoire. Sans elle, il serait peut-être resté lieutenant en garnison. Avec elle, l\'avancement est ouvert au talent. En décembre **1793**, jeune capitaine inconnu, il propose un plan génial pour reprendre **Toulon** aux Anglais. Le plan réussit. Il a 24 ans, on le nomme général de brigade. Robespierre l\'admire. La chute thermidorienne lui vaut un bref emprisonnement (août 1794), puis le retour aux affaires.

L\'épisode suivant scelle sa fortune. Le **13 vendémiaire an IV** (5 octobre 1795), une émeute royaliste menace la Convention. Barras lui confie le commandement militaire à Paris. Bonaparte fait tirer **à la mitraille** sur les insurgés devant l\'église Saint-Roch. Quelques centaines de morts. La République est sauvée. Récompense : il épouse Joséphine, et reçoit le commandement de l\'**armée d\'Italie**.`
    },

    {
      type: 'encadre',
      label: 'Italie et Égypte',
      contenu_md: `La **campagne d\'Italie (1796-1797)** est l\'acte fondateur du mythe. En quatorze mois, à 27 ans, à la tête d\'une armée maigre et débraillée, il enchaîne **Montenotte, Lodi, Castiglione, Arcole, Rivoli**. Il met les Autrichiens à genoux, signe seul le traité de **Campo-Formio**, et envoie à Paris des œuvres d\'art pillées et des millions. La presse parisienne en fait un héros. L\'**expédition d\'Égypte (1798-1799)** est plus mitigée militairement — la flotte est détruite à Aboukir par Nelson —, mais elle ajoute à sa stature : il s\'entoure de **savants** (Monge, Berthollet, Champollion plus tard naîtra de l\'élan), fait redécouvrir la pierre de **Rosette**, et rentre en France auréolé d\'exotisme et de mystère.`
    },

    {
      type: 'widget',
      titre: 'Le règne en jalons',
      composant: 'Frise',
      params: {
        evenements: [
          { date: 'Ajaccio', titre: 'Naissance', description: 'Né en Corse, un an après l\'annexion française. Cadet d\'une famille noble pauvre. **Neuvième** d\'une fratrie qui deviendra reine d\'une demi-Europe.' },
          { date: 'Toulon', titre: 'Révélation militaire', description: 'Jeune capitaine d\'artillerie, il libère le port des Anglais grâce à une manœuvre audacieuse. Général de brigade dans la foulée, à **24 ans**.' },
          { date: 'Italie', titre: 'Campagne fondatrice', description: 'À la tête de l\'**armée d\'Italie**, il enchaîne les victoires sur les Autrichiens — Lodi, Arcole, Rivoli. Signe seul Campo-Formio. La légende commence.' },
          { date: 'Égypte', titre: 'Expédition orientale', description: 'Pyramides, savants, pierre de **Rosette**. Échec naval à Aboukir face à Nelson, mais retour triomphal politique.' },
          { date: 'Brumaire', titre: 'Coup d\'État', description: 'Le **18 brumaire an VIII** (9 novembre 1799). Renverse le Directoire avec Sieyès. Devient **Premier Consul**. Fin de la Révolution au sens étroit.' },
          { date: 'Consulat', titre: 'Refonte de la France', description: '**Préfets**, **Banque de France**, **lycées**, **Concordat** avec Rome, **Légion d\'honneur**. Le pays change d\'ossature administrative.' },
          { date: 'Sacre', titre: 'Empereur des Français', description: 'À **Notre-Dame de Paris**, en présence du pape Pie VII. Bonaparte saisit lui-même la couronne et se la pose sur la tête. Geste calculé.' },
          { date: 'Austerlitz', titre: 'Chef-d\'œuvre tactique', description: 'Le **2 décembre 1805**. Écrase russes et autrichiens en Moravie. Surnommée *bataille des trois empereurs*. Le **Saint-Empire** s\'effondre dans la foulée.' },
          { date: 'Iéna', titre: 'Effondrement prussien', description: 'Le **14 octobre 1806**. La Prusse est balayée en une journée. Berlin tombe. Décret du blocus continental contre l\'Angleterre.' },
          { date: 'Espagne', titre: 'Le piège ibérique', description: 'Intervention en **1808**. Son frère Joseph sur le trône. Guérilla incessante, soutien anglais (Wellington). Six ans d\'enlisement qui saignent l\'Empire.' },
          { date: 'Wagram', titre: 'Dernier grand triomphe', description: 'Le **6 juillet 1809**. Bat encore les Autrichiens. Mariage avec **Marie-Louise** d\'Autriche en 1810. Naissance de l\'Aiglon en 1811.' },
          { date: 'Russie', titre: 'Le désastre', description: 'Été 1812. **600 000 hommes** franchissent le Niémen. Bataille indécise à la Moskova. Moscou incendiée. Retraite cauchemardesque. **30 000** seulement reviennent.' },
          { date: 'Leipzig', titre: 'Bataille des Nations', description: 'Octobre **1813**. Coalition générale en Allemagne. Défaite massive. Recul jusqu\'aux frontières françaises.' },
          { date: 'Fontainebleau', titre: 'Première abdication', description: '**6 avril 1814**. Les coalisés entrent à Paris. Napoléon abdique. Exil à l\'**île d\'Elbe**, dont il reste souverain.' },
          { date: 'Cent-Jours', titre: 'Le retour', description: 'Débarque à Golfe-Juan le **1ᵉʳ mars 1815**. Marche sur Paris sans tirer un coup de feu. Louis XVIII fuit. Cent jours de pouvoir retrouvé.' },
          { date: 'Waterloo', titre: 'La fin', description: '**18 juin 1815**, en Belgique. Wellington tient, Blücher arrive. La Garde recule pour la première fois. *La Garde meurt et ne se rend pas*.' },
          { date: 'Sainte-Hélène', titre: 'L\'île-tombeau', description: 'Rocher britannique de l\'Atlantique sud. **Six ans** de captivité humiliante. Dicte le *Mémorial* à Las Cases. Meurt le **5 mai 1821**, à 51 ans.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>Consulat</em> : solder la Révolution',
      contenu_md:
`Premier Consul à **30 ans**, Bonaparte se met au travail avec une énergie phénoménale — quinze à dix-huit heures par jour, plusieurs secrétaires épuisés à se relayer. Son projet politique tient en une formule : **terminer la Révolution**. C\'est-à-dire conserver ses acquis sociaux et juridiques (égalité civile, abolition des privilèges, vente des biens nationaux) tout en restaurant **autorité, ordre et hiérarchie**.

L\'œuvre est colossale et tient en cinq ans. En **1800**, il crée la **Banque de France** et institue les **préfets** — un dans chaque département, nommé par le pouvoir central, courroie de transmission directe entre Paris et la province. Le maillage administratif moderne français est posé là, il tient encore aujourd\'hui. En **1801**, le **Concordat** avec le pape Pie VII réconcilie la France avec Rome : le catholicisme redevient *religion de la majorité des Français*, sans redevenir religion d\'État. En **1802**, naissent les **lycées** et la **Légion d\'honneur** — la seconde, parce que *il faut donner aux hommes des hochets, c\'est avec cela qu\'on les mène*.

Au sommet, le **Code civil** de **1804** — vingt commissions, trente-six lois, **2 281 articles**. Bonaparte y assiste personnellement à plus de la moitié des séances. Le texte synthétise droit romain, droit coutumier et acquis révolutionnaires. Égalité devant la loi, propriété sacrée, liberté contractuelle, mariage civil, autorité paternelle restaurée. *Ma vraie gloire n\'est pas d\'avoir gagné quarante batailles*, dira-t-il à Sainte-Hélène, *ce que rien n\'effacera, ce qui vivra éternellement, c\'est mon Code civil*. Il ne se trompait pas : on le retrouve, à des degrés divers, en Belgique, aux Pays-Bas, en Italie, en Espagne, en Pologne, en Égypte, au Japon, en Louisiane, au Québec.`
    },

    {
      type: 'widget',
      titre: 'Les piliers de l\'État napoléonien',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: '1800',
            titre: 'Préfets',
            description: `Un haut fonctionnaire nommé dans chaque **département**, représentant direct du pouvoir central. Cassent l\'autonomie des notables locaux. Maillage encore en vigueur deux siècles plus tard.`
          },
          {
            tag: '1800',
            titre: 'Banque de France',
            description: `Institution privée à privilèges publics. Stabilise la monnaie. Le **franc germinal** (1803) restera étonnamment stable jusqu\'en 1914 — plus d\'un siècle de stabilité monétaire.`
          },
          {
            tag: '1802',
            titre: 'Lycées',
            description: `Établissements secondaires d\'État, uniformes sur tout le territoire. Discipline militaire, programmes nationaux. Forment les **cadres administratifs et militaires** de l\'Empire.`
          },
          {
            tag: '1804',
            titre: 'Code civil',
            description: `**2 281 articles**. Codification monumentale en langage clair. Propriété, contrat, famille, succession. *Pierre angulaire* du droit français et de nombreux droits étrangers.`
          },
          {
            tag: '1802',
            titre: 'Légion d\'honneur',
            description: `Ordre méritocratique ouvert à tous — soldat, savant, artiste, industriel. Remplace les ordres aristocratiques d\'Ancien Régime. Toujours active.`
          },
          {
            tag: '1801',
            titre: 'Concordat',
            description: `Accord avec **Pie VII**. Le catholicisme est *religion de la majorité*, l\'État nomme les évêques que le pape investit. Réconciliation après dix ans de déchirement religieux.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>Empire</em> et son zénith',
      contenu_md:
`Le **18 mai 1804**, le Sénat proclame Napoléon **empereur des Français**. Le **2 décembre**, le sacre a lieu à **Notre-Dame de Paris**. Le pape Pie VII a fait le déplacement — mais c\'est Napoléon lui-même qui saisit la couronne et se la pose sur la tête, geste calculé : il tient son pouvoir non d\'un sacrement, mais de la **nation** (et de lui-même). Le **modèle impérial** est explicite — il convoque Charlemagne, mais surtout les **empereurs romains** ([[rome-antique]]) : aigle, lauriers, abeilles, sénat, arcs de triomphe. **Paris** est redessinée pour ressembler à la Rome antique — la rue de Rivoli, la colonne Vendôme (coulée dans le bronze des canons d\'Austerlitz), l\'Arc de triomphe ([[paris-geographie]]) commandé en 1806, le Palais-Brongniart pour la Bourse, la Madeleine prévue en *temple de la Gloire*.

Sur le champ de bataille, c\'est l\'**apogée**. À **Austerlitz**, le **2 décembre 1805**, jour anniversaire du sacre, il écrase russes et autrichiens d\'une manœuvre virtuose — la fameuse percée du **plateau de Pratzen**. Le tsar Alexandre Iᵉʳ et l\'empereur François II sont sur le terrain : *bataille des trois empereurs*. Le **Saint-Empire romain germanique**, vieux d\'un millénaire, est dissous l\'année suivante. À **Iéna et Auerstaedt** (14 octobre 1806), la **Prusse** est anéantie en une journée. Napoléon entre dans Berlin et s\'incline devant le tombeau de Frédéric le Grand. À **Wagram** (1809), l\'Autriche s\'effondre une fois de plus.

L\'Europe est à ses pieds. Son frère **Joseph** règne sur Naples puis sur l\'Espagne, **Louis** sur la Hollande, **Jérôme** sur la Westphalie, sa sœur **Caroline** sur Naples, son beau-frère **Murat** lui succède. La carte du continent est redessinée par cet homme seul. En **1810**, divorcé de Joséphine (qui ne lui donnait pas d\'héritier), il épouse **Marie-Louise**, fille de l\'empereur d\'Autriche — le révolutionnaire devient gendre des Habsbourg. L\'**Aiglon** naît en mars 1811, baptisé *roi de Rome*.`
    },

    {
      type: 'encadre',
      label: 'Le blocus continental',
      contenu_md: `Faute de pouvoir débarquer en Angleterre (sa flotte est détruite à **Trafalgar** par Nelson, le 21 octobre 1805), Napoléon imagine de l\'étrangler économiquement. Le **décret de Berlin** (21 novembre 1806) interdit aux puissances européennes tout commerce avec l\'Angleterre. C\'est le **blocus continental**. Pour qu\'il fonctionne, il faut le faire respecter partout — d\'où des occupations en chaîne (Portugal, Espagne, Italie), des tensions avec la Russie qui refuse de jouer le jeu, des contrebandes massives. Le blocus est l\'engrenage logique qui mène, étape après étape, à la **guerre d\'Espagne** et à la **campagne de Russie**. La machine impériale se grippe par sa propre logique de surextension.`
    },

    {
      type: 'widget',
      titre: 'Les grands corps de la Grande Armée',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `L'infanterie de ligne`,
            description: `Le **gros des troupes**. Trois cent à six cent mille hommes en campagne, articulés en bataillons, régiments, divisions, corps d\'armée. La manœuvre par **corps autonomes** est l\'innovation napoléonienne majeure : chacun marche seul, converge au son du canon.`
          },
          {
            titre: `L'artillerie`,
            description: `**L\'arme préférée** de Napoléon, lui-même artilleur. Pièces de **4, 8 et 12 livres**, mobiles, regroupées en grandes batteries au moment décisif. À Friedland (1807), 30 canons concentrés brisent l\'aile russe en quelques minutes.`
          },
          {
            titre: `La cavalerie lourde`,
            description: `**Cuirassiers** et **carabiniers**. Cuirasse d\'acier, sabre droit. Frappent dans la mêlée ouverte par l\'artillerie. Murat, beau-frère de l\'empereur, en est le grand stratège — panaches et bravoure.`
          },
          {
            titre: `La Garde impériale`,
            description: `**L\'élite des élites**. Recrutée parmi les vétérans. Vieille Garde (grognards), Moyenne, Jeune Garde. Réserve gardée pour l\'instant décisif. *La Garde meurt et ne se rend pas* — formule attribuée à Cambronne, Waterloo, 18 juin 1815.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>enlisement</em> et la chute',
      contenu_md:
`Le piège se referme par l\'**Espagne**. En 1808, Napoléon dépose les Bourbons d\'Espagne et installe son frère Joseph sur le trône. Erreur de calcul : le peuple espagnol se soulève en masse. Une **guérilla** féroce (le mot est inventé pour l\'occasion) immobilise pendant six ans **200 000 à 300 000 soldats français**. L\'Angleterre débarque des troupes au Portugal sous **Wellington**. La péninsule devient une plaie ouverte qui ne cicatrise jamais. Goya peindra l\'horreur dans *Les Désastres de la guerre*.

Le coup mortel vient de l\'**est**. Le tsar Alexandre Iᵉʳ rompt avec le blocus continental. Napoléon décide d\'une démonstration de force : envahir la Russie, contraindre le tsar à composer, retour pour l\'hiver. **24 juin 1812**, la **Grande Armée** franchit le Niémen — **600 000 hommes**, la plus grosse armée jamais réunie en Europe. Les Russes reculent, brûlent tout derrière eux. À **Borodino (la Moskova)**, le 7 septembre, **70 000 morts** en une journée — bataille indécise. Moscou est prise le 14 — et incendiée la nuit même par les Russes eux-mêmes. Le tsar refuse de négocier.

Napoléon attend en vain dans une ville en cendres. Le **19 octobre**, il ordonne la retraite. C\'est trop tard. L\'**hiver russe** s\'abat, la Bérézina (28 novembre) devient un cauchemar de glace et de feu. Sur les 600 000 partis, **environ 30 000** repassent le Niémen. Le mythe d\'invincibilité est brisé.

La coalition se reforme. À **Leipzig** (octobre 1813), la *bataille des Nations*, Napoléon est vaincu par russes, autrichiens, prussiens et suédois réunis. La campagne de France (janvier-mars 1814) est tactiquement brillante mais désespérée — il manque cinquante divisions. Les coalisés entrent à Paris le **31 mars 1814**. Le **6 avril**, à **Fontainebleau**, Napoléon abdique. On lui laisse, par ironie, la souveraineté sur la minuscule **île d\'Elbe**, en face de la Toscane. Il a 44 ans.`
    },

    {
      type: 'encadre',
      label: 'Cent-Jours et Sainte-Hélène',
      contenu_md: `Pendant qu\'à Vienne le congrès des vainqueurs redécoupe l\'Europe, Napoléon, sur Elbe, prépare son retour. Le **1ᵉʳ mars 1815**, il débarque à **Golfe-Juan** avec mille hommes. La marche vers Paris est un prodige : à chaque détachement royal envoyé pour l\'arrêter, il s\'avance seul et déclare : *si quelqu\'un d\'entre vous veut tuer son empereur, me voici*. Les soldats se rangent à sa suite. Louis XVIII fuit. **Vingt jours plus tard**, il est aux Tuileries — sans avoir tiré un coup de feu. Mais la coalition se reforme aussitôt. À **Waterloo**, le **18 juin 1815**, Wellington tient et Blücher arrive à temps. La Garde recule pour la première fois. Cette fois, les vainqueurs ne laissent rien au hasard : Napoléon est déporté à **Sainte-Hélène**, rocher anglais perdu dans l\'Atlantique sud, à 1 900 km de la côte africaine. **Six ans** de captivité humiliante, à dicter ses mémoires à **Las Cases** — qui en feront le *Mémorial*, bréviaire du futur mythe napoléonien. Il meurt le **5 mai 1821**, probablement d\'un cancer de l\'estomac, à 51 ans.`
    },

    {
      type: 'texte',
      titre: 'L\'<em>héritage</em> et la mémoire',
      contenu_md:
`Que reste-t-il de Napoléon ? D\'abord, l\'**ossature administrative** de la France contemporaine. Les **départements** dessinés en 1790, mais véritablement organisés par lui ; les **préfets** ; le **Conseil d\'État** ; la **Cour des comptes** ; le **cadastre** ; le **baccalauréat** ; la **Banque de France** ; la **numérotation paire-impaire des immeubles parisiens** ; la **Légion d\'honneur**. Aucun homme n\'a laissé d\'empreinte aussi dense sur l\'État français.

Le **Code civil**, surtout, demeure son monument le plus durable. Modifié des milliers de fois, il garde sa structure et de nombreux articles d\'origine. Et bien au-delà : on le retrouve transposé en Belgique, Italie, Pays-Bas, Espagne, Pologne, Roumanie, Égypte, Japon (Meiji), Louisiane, Québec. Le droit romain renouvelé y trouve une seconde vie, et le **droit continental européen** y prend sa forme moderne.

Géographiquement, **Paris** porte son empreinte ([[paris-geographie]]) : Arc de triomphe de l\'Étoile, colonne Vendôme, rue de Rivoli, ponts d\'Austerlitz et d\'Iéna, la Madeleine, la Bourse, fontaines, abattoirs, grands greniers. Il rêvait d\'une capitale qui éclipsât la Rome impériale ; il en a posé les bases qu\'Haussmann reprendrait cinquante ans plus tard.

Mais le bilan a son revers. Les **guerres napoléoniennes**, en quinze ans, ont fait selon les estimations **trois à six millions de morts** en Europe — civils et militaires. La France est saignée à blanc démographiquement : on estime que la taille moyenne des conscrits a chuté de plusieurs centimètres au cours du règne, tant la sélection a prélevé les plus grands. L\'esclavage colonial, aboli par la Convention en 1794, est **rétabli** en 1802 — décision qui pèse durablement sur la mémoire. La **liberté politique** est étouffée : censure de la presse, ministère de la Police, opposants exilés ou emprisonnés.

D\'où, depuis deux siècles, une **mémoire ambiguë** : génie administratif, militaire et juridique pour les uns ; despote belliqueux et fossoyeur de la République pour les autres. Aux Invalides, à Paris, son tombeau monumental — un sarcophage de quartzite rouge sous un dôme doré — accueille deux millions de visiteurs par an. La rue, elle, continue de balancer entre fascination et procès. Comme tout objet historique dense, il dit autant de ses admirateurs que de ses détracteurs.`
    }

  ],

  quiz: [
    {
      type: 'ordre-chrono',
      q: 'Remets ces étapes du parcours de Napoléon dans l\'ordre chronologique :',
      items: [
        'Siège de Toulon, première gloire militaire',
        'Coup d\'État de Brumaire et Consulat',
        'Sacre à Notre-Dame, empereur des Français',
        'Campagne de Russie et désastre de la Bérézina',
        'Waterloo et déportation à Sainte-Hélène'
      ],
      explication: 'L\'ascension va du jeune capitaine artilleur (Toulon, décembre 1793) au Premier Consul (brumaire an VIII, 9 novembre 1799), puis empereur (2 décembre 1804). L\'invasion de la Russie en 1812 amorce la chute, scellée à Waterloo (18 juin 1815) et Sainte-Hélène jusqu\'à sa mort en 1821.'
    },
    {
      q: `Où et quand Napoléon Bonaparte est-il né ?`,
      options: [
        `À Paris, le 14 juillet 1789`,
        `À Ajaccio, en Corse, le 15 août 1769`,
        `À Marseille, le 18 brumaire 1799`,
        `À Brienne, le 2 décembre 1804`
      ],
      correcte: 1,
      explication: `Napoléon naît à Ajaccio le 15 août 1769, un an après le rattachement de la Corse à la France. Cadet d\'une famille noble désargentée, il entrera à l\'école militaire de Brienne grâce à une bourse royale, à l\'âge de 9 ans.`
    },
    {
      q: `Quel coup d\'État met fin à la Révolution française et installe Bonaparte au pouvoir ?`,
      options: [
        `Le 9 thermidor an II`,
        `Le 18 brumaire an VIII (9 novembre 1799), qui renverse le Directoire`,
        `Le 14 juillet 1789`,
        `Le coup d\'État du 2 décembre 1804`
      ],
      correcte: 1,
      explication: `Le 18 brumaire an VIII (9 novembre 1799), avec la complicité de son frère Lucien (président des Cinq-Cents) et de Sieyès, Bonaparte renverse le Directoire. Il devient Premier Consul. Le Consulat (1799-1804) précède l\'Empire.`
    },
    {
      type: 'vrai-faux',
      q: 'Lors de son sacre à Notre-Dame le 2 décembre 1804, c\'est le pape Pie VII qui couronne Napoléon.',
      reponse: false,
      explication: 'Pie VII a fait le déplacement et bénit la cérémonie, mais Napoléon saisit lui-même la couronne et se la pose sur la tête, puis couronne Joséphine. Geste calculé : son pouvoir est censé venir de la nation, pas d\'un sacrement religieux.'
    },
    {
      q: `Quelle est la "vraie gloire" dont Napoléon dira à Sainte-Hélène qu\'elle ne sera jamais effacée ?`,
      options: [
        `La victoire d\'Austerlitz`,
        `Le sacre impérial`,
        `Le Code civil de 1804, codification monumentale du droit français`,
        `La création de la Légion d\'honneur`
      ],
      correcte: 2,
      explication: `Le Code civil, promulgué le 21 mars 1804, est l\'œuvre dont Napoléon est le plus fier. Il participa personnellement à plus de la moitié des séances de rédaction. 2 281 articles. Il sera transposé en Belgique, Italie, Pays-Bas, Égypte, Japon, Louisiane, Québec.`
    },
    {
      q: `Quelle bataille est surnommée la "bataille des trois empereurs" et marque l\'apogée militaire de Napoléon ?`,
      options: [
        `Iéna (1806)`,
        `Wagram (1809)`,
        `Austerlitz (2 décembre 1805), où Napoléon écrase russes et autrichiens`,
        `Friedland (1807)`
      ],
      correcte: 2,
      explication: `Austerlitz, le 2 décembre 1805 — jour anniversaire du sacre — voit Napoléon vaincre simultanément le tsar Alexandre Iᵉʳ et l\'empereur François II d\'Autriche, par la fameuse percée du plateau de Pratzen. Le Saint-Empire romain germanique sera dissous l\'année suivante.`
    },
    {
      type: 'texte-a-trou',
      q: 'Complète :',
      texte: 'En 1812, la Grande Armée comptait environ {600 000} hommes au franchissement du Niémen ; à peine {30 000} repassèrent le fleuve à la retraite.',
      explication: 'Cette saignée est le tournant de la chute. La rigueur de l\'hiver russe, les distances, la stratégie de la terre brûlée et le passage de la Bérézina (28 novembre 1812) ont anéanti la plus grosse armée jamais réunie en Europe.'
    },
    {
      q: `Pourquoi la guerre d\'Espagne (1808-1814) est-elle un piège stratégique pour l\'Empire ?`,
      options: [
        `Parce que l\'armée française y subit une défaite éclair`,
        `Parce qu\'elle immobilise 200 000 à 300 000 hommes dans une guérilla incessante, soutenue par l\'Angleterre`,
        `Parce que Napoléon y commande personnellement et y est blessé`,
        `Parce qu\'elle déclenche la rupture du Concordat`
      ],
      correcte: 1,
      explication: `Après avoir déposé les Bourbons et installé son frère Joseph sur le trône d\'Espagne en 1808, Napoléon déclenche un soulèvement national massif. La guérilla — mot inventé pour l\'occasion — immobilise des centaines de milliers de soldats français pendant six ans. Wellington débarque au Portugal. La péninsule devient une plaie ouverte.`
    },
    {
      type: 'associer',
      q: 'Associe chaque institution à l\'année de sa création par Napoléon :',
      paires: [
        { gauche: 'Banque de France', droite: '1800' },
        { gauche: 'Concordat avec Pie VII', droite: '1801' },
        { gauche: 'Lycées et Légion d\'honneur', droite: '1802' },
        { gauche: 'Code civil', droite: '1804' }
      ],
      explication: 'Cinq ans seulement séparent l\'arrivée au pouvoir (brumaire 1799) du sacre impérial (1804). L\'œuvre administrative du Consulat est concentrée sur ce laps : Banque de France et préfets (1800), Concordat (1801), lycées et Légion d\'honneur (1802), Code civil (1804). Cet appareil structure encore largement la France contemporaine.'
    },
    {
      q: `Où Napoléon meurt-il, le 5 mai 1821 ?`,
      options: [
        `À Fontainebleau, en captivité`,
        `À l\'île d\'Elbe`,
        `À Sainte-Hélène, rocher britannique de l\'Atlantique sud, où il a été déporté après Waterloo`,
        `Aux Invalides, à Paris`
      ],
      correcte: 2,
      explication: `Après Waterloo (18 juin 1815), les vainqueurs ne laissent rien au hasard. Napoléon est déporté à Sainte-Hélène, à 1 900 km de la côte africaine. Six ans de captivité humiliante. Il y dicte ses mémoires à Las Cases — le futur Mémorial, bréviaire du mythe napoléonien. Mort probablement d\'un cancer de l\'estomac, à 51 ans. Ses cendres seront rapatriées aux Invalides en 1840.`
    }
  ]

});
