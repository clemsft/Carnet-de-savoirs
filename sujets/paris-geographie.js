/* ===================================================================
   SUJET — Paris et sa géographie
   ===================================================================
   La ville en couches, en surface et en sous-sol.
   Domaines : Géographie, Histoire, Urbanisme
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'paris-geographie',
    titre: '<em>Paris</em> et sa géographie',
    domaines: ['Sciences de la Terre', 'Histoire'],
    tags: ['paris', 'haussmann', 'métro', 'catacombes', 'égouts', 'architecture'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['ecriture-cuneiforme'],
    date_creation: '2026-05-10',
    date_maj: '2026-05-10'
  },

  resume: 'Découvrir Paris comme un objet géographique en couches : la ville en surface bâtie sur ses ruines successives depuis 2 000 ans, et le monde souterrain — carrières, catacombes, égouts, métro — qui occupe presque autant d\'espace que la cité au-dessus.',

  points_cles: [
    'Paris est un site **fluvial et stratégique** : une boucle de la Seine, plusieurs îles facilitant le franchissement, une cuvette protégée par des collines.',
    'La ville **gallo-romaine** s\'appelait **Lutèce** ; la rive gauche conserve les seuls vestiges visibles (arènes, thermes de Cluny).',
    'Le sous-sol parisien est creusé d\'environ **300 km de galeries** issues d\'anciennes **carrières** de calcaire et de gypse — la pierre même de la ville.',
    'Les **Catacombes** ont été créées en **1786** pour vider les cimetières insalubres : aujourd\'hui environ **6 millions de squelettes** y reposent.',
    'Les **égouts modernes** (~2 600 km) sont l\'œuvre de l\'ingénieur **Eugène Belgrand** sous Haussmann — l\'un des réseaux les plus avancés du monde au XIXᵉ siècle.',
    'Le **métro parisien** est inauguré en **1900** pour l\'Exposition universelle. Aujourd\'hui : **16 lignes**, environ **225 km**, **308 stations**, et 1,5 milliard de voyages par an.',
    'La **transformation haussmannienne** (1853-1870) a démoli 60 % du Paris médiéval — boulevards, places en étoile, façades unifiées en pierre de taille.'
  ],

  carte_mentale: {
    central: 'paris',
    noeuds: [
      { id: 'paris', label: 'Paris', description: 'Ville de 105 km² intra-muros, ~2,1 millions d\'habitants, capitale depuis le VIᵉ siècle.' },
      { id: 'site', label: 'Site géographique', description: 'Une boucle de la Seine dans une cuvette sédimentaire, à l\'intersection de routes naturelles.' },
      { id: 'epoques', label: 'Couches historiques', description: 'Lutèce, Paris médiéval, Paris classique, Paris haussmannien, Paris contemporain.' },
      { id: 'sous-sol', label: 'Sous-sol', description: 'Trois mondes superposés : carrières anciennes, catacombes, réseaux techniques modernes.' },
      { id: 'monuments', label: 'Monuments', description: 'Notre-Dame, Tour Eiffel, Louvre, Panthéon : strates monumentales d\'époques différentes. Le Louvre conserve notamment le Code d\'Hammurabi (voir [[ecriture-cuneiforme]]).' },
      { id: 'transports', label: 'Transports', description: 'Métro (1900), RER (années 1960), Grand Paris Express (en cours).' },

      // Sous-sol
      { id: 'carrieres', label: 'Carrières', description: '**~300 km** de galeries héritées de l\'extraction de calcaire et de gypse depuis l\'époque romaine. Une partie s\'est effondrée au XVIIIᵉ siècle, à l\'origine de l\'**Inspection des Carrières** créée en 1777.', parent: 'sous-sol' },
      { id: 'catacombes', label: 'Catacombes', description: 'Ossuaire municipal créé en **1786**. Plus de **6 millions** de squelettes transférés des cimetières fermés. Une petite section seulement (~1,7 km) est ouverte au public.', parent: 'sous-sol' },
      { id: 'egouts', label: 'Égouts', description: '**~2 600 km** de galeries construites principalement sous Haussmann. Le réseau est "**visitable**" — chaque rue de Paris a son égout dessous, signalé par une plaque indiquant le nom de la rue, qui sert aussi en surface.', parent: 'sous-sol' },
      { id: 'metro', label: 'Métro', description: '**16 lignes**, dont 14 numérotées + 3bis et 7bis. **308 stations**. Inauguré le **19 juillet 1900**. Premier réseau urbain complètement souterrain au monde.', parent: 'sous-sol' },

      // Époques
      { id: 'lutece', label: 'Lutèce', description: 'Ville gallo-romaine fondée vers 50 av. J.-C. sur l\'**île de la Cité**, étendue sur la rive gauche. Les arènes (Iᵉʳ siècle) et les thermes de Cluny (IIIᵉ siècle) en restent visibles.', parent: 'epoques' },
      { id: 'medieval', label: 'Paris médiéval', description: 'Capitale capétienne, **Notre-Dame** (XIIᵉ-XIVᵉ s.), Sainte-Chapelle (XIIIᵉ s.), Louvre forteresse (XIIᵉ s.). Trois enceintes successives.', parent: 'epoques' },
      { id: 'haussmann', label: 'Haussmann', description: '**1853-1870**. Le préfet Haussmann perce des **boulevards** rectilignes dans le tissu médiéval. **60 %** du vieux Paris démoli. Façades unifiées en pierre de taille.', parent: 'epoques' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Un <em>site</em> qui appelait la ville',
      contenu_md:
`On habite Paris parce que la géographie y a installé une **série de hasards favorables**. La Seine, qui descend du plateau de Langres vers la Manche, dessine ici une grande boucle ouverte vers le sud. Au cœur de cette boucle, deux **îles** — la Cité et Saint-Louis (longtemps deux îles distinctes) — facilitent le franchissement du fleuve. Autour, une **cuvette sédimentaire** entourée de collines basses (Montmartre, Belleville, la Montagne Sainte-Geneviève), bien drainée, exposée au sud, à l\'abri des grands vents.

Les voies naturelles convergent ici : le bassin parisien est l\'un des **carrefours routiers** majeurs de l\'Europe occidentale, à l\'intersection des chemins entre l\'Atlantique et la Rhénanie, entre le Nord et la Méditerranée. Quand les Romains conquièrent la Gaule, ils trouvent à cet endroit une bourgade celtique tenue par la tribu des **Parisii**. Ils la fortifient, l\'aménagent, l\'appellent **Lutèce** (Lutetia).

Vingt siècles plus tard, la ville a explosé du périmètre de l\'île de la Cité (quelques hectares) à 105 km² intra-muros, sans avoir jamais quitté son site initial. Tu marches dans une ville qui s\'est **superposée à elle-même** depuis 2 000 ans.`
    },

    {
      type: 'widget',
      titre: 'Vingt siècles, en jalons',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '~50 av. J.-C.', titre: 'Lutèce romaine', description: 'Conquise par les légions de César. Devient une ville moyenne de l\'empire (~10 000 habitants au IIᵉ siècle). **Forum, arènes, thermes** : les vestiges sont rares mais visibles.' },
          { date: '508', titre: 'Capitale franque', description: 'Clovis Iᵉʳ établit sa capitale à Paris. Début d\'une centralité politique qui ne sera plus jamais réellement remise en cause.' },
          { date: '1163-1345', titre: 'Notre-Dame', description: 'Construction de la cathédrale gothique. **Plus de 180 ans** de chantier. Centre spirituel de la France pendant 700 ans. Incendie en 2019, **rouverte en décembre 2024**.' },
          { date: '~1190', titre: 'Enceinte de Philippe Auguste', description: 'Première enceinte sérieuse autour de Paris. Vestiges visibles dans le **Marais** et près du Louvre. Forteresse du Louvre construite au même moment.' },
          { date: '1607', titre: 'Pont Neuf', description: 'Achevé sous Henri IV. Le **plus vieux pont** subsistant aujourd\'hui à Paris — paradoxe de son nom.' },
          { date: '1786', titre: 'Création des Catacombes', description: 'Devant l\'insalubrité des cimetières médiévaux (les Innocents notamment), on transfère les ossements dans les anciennes carrières du sud. Plus de **6 millions** de squelettes y reposent désormais.' },
          { date: '1853-1870', titre: 'Haussmann', description: 'Le préfet Georges-Eugène Haussmann mène, sous Napoléon III, la **plus grande transformation urbaine** jamais réalisée dans une capitale européenne. Boulevards, places en étoile, immeubles unifiés.' },
          { date: '1889', titre: 'Tour Eiffel', description: 'Construite pour l\'Exposition universelle du **centenaire de la Révolution**. Conçue comme temporaire, elle ne sera sauvée de la démolition que par son utilité comme antenne radio en 1909. **324 m**, monument le plus visité au monde.' },
          { date: '19 juillet 1900', titre: 'Premier métro', description: 'Inauguration de la **ligne 1** (Porte de Vincennes ↔ Porte Maillot) pour l\'Exposition universelle. Premier réseau urbain entièrement souterrain au monde.' },
          { date: '1977', titre: 'Centre Pompidou', description: 'Premier des « grands chantiers » de la fin du XXᵉ siècle. Suivront le Louvre-Pyramide (1989), la Grande Arche, l\'Opéra Bastille, la BnF François-Mitterrand.' },
          { date: '15 avril 2019', titre: 'Incendie de Notre-Dame', description: 'La flèche s\'effondre, la charpente médiévale (« la forêt ») détruite. Restauration accélérée — **réouverture le 7 décembre 2024**, cinq ans plus tard, avec une charpente reconstruite à l\'identique.' },
          { date: 'En cours', titre: 'Grand Paris Express', description: '**200 km** de nouvelles lignes de métro automatique en construction depuis 2016. Plus grand chantier de transports d\'Europe. Premières mises en service partielles depuis 2024.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>révolution</em> haussmannienne',
      contenu_md:
`Paris à 1850 est encore largement médiéval : ruelles tortueuses, immeubles vétustes, hygiène déplorable, choléra récurrent (l\'épidémie de 1832 a tué 19 000 personnes en quelques mois). Le réseau de circulation est dérisoire pour une ville d\'**un million d\'habitants**. Quand l\'empereur **Napoléon III** prend le pouvoir en 1852, il a en tête un projet précis : transformer Paris à l\'image de Londres, qu\'il connaît bien pour y avoir vécu en exil.

Pour mener cette transformation, il choisit **Georges-Eugène Haussmann**, préfet de la Seine de **1853 à 1870**. Pendant dix-sept ans, Haussmann va mener un chantier d\'une ampleur sans équivalent en Europe : **percée de 80 km de boulevards** rectilignes, démolition d\'environ **20 000 immeubles**, construction de **40 000 nouveaux**, expropriation de quartiers entiers.

Ses motivations sont multiples. **Hygiénique** : aérer, donner du soleil, éloigner les épidémies. **Esthétique** : créer une ville unifiée, monumentale, à la hauteur du prestige impérial. **Économique** : assurer la fluidité du commerce et de la circulation. **Politique** aussi, et pas qu\'un peu : les boulevards rectilignes empêchent les barricades — l\'expérience des révolutions de 1830 et 1848 hante les autorités.

Ce qu\'on appelle « Paris » dans l\'imaginaire international — les façades en pierre de taille, les balcons filants, les toits zinc à brisis, les boulevards arborés, l\'Opéra Garnier, l\'avenue de l\'Opéra, l\'Étoile et ses 12 avenues — tout cela est **haussmannien**. La ville médiévale a été en grande partie effacée. C\'est aussi pour cela que les vestiges antérieurs au XIXᵉ siècle, à Paris, sont rares et précieux.`
    },

    {
      type: 'encadre',
      label: 'Le rendez-vous des couches',
      contenu_md: 'Quand on regarde un immeuble haussmannien depuis la rue, on voit en réalité **trois siècles superposés**. Le sol sur lequel il repose est probablement creusé d\'anciennes carrières médiévales. Sous lui, un égout XIXᵉ aux dimensions monumentales, parcouru par un wagonnet de service. Plus profond, peut-être une station de métro, ou un tunnel du Grand Paris Express en cours de creusement. La ville moderne fonctionne sur la mémoire matérielle de toutes ses époques antérieures.'
    },

    {
      type: 'texte',
      titre: 'Le <em>sous-sol</em> : trois mondes superposés',
      contenu_md:
`Paris est l\'une des rares grandes villes au monde où le sous-sol est à peu près aussi habité que la surface — par des humains vivants, des humains morts, et des infrastructures. Trois grands ensembles cohabitent.

Le plus ancien est celui des **carrières**. Pendant deux mille ans, on a extrait sous la ville le **calcaire lutétien** (la pierre blonde des immeubles) et le **gypse** (pour faire le plâtre, dont on tirait notamment celui de **Montmartre**). Au fil des siècles, ces extractions ont creusé un labyrinthe d\'environ **300 km de galeries** sous la rive gauche et le nord. Au XVIIIᵉ siècle, plusieurs effondrements (rue d\'Enfer en 1774, dévorant des maisons entières) provoquent la création en **1777** de l\'**Inspection générale des carrières**, qui existe encore — son rôle reste de surveiller, consolider, cartographier.

Le deuxième ensemble est celui des **Catacombes**. À la fin du XVIIIᵉ siècle, les cimetières parisiens sont saturés ; celui des Innocents (au cœur des Halles) déborde au point que des cadavres se déversent dans les caves voisines. En **1786**, on décide de transférer les ossements dans les anciennes carrières du sud. Pendant des décennies, des convois nocturnes y déposent les ossements. Aujourd\'hui, environ **6 millions de squelettes** y reposent. Une petite section (~1,7 km) est ouverte au public ; le reste est interdit, mais une communauté de « **cataphiles** » s\'y aventure clandestinement depuis des décennies.

Le troisième est celui des **réseaux techniques** modernes : égouts, métro, fibre optique, eau potable, gaz, électricité, pneumatiques (ce dernier réseau, longtemps fonctionnel pour transmettre des télégrammes urbains, fut désaffecté en 1984). Une ville en pleine activité, à 5, 15, 30 mètres sous la chaussée.`
    },

    {
      type: 'widget',
      titre: 'Quatre réseaux souterrains, en chiffres',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: '~300 km',
            titre: 'Carrières',
            description: 'Galeries d\'extraction du **calcaire** (rive gauche, sud) et du **gypse** (Buttes-Chaumont, Montmartre). Beaucoup ont été comblées au XIXᵉ siècle après les grands effondrements. **Inspection des Carrières** créée en 1777, encore active aujourd\'hui.'
          },
          {
            tag: '6 millions',
            titre: 'Catacombes',
            description: 'Ossuaire municipal créé en **1786**. **6 millions** de squelettes transférés depuis les anciens cimetières (Innocents, Saint-Eustache, etc.). Section visitable de 1,7 km. Inscription gravée à l\'entrée : *« Arrête, c\'est ici l\'empire de la mort »*.'
          },
          {
            tag: '~2 600 km',
            titre: 'Égouts',
            description: 'Œuvre de l\'ingénieur **Eugène Belgrand** sous Haussmann. **Visitables** : chaque égout porte une plaque avec le nom de la rue qu\'il dessert. Évacuent les eaux usées vers la station d\'épuration d\'**Achères**, dans les Yvelines.'
          },
          {
            tag: '~225 km',
            titre: 'Métro',
            description: '**16 lignes**, **308 stations**. Premier réseau **complètement souterrain** au monde. Densité du réseau exceptionnelle : aucun point dans Paris intra-muros n\'est à plus de **500 m** d\'une station. Plus de **1,5 milliard** de voyages par an.'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>métro</em>, métronome de Paris',
      contenu_md:
`L\'idée d\'un chemin de fer urbain souterrain trotte à Paris dès les années 1870, mais bute pendant trente ans sur les rivalités entre l\'État (qui veut un projet régional) et la ville (qui veut un projet local). C\'est l\'**Exposition universelle de 1900** qui débloque le dossier. Le 19 juillet 1900, la ligne 1 — Porte de Vincennes / Porte Maillot, l\'axe est-ouest qui dessert l\'expo — est inaugurée.

L\'ingénieur **Fulgence Bienvenüe** dirige les travaux pendant trois décennies. Les premières lignes sont creusées en **tranchée ouverte** sous les rues, puis recouvertes — c\'est pourquoi les stations centrales sont si peu profondes (parfois à peine 4 m sous la chaussée). Plus tard, on creusera en **tunnel**, plus profond, sous des immeubles plutôt que sous des rues.

Le réseau se densifie ligne après ligne jusque dans les années 1930. Il compte aujourd\'hui **16 lignes** numérotées (en réalité 14 + lignes bis 3bis et 7bis), **308 stations**, environ **225 km de voies**. Sa densité est sans équivalent : à Paris intra-muros, aucun point n\'est à plus de **500 m d\'une station de métro**. La fréquentation annuelle dépasse **1,5 milliard de voyages**.

Le **Grand Paris Express**, en cours de construction depuis 2016, ajoutera **200 km** supplémentaires en métro automatique pour desservir la banlieue, avec des lignes circulaires qui ne passent plus par le centre. C\'est le plus grand chantier de transports en cours en Europe. Les premières mises en service partielles ont commencé en 2024 ; le projet complet devrait s\'étaler jusque vers 2035.`
    },

    {
      type: 'widget',
      titre: 'Quelques chiffres pour cadrer Paris',
      composant: 'SelecteurValeurs',
      params: {
        unite: '',
        indexInitial: 0,
        options: [
          { label: 'Surface intra-muros', valeur: '105 km²', description: 'Paris est l\'une des **plus petites grandes capitales** du monde par sa surface administrative — Londres en fait 15 fois plus, Tokyo 20 fois plus.' },
          { label: 'Population intra-muros', valeur: '~2,1 M', description: 'En lente décroissance depuis les années 2010. L\'**aire urbaine** dépasse 13 millions, ce qui la classe parmi les premières mondiales.' },
          { label: 'Densité', valeur: '~20 000 hab/km²', description: 'L\'une des plus fortes densités d\'Europe — héritée de l\'urbanisation haussmannienne et du gabarit haut des immeubles.' },
          { label: 'Longueur de la Seine', valeur: '~13 km', description: 'Distance que parcourt le fleuve dans Paris intra-muros. **37 ponts** la franchissent.' },
          { label: 'Visiteurs annuels (Tour Eiffel)', valeur: '~7 M', description: 'Le monument **payant** le plus visité au monde. La Tour Eiffel a accueilli plus de **300 millions** de visiteurs depuis 1889.' },
          { label: 'Chantier Notre-Dame', valeur: '5 ans', description: '15 avril 2019 : incendie. **7 décembre 2024** : réouverture. Charpente médiévale (« la forêt ») reconstruite à l\'identique avec **2 000 chênes** abattus.' }
        ]
      }
    },

    {
      type: 'encadre',
      label: 'Une ville qu\'on continue d\'écrire',
      contenu_md: 'On a parfois l\'impression que Paris est une ville-musée — une carte postale figée. C\'est faux à plusieurs égards. Le Grand Paris Express creuse des kilomètres de tunnels en ce moment. La transformation des berges, des places (République, Bastille, Nation), la végétalisation, la piétonisation reconfigurent profondément la ville depuis 2014. Notre-Dame vient de rouvrir, JO 2024 ont accéléré des chantiers entiers. Paris reste **une ville en travaux** — comme elle l\'a toujours été. La continuité, ici, c\'est précisément la transformation permanente.'
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le Pont Neuf est l\'un des ponts les plus récents de Paris.',
      reponse: false,
      explication: 'Faux — paradoxalement, le Pont Neuf, achevé sous Henri IV en 1607, est en réalité le plus vieux pont subsistant aujourd\'hui à Paris. Son nom le distinguait à l\'époque des ponts médiévaux qui le précédaient — il a survécu, eux non.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces étapes de l\'histoire urbaine de Paris dans l\'ordre chronologique :',
      items: [
        'Lutèce, ville gallo-romaine sur l\'île de la Cité',
        'Construction de Notre-Dame de Paris',
        'Création des Catacombes',
        'Transformation haussmannienne',
        'Inauguration du métro pour l\'Exposition universelle',
        'Inauguration du Centre Pompidou',
        'Réouverture de Notre-Dame après l\'incendie'
      ],
      explication: 'Vingt siècles de strates : Lutèce romaine, Notre-Dame gothique, Catacombes au XVIIIᵉ, refonte haussmannienne au XIXᵉ, métro en 1900, Centre Pompidou comme premier "grand chantier" récent, et la spectaculaire réouverture de Notre-Dame en décembre 2024, cinq ans après l\'incendie.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète cette phrase sur les chiffres-clés du sous-sol parisien :',
      texte: 'Le sous-sol de Paris comporte environ {300} km de carrières anciennes, {2600} km d\'égouts, et accueille les {Catacombes} où reposent près de 6 millions de squelettes depuis 1786.',
      explication: 'Trois mondes superposés sous Paris : les carrières médiévales d\'extraction du calcaire et du gypse, les égouts haussmanniens dessinés par Belgrand, et l\'ossuaire des Catacombes créé pour vider les cimetières insalubres. Le tout sous une ville de 105 km² seulement en surface.'
    },
    {
      q: 'Comment s\'appelait Paris à l\'époque gallo-romaine ?',
      options: ['Paristia', 'Lutèce (Lutetia)', 'Roma Gallica', 'Sequana'],
      correcte: 1,
      explication: 'Lutèce, du latin Lutetia. La ville était habitée à l\'origine par la tribu celte des Parisii — c\'est leur nom qui a finalement donné celui de la ville. Les arènes de Lutèce et les thermes de Cluny sont les principaux vestiges visibles.'
    },
    {
      q: 'Qui a mené la grande transformation urbaine de Paris au XIXᵉ siècle, et sur quelle période ?',
      options: [
        'Louis XIV, 1660-1715',
        'Le baron Haussmann, sous Napoléon III, de 1853 à 1870',
        'Mitterrand, 1981-1995',
        'Henri IV, 1589-1610'
      ],
      correcte: 1,
      explication: 'Préfet de la Seine de 1853 à 1870, Georges-Eugène Haussmann a mené sous Napoléon III la plus grande transformation urbaine d\'une capitale européenne : 80 km de boulevards percés, environ 20 000 immeubles démolis, 40 000 nouveaux construits.'
    },
    {
      q: 'Pourquoi les Catacombes de Paris ont-elles été créées en 1786 ?',
      options: [
        'Pour servir de cachette aux nobles pendant la Révolution',
        'Pour vider les cimetières parisiens devenus insalubres et débordants — les ossements ont été transférés dans les anciennes carrières souterraines',
        'Pour servir de bunker militaire',
        'Pour cacher des œuvres d\'art'
      ],
      correcte: 1,
      explication: 'Les cimetières parisiens, dont celui des Innocents au cœur des Halles, étaient saturés au point que des cadavres se déversaient dans les caves voisines. La ville a transféré environ 6 millions de squelettes dans les anciennes carrières de calcaire au sud.'
    },
    {
      q: 'À combien estime-t-on la longueur totale du réseau d\'égouts parisien ?',
      options: ['Environ 200 km', 'Environ 600 km', 'Environ 2 600 km', 'Environ 10 000 km'],
      correcte: 2,
      explication: 'Environ 2 600 km. Œuvre majeure de l\'ingénieur Eugène Belgrand sous Haussmann, c\'était l\'un des réseaux d\'égouts les plus avancés du monde au XIXᵉ siècle. Sa particularité : il est "visitable", chaque égout sous une rue portant le même nom que la rue.'
    },
    {
      q: 'Quand le métro parisien a-t-il été inauguré, et pourquoi à cette date ?',
      options: [
        'En 1850, après la révolution industrielle',
        'En 1900, pour l\'Exposition universelle, qui a débloqué un projet en discussion depuis trente ans',
        'En 1925, pour l\'Exposition des arts décoratifs',
        'En 1937, pour l\'Exposition internationale'
      ],
      correcte: 1,
      explication: 'La ligne 1 (Porte de Vincennes - Porte Maillot) est inaugurée le 19 juillet 1900. C\'est l\'Exposition universelle qui a finalement permis à un projet bloqué pendant 30 ans par les rivalités entre État et ville d\'aboutir. Premier réseau urbain entièrement souterrain au monde.'
    },
    {
      q: 'Combien de stations le métro parisien compte-t-il aujourd\'hui ?',
      options: ['~50', '~150', '~308', '~600'],
      correcte: 2,
      explication: 'Environ 308 stations, sur 16 lignes (14 numérotées + 3bis + 7bis). Densité exceptionnelle : aucun point dans Paris intra-muros n\'est à plus de 500 m d\'une station. Plus de 1,5 milliard de voyages par an avant l\'extension du Grand Paris Express.'
    },
    {
      q: 'Pourquoi parle-t-on d\'environ 300 km de carrières souterraines à Paris ?',
      options: [
        'Ce sont d\'anciens tunnels militaires',
        'Ce sont les galeries héritées de l\'extraction de calcaire et de gypse depuis l\'époque romaine — la pierre même utilisée pour bâtir Paris',
        'Ce sont les abris construits pendant la guerre',
        'Ce sont d\'anciens couloirs de monastères'
      ],
      correcte: 1,
      explication: 'Pendant 2 000 ans, on a extrait sous la ville le calcaire lutétien (la pierre des immeubles) et le gypse (pour le plâtre, notamment à Montmartre). Cela a creusé un labyrinthe d\'environ 300 km. Plusieurs effondrements au XVIIIᵉ siècle ont conduit à la création de l\'Inspection des Carrières en 1777, toujours active.'
    },
    {
      q: 'Quel est le projet d\'infrastructure de transport actuellement en cours autour de Paris ?',
      options: [
        'Un nouveau périphérique souterrain',
        'Le Grand Paris Express : 200 km de nouvelles lignes de métro automatique, principalement en banlieue, dont certaines circulaires',
        'Un téléphérique entre Paris et Versailles',
        'Une refonte complète des lignes existantes'
      ],
      correcte: 1,
      explication: 'Lancé en 2016, c\'est le plus grand chantier de transports en cours en Europe. 200 km de métro automatique en construction, avec des lignes circulaires qui ne passent plus par le centre — révolution structurelle pour la mobilité de la région parisienne. Premières mises en service partielles depuis 2024, achèvement prévu vers 2035.'
    }
  ]

});
