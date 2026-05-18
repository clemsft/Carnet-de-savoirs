/* ===================================================================
   SUJET — Marco Polo
   ===================================================================
   Vingt-quatre ans hors de Venise, dix-sept à la cour du Khan, et un
   livre écrit en prison qui inventera l'Asie pour l'Europe.
   Domaine : Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'marco-polo',
    titre: '<em>Marco Polo</em>',
    domaines: ['Histoire'],
    tags: ['venise', 'mongols', 'kubilai-khan', 'soie', 'voyage', 'XIIIe-siecle', 'genes', 'rustichello'],
    difficulte: 2,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['route-de-la-soie', 'empire-mongol', 'empire-byzantin'],
    date_creation: '2026-05-17',
    date_maj: '2026-05-17'
  },

  resume: `Suivre l'aventure d'un marchand vénitien parti à 17 ans pour la Chine en 1271 et revenu 24 ans plus tard, après avoir servi 17 ans à la cour de Kubilai Khan. De prison à Gênes, il dicte le récit de son voyage à un compagnon de cellule — un texte qui deviendra le best-seller européen le plus diffusé après la Bible jusqu'à l'imprimerie, et qui inventera l'Asie pour des générations d'explorateurs européens, jusqu'à Christophe Colomb.`,

  points_cles: [
    `**Marco Polo** naît à **Venise vers 1254** dans une famille de marchands. Son père **Niccolò** et son oncle **Maffeo** ont déjà fait un premier voyage en Asie centrale (1260-1269) et y ont rencontré **Kubilai Khan**, petit-fils de Gengis Khan, qui leur a confié des messages pour le pape.`,
    `En **1271**, Marco part avec son père et son oncle pour un second voyage. Il a **17 ans**. Ils traversent l'Anatolie, la Perse, la Pamir, et arrivent à la cour de Kubilai Khan vers **1275** — soit **4 années** de voyage.`,
    `Marco entre au service du Khan. Il maîtriserait quatre langues (peut-être le mongol, le persan, le turc, l'ouïghour — pas le chinois). Pendant **17 ans**, il sillonne l'empire mongol sur des missions diplomatiques et commerciales : Yunnan, Tibet, Birmanie, Inde, peut-être Java et Sumatra.`,
    `Les Polo rentrent à Venise en **1295**. Marco a **41 ans**, parti depuis 24 ans. Il a tellement changé que sa famille ne le reconnaît pas — anecdote rapportée par Ramusio dans son édition de 1559.`,
    `En **1298**, Venise est en guerre contre Gênes. Marco arme un navire, est fait prisonnier à la bataille de **Curzola**. En prison à Gênes pendant un an, il dicte ses souvenirs à son compagnon de cellule **Rustichello de Pise**, écrivain de romans chevaleresques.`,
    `Le résultat est ***Le Devisement du monde*** (titre original français), connu aujourd'hui comme ***Le Livre des merveilles*** ou ***Il Milione*** en italien. Publié vers **1300**. Décrit la Chine ("Cathay"), le Japon ("Cipango"), l'Inde, les épices, le papier-monnaie, le charbon, les services postaux mongols.`,
    `Le livre est immédiatement **populaire et contesté** : à Venise, on le surnomme *Il Milione* (le million, en moquerie des chiffres énormes que Marco rapportait). Beaucoup le tiennent pour menteur. Sur son lit de mort en **1324**, on lui demande de se rétracter ; il répond : *« Je n'ai pas dit la moitié de ce que j'ai vu. »*`,
    `**Christophe Colomb** possédait un exemplaire latin de Marco Polo, annoté de sa main — encore conservé à la Biblioteca Colombina de Séville. C'est ce livre qui lui fait croire qu'il peut atteindre l'Asie par l'ouest. L'**Amérique** est, en un sens, une conséquence indirecte du voyage de Marco Polo.`
  ],

  carte_mentale: {
    central: 'marco-polo',
    noeuds: [
      { id: 'marco-polo', label: 'Marco Polo', description: 'Marchand vénitien (1254-1324). 24 ans en Asie, 17 ans au service de Kubilai Khan. Auteur via Rustichello du *Livre des merveilles* (~1300), un des textes les plus diffusés du Moyen Âge.' },

      { id: 'famille', label: 'Famille Polo', description: 'Famille de marchands vénitiens. Niccolò (père) et Maffeo (oncle) ont fait un premier voyage en Asie (1260-1269) avant d\'emmener Marco en 1271.' },
      { id: 'voyage', label: 'Le voyage', description: 'Parti de Venise en 1271 à 17 ans, retour en 1295 à 41 ans. 24 ans d\'absence. Itinéraire aller : Anatolie, Perse, Pamir, Asie centrale, Chine.' },
      { id: 'cour-khan', label: 'À la cour du Khan', description: '17 ans au service de Kubilai Khan, petit-fils de Gengis. Missions diplomatiques et commerciales à travers tout l\'empire mongol.' },
      { id: 'genes', label: 'Prison à Gênes', description: 'Capturé en 1298 lors de la bataille navale de Curzola entre Venise et Gênes. Un an de prison pendant lequel il dicte son récit à Rustichello.' },
      { id: 'livre', label: 'Le Livre', description: '*Le Devisement du monde* (titre français original), ~1300. Cosignée Marco Polo + Rustichello de Pise. Best-seller européen pendant 200 ans.' },
      { id: 'posterite', label: 'Postérité', description: 'Christophe Colomb (1492), Vasco de Gama, et toute l\'aventure des Grandes Découvertes s\'inspirent du livre de Marco Polo. Inventeur de l\'Asie pour l\'Europe.' },
      { id: 'authenticite', label: 'A-t-il tout inventé ?', description: 'Débat historique vivace. Plusieurs détails frappants manquent (Grande Muraille, thé, pieds bandés, écriture chinoise). Consensus actuel : il a bien voyagé, mais Rustichello a brodé.' },

      // Famille
      { id: 'venise', label: 'Venise vers 1254', description: 'République maritime au sommet de sa puissance commerciale. Comptoirs en Crimée (Soldaia/Soudak) et à Constantinople via le **quartier vénitien**. Voir [[empire-byzantin]].', parent: 'famille' },
      { id: 'premier-voyage', label: 'Premier voyage 1260-69', description: 'Niccolò et Maffeo partent en Asie centrale, rencontrent Kubilai Khan, reçoivent une *paiza* (tablette d\'or de passe-droit mongol) et un message pour le pape.', parent: 'famille' },

      // Voyage
      { id: 'itineraire', label: 'L\'itinéraire', description: 'De Venise à la cour du Khan en **4 ans** : Acre (Levant), Tabriz (Perse), Hormuz, Pamir, Khotan, Dunhuang, Karakorum, enfin Shangdu (capitale d\'été). ~12 000 km.', parent: 'voyage' },
      { id: 'duree', label: 'Durée totale', description: '**24 ans** hors de Venise — 1271 à 1295. Un voyage d\'une vie entière à l\'échelle d\'un homme du XIIIᵉ siècle, où l\'espérance de vie tournait autour de 40 ans.', parent: 'voyage' },

      // À la cour
      { id: 'kubilai', label: 'Kubilai Khan', description: '1215-1294. Petit-fils de **Gengis Khan**. Fonde la dynastie **Yuan** en Chine en 1271. Capitale d\'hiver à **Khanbalik** (Pékin actuelle), d\'été à **Shangdu** (Xanadu, immortalisé par Coleridge en 1797).', parent: 'cour-khan' },
      { id: 'missions', label: 'Missions au service du Khan', description: 'Marco rapporte avoir été émissaire en Yunnan, Tibet, Birmanie, Inde, jusqu\'à Java et Sumatra. Pas confirmé indépendamment, mais cohérent avec la pratique mongole d\'employer des étrangers comme administrateurs.', parent: 'cour-khan' },

      // Livre
      { id: 'titre', label: 'Plusieurs titres', description: 'Original français : *Le Devisement du monde* (vers 1300). Italien : *Il Milione* (surnom moqueur, "les millions") ou *Il Libro delle meraviglie*. Latin : *De consuetudinibus et conditionibus orientalium regionum*.', parent: 'livre' },
      { id: 'rustichello', label: 'Rustichello de Pise', description: 'Écrivain de **romans chevaleresques** (Arthur, Tristan). Rencontré en prison à Gênes en 1298. C\'est lui qui met en forme le récit de Marco — ce qui explique son style narratif et certains détails embellis.', parent: 'livre' },
      { id: 'contenu', label: 'Ce que le livre décrit', description: 'Chine ("Cathay"), Japon ("Cipango") jamais visité par Marco mais mentionné, Inde, océan Indien. Détails frappants : papier-monnaie, services postaux mongols (relais tous les 40 km), charbon comme combustible, exotismes invraisemblables.', parent: 'livre' },

      // Postérité
      { id: 'colomb', label: 'Christophe Colomb', description: 'Possédait un exemplaire latin **annoté de sa main** (366 notes marginales), encore conservé à la **Biblioteca Colombina** de Séville. C\'est en lisant Marco Polo qu\'il pense pouvoir atteindre l\'Asie par l\'ouest. L\'Amérique en est la conséquence.', parent: 'posterite' },
      { id: 'invention-asie', label: 'L\'Asie inventée', description: 'Pendant **200 ans** (1300-1500), Marco Polo EST la source occidentale principale sur l\'Asie. Sa géographie influence Mercator et tous les cartographes. Le mot "Cathay" survit dans les noms de compagnies (Cathay Pacific).', parent: 'posterite' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: `Une <em>famille</em> de marchands vénitiens`,
      contenu_md:
`Pour comprendre l'aventure de Marco Polo, il faut commencer par l'aventure de son **père** et de son **oncle**. Au milieu du XIIIᵉ siècle, **Venise** est au sommet de sa puissance commerciale méditerranéenne. Elle a obtenu de l'**Empire byzantin** des privilèges considérables — un **quartier vénitien** entier à Constantinople avec ses entrepôts et son tribunal autonome, voir [[empire-byzantin]] — et ses comptoirs s'étendent jusqu'à la **mer Noire** (Soldaia, l'actuelle Soudak en Crimée).

C'est de Soldaia que partent en **1260** deux frères, **Niccolò Polo** (le père de Marco) et **Maffeo Polo** (son oncle). Leur projet est commercial : vendre des bijoux et des étoffes le plus loin possible en suivant les routes caravanières. Ils traversent l'Asie centrale, et — coup de chance ou décision audacieuse — finissent par arriver à la cour de **Kubilai Khan**, petit-fils de Gengis et alors souverain de tout l'empire mongol depuis la Mongolie jusqu'à la Russie.

Kubilai les reçoit avec une curiosité réelle : peu d'Européens sont parvenus jusqu'à lui. Il les retient longuement, leur pose mille questions sur l'Occident, le christianisme, le pape, et les renvoie en Europe avec une **mission diplomatique** : qu'ils reviennent avec **cent missionnaires lettrés** et de l'huile sainte du **Saint-Sépulcre** de Jérusalem. Niccolò et Maffeo reçoivent une **paiza d'or** — une tablette de passe-droit mongol qui leur garantit la sécurité dans tout l'empire — et rentrent à Venise en **1269**, après **9 ans** d'absence.

Niccolò découvre alors qu'il a un fils, **Marco**, né vers 1254 pendant son absence et que sa femme est morte. Le garçon a 15 ans. Quand son père et son oncle décident de repartir, deux ans plus tard, pour répondre à la commande de Kubilai, Marco vient avec eux. Il a **17 ans**. Il ne reverra pas Venise avant ses 41 ans.`
    },

    {
      type: 'widget',
      composant: 'Frise',
      titre: 'La vie de Marco Polo',
      params: {
        evenements: [
          { date: '~1254', titre: 'Naissance à Venise', description: 'Marco naît dans la famille Polo, marchands vénitiens. Son père Niccolò est alors en voyage en Asie centrale (il ne reviendra qu\'en 1269).' },
          { date: '1260-1269', titre: '1ᵉʳ voyage des Polo (sans Marco)', description: 'Niccolò et Maffeo Polo, partis de **Soldaia** (Crimée), atteignent Kubilai Khan. Ils en reviennent chargés d\'une mission diplomatique pour le pape.' },
          { date: '1271', titre: 'Départ de Marco à 17 ans', description: 'Niccolò, Maffeo et Marco quittent Venise pour la cour de Kubilai. **Acre** (Palestine), puis route terrestre par la Perse, le Pamir, l\'Asie centrale.' },
          { date: '~1275', titre: 'Arrivée à la cour du Khan', description: 'Après **4 années** de voyage, les trois Polo arrivent à **Shangdu** (capitale d\'été de Kubilai) puis à **Khanbalik** (Pékin actuelle).' },
          { date: '1275-1292', titre: '17 ans au service de Kubilai', description: 'Marco entre au service direct du Khan. Missions à travers l\'empire : Yunnan, Tibet, Birmanie, Inde, peut-être plus loin. Il rapporte aussi avoir gouverné la ville de **Yangzhou** pendant 3 ans.' },
          { date: '1292-1295', titre: 'Retour par la mer', description: 'Les Polo escortent une princesse mongole jusqu\'en Perse via la **mer de Chine**, Sumatra, l\'Inde. Puis route terrestre jusqu\'à **Acre**, embarquement pour Venise.' },
          { date: '1295', titre: 'Retour à Venise', description: 'Marco a **41 ans**, parti depuis 24 ans. Selon la tradition, sa famille ne le reconnaît pas immédiatement.' },
          { date: '1298', titre: 'Bataille de Curzola', description: 'Guerre Venise–Gênes. Marco arme un navire à ses frais, participe au combat, est fait **prisonnier**.' },
          { date: '1298-1299', titre: 'Prison à Gênes', description: 'Un an de cellule pendant lequel Marco dicte ses souvenirs à son compagnon de cellule **Rustichello de Pise**, écrivain de romans chevaleresques.' },
          { date: '~1300', titre: 'Publication du Livre', description: '*Le Devisement du monde* (titre français original) circule en manuscrits. Best-seller européen immédiat, malgré le scepticisme général.' },
          { date: '8 janv. 1324', titre: 'Mort à Venise', description: 'Marco meurt à 70 ans environ. Sur son lit, on lui demande de se rétracter. Réponse fameuse : *« Je n\'ai pas dit la moitié de ce que j\'ai vu. »*' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>second voyage</em> : 4 ans pour rejoindre le Khan`,
      contenu_md:
`Quand Niccolò, Maffeo et Marco quittent Venise en **1271**, ils ont un objectif diplomatique précis (livrer le message du pape Grégoire X à Kubilai) et un voyage de plusieurs années devant eux. Ils embarquent d'abord pour **Acre** en Palestine, dernière grande place forte chrétienne du Levant après la chute de Jérusalem (1187). De là, ils prennent la route terrestre, suivant en gros le tracé de l'une des branches de la [route de la soie]{accent}.

Itinéraire reconstruit à partir du livre : **Trébizonde** (Anatolie), **Tabriz** (Perse, capitale des Ilkhanides mongols), **Ormuz** sur le golfe Persique — où ils espéraient embarquer pour rejoindre la Chine par voie maritime, mais où l'état des navires arabes les fait renoncer (Marco les décrit comme *« cousus avec du fil de coco »*, sans clous, et donc dangereux). Ils retournent donc vers le nord, à pied et à dos de chameau cette fois : **Pamir** (les "Toits du Monde"), **Kashgar**, **Khotan**, traversée du **désert du Taklamakan**, **Dunhuang** (où se trouvent les grottes bouddhiques de Mogao), enfin **Shangdu** — la capitale d'été de Kubilai, immortalisée plus tard par le poète anglais **Samuel Coleridge** sous le nom de **Xanadu** dans son poème *Kubla Khan* (1797).

Au total, le voyage aller dure **environ 4 années**. Les trois Polo arrivent à la cour de Kubilai vers **1275**. Marco a 21 ans. Il en passera **17 dans l'empire du Khan**.

Le détail fascinant rapporté par Marco : les **services postaux mongols**. Tous les **40 km environ**, des relais (*yam*) sont installés avec des chevaux frais et des hommes prêts à transporter le courrier. Un cavalier peut parcourir **600 km par jour** en se relayant — soit la distance Paris-Marseille en 24 heures, au XIIIᵉ siècle. C'est ce système qui permet à l'empire mongol, le plus vaste **empire contigu** de l'histoire (voir [[empire-mongol]]), de fonctionner administrativement.`
    },

    {
      type: 'encadre',
      label: 'L\'âge du voyage',
      contenu_md: `Marco Polo part à **17 ans** et revient à **41 ans**. Vingt-quatre ans hors de chez soi, à une époque où l'espérance de vie tournait autour de 40 ans. Quand il revient, il a passé **plus de la moitié de sa vie** à l'étranger, et il a probablement oublié une part de sa langue maternelle. La tradition vénitienne rapporte que ses propres cousins ne le reconnaissent pas — ce n'est probablement pas littéral, mais ça dit quelque chose de l'ampleur de la transformation qu'un tel voyage opère sur un homme.`
    },

    {
      type: 'texte',
      titre: `Au <em>service</em> de Kubilai Khan`,
      contenu_md:
`Ce que Marco fait pendant ses 17 années à la cour de Kubilai reste partiellement obscur. Selon son propre récit, il devient rapidement l'un des **favoris** du Khan, qui apprécie sa curiosité, ses talents d'observateur et sa maîtrise de plusieurs langues (probablement le **mongol**, le **persan**, le **turc** et peut-être l'**ouïghour** — mais **pas le chinois**, ce qui est un détail important pour évaluer son témoignage).

Le contexte historique est important. Kubilai (1215-1294) est le **petit-fils de Gengis Khan**. Il a achevé en 1279 la conquête de la **Chine du Sud** (la dynastie Song) que son grand-père et son père n'avaient pas terminée, et il règne désormais sur la **plus grande Chine de l'histoire**, intégrée à un empire mongol qui s'étend de la Pologne à la mer de Chine. Pour gouverner cet immense ensemble, les Mongols, peu nombreux par rapport à leurs sujets, recourent largement à des **administrateurs étrangers** — Persans, Arabes, Européens — qu'ils préfèrent aux fonctionnaires chinois locaux, jugés trop attachés à leur ancien empire. Le fait que Marco ait pu être employé n'est donc **pas invraisemblable**, même si les détails restent invérifiables.

Marco rapporte avoir été envoyé en **mission** à travers tout l'empire. **Yunnan** (sud-ouest de la Chine), **Tibet**, **Birmanie**, **Inde du Sud**, et même selon certains passages **Java** et **Sumatra** sur le voyage de retour. Il décrit avec précision plusieurs villes — **Quinsai** (Hangzhou, qu'il appelle *« la plus belle ville du monde »*), **Zaiton** (Quanzhou, le grand port maritime), **Kinsai**. Certaines descriptions sont si exactes — y compris des détails de circulation fluviale, de monnaie de papier, d'architecture — qu'elles sont **inattaquables** : Marco a effectivement vu ces lieux, à un moment ou un autre.

Mais le livre contient aussi des silences troublants. Marco ne mentionne **jamais** : la **Grande Muraille de Chine** (qui à l'époque n'avait pas encore sa forme actuelle, mais quand même), l'usage du **thé**, l'**écriture chinoise** (alors que c'est une des merveilles du monde), la pratique des **pieds bandés** (qui se développe sous les Song), ni le système d'**examens impériaux**. Ces absences ont fait douter certains historiens — comme **Frances Wood** dans son livre *Did Marco Polo go to China ?* (1995). Le consensus actuel reste cependant : oui, Marco a voyagé en Chine, mais il a vu **la Chine vue depuis la cour mongole**, qui était une **élite étrangère** vivant en circuit relativement séparé de la population locale. Cela explique les omissions.`
    },

    {
      type: 'widget',
      composant: 'GrilleCartes',
      titre: 'Quatre choses que Marco rapporte (et que l\'Europe ignorait)',
      params: {
        cartes: [
          { tag: 'Monnaie', titre: 'Le papier-monnaie', description: 'Les Mongols ont adopté de la Chine Song le système du **billet de banque imprimé**, garanti par l\'État. Marco le décrit avec stupeur : *« un papier qui vaut de l\'or, simplement parce que le Khan le dit. »* L\'Europe ne connaîtra le papier-monnaie qu\'au XVIIᵉ siècle (Suède, 1661).' },
          { tag: 'Combustible', titre: 'Les pierres qui brûlent', description: 'Marco décrit *« des pierres noires qui se trouvent dans les montagnes, que l\'on peut allumer comme du bois, et qui donnent une chaleur si forte qu\'elles brûlent jusqu\'au matin. »* C\'est le **charbon**, déjà utilisé massivement en Chine pour le chauffage urbain. L\'Europe le redécouvre seulement au XVIIIᵉ siècle.' },
          { tag: 'Logistique', titre: 'Les relais mongols', description: 'Système postal *yam* : un **relais tous les 40 km environ** avec chevaux frais et coursiers. Permet à un courrier urgent de parcourir **600 km par jour**. Réseau de plus de 1 400 stations à l\'apogée. Inégalé en Europe avant la poste de Louis XI au XVᵉ siècle.' },
          { tag: 'Diversité', titre: 'Les "merveilles" exotiques', description: 'Rhinocéros (qu\'il prend pour des licornes), girafes, cocotiers, épices. Marco rapporte aussi la richesse du **Japon** (qu\'il n\'a jamais visité mais qu\'on lui décrit), avec des palais aux toits couverts d\'or — image qui obsédera Colomb plus tard.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `Le <em>retour</em> et la prison génoise`,
      contenu_md:
`Vers **1292**, après 17 ans à son service, Kubilai vieillit (il a près de 80 ans), et les Polo sentent qu'il vaut mieux partir avant que la situation ne se complique à sa mort. Une occasion se présente : une princesse mongole, **Kököchin**, doit être conduite en Perse pour épouser l'**ilkhan Arghun**. Le voyage par voie terrestre est dangereux à cause des guerres entre branches rivales de la famille mongole ; on préfère donc la **voie maritime**. Les Polo sont chargés d'escorter la princesse.

Le voyage de retour est lui aussi long : ils embarquent à **Zaiton** (Quanzhou) en 1292, traversent la **mer de Chine**, **Sumatra** (où ils passent **cinq mois** à attendre la fin de la mousson), Ceylan, l'Inde du Sud, le golfe Persique, **Ormuz**. Ils arrivent en Perse en **1294** — mais l'ilkhan Arghun est déjà mort. La princesse épouse son fils Ghazan à la place. Les Polo poursuivent par terre, et arrivent enfin à **Venise en 1295**, après **24 ans** d'absence.

Trois ans plus tard, **1298**, **Venise et Gênes** sont en guerre — guerre commerciale acharnée pour le contrôle des routes méditerranéennes. Marco, devenu riche, finance un navire de guerre vénitien. À la **bataille navale de Curzola** (off la côte dalmate), la flotte vénitienne est écrasée. Marco est fait **prisonnier** et conduit à Gênes.

Dans sa cellule, il partage la captivité d'un homme étrange : **Rustichello de Pise**, écrivain de **romans chevaleresques** (cycle arthurien, Tristan, Lancelot) déjà connu et lui-même prisonnier des Génois depuis plus longtemps. Rustichello voit immédiatement l'or littéraire que représentent les histoires de Marco. Pendant **un an** de captivité, il les met en forme. Le résultat — qu'on appellera *Le Devisement du monde* en français, *Il Milione* en italien, *Le Livre des merveilles* en édition moderne — circule en manuscrit dès **1299-1300** et devient immédiatement le **plus grand best-seller européen** de la fin du Moyen Âge.`
    },

    {
      type: 'widget',
      composant: 'SelecteurValeurs',
      titre: 'Quatre éditions historiques du livre',
      params: {
        options: [
          { label: 'Version franco-italienne (~1300)', valeur: 'Rustichello, prison', description: 'Texte original dicté en prison à Gênes. Rédigé en **franco-italien**, dialecte de cour mixte alors prestigieux à l\'écrit. Connu sous le nom *Le Devisement du monde*. Plusieurs manuscrits anciens conservés.' },
          { label: 'Version latine (XIVᵉ s.)', valeur: 'F. Pipino, Bologne', description: 'Traduction latine vers 1310-1315 par le dominicain **Francesco Pipino**, pour diffusion ecclésiastique. C\'est la version que possédera Christophe Colomb, annotée de sa main.' },
          { label: 'Édition Ramusio (1559)', valeur: 'Venise, Ramusio', description: 'Compilation savante par **Giovanni Battista Ramusio**, géographe vénitien, qui combine plusieurs manuscrits pour reconstituer une version "définitive". Reste l\'édition de référence jusqu\'au XIXᵉ siècle.' },
          { label: 'Édition critique moderne', valeur: 'Pelliot, 1959', description: 'Le sinologue **Paul Pelliot** publie une édition critique avec annotations exhaustives identifiant les lieux et personnages chinois. Référence académique contemporaine.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: `<em>Il Milione</em> : la légende et le doute`,
      contenu_md:
`Dès sa parution, le livre divise. À **Venise**, les contemporains de Marco le surnomment ***Il Milione*** — "le million" — par moquerie : il parle toujours en **millions** (un million d'habitants ici, un million de cavaliers là, un million de chevaux dans les écuries du Khan). On le tient pour un **fabulateur** ; certains marchands l'invitent à dîner pour se moquer de ses récits.

Mais le livre se diffuse. Manuscrits en franco-italien, en latin, en allemand, en castillan, en bohémien, en irlandais. C'est, après la Bible et la *Légende dorée* de Jacques de Voragine, le **livre le plus copié** du Moyen Âge tardif. À chaque copie, des copistes "améliorent" ou "rectifient" le texte ; il existe aujourd'hui **plus de 150 manuscrits** différents, et aucun n'est exactement le même.

L'**impact** est immense. Pendant **deux siècles**, Marco Polo est la **source occidentale principale** sur l'Asie. Les cartographes — Fra Mauro à Venise en 1459, Henri le Navigateur au Portugal — s'appuient sur son livre pour dessiner leurs cartes du monde. Quand le marchand génois **Christophe Colomb** veut convaincre les souverains de Castille de financer son voyage par l'ouest, il le fait avec un exemplaire de Marco Polo dans son sac. Cet exemplaire — l'édition latine de Pipino — existe encore : conservé à la **Biblioteca Colombina** de Séville, il porte **366 notes marginales** de la main de Colomb. C'est en lisant Marco Polo que Colomb estime (à tort) que l'Asie est à seulement **3 000 milles** à l'ouest des Açores. Le voyage de Marco Polo est donc, par effet de chaîne, à l'origine de la **découverte de l'Amérique**.

Au XIXᵉ et XXᵉ siècles, le débat sur l'authenticité reprend. La sinologue **Frances Wood** publie en 1995 *Did Marco Polo go to China ?*, un livre qui rassemble tous les arguments sceptiques : pas de mention de la Grande Muraille, du thé, de l'écriture chinoise, des pieds bandés, des examens impériaux ; aucun document chinois ne mentionne un Marco Polo ; certains détails géographiques sont incohérents. La réponse, qui domine aujourd'hui : Marco a bien voyagé en Chine, mais il l'a vue **depuis la cour mongole**, une élite étrangère vivant en circuit séparé. Les "absences" notables sont précisément celles d'un Européen ne fréquentant que les hauts fonctionnaires mongols — exactement ce qu'il a été pendant 17 ans.`
    },

    {
      type: 'widget',
      composant: 'ListeMethodes',
      titre: 'Pourquoi le livre n\'a pas été immédiatement cru',
      params: {
        methodes: [
          { titre: 'Les chiffres trop ronds', description: 'Marco parle constamment en **millions** d\'habitants, de cavaliers, de chevaux. Ses contemporains européens vivent dans des villes de 10 000 à 100 000 personnes — Pékin à un million leur paraît absurde. Or Pékin **faisait probablement** environ un million d\'habitants au XIIIᵉ siècle, plus que toute l\'Europe occidentale réunie.' },
          { titre: 'Le papier-monnaie', description: 'Personne en Europe ne peut imaginer qu\'un État impose le **papier** comme monnaie, sans valeur intrinsèque. L\'idée même semble une hérésie financière. La Chine pratiquait pourtant le papier-monnaie depuis le **VIIᵉ siècle**.' },
          { titre: 'Les villes "plus belles que Paris ou Florence"', description: 'Marco affirme que **Quinsai** (Hangzhou) compte 12 000 ponts, 12 000 marchés, et qu\'elle est la plus belle ville du monde. Choquant pour les Italiens qui considéraient leur civilisation comme le sommet du monde. Quinsai **comptait effectivement** vers 1 million d\'habitants et était l\'une des plus grandes villes au monde à l\'époque.' },
          { titre: 'Le scepticisme épistémologique', description: 'Au Moyen Âge, on tend à croire les **textes anciens** (Pline l\'Ancien, Solin) plutôt que les **récits récents**. Un voyageur revenu d\'un pays lointain est par défaut un menteur ; les auteurs antiques sont par défaut véridiques. Marco se heurte à cette inversion contemporaine de la confiance.' }
        ]
      }
    }

  ],

  quiz: [
    {
      q: `Combien de temps Marco Polo a-t-il passé hors de Venise lors de son grand voyage ?`,
      options: [
        `7 ans`,
        `15 ans`,
        `24 ans`,
        `40 ans`
      ],
      correcte: 2,
      explication: `Marco Polo part de Venise en **1271** à l'âge de 17 ans et revient en **1295** à l'âge de 41 ans. Soit **24 années** hors de Venise — plus de la moitié de sa vie d'adulte, à une époque où l'espérance de vie tournait autour de 40 ans. Ces 24 ans se décomposent en : 4 ans de voyage aller, **17 ans au service de Kubilai Khan** à travers l'empire mongol, et environ 3 ans pour le voyage de retour (par voie maritime via Sumatra, l'Inde, la Perse).`
    },
    {
      q: `Qui est Kubilai Khan ?`,
      options: [
        `Un empereur byzantin contemporain de Marco Polo`,
        `Le petit-fils de Gengis Khan, fondateur de la dynastie Yuan en Chine, qui règne sur le plus vaste empire mongol`,
        `Un sultan musulman de Perse`,
        `Un roi de France`
      ],
      correcte: 1,
      explication: `**Kubilai Khan** (1215-1294) est le **petit-fils de Gengis Khan**. Il achève en **1279** la conquête de la Chine du Sud (dynastie Song) et fonde en **1271** la **dynastie Yuan** sur le trône de Chine, intégrée à un empire mongol qui s'étend de la Pologne à la mer de Chine — le **plus vaste empire contigu de l'histoire** (voir [[empire-mongol]]). Sa capitale d'hiver est **Khanbalik** (Pékin actuelle), sa capitale d'été **Shangdu** (immortalisée plus tard par Coleridge sous le nom de Xanadu). C'est lui qui emploie Marco Polo pendant 17 ans.`
    },
    {
      q: `Pourquoi le livre de Marco Polo a-t-il été écrit en prison à Gênes ?`,
      options: [
        `Marco l'a écrit lui-même pour passer le temps`,
        `Il l'a dicté à son compagnon de cellule Rustichello de Pise, écrivain de romans chevaleresques, après sa capture à la bataille de Curzola en 1298`,
        `Un moine vénitien lui a rendu visite et a pris des notes`,
        `Le livre a été écrit après sa libération`
      ],
      correcte: 1,
      explication: `En **1298**, lors d'une bataille navale entre **Venise et Gênes** (bataille de **Curzola**), Marco Polo est fait prisonnier et envoyé à Gênes. Il y partage sa cellule avec **Rustichello de Pise**, un écrivain de romans chevaleresques (cycles arthurien, Tristan) lui-même prisonnier. Rustichello voit l'intérêt littéraire des récits de Marco et entreprend de les **mettre en forme**. Pendant **un an** de captivité, Marco dicte, Rustichello rédige en franco-italien. Le résultat est le ***Devisement du monde*** (~1300). Cette double signature explique certains traits du texte : style narratif chevaleresque, embellissements, mais aussi rigueur des observations factuelles propre à Marco.`
    },
    {
      q: `Quel est le surnom donné au livre de Marco Polo par les Vénitiens contemporains, et pourquoi ?`,
      options: [
        `« Le sage » — parce qu'il était savant`,
        `« Il Milione » (Le Million) — par moquerie, parce qu'il parlait toujours en millions d'habitants, de cavaliers, de chevaux`,
        `« Le cosmographe » — parce qu'il décrivait des cartes`,
        `« Le menteur » — parce que personne ne le croyait`
      ],
      correcte: 1,
      explication: `Les Vénitiens contemporains surnomment Marco ***Il Milione*** ("le million") par **moquerie** : Marco parle constamment de villes à **un million d'habitants**, de **cent mille cavaliers**, de **dix mille palais**. Pour des Européens du XIIIᵉ siècle vivant dans des cités de 10 000 à 100 000 personnes, ces chiffres semblent absurdes. **Pékin et Hangzhou faisaient effectivement environ un million d'habitants** au XIIIᵉ siècle — plus que toute l'Europe occidentale réunie. La moquerie était donc historiquement injuste, mais elle est restée : aujourd'hui encore, *Il Milione* est l'un des titres italiens du livre. La maison familiale des Polo à Venise s'appelait d'ailleurs la **Corte del Milion**.`
    },
    {
      q: `Quels éléments frappants de la Chine sont étrangement ABSENTS du livre de Marco Polo, ce qui a fait douter certains historiens ?`,
      options: [
        `Le papier-monnaie, le charbon, les services postaux`,
        `La Grande Muraille, le thé, les pieds bandés, l'écriture chinoise, les examens impériaux`,
        `Les pagodes, les jonques, le riz`,
        `Pékin, Hangzhou, Quanzhou`
      ],
      correcte: 1,
      explication: `Les absences notables sont précisément celles qui faisaient pourtant la singularité de la culture chinoise Han : la **Grande Muraille**, le **thé**, la pratique des **pieds bandés** (qui se développe sous les Song), l'**écriture chinoise**, le **système des examens impériaux**. Ces absences ont conduit la sinologue **Frances Wood** à publier en 1995 *Did Marco Polo go to China ?* qui doute du voyage entier. Le **consensus actuel** dépasse cette critique : Marco a voyagé en Chine, mais il l'a vue **depuis la cour mongole**, une élite étrangère qui vivait en **circuit séparé** de la population Han. Les Mongols méprisaient en partie la culture chinoise locale et préféraient s'entourer d'administrateurs étrangers (Persans, Arabes, Européens). Les "absences" du livre sont précisément celles d'un Européen ne fréquentant que les fonctionnaires mongols et pas la société chinoise quotidienne.`
    },
    {
      q: `Quel lien existe-t-il entre Marco Polo et Christophe Colomb ?`,
      options: [
        `Aucun, ils ont vécu à deux siècles d'intervalle sans se connaître`,
        `Colomb possédait un exemplaire latin du livre de Marco Polo, annoté de sa main, qu'il a utilisé pour planifier son voyage par l'ouest vers l'Asie en 1492`,
        `Marco Polo a inspiré Colomb par un rêve`,
        `Ils étaient cousins éloignés`
      ],
      correcte: 1,
      explication: `**Christophe Colomb** possédait un **exemplaire latin** du livre de Marco Polo (traduction de Francesco Pipino, vers 1315), qu'il a **annoté de sa main** — **366 notes marginales** au total. Cet exemplaire existe encore : il est conservé à la **Biblioteca Colombina** de Séville, fondée par Hernando Colón, fils de Christophe. C'est en lisant Marco Polo que Colomb forme l'idée que l'Asie est atteignable par l'**ouest** depuis l'Europe — et c'est lui qui estime (à tort) la distance, calculée à partir des données de Polo qu'il a probablement amplifiées dans son sens. Quand il débarque aux Bahamas en **1492**, il est convaincu d'être arrivé en Asie. L'**Amérique** est, en un sens, une conséquence indirecte du voyage de Marco Polo et de la diffusion de son livre.`
    },
    {
      q: `Quelle est la phrase fameuse attribuée à Marco Polo sur son lit de mort en 1324 ?`,
      options: [
        `« Je regrette d'être parti »`,
        `« Je n'ai pas dit la moitié de ce que j'ai vu »`,
        `« Le Khan était mon ami »`,
        `« Venise est la plus belle ville du monde »`
      ],
      correcte: 1,
      explication: `Selon la tradition, alors qu'il agonisait en **janvier 1324**, ses proches et certains prêtres l'auraient pressé de **se rétracter** sur les invraisemblances de son livre, pour mourir en paix avec son âme. Marco aurait répondu : *« Je n'ai pas dit la moitié de ce que j'ai vu »* (*"Non ho detto neanche la metà di quello che ho visto"* en italien, ou *"Non ho scritto nemmeno la metà di quel che ho veduto"* selon certaines versions). Cette phrase, transmise par l'édition Ramusio (1559), résume toute l'attitude de Marco face au scepticisme de ses contemporains : la réalité de l'Asie qu'il a vue dépassait tellement l'imagination européenne qu'il avait dû **s'autocensurer** pour rester partiellement crédible.`
    }
  ],

  vocabulaire: [
    {
      terme: 'Marco Polo',
      definition: `Marchand vénitien (vers **1254-1324**). Quitte Venise à **17 ans** en 1271 avec son père Niccolò et son oncle Maffeo, sert pendant **17 ans** à la cour de **Kubilai Khan** en Chine, rentre à Venise en 1295 après **24 ans** d'absence. Auteur via *Rustichello de Pise* du ***Devisement du monde*** (~1300), best-seller européen de la fin du Moyen Âge.`
    },
    {
      terme: 'Kubilai Khan',
      definition: `**Petit-fils de Gengis Khan** (1215-1294). Fonde en **1271** la dynastie **Yuan** sur le trône de Chine et achève en 1279 la conquête de la Chine du Sud. Règne sur le **plus vaste empire mongol** de l'histoire. Capitale d'hiver : **Khanbalik** (Pékin actuelle). Emploie Marco Polo pendant 17 ans comme administrateur étranger.`
    },
    {
      terme: 'Devisement du monde',
      definition: `Titre français original du livre de **Marco Polo**, dicté en **1298-1299** à *Rustichello de Pise* dans une prison génoise. Connu aussi sous le nom italien ***Il Milione*** ou ***Le Livre des merveilles***. **Best-seller** européen pendant deux siècles, traduit en latin, allemand, castillan, bohémien, irlandais. Plus de 150 manuscrits différents conservés.`
    },
    {
      terme: 'Rustichello de Pise',
      definition: `**Écrivain de romans chevaleresques** italien (XIIIᵉ siècle), spécialiste des cycles arthurien et de Tristan. Capturé par les Génois, partage sa cellule avec **Marco Polo** en 1298-1299. C'est lui qui **met en forme** le récit dicté par Marco — ce qui explique certains traits narratifs et embellissements stylistiques du *Devisement du monde*.`
    },
    {
      terme: 'Il Milione',
      definition: `**Surnom moqueur** donné au livre de Marco Polo par ses contemporains vénitiens, parce qu'il parlait toujours en **millions** (millions d'habitants, de cavaliers, de chevaux). Aujourd'hui titre standard du livre en italien. La maison familiale des Polo à Venise s'appelait d'ailleurs la **Corte del Milion**.`
    },
    {
      terme: 'Paiza',
      definition: `**Tablette d'or, d'argent ou de bois** délivrée par le Khan mongol à ses émissaires et marchands favorisés. Sert de **passe-droit** à travers l'empire : les autorités locales sont tenues de fournir au porteur logement, nourriture et chevaux. Les **Polo** en recevront plusieurs au cours de leurs voyages.`
    },
    {
      terme: 'Yam',
      definition: `**Système postal** de l'empire mongol, structuré par Gengis Khan. **Relais tous les 40 km environ**, avec chevaux frais et coursiers de garde. Permet à un courrier urgent de parcourir **600 km par jour**. Plus de **1 400 stations** à l'apogée. Marco Polo le décrit avec admiration ; l'Europe ne disposera d'un système comparable qu'au XVᵉ siècle (poste de Louis XI).`
    },
    {
      terme: 'Quinsai',
      definition: `Nom donné par Marco Polo à la ville chinoise de **Hangzhou** (ancienne capitale des Song du Sud). Marco la décrit comme *« la plus belle ville du monde »*, avec ses 12 000 ponts et 12 000 marchés. Elle comptait effectivement environ **1 million d'habitants** au XIIIᵉ siècle, ce qui en faisait l'une des plus grandes villes au monde.`
    },
    {
      terme: 'Curzola (bataille de)',
      definition: `**Bataille navale** entre Venise et Gênes le **7 septembre 1298** au large de Korčula (côte dalmate). **Désastre vénitien** : presque toute la flotte est détruite ou capturée. **Marco Polo** y est fait prisonnier — c'est en captivité à Gênes qu'il dictera ensuite son livre à Rustichello.`
    },
    {
      terme: 'Biblioteca Colombina',
      definition: `**Bibliothèque** fondée à **Séville** par **Hernando Colón**, fils naturel de Christophe Colomb, à partir de la collection de son père. Contient notamment l'**exemplaire latin du livre de Marco Polo** annoté de la main de Christophe Colomb (366 notes marginales). Témoignage matériel de l'influence directe de Polo sur la découverte de l'Amérique.`
    }
  ]

});
