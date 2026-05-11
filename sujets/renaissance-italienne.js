/* ===================================================================
   SUJET — La Renaissance italienne
   ===================================================================
   Florence, les Médicis, et la résurgence de l'Antiquité.
   Domaines : Histoire, Art
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'renaissance-italienne',
    titre: 'La <em>Renaissance</em> italienne',
    domaines: ['Histoire', 'Arts'],
    tags: ['florence', 'médicis', 'léonard', 'michel-ange', 'mécénat', 'humanisme'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['empire-byzantin', 'empire-ottoman', 'rome-antique'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Deux siècles pendant lesquels une poignée de cités italiennes — Florence en tête — réinventent ce qu\'être européen veut dire : redécouverte de l\'Antiquité, invention de la perspective, mécénat des Médicis, génies multiples. Comprendre comment et pourquoi cette explosion culturelle a eu lieu à cet endroit, à ce moment précis.`,

  points_cles: [
    `La **Renaissance** italienne s\'étend grossièrement du début du **XVᵉ siècle** (*Quattrocento*) à la fin du **XVIᵉ siècle** (*Cinquecento*). Le mot a été inventé rétrospectivement au XIXᵉ siècle par l\'historien **Jules Michelet**.`,
    `Son foyer est d\'abord **Florence**, cité-République prospère grâce au commerce de la laine et à la banque, dominée par la famille **Médicis** à partir des années 1430.`,
    `La chute de **Constantinople en 1453** ([[empire-byzantin]]) accélère l\'afflux des **savants grecs byzantins** en Italie, apportant manuscrits et savoir antique — Platon, Aristote, Plotin.`,
    `**Gutenberg** invente l\'imprimerie à caractères mobiles vers **1450** à Mayence. En cinquante ans, l\'Europe imprime **20 millions d\'exemplaires** — révolution comparable à celle d\'Internet.`,
    `La **perspective géométrique**, formalisée par **Brunelleschi** vers 1415 puis théorisée par **Alberti** en 1435, transforme radicalement la peinture occidentale.`,
    `Trois géants dominent le *Cinquecento* : **Léonard de Vinci** (1452-1519), **Michel-Ange** (1475-1564), **Raphaël** (1483-1520). Tous trois actifs à Florence puis à Rome, sous l\'œil de papes mécènes.`,
    `Le **mécénat** est au cœur du modèle : Médicis, papes, princes commandent et financent les œuvres. L\'artiste passe progressivement du **statut d\'artisan** à celui de **génie créateur**.`,
    `La Renaissance s\'éteint progressivement après le **sac de Rome en 1527** et la **Contre-Réforme**. Mais elle aura redéfini la culture européenne pour quatre siècles.`
  ],

  carte_mentale: {
    central: 'renaissance',
    noeuds: [
      { id: 'renaissance', label: 'Renaissance italienne', description: '*Rinascita* — renaissance des arts et des lettres, en référence à l\'Antiquité classique. XVᵉ-XVIᵉ siècles.' },
      { id: 'foyers', label: 'Foyers urbains', description: 'Cités-États italiennes : Florence, Rome, Venise, Milan. Concurrence et émulation.' },
      { id: 'humanisme', label: 'Humanisme', description: 'Redécouverte des textes antiques grecs et latins. L\'homme placé au centre de la pensée.' },
      { id: 'arts', label: 'Arts visuels', description: 'Peinture, sculpture, architecture. Invention de la perspective, étude anatomique, beauté idéale.' },
      { id: 'mecenat', label: 'Mécénat', description: 'Princes, banquiers, papes financent les artistes. Modèle économique sans lequel rien n\'aurait eu lieu.' },
      { id: 'techniques', label: 'Innovations techniques', description: 'Perspective, peinture à l\'huile, imprimerie, fresques monumentales.' },
      { id: 'heritage', label: 'Héritage', description: 'Refondation de l\'art occidental. Modèle éducatif, esthétique et intellectuel pour quatre siècles.' },

      // Foyers
      { id: 'florence', label: 'Florence', description: '**Cité-République** de Toscane. Cœur du *Quattrocento*. Patrie des Médicis, de Brunelleschi, Donatello, Botticelli, Léonard, Michel-Ange.', parent: 'foyers' },
      { id: 'rome', label: 'Rome', description: 'Reprend le leadership au XVIᵉ siècle. Papes mécènes (Jules II, Léon X) commandent la chapelle Sixtine et la basilique Saint-Pierre.', parent: 'foyers' },
      { id: 'venise', label: 'Venise', description: 'Foyer pictural autonome. **Titien**, **Bellini**, **Véronèse**. Couleur plutôt que dessin — école vénitienne caractéristique.', parent: 'foyers' },

      // Arts
      { id: 'leonard', label: 'Léonard de Vinci', description: '**1452-1519**. Peintre (*La Joconde*, *La Cène*), ingénieur, anatomiste, inventeur. Archétype du **génie universel** de la Renaissance.', parent: 'arts' },
      { id: 'michelange', label: 'Michel-Ange', description: '**1475-1564**. Sculpteur (*David*, *Pietà*), peintre (chapelle Sixtine), architecte (coupole de Saint-Pierre). 89 ans d\'activité.', parent: 'arts' },
      { id: 'raphael', label: 'Raphaël', description: '**1483-1520**. Peintre à la grâce parfaite. *L\'École d\'Athènes*. Mort à 37 ans — le talent absolu fauché en plein vol.', parent: 'arts' },

      // Mécénat
      { id: 'medicis', label: 'Les Médicis', description: 'Famille de banquiers florentins. **Cosme** (1389-1464), **Laurent le Magnifique** (1449-1492). Quatre papes Médicis. Mécènes incomparables.', parent: 'mecenat' },

      // Techniques
      { id: 'perspective', label: 'Perspective', description: '**Brunelleschi** la formalise vers 1415, **Alberti** la théorise en 1435 dans *De pictura*. La peinture devient une **fenêtre ouverte sur le monde**.', parent: 'techniques' },
      { id: 'imprimerie', label: 'Imprimerie', description: '**Gutenberg**, Mayence, **vers 1450**. Caractères mobiles métalliques. **20 millions d\'exemplaires** imprimés en Europe avant 1500.', parent: 'techniques' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Pourquoi <em>renaissance</em> ?',
      contenu_md:
`Le mot lui-même a été inventé tardivement. Au XIXᵉ siècle, l\'historien français **Jules Michelet** baptise *Renaissance* la période qui voit, entre 1400 et 1600, l\'Europe — italienne d\'abord — sortir de ce que les humanistes appelaient déjà eux-mêmes le *medio aevo*, l\'âge intermédiaire entre la grandeur antique et leur présent.

L\'idée centrale est simple, et puissante : l\'**Antiquité** gréco-romaine n\'est pas morte, elle a été oubliée pendant mille ans, et il est temps de la **faire renaître**. *Rinascita*, en italien. Cette conscience d\'un retour aux sources, d\'une rupture volontaire avec la culture médiévale, est ce qui caractérise le mieux le mouvement.

Les Renaissants se voient eux-mêmes comme **héritiers directs** de Cicéron, de Virgile, de Platon. Ils étudient la grammaire latine pour parler comme Tite-Live, déterrent des statues antiques pour les imiter, cherchent dans les bibliothèques monastiques poussiéreuses des **manuscrits oubliés** qu\'ils éditent et diffusent. Ce mouvement intellectuel s\'appelle l\'**humanisme** — *studia humanitatis* — et il transforme tout : la pédagogie, la littérature, les arts, et finalement la conception même de ce qu\'est un être humain.`
    },

    {
      type: 'encadre',
      label: 'Antiquité et modernité',
      contenu_md: `Paradoxe fondateur : la Renaissance se définit comme un **retour à l\'Antique**, mais elle est en réalité une **rupture moderne**. En étudiant Platon, on découvre qu\'on peut penser autrement que par Aristote scolastique. En sculptant à l\'antique, on invente un art nouveau. En lisant Cicéron, on construit un républicanisme civique qui prépare lointainement la [[revolution-francaise]]. La Renaissance regarde derrière elle pour mieux inventer ce qui vient.`
    },

    {
      type: 'widget',
      titre: 'Deux siècles, en jalons',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '1397', titre: 'Banque Médicis', description: '**Giovanni di Bicci de\' Medici** fonde à Florence la banque qui fera la fortune de sa famille. Elle financera la Renaissance entière.' },
          { date: '1401', titre: 'Concours de Florence', description: 'Concours pour les portes du baptistère. **Ghiberti** l\'emporte sur **Brunelleschi**. Date traditionnelle de naissance du *Quattrocento*.' },
          { date: '1415', titre: 'Découverte de la perspective', description: '**Brunelleschi** démontre publiquement les lois de la **perspective géométrique** par une expérience devant le baptistère de Florence. Révolution visuelle.' },
          { date: '1436', titre: 'Coupole de Florence', description: 'Brunelleschi achève la **coupole** de Santa Maria del Fiore — 42 mètres de diamètre, sans cintrage. Plus grande coupole depuis le Panthéon romain.' },
          { date: '1450', titre: 'Imprimerie de Gutenberg', description: '**Gutenberg** met au point à Mayence l\'imprimerie à caractères mobiles métalliques. La diffusion du savoir bascule d\'échelle.' },
          { date: '1453', titre: 'Chute de Constantinople', description: '**Mehmet II** prend Constantinople (voir [[empire-byzantin]] et [[empire-ottoman]]). Les **savants grecs byzantins** fuient vers l\'Italie avec leurs manuscrits — Platon, Aristote, les Pères grecs. Accélération de l\'humanisme.' },
          { date: '1469-1492', titre: 'Laurent le Magnifique', description: '**Laurent de Médicis** gouverne Florence. Mécène absolu : Botticelli, le jeune Michel-Ange, Pic de la Mirandole, Ange Politien. Florence rayonne sur toute l\'Europe.' },
          { date: '1503-1519', titre: 'Léonard à Florence puis en France', description: '**Léonard de Vinci** peint *La Joconde* (1503-1506). Termine sa vie en France auprès de **François Iᵉʳ**, au Clos Lucé, où il meurt en 1519.' },
          { date: '1508-1512', titre: 'Plafond de la chapelle Sixtine', description: '**Michel-Ange** peint en quatre ans le **plafond de la chapelle Sixtine** sur commande du pape **Jules II**. 500 m², 343 figures. Œuvre fondatrice du *Cinquecento*.' },
          { date: '1509-1511', titre: 'L\'École d\'Athènes', description: '**Raphaël**, à 26 ans, peint dans les Chambres du Vatican *L\'École d\'Athènes* — synthèse picturale de toute la pensée antique. Aristote, Platon, Pythagore, Euclide.' },
          { date: '6 mai 1527', titre: 'Sac de Rome', description: 'Les troupes impériales de **Charles Quint** mettent Rome à sac. La papauté humiliée, l\'élan créatif brisé. Beaucoup tiennent cette date pour la fin symbolique de la Renaissance.' },
          { date: '1564', titre: 'Mort de Michel-Ange', description: 'Michel-Ange meurt à 89 ans, après six décennies d\'œuvre. La même année naît **Shakespeare** — le flambeau de la culture européenne passe vers le nord.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Florence, <em>cité-laboratoire</em>',
      contenu_md:
`Pourquoi Florence ? Pourquoi pas Paris, Londres, ou même Rome, qui dort à l\'époque sous ses ruines antiques ?

Florence cumule plusieurs avantages décisifs au tournant du XVᵉ siècle. C\'est une **République urbaine**, où le pouvoir n\'est pas héréditaire mais dépend des **corporations** marchandes — comme la *République* romaine de [[rome-antique]] dont les Florentins se réclament explicitement. Elle est immensément riche grâce au **commerce de la laine** et surtout grâce à la **banque** : le **florin** d\'or, frappé en 1252, devient la monnaie de référence en Europe pendant trois siècles. C\'est aussi une cité de petite taille — environ **60 000 habitants** — où tout le monde se croise, où une famille de banquiers comme les **Médicis** peut, par le mécénat, transformer le visage de toute une cité en une génération.

Les **Médicis** ne sont pas nobles. **Cosme** (1389-1464), surnommé *Pater Patriae* — père de la patrie —, est un banquier qui gouverne sans titre officiel, par influence et par or. Son petit-fils **Laurent le Magnifique** (1449-1492) parachève le modèle : protégeant Botticelli, Verrocchio, le jeune Michel-Ange qu\'il fait grandir dans son palais, finançant l\'Académie platonicienne où enseignent **Marsile Ficin** et **Pic de la Mirandole**.

Quatre **Médicis** monteront sur le trône de saint Pierre — quatre **papes Médicis** dont Léon X et Clément VII, qui transposeront le mécénat florentin à Rome. La Renaissance, vue d\'en haut, est en bonne part une **affaire de famille**.`
    },

    {
      type: 'encadre',
      label: 'Le mécène et l\'artiste',
      contenu_md: `À la Renaissance naît un **personnage nouveau** : l\'artiste comme génie individuel, signé, célèbre, capricieux — figure que le Moyen Âge ignorait largement. L\'artisan anonyme des cathédrales gothiques cède la place à des stars : Léonard, Michel-Ange, Raphaël deviennent des **noms propres** européens, leurs vies racontées dans les *Vies des plus excellents peintres, sculpteurs et architectes* de **Giorgio Vasari** (1550), qui invente quasiment le genre de l\'histoire de l\'art. L\'artiste devient *divin* — adjectif courant pour Michel-Ange. C\'est aussi un effet du mécénat : pour exister socialement, un mécène doit s\'attacher des génies — et donc les inventer comme tels.`
    },

    {
      type: 'texte',
      titre: 'L\'apport <em>byzantin</em> et l\'imprimerie',
      contenu_md:
`Deux événements distincts, mais quasi-simultanés au milieu du XVᵉ siècle, démultiplient l\'élan de la Renaissance : la **chute de Constantinople** en 1453, et l\'invention de l\'**imprimerie** vers 1450.

À mesure que l\'Empire byzantin se réduit sous les coups ottomans tout au long du XVᵉ siècle, ses **savants émigrent** vers l\'Italie — souvent à l\'invitation des humanistes ou des papes. **Manuel Chrysoloras** enseigne le grec à Florence dès 1397. **Jean Bessarion**, cardinal d\'origine grecque, lègue à Venise sa colossale **bibliothèque** de plus de 500 manuscrits grecs — fonds qui constitue encore aujourd\'hui le cœur de la Biblioteca Marciana. Après 1453, ces flux s\'accélèrent. Toute la **philosophie grecque antique** — Platon en particulier, jusque-là quasi inconnu en Occident latin — devient accessible.

Pendant ce temps, à Mayence, un orfèvre du nom de **Johannes Gutenberg** met au point vers **1450** un procédé révolutionnaire : des **caractères mobiles métalliques**, fondus en série, recombinables à volonté. La **Bible à 42 lignes**, achevée en 1455, est le premier livre imprimé d\'envergure. En **cinquante ans**, l\'Europe imprime environ **20 millions d\'exemplaires** de livres divers — plus, sans doute, que tout ce que les copistes médiévaux avaient produit en un millénaire.

L\'effet conjoint est explosif. Les textes grecs nouvellement disponibles sont immédiatement **imprimés**, **traduits**, **annotés**, **diffusés** dans toute l\'Europe. **Érasme**, **Thomas More**, **Luther** — toute la culture européenne du XVIᵉ siècle naît de cette conjonction.`
    },

    {
      type: 'widget',
      titre: 'Trois géants du Cinquecento',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: '1452 — 1519',
            titre: 'Léonard de Vinci',
            description: `**Le génie universel.** Peintre (*La Joconde*, *La Cène*, *La Vierge aux rochers*), ingénieur, anatomiste, mathématicien, botaniste, urbaniste, inventeur d\'utopies mécaniques. Plus de **6 000 pages** de carnets manuscrits subsistent — où il écrit en miroir, de droite à gauche. Termine sa vie en France à la cour de **François Iᵉʳ**.`
          },
          {
            tag: '1475 — 1564',
            titre: 'Michel-Ange',
            description: `**La puissance.** Sculpteur d\'abord (*David*, 1504, 5,17 m ; *Pietà*, 1499), il peint sur ordre du pape **Jules II** le plafond de la **chapelle Sixtine** (1508-1512) — 500 m², 343 figures, en quatre ans seul sur ses échafaudages. Couronne sa vie à 71 ans comme architecte de la coupole de **Saint-Pierre**. Travaille **jusqu\'à sa mort**, à 89 ans.`
          },
          {
            tag: '1483 — 1520',
            titre: 'Raphaël',
            description: `**La grâce.** Plus jeune des trois, le plus précoce aussi. Peint à 26 ans *L\'École d\'Athènes* dans les Chambres du Vatican — synthèse de la pensée antique. Atelier prolifique, élégance parfaite, douceur des Vierges. Meurt brusquement à **37 ans** le jour de son anniversaire. Enterré au **Panthéon** de Rome.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>perspective</em>, révolution du regard',
      contenu_md:
`Avant la Renaissance, la peinture occidentale ignore largement la **profondeur**. Les fonds dorés byzantins, les figures hiératiques médiévales, n\'imitent pas l\'espace réel : elles symbolisent un ordre sacré. Vers **1415**, à Florence, **Filippo Brunelleschi** — celui-là même qui construira la coupole — démontre publiquement, par une expérience visuelle saisissante, que les lignes parallèles convergent vers un **point de fuite** unique, à hauteur d\'œil. C\'est la naissance de la **perspective géométrique**.

En **1435**, **Leon Battista Alberti** — architecte, mathématicien, théoricien — formalise la méthode dans son traité *De pictura*. La peinture, écrit-il, doit être pensée comme une *« fenêtre ouverte »* sur le monde. Les peintres apprennent à construire géométriquement leurs scènes — **Masaccio**, dès les années 1420, est le premier à appliquer rigoureusement les règles. **Piero della Francesca** écrit lui-même un traité (*De prospectiva pingendi*). **Dürer** la diffuse en Allemagne.

L\'effet est immense. La peinture devient **mathématique**. Elle suppose de l\'**anatomie** (pour faire des corps justes), de la **géométrie** (pour la perspective), de l\'**optique** (pour la lumière). Le peintre devient *intellectuel* — non plus simple artisan. Le statut social bondit. **Léonard** lui-même tient à se dire *pittore-filosofo*, peintre-philosophe.`
    },

    {
      type: 'widget',
      titre: 'Quatre innovations clés de la Renaissance',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `La perspective géométrique`,
            description: `Formalisée par **Brunelleschi** (1415) et théorisée par **Alberti** (1435). Donne à la peinture une **profondeur mathématique** réelle. Toute la peinture occidentale jusqu\'à Cézanne en dépend.`
          },
          {
            titre: `La peinture à l\'huile`,
            description: `Importée des **Flandres** (van Eyck, années 1430). Permet une **précision** et une **luminosité** inaccessibles à la tempera médiévale. Glacis, transparences, modelés subtils — tout l\'univers technique des grands maîtres en dépend.`
          },
          {
            titre: `L\'imprimerie`,
            description: `**Gutenberg**, vers 1450. Démultiplie la diffusion des textes — et donc des **idées**. Sans l\'imprimerie, ni l\'humanisme ni la Réforme ni la science moderne n\'auraient été possibles à cette échelle.`
          },
          {
            titre: `L\'étude anatomique`,
            description: `**Léonard** dissèque plus de **30 cadavres** humains (souvent dans la clandestinité). **Michel-Ange** étudie l\'anatomie de manière obsessionnelle. Le corps humain devient un objet d\'étude scientifique — préfigurant la médecine moderne.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>fin</em> d\'un moment',
      contenu_md:
`La Renaissance italienne ne s\'arrête pas brutalement, mais s\'éteint progressivement à partir du second tiers du XVIᵉ siècle.

Plusieurs causes convergent. Le **sac de Rome** en **1527** par les troupes impériales de **Charles Quint** humilie la papauté, ruine les ateliers, disperse les artistes. La **Contre-Réforme** catholique, déclenchée par la rupture luthérienne (1517) et codifiée au **concile de Trente** (1545-1563), réimpose un contrôle moral et théologique sur les images — l\'audace nue des nus michelangelesques devient suspecte (les caleçons seront ajoutés aux corps de la chapelle Sixtine par décret). Les **guerres d\'Italie** (1494-1559) ruinent les cités. La Méditerranée perd sa centralité économique au profit des **routes atlantiques** des grandes découvertes.

Mais l\'héritage est immense. La Renaissance a inventé l\'**artiste moderne**, formalisé la **perspective**, fondé l\'**humanisme**, lancé l\'**imprimerie**, redonné l\'Antiquité à l\'Europe. Le modèle italien rayonne dans toute l\'Europe — Renaissance française sous **François Iᵉʳ** (qui accueille Léonard à Amboise), Renaissance anglaise sous **Élisabeth Iʳᵉ**, *Siglo de Oro* espagnol. Pour quatre siècles, l\'**idéal de la** *Bildung* — formation humaniste complète, étude des classiques, équilibre du corps et de l\'esprit — sera celui de toute l\'élite européenne.

Et lointainement, c\'est aussi de Florence que viennent **les Lumières** : sans la libération humaniste de la pensée, sans la diffusion imprimée des textes, ni Voltaire ni Kant n\'auraient été possibles.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le mot "Renaissance" a été utilisé dès le XVᵉ siècle par les artistes italiens eux-mêmes.',
      reponse: false,
      explication: 'Faux. Le mot "Renaissance" a été inventé rétrospectivement au XIXᵉ siècle par l\'historien français Jules Michelet. Les humanistes du XVᵉ siècle parlaient plutôt de "rinascita" et avaient conscience de sortir d\'un "medio aevo" (âge intermédiaire) entre l\'Antiquité et leur présent, mais le terme moderne est tardif.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces événements de la Renaissance italienne dans l\'ordre chronologique :',
      items: [
        'Fondation de la banque Médicis à Florence',
        'Brunelleschi démontre les lois de la perspective géométrique',
        'Invention de l\'imprimerie par Gutenberg à Mayence',
        'Chute de Constantinople, fuite des savants grecs vers l\'Italie',
        'Michel-Ange peint le plafond de la chapelle Sixtine',
        'Sac de Rome par les troupes de Charles Quint'
      ],
      explication: 'De la banque Médicis (1397) qui financera tout, à la perspective de Brunelleschi (1415), à l\'imprimerie (1450), à l\'arrivée des manuscrits grecs après 1453, au chef-d\'œuvre michelangelesque (1508-1512), jusqu\'au sac de Rome qui brise l\'élan créatif (1527).'
    },
    {
      type: 'associer',
      q: 'Associe chaque artiste à une de ses œuvres majeures :',
      paires: [
        { gauche: 'Léonard de Vinci', droite: 'La Joconde (~1503-1506)' },
        { gauche: 'Michel-Ange', droite: 'Plafond de la chapelle Sixtine (1508-1512)' },
        { gauche: 'Raphaël', droite: 'L\'École d\'Athènes (1509-1511)' },
        { gauche: 'Brunelleschi', droite: 'Coupole de Santa Maria del Fiore (1436)' },
        { gauche: 'Botticelli', droite: 'Protégé de Laurent le Magnifique à Florence' }
      ],
      explication: 'Cinq créateurs, cinq jalons. Léonard archétype du génie universel ; Michel-Ange, 500 m² et 343 figures en quatre ans à la Sixtine ; Raphaël, mort à 37 ans après avoir peint la synthèse picturale de la pensée antique ; Brunelleschi, 42 mètres de coupole sans cintrage ; Botticelli au cœur du cercle médicéen.'
    },
    {
      q: `Sur quelle période s\'étend grossièrement la Renaissance italienne ?`,
      options: [
        `XIᵉ-XIIᵉ siècles`,
        `XVᵉ-XVIᵉ siècles (Quattrocento et Cinquecento)`,
        `XVIIᵉ-XVIIIᵉ siècles`,
        `XIIIᵉ-XIVᵉ siècles`
      ],
      correcte: 1,
      explication: `La Renaissance court globalement du début du XVᵉ siècle (Quattrocento, "années 1400" en italien) à la fin du XVIᵉ siècle (Cinquecento). Le mot lui-même a été popularisé au XIXᵉ siècle par Jules Michelet.`
    },
    {
      q: `Quelle famille de banquiers florentins a joué un rôle décisif comme mécène de la Renaissance ?`,
      options: [
        `Les Habsbourg`,
        `Les Médicis`,
        `Les Borgia`,
        `Les Sforza`
      ],
      correcte: 1,
      explication: `Les Médicis, banquiers florentins enrichis par le commerce et la banque, ont gouverné Florence à partir des années 1430 (avec Cosme, puis Laurent le Magnifique). Quatre Médicis seront papes. Mécènes incomparables, ils financent Botticelli, Michel-Ange, et l\'Académie platonicienne.`
    },
    {
      q: `En quoi la chute de Constantinople en 1453 a-t-elle nourri la Renaissance italienne ?`,
      options: [
        `Elle a provoqué une guerre en Italie`,
        `Elle a accéléré la fuite des savants grecs byzantins vers l\'Italie, avec leurs manuscrits antiques`,
        `Elle a interrompu le commerce italien`,
        `Elle a converti l\'Italie à l\'orthodoxie`
      ],
      correcte: 1,
      explication: `Avec la chute de Constantinople (voir empire-byzantin), des érudits byzantins comme Bessarion ou Manuel Chrysoloras émigrent en Italie avec leurs manuscrits. Toute la philosophie grecque antique — Platon notamment — devient accessible à l\'Italie humaniste.`
    },
    {
      q: `Qui invente l\'imprimerie à caractères mobiles vers 1450 ?`,
      options: [
        `Léonard de Vinci`,
        `Johannes Gutenberg`,
        `Alde Manuce`,
        `Filippo Brunelleschi`
      ],
      correcte: 1,
      explication: `Johannes Gutenberg, orfèvre de Mayence, met au point vers 1450 le procédé des caractères métalliques mobiles. La Bible à 42 lignes (1455) est son grand œuvre. En cinquante ans, l\'Europe imprimera environ 20 millions d\'exemplaires.`
    },
    {
      q: `Qui formalise la perspective géométrique vers 1415 à Florence ?`,
      options: [
        `Léonard de Vinci`,
        `Michel-Ange`,
        `Filippo Brunelleschi`,
        `Raphaël`
      ],
      correcte: 2,
      explication: `Brunelleschi démontre publiquement vers 1415 les lois de la perspective devant le baptistère de Florence. Alberti théorisera la méthode en 1435 dans son traité De pictura. Masaccio sera le premier peintre à l\'appliquer rigoureusement.`
    },
    {
      q: `Qui a peint le plafond de la chapelle Sixtine entre 1508 et 1512 ?`,
      options: [
        `Léonard de Vinci`,
        `Raphaël`,
        `Michel-Ange`,
        `Botticelli`
      ],
      correcte: 2,
      explication: `Sur commande du pape Jules II, Michel-Ange peint en quatre ans le plafond de la chapelle Sixtine — 500 m², 343 figures, en grande partie seul sur ses échafaudages. Œuvre fondatrice du Cinquecento.`
    },
    {
      q: `Quel événement de 1527 marque le déclin symbolique de la Renaissance romaine ?`,
      options: [
        `La mort de Léonard de Vinci`,
        `Le sac de Rome par les troupes de Charles Quint`,
        `Le sac de Constantinople`,
        `L\'incendie de la chapelle Sixtine`
      ],
      correcte: 1,
      explication: `Le 6 mai 1527, les troupes impériales de Charles Quint, impayées, mettent Rome à sac pendant des semaines. La papauté humiliée, les ateliers ruinés, les artistes dispersés. Beaucoup d\'historiens y voient la fin symbolique du grand élan de la Renaissance.`
    },
    {
      q: `Lequel de ces trois géants meurt le plus jeune ?`,
      options: [
        `Léonard de Vinci, à 67 ans`,
        `Michel-Ange, à 89 ans`,
        `Raphaël, à 37 ans`,
        `Botticelli, à 65 ans`
      ],
      correcte: 2,
      explication: `Raphaël meurt brutalement le 6 avril 1520, le jour de son trente-septième anniversaire. Le talent absolu fauché en plein vol. Il est enterré au Panthéon de Rome. Léonard est mort un an plus tôt en France ; Michel-Ange vivra jusqu\'en 1564.`
    }
  ]

});
