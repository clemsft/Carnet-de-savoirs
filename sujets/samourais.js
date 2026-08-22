/* ===================================================================
   SUJET — Les samouraïs
   ===================================================================
   Une caste guerrière japonaise née au Xᵉ siècle, devenue mythe mondial.
   Domaine : Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'samourais',
    titre: 'Les <em>samouraïs</em>',
    domaines: ['Histoire'],
    tags: ['japon', 'guerriers', 'bushido', 'katana', 'shogun', 'féodalité', 'edo'],
    difficulte: 1,
    duree_estimee_min: 30,
    prerequis: [],
    lie_a: ['empire-mongol', 'les-animes', 'religions-du-monde', 'stoicisme'],
    date_creation: '2026-05-19',
    date_maj: '2026-05-19'
  },

  resume: `Pendant près de **mille ans**, une caste guerrière a structuré la société japonaise — du cavalier-archer du Xᵉ siècle au fonctionnaire en kimono du XIXᵉ. Les [samouraïs]{accent} ne sont pas qu\'une silhouette de cinéma : ils sont une institution politique, un code moral, et le dernier rempart d\'un monde féodal balayé en quelques décennies par la modernité.`,

  points_cles: [
    'Les samouraïs émergent vers le **Xᵉ siècle** comme guerriers au service des grands clans provinciaux, dans un Japon où la cour impériale de Kyoto perd peu à peu le contrôle des campagnes.',
    'En **1185**, le clan **Minamoto** triomphe du clan **Taira** et fonde à Kamakura le premier **shogunat** : un gouvernement militaire parallèle à l\'empereur, qui durera presque sept siècles.',
    'Au XIIIᵉ siècle, les samouraïs repoussent **deux invasions mongoles** (1274, 1281) avec l\'aide providentielle de typhons baptisés *[kamikaze]{accent}* — les « vents divins ».',
    'L\'époque **Sengoku** (1467-1615) — l\'« âge des provinces en guerre » — fragmente le pays en domaines rivaux et fait des samouraïs des soldats professionnels au service de **daimyos** ambitieux.',
    'L\'unification se fait en trois temps : **Oda Nobunaga** ouvre la voie, **Toyotomi Hideyoshi** la prolonge, **Tokugawa Ieyasu** scelle le tout en **1600** à Sekigahara.',
    'L\'époque **Edo** (1603-1868) gèle la société en quatre castes (guerriers, paysans, artisans, marchands). Les samouraïs deviennent une **bureaucratie armée** dans un pays en paix — l\'arme se ritualise, l\'éducation prend le pas sur le combat.',
    'Le code moral du **bushido** (« voie du guerrier ») n\'est codifié qu\'au XVIIᵉ siècle, alors même que les samouraïs ne combattent presque plus : il est en grande partie une **nostalgie écrite** par des lettrés en temps de paix.',
    'En **1868**, la restauration de **Meiji** abolit le shogunat ; en **1876**, le port du sabre est interdit. La caste samouraï disparaît officiellement en moins de dix ans, dans un Japon qui s\'industrialise à marche forcée.'
  ],

  carte_mentale: {
    central: 'samourais',
    noeuds: [
      { id: 'samourais', label: 'Samouraïs', description: 'Caste guerrière japonaise du Xᵉ au XIXᵉ siècle. Au croisement d\'une institution politique, d\'une fonction militaire et d\'un code moral.' },
      { id: 'origines', label: 'Origines', description: 'Xᵉ-XIIᵉ siècle : la cour impériale perd le contrôle des provinces, des guerriers privés émergent au service des grands clans.' },
      { id: 'shogunats', label: 'Les shogunats', description: 'Trois grands gouvernements militaires : Kamakura, Ashikaga, Tokugawa. L\'empereur règne, le shogun gouverne.' },
      { id: 'armes', label: 'Armes et armures', description: 'Au départ l\'arc et le cheval ; le sabre vient ensuite. Armures laminaires souples et colorées, très différentes de la plate occidentale.' },
      { id: 'bushido', label: 'Bushido', description: 'La « voie du guerrier » : code d\'honneur mêlant loyauté, courage, frugalité, et influences du zen et du confucianisme. Codifié tardivement, au XVIIᵉ siècle.' },
      { id: 'sengoku', label: 'Sengoku Jidai', description: '1467-1615 : l\'« âge des provinces en guerre ». Fragmentation, innovation tactique, arrivée des armes à feu portugaises.' },
      { id: 'edo', label: 'Époque Edo', description: '1603-1868 : paix imposée par les Tokugawa. Les samouraïs deviennent une élite bureaucratique armée, lettrée, frustrée.' },
      { id: 'fin', label: 'Fin de la caste', description: 'Restauration Meiji (1868), interdiction du sabre (1876), rébellion de Satsuma (1877) : la caste s\'éteint en une décennie.' },

      // Shogunats
      { id: 'kamakura', label: 'Shogunat de Kamakura', description: '**1185-1333**. Fondé par *Minamoto no Yoritomo* après la guerre de Genpei. Premier gouvernement militaire japonais. Repousse les Mongols en 1274 et 1281.', parent: 'shogunats' },
      { id: 'ashikaga', label: 'Shogunat Ashikaga', description: '**1336-1573**. Centre à Kyoto, autorité plus faible. Sa dégénérescence ouvre l\'époque Sengoku.', parent: 'shogunats' },
      { id: 'tokugawa', label: 'Shogunat Tokugawa', description: '**1603-1868**. Fondé par *Tokugawa Ieyasu*. Paix forcée, isolement (*[sakoku]{accent}*), société figée. Le plus long et le plus stable.', parent: 'shogunats' },

      // Armes
      { id: 'yumi', label: 'Yumi', description: 'L\'**arc** asymétrique japonais, arme principale du samouraï médiéval. Le combat à cheval, à distance, précède le combat au sabre.', parent: 'armes' },
      { id: 'katana', label: 'Katana', description: 'Sabre long courbe à tranchant unique. Devient l\'arme emblématique à partir de l\'époque Sengoku. Porté avec le **wakizashi** — la paire forme le *daishō*.', parent: 'armes' },

      // Sengoku
      { id: 'arquebuses', label: 'Arquebuses portugaises', description: 'Introduites en **1543** par des marchands portugais à Tanegashima. Adoptées en quelques années, elles bouleversent la tactique. Bataille de **Nagashino** (1575) : les arquebuses de Nobunaga décident de tout.', parent: 'sengoku' },
      { id: 'unificateurs', label: 'Les trois unificateurs', description: '**Nobunaga**, **Hideyoshi**, **Ieyasu** — trois hommes successifs qui en cinquante ans ramènent le Japon sous un seul pouvoir.', parent: 'sengoku' },

      // Fin
      { id: 'meiji', label: 'Restauration Meiji', description: '**1868**. L\'empereur reprend le pouvoir, le shogunat est aboli, le Japon s\'ouvre et s\'industrialise. Les privilèges samouraïs sont supprimés en une décennie.', parent: 'fin' },
      { id: 'satsuma', label: 'Rébellion de Satsuma', description: '**1877**. Dernier soulèvement samouraï, mené par *Saigō Takamori*. Écrasé par l\'armée de conscrits du nouveau régime. Inspire *Le Dernier Samouraï* (2003).', parent: 'fin' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'Avant le <em>samouraï</em>, le serviteur',
      contenu_md:
`Le mot **samouraï** vient du verbe ancien *saburau*, qui signifie « **servir** ». Au IXᵉ siècle, il désigne simplement un domestique armé au service d\'un aristocrate de la cour impériale. Rien d\'héroïque, rien de mythique : un employé.

À cette époque, le Japon est gouverné depuis **Kyoto** par une cour raffinée qui a importé de Chine un appareil d\'État sophistiqué, une écriture, une religion bouddhiste et un goût pour la poésie. Mais la cour ne sait pas se battre. Quand les provinces s\'agitent, quand les pirates harcèlent les côtes, quand les peuples du nord résistent à la sinisation, il faut bien que **quelqu\'un combatte** à la place des nobles.

Ce quelqu\'un, ce sont les guerriers de province. Des hommes à cheval, archers et bons cavaliers, qui se mettent au service de grandes familles régionales. En quelques générations, ces serviteurs armés deviennent **indispensables**. Au Xᵉ siècle, ils possèdent leurs propres terres, leurs propres clients, leur propre code de loyauté. La cour, croyant les utiliser, s\'est en réalité remise à eux.`
    },

    {
      type: 'texte',
      titre: 'La guerre de <em>Genpei</em> et la naissance du shogunat',
      contenu_md:
`Au XIIᵉ siècle, deux grands clans guerriers — les **Taira** et les **Minamoto** — dominent la scène politique. Tous deux descendent de l\'empereur, tous deux ont longtemps servi la cour. Au milieu du siècle, ils s\'affrontent ouvertement.

La **guerre de Genpei** (1180-1185) est l\'épisode fondateur de l\'imaginaire samouraï. Les chroniques médiévales (le *Heike monogatari*) la racontent comme une épopée mélancolique pleine de duels, de défis lancés à voix haute, de chevaux tombant dans la mer, de jeunes guerriers récitant des poèmes avant de mourir. Beaucoup de ces récits sont enjolivés — mais ils fixent durablement l\'image que les Japonais se feront de leurs guerriers.

À la fin de la guerre, le clan Taira est anéanti à la bataille navale de **Dan-no-ura**. Le vainqueur, **Minamoto no Yoritomo**, refuse de s\'installer à Kyoto. Il crée son propre gouvernement à **Kamakura**, loin de la cour, et obtient en **1192** le titre de [shogun]{accent} — « grand général qui soumet les barbares ». Il vient d\'inventer une institution qui durera **sept cents ans** : le shogunat, gouvernement militaire qui coexiste avec l\'empereur sans le détrôner.`
    },

    {
      type: 'encadre',
      label: 'Empereur et shogun',
      contenu_md: 'Tout au long de l\'histoire samouraï, le **Japon a deux têtes**. L\'**empereur**, descendant de la déesse du soleil, règne à Kyoto comme figure sacrée et symbolique. Le **shogun**, chef militaire, gouverne effectivement le pays depuis sa propre capitale. Les deux pouvoirs cohabitent — souvent en tension, parfois en complicité. Cette dualité explique qu\'aucun shogun n\'ait jamais sérieusement songé à supprimer l\'empereur : il aurait perdu la **légitimité** que seul l\'empereur pouvait lui conférer.'
    },

    {
      type: 'widget',
      titre: 'Quelle arme principale, à quelle époque ?',
      composant: 'SelecteurValeurs',
      params: {
        unite: 'arme dominante',
        indexInitial: 0,
        options: [
          { label: 'Xᵉ-XIIIᵉ siècle', valeur: 'Arc (yumi) à cheval', description: 'Le samouraï médiéval est avant tout un **cavalier-archer**. L\'expression d\'époque pour le métier des armes est *kyūba no michi* — « voie de l\'arc et du cheval ». Le sabre est une arme secondaire.' },
          { label: 'XIVᵉ-XVᵉ siècle', valeur: 'Lance (yari) et sabre', description: 'Avec l\'arrivée d\'**armées de fantassins** plus nombreuses, la lance prend une place centrale. Le sabre se généralise comme arme de mêlée et signe d\'identité guerrière.' },
          { label: 'XVIᵉ siècle (Sengoku)', valeur: 'Arquebuse + lance + sabre', description: 'L\'**arquebuse** portugaise est adoptée en quelques années. Les armées combinent ashigaru à l\'arquebuse, piquiers et cavaliers. Nagashino (1575) inaugure la guerre moderne au Japon.' },
          { label: 'XVIIᵉ-XIXᵉ siècle (Edo)', valeur: 'Le sabre, comme signe', description: 'En paix prolongée, le **katana et le wakizashi** (la paire *daishō*) ne servent presque plus au combat. Ils deviennent l\'**insigne** de la caste — privilège exclusif des samouraïs, interdit aux autres.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Le <em>vent divin</em> et la peur mongole',
      contenu_md:
`Au XIIIᵉ siècle, le danger vient de la mer. **Kubilaï Khan**, petit-fils de Gengis et fondateur de la dynastie Yuan en Chine, exige du Japon qu\'il devienne son vassal. Le shogunat de Kamakura refuse.

En **1274**, une première flotte mongolo-coréenne débarque dans la baie de Hakata. Les samouraïs sont surpris par la tactique mongole — combat groupé, archers en pluie, flèches empoisonnées — eux qui pratiquent encore le **duel d\'individus** annoncé à voix haute. Mais un typhon disperse la flotte avant qu\'elle ne s\'enfonce dans les terres.

En **1281**, Kubilaï revient avec une force massive — peut-être **140 000 hommes**, l\'une des plus grandes opérations amphibies de l\'histoire pré-moderne. Les samouraïs résistent depuis un mur défensif côtier, plusieurs semaines durant. Et un second typhon survient — encore plus violent que le premier. La flotte mongole est détruite.

Les Japonais y voient l\'œuvre des kami, les divinités shintô qui protègent l\'archipel. Ces typhons reçoivent le nom de [kamikaze]{accent} — littéralement « vents divins ». Six siècles plus tard, le nom sera repris, dans des circonstances tragiques, pour désigner les pilotes-suicides de la Seconde Guerre mondiale.`
    },

    {
      type: 'texte',
      titre: 'L\'<em>âge des provinces en guerre</em>',
      contenu_md:
`Le shogunat de Kamakura s\'effondre en 1333. Le suivant — celui des **Ashikaga**, depuis Kyoto — est plus faible, plus disputé. Quand une guerre de succession éclate à Kyoto en **1467** (la guerre d\'Ōnin), elle se prolonge en chaos général. Les autorités centrales perdent toute force réelle.

Commence alors le [Sengoku Jidai]{accent}, l\'« âge des provinces en guerre » (1467-1615). Pendant un siècle et demi, le Japon est un patchwork de **daimyos** — seigneurs provinciaux — qui se font la guerre sans relâche pour étendre leurs domaines. C\'est l\'apogée militaire du samouraï : son métier redevient le combat, ses armées grandissent, ses tactiques s\'affinent.

Mais c\'est aussi l\'époque où l\'identité de la caste **se brouille**. Pour fournir leurs armées, les daimyos enrôlent massivement des paysans devenus **ashigaru** — « pieds légers » — fantassins parfois roturiers. La distinction entre samouraï et combattant ordinaire commence à dépendre moins de la naissance que de la fortune et du service.`
    },

    {
      type: 'encadre',
      label: 'Les femmes guerrières',
      contenu_md: 'L\'histoire populaire des samouraïs est très masculine. Mais des **onna-musha** — guerrières — ont combattu à toutes les époques, surtout pendant le Sengoku, où la défense d\'un domaine pouvait incomber à l\'épouse du seigneur partie au front. La figure historique de **Tomoe Gozen**, au XIIᵉ siècle, est la plus célèbre. Les femmes des familles samouraïs étaient également entraînées à la *naginata* (sorte de fauchard) pour défendre la maisonnée.'
    },

    {
      type: 'widget',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '794-1185', titre: 'Époque de Heian', description: 'La cour impériale règne depuis Kyoto. Naissance progressive d\'une classe guerrière provinciale au service des grands clans.' },
          { date: '1180-1185', titre: 'Guerre de Genpei', description: 'Affrontement décisif entre les clans **Taira** et **Minamoto**. Victoire des Minamoto à Dan-no-ura.' },
          { date: '1192', titre: 'Premier shogunat', description: '*Minamoto no Yoritomo* est nommé **shogun** par l\'empereur. Le gouvernement militaire de Kamakura naît.' },
          { date: '1274 et 1281', titre: 'Invasions mongoles', description: 'Deux flottes envoyées par **Kubilaï Khan** sont anéanties par des typhons baptisés *kamikaze*.' },
          { date: '1467-1615', titre: 'Sengoku Jidai', description: 'L\'« âge des provinces en guerre ». Fragmentation du pays en domaines rivaux. Apogée militaire du samouraï.' },
          { date: '1543', titre: 'Arquebuses portugaises', description: 'Des marchands portugais accostent à **Tanegashima**. Les armes à feu sont adoptées et copiées en quelques années.' },
          { date: '1575', titre: 'Bataille de Nagashino', description: '**Oda Nobunaga** brise la cavalerie Takeda avec une ligne d\'arquebusiers en feu roulant. Première grande victoire japonaise de l\'âge des armes à feu.' },
          { date: '1600', titre: 'Bataille de Sekigahara', description: '**Tokugawa Ieyasu** triomphe d\'une coalition rivale. Il fonde trois ans plus tard le shogunat qui portera son nom et durera **265 ans**.' },
          { date: '1603-1868', titre: 'Époque Edo', description: 'Paix imposée par les Tokugawa. Société figée, isolement (*sakoku*), bureaucratisation des samouraïs.' },
          { date: '1853', titre: 'Les bateaux noirs de Perry', description: 'Le commodore américain **Matthew Perry** force le Japon à s\'ouvrir au commerce extérieur. Choc politique : le shogunat est jugé incapable de défendre le pays.' },
          { date: '1868', titre: 'Restauration Meiji', description: 'L\'empereur reprend le pouvoir effectif. Le shogunat est aboli, le Japon s\'industrialise à marche forcée.' },
          { date: '1876', titre: 'Interdiction du sabre', description: 'L\'*haitōrei* interdit le port public du sabre. Symboliquement, la caste samouraï cesse d\'exister.' },
          { date: '1877', titre: 'Rébellion de Satsuma', description: 'Dernier soulèvement samouraï mené par **Saigō Takamori**, écrasé par l\'armée moderne du nouveau régime. Fin militaire d\'un monde.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>unification</em> et trois hommes',
      contenu_md:
`Les Japonais résument volontiers l\'unification du XVIᵉ siècle par un proverbe : « **Nobunaga moud le riz, Hideyoshi le cuit, Ieyasu le mange.** »

**Oda Nobunaga** (1534-1582) est le premier des trois unificateurs. Brutal, brillant, ouvert aux nouveautés (les arquebuses, les missionnaires jésuites), il soumet à peu près la moitié du pays avant d\'être trahi et acculé au suicide par l\'un de ses propres généraux dans le temple de Honnō-ji, à Kyoto, en 1582.

**Toyotomi Hideyoshi** (1537-1598), ancien paysan devenu général de Nobunaga, achève l\'unification militaire et lance deux invasions désastreuses de la Corée. Il instaure la « **chasse aux sabres** » : seuls les samouraïs ont désormais le droit d\'en porter — un acte fondateur qui fige les castes.

**Tokugawa Ieyasu** (1543-1616) attend son heure avec une patience exemplaire. À la bataille de **Sekigahara** en 1600, il triomphe d\'une coalition rivale et fonde trois ans plus tard le shogunat qui portera son nom. Il vient d\'inaugurer **265 ans de paix**.`
    },

    {
      type: 'texte',
      titre: 'L\'<em>époque Edo</em> : guerriers sans guerre',
      contenu_md:
`Sous les Tokugawa, le Japon est presque entièrement clos sur lui-même (*sakoku*). La société est gelée en quatre castes hiérarchisées : **guerriers** (samouraïs), **paysans**, **artisans**, **marchands** — ces derniers, jugés improductifs, sont théoriquement les plus bas, même s\'ils s\'enrichissent dans les villes.

Les samouraïs représentent environ **7 à 10 % de la population**. Ils vivent d\'une **rente** versée par leur daimyo, en sacs de riz. Ils n\'ont plus rien à combattre. Que deviennent-ils ?

Beaucoup deviennent des **fonctionnaires** — administrateurs, magistrats, gestionnaires de domaines. Le sabre devient un objet rituel qu\'on dégaine plus jamais ; les écoles d\'arts martiaux se multiplient mais enseignent surtout des techniques **codifiées**, esthétiques, philosophiques. C\'est durant cette paix prolongée qu\'on écrit la plupart des grands traités martiaux et moraux qui définiront a posteriori le samouraï mythique. Le code se précise, justement, à mesure que sa pratique disparaît.`
    },

    {
      type: 'encadre',
      label: 'Les rônins, samouraïs sans maître',
      contenu_md: 'Un **rônin** (浪人, « homme-vague ») est un samouraï qui a perdu son seigneur — par bannissement, par défaite, par disgrâce — et qui erre sans rente. Au Sengoku, les rônins étaient ré-employables ; à Edo, leur statut devient un drame social. L\'histoire des **47 rônins** (1701-1703) — fidèles serviteurs vengeant leur maître injustement condamné puis se livrant collectivement au suicide rituel — est devenue le récit national de la loyauté tragique. Elle hante depuis la littérature, le théâtre kabuki, et plus tard le cinéma de Kurosawa.'
    },

    {
      type: 'texte',
      titre: 'Le <em>bushido</em> : un code écrit après coup',
      contenu_md:
`Le mot **bushido** signifie « voie du guerrier » (*bushi* = guerrier, *dō* = voie). C\'est aujourd\'hui le terme le plus associé aux samouraïs. Mais il faut désamorcer un malentendu : le bushido n\'est **pas** un code antique transmis tel quel depuis le Moyen Âge.

C\'est essentiellement une **construction tardive**, écrite et synthétisée au XVIIᵉ siècle, à l\'époque Edo — quand les samouraïs ne combattent plus, justement. Le texte le plus célèbre, le *Hagakure* (« à l\'ombre des feuilles »), est dicté entre 1709 et 1716 par **Yamamoto Tsunetomo**, un samouraï à la retraite qui n\'a jamais vu de vraie bataille. Sa phrase la plus citée — « la voie du samouraï réside dans la mort » — est moins un programme d\'action qu\'une nostalgie.

Cela ne le rend pas faux pour autant. Le bushido tel qu\'il est écrit articule des vertus que les samouraïs reconnaissaient comme leurs : **loyauté** absolue au seigneur, **courage**, **honneur** sourcilleux, **frugalité**, maîtrise de soi, refus de l\'attachement à la vie. Il intègre des couches venues du **confucianisme** (la loyauté hiérarchique), du **bouddhisme zen** (l\'acceptation de la mort, la pleine présence à l\'instant) et du **shintô** (le service du clan et des kami).

C\'est un code de paix qui code rétrospectivement une guerre.`
    },

    {
      type: 'texte',
      titre: 'La <em>fin</em> brutale d\'un monde',
      contenu_md:
`En **1853**, le commodore américain **Matthew Perry** entre dans la baie d\'Edo avec quatre navires de guerre à vapeur, surnommés les *bateaux noirs*. Il exige l\'ouverture du Japon au commerce. Le shogunat, militairement dépassé, cède.

Le choc est immense. Une faction d\'élites — en partie samouraï — décide qu\'il faut **renverser le shogunat** et restaurer le pouvoir direct de l\'empereur, pour moderniser le pays avant qu\'il ne soit colonisé comme la Chine. C\'est la **restauration de Meiji** en **1868**.

Le nouveau régime supprime alors **systématiquement les privilèges samouraïs** :
- **1871** : abolition des domaines féodaux ; les rentes en riz sont converties en obligations d\'État.
- **1873** : conscription universelle — l\'armée n\'est plus une affaire de caste.
- **1876** : *haitōrei*, interdiction du port public du sabre.

Beaucoup de samouraïs s\'adaptent et deviennent officiers, bureaucrates, entrepreneurs du nouveau Japon. D\'autres s\'estiment trahis. En **1877**, **Saigō Takamori**, l\'un des artisans même de Meiji, prend la tête d\'une révolte dans le sud-ouest. La rébellion de **Satsuma** oppose des samouraïs en armure et au sabre à une armée de paysans-conscrits équipés de fusils modernes. Elle est écrasée. Saigō se suicide. C\'est la dernière bataille samouraï de l\'histoire — et son issue dit tout.`
    },

    {
      type: 'encadre',
      label: 'Un mythe plus vivant que la réalité',
      contenu_md: 'La caste samouraï a disparu en moins de **dix ans**. L\'image, elle, est devenue immortelle : romans de Mishima, films d\'**Akira Kurosawa** (*Les Sept Samouraïs*, 1954), figures récurrentes des [[les-animes|animés]] et des jeux vidéo, et jusqu\'au *Dernier Samouraï* hollywoodien. Cette persistance esthétique sert souvent à exporter une certaine **idée du Japon** — discipline, raffinement, loyauté tragique — qui en dit autant sur le présent que sur le passé. Le samouraï mythique est en partie une **construction du XXᵉ siècle**, comme le bushido en était une du XVIIᵉ.'
    }

  ],

  quiz: [
    {
      type: 'vrai-faux',
      q: 'Vrai ou faux ?',
      affirmation: 'Le katana est l\'arme principale du samouraï depuis ses origines au Xᵉ siècle.',
      reponse: false,
      explication: 'Faux. Pendant les premiers siècles de la caste, l\'arme principale du samouraï est l\'**arc** (*yumi*) employé à cheval. L\'expression traditionnelle pour le métier des armes est même *kyūba no michi* — « voie de l\'arc et du cheval ». Le katana ne devient l\'arme dominante et le symbole identitaire qu\'à partir de l\'époque Sengoku (XVᵉ-XVIᵉ siècle), et surtout à l\'époque Edo, quand il ne sert presque plus à combattre.'
    },
    {
      type: 'ordre-chrono',
      q: 'Remets ces événements de l\'histoire samouraï dans l\'ordre chronologique :',
      items: [
        'Minamoto no Yoritomo est nommé shogun et fonde le gouvernement de Kamakura',
        'Deux invasions mongoles sont repoussées avec l\'aide des "vents divins"',
        'Tokugawa Ieyasu triomphe à Sekigahara et fonde son shogunat',
        'Le commodore Perry force l\'ouverture du Japon avec ses "bateaux noirs"',
        'Saigō Takamori meurt lors de la rébellion de Satsuma, dernière révolte samouraï'
      ],
      explication: '1192 : Yoritomo est nommé shogun. 1274 et 1281 : invasions mongoles. 1600 : Sekigahara, puis le shogunat Tokugawa en 1603. 1853 : arrivée de Perry. 1877 : rébellion de Satsuma.'
    },
    {
      type: 'associer',
      q: 'Associe chaque unificateur ou figure à son rôle :',
      paires: [
        { gauche: 'Oda Nobunaga', droite: 'Premier des trois unificateurs, vainqueur à Nagashino' },
        { gauche: 'Toyotomi Hideyoshi', droite: 'Achève l\'unification militaire, instaure la chasse aux sabres' },
        { gauche: 'Tokugawa Ieyasu', droite: 'Fonde le shogunat de 1603 après Sekigahara' },
        { gauche: 'Saigō Takamori', droite: 'Mène la rébellion de Satsuma en 1877' }
      ],
      explication: 'Le proverbe résume bien l\'unification : « Nobunaga moud le riz, Hideyoshi le cuit, Ieyasu le mange. » Saigō, lui, appartient à la génération finale : artisan de la restauration Meiji, il se retourne contre elle et meurt en défendant l\'ancien monde.'
    },
    {
      q: 'Que signifie littéralement le mot "samouraï" ?',
      options: ['Guerrier', 'Maître du sabre', 'Celui qui sert', 'Cavalier-archer'],
      correcte: 2,
      explication: 'Le mot vient du verbe ancien *saburau* — « servir ». À l\'origine, un samouraï est un domestique armé au service d\'un aristocrate de la cour. Le sens héroïque vient plus tard, à mesure que la classe gagne en autonomie et en prestige.'
    },
    {
      q: 'En quelle année est fondé le premier shogunat, à Kamakura ?',
      options: ['794', '1192', '1336', '1603'],
      correcte: 1,
      explication: '1192 : *Minamoto no Yoritomo*, vainqueur de la guerre de Genpei, est nommé shogun par l\'empereur. Il inaugure un gouvernement militaire qui coexistera avec la cour impériale pendant près de **sept siècles**, jusqu\'en 1868.'
    },
    {
      q: 'À quoi fait référence le mot "kamikaze" dans l\'histoire samouraï ?',
      options: [
        'Au sabre court porté à la ceinture',
        'À deux typhons qui détruisirent les flottes mongoles en 1274 et 1281',
        'Au code d\'honneur du samouraï',
        'À une stratégie de combat à pied'
      ],
      correcte: 1,
      explication: '*Kamikaze* signifie littéralement « **vent divin** ». C\'est ainsi que les Japonais nommèrent les typhons qui dispersèrent les deux flottes mongoles envoyées par Kubilaï Khan. Le terme sera tragiquement repris au XXᵉ siècle pour désigner les pilotes-suicides.'
    },
    {
      q: 'Que désigne l\'époque "Sengoku Jidai" ?',
      options: [
        'La paix prolongée sous les Tokugawa',
        'L\'ère des conquêtes mongoles',
        'L\'âge des provinces en guerre (1467-1615)',
        'La période de la restauration impériale'
      ],
      correcte: 2,
      explication: 'Sengoku Jidai signifie l\'« âge des provinces en guerre ». Pendant un siècle et demi (1467-1615), le pouvoir central s\'effondre et le Japon se fragmente en domaines rivaux dirigés par des **daimyos**. C\'est l\'apogée militaire du samouraï — et la période où les armes à feu européennes bouleversent la tactique.'
    },
    {
      q: 'Quand le code du bushido a-t-il été codifié principalement ?',
      options: [
        'Pendant la guerre de Genpei, au XIIᵉ siècle',
        'À l\'époque Edo (XVIIᵉ-XVIIIᵉ siècle), en pleine paix',
        'Sous Nobunaga, pendant l\'unification',
        'Après la restauration de Meiji, comme nostalgie patriotique'
      ],
      correcte: 1,
      explication: 'Le bushido tel qu\'on le lit aujourd\'hui est essentiellement une **construction de l\'époque Edo**. Le *Hagakure*, son texte le plus célèbre, est dicté entre 1709 et 1716 par Yamamoto Tsunetomo — un samouraï à la retraite qui n\'a jamais combattu. Le code se précise au moment où sa pratique disparaît.'
    },
    {
      q: 'Quel événement militaire de 1575 marque l\'entrée du Japon dans l\'âge des armes à feu ?',
      options: [
        'La bataille de Dan-no-ura',
        'La bataille de Sekigahara',
        'La bataille de Nagashino',
        'Le siège d\'Osaka'
      ],
      correcte: 2,
      explication: 'À **Nagashino** (1575), Oda Nobunaga aligne environ 3 000 arquebusiers en feu roulant derrière des palissades. La célèbre cavalerie du clan Takeda y est anéantie. C\'est la première grande démonstration de l\'efficacité des armes à feu au Japon, à peine trente ans après leur introduction par les Portugais.'
    },
    {
      q: 'Comment la caste samouraï prend-elle fin officiellement ?',
      options: [
        'Elle est massacrée par les Mongols au XIIIᵉ siècle',
        'Elle est dissoute par une série de réformes Meiji entre 1871 et 1876',
        'Elle disparaît naturellement faute de descendants',
        'Elle est interdite par les Américains après 1945'
      ],
      correcte: 1,
      explication: 'La restauration Meiji (1868) supprime méthodiquement les privilèges samouraïs : abolition des domaines féodaux (1871), conscription universelle (1873), interdiction du port du sabre (1876). En moins de dix ans, la caste cesse d\'exister juridiquement. La rébellion de Satsuma (1877), écrasée militairement, en est la mort symbolique.'
    }
  ],

  vocabulaire: [
    {
      terme: 'Samouraï',
      definition: `Membre de la **caste guerrière** japonaise, du Xᵉ au XIXᵉ siècle. Le mot vient du verbe *saburau*, « **servir** » : à l\'origine un serviteur armé d\'aristocrate, devenu progressivement une élite militaire puis administrative, dotée de privilèges hérités (port du sabre, rente en riz, droit de tuer un roturier insultant).`
    },
    {
      terme: 'Shogun',
      definition: `Titre du **chef militaire suprême** du Japon. Abréviation de *Sei-i Taishōgun*, « grand général qui soumet les barbares ». Le shogun gouverne effectivement le pays au nom de l\'empereur, qui reste figure sacrée. Trois shogunats successifs : **Kamakura** (1192-1333), **Ashikaga** (1336-1573), **Tokugawa** (1603-1868).`
    },
    {
      terme: 'Daimyo',
      definition: `**Seigneur féodal** japonais possédant un domaine (*han*) et un corps de samouraïs. Les daimyos contrôlent les provinces sous l\'autorité plus ou moins ferme du shogun. Pendant le **Sengoku**, ils se font librement la guerre ; sous les Tokugawa, ils sont étroitement surveillés et obligés de résider à Edo une année sur deux.`
    },
    {
      terme: 'Bushido',
      definition: `La « **voie du guerrier** » (*bushi*, guerrier ; *dō*, voie). Code moral attribué aux samouraïs, valorisant loyauté, courage, honneur, frugalité et maîtrise de soi. Il intègre des influences du **confucianisme**, du **zen** et du **shintô**, mais a été essentiellement **codifié tardivement**, à l\'époque Edo, alors que les samouraïs ne combattaient plus.`
    },
    {
      terme: 'Katana',
      definition: `**Sabre long courbe** à tranchant unique, porté tranchant vers le haut. Devient l\'arme emblématique du samouraï à partir du XVᵉ siècle. Le forgeage par damassé d\'**aciers de duretés différentes** lui donne une lame souple et coupante. Porté en paire avec le **wakizashi** (sabre court) pour former le *daishō* — « grand et petit ».`
    },
    {
      terme: 'Rônin',
      definition: `Samouraï **sans maître**, par mort, disgrâce ou bannissement de son seigneur. Le mot signifie littéralement « **homme-vague** ». Pendant les guerres du Sengoku, les rônins se vendaient au plus offrant ; sous l\'Edo paisible, leur condition devient un statut social précaire, parfois romanesque (les **47 rônins**).`
    },
    {
      terme: 'Seppuku',
      definition: `**Suicide rituel** par éventrement, réservé en théorie aux samouraïs. Aussi appelé *harakiri* dans le langage populaire. Pratiqué en cas de défaite, de déshonneur ou sur ordre du seigneur ; permettait de **préserver l\'honneur** de la famille et d\'éviter une exécution publique. Codifié à l\'époque Edo en cérémonie hautement ritualisée, avec un second qui décapite pour abréger la douleur.`
    },
    {
      terme: 'Sakoku',
      definition: `Politique d\'**isolement** mise en place par le shogunat Tokugawa à partir de 1635, et maintenue jusqu\'en 1853. Le mot signifie « **pays fermé** ». Le christianisme est interdit, les voyages à l\'étranger sont prohibés sous peine de mort, et le commerce extérieur est limité à un comptoir hollandais à **Dejima** (Nagasaki). Cet isolement explique en partie le retard technologique japonais au moment de l\'arrivée de Perry.`
    },
    {
      terme: 'Ashigaru',
      definition: `« **Pieds légers** ». Fantassins d\'origine paysanne, intégrés massivement aux armées samouraïs à partir du Sengoku. Équipés de lances, puis d\'arquebuses, ils incarnent la transformation du combat japonais en **guerre de masse**, et brouillent durablement la frontière entre samouraï héréditaire et combattant ordinaire.`
    },
    {
      terme: 'Restauration Meiji',
      definition: `Tournant politique de **1868** : l\'empereur **Mutsuhito** (nom d\'ère : Meiji) reprend le pouvoir effectif, le shogunat est aboli. S\'ensuivent une décennie de réformes radicales — abolition des domaines, conscription universelle, interdiction du port du sabre (1876) — qui modernisent le pays et **dissolvent la caste samouraï** en une génération.`
    }
  ]

});
