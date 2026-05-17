/* ===================================================================
   PARCOURS — Climat et environnement
   ===================================================================
   Cinq étapes pour relier le réchauffement global à ses manifestations
   visibles — feux, fonte — et aux mécanismes biologiques qui régulent
   discrètement la biosphère.
   =================================================================== */

window.CarnetDeSavoirs.registerParcours({
  meta: {
    id: 'climat-environnement',
    titre: '<em>Climat</em> et environnement',
    domaine: 'Sciences de la Terre',
    description: `Le climat n'est pas un sujet isolé : c'est une machine **couplée** où l'atmosphère, les forêts, la cryosphère et les océans s'échangent en permanence carbone, chaleur et eau. Le parcours part du cadre général — l'**effet de serre** anthropique — puis observe deux de ses signatures les plus spectaculaires (mégafeux, fonte arctique), avant de descendre vers les deux grands régulateurs vivants : la **photosynthèse** continentale et les **abysses** océaniques. Cinq fiches pour passer du diagnostic global aux puits silencieux qui amortissent encore le choc.`,
    duree_estimee_min: 185
  },
  etapes: [
    {
      slug: 'changement-climatique',
      note: `Le **cadre** général. Depuis l'ère industrielle, la concentration de CO₂ atmosphérique est passée d'environ 280 à 420 ppm, et la température moyenne du globe a gagné 1,2 °C. Tout le reste du parcours décline les conséquences et les amortisseurs de ce déséquilibre énergétique.`
    },
    {
      slug: 'megafeux',
      note: `Première manifestation visible : le feu. Australie 2019, Canada 2023, Californie chaque été — les **mégafeux** ne sont plus des accidents mais une signature climatique. Sécheresse, vagues de chaleur et biomasse inflammable s'alignent, et la combustion relâche dans l'atmosphère une partie du **carbone** que les forêts stockaient.`
    },
    {
      slug: 'arctique',
      note: `Autre signature, à l'autre extrémité du thermomètre. L'**Arctique** se réchauffe environ quatre fois plus vite que le reste du globe. Banquise qui recule, permafrost qui dégèle et libère du méthane, ours en stress alimentaire : la **boucle de rétroaction** y est particulièrement brutale.`
    },
    {
      slug: 'photosynthese',
      note: `Heureusement, la biosphère résiste. Les forêts, prairies et phytoplanctons captent encore chaque année près d'un quart du CO₂ émis par les humains via la **photosynthèse**. Sans ce puits biologique, le réchauffement déjà observé serait sensiblement plus rapide.`
    },
    {
      slug: 'abysses-oceaniques',
      note: `Dernier régulateur, le plus discret. Les **abysses océaniques** stockent une part majeure de la chaleur excédentaire et du carbone dissous. Leur **pompe biologique** — neige marine, carcasses qui tombent — séquestre du carbone pour des siècles. Encore mal connus, ces fonds sont aussi parmi les plus vulnérables.`
    }
  ]
});
