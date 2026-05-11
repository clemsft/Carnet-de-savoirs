/* ===================================================================
   SUJET — Les cathédrales gothiques
   ===================================================================
   Suger, l'arc-boutant, et la lumière divine du XIIᵉ siècle.
   Domaines : Architecture, Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'cathedrales-gothiques',
    titre: 'Les <em>cathédrales gothiques</em>',
    domaines: ['Architecture', 'Histoire'],
    tags: ['moyen âge', 'arc-boutant', 'vitrail', 'chartres', 'notre-dame', 'suger'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['renaissance-italienne', 'empire-byzantin', 'paris-geographie'],
    date_creation: '2026-05-12',
    date_maj: '2026-05-12'
  },

  resume: `Comment, au milieu du XIIᵉ siècle, une poignée de chantiers nord-français invente un art nouveau — vertical, ajouré, lumineux — qui couvrira l\'Europe de cathédrales pendant quatre siècles. Trois innovations techniques, une théologie de la lumière, des chantiers démesurés, et l\'incendie de 2019 qui a rappelé combien ces édifices sont vivants.`,

  points_cles: [
    `Le mot **gothique** est péjoratif : forgé à la Renaissance par **Vasari** pour qualifier de "barbare" — *à la manière des Goths* — l\'art médiéval qu\'on cherchait à dépasser. Les contemporains, eux, parlaient d\'*opus francigenum*, l\'**œuvre française**.`,
    `Le coup d\'envoi est donné vers **1140** par l\'abbé **Suger** à l\'abbatiale de **Saint-Denis**, près de Paris. Premier édifice où les trois innovations gothiques sont rassemblées au service d\'une vision théologique.`,
    `Trois innovations techniques rendent tout possible : l\'[arc brisé]{accent} (qui répartit mieux les charges), la [croisée d\'ogives]{accent} (qui concentre les forces en quatre points), et l\'**arc-boutant** (qui reporte la poussée latérale à l\'extérieur).`,
    `Conséquence : les murs deviennent **non porteurs**, ouverts en immenses **verrières**. Les hauteurs s\'envolent — **Beauvais** atteint **48 m** sous voûte, à la limite de l\'écroulement.`,
    `Les **vitraux** ne décorent pas : ils **enseignent** (Bible des pauvres) et surtout font entrer la *lux divina* — la lumière divine — selon la théologie de **Suger**, inspirée du Pseudo-Denys l\'Aréopagite.`,
    `Un chantier de cathédrale dure de **50 à 200 ans**, mobilise des centaines d\'**ouvriers itinérants** (les *compagnons*), et coûte l\'équivalent du **budget annuel** de tout un royaume. Financement par dîme, indulgences, dons.`,
    `Le **gothique flamboyant** (XVᵉ siècle) marque la dernière phase : exubérance ornementale, fenêtres en flammèches, voûtes en réseau. La [[renaissance-italienne]] viendra clore cet âge.`,
    `**L\'incendie de Notre-Dame de Paris** le **15 avril 2019** a détruit la charpente et la flèche de Viollet-le-Duc. Reconstruction "à l\'identique" achevée en **décembre 2024**, avec une charpente en chêne et la même flèche.`
  ],

  carte_mentale: {
    central: 'gothique',
    noeuds: [
      { id: 'gothique', label: 'Cathédrale gothique', description: '*Opus francigenum* — œuvre française. Art religieux né en Île-de-France vers 1140, diffusé sur toute l\'Europe pendant quatre siècles.' },
      { id: 'origine', label: 'Origines', description: 'L\'abbé Suger, Saint-Denis, vers 1140. Synthèse d\'éléments techniques antérieurs au service d\'une théologie nouvelle de la lumière.' },
      { id: 'techniques', label: 'Innovations techniques', description: 'Trois inventions structurales conjointes qui libèrent les murs de la fonction porteuse.' },
      { id: 'edifices', label: 'Grands édifices', description: 'Chartres, Notre-Dame de Paris, Reims, Amiens, Beauvais, Cologne, Strasbourg. Hauteurs et richesses comparables.' },
      { id: 'vitraux', label: 'Vitraux et lumière', description: 'La paroi devient verre coloré. Théologie de la **lux divina** : Dieu se manifeste par la lumière qui traverse la matière.' },
      { id: 'chantiers', label: 'Chantiers', description: 'Durée 50-200 ans, compagnonnages itinérants, financement par dîme, indulgences et dons. Économie médiévale entière mobilisée.' },
      { id: 'evolution', label: 'Évolutions stylistiques', description: 'Gothique primitif, classique, rayonnant, flamboyant. Du XIIᵉ au XVᵉ siècle, sophistication croissante.' },
      { id: 'aujourd-hui', label: 'Aujourd\'hui', description: 'Restauration au XIXᵉ siècle (Viollet-le-Duc), incendie de Notre-Dame en 2019, reconstruction 2019-2024.' },

      // Techniques
      { id: 'arc-brise', label: 'Arc brisé', description: '**Arc en pointe** plutôt que demi-cercle. Répartit mieux les charges, plus haut pour la même portée. Hérité de l\'architecture islamique.', parent: 'techniques' },
      { id: 'ogives', label: 'Croisée d\'ogives', description: 'Voûte sur **nervures diagonales** qui concentrent les forces en **quatre points d\'appui**. Les remplissages (voûtains) ne portent plus, ils ne font que fermer.', parent: 'techniques' },
      { id: 'arc-boutant', label: 'Arc-boutant', description: '**Arc extérieur** qui reçoit la poussée latérale des voûtes et la reporte sur un **culée** lointaine. Libère les murs de toute fonction porteuse.', parent: 'techniques' },

      // Édifices
      { id: 'saint-denis', label: 'Saint-Denis', description: '**Vers 1140**. Premier édifice gothique. Œuvre de l\'abbé **Suger**. Nécropole des rois de France.', parent: 'edifices' },
      { id: 'chartres', label: 'Chartres', description: 'Reconstruite après l\'incendie de **1194**. Chef-d\'œuvre du gothique classique. **172 vitraux** d\'origine conservés — cas unique.', parent: 'edifices' },
      { id: 'notre-dame', label: 'Notre-Dame de Paris', description: 'Commencée en **1163**. Voir [[paris-geographie]]. Cœur géographique et symbolique du royaume. Incendie le 15 avril 2019, rouverte en décembre 2024.', parent: 'edifices' },
      { id: 'reims', label: 'Reims', description: '**Cathédrale du sacre** des rois de France depuis Clovis. Reconstruite après 1211. Façade ornée de plus de **2 300 statues**.', parent: 'edifices' },
      { id: 'amiens', label: 'Amiens', description: 'Plus **vaste** cathédrale gothique de France : 200 000 m³, 42 m sous voûte. Construction rapide (1220-1270).', parent: 'edifices' },
      { id: 'cologne', label: 'Cologne', description: 'Commencée en **1248**, achevée en **1880**. Plus haute façade du monde à son achèvement (157 m). Diffusion allemande du gothique français.', parent: 'edifices' },

      // Vitraux
      { id: 'suger', label: 'Suger', description: '**Abbé de Saint-Denis** (1122-1151). Théoricien de la **lux divina**. Conseiller de Louis VI et Louis VII. Père intellectuel du gothique.', parent: 'vitraux' },
      { id: 'rose', label: 'Rosaces', description: 'Immenses **vitraux circulaires** au-dessus des portails. À Notre-Dame de Paris, 13 m de diamètre. Symbolique mariale et cosmique.', parent: 'vitraux' },

      // Évolution
      { id: 'flamboyant', label: 'Flamboyant', description: '**XVᵉ siècle**. Exubérance ornementale : fenêtres en flammèches, voûtes en réseau, gâbles fleuris. Saint-Maclou de Rouen, Sainte-Chapelle de Vincennes.', parent: 'evolution' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Pourquoi <em>gothique</em> ?',
      contenu_md:
`Le mot lui-même est une **insulte rétroactive**. Au XVIᵉ siècle, en pleine [[renaissance-italienne]], **Giorgio Vasari** qualifie de *manière gothique* — *alla maniera dei Goti*, à la manière des Goths — cette architecture médiévale qu\'il juge **barbare**, désordonnée, étrangère à l\'idéal antique retrouvé. Pour lui et ses contemporains, c\'est le style des envahisseurs qui ont détruit Rome. Le terme reste péjoratif jusqu\'au XIXᵉ siècle, où les Romantiques le réhabilitent.

Les hommes du Moyen Âge, eux, n\'ont jamais parlé de gothique. Ils disaient *opus francigenum* — l\'**œuvre française** — parce qu\'ils savaient parfaitement d\'où venait cette manière nouvelle de bâtir : d\'**Île-de-France**, vers 1140, dans le rayon d\'une centaine de kilomètres autour de Paris. C\'est de là que le style essaime, par les chantiers, vers la Champagne, la Normandie, l\'Angleterre, les Flandres, le Saint-Empire, l\'Espagne, l\'Italie même.

Quatre siècles durant — du milieu du XIIᵉ au début du XVIᵉ — cet art religieux dominera l\'Europe. Il laissera derrière lui une concentration inouïe de chefs-d\'œuvre : on estime à plus de **2 000** les édifices gothiques majeurs encore debout, des cathédrales monumentales aux humbles églises paroissiales.`
    },

    {
      type: 'encadre',
      label: 'Saint-Denis, acte de naissance',
      contenu_md: `Tout commence à l\'abbatiale de **Saint-Denis**, vers **1140**, dans la banlieue nord de Paris. L\'abbé **Suger** (1081-1151), conseiller des rois Louis VI et Louis VII, entreprend la reconstruction du chœur de son abbaye — nécropole des rois de France. Il rassemble pour la première fois, dans un même édifice et avec une intention théologique claire, les trois innovations techniques — [arc brisé]{accent}, [croisée d\'ogives]{accent}, contreforts saillants — qui circulaient déjà séparément dans le roman tardif. Le résultat est si saisissant que **vingt évêques** se déplacent pour la consécration, et que dans la décennie qui suit, les chantiers du même type s\'ouvrent à Sens, Noyon, Laon, Senlis, Paris.`
    },

    {
      type: 'widget',
      titre: 'Quatre siècles, en jalons',
      composant: 'Frise',
      params: {
        evenements: [
          { date: 'vers 1140', titre: 'Saint-Denis', description: 'L\'abbé **Suger** reconstruit le chœur de son abbatiale près de Paris. Premier édifice gothique. Théologie de la **lux divina** : Dieu se manifeste par la lumière.' },
          { date: '1163', titre: 'Notre-Dame de Paris', description: 'Maurice de Sully pose la première pierre de **Notre-Dame de Paris**. Chantier qui durera près de deux siècles.' },
          { date: '1194', titre: 'Incendie de Chartres', description: 'La cathédrale de **Chartres** brûle. Reconstruite en seulement 26 ans, elle devient le **chef-d\'œuvre du gothique classique** — 172 vitraux conservés.' },
          { date: '1211', titre: 'Reims', description: 'Chantier de la **cathédrale du sacre** des rois de France. Façade aux 2 300 statues. La verticalité gothique atteint sa maturité.' },
          { date: '1220-1270', titre: 'Amiens', description: '**Cathédrale d\'Amiens** : 200 000 m³, 42 m sous voûte. La plus vaste de France, bâtie en cinquante ans seulement — rapidité exceptionnelle.' },
          { date: '1248', titre: 'Cologne', description: 'Première pierre de la **cathédrale de Cologne**. Diffusion du gothique français dans le Saint-Empire. Le chantier ne s\'achèvera qu\'en 1880.' },
          { date: '1284', titre: 'Effondrement de Beauvais', description: 'La voûte du chœur de **Beauvais** (48 m sous clé — record absolu) s\'effondre douze ans après son achèvement. La limite physique du gothique est atteinte.' },
          { date: 'XVᵉ siècle', titre: 'Gothique flamboyant', description: 'Dernière phase : **fenêtres en flammèches**, voûtes en réseau, gâbles fleuris. Saint-Maclou de Rouen, Sainte-Chapelle de Vincennes.' },
          { date: 'vers 1500', titre: 'Fin d\'un cycle', description: 'La [[renaissance-italienne]] gagne la France. Le gothique passe de mode. Les chantiers restants s\'achèvent en style classique ou restent inachevés.' },
          { date: 'XIXᵉ siècle', titre: 'Restaurations romantiques', description: '**Viollet-le-Duc** restaure Notre-Dame de Paris, Carcassonne, Vézelay, Pierrefonds. Réhabilitation savante du gothique, parfois inventive.' },
          { date: '1880', titre: 'Achèvement de Cologne', description: 'Six siècles après la première pierre, la **cathédrale de Cologne** est achevée. Sa façade, 157 m, est alors la plus haute du monde.' },
          { date: '15 avril 2019', titre: 'Incendie de Notre-Dame', description: 'Le feu détruit la charpente médiévale ("la forêt") et la **flèche** de Viollet-le-Duc. Cinq ans de chantier : réouverture le **7 décembre 2024**.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>trois innovations</em> structurelles',
      contenu_md:
`Le gothique n\'est pas une question de style décoratif — c\'est avant tout une **révolution structurelle**. Trois inventions, combinées, transforment radicalement ce qu\'on peut faire en pierre.

D\'abord l\'**[arc brisé]{accent}** : un arc en pointe plutôt qu\'en demi-cercle. Sa courbe plus tendue redirige les forces davantage vers le bas, moins sur les côtés. Pour une même portée, on peut monter plus haut. Cette forme, les Cisterciens l\'ont apprise en Orient au cours de la deuxième croisade — elle vient en partie de l\'architecture islamique, des mosquées seldjoukides et fatimides.

Ensuite la **[croisée d\'ogives]{accent}** : on remplace la voûte continue (en berceau ou en arête) par un squelette de **nervures diagonales** — les *ogives* — qui se croisent au sommet. Les remplissages, les *voûtains*, deviennent légers, ils ne portent plus eux-mêmes : ils se contentent de fermer entre les nervures. Toute la charge se concentre désormais en **quatre points** d\'appui par travée. Les murs entre ces points peuvent être évidés.

Enfin l\'**arc-boutant** : un arc extérieur, en plein air, qui reçoit la poussée latérale des voûtes et la reporte sur une **culée** — un pilier massif planté loin du mur. Le mur, soulagé, peut s\'ouvrir en immenses baies. Cette pièce capitale apparaît dans le dernier tiers du XIIᵉ siècle, à Notre-Dame de Paris notamment.

L\'effet combiné est saisissant. À Sainte-Sophie de Constantinople ([[empire-byzantin]]), grand modèle byzantin du VIᵉ siècle, les murs sont **épais**, les ouvertures rares, l\'intérieur sombre malgré ses coupoles. Dans une cathédrale gothique, les **murs disparaissent** — il ne reste qu\'une dentelle de pierre tendue entre les piliers, le reste devient verre.`
    },

    {
      type: 'widget',
      titre: 'Les trois innovations gothiques',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `L\'arc brisé`,
            description: `Arc **en pointe** plutôt qu\'en demi-cercle. Pour une même portée, il monte plus haut et redirige les forces vers le bas plutôt que sur les côtés. Inspiré de l\'**architecture islamique** rencontrée pendant les croisades. Diffusé en Europe par les Cisterciens à partir du début du XIIᵉ siècle.`
          },
          {
            titre: `La croisée d\'ogives`,
            description: `Voûte sur **nervures diagonales** qui se croisent au sommet. Les forces se concentrent en **quatre points d\'appui** par travée. Les voûtains entre les nervures deviennent légers, non porteurs. Conséquence radicale : les **murs sont libérés** de la fonction structurelle.`
          },
          {
            titre: `L\'arc-boutant`,
            description: `Arc **extérieur** qui reçoit la poussée latérale des voûtes — celle qui voudrait écarter les murs vers l\'extérieur — et la reporte sur une **culée** massive plantée à distance. Apparaît au dernier tiers du XIIᵉ siècle, sans doute à Notre-Dame de Paris. Sans arc-boutant, pas de murs ajourés.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>lumière divine</em> et les vitraux',
      contenu_md:
`Si les cathédrales gothiques sont si hautes, si ajourées, c\'est qu\'elles répondent à une **théologie**. L\'abbé **Suger** est marqué par les écrits du **Pseudo-Denys l\'Aréopagite** — un mystique chrétien du VIᵉ siècle, longtemps confondu avec le saint patron de l\'abbaye, ce qui lui donne une autorité immense à Saint-Denis. Pour cette tradition néoplatonicienne, **Dieu est lumière**, et toute lumière visible n\'est qu\'un reflet matériel de la *lux divina* — la lumière divine, intelligible, qui est la substance même du Bien.

D\'où le programme de Suger : ouvrir les murs, faire entrer la lumière, mais **la transfigurer** en passant par des **vitraux** colorés. La lumière qui pénètre dans la cathédrale n\'est plus la simple clarté du jour : elle est *transmuée*, teintée, comme passée par un autre monde. Le fidèle qui entre est physiquement *baigné* dans cette lumière colorée — et donc dans la présence divine.

Les vitraux n\'ont donc pas qu\'une fonction d\'éclairage ou de **catéchisme illustré** (la "Bible des pauvres", pour les fidèles illettrés) : ils sont l\'**interface entre deux mondes**. C\'est ce qui explique l\'investissement démesuré qu\'on y consacre. À **Chartres**, les **172 vitraux** d\'origine couvrent **2 700 m²** — cas unique au monde, miraculeusement conservé. Le *bleu de Chartres*, en particulier, doit sa profondeur à des recettes verrières perdues qu\'on ne sait toujours pas reproduire à l\'identique.`
    },

    {
      type: 'widget',
      titre: 'Cinq cathédrales emblématiques',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Chartres — 37 m',
            titre: 'Chartres',
            description: `Reconstruite après l\'incendie de **1194** en seulement **26 ans** — rapidité exceptionnelle. **Chef-d\'œuvre du gothique classique**. Seule cathédrale à conserver ses **172 vitraux d\'origine** sur 2 700 m². Le célèbre *bleu de Chartres* reste un mystère technique.`
          },
          {
            tag: 'Paris — 33 m',
            titre: 'Notre-Dame de Paris',
            description: `Commencée en **1163** sur l\'île de la Cité par l\'évêque Maurice de Sully. Voir [[paris-geographie]]. Berceau de l\'**arc-boutant**. Restaurée par Viollet-le-Duc au XIXᵉ siècle. Incendie en **2019**, rouverte le **7 décembre 2024**.`
          },
          {
            tag: 'Reims — 38 m',
            titre: 'Reims',
            description: `**Cathédrale du sacre** des rois de France depuis Clovis — 25 sacres au total. Reconstruite à partir de **1211**. Façade ornée de plus de **2 300 statues** : le programme sculpté le plus complet du gothique. Gravement bombardée en 1914.`
          },
          {
            tag: 'Amiens — 42 m',
            titre: 'Amiens',
            description: `Plus **vaste** cathédrale gothique de France — **200 000 m³**, deux fois Notre-Dame de Paris. Construite très rapidement (**1220-1270**), d\'une grande unité stylistique. Inscrite au patrimoine de l\'UNESCO.`
          },
          {
            tag: 'Cologne — 43 m',
            titre: 'Cologne',
            description: `**Plus grande cathédrale gothique du nord de l\'Europe**. Première pierre en **1248**, chantier achevé en **1880** — six siècles. À son achèvement, sa façade de 157 m est la **plus haute du monde**. Diffusion allemande du gothique français.`
          },
          {
            tag: 'Beauvais — 48 m',
            titre: 'Beauvais',
            description: `**Record absolu** de hauteur sous voûte : **48 m**, soit un immeuble de 16 étages. Le chœur s\'effondre une première fois en **1284**, douze ans après achèvement. Jamais terminée. Limite physique du gothique atteinte ici.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>chantiers</em> : un siècle de travaux',
      contenu_md:
`Construire une cathédrale gothique est l\'**entreprise industrielle** la plus considérable du Moyen Âge. Un chantier dure couramment **50 à 100 ans** — souvent davantage. Cologne, on l\'a vu, demandera six siècles. Reims, près d\'un siècle et demi. Notre-Dame de Paris, près de deux siècles. Aucun architecte ne voit l\'achèvement de son œuvre ; aucun évêque commanditaire non plus.

Les chantiers mobilisent des centaines d\'**ouvriers itinérants** organisés en **compagnonnages** — appareilleurs, tailleurs de pierre, sculpteurs, charpentiers, plombiers, verriers, vitriers. Ces hommes circulent d\'un grand chantier à l\'autre, d\'Île-de-France en Champagne, de Champagne en Allemagne. C\'est par eux que les techniques se diffusent. Les meilleurs maîtres d\'œuvre — **Villard de Honnecourt**, **Pierre de Montreuil**, **Jean d\'Orbais** — laissent leur nom à la postérité.

Le **financement** est colossal. Une cathédrale coûte plusieurs années de **budget royal**. On y parvient par accumulation : **dîme** ecclésiastique (un dixième des revenus du diocèse), **donations** des grands, **indulgences** vendues aux fidèles (remise de peine dans l\'au-delà contre une offrande), parfois **expositions** des **reliques** qui attirent des pèlerins par dizaines de milliers. À Chartres, c\'est le voile de la Vierge, sauvé miraculeusement de l\'incendie de 1194, qui finance la reconstruction.

La cathédrale dépasse de loin sa fonction religieuse : c\'est aussi un **équipement civique** majeur. On y abrite les **archives municipales**, on y tient des **réunions politiques**, on y donne refuge aux malades, on y célèbre les **sacres** et les serments. Elle est, littéralement, le **cœur** matériel et symbolique de la cité.`
    },

    {
      type: 'encadre',
      label: 'Le gothique flamboyant',
      contenu_md: `Le **XVᵉ siècle** voit le gothique pousser sa logique ornementale jusqu\'à l\'extrême — c\'est la phase **flamboyante**, ainsi nommée parce que les **remplages** des fenêtres dessinent des **flammèches** ondulantes. Les voûtes se compliquent en **réseaux** étoilés ou en **liernes et tiercerons**. Les gâbles fleurissent, les pinacles se multiplient, les portails s\'enchevêtrent. Saint-Maclou de Rouen, la Sainte-Chapelle de Vincennes, la cathédrale de Quimper en sont des exemples. C\'est une exubérance virtuose, parfois inquiète, à la veille de l\'arrivée des modèles classiques italiens. Quand la [[renaissance-italienne]] gagne la France vers 1500, le gothique s\'éteint sans héritier direct.`
    },

    {
      type: 'texte',
      titre: 'Notre-Dame, <em>2019</em>',
      contenu_md:
`Le **15 avril 2019**, vers 18h50, un incendie se déclare dans les combles de **Notre-Dame de Paris**. Le feu prend dans la charpente — un treillis de **1 300 chênes** abattus au XIIᵉ siècle, surnommée *la forêt*. En quelques heures, la charpente entière est dévorée, la **flèche** de Viollet-le-Duc — chef-d\'œuvre du XIXᵉ siècle néogothique, 96 mètres de plomb et de chêne — s\'effondre dans la croisée du transept. Les voûtes de pierre, elles, résistent — sauf à trois endroits où elles s\'éventrent. Les **vitraux**, les **œuvres d\'art** majeures, les **deux tours** sont sauvés. Mais la cathédrale est meurtrie au cœur.

Dans les jours qui suivent, près d\'**un milliard d\'euros** sont promis par des donateurs du monde entier. Le président de la République promet une reconstruction en **cinq ans**. Le débat fait rage : reconstruire à l\'identique, ou tenter un geste contemporain ? On retient finalement l\'**identique** — flèche de Viollet-le-Duc reproduite, charpente reconstituée en chêne selon les techniques médiévales, pour réveiller le savoir-faire des compagnons.

Le chantier mobilise **plus de 1 000 personnes** : archéologues, charpentiers, tailleurs de pierre, doreurs, vitriers, ingénieurs. On abat **2 000 chênes** dans les forêts françaises. La cathédrale rouvre ses portes le **7 décembre 2024**, devant des dizaines de chefs d\'État. Le délai de cinq ans a été tenu — exploit logistique sans précédent pour un monument de cette ampleur. Notre-Dame est redevenue ce qu\'elle a toujours été : un **organisme vivant**, transmis de chantier en chantier, jamais tout à fait achevé.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le mot "gothique" était utilisé à l\'époque médiévale par les bâtisseurs eux-mêmes pour qualifier leur art.',
      reponse: false,
      explication: 'Faux. Le mot "gothique" est péjoratif, forgé à la Renaissance par Vasari pour qualifier de barbare — "à la manière des Goths" — l\'art médiéval qu\'on cherchait à dépasser. Les contemporains parlaient d\'"opus francigenum", l\'œuvre française, parce qu\'ils savaient que ce style venait d\'Île-de-France.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Dans une cathédrale gothique, les murs ne sont plus porteurs : la structure repose sur les piliers, les voûtes d\'ogives et les arcs-boutants.',
      reponse: true,
      explication: 'Vrai. C\'est précisément la révolution gothique. La croisée d\'ogives concentre les charges en quatre points d\'appui par travée, l\'arc-boutant reporte la poussée latérale à l\'extérieur, et le mur — soulagé — peut s\'ouvrir en immenses verrières. C\'est la condition technique qui rend possible la "lumière divine" théorisée par Suger.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces étapes de la construction d\'une cathédrale gothique dans l\'ordre :',
      items: [
        `Fondations et soubassements`,
        `Élévation des piliers et des murs de la nef`,
        `Pose des voûtes en croisée d\'ogives`,
        `Installation des arcs-boutants extérieurs`,
        `Pose de la charpente et de la toiture`,
        `Installation des vitraux et achèvement intérieur`
      ],
      explication: 'Un chantier de cathédrale suit toujours cette logique structurelle : on creuse les fondations, on monte les piliers et les murs, on lance les voûtes (souvent on contrebute provisoirement avec des cintres en bois), on installe les arcs-boutants définitifs, on coiffe d\'une charpente puis d\'une toiture, et enfin — souvent des décennies plus tard — on pose les vitraux et on achève l\'intérieur. Le tout pouvait durer un à deux siècles.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces phases du gothique dans l\'ordre stylistique :',
      items: [
        `Gothique primitif (Saint-Denis, premiers chantiers)`,
        `Gothique classique (Chartres, Reims, Amiens)`,
        `Gothique rayonnant (Sainte-Chapelle, façades à rosaces démesurées)`,
        `Gothique flamboyant (réseaux en flammèches, voûtes étoilées)`
      ],
      explication: 'Du milieu du XIIᵉ siècle à la fin du XVᵉ, le gothique traverse quatre grandes phases. Le primitif (Saint-Denis, vers 1140), encore proche du roman. Le classique (Chartres 1194, Reims 1211, Amiens 1220) atteint l\'équilibre parfait. Le rayonnant (Sainte-Chapelle, 1248) ouvre des rosaces démesurées. Le flamboyant (XVᵉ) pousse l\'ornement jusqu\'à l\'exubérance.'
    },
    {
      type: 'associer',
      q: 'Associe chaque cathédrale à son trait distinctif :',
      paires: [
        { gauche: 'Chartres', droite: 'Ses 172 vitraux d\'origine, cas unique au monde' },
        { gauche: 'Reims', droite: 'Cathédrale du sacre des rois de France' },
        { gauche: 'Amiens', droite: 'La plus vaste cathédrale gothique de France' },
        { gauche: 'Beauvais', droite: 'Record de hauteur sous voûte (48 m), partiellement effondrée' },
        { gauche: 'Cologne', droite: 'Plus grande cathédrale gothique allemande, achevée en 1880' },
        { gauche: 'Notre-Dame de Paris', droite: 'Incendiée en 2019, rouverte en 2024' }
      ],
      explication: 'Six cathédrales, six identités. Chartres pour ses vitraux miraculeusement conservés. Reims pour les sacres royaux. Amiens pour ses 200 000 m³. Beauvais pour son record vertigineux et sa chute. Cologne pour son chantier de six siècles. Notre-Dame de Paris pour son drame récent et sa résurrection.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète cette phrase sur l\'origine du gothique :',
      texte: `Le gothique naît vers 1140 à l\'abbatiale de {trou}, près de Paris, sous l\'impulsion de l\'abbé Suger, conseiller des rois de France.`,
      explication: 'L\'abbatiale royale de Saint-Denis, nécropole des rois de France, est l\'acte de naissance du gothique. L\'abbé Suger y rassemble pour la première fois les trois innovations techniques au service d\'une théologie de la lumière inspirée du Pseudo-Denys l\'Aréopagite.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète cette phrase sur les innovations gothiques :',
      texte: `Trois innovations rendent possible le gothique : l\'arc brisé, la croisée d\'ogives, et l\'{trou}, qui reporte la poussée latérale des voûtes à l\'extérieur de l\'édifice.`,
      explication: 'L\'arc-boutant est la pièce capitale. C\'est lui qui, en reportant la poussée latérale des voûtes sur des culées extérieures, libère totalement les murs de leur fonction porteuse et permet les immenses verrières du gothique mature.'
    },
    {
      q: `Qui est considéré comme le père intellectuel du gothique ?`,
      options: [
        `Saint Bernard de Clairvaux`,
        `L\'abbé Suger de Saint-Denis`,
        `Maurice de Sully`,
        `Villard de Honnecourt`
      ],
      correcte: 1,
      explication: `L\'abbé Suger (1081-1151), abbé de Saint-Denis et conseiller des rois Louis VI et Louis VII, fait reconstruire le chœur de son abbaye vers 1140 selon des principes nouveaux. Il en livre la théorie dans son traité "De administratione". Sa théologie de la "lux divina", inspirée du Pseudo-Denys, fonde l\'esthétique gothique.`
    },
    {
      q: `Laquelle de ces trois innovations n\'est PAS une caractéristique structurelle du gothique ?`,
      options: [
        `L\'arc brisé`,
        `La croisée d\'ogives`,
        `L\'arc-boutant`,
        `La coupole sur pendentifs`
      ],
      correcte: 3,
      explication: `La coupole sur pendentifs est l\'innovation byzantine emblématique, illustrée par Sainte-Sophie de Constantinople (voir empire-byzantin). Les trois innovations gothiques sont l\'arc brisé, la croisée d\'ogives et l\'arc-boutant — qui ensemble libèrent les murs de la fonction porteuse.`
    },
    {
      q: `Quelle cathédrale détient le record de hauteur sous voûte avec 48 mètres ?`,
      options: [
        `Notre-Dame de Paris`,
        `Reims`,
        `Beauvais`,
        `Amiens`
      ],
      correcte: 2,
      explication: `Beauvais a poussé la verticalité gothique à sa limite physique : 48 mètres sous clé de voûte, soit l\'équivalent d\'un immeuble de 16 étages. Le chœur s\'est effondré une première fois en 1284, douze ans après achèvement. La cathédrale n\'a jamais été terminée — la nef manque toujours.`
    },
    {
      q: `Quelle cathédrale a conservé l\'ensemble le plus complet de vitraux médiévaux d\'origine ?`,
      options: [
        `Notre-Dame de Paris`,
        `Reims`,
        `Chartres`,
        `Strasbourg`
      ],
      correcte: 2,
      explication: `Chartres conserve 172 vitraux d\'origine sur 2 700 m² — cas unique au monde. Le célèbre "bleu de Chartres" est dû à des recettes verrières médiévales qu\'on ne sait toujours pas reproduire à l\'identique. C\'est aussi la cathédrale dont la reconstruction (après l\'incendie de 1194) a été la plus rapide : 26 ans seulement.`
    },
    {
      q: `Quelle est la signification théologique des vitraux selon l\'abbé Suger ?`,
      options: [
        `Une simple décoration pour orner les édifices`,
        `Une protection contre les intempéries`,
        `Un moyen de faire entrer la "lux divina" — la lumière divine transfigurée par la matière colorée`,
        `Une preuve de la richesse du diocèse`
      ],
      correcte: 2,
      explication: `Pour Suger, héritier du Pseudo-Denys l\'Aréopagite, Dieu est lumière. La lumière qui traverse les vitraux n\'est plus la clarté du jour : elle est "transmuée", transfigurée, et devient présence matérielle du divin. Le fidèle qui entre est physiquement baigné dans cette lumière colorée. Les vitraux servent aussi d\'enseignement biblique (la "Bible des pauvres") — mais leur fonction première est mystique.`
    },
    {
      q: `Que s\'est-il passé à Notre-Dame de Paris le 15 avril 2019 ?`,
      options: [
        `Un attentat`,
        `Un incendie qui a détruit la charpente médiévale et la flèche de Viollet-le-Duc`,
        `Un effondrement partiel des voûtes par vieillissement`,
        `Un séisme inattendu`
      ],
      correcte: 1,
      explication: `Un incendie accidentel s\'est déclaré vers 18h50 dans les combles. La charpente médiévale du XIIᵉ siècle (1 300 chênes — surnommée "la forêt") et la flèche néogothique de Viollet-le-Duc ont été détruites. Les voûtes de pierre, les vitraux principaux et les deux tours ont été sauvés. La cathédrale a rouvert le 7 décembre 2024, restaurée à l\'identique.`
    }
  ]

});
