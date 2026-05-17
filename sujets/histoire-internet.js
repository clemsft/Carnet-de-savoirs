/* ===================================================================
   SUJET — L'histoire d'Internet
   ===================================================================
   Du premier paquet d'ARPANET aux GAFAM.
   Domaine : Informatique / Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'histoire-internet',
    titre: 'L\'histoire d\'<em>Internet</em>',
    domaines: ['Informatique', 'Histoire'],
    tags: ['arpanet', 'tcp/ip', 'web', 'berners-lee', 'gafam', 'minitel'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['ia-generative', 'monnaies-numeriques'],
    date_creation: '2026-05-12',
    date_maj: '2026-05-12'
  },

  resume: 'En cinquante-cinq ans, un projet militaire reliant quatre ordinateurs américains est devenu le tissu nerveux de la civilisation. Comprendre comment l\'on est passé d\'ARPANET au Web, des protocoles aux GAFAM, et pourquoi Internet et Web ne désignent pas la même chose.',

  points_cles: [
    '**Internet** est le *réseau* mondial de réseaux, fondé sur les protocoles **TCP/IP** standardisés en 1983.',
    'Le **Web** n\'est qu\'une application d\'Internet, inventée par **Tim Berners-Lee** au [CERN]{accent} en 1989-1991.',
    'Tout commence en **1969** avec **ARPANET**, un projet de la DARPA — le premier message envoyé entre UCLA et Stanford fut le mot tronqué « lo ».',
    'Le courrier électronique naît en **1971** avec **Ray Tomlinson**, qui choisit l\'arobase **@** pour séparer l\'utilisateur de la machine.',
    'La **France** a connu une préfiguration avec le **Minitel** (1980-2012), réseau télématique national en avance sur son temps.',
    'Les années 2000 voient l\'éclatement de la **bulle dot-com**, puis l\'émergence des plateformes du **Web 2.0** et la consolidation des **GAFAM**.',
    'L\'**iPhone** (2007) déplace Internet dans la poche de chacun ; les enjeux contemporains tournent autour de la **souveraineté numérique**, de la **surveillance** et de la **fragmentation** du réseau.'
  ],

  carte_mentale: {
    central: 'internet',
    noeuds: [
      { id: 'internet', label: 'Internet', description: 'Le **réseau** mondial reliant des milliards de machines via les protocoles TCP/IP. À distinguer du Web, qui n\'en est qu\'une application.' },
      { id: 'origines', label: 'Origines militaires', description: '**ARPANET** (1969), projet de la DARPA américaine pour interconnecter quelques centres de recherche.' },
      { id: 'protocoles', label: 'Les protocoles', description: '**TCP/IP** (Cerf et Kahn, 1973-1983) : la langue commune qui rend possible l\'interconnexion de tous les réseaux.' },
      { id: 'web', label: 'Le Web', description: 'Inventé au CERN par **Tim Berners-Lee** (1989-1991). HTTP, HTML, URL. L\'interface qui démocratise Internet.' },
      { id: 'usages', label: 'Usages historiques', description: 'Email (1971), Usenet, IRC, FTP, puis Web — chaque protocole a inventé un nouvel usage.' },
      { id: 'plateformes', label: 'Plateformes', description: 'À partir des années 2000, le réseau se concentre autour de quelques **plateformes** géantes : les GAFAM.' },
      { id: 'enjeux', label: 'Enjeux 2026', description: '**Souveraineté**, **surveillance**, **fragmentation** (splinternet), modération, IA, Web3.' },

      // Origines
      { id: 'arpanet', label: 'ARPANET', description: 'Premier réseau à commutation de paquets. 29 oct. 1969 : message "lo" entre **UCLA** et **Stanford**.', parent: 'origines' },
      { id: 'paquets', label: 'Commutation de paquets', description: 'L\'idée fondatrice : découper l\'information en **paquets** acheminés indépendamment, plutôt que monopoliser une ligne.', parent: 'origines' },

      // Protocoles
      { id: 'tcpip', label: 'TCP/IP', description: '**Transmission Control Protocol** + **Internet Protocol**. Standardisé le **1er janvier 1983** — date de naissance officielle d\'Internet.', parent: 'protocoles' },
      { id: 'dns', label: 'DNS', description: 'Système de noms de domaine (1983) : permet de taper *example.com* au lieu de retenir une adresse IP.', parent: 'protocoles' },

      // Web
      { id: 'http', label: 'HTTP / HTML', description: 'Protocole de transfert + langage de description des pages. Le couple qui fait tenir le Web.', parent: 'web' },
      { id: 'mosaic', label: 'Mosaic & Netscape', description: 'Premier navigateur graphique (Mosaic, 1993) puis Netscape (1994) — le Web devient grand public.', parent: 'web' },
      { id: 'minitel', label: 'Minitel', description: 'Réseau télématique français (**1980-2012**), précurseur national distribué à des millions de foyers.', parent: 'web' },

      // Plateformes
      { id: 'gafam', label: 'GAFAM', description: '**Google, Apple, Facebook, Amazon, Microsoft** : les cinq géants qui structurent l\'Internet contemporain.', parent: 'plateformes' },
      { id: 'web2', label: 'Web 2.0', description: 'Vers 2005, l\'utilisateur devient producteur de contenu : blogs, wikis, réseaux sociaux.', parent: 'plateformes' },
      { id: 'mobile', label: 'Mobile', description: '**iPhone** (2007) : Internet quitte le bureau pour la poche. Le trafic mobile dépasse le desktop dès 2016.', parent: 'plateformes' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Une <em>idée</em> de la Guerre froide',
      contenu_md:
`En **1969**, l\'agence **DARPA** du Pentagone finance un projet improbable : interconnecter quelques gros ordinateurs de centres universitaires américains. Le nom : **ARPANET**.

L\'idée est de tester une technique radicalement nouvelle, la **commutation de paquets**. Au lieu de monopoliser une ligne téléphonique entre deux machines, on découpe l\'information en petits paquets indépendants qui se débrouillent pour traverser le réseau, chacun par son chemin. Robuste, efficace, presque indestructible.

Le **29 octobre 1969**, à 22h30, un étudiant de l\'UCLA tape l\'instruction *« login »* à destination d\'une machine de Stanford. Après le « l » et le « o », le système plante. Le **premier message** transmis sur ce qui deviendra Internet aura donc été un simple **"lo"** — début d\'un « login » qui n\'arrivera jamais à terme. L\'anecdote est jolie, et vraie.

ARPANET grossit lentement : quatre nœuds fin 1969, une vingtaine en 1971, une centaine au milieu des années 70. Pendant ce temps, d\'autres réseaux apparaissent ailleurs — au Royaume-Uni, en France, dans le monde universitaire. Reste à les faire parler entre eux.`
    },

    {
      type: 'encadre',
      label: 'Internet n\'est pas le Web',
      contenu_md: '**Internet** désigne le [réseau]{accent} physique et logique mondial — les câbles, les routeurs, les protocoles qui permettent à n\'importe quelle machine d\'en joindre une autre. Le **Web** est *une* application qui tourne par-dessus Internet : celle des pages liées par des hyperliens. L\'email, le FTP, la visio, les jeux en ligne sont d\'autres applications d\'Internet. Confondre les deux, c\'est confondre une autoroute avec les voitures qui y circulent.'
    },

    {
      type: 'texte',
      titre: 'La <em>langue commune</em> : TCP/IP',
      contenu_md:
`Pour que des réseaux hétérogènes puissent dialoguer, il faut une **langue commune**. Deux ingénieurs américains, **Vinton Cerf** et **Robert Kahn**, s\'y attellent à partir de **1973**. Leur proposition : deux protocoles complémentaires.

Le premier, **IP** (*Internet Protocol*), gère l\'**adressage** : chaque machine du monde reçoit une adresse unique, et un paquet sait toujours où il va. Le second, **TCP** (*Transmission Control Protocol*), s\'occupe de la **fiabilité** : il découpe les messages, vérifie qu\'ils arrivent, réémet ceux qui se perdent, les remet en ordre.

Le **1er janvier 1983**, ARPANET bascule officiellement sur [TCP/IP]{accent}. Cette date est considérée par beaucoup comme la **naissance officielle d\'Internet**. À partir de là, n\'importe quel réseau parlant TCP/IP peut se brancher au reste — et ils vont le faire massivement.

La même année naît le **DNS** (Domain Name System), qui traduit les noms en adresses : on peut désormais taper *mit.edu* au lieu de retenir *18.72.0.3*. L\'Internet devient praticable pour les humains.`
    },

    {
      type: 'texte',
      titre: 'L\'<em>email</em> et l\'arobase',
      contenu_md:
`Bien avant le Web, c\'est le **courrier électronique** qui révèle au monde l\'utilité d\'un réseau.

En **1971**, un ingénieur de la société **BBN**, **Ray Tomlinson**, écrit le premier programme qui permet d\'envoyer un message d\'une machine à une autre via ARPANET. Restait à choisir un caractère séparateur entre le nom d\'utilisateur et le nom de la machine. Tomlinson regarde son clavier ; il prend l\'**@**, alors caractère oublié, parce qu\'il n\'apparaissait dans aucun nom propre. L\'arobase venait de gagner une seconde vie.

L\'email devient en quelques années **l\'usage principal** d\'ARPANET — au point qu\'il représente, dès 1973, plus des trois quarts du trafic. Une leçon répétée par la suite : les usages réels d\'un réseau ne sont presque jamais ceux qu\'avaient anticipés ses concepteurs.`
    },

    {
      type: 'texte',
      titre: 'Le <em>Minitel</em>, exception française',
      contenu_md:
`Pendant qu\'Internet se construit lentement dans les laboratoires américains, la France lance en **1980** son propre réseau grand public : le **Minitel**.

C\'est un petit terminal beige et marron, distribué **gratuitement** par les PTT aux abonnés du téléphone. Branché sur la ligne, il donne accès à un annuaire électronique, puis à des milliers de services : réservations SNCF, météo, banque, jeux, messagerie, et bien sûr les fameux services « roses » qui financeront une partie de l\'écosystème.

Au pic, en **1993**, plus de **6,5 millions de terminaux** sont en service, et **25 000 services** disponibles. La France est, à cette date, le pays le plus densément connecté du monde — mais à un réseau **fermé**, **centralisé**, **national**.

C\'est précisément ce qui scellera son destin : quand le Web ouvert arrive, le Minitel paraît rigide et provincial. France Télécom le maintient sous perfusion, puis finit par l\'**éteindre définitivement le 30 juin 2012**. Trente-deux ans d\'existence : la plus longue vie d\'un service en ligne grand public.`
    },

    {
      type: 'texte',
      titre: 'Le <em>Web</em> au CERN',
      contenu_md:
`En **1989**, dans son bureau du **CERN** à Genève, un ingénieur britannique de 33 ans, **Tim Berners-Lee**, rédige une note interne intitulée *« Information Management: A Proposal »*. Son patron griffonne en marge : *« vague, mais intéressant »*. C\'est la naissance du **Web**.

Berners-Lee veut résoudre un problème concret : les physiciens du CERN ne retrouvent jamais les documents les uns des autres. Il propose de les relier par des **hyperliens** — des liens cliquables menant d\'un document à un autre, quelle que soit la machine qui l\'héberge.

Pour cela, il invente trois choses simultanément :
- **HTTP**, le protocole qui transporte les pages
- **HTML**, le langage qui les décrit
- **URL**, le système d\'adresses qui les identifie

Le premier site web part en ligne le **6 août 1991**. Son adresse existe toujours en archive. Le CERN renonce à tout brevet et place la technologie dans le **domaine public** le **30 avril 1993** — sans doute la décision la plus généreuse, et la plus structurante, de toute l\'histoire numérique.`
    },

    {
      type: 'encadre',
      label: 'Sans Mosaic, pas de Web grand public',
      contenu_md: 'Le Web aurait pu rester un outil de geek. Il devient grand public grâce à **Mosaic**, premier navigateur graphique convivial, développé en **1993** par une équipe de l\'Université de l\'Illinois autour de **Marc Andreessen**. L\'année suivante, Andreessen fonde **Netscape**, dont le navigateur va exploser. En 1995, l\'introduction en Bourse de Netscape — une entreprise sans bénéfices, valorisée des milliards — déclenche l\'euphorie qui mènera à la bulle dot-com.'
    },

    {
      type: 'widget',
      titre: 'Les jalons fondateurs d\'Internet',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '29 oct. 1969', titre: 'Premier message ARPANET', description: 'Entre **UCLA** et **Stanford**. Le mot transmis : *"lo"* — un *"login"* avorté.' },
          { date: '1971', titre: 'Naissance de l\'email', description: '**Ray Tomlinson** écrit le premier programme d\'envoi de courrier entre machines. Il choisit l\'**@** comme séparateur.' },
          { date: '1980', titre: 'Lancement du Minitel', description: 'La France distribue un terminal grand public sur lignes téléphoniques. Préfiguration nationale d\'un réseau de services.' },
          { date: '1er janv. 1983', titre: 'Bascule sur TCP/IP', description: 'ARPANET adopte les protocoles de **Cerf** et **Kahn**. Naissance officielle d\'Internet.' },
          { date: '1989-1991', titre: 'Invention du Web au CERN', description: '**Tim Berners-Lee** invente HTTP, HTML, URL. Premier site en ligne le **6 août 1991**.' },
          { date: '1993-1994', titre: 'Mosaic et Netscape', description: 'Les premiers navigateurs graphiques. Le Web devient grand public.' },
          { date: 'Mars 2000', titre: 'Éclatement de la bulle dot-com', description: 'Le Nasdaq s\'effondre. Des centaines de startups disparaissent — mais Amazon, Google, eBay survivent et prospèrent.' },
          { date: '2004-2007', titre: 'Web 2.0 et mobile', description: 'Facebook (2004), YouTube (2005), Twitter (2006), **iPhone (2007)** : Internet devient social et nomade.' },
          { date: 'Années 2010', titre: 'Hégémonie des GAFAM', description: 'Cinq plateformes captent l\'essentiel du trafic, de l\'attention et des revenus publicitaires mondiaux.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>bulle</em> et la consolidation',
      contenu_md:
`La seconde moitié des années 1990 voit déferler une **vague spéculative** sans précédent. N\'importe quelle startup ajoutant *.com* à son nom voit sa valorisation s\'envoler. On investit dans des projets sans modèle économique, dans la simple promesse d\'occuper l\'espace.

En **mars 2000**, la bulle éclate. Le Nasdaq perd **78 %** de sa valeur en deux ans. Des milliers d\'entreprises disparaissent. Mais quelques survivantes — **Amazon**, **eBay**, **Google** (fondée en 1998) — sortent renforcées et vont structurer la décennie suivante.

C\'est **Google**, justement, qui change tout. Ses deux fondateurs, Larry Page et Sergey Brin, inventent un algorithme baptisé [PageRank]{accent} : plutôt que d\'évaluer la pertinence d\'une page par son seul contenu, ils l\'évaluent par le **nombre et la qualité des liens entrants**. Un site beaucoup référencé devient pertinent ; un site qui référence un bon site gagne en autorité. C\'est élégant, et c\'est meurtrier pour la concurrence : en quelques années, Google domine la recherche.`
    },

    {
      type: 'texte',
      titre: 'Le <em>Web 2.0</em> et les plateformes',
      contenu_md:
`À partir de **2004-2005** émerge une nouvelle génération de sites où ce sont les **utilisateurs** qui produisent le contenu : Wikipedia (2001), Flickr, YouTube (2005), Facebook (2004), Twitter (2006). On baptise ce tournant **Web 2.0**.

L\'utilisateur n\'est plus consommateur de pages produites par des éditeurs : il publie, commente, partage, vote, taggue. Le contenu devient social, dynamique, conversationnel. Et chaque action est **mesurée**, **stockée**, **monétisée** — la publicité ciblée devient le modèle économique dominant du web ouvert.

En **janvier 2007**, **Steve Jobs** dévoile l\'**iPhone**. En une décennie, le trafic Internet mobile dépasse celui des ordinateurs de bureau. Internet n\'est plus une destination où l\'on se rend ; c\'est un milieu **permanent** qui nous suit dans la poche.`
    },

    {
      type: 'widget',
      titre: 'Les GAFAM — les cinq géants',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Fondée en 1998',
            titre: 'Google',
            description: 'Le moteur de recherche dominant grâce au **PageRank**. Devenu Alphabet en 2015. Domine la recherche, la pub en ligne, le mobile (Android), le cloud, et désormais l\'IA (Gemini).'
          },
          {
            tag: 'Fondée en 1976',
            titre: 'Apple',
            description: 'Le pionnier du mobile grand public. L\'**iPhone** (2007) redéfinit l\'industrie. Modèle économique unique fondé sur le matériel premium et un écosystème logiciel verrouillé.'
          },
          {
            tag: 'Fondée en 2004',
            titre: 'Facebook (Meta)',
            description: 'Le réseau social dominant. Rachète Instagram (2012) et WhatsApp (2014). Renommé **Meta** en 2021 sur le pari du métavers — pari pour l\'instant déçu.'
          },
          {
            tag: 'Fondée en 1994',
            titre: 'Amazon',
            description: 'D\'abord libraire en ligne, devenu le **distributeur** dominant mondial. Aussi numéro un du cloud avec **AWS** — qui fait tourner une bonne partie d\'Internet.'
          },
          {
            tag: 'Fondée en 1975',
            titre: 'Microsoft',
            description: 'Le doyen. Dominant dès les années 80 avec Windows et Office. Repositionné dans les années 2010 sur le **cloud (Azure)** et, depuis 2023, en partenaire stratégique d\'**OpenAI**.'
          }
        ]
      }
    },

    {
      type: 'widget',
      titre: 'Combien d\'humains connectés au cours du temps ?',
      composant: 'SelecteurValeurs',
      params: {
        unite: 'utilisateurs Internet',
        indexInitial: 0,
        options: [
          { label: '1990', valeur: '2,6 millions', description: 'Internet est essentiellement universitaire. Le Web n\'a pas encore un an d\'existence publique.' },
          { label: '2000', valeur: '414 millions', description: 'Sortie de la bulle dot-com. Environ 7 % de la population mondiale est connectée, presque exclusivement par modem téléphonique.' },
          { label: '2010', valeur: '2 milliards', description: 'Le haut débit s\'est généralisé dans les pays riches. Le mobile commence à porter la croissance, notamment dans les pays émergents.' },
          { label: '2020', valeur: '4,7 milliards', description: 'Plus de **60 %** de l\'humanité est connectée. La pandémie de Covid-19 accélère encore la numérisation des usages.' },
          { label: '2026', valeur: '5,6 milliards', description: 'Près de **70 %** de la population mondiale est en ligne. La croissance ralentit, butant sur l\'Afrique rurale et les zones défavorisées.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Web3, IA et <em>nouvelles frontières</em>',
      contenu_md:
`Au tournant des années 2020, deux mouvements bousculent l\'ordre établi.

Le **Web3** propose, autour de la **blockchain** et des **cryptomonnaies**, un Internet décentralisé où la propriété des données et des actifs numériques reviendrait aux utilisateurs plutôt qu\'aux plateformes. Beaucoup de promesses, des résultats inégaux ; la finance décentralisée et les monnaies numériques en sont les retombées les plus tangibles. *([[monnaies-numeriques]])*

L\'**IA générative**, surtout, redessine l\'expérience même du Web. Depuis ChatGPT (fin 2022), les utilisateurs interrogent de plus en plus des **assistants conversationnels** plutôt que des moteurs de recherche. Le rapport entre humain et information est en train de basculer une nouvelle fois. *([[ia-generative]])*`
    },

    {
      type: 'encadre',
      label: 'Les enjeux ouverts',
      contenu_md: 'Internet n\'est plus aussi universel qu\'on l\'a cru. Trois inquiétudes structurent les débats contemporains. La **fragmentation** : la Chine, la Russie, l\'Iran ont construit des sous-Internets contrôlés, et le réseau mondial menace de se *splinternétiser*. La **surveillance** : entre États (révélations Snowden, 2013) et plateformes privées (publicité ciblée, données comportementales), nos vies numériques sont scrutées comme jamais. La **souveraineté numérique** : l\'Europe, en particulier, prend conscience de sa dépendance aux infrastructures américaines, et tente — avec un succès mitigé — de construire des alternatives.'
    }

  ],

  quiz: [
    {
      q: 'Qu\'a transmis ARPANET comme tout premier message, le 29 octobre 1969 ?',
      options: [
        'Le mot "hello"',
        'Le mot tronqué "lo" (un "login" qui a planté)',
        'Le mot "test"',
        'Une suite de chiffres'
      ],
      correcte: 1,
      explication: 'L\'étudiant tapait "login" depuis UCLA vers Stanford. Le système a planté après les deux premières lettres. Le tout premier message d\'Internet aura donc été un simple "lo".'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Internet et le Web désignent la même chose.',
      reponse: false,
      explication: 'Internet est le réseau physique et logique mondial, fondé sur TCP/IP. Le Web (HTTP/HTML/URL, inventé par Berners-Lee en 1989-1991) n\'est qu\'une application qui tourne par-dessus Internet, au même titre que l\'email, le FTP ou la visio.'
    },
    {
      q: 'À qui doit-on l\'invention du Web ?',
      options: [
        'Vinton Cerf et Robert Kahn',
        'Ray Tomlinson',
        'Tim Berners-Lee, au CERN',
        'Marc Andreessen, avec Netscape'
      ],
      correcte: 2,
      explication: 'Tim Berners-Lee, ingénieur britannique du CERN, propose en 1989 le concept et le développe en 1990-1991 : il invente simultanément HTTP, HTML et l\'URL. Le CERN place la technologie dans le domaine public en 1993.'
    },
    {
      q: 'Pourquoi Ray Tomlinson a-t-il choisi l\'arobase @ pour l\'email en 1971 ?',
      options: [
        'C\'était le symbole de la DARPA',
        'C\'était le symbole pour "à" en latin médiéval',
        'Parce qu\'il n\'apparaissait dans aucun nom propre, ce qui en faisait un séparateur sans risque d\'ambiguïté',
        'Il avait été imposé par la norme ASCII'
      ],
      correcte: 2,
      explication: 'Tomlinson cherchait un caractère qui ne figurerait jamais dans un nom d\'utilisateur ou de machine. L\'arobase, alors quasiment inutilisée sur les claviers, a été un choix pragmatique — qui a fait sa fortune.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces étapes du développement d\'Internet dans l\'ordre chronologique :',
      items: [
        'Premier message envoyé sur ARPANET',
        'Bascule officielle sur les protocoles TCP/IP',
        'Invention du Web au CERN',
        'Lancement de Netscape',
        'Éclatement de la bulle dot-com',
        'Sortie de l\'iPhone'
      ],
      explication: 'ARPANET (1969) → TCP/IP (1983) → Web au CERN (1989-1991) → Netscape (1994) → Bulle dot-com (2000) → iPhone (2007). Six décennies condensées en six jalons.'
    },
    {
      q: 'Quel pays a lancé en 1980 un réseau télématique grand public à grande échelle, bien avant le Web ?',
      options: ['Le Japon', 'Les États-Unis', 'La France, avec le Minitel', 'Le Royaume-Uni'],
      correcte: 2,
      explication: 'Le Minitel, distribué gratuitement par les PTT à partir de 1980, a atteint son apogée vers 1993 avec 6,5 millions de terminaux et 25 000 services. Réseau fermé, centralisé, national — il a été éteint définitivement le 30 juin 2012.'
    },
    {
      type: 'associer',
      q: 'Associe chaque GAFAM à son année de fondation :',
      paires: [
        { gauche: 'Microsoft', droite: '1975' },
        { gauche: 'Apple', droite: '1976' },
        { gauche: 'Amazon', droite: '1994' },
        { gauche: 'Google', droite: '1998' },
        { gauche: 'Facebook', droite: '2004' }
      ],
      explication: 'Microsoft (Bill Gates et Paul Allen) et Apple (Steve Jobs et Steve Wozniak) sont les vétérans de l\'informatique personnelle. Amazon, Google et Facebook sont nés à l\'ère du Web ouvert.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète la phrase suivante sur l\'algorithme fondateur de Google :',
      texte: 'L\'algorithme inventé par Larry Page et Sergey Brin pour classer les pages web s\'appelle le {PageRank}.',
      explication: 'Le PageRank évalue la pertinence d\'une page non par son seul contenu, mais par le nombre et la qualité des liens entrants. C\'est cette idée élégante qui a permis à Google d\'écraser ses concurrents au début des années 2000.'
    },
    {
      q: 'Quel événement a marqué l\'éclatement de la bulle dot-com ?',
      options: [
        'L\'attentat du 11 septembre 2001',
        'L\'effondrement du Nasdaq à partir de mars 2000',
        'La faillite de Lehman Brothers en 2008',
        'Le krach de 1987'
      ],
      correcte: 1,
      explication: 'Le Nasdaq, qui concentrait les valeurs technologiques, a perdu environ 78 % de sa valeur entre mars 2000 et octobre 2002. Des milliers de startups ont disparu, mais Amazon, eBay ou Google en sont sortis renforcés.'
    },
    {
      q: 'Que désigne précisément l\'expression "Web 2.0" ?',
      options: [
        'La deuxième version technique du protocole HTTP',
        'Le passage d\'un web statique à un web où les utilisateurs produisent eux-mêmes le contenu',
        'L\'arrivée du haut débit',
        'Le passage à la 4G mobile'
      ],
      correcte: 1,
      explication: 'Vers 2004-2005, des plateformes comme Wikipedia, YouTube, Facebook ou Twitter font basculer le web vers un modèle participatif où l\'utilisateur publie, commente, taggue, partage. Le contenu généré par les utilisateurs devient la matière première.'
    },
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Les protocoles TCP/IP ont été inventés par Tim Berners-Lee au CERN.',
      reponse: false,
      explication: 'TCP/IP est l\'œuvre de Vinton Cerf et Robert Kahn, à partir de 1973, et a été adopté officiellement par ARPANET le 1er janvier 1983. Tim Berners-Lee, lui, invente le Web (HTTP, HTML, URL) en 1989-1991 — par-dessus une infrastructure TCP/IP déjà existante.'
    },
    {
      q: 'Quel produit, lancé en 2007, a fait basculer Internet vers le mobile ?',
      options: [
        'Le BlackBerry',
        'L\'iPhone d\'Apple',
        'Le Samsung Galaxy',
        'Le Nokia N95'
      ],
      correcte: 1,
      explication: 'L\'iPhone, dévoilé par Steve Jobs en janvier 2007, redéfinit l\'expérience mobile : écran tactile, navigateur web complet, App Store dès 2008. Le trafic Internet mobile dépasse celui du desktop dès 2016.'
    },
    {
      type: 'texte-a-trou',
      q: 'Complète la phrase suivante sur la fragmentation contemporaine d\'Internet :',
      texte: 'On désigne par le mot-valise {splinternet} la tendance d\'Internet à se fragmenter en sous-réseaux nationaux contrôlés (Chine, Russie, Iran).',
      explication: 'Le terme "splinternet" (de "splinter", éclat, + "internet") décrit l\'érosion de l\'Internet ouvert mondial au profit de bulles juridictionnelles séparées par leurs lois, leurs filtres et leurs infrastructures.'
    }
  ],

  vocabulaire: [
    {
      terme: 'ARPANET',
      definition: `Premier réseau à **commutation de paquets**, lancé en 1969 par la **DARPA** américaine pour interconnecter quelques centres universitaires. Ancêtre direct d'Internet, il a basculé sur [TCP/IP]{accent} le 1er janvier 1983.`
    },
    {
      terme: 'Commutation de paquets',
      definition: `Technique fondatrice des réseaux modernes : l'information est découpée en **paquets** indépendants qui empruntent chacun leur propre chemin à travers le réseau, plutôt que de monopoliser une ligne dédiée. Robuste, résiliente, économe.`
    },
    {
      terme: 'TCP/IP',
      definition: `Couple de protocoles standardisés en 1983 par **Vinton Cerf** et **Robert Kahn**. *IP* gère l'adressage unique de chaque machine, *TCP* assure la fiabilité de la transmission. Constituent la langue commune qui unifie Internet.`
    },
    {
      terme: 'Web',
      definition: `Application d'Internet inventée par **Tim Berners-Lee** au CERN (1989-1991), reposant sur trois piliers : **HTTP** (protocole de transfert), **HTML** (langage des pages), **URL** (système d'adresses). À distinguer d'Internet lui-même, le réseau sous-jacent.`
    },
    {
      terme: 'PageRank',
      definition: `Algorithme fondateur de Google (Page et Brin, 1998) qui classe une page web selon le **nombre et la qualité des liens entrants** qu'elle reçoit. Premier moteur à évaluer la pertinence par la topologie du graphe plutôt que par le seul contenu textuel.`
    },
    {
      terme: 'Web 2.0',
      definition: `Tournant des années 2004-2005 où les utilisateurs cessent d'être consommateurs passifs et deviennent **producteurs de contenu** (blogs, wikis, réseaux sociaux). La publicité ciblée fondée sur les données comportementales en devient le modèle économique dominant.`
    },
    {
      terme: 'GAFAM',
      definition: `Acronyme désignant les cinq plateformes structurantes de l'Internet contemporain : **Google, Apple, Facebook (Meta), Amazon, Microsoft**. Concentrent l'essentiel du trafic, de l'attention et des revenus publicitaires mondiaux.`
    },
    {
      terme: 'Splinternet',
      definition: `Mot-valise (*splinter* + *internet*) désignant la **fragmentation** du réseau mondial en sous-Internets nationaux contrôlés (Chine, Russie, Iran), séparés par leurs lois, leurs filtres et leurs infrastructures. Inverse de l'idéal d'un réseau universel ouvert.`
    },
    {
      terme: 'DNS',
      definition: `*Domain Name System* (1983) : annuaire distribué qui traduit les noms lisibles par les humains (*example.com*) en **adresses IP** numériques. Sans lui, Internet serait inutilisable au quotidien.`
    },
    {
      terme: 'Minitel',
      definition: `Réseau télématique grand public français (1980-2012), distribué gratuitement par les PTT. Préfiguration nationale d'un Internet de services, mais **fermé** et **centralisé** — modèle écrasé par l'ouverture du Web.`
    }
  ]

});
