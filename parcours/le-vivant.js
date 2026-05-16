/* ===================================================================
   PARCOURS — Le vivant, de la lumière à la mémoire
   ===================================================================
   Six étapes pour traverser la biologie : de la photosynthèse
   primordiale aux mécanismes de la mémoire humaine.
   =================================================================== */

window.CarnetDeSavoirs.registerParcours({
  meta: {
    id: 'le-vivant',
    titre: 'Le <em>vivant</em>, de la lumière à la mémoire',
    domaine: 'Biologie',
    description: `Comprendre la vie comme un processus qui s'enchaîne. D'abord la **photosynthèse**, qui capture l'énergie du Soleil et libère l'oxygène. Puis l'**évolution darwinienne**, qui explique pourquoi les êtres vivants se diversifient. L'**ADN** stocke les instructions, le **cerveau** orchestre le comportement, le **système immunitaire** défend le tout, et la **mémoire** rend l'expérience cumulative. Six fiches pour assembler le vivant comme un escalier de mécanismes emboîtés.`,
    duree_estimee_min: 195
  },
  etapes: [
    {
      slug: 'photosynthese',
      note: `Premier socle : sans **photosynthèse**, pas de vie complexe. Quelques familles d'organismes — plantes, algues, cyanobactéries — captent la lumière du Soleil, en tirent des sucres et rejettent l'**oxygène** qui rend possible la quasi-totalité de la biosphère.`
    },
    {
      slug: 'evolution-darwin',
      note: `Une fois la machinerie énergétique en place, la **diversité** explose. La théorie de Darwin explique le comment : variation aléatoire + sélection naturelle = adaptation. Sans plan, sans intention, mais avec une puissance créatrice immense.`
    },
    {
      slug: 'adn-genetique',
      note: `L'évolution suppose un support qui transmet les variations. C'est l'**ADN** : quatre lettres chimiques, deux mètres de double hélice plié dans chaque cellule, l'intégralité d'un être vivant. Et depuis CRISPR (2012), on a appris à le réécrire.`
    },
    {
      slug: 'cerveau-humain',
      note: `Le code génétique fabrique des corps. Chez l'humain, ce corps porte un **cerveau** d'environ 86 milliards de neurones organisés en couches, lobes, réseaux. C'est probablement le système le plus complexe que nous connaissions, et il produit la pensée.`
    },
    {
      slug: 'systeme-immunitaire',
      note: `Tout ce qui est vivant est aussi assiégé. Le **système immunitaire** est un réseau de cellules qui apprend à reconnaître individuellement des milliards d'agresseurs. C'est lui qui rend la vie longue possible.`
    },
    {
      slug: 'memoire-humaine',
      note: `Dernier étage : la **mémoire**, qui rend l'expérience cumulative. Loin d'un magnétoscope fidèle, c'est un atelier de reconstruction permanent — d'où l'oubli ordinaire, les faux souvenirs, et les maladies neurodégénératives qui en révèlent la fragilité.`
    }
  ]
});
