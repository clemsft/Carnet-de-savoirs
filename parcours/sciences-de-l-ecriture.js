/* ===================================================================
   PARCOURS — Les sciences de l'écriture
   ===================================================================
   Cinq étapes pour suivre les supports de l'écrit à travers cinq mille
   ans — de la tablette d'argile au protocole réseau, en passant par
   les bibliothèques byzantines et les scriptoria gothiques.
   =================================================================== */

window.CarnetDeSavoirs.registerParcours({
  meta: {
    id: 'sciences-de-l-ecriture',
    titre: 'Les <em>sciences de l\'écriture</em>',
    domaine: 'Histoire des techniques',
    description: `L'écriture n'est pas qu'un signe : c'est aussi un support, un réseau et une institution qui le conserve. Le parcours suit la matérialité du texte sur **cinq mille ans** — argile sumérienne, codex byzantin, papier de la Soie, parchemin enluminé des cathédrales, paquets TCP/IP d'Internet. Cinq fiches pour comprendre que chaque révolution de l'écrit est d'abord une révolution de son support et des institutions qui le copient, le transmettent, l'indexent.`,
    duree_estimee_min: 180
  },
  etapes: [
    {
      slug: 'ecriture-cuneiforme',
      note: `Point d'origine : vers 3300 av. J.-C. en **Mésopotamie**, on grave avec un calame des signes dans l'argile humide. Le **cunéiforme** sert d'abord à la comptabilité des temples avant de porter codes de lois, mythes et correspondances diplomatiques. C'est la première fois que la parole humaine devient un objet durable.`
    },
    {
      slug: 'empire-byzantin',
      note: `Saut de quatre millénaires : quand Rome tombe en Occident, **Constantinople** devient la grande bibliothèque du monde méditerranéen. Les scribes byzantins recopient pendant mille ans Platon, Aristote, Homère, et préservent l'héritage **grec** qui, sans eux, aurait largement disparu.`
    },
    {
      slug: 'route-de-la-soie',
      note: `Pour que les textes circulent, il faut des routes. La **Soie** ne charrie pas que des étoffes : elle apporte aussi en Occident le **papier** chinois, qui remplace progressivement le parchemin coûteux. Sans cette importation, ni les manuscrits médiévaux ni l'imprimerie de Gutenberg ne seraient pensables.`
    },
    {
      slug: 'cathedrales-gothiques',
      note: `Aux XIIᵉ-XIIIᵉ siècles, l'écrit trouve un nouvel écosystème : les **scriptoria** monastiques et les premières universités, souvent à l'ombre des **cathédrales gothiques**. Le savoir s'organise en sommes, l'enluminure devient programme iconographique, et la pierre elle-même se lit comme un texte théologique.`
    },
    {
      slug: 'histoire-internet',
      note: `Dernier saut, jusqu'au support actuel. **Internet** prolonge la longue histoire de l'écrit en la dématérialisant : ARPANET, TCP/IP, web, hypertexte. Tu lis ces lignes sur un réseau dont les principes ont été pensés dans les années 1960 — un cunéiforme contemporain, gravé non plus dans l'argile mais dans les **paquets**.`
    }
  ]
});
