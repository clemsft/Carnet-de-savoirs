/* ===================================================================
   SUJET — La Révolution française
   ===================================================================
   Dix ans qui ont fait l'Europe moderne.
   Domaine : Histoire
   =================================================================== */

window.CarnetDeSavoirs.register({

  meta: {
    id: 'revolution-francaise',
    titre: 'La <em>Révolution française</em>',
    domaines: ['Histoire'],
    tags: ['1789', 'lumières', 'république', 'terreur', 'napoléon', 'droits de l\'homme'],
    difficulte: 2,
    duree_estimee_min: 35,
    prerequis: [],
    lie_a: ['rome-antique', 'paris-geographie', 'napoleon', 'capitalisme'],
    date_creation: '2026-05-11',
    date_maj: '2026-05-11'
  },

  resume: `Dix ans qui font basculer l\'Europe — de la convocation des États généraux en mai 1789 au coup d\'État de Bonaparte le 18 brumaire 1799. Comprendre comment une crise financière sous Louis XVI se transforme en révolution politique, sociale et juridique, dont la **Déclaration des droits de l\'homme** et le **Code civil** sont les héritages durables.`,

  points_cles: [
    `Le **5 mai 1789**, Louis XVI ouvre les **États généraux** à Versailles pour résoudre la crise financière du royaume. Première convocation depuis **1614** — soit 175 ans.`,
    `Le **14 juillet 1789**, la prise de la **Bastille** par les Parisiens devient le symbole révolutionnaire. La nuit du **4 août** abolit les privilèges féodaux ; le **26 août**, la **Déclaration des droits de l\'homme et du citoyen** est votée.`,
    `Trois régimes politiques se succèdent en dix ans : **monarchie constitutionnelle** (1789-1792), **Première République** (proclamée le 22 septembre 1792 après Valmy), **Directoire** (1795-1799).`,
    `Louis XVI est exécuté le **21 janvier 1793**, Marie-Antoinette le 16 octobre. La **Terreur** sous Robespierre (1793-1794) fait **16 000 victimes guillotinées**, sans compter les massacres de masse en Vendée.`,
    `Le **9 thermidor an II** (27 juillet 1794), Robespierre lui-même est arrêté et exécuté. La Terreur s\'arrête. La **réaction thermidorienne** ouvre une période plus modérée, mais instable.`,
    `Le **18 brumaire an VIII** (9 novembre 1799), **Napoléon Bonaparte** renverse le Directoire par un coup d\'État. Fin de la Révolution au sens étroit ; début du Consulat puis de l\'Empire.`,
    `Le **Code civil**, promulgué en **1804** sous le Consulat, codifie les acquis révolutionnaires (égalité civile, propriété, laïcité de l\'État civil) dans une synthèse qui inspirera des dizaines de pays.`,
    `La Révolution a inventé — ou mondialisé — la **nation citoyenne**, les **droits universels**, la **République**, le calendrier décimal (qui disparaîtra), le système métrique (qui restera), et l\'idée que la souveraineté appartient au peuple.`
  ],

  carte_mentale: {
    central: 'revolution',
    noeuds: [
      { id: 'revolution', label: 'Révolution française', description: '1789-1799. Dix ans qui transforment la France et l\'Europe.' },
      { id: 'causes', label: 'Causes', description: 'Crise financière, blocage institutionnel, philosophie des Lumières, inégalités sociales.' },
      { id: 'monarchie-const', label: 'Monarchie constitutionnelle', description: '1789-1792. Le roi conserve son trône, mais doit composer avec une Assemblée.' },
      { id: 'republique', label: 'Première République', description: 'Proclamée le 22 septembre 1792. Régime sans roi, théoriquement souverain populaire.' },
      { id: 'terreur', label: 'Terreur', description: '1793-1794. Robespierre et le Comité de salut public. 16 000 guillotinés.' },
      { id: 'thermidor', label: 'Thermidor et Directoire', description: '1794-1799. Réaction modérée, mais instable. Préparation du coup d\'État final.' },
      { id: 'fin', label: 'Brumaire', description: '9 novembre 1799. Bonaparte prend le pouvoir. Fin de la Révolution.' },
      { id: 'heritage', label: 'Héritage', description: 'Droits de l\'homme, Code civil, République, laïcité, nation citoyenne, système métrique.' },

      // Sous-niveau causes
      { id: 'lumieres', label: 'Lumières', description: '**Voltaire**, **Rousseau**, **Montesquieu**, **Diderot**. Critique de l\'absolutisme, de l\'Église, des privilèges. Forment le terreau intellectuel de 1789.', parent: 'causes' },
      { id: 'finances', label: 'Crise financière', description: 'Dette colossale de l\'État (guerre d\'Amérique), recettes fiscales inégales (clergé et noblesse peu imposés). Les caisses sont **vides en 1788**.', parent: 'causes' },

      // Sous-niveau monarchie constitutionnelle
      { id: 'etatsgeneraux', label: 'États généraux', description: '**5 mai 1789**, Versailles. Première convocation depuis 1614. Le **tiers état** se proclame Assemblée nationale le 17 juin.', parent: 'monarchie-const' },
      { id: 'bastille', label: 'Prise de la Bastille', description: '**14 juillet 1789**. Symbole du soulèvement parisien. Sept prisonniers libérés. La fête nationale française célèbre cette date.', parent: 'monarchie-const' },
      { id: 'ddhc', label: 'DDHC', description: '**26 août 1789**. Déclaration des droits de l\'homme et du citoyen. 17 articles. Texte fondateur de la modernité politique.', parent: 'monarchie-const' },

      // Sous-niveau république
      { id: 'valmy', label: 'Valmy', description: '**20 septembre 1792**. Victoire de l\'armée révolutionnaire contre les Prussiens. Le lendemain, la Convention proclame la République.', parent: 'republique' },
      { id: 'execution', label: 'Exécution de Louis XVI', description: '**21 janvier 1793**, place de la Révolution (Concorde). Le roi est guillotiné après procès devant la Convention. Choc européen majeur.', parent: 'republique' },

      // Sous-niveau terreur
      { id: 'robespierre', label: 'Robespierre', description: '**1758-1794**. Avocat, jacobin, principal dirigeant du Comité de salut public. *L\'Incorruptible*. Tombe le 9 thermidor.', parent: 'terreur' }
    ],
    liens: []
  },

  cours: [

    {
      type: 'texte',
      titre: 'La <em>crise</em> qui devient révolution',
      contenu_md:
`En 1788, la monarchie française est **techniquement en faillite**. Cinquante ans de guerres coûteuses — guerre de Sept Ans (1756-1763), soutien aux insurgés américains contre l\'Angleterre (1778-1783) — ont accumulé une dette colossale. Le service de cette dette absorbe à lui seul **plus de la moitié** des recettes fiscales du royaume.

Le problème est aggravé par un système fiscal absurde et inéquitable. La **noblesse** et le **clergé** — les deux premiers ordres — paient peu d\'impôts. Toute la charge pèse sur le **tiers état** (paysans, bourgeois, artisans), c\'est-à-dire **97 % de la population**. Louis XVI tente plusieurs réformes : il limoge ses ministres les uns après les autres — Turgot, Necker, Calonne, Brienne, Necker à nouveau —, chacun se heurtant au refus des privilégiés de payer leur juste part.

À cela s\'ajoutent un **mauvais hiver** en 1788-1789, une récolte catastrophique, le prix du pain qui flambe (jusqu\'à **88 % du salaire** d\'un ouvrier parisien en juillet 1789). Et un blocage institutionnel : l\'absolutisme, théorisé sous Louis XIV, ne dispose d\'aucun mécanisme moderne de **délibération**.

C\'est dans ce contexte que Louis XVI prend une décision lourde de conséquences : il **convoque les États généraux**, qui n\'avaient plus été réunis depuis **1614** — soit 175 ans. Personne ne mesure encore ce qui va se déclencher.`
    },

    {
      type: 'encadre',
      label: 'Les Lumières',
      contenu_md: `La Révolution ne sort pas du néant. Tout au long du XVIIIᵉ siècle, les philosophes des **Lumières** — Voltaire, Rousseau, Montesquieu, Diderot, d\'Alembert — ont critiqué l\'absolutisme, l\'Église catholique, les privilèges héréditaires, l\'arbitraire. Ils ont popularisé l\'idée de **droits naturels**, de **séparation des pouvoirs**, de **souveraineté du peuple**. Beaucoup admirent la **République romaine** ([[rome-antique]]) qu\'ils prennent comme modèle. Quand viendra 1789, les députés du tiers état citent **Cicéron** et **Brutus** comme leurs maîtres. La rupture politique a été préparée par une rupture intellectuelle de cent ans.`
    },

    {
      type: 'widget',
      titre: 'Dix ans, en jalons',
      composant: 'Frise',
      params: {
        evenements: [
          { date: '5 mai 1789', titre: 'Ouverture des États généraux', description: 'Louis XVI ouvre la session à Versailles. **1 200 députés** : clergé, noblesse, tiers état. Premier conflit immédiat sur le mode de vote (par ordre ou par tête).' },
          { date: '17 juin 1789', titre: 'Assemblée nationale', description: 'Le **tiers état** se proclame "Assemblée nationale", représentant la souveraineté du peuple. Le 20 juin, **serment du Jeu de paume** : ne pas se séparer avant d\'avoir donné une constitution à la France.' },
          { date: '14 juillet 1789', titre: 'Prise de la Bastille', description: 'Le peuple de Paris s\'empare de la **forteresse-prison**, symbole de l\'arbitraire royal. Sept prisonniers seulement y sont libérés. La date deviendra la **fête nationale française** en 1880.' },
          { date: '4 août 1789', titre: 'Abolition des privilèges', description: 'Dans la nuit, l\'Assemblée abolit les **privilèges féodaux**, la dîme, la vénalité des offices. **Mille ans** d\'organisation sociale rayés en quelques heures.' },
          { date: '26 août 1789', titre: 'Déclaration des droits de l\'homme', description: 'La **DDHC** (17 articles) proclame la liberté, l\'égalité devant la loi, la souveraineté de la nation, la séparation des pouvoirs. Texte fondateur de la **modernité politique** mondiale.' },
          { date: '20 juin 1791', titre: 'Fuite à Varennes', description: 'Louis XVI tente de fuir à l\'étranger. Reconnu et arrêté à **Varennes**. Le roi perd toute crédibilité ; la République devient pensable.' },
          { date: '20 sept. 1792', titre: 'Valmy', description: 'L\'armée révolutionnaire repousse les Prussiens à **Valmy**. Goethe, témoin, déclare : *« d\'ici et d\'aujourd\'hui, date une époque nouvelle de l\'histoire du monde »*. Le lendemain, la Convention proclame la **République**.' },
          { date: '21 janv. 1793', titre: 'Exécution de Louis XVI', description: 'Le roi est guillotiné place de la Révolution (l\'actuelle Concorde). Choc européen majeur. Mort de **Marie-Antoinette** le 16 octobre.' },
          { date: '1793-1794', titre: 'La Terreur', description: '**Comité de salut public** dirigé par **Robespierre**. **16 000 guillotinés**, et des dizaines de milliers de morts en province (Vendée, Lyon, Toulon). Régime d\'exception au nom du salut de la République.' },
          { date: '9 thermidor an II', titre: 'Chute de Robespierre', description: '**27 juillet 1794**. Une coalition de députés modérés et de Conventionnels menacés fait tomber Robespierre. Exécuté le lendemain. Fin de la Terreur.' },
          { date: '1795-1799', titre: 'Directoire', description: 'Régime de **cinq directeurs**. Instable, corrompu, mais paix relative intérieure. Conquêtes militaires extérieures, dont les **campagnes d\'Italie** du jeune général **Bonaparte**.' },
          { date: '18 brumaire an VIII', titre: 'Coup d\'État de Bonaparte', description: '**9 novembre 1799**. Bonaparte renverse le Directoire avec l\'appui de son frère Lucien. Devient **Premier Consul**. Fin de la Révolution. Début d\'une autre histoire.' },
          { date: '21 mars 1804', titre: 'Code civil', description: 'Promulgation du **Code civil** (Code Napoléon). Codification des acquis révolutionnaires : égalité devant la loi, propriété, laïcité de l\'état civil. Inspire des dizaines de pays.' }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'L\'<em>été</em> qui change tout',
      contenu_md:
`Tout se joue en quelques semaines de l\'été 1789. Le 5 mai, les États généraux s\'ouvrent à Versailles dans une atmosphère de respect officiel. Mais dès le **17 juin**, les députés du tiers état — réunis à part — se proclament **Assemblée nationale**. Trois jours plus tard, expulsés de leur salle de réunion, ils se rassemblent dans une salle de jeu de paume et **jurent solennellement** de ne pas se séparer avant d\'avoir donné une constitution à la France. L\'acte est révolutionnaire au sens strict : ils s\'arrogent un pouvoir qu\'aucune autorité ne leur a délégué.

Le **14 juillet**, à Paris, la situation tourne à l\'insurrection. Le peuple, craignant un coup de force royal — les troupes étrangères mercenaires s\'amassent autour de la capitale —, prend d\'assaut la **Bastille**, forteresse-prison symbole de l\'arbitraire. Sept prisonniers y sont libérés (quatre faussaires, deux fous, un noble), mais l\'événement est immédiatement érigé en mythe : il prouve que le peuple peut **désarmer le roi** physiquement, dans la rue.

Dans la nuit du **4 août**, dans une atmosphère mi-enthousiaste mi-paniquée, l\'Assemblée vote l\'**abolition des privilèges féodaux**. Un nobles ou ecclésiastique après l\'autre, par contagion, se lève et renonce à ses droits héréditaires — dîme, corvées, justice seigneuriale, droits de chasse. **Mille ans** d\'organisation sociale sont rayés en quelques heures — déblayant aussi, sans qu\'on le dise, le terrain juridique sur lequel s\'épanouira le [[capitalisme]] bourgeois du XIXᵉ siècle.

Le **26 août**, l\'Assemblée vote la **Déclaration des droits de l\'homme et du citoyen** — 17 articles, en quelques pages, qui établissent que tous les hommes naissent libres et égaux en droits, que la souveraineté réside dans la nation, que la loi est l\'expression de la volonté générale, que la séparation des pouvoirs est un principe constitutionnel. Le texte deviendra, par sa traduction immédiate dans toute l\'Europe, l\'**acte fondateur de la modernité politique mondiale**.`
    },

    {
      type: 'encadre',
      label: 'La DDHC, texte global',
      contenu_md: `La **Déclaration des droits de l\'homme et du citoyen** s\'inspire directement de la *Déclaration d\'indépendance américaine* de 1776, mais elle s\'en distingue par sa portée **universelle**. Elle ne dit pas seulement les droits des Français, mais ceux de *« tous les hommes »*. C\'est ce qui lui donne une dimension globale immédiate : traduite dès 1789 en anglais, allemand, italien, espagnol, elle inspirera la Constitution polonaise de 1791, les indépendances latino-américaines (Bolivar la cite explicitement), puis, en 1948, la **Déclaration universelle des droits de l\'homme** des Nations unies, qui en reprend la structure et l\'esprit.`
    },

    {
      type: 'texte',
      titre: 'De la <em>monarchie</em> à la République',
      contenu_md:
`Pendant trois ans (1789-1792), la Révolution reste théoriquement **monarchique**. Louis XVI conserve son trône, mais doit cohabiter avec une Assemblée constituante, puis avec une Assemblée législative. La Constitution de 1791 instaure une **monarchie constitutionnelle** sur le modèle britannique.

Le système ne tient pas. Louis XVI joue double jeu — il accepte publiquement la Constitution, et en privé pousse les puissances étrangères à intervenir militairement. Le **20 juin 1791**, il tente de **fuir à l\'étranger** avec sa famille : reconnu à **Varennes**, il est ramené à Paris en demi-prisonnier. Son crédit moral est détruit.

L\'**Assemblée législative** (octobre 1791 — septembre 1792) déclare la guerre à l\'Autriche en avril 1792. Les défaites initiales et la peur de la trahison royale culminent le **10 août 1792** : les Tuileries sont prises d\'assaut, le roi est suspendu. La Convention, élue au suffrage universel masculin (première fois dans l\'histoire mondiale à cette échelle), se réunit le **20 septembre**. Le même jour, l\'armée révolutionnaire repousse les Prussiens à **Valmy** — victoire modeste mais symbolique. **Goethe**, témoin oculaire dans le camp prussien, écrit : *« d\'ici et d\'aujourd\'hui, date une époque nouvelle de l\'histoire du monde »*.

Le **22 septembre 1792**, la Convention proclame la **République**. C\'est le **jour I de l\'an I**. Le **21 janvier 1793**, Louis XVI est jugé et guillotiné — vote à une voix de majorité — sur la place de la Révolution (l\'actuelle Concorde). **Marie-Antoinette** le suit le 16 octobre. Le choc dans l\'Europe monarchique est immense : presque toutes les puissances déclarent la guerre à la France.`
    },

    {
      type: 'widget',
      titre: 'Les grandes factions révolutionnaires',
      composant: 'GrilleCartes',
      params: {
        cartes: [
          {
            tag: 'Centre-droit',
            titre: 'Feuillants',
            description: `Partisans d\'une **monarchie constitutionnelle** modérée à l\'anglaise. **La Fayette**, **Barnave**, **Bailly**. Dominent jusqu\'à la fuite de Varennes (1791), puis sont marginalisés. Beaucoup périront sous la Terreur.`
          },
          {
            tag: 'Centre-gauche',
            titre: 'Girondins',
            description: `Républicains modérés, surtout députés de province. **Brissot**, **Roland**, **Vergniaud**. Veulent une République **fédérale** et libérale. Évincés violemment du pouvoir le **31 mai-2 juin 1793** par les sans-culottes. La plupart guillotinés.`
          },
          {
            tag: 'Gauche radicale',
            titre: 'Montagnards (Jacobins)',
            description: `Républicains centralistes et radicaux. **Robespierre**, **Danton**, **Marat**, **Saint-Just**. Tirent leur force du soutien populaire parisien. Dirigent la **Terreur** (1793-1794). Robespierre tombe le 9 thermidor an II.`
          },
          {
            tag: 'Extrême-gauche',
            titre: 'Sans-culottes et Hébertistes',
            description: `Mouvement populaire urbain — artisans, ouvriers, petits boutiquiers. Animent les sections parisiennes. **Hébert** mène une fraction radicale (déchristianisation, lois sur les prix maximaux). Liquidés par Robespierre lui-même au printemps 1794.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'La <em>Terreur</em>',
      contenu_md:
`Entre l\'été 1793 et l\'été 1794, la République est en danger réel : guerre étrangère sur tous les fronts, insurrection royaliste massive en **Vendée**, soulèvements fédéralistes à Lyon, Marseille, Bordeaux. La Convention met en place un **régime d\'exception** : pouvoir concentré entre les mains du **Comité de salut public**, douze députés dont **Robespierre**, **Saint-Just**, **Couthon**. La **loi des suspects** (17 septembre 1793) autorise l\'arrestation préventive de quiconque est soupçonné d\'hostilité à la Révolution.

Le bilan, en chiffres, est terrible. Environ **16 000 personnes guillotinées** après procès officiel pendant la Terreur, dont l\'écrasante majorité à Paris. À cela s\'ajoutent des **massacres de masse** en province : noyades de Nantes (4 000 victimes), répression de Lyon (2 000 fusillés), guerre de Vendée totale (entre **170 000 et 250 000 morts** selon les estimations — tout le monde, royalistes comme paysans neutres, est concerné).

Politiquement, la Terreur est aussi une **purge** interne. Les Girondins sont guillotinés en octobre 1793. Puis les Hébertistes (mars 1794), puis les Dantonistes (avril 1794). À la fin du printemps 1794, Robespierre dirige presque seul. Mais ses derniers alliés deviennent ses victimes potentielles : les députés modérés, terrifiés, finissent par se coaliser.

Le **9 thermidor an II** (27 juillet 1794), la Convention vote la mise en accusation de Robespierre et de ses proches. Il est exécuté le lendemain — à 36 ans. La Terreur s\'arrête net.`
    },

    {
      type: 'encadre',
      label: 'Robespierre, énigme',
      contenu_md: `**Maximilien Robespierre** (1758-1794) reste l\'un des personnages les plus discutés de l\'histoire française. Avocat provincial, député du tiers état d\'Arras, jacobin convaincu, il est d\'abord un **opposant à la peine de mort** (1791) et au régime censitaire. Devenu maître du Comité de salut public en 1793, *l\'Incorruptible* met en œuvre la Terreur au nom d\'une *« République de la vertu »*. Pour ses admirateurs, sauveur de la République menacée ; pour ses détracteurs, dictateur sanguinaire. Les deux lectures coexistent encore aujourd\'hui en France, où aucune rue importante ne porte son nom.`
    },

    {
      type: 'texte',
      titre: 'Thermidor, Directoire, <em>brumaire</em>',
      contenu_md:
`Après la chute de Robespierre, la **Convention thermidorienne** (juillet 1794 — octobre 1795) cherche à stabiliser. On supprime la loi des suspects, on libère les prisonniers politiques, on referme les clubs jacobins. Mais l\'instabilité demeure : les royalistes refont surface, les sans-culottes tentent plusieurs insurrections, l\'inflation est galopante.

La Constitution de **1795** instaure le **Directoire** : pouvoir exécutif partagé entre cinq directeurs, pouvoir législatif entre deux assemblées (Conseil des Anciens, Conseil des Cinq-Cents). Régime censitaire, modéré, mais structurellement fragile : aucune majorité stable, coups d\'État à répétition (Fructidor an V contre les royalistes, Floréal an VI contre les jacobins, Prairial an VII contre les modérés). Le Directoire **vit de coups d\'État**, et ses dirigeants le savent.

Pendant ce temps, les **armées de la République** triomphent à l\'extérieur. Un jeune général corse, **Napoléon Bonaparte** (1769-1821), s\'illustre en Italie (1796-1797) puis en Égypte (1798-1799). À son retour d\'Égypte en octobre 1799, le pouvoir lui semble à portée de main : le Directoire est discrédité, l\'opinion réclame un homme à poigne.

Le **18 brumaire an VIII** (9 novembre 1799), avec la complicité de son frère **Lucien** (président du Conseil des Cinq-Cents) et de l\'abbé **Sieyès** (l\'un des directeurs), Bonaparte renverse le régime. Le lendemain, à Saint-Cloud, il se heurte à la résistance des députés ; Lucien fait évacuer la salle par les grenadiers. Le coup réussit. La Constitution de l\'an VIII institue un **Consulat** dominé par un **Premier Consul** — [[napoleon]]. La Révolution, au sens strict, est terminée. Pour beaucoup, soulagement ; pour d\'autres, défaite définitive.`
    },

    {
      type: 'widget',
      titre: 'L\'héritage révolutionnaire',
      composant: 'ListeMethodes',
      params: {
        methodes: [
          {
            titre: `La Déclaration des droits de l\'homme`,
            description: `Texte fondateur de la **modernité politique** : liberté, égalité, propriété, souveraineté nationale, séparation des pouvoirs. Inspire toutes les constitutions républicaines ultérieures et, en 1948, la **Déclaration universelle** de l\'ONU.`
          },
          {
            titre: `Le Code civil de 1804`,
            description: `Synthèse juridique commandée par Bonaparte, promulguée le **21 mars 1804**. Égalité civile, abolition des privilèges, laïcité de l\'état civil, propriété individuelle, libre disposition par testament. Modèle pour la **Belgique**, l\'**Italie**, les **Pays-Bas**, le **Luxembourg**, l\'**Égypte**, le **Japon**, la **Louisiane**, le **Québec**...`
          },
          {
            titre: `La nation citoyenne`,
            description: `Avant 1789, on était sujet du roi de France. Après, on est citoyen d\'une **nation souveraine**. Cette transformation invente la conscription, l\'impôt national, l\'école républicaine, et plus largement le **patriotisme moderne** — pour le meilleur et pour le pire.`
          },
          {
            titre: `Le système métrique`,
            description: `Décidé en 1791, finalisé en 1799. **Mètre**, **gramme**, **litre**, **seconde** : un système universel, rationnel, décimal. Adopté progressivement par presque tous les pays du monde. L\'un des rares produits du calendrier décimal qui ait survécu.`
          },
          {
            titre: `La laïcité`,
            description: `Constitution civile du clergé (1790), mariage civil et divorce (1792), état civil détaché des paroisses. Le mariage et la naissance deviennent affaires d\'**État**, non d\'Église. Cette **séparation** sera approfondie en 1905, mais sa racine est révolutionnaire.`
          }
        ]
      }
    },

    {
      type: 'texte',
      titre: 'Une <em>onde de choc</em> globale',
      contenu_md:
`Aucun événement n\'a autant marqué l\'Europe que la Révolution française — sauf peut-être les deux guerres mondiales. Et son onde de choc dépasse l\'Europe.

Sur le **continent européen** d\'abord : les armées révolutionnaires puis napoléoniennes diffusent à coups de canon les idées de 1789 — abolition des privilèges, Code civil, sécularisation. Quand Napoléon tombe en 1815, le **Congrès de Vienne** restaure formellement les monarchies, mais ne peut pas effacer les transformations sociales et juridiques. Tout le XIXᵉ siècle européen sera marqué par la **tension** entre restauration conservatrice et exigence libérale-nationale, jusqu\'au triomphe progressif des républiques.

À **Saint-Domingue** (l\'actuel Haïti), les esclaves noirs se révoltent dès 1791 au nom de la DDHC — et arrachent l\'indépendance en 1804. Première république noire de l\'histoire moderne.

En **Amérique latine**, **Bolivar**, **San Martin**, **Hidalgo** s\'inspirent explicitement de 1789 dans les indépendances de 1810-1825. La **Pologne** se dote en 1791 d\'une constitution écrite — la seconde au monde après celle des États-Unis. Les **printemps des peuples** de 1848, en Europe, sont presque tous nourris de 1789.

Et **Paris** elle-même est physiquement marquée par la Révolution. La géographie urbaine de la capitale ([[paris-geographie]]) en porte encore les cicatrices — places renommées, monuments rasés (la Bastille), palais transformés (les Tuileries détruites en 1871, en hommage indirect à la révolution permanente). Le 14-Juillet reste, depuis 1880, la fête nationale.

Plus largement, la Révolution est l\'événement qui invente la modernité politique au sens où nous l\'entendons : pas seulement un changement de régime, mais un changement de **conception de l\'humain et de la légitimité**. Pour le meilleur — droits universels, citoyenneté, République — et pour le pire — terreur d\'État, guerres totales, mythologie nationaliste. Deux siècles plus tard, nous continuons d\'en tirer les conséquences.`
    }

  ],

  quiz: [
    {
      type: 'ordre-chrono',
      q: 'Remets ces événements clés de la Révolution dans l\'ordre chronologique :',
      items: [
        'Prise de la Bastille',
        'Fuite de Varennes',
        'Exécution de Louis XVI',
        'Chute de Robespierre, fin de la Terreur',
        'Coup d\'État du 18 Brumaire par Bonaparte'
      ],
      explication: 'L\'enchaînement résume la dynamique : monarchie constitutionnelle ébranlée par la fuite (1791), République proclamée puis radicalisée (1792-1793), Terreur jacobine renversée par Thermidor (1794), puis Directoire jusqu\'au coup d\'État qui ouvre l\'ère napoléonienne.'
    },
    {
      q: `Quand Louis XVI convoque-t-il les États généraux qui ouvrent la Révolution française ?`,
      options: [
        `Le 14 juillet 1789`,
        `Le 5 mai 1789, à Versailles, pour la première fois depuis 1614`,
        `Le 4 août 1789`,
        `Le 21 janvier 1793`
      ],
      correcte: 1,
      explication: `Les États généraux s\'ouvrent à Versailles le 5 mai 1789. Première convocation depuis 175 ans (1614). 1 200 députés se réunissent. Le tiers état se proclamera Assemblée nationale le 17 juin.`
    },
    {
      q: `Quel texte fondateur est voté le 26 août 1789 ?`,
      options: [
        `La Constitution de 1791`,
        `Le Code civil`,
        `La Déclaration des droits de l\'homme et du citoyen (DDHC)`,
        `La Loi des suspects`
      ],
      correcte: 2,
      explication: `La DDHC, en 17 articles, proclame la liberté, l\'égalité devant la loi, la souveraineté de la nation, la séparation des pouvoirs. Texte fondateur de la modernité politique mondiale. Inspire encore la Déclaration universelle de l\'ONU de 1948.`
    },
    {
      q: `Quand la Première République française est-elle proclamée ?`,
      options: [
        `Le 14 juillet 1789`,
        `Le 22 septembre 1792, au lendemain de la victoire de Valmy`,
        `Le 21 janvier 1793`,
        `Le 27 juillet 1794`
      ],
      correcte: 1,
      explication: `La Convention proclame la République le 22 septembre 1792. C\'est le jour I de l\'an I du nouveau calendrier. Louis XVI sera jugé puis guillotiné le 21 janvier 1793.`
    },
    {
      q: `Qui dirige le Comité de salut public pendant la Terreur (1793-1794) ?`,
      options: [
        `Danton`,
        `Robespierre, surnommé "l\'Incorruptible"`,
        `La Fayette`,
        `Mirabeau`
      ],
      correcte: 1,
      explication: `Maximilien Robespierre (1758-1794), avocat jacobin, domine le Comité de salut public pendant la Terreur. Environ 16 000 personnes sont guillotinées après procès. Robespierre tombera lui-même le 9 thermidor an II (27 juillet 1794).`
    },
    {
      q: `Que signifie le 9 thermidor an II ?`,
      options: [
        `La prise de la Bastille`,
        `L\'arrestation et la chute de Robespierre (27 juillet 1794), qui met fin à la Terreur`,
        `Le couronnement de Napoléon`,
        `La fuite de Louis XVI à Varennes`
      ],
      correcte: 1,
      explication: `Le 9 thermidor an II (27 juillet 1794), une coalition de députés fait tomber Robespierre. Il est exécuté le lendemain. Fin de la Terreur. Début de la "réaction thermidorienne" qui débouchera sur le Directoire en 1795.`
    },
    {
      q: `Quel régime succède à la Convention en 1795 ?`,
      options: [
        `La Restauration`,
        `Le Directoire, avec cinq directeurs au pouvoir exécutif`,
        `Le Consulat`,
        `La monarchie constitutionnelle`
      ],
      correcte: 1,
      explication: `Le Directoire (1795-1799) est un régime républicain à cinq directeurs et deux assemblées (Conseil des Anciens, Conseil des Cinq-Cents). Censitaire, instable, vivant de coups d\'État successifs. Il sera renversé par Bonaparte le 18 brumaire an VIII.`
    },
    {
      q: `Comment et quand Napoléon Bonaparte prend-il le pouvoir, mettant fin à la Révolution ?`,
      options: [
        `Par une élection populaire en 1800`,
        `Par le coup d\'État du 18 brumaire an VIII (9 novembre 1799), qui renverse le Directoire`,
        `Par hérédité`,
        `Par la victoire d\'Austerlitz`
      ],
      correcte: 1,
      explication: `Le 18 brumaire an VIII (9 novembre 1799), Bonaparte renverse le Directoire avec la complicité de son frère Lucien et de Sieyès. Il devient Premier Consul. Fin de la Révolution au sens strict. En 1804, il se proclame empereur.`
    },
    {
      q: `Quel grand héritage juridique est promulgué en 1804 sous Bonaparte ?`,
      options: [
        `La Constitution de l\'an VIII`,
        `Le Code civil (Code Napoléon), codifiant les acquis révolutionnaires`,
        `La Déclaration des droits de l\'homme`,
        `Le Code pénal`
      ],
      correcte: 1,
      explication: `Le Code civil, promulgué le 21 mars 1804, codifie l\'égalité civile, l\'abolition des privilèges, la laïcité de l\'état civil, la propriété individuelle. Il inspirera des dizaines de pays — de la Belgique au Japon, en passant par la Louisiane et le Québec.`
    }
  ]

});
