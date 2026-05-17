/* ===================================================================
   SUJET — La Route de la Soie
   ===================================================================
   Quinze siècles d'échanges entre l'Orient et l'Occident.
   Domaines : Histoire, Géopolitique
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'route-de-la-soie',
    titre: 'La <em>Route de la Soie</em>',
    domaines: ['Histoire', 'Géopolitique'],
    tags: ['chine', 'asie centrale', 'commerce', 'mongols', 'marco polo', 'peste'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['empire-mongol', 'empire-byzantin', 'empire-ottoman', 'ecriture-cuneiforme', 'capitalisme'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Pendant quinze siècles, un réseau de routes terrestres et maritimes a relié la Chine, l\'Inde, la Perse, le monde arabe et la Méditerranée. Au-delà des marchandises, ces routes ont transporté des religions, des techniques, des maladies, et l\'idée même qu\'un monde plus vaste existait au-delà de l\'horizon.`,

  points_cles: [
    `Le terme **« Route de la Soie »** n\'apparaît qu\'en **1877**, sous la plume du géographe allemand **Ferdinand von Richthofen** (*Seidenstrasse*). Avant lui, on parlait simplement des **routes** entre Orient et Occident.`,
    `Il ne s\'agit pas d\'**une seule route**, mais d\'un **réseau** dense de voies terrestres et maritimes, organisé autour d\'**oasis** caravanières (Samarcande, Boukhara, Kachgar) et de ports majeurs.`,
    `Les flux s\'intensifient sous la dynastie chinoise **Han** (IIᵉ siècle av. J.-C.), notamment grâce à l\'envoyé impérial **Zhang Qian** en Asie centrale (138 av. J.-C.). Apogée de la route terrestre sous la *Pax Mongolica* du XIIIᵉ siècle ([[empire-mongol]]).`,
    `Marchandises emblématiques : **soie** chinoise (monopole jusqu\'au VIᵉ siècle), **épices** indiennes, **chevaux** des steppes, **verre** romain, **argent** européen, **papier** et **poudre à canon** depuis la Chine.`,
    `Plus que les marchandises, ce sont les **idées et techniques** qui circulent : **bouddhisme** de l\'Inde vers la Chine, **islam** vers l\'Asie centrale, papier, imprimerie, boussole, mathématiques indo-arabes.`,
    `Les **peuples nomades** des steppes — Scythes, Xiongnu, Turcs, Mongols — sont **les acteurs essentiels** : protecteurs ou pillards, ils contrôlent l\'essentiel des routes terrestres.`,
    `**Marco Polo** (1254-1324) séjourne en Chine sous **Kubilai Khan** entre 1271 et 1295. Son *Livre des Merveilles* fascine l\'Europe et nourrit indirectement, deux siècles plus tard, les **Grandes Découvertes**.`,
    `La **peste noire** (1346-1353) circule par ces mêmes routes : partie des steppes mongoles, elle tue **un tiers à la moitié** de la population européenne. Les routes maritimes portugaises (vers 1500) marquent le déclin progressif des voies terrestres.`
  ],

  carte_mentale: {
    central: 'soie',
    noeuds: [
      { id: 'soie', label: 'Route de la Soie', description: 'Réseau terrestre et maritime reliant Chine, Inde, Perse, monde arabe et Méditerranée. IIᵉ siècle av. J.-C. — XVᵉ siècle.' },
      { id: 'origines', label: 'Origines', description: 'Diplomatie Han et expansion chinoise vers l\'Asie centrale. IIᵉ siècle av. J.-C.' },
      { id: 'voies', label: 'Voies', description: 'Plusieurs corridors : steppique au nord, oasis du Tarim, route persane, voies maritimes.' },
      { id: 'marchandises', label: 'Marchandises', description: 'Soie, épices, chevaux, verre, métaux précieux, esclaves, fourrures.' },
      { id: 'idees', label: 'Idées et techniques', description: 'Bouddhisme, islam, christianisme nestorien, papier, imprimerie, boussole, mathématiques.' },
      { id: 'acteurs', label: 'Acteurs', description: 'Marchands sogdiens, perses, arabes, juifs, italiens. Nomades. États-relais.' },
      { id: 'apogee', label: 'Apogée mongole', description: 'XIIIᵉ-XIVᵉ siècles. La *Pax Mongolica* sécurise les routes sur 8 000 km.' },
      { id: 'declin', label: 'Déclin', description: 'Peste noire, fragmentation politique, routes maritimes européennes.' },

      // Sous-niveau voies
      { id: 'tarim', label: 'Bassin du Tarim', description: 'Au cœur du désert du **Taklamakan**, des oasis échelonnées (Kachgar, Khotan, Kucha) servent de relais aux caravanes.', parent: 'voies' },
      { id: 'samarcande', label: 'Samarcande', description: 'Oasis fabuleuse d\'**Ouzbékistan**. Carrefour incontournable des routes vers l\'Inde, la Perse, la Chine. Capitale de **Tamerlan** au XIVᵉ siècle.', parent: 'voies' },
      { id: 'maritime', label: 'Routes maritimes', description: 'Ports indiens, golfe Persique, mer Rouge, mer de Chine. Plus rapides, plus rentables que la terre dès l\'Antiquité tardive.', parent: 'voies' },

      // Sous-niveau idées
      { id: 'bouddhisme', label: 'Bouddhisme', description: 'Naissance en **Inde** (Vᵉ siècle av. J.-C.). Diffusion vers la Chine via les routes du Tarim aux Iᵉʳ-IIIᵉ siècles ap. J.-C. Grottes de **Mogao** (Dunhuang).', parent: 'idees' },
      { id: 'papier', label: 'Papier', description: 'Inventé en **Chine** au IIᵉ siècle av. J.-C. Atteint Samarcande en 751 ap. J.-C. (bataille du Talas), Bagdad en 793, l\'Europe au XIIᵉ siècle. **Mille ans** de voyage.', parent: 'idees' },

      // Sous-niveau apogée
      { id: 'mongols', label: 'Mongols', description: 'Sous **Gengis Khan** et ses successeurs, l\'empire (voir [[empire-mongol]]) couvre l\'essentiel des routes terrestres et impose la *Pax Mongolica* — un commerce sécurisé sur 8 000 km.', parent: 'apogee' },
      { id: 'marcopolo', label: 'Marco Polo', description: '**1254-1324**. Marchand vénitien. Vit en Chine **17 ans** auprès de Kubilai Khan. Son *Livre des Merveilles* (1298) ouvre l\'imaginaire européen sur l\'Asie.', parent: 'apogee' },

      // Sous-niveau déclin
      { id: 'peste', label: 'Peste noire', description: 'Partie des steppes mongoles vers **1346**. Atteint Caffa en 1346, l\'Europe en 1347. Tue **un tiers à la moitié** de la population européenne.', parent: 'declin' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Un <em>réseau</em>, pas une route',
      contenu_md:
`Le nom est trompeur. La *« Route de la Soie »* — *Seidenstrasse* en allemand — a été inventée en **1877** par le géographe **Ferdinand von Richthofen**, dans un ouvrage savant sur la Chine. Avant lui, personne ne parlait ainsi : on parlait simplement des **routes** entre Orient et Occident, ou *via Serica*, voie chinoise.

Et ce n\'est pas **une** route, mais un **réseau** complexe et mouvant. Une dizaine de grands corridors, mille pistes, des relais d\'**oasis** dans les déserts, des cols dans les montagnes, des ports sur les mers. La géographie commande tout : pour aller de la Chine à la Perse, il faut contourner — par le nord ou par le sud — le **désert du Taklamakan**, plus aride que le Sahara ; franchir les passes du **Pamir**, à 4 000 mètres d\'altitude ; traverser les steppes contrôlées par des peuples nomades.

Aucune caravane ne fait jamais le trajet complet de **Xi\'an à Antioche** — soit près de **8 000 km**. Les marchandises sont **transportées par étapes**, achetées et revendues à chaque grand carrefour — Samarcande, Boukhara, Merv, Bagdad —, prenant de la valeur à chaque escale. Une étoffe de soie qui vaut quelques pièces en Chine peut valoir son poids d\'or à Rome. Pline l\'Ancien s\'inquiétait déjà, au Iᵉʳ siècle, du **déficit commercial** de l\'Empire romain avec l\'Orient — chaque année, écrivait-il, **100 millions de sesterces** partent en Inde et en Chine. Ces circuits de plus-value entre comptoirs préfigurent, à plusieurs siècles de distance, les mécanismes du [[capitalisme]] marchand qui s\'épanouira à Venise et à Gênes.`
    },

    {
      type: 'encadre',
      label: 'Soie, secret d\'État',
      contenu_md: `La **soie** est issue d\'un **cocon de ver à soie** (*Bombyx mori*) qui se nourrit exclusivement de feuilles de mûrier. Le procédé de production — sériciculture, dévidage, tissage — est connu en Chine depuis le **IIIᵉ millénaire av. J.-C.** Pendant **trois mille ans**, la Chine garde un **monopole absolu**, jalousement protégé par peine de mort en cas d\'exportation des œufs. Le secret ne s\'évade qu\'au **VIᵉ siècle ap. J.-C.**, lorsque deux moines nestoriens auraient — selon la légende — ramené à Constantinople des œufs cachés dans leurs cannes de bambou. La sériciculture pénètre alors progressivement l\'[[empire-byzantin]], puis l\'Italie, et enfin Lyon.`
    },

    {
      type: 'widget',
      titre: 'Quinze siècles d\'échanges, en jalons',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '138 av. J.-C.', titre: 'Mission de Zhang Qian', description: 'L\'empereur Han Wudi envoie son émissaire **Zhang Qian** vers l\'Asie centrale pour nouer des alliances contre les **Xiongnu**. À son retour, treize ans plus tard, il rapporte des informations sur les royaumes occidentaux : amorce des routes officielles.' },
          { date: 'Iᵉʳ s. ap. J.-C.', titre: 'Apogée commerciale antique', description: 'Sous la dynastie **Han** et l\'**Empire romain** ([[rome-antique]]), les flux atteignent un premier maximum. La soie chinoise est portée par les élites romaines — au scandale des moralistes.' },
          { date: 'IIIᵉ s.', titre: 'Diffusion du bouddhisme', description: 'Le **bouddhisme**, né en Inde au Vᵉ siècle av. J.-C., remonte par les routes du Tarim vers la **Chine**. Les grottes de **Mogao** (Dunhuang) sont creusées à partir de 366 ap. J.-C.' },
          { date: '751', titre: 'Bataille du Talas', description: 'Choc entre une armée chinoise **Tang** et une armée **abbasside**. Victoire arabe. Les **prisonniers chinois** transmettent à Samarcande le secret du **papier**, qui gagnera Bagdad puis l\'Europe.' },
          { date: 'IXᵉ-Xᵉ s.', titre: 'Marchands sogdiens et arabes', description: 'Les **Sogdiens** (Iraniens d\'Asie centrale) dominent le commerce terrestre. Les **Arabes** prennent le contrôle des routes maritimes de l\'océan Indien.' },
          { date: '1206-1260', titre: 'Empire mongol', description: '**Gengis Khan** et ses successeurs unifient un empire qui s\'étend de la Corée à la Hongrie ([[empire-mongol]]). La *Pax Mongolica* permet pour la première fois le franchissement direct de l\'Eurasie.' },
          { date: '1271-1295', titre: 'Marco Polo en Chine', description: 'Le marchand vénitien **Marco Polo** séjourne **17 ans** à la cour de **Kubilai Khan**. Son *Livre des Merveilles*, dicté à un compagnon de prison à Gênes en 1298, devient un best-seller européen.' },
          { date: '1346-1353', titre: 'Peste noire', description: 'Partie des steppes mongoles, la peste atteint **Caffa** (Crimée) en 1346, l\'Europe l\'année suivante. **Un tiers à la moitié** des Européens meurent. Le commerce s\'effondre, la *Pax Mongolica* aussi.' },
          { date: '1370-1405', titre: 'Tamerlan', description: '**Tamerlan** (Timour) tente de restaurer l\'empire mongol depuis Samarcande. Conquêtes brutales mais éphémères. Sa cour est l\'un des derniers grands moments de la route terrestre.' },
          { date: '1497-1498', titre: 'Vasco de Gama aux Indes', description: 'Le Portugais **Vasco de Gama** contourne l\'Afrique et arrive à **Calicut** (Inde) par mer. Les Européens accèdent directement aux épices et à la soie sans intermédiaires : la **route terrestre** perd sa raison d\'être.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Les <em>oasis</em>, capitales du désert',
      contenu_md:
`Le réseau ne pouvait fonctionner sans un chapelet d\'**oasis** — villes-monde miniatures, jaillies de l\'aridité grâce à une source ou à un fleuve souterrain. Aucune caravane n\'aurait pu traverser le **Taklamakan** sans relais. À chaque escale, on échangeait, on s\'approvisionnait, on payait des taxes, on apprenait des langues.

**Samarcande**, dans l\'actuel Ouzbékistan, est la plus célèbre. Ville déjà mille fois millénaire — Alexandre le Grand l\'avait conquise en 329 av. J.-C. — elle culmine sous **Tamerlan** au XIVᵉ siècle : monuments turquoise, place du **Régistan**, observatoire d\'**Ulugh Beg** où l\'on dresse au XVᵉ siècle un catalogue d\'étoiles d\'une précision sans équivalent avant Tycho Brahé. Boukhara, ville voisine, est un centre intellectuel islamique majeur — c\'est là que naît **Avicenne** en 980, le plus grand médecin et philosophe du monde arabe médiéval.

À l\'est, dans le **bassin du Tarim**, une autre série d\'oasis jalonne la route : **Kachgar**, **Khotan** (réputée pour son jade), **Kucha**, **Dunhuang**. C\'est à Dunhuang, dans les **grottes de Mogao**, que les bouddhistes vont creuser à partir de 366 ap. J.-C. près de 500 sanctuaires couverts de **fresques** : un trésor d\'art religieux, comparable à celui de Lascaux pour la préhistoire. Et c\'est là, au début du XXᵉ siècle, que sera retrouvé le plus ancien livre imprimé daté de l\'histoire : un **Sūtra du Diamant** de **868 ap. J.-C.** — soit **600 ans avant Gutenberg**.

Ces oasis sont aussi des **carrefours linguistiques** : on y parle chinois, sogdien, persan, sanskrit, tibétain, ouïgour, arabe. Les marchands **sogdiens**, peuple iranien de Samarcande, dominent les routes pendant près de mille ans — leur langue est la *lingua franca* du commerce intercontinental jusqu\'au IXᵉ siècle.`
    },

    {
      type: 'widget',
      titre: 'Quatre marchandises emblématiques',
      composant: 'SelecteurValeurs',
      params: {
        options: [
          {
            label: 'Soie',
            valeur: 'Chine → Europe',
            description: 'Tissu de luxe absolu. Monopole chinois pendant 3000 ans. Évadé vers Byzance au VIᵉ siècle. Pèse une fortune en regard de son poids.'
          },
          {
            label: 'Épices',
            valeur: 'Inde, Indonésie → Europe',
            description: 'Poivre, cannelle, clous de girofle, muscade. Source des plus grosses fortunes médiévales. Motrice des Grandes Découvertes européennes.'
          },
          {
            label: 'Chevaux',
            valeur: 'Steppes → Chine',
            description: 'La Chine importe massivement les chevaux des nomades — sans eux, pas de cavalerie face aux Xiongnu. Échange classique : soie contre chevaux.'
          },
          {
            label: 'Papier',
            valeur: 'Chine → monde',
            description: 'Inventé en Chine vers le IIᵉ siècle av. J.-C. Atteint Samarcande en 751 ap. J.-C., Bagdad en 793, l\'Europe au XIIᵉ siècle. Mille ans pour traverser l\'Eurasie.'
          },
          {
            label: 'Verre',
            valeur: 'Méditerranée → Asie',
            description: 'Le verre romain et syrien voyage vers la Chine, où il est rare et précieux. Des fragments romains ont été retrouvés jusqu\'en Corée et au Japon.'
          },
          {
            label: 'Esclaves',
            valeur: 'Eurasie',
            description: 'Composante massive et souvent passée sous silence. Les marchands arabes et juifs (Radhanites) trafiquent depuis l\'Europe de l\'Est (d\'où le mot **slave**/esclave).'
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>rôle</em> des nomades',
      contenu_md:
`On ne comprend rien à la Route de la Soie si l\'on oublie les **peuples nomades** des steppes. Pendant deux millénaires, ils sont les véritables maîtres de l\'Eurasie centrale — ces immenses plaines herbeuses qui s\'étendent de la Mandchourie à la Hongrie.

Les sédentaires — Chinois, Perses, Romains, Byzantins — les craignent et les méprisent. Mais sans eux, rien ne circule. Les nomades **élèvent les chevaux** qui portent les caravanes, **gardent ou pillent les routes** selon leurs humeurs et leurs intérêts. Ils sont à la fois **protecteurs** (quand les flux leur rapportent en taxes ou en cadeaux) et **prédateurs** (quand les caravanes représentent un butin plus immédiat).

Au IIᵉ siècle av. J.-C., ce sont les **Xiongnu** qui imposent leur domination — c\'est contre eux que la Chine construit les premiers tronçons de la **Grande Muraille**. Puis, au fil des siècles, viennent les **Huns** (qui terroriseront Rome au Vᵉ siècle), les **Turcs**, les **Ouïgours**, les **Khazars**, les **Petchénègues**, les **Coumans**. Et finalement, au XIIIᵉ siècle, les **Mongols** de **Gengis Khan** : pour la première et la dernière fois, un seul empire — voir [[empire-mongol]] — unifie toute l\'Eurasie steppique.

C\'est l\'apogée. Sous la **Pax Mongolica**, du milieu du XIIIᵉ au milieu du XIVᵉ siècle, on peut, paraît-il, traverser tout le continent *« avec une jeune fille portant un plat d\'or sur la tête »* sans craindre un brigand. Les flux **explosent**. C\'est à ce moment que des Européens — Marco Polo, **Guillaume de Rubrouck**, **Giovanni da Pian del Carpine** — parviennent personnellement, et pour la première fois en masse, jusqu\'en Chine.`
    },

    {
      type: 'encadre',
      label: 'Marco Polo, témoin du sommet',
      contenu_md: `**Marco Polo** (1254-1324) est un marchand vénitien qui part en 1271 pour la Chine avec son père et son oncle, eux-mêmes anciens voyageurs en Asie. Il y séjourne **dix-sept ans** auprès de **Kubilai Khan**, petit-fils de Gengis Khan et empereur mongol de Chine. À son retour à Venise en 1295, il est fait prisonnier par les Génois après une bataille navale — et c\'est dans sa cellule génoise qu\'il dicte à un compagnon, **Rustichello de Pise**, le *Livre des Merveilles*. Le succès est immédiat et durable : on en compte plus de **150 manuscrits** au Moyen Âge — chiffre énorme pour l\'époque. Christophe Colomb, deux siècles plus tard, en possèdera un exemplaire couvert d\'**annotations marginales**. C\'est en cherchant le Cathay de Marco Polo qu\'il rencontrera l\'Amérique.`
    },

    {
      type: 'texte',
      titre: 'Les <em>idées</em> voyagent aussi',
      contenu_md:
`Si l\'histoire ne retient souvent que la soie et les épices, la Route a transporté quelque chose d\'incomparablement plus précieux : des **idées**, des **religions**, des **techniques**, des **maladies**.

Le **bouddhisme** naît en Inde au Vᵉ siècle av. J.-C. Il remonte par les routes du Tarim et pénètre la Chine au début de notre ère — où il s\'enracine durablement, modifiant en profondeur la culture chinoise. Le **manichéisme**, le **christianisme nestorien**, le **zoroastrisme** suivent les mêmes corridors. Plus tard, c\'est l\'**islam** qui se diffuse en Asie centrale à partir du VIIIᵉ siècle, transformant Samarcande, Boukhara, Kachgar en métropoles musulmanes.

Les **techniques** circulent. Le **papier**, inventé en Chine au IIᵉ siècle av. J.-C., met près de mille ans pour atteindre l\'Europe (XIIᵉ siècle) — mais il y arrive, et il rend possible l\'imprimerie de Gutenberg trois siècles plus tard, et donc l\'humanisme de la [[renaissance-italienne]]. La **boussole**, la **poudre à canon**, l\'**imprimerie elle-même** sont des inventions chinoises diffusées par ces mêmes routes. Dans l\'autre sens, les **mathématiques indo-arabes** — chiffres, zéro, algèbre — voyagent de l\'Inde vers Bagdad puis vers l\'Europe via l\'Espagne musulmane.

Et la Mésopotamie — berceau ancien de l\'**écriture** ([[ecriture-cuneiforme]]) — reste, à toutes les époques, un carrefour incontournable de ces flux entre Méditerranée et Asie.`
    },

    {
      type: 'widget',
      titre: 'Quatre transmissions majeures',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `Le bouddhisme vers la Chine`,
            description: `Né en **Inde** au Vᵉ siècle av. J.-C., il pénètre en Chine via les **routes du Tarim** aux Iᵉʳ-IIᵉ siècles. Implantation durable, fusion avec le taoïsme. Aujourd\'hui encore, la majorité des **bouddhistes** du monde sont en Asie de l\'Est.`
          },
          {
            titre: `Le papier vers l\'Occident`,
            description: `Inventé en Chine vers le **IIᵉ siècle av. J.-C.**, le papier atteint **Samarcande en 751** (après la bataille du Talas), **Bagdad en 793**, l\'**Espagne au Xᵉ siècle**, l\'Italie au XIIIᵉ. Sans lui, ni l\'imprimerie, ni l\'humanisme, ni la science moderne.`
          },
          {
            titre: `L\'islam vers l\'Asie centrale`,
            description: `Conquêtes arabes du VIIIᵉ siècle. Bataille du Talas (751). Conversion progressive des Turcs et des Mongols (à partir du XIVᵉ siècle). L\'islam devient la religion dominante de toute l\'Asie centrale — héritage encore très visible aujourd\'hui.`
          },
          {
            titre: `La peste noire vers l\'Europe`,
            description: `Partie des steppes mongoles vers **1346**, transmise par les puces des rats noirs sur les routes commerciales. Atteint Caffa (Crimée), puis l\'Europe l\'année suivante. **25 à 50 millions** de morts européens en cinq ans. La transmission par les routes a un coût.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>déclin</em>',
      contenu_md:
`Plusieurs causes convergent pour effacer progressivement la Route terrestre à partir du milieu du XIVᵉ siècle.

La **peste noire** (1346-1353) brise les flux et les sociétés. Dans certaines villes d\'Asie centrale, la population met deux siècles à se reconstituer. La **fragmentation politique** de l\'empire mongol — qui s\'éclate dès la mort de Möngke en 1259 — supprime la *Pax Mongolica* qui rendait possible la traversée continue. Les routes redeviennent dangereuses, contrôlées par des seigneurs locaux hostiles entre eux. **Tamerlan** (1370-1405) tente de restaurer un empire centralisé depuis Samarcande, mais son empire ne lui survit pas.

Au XVᵉ siècle, la **dynastie Ming** chinoise, après les grandes expéditions navales de **Zheng He** (1405-1433), se replie sur elle-même : interdiction de quitter le pays, fermeture des ports. Le grand acheteur se retire. Et la chute de Constantinople en **1453** (voir [[empire-byzantin]]) renforce le verrou ottoman ([[empire-ottoman]]) sur les débouchés méditerranéens — pas une fermeture totale, mais des taxes et des intermédiaires supplémentaires.

C\'est précisément ce verrou qui pousse les Européens à **chercher des routes alternatives par la mer**. En **1488**, **Bartolomeu Dias** double le cap de Bonne-Espérance. En **1498**, **Vasco de Gama** arrive à Calicut par voie maritime. En **1492**, Christophe Colomb cherchait les Indes par l\'ouest — il bute sur l\'Amérique. La mondialisation maritime européenne déclasse en un demi-siècle ce qui s\'était construit sur quinze. Samarcande et Boukhara, peu à peu, deviennent des **provinces dormantes** — jusqu\'à leur réveil contemporain.

Aujourd\'hui, la Chine relance le concept, sous le nom de **« Nouvelles Routes de la Soie »** (initiative *Belt and Road*, 2013) : infrastructures, voies ferrées, ports, fibres. Le réseau eurasien renaît — sous d\'autres formes, avec d\'autres enjeux.`
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'La "Route de la Soie" est une seule route bien tracée, parcourue de bout en bout par des caravanes allant de Chine à Rome.',
      reponse: false,
      explication: 'Faux sur les deux points. C\'est un réseau dense de corridors terrestres et maritimes, articulé autour d\'oasis et de ports. Et aucune caravane ne fait le trajet complet de Xi\'an à Antioche (~8 000 km) : les marchandises sont transportées par étapes, achetées et revendues à chaque grand carrefour. Le terme lui-même n\'est inventé qu\'en 1877.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces grandes phases de la Route de la Soie dans l\'ordre chronologique :',
      items: [
        'Mission de Zhang Qian envoyé en Asie centrale par les Han',
        'Bataille du Talas : les prisonniers chinois transmettent le secret du papier',
        'Marco Polo séjourne à la cour de Kubilaï Khan en Chine',
        'Peste noire partie des steppes mongoles atteint l\'Europe',
        'Vasco de Gama arrive à Calicut par voie maritime'
      ],
      explication: 'Quinze siècles d\'échanges : ouverture sous les Han, transmission technique au Talas, apogée sous la Pax Mongolica avec Marco Polo, choc de la peste noire, puis déclin avec l\'ouverture des routes maritimes européennes qui contournent les intermédiaires.'
    },
    {
      type: 'associer',
      q: 'Associe chaque marchandise à sa principale région d\'origine :',
      paires: [
        { gauche: 'Soie', droite: 'Chine (monopole jusqu\'au VIᵉ siècle)' },
        { gauche: 'Épices (poivre, cannelle, muscade)', droite: 'Inde et Indonésie' },
        { gauche: 'Chevaux', droite: 'Steppes d\'Asie centrale' },
        { gauche: 'Papier', droite: 'Chine (IIᵉ siècle av. J.-C.)' },
        { gauche: 'Verre', droite: 'Méditerranée (Rome, Syrie)' }
      ],
      explication: 'Le commerce est par essence multidirectionnel : la Chine exporte soie et papier ; l\'Inde et l\'Indonésie, les épices ; les steppes, les chevaux qui équipent la cavalerie chinoise (échange classique : soie contre chevaux) ; la Méditerranée exporte du verre vers la Chine où il est rare et précieux.'
    },
    {
      q: `Qui a inventé l\'expression "Route de la Soie" ?`,
      options: [
        `Marco Polo, au XIIIᵉ siècle`,
        `L\'empereur Han Wudi, au IIᵉ siècle av. J.-C.`,
        `Ferdinand von Richthofen, géographe allemand, en 1877`,
        `Les marchands sogdiens, au VIIᵉ siècle`
      ],
      correcte: 2,
      explication: `Le terme Seidenstrasse a été forgé en 1877 par le géographe allemand Ferdinand von Richthofen, dans un ouvrage savant sur la Chine. Aucun contemporain de la route n\'utilisait cette expression.`
    },
    {
      q: `Pourquoi parle-t-on plutôt d\'un "réseau" que d\'une "route" unique ?`,
      options: [
        `Parce que la route changeait chaque année`,
        `Parce qu\'il s\'agit d\'un ensemble de corridors terrestres et maritimes, articulés autour d\'oasis et de ports, sans qu\'aucune caravane ne fasse le trajet complet`,
        `Parce que les Chinois et les Romains n\'ont jamais eu de contact direct`,
        `Parce que la soie était transportée par des voies différentes des épices`
      ],
      correcte: 1,
      explication: `Le réseau associe des voies terrestres (route steppique, oasis du Tarim, voie persane) et des voies maritimes (mer Rouge, golfe Persique, océan Indien, mer de Chine). Les marchandises sont transmises par étapes, achetées et revendues à chaque grand carrefour.`
    },
    {
      q: `Sous quelle dynastie chinoise les routes officielles vers l\'Occident commencent-elles à s\'organiser ?`,
      options: [
        `Les Shang (XVIᵉ av. J.-C.)`,
        `Les Han (IIᵉ siècle av. J.-C.)`,
        `Les Tang (VIIᵉ siècle)`,
        `Les Ming (XVᵉ siècle)`
      ],
      correcte: 1,
      explication: `Sous la dynastie Han, et notamment grâce à la mission de l\'émissaire Zhang Qian en Asie centrale (138 av. J.-C.), la Chine ouvre les premiers contacts officiels avec les royaumes occidentaux. Les flux commerciaux s\'intensifient à partir de là.`
    },
    {
      q: `Quel rôle ont joué les Mongols dans l\'histoire de la Route de la Soie ?`,
      options: [
        `Ils ont définitivement détruit les routes`,
        `Ils ont unifié l\'Eurasie au XIIIᵉ siècle et imposé une "Pax Mongolica" qui a permis la traversée continue du continent`,
        `Ils ont colonisé la Chine sans interagir avec les routes`,
        `Ils ont remplacé les caravanes par des navires`
      ],
      correcte: 1,
      explication: `Sous Gengis Khan et ses successeurs, l\'empire mongol couvre l\'essentiel des routes terrestres (voir empire-mongol). La Pax Mongolica (mi-XIIIᵉ — mi-XIVᵉ siècles) sécurise les routes sur 8 000 km et permet des voyages comme celui de Marco Polo.`
    },
    {
      q: `Qui est Marco Polo ?`,
      options: [
        `Un général mongol`,
        `Un marchand vénitien qui a séjourné 17 ans à la cour de Kubilai Khan en Chine, et dont le récit a fasciné l\'Europe`,
        `Un missionnaire jésuite du XVIᵉ siècle`,
        `Un cartographe portugais`
      ],
      correcte: 1,
      explication: `Marco Polo (1254-1324) est parti pour la Chine en 1271 et y a vécu 17 ans auprès de Kubilai Khan. Le Livre des Merveilles, dicté à un compagnon en prison à Gênes en 1298, est devenu un best-seller européen — Christophe Colomb en avait une copie annotée.`
    },
    {
      q: `Quel rôle a joué la bataille du Talas en 751 dans la transmission technique ?`,
      options: [
        `Elle a permis aux Mongols de prendre Bagdad`,
        `Les prisonniers chinois capturés par les Arabes ont introduit le secret de la fabrication du papier à Samarcande, puis à Bagdad et finalement à l\'Europe`,
        `Elle a ouvert la voie maritime de l\'océan Indien`,
        `Elle a interdit le commerce de la soie pour un siècle`
      ],
      correcte: 1,
      explication: `La bataille du Talas, près de l\'actuelle frontière Kazakhstan-Kirghizstan, oppose l\'armée chinoise Tang aux Abbassides. Victoire arabe. Les prisonniers chinois transmettent à Samarcande le secret du papier, qui atteint Bagdad en 793 et l\'Europe au XIIᵉ siècle.`
    },
    {
      q: `Quelle catastrophe sanitaire majeure a circulé par les routes au XIVᵉ siècle ?`,
      options: [
        `Le choléra`,
        `La peste noire, partie des steppes mongoles, qui a tué un tiers à la moitié de la population européenne entre 1346 et 1353`,
        `La variole`,
        `La grippe espagnole`
      ],
      correcte: 1,
      explication: `Partie des steppes mongoles, la peste atteint Caffa (Crimée) en 1346, l\'Europe l\'année suivante. 25 à 50 millions de morts européens en cinq ans. Le commerce s\'effondre, la Pax Mongolica aussi.`
    },
    {
      q: `Pourquoi la Route de la Soie terrestre décline-t-elle à partir du XVᵉ siècle ?`,
      options: [
        `Parce que la soie disparaît`,
        `Parce que les Européens ouvrent des routes maritimes directes vers l\'Inde (Vasco de Gama, 1498) qui contournent les intermédiaires, et que la Chine Ming se replie sur elle-même`,
        `Parce que les Mongols détruisent toutes les oasis`,
        `Parce que les chevaux disparaissent des steppes`
      ],
      correcte: 1,
      explication: `Plusieurs causes convergent : peste noire, fragmentation de l\'empire mongol, repli de la Chine Ming, et surtout ouverture des routes maritimes européennes (Bartolomeu Dias 1488, Vasco de Gama 1498). La mondialisation maritime déclasse en un demi-siècle ce qui s\'était construit sur quinze.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Caravansérail',
      definition: `Auberge fortifiée jalonnant les routes commerciales d'Asie centrale et du Moyen-Orient. Offre aux caravanes un abri pour la nuit, un point d'eau, un marché. Chaînons indispensables de la circulation marchande sur de très longues distances.`
    },
    {
      terme: 'Sériciculture',
      definition: `Élevage du ver à soie (*Bombyx mori*) nourri exclusivement de feuilles de mûrier, en vue de la production de **soie**. Connue en Chine depuis le IIIᵉ millénaire av. J.-C., elle y reste un monopole jalousement gardé jusqu'au VIᵉ siècle ap. J.-C.`
    },
    {
      terme: 'Sogdiens',
      definition: `Peuple iranien d'Asie centrale (région de **Samarcande** et Boukhara), marchands dominants des routes terrestres pendant près de mille ans. Leur langue est la *lingua franca* du commerce intercontinental jusqu'au IXᵉ siècle.`
    },
    {
      terme: 'Oasis',
      definition: `Îlot de végétation et d'habitation au cœur d'un désert, rendu possible par une source ou un fleuve souterrain. Sur la Route de la Soie, les oasis (Samarcande, Kachgar, Dunhuang) sont des **villes-relais** indispensables où les marchandises s'échangent à chaque étape.`
    },
    {
      terme: 'Pax Mongolica',
      definition: `Période de paix imposée par l'**empire mongol** (mi-XIIIᵉ — mi-XIVᵉ siècles) sur 8 000 km d'Eurasie. Sécurise les routes terrestres et rend possible des voyages directs comme celui de [[marco-polo]] entre la Méditerranée et la Chine.`
    },
    {
      terme: 'Bouddhisme',
      definition: `Tradition religieuse et philosophique née en **Inde** au Vᵉ siècle av. J.-C. autour de l'enseignement du Bouddha. Diffusée vers la **Chine** via les routes du Tarim aux Iᵉʳ-IIIᵉ siècles, elle y fusionne avec le taoïsme et façonne durablement la culture est-asiatique.`
    },
    {
      terme: 'Compactification',
      definition: `Ici sans rapport mathématique : compactification du temps logistique d'une caravane via les **relais d'oasis**. Aucune caravane ne fait le trajet complet de Xi'an à Antioche ; les marchandises sont achetées et revendues à chaque grand carrefour, prenant de la valeur à chaque escale.`
    },
    {
      terme: 'Peste noire',
      definition: `Pandémie de **peste bubonique** (1346-1353) propagée depuis les steppes mongoles par les puces des rats noirs des routes commerciales. Tue **un tiers à la moitié** de la population européenne en cinq ans. Brise les flux marchands et contribue au déclin de la route terrestre.`
    },
    {
      terme: 'Quasar du commerce',
      definition: `Métaphore pour ces **carrefours marchands** (Samarcande, Boukhara, Bagdad) qui concentrent flux, taxes et innovations. La plus-value entre comptoirs préfigure, à plusieurs siècles de distance, les mécanismes du [[capitalisme]] marchand de Venise et de Gênes.`
    }
  ]

});
