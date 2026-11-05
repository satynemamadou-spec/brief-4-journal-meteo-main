# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 
Moyenne de temperature = ( 27+28+26+29+27+30+28+26+29+30)/10
Total = 28°C
temperature  minimun  = 26 °C ;ID:"M03"; ID:"M08"
temperature maximale = 30 °C ,ID:"M06";ID :"M10"
cumul de pluie + (0+5+12+10+0+3+8+15+0+2)= 45mm
journée avec  au moins 10 mm = "M03" ( 12mm); "M08"( 15mm)

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| ajouter un relevé | un relevé ajouter | relevé M15 ajouter  | Moi |
| ajouter un relevé deja existant | relevé refusé | relevé refusé , c'est un id deja definit |Moi  |
|  rechercher un relevé  inexistant | relevé introuvable| relevé M02 introuvable |MOI |
| Trier par  temperature  |  temperature  afficher par ordre croissant | les temperatures  sont affichées par odre croissant  | MOI |
|Trier par pluie  |afficher par ordre  croissant  | les pluies sont affichées par ordre croissant   |  Moi |
| afficher la synthese de la serie| affichage de  synthese |-- Synthèse de la série ---
Nombre de relevés : 10
Température moyenne : 27.5 °C
Température minimale : 23 °C · maximale : 30 °C
Journée la plus chaude : M06 | 2026-10-20 | 30 °C | 0 mm | air 68 %
Cumul de pluie : 61 mm
Journées avec au moins 10 mm de pluie : 3
Rappels :
  - Quelques jours de relevés forment une courte série météo : ils ne décrivent pas le climat de la région.
  - Le seuil de 10 mm est une catégorie d'exercice : il ne prévoit ni inondation ni stress hydrique.
  - L'humidité relative de l'air (en %) n'est pas l'humidité du sol. |  MOI |
|

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
