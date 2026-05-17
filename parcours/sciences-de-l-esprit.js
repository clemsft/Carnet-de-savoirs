/* ===================================================================
   PARCOURS — Les sciences de l'esprit
   ===================================================================
   Cinq étapes pour descendre du substrat neuronal jusqu'aux états les
   plus fragiles de la conscience — sommeil, mémoire, placebo, vertige.
   =================================================================== */

window.CarnetDeSavoirs.registerParcours({
  meta: {
    id: 'sciences-de-l-esprit',
    titre: 'Les <em>sciences de l\'esprit</em>',
    domaine: 'Neurosciences',
    description: `Comprendre l'esprit, c'est accepter qu'il est à la fois un **organe** de chair et un **phénomène** insaisissable. Le parcours part du cerveau comme architecture matérielle, puis suit ce qu'il fait quand on dort, quand on se souvient, quand on croit guérir, et quand il déraille face à la beauté. Cinq fiches qui s'enchaînent du plus tangible — 86 milliards de neurones — au plus vertigineux : un syndrome où l'art seul suffit à faire perdre pied.`,
    duree_estimee_min: 175
  },
  etapes: [
    {
      slug: 'cerveau-humain',
      note: `Premier socle : l'**organe**. Environ 86 milliards de neurones organisés en lobes, couches et réseaux — c'est probablement le système le plus complexe que nous connaissions. Tout ce qui suit (sommeil, mémoire, croyances, vertiges esthétiques) s'enracine dans cette architecture biologique.`
    },
    {
      slug: 'le-sommeil',
      note: `Ce cerveau passe un tiers de sa vie à dormir, et ce n'est pas une pause. Le **sommeil** orchestre la consolidation des apprentissages, le nettoyage métabolique via le système [glymphatique]{accent}, et la régulation émotionnelle. Le priver, c'est dérégler la machine que tu viens d'explorer.`
    },
    {
      slug: 'memoire-humaine',
      note: `Le sommeil sert notamment à graver la **mémoire** — d'où sa place ici. Loin d'un magnétoscope fidèle, la mémoire humaine est un atelier de **reconstruction** permanent : faux souvenirs, oublis ordinaires, effets de suggestion. Comprendre cela, c'est comprendre pourquoi le témoignage humain est si fragile.`
    },
    {
      slug: 'effet-placebo',
      note: `Si la mémoire fabrique son passé, l'esprit peut aussi fabriquer du **soulagement**. L'[[effet-placebo]] montre que la simple croyance en un traitement produit des effets neurochimiques mesurables — endorphines, dopamine, modulation de la douleur. Frontière troublante entre attendre et ressentir.`
    },
    {
      slug: 'syndrome-stendhal',
      note: `Dernier étage : ce que l'esprit fait quand il déborde. Le **syndrome de Stendhal** désigne ces malaises — tachycardie, vertiges, hallucinations — provoqués par une exposition trop intense à l'art. Le cerveau, la mémoire, la croyance et l'émotion s'y court-circuitent en quelques minutes devant une fresque.`
    }
  ]
});
