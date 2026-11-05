# Fiche individuelle

> Une page, avant la livraison. Prénom, nom, compte GitHub : 
Nom :MAMADOU
Prenom: VEHI SATYNE EVELYNE 
Compte GitHub :Satynemamadou-spec

1. **Une fonction que j'ai écrite**, et comment elle marche : 
voici la fonction VerifierReleve (saisie, reveles )
export function verifierReleve(saisie, releves) {
const erreur = []
if (saisie.id ===''){
  erreur.push ('id obligatoire')
}else if (trouverParId(releves, saisie.id) !== undefined){
  erreur.push('cest un id deja definit');
}
 if (!estDateValide(saisie.date)){
  erreur.push ('Date invalide, la date doit etre au format AAA-MM-JJ');
 }
 const temperature = versNombre(saisie.temperatureC)
 if (Number.isNaN(temperature)){
  erreur.push ("temperature invalide")
}
const pluie = versNombre(saisie.pluieMm)
if (Number.isNaN(pluie)||pluie<0){
erreur.push (" pluieMn invalide" )
}
const humidite =versNombre(saisie.humiditeAirPct)
if (Number.isNaN(humidite) || humidite<0 || humidite>100){
  erreur.push("humidité est invalide")
}
return erreur 
}
comment elle fonctionne 
Ma fonction verifierReleve est comme un contrôleur 
avant d'ajouter une fiche à la liste, elle vérifie que tout est correct.
Elle prépare une boîte vide (erreur) et y glisse un petit mot à chaque problème trouvé. Elle contrôle cinq choses :
L'id: il doit exister et ne pas être déjà utilisé.
La date : elle doit être au format année-mois-jour.
La température : elle doit être un nombre (négatif ou à virgule, c'est accepté).
La pluie : elle doit être un nombre, zéro ou plus.
L'humidité: elle doit être un nombre entre 0 et 100.
À la fin, elle rend la boîte vide, si la fiche est bonne et une boîte avec des mots, il y a des erreurs à corriger.


2. **Une difficulté, et sa solution** : 
j'ai eu une difficulté au niveau de mon terminal quand je faisais mes tests 
la solution a été de suprrimer tout les throw new Error  car cest eux qui faisais que sa ne passais pas .
3. **L'entraide** (qui m'a aidé, qui j'ai aidé, sur quoi) : 
les personnes qui m'ont aidé sont :
TANOH LEVI m'a aidé dans la comprehision du mini projet 
SOUMAHORO CHEICK TIDYANE : quand j'avais des problèmes au niveau de mes tests et mon terminal 
N'DIAMOI CHRIST : la comprehension de certaines fonction et methode pour faire affiché les tests vert 
