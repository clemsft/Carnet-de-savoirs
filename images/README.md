# images/

Photos et illustrations référencées par les fiches (`sujets/*.js`) via le widget
`SchemaAnnote` (`image: 'images/{slug-du-sujet}--{nom}.jpg'`).

Règles (détail : TEMPLATE_SUJET.md §8ter et BRIEFING_COWORK.md) :
- Libres de droits uniquement (domaine public, CC0, CC-BY) — crédit dans la `legende` du widget.
- Bord long ≤ 1200 px, JPEG qualité ~80, ≤ 200 Ko par photo.
- Convention de nommage : `{slug-du-sujet}--{nom}.jpg` (ex. `trous-noirs--m87-eht.jpg`).
- Le script de snapshot ajoute automatiquement ce dossier au cache hors-ligne.

Les schémas générés par Claude ne passent pas par ici : ils sont intégrés en
base64 directement dans le fichier du sujet.
