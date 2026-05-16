/* ===================================================================
   PARCOURS — La France en cinq mouvements
   ===================================================================
   De la fin de l'Ancien Régime aux banlieues contemporaines, en
   passant par l'Empire, Paris haussmannien et l'arrivée du jazz.
   =================================================================== */

window.CarnetDeSavoirs.registerParcours({
  meta: {
    id: 'histoire-france',
    titre: 'La <em>France</em> en cinq mouvements',
    domaine: 'Histoire',
    description: `Un fil narratif de 1789 à aujourd'hui. La Révolution qui rebat les cartes politiques et sociales ; Napoléon qui solde dix ans de chaos en quinze ans d'institutions ; Paris qui devient la ville en couches qu'on connaît ; le jazz qui débarque dans les caves de Saint-Germain-des-Prés ; le rap qui prend la voix des banlieues. Cinq étapes pour relire un peu plus de deux siècles d'histoire française à hauteur d'événements.`,
    duree_estimee_min: 170
  },
  etapes: [
    {
      slug: 'revolution-francaise',
      note: `Dix ans qui font basculer l'Europe : des États généraux de mai 1789 au coup d'État du 18 brumaire 1799. Tout ce qui suit, en France comme ailleurs, conserve la trace de cet épisode fondateur — la Déclaration des droits, la fin des privilèges, l'idée de **nation**.`
    },
    {
      slug: 'napoleon',
      note: `La Révolution ne s'arrête pas, elle se solde — et le solde s'appelle **Bonaparte**. Quinze ans pour refonder l'État (Code civil, préfets, Banque de France, lycées), redessiner l'Europe, et finir sur un rocher de l'Atlantique sud transformé en mythe.`
    },
    {
      slug: 'paris-geographie',
      note: `Le XIXᵉ siècle français se cristallise dans **Paris**. Napoléon III et Haussmann percent les boulevards, le métro descend, les catacombes structurent le sous-sol. La géographie urbaine de Paris est à la fois palimpseste et invention politique.`
    },
    {
      slug: 'jazz',
      note: `Après-guerre, **Saint-Germain-des-Prés** accueille le jazz américain dans ses caves. Le Hot Club de France et Django Reinhardt inventent même un jazz manouche français. La France devient relais européen d'une musique qui réinvente l'idée de musicien.`
    },
    {
      slug: 'le-rap',
      note: `Trente ans plus tard, dans les **banlieues** parisiennes et marseillaises, le rap français émerge. NTM, IAM, MC Solaar, puis Booba, PNL, Damso. La filiation afro-américaine continue, mais elle parle désormais la langue d'une nouvelle France urbaine.`
    }
  ]
});
