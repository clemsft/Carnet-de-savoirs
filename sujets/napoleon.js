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
    date_maj: '2026-08-18'
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
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: '2 décembre 1804 : l\'image du sacre',
      params: {
        image: 'images/napoleon--sacre-david.jpg',
        legende: 'Le Sacre de Napoléon par Jacques-Louis David (1805-1807, Louvre) : Napoléon couronne Joséphine, le pape Pie VII réduit au rôle de témoin. Un tableau de propagande autant qu\'un chef-d\'œuvre. (Domaine public)',
        hotspots: []
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
      type: 'widget',
      composant: 'Prediction',
      titre: 'Avant le graphique, ton estimation',
      params: {
        question: 'Sur les 422 000 hommes du corps principal entrés en Russie en juin 1812, combien repassent le Niémen en décembre ?',
        min: 0,
        max: 422000,
        step: 1000,
        valeurInitiale: 200000,
        reponse: 10000,
        unite: 'hommes',
        explication: '**10 000** hommes en état de combattre — soit 2 %. Froid, typhus, faim et cosaques ont fait le reste. Le graphique ci-dessous suit l\'hémorragie étape par étape.'
      }
    },

    {
      type: 'widget',
      composant: 'SchemaAnnote',
      titre: 'Cliquez sur les jalons de la campagne de Russie',
      params: {
        image: 'data:image/png;base64,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',
        legende: 'Les effectifs de la Grande Armée pendant la campagne de Russie, d\'après la carte de Minard (1869).',
        hotspots: [
          { x: 11.0, y: 25.7, label: 'Le départ', description: '422 000 hommes du corps principal franchissent le fleuve — la plus grande armée jamais rassemblée en Europe, vingt nations sous les aigles.' },
          { x: 64.3, y: 71.0, label: 'Moscou', description: '100 000 hommes atteignent une ville vidée et bientôt incendiée. Le tsar ne négocie pas ; l\'hiver, lui, arrive.' },
          { x: 77.7, y: 81.1, label: 'La Berezina', description: 'Le passage du fleuve sous le feu russe, par -20 °C. Les pontonniers du général Éblé sauvent ce qui peut l\'être.' },
          { x: 91.0, y: 83.6, label: 'Le retour', description: '10 000 hommes en état de combattre repassent le Niémen. Le mythe de l\'invincibilité est mort ; l\'Europe entière se lève.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Cent-Jours et Sainte-Hélène',
      contenu_md: `Pendant qu\'à Vienne le congrès des vainqueurs redécoupe l\'Europe, Napoléon, sur Elbe, prépare son retour. Le **1ᵉʳ mars 1815**, il débarque à **Golfe-Juan** avec mille hommes. La marche vers Paris est un prodige : à chaque détachement royal envoyé pour l\'arrêter, il s\'avance seul et déclare : *si quelqu\'un d\'entre vous veut tuer son empereur, me voici*. Les soldats se rangent à sa suite. Louis XVIII fuit. **Vingt jours plus tard**, il est aux Tuileries — sans avoir tiré un coup de feu. Mais la coalition se reforme aussitôt. À **Waterloo**, le **18 juin 1815**, Wellington tient et Blücher arrive à temps. La Garde recule pour la première fois. Cette fois, les vainqueurs ne laissent rien au hasard : Napoléon est déporté à **Sainte-Hélène**, rocher anglais perdu dans l\'Atlantique sud, à 1 900 km de la côte africaine. **Six ans** de captivité humiliante, à dicter ses mémoires à **Las Cases** — qui en feront le *Mémorial*, bréviaire du futur mythe napoléonien. Il meurt le **5 mai 1821**, probablement d\'un cancer de l\'estomac, à 51 ans.`
    },

    {
      type: 'mini-quiz',
      q: 'Pourquoi le blocus continental s\'est-il retourné contre l\'Empire ?',
      reponse: 'Pour être efficace, il fallait fermer **toutes** les côtes européennes au commerce anglais — donc contrôler l\'Europe entière. C\'est lui qui pousse Napoléon dans le piège espagnol (1808) puis vers la Russie (1812), qui rouvrait son commerce avec Londres. L\'arme économique a dicté une stratégie militaire intenable.'
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
  ],

  vocabulaire: [
    {
      terme: 'Consulat',
      definition: `Régime politique français de **1799 à 1804**, instauré par le coup d'État du 18 brumaire. Trois consuls, mais le **Premier Consul** Bonaparte concentre l'essentiel du pouvoir. Période de refonte administrative décisive : préfets, Banque de France, Code civil.`
    },
    {
      terme: 'Code civil',
      definition: `Codification monumentale du droit français promulguée en **1804** : 2 281 articles synthétisant droit romain, coutume et acquis révolutionnaires. *Ma vraie gloire*, dira Napoléon à Sainte-Hélène. Transposé en Belgique, Italie, Égypte, Japon, Louisiane, Québec.`
    },
    {
      terme: 'Préfet',
      definition: `Haut fonctionnaire nommé par le pouvoir central dans chaque **département**, créé par Napoléon en 1800. Courroie de transmission entre Paris et la province, casse l'autonomie des notables locaux. Pilier toujours actif de l'administration française deux siècles plus tard.`
    },
    {
      terme: 'Blocus continental',
      definition: `Stratégie économique décrétée par Napoléon à Berlin en **1806** pour étrangler l'Angleterre : interdire à toute l'Europe le commerce avec elle. Engrenage logique qui mène à la guerre d'Espagne puis à la campagne de Russie — la machine impériale se grippe par sa propre surextension.`
    },
    {
      terme: 'Grande Armée',
      definition: `Nom officiel des forces napoléoniennes à partir de 1805. Innovation majeure : la **manœuvre par corps autonomes**, qui marchent séparés et convergent au son du canon. Saignée fondatrice en Russie : 600 000 partis, ~30 000 revenus.`
    },
    {
      terme: 'Garde impériale',
      definition: `**Élite des élites** de la Grande Armée, recrutée parmi les vétérans : Vieille, Moyenne, Jeune Garde. Réserve gardée pour l'instant décisif. Son recul à Waterloo signe la défaite. *La Garde meurt et ne se rend pas*.`
    },
    {
      terme: 'Légion d\'honneur',
      definition: `Ordre méritocratique créé en **1802**, ouvert à tous — soldat, savant, artiste, industriel. Remplace les ordres aristocratiques d'Ancien Régime. *Il faut donner aux hommes des hochets, c'est avec cela qu'on les mène*, disait son fondateur.`
    },
    {
      terme: 'Concordat',
      definition: `Accord signé en **1801** entre Bonaparte et le pape **Pie VII**. Le catholicisme redevient *religion de la majorité des Français* sans redevenir religion d'État ; l'État nomme les évêques que le pape investit. Réconciliation après dix ans de rupture révolutionnaire.`
    },
    {
      terme: 'Cent-Jours',
      definition: `Période de mars à juin **1815** durant laquelle Napoléon, évadé de l'île d'Elbe, reprend le pouvoir en France sans tirer un coup de feu. S'achève à **Waterloo** (18 juin) et débouche sur la déportation à Sainte-Hélène.`
    },
    {
      terme: 'Sainte-Hélène',
      definition: `Rocher britannique de l'**Atlantique sud**, à 1 900 km de la côte africaine, où Napoléon est déporté après Waterloo. Six ans de captivité humiliante. Il y dicte ses mémoires à Las Cases — le *Mémorial*, bréviaire du futur mythe napoléonien. Meurt le 5 mai 1821.`
    }
  ]

});
