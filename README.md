# Journal météorologique de la ferme

> Projet individuel du SAS DFS, brief 4 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

✏️ *En trois à cinq phrases : qui utilise l'outil, quel problème il résout, ce qu'il ne permet pas de conclure.*

Ce journal est fait pour le responsable de la ferme pédagogique qui note au fil des jours la température la pluie et l’humidité de l’air pendant les activités. Au lieu de garder des notes éparpillées, il saisit ses relevés dans le terminal, retrouve une journée en quelques secondes, classe les relevés du plus chaud au plus froid ou du plus pluvieux au plus sec, et obtient un petit résumé de la série. Cela l’aide à se rappeler dans quelles conditions s’est déroulé un atelier ou une sortie. Mais il faut garder en tête que quelques relevés ne racontent que ces journées-là : ils ne disent rien du climat de la ferme, ils ne permettent pas de prévoir le temps à venir, et on ne peut pas en tirer de tendance fiable sans des mesures régulières sur de nombreuses années.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-4-journal-meteo.git
cd brief-4-journal-meteo
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [ X] Données lues et enregistrées dans `donnees/releves.json`
- [ X] Ajouter un relevé, saisies invalides refusées sans arrêter le programme
- [ X] Lister les relevés, message si le journal est vide
- [X ] Rechercher par identifiant ou par date ; journées pluvieuses (au moins 10 mm)
- [ X] Trier par température ou par pluie
- [ X] Synthèse : température moyenne, minimale et maximale de la série, cumul de pluie, journées pluvieuses
- [X ] Bonus : supprimer et modifier un relevé (choix 6 et 7)
- [ X] Bonus : tri par température décroissante, journée la plus chaude

## Données

*Le fichier, le nombre de relevés, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), les unités. Rappelez qu'ils sont fictifs.*
Nous avons dix relevés dont les champs et leurs unités sont :
Id : identifiant ( aucune unité )
la date : ( aucune )
la temperature : °C
Pluie : mm
humidité del'air : %


## Limites

*Au moins trois. Par exemple : dix jours de relevés forment une courte série, ils ne décrivent pas le climat de la région.*

Dix jours de relevés forment une courte série : ils ne décrivent pas le climat, qui se mesure sur au moins 30 ans.
Sur une série si courte, un seul jour extrême peut fausser la moyenne et le cumul de pluie.
Ces jours dépendent de la saison et du lieu de mesure : on ne peut pas les généraliser à toute l'année
## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

*Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
Nom :MAMADOU
Prenom: VEHI SATYNE EVELYNE 
Compte GitHub :Satynemamadou-spec
 
