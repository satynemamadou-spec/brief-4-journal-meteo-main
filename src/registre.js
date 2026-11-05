// Ajouter et lister les relevés.
// Fiche : fiches/3-ajouter-lister.md · Vérifier : npm run test:registre
import { estDateValide, versNombre } from './outils.js';

// Renvoie une ligne de texte qui décrit le relevé.
// Exemples : 'M08 | 2026-10-22 | 26 °C | 15 mm | air 85 %'
//            'M11 | 2026-10-25 | 27.5 °C | 4 mm | air 79 %' (JavaScript affiche un point décimal,
//            même si la virgule est acceptée à la saisie)
export function formaterReleve(releve) {
  return `${releve.id} | ${releve.date} | ${releve.temperatureC} °C | ${releve.pluieMm} mm | air ${releve.humiditeAirPct} %`;

}

// Renvoie un texte avec un relevé par ligne (lignes séparées par '\n'),
// ou 'Aucun relevé enregistré.' si la liste est vide.
export function listerReleves(releves) {
  if (releves.length===0){
    return 'Aucun relevé enregistré.';
  }
  return releves.map(formaterReleve).join('\n')
  throw new Error('TODO : coder listerReleves dans src/registre.js');
}

// Renvoie le relevé qui a cet identifiant, ou undefined s'il n'existe pas.
export function trouverParId(releves, id) {
  return releves.find(b=>b.id===id)
  throw new Error('TODO : coder trouverParId dans src/registre.js');
}

// Contrôle une saisie AVANT de l'ajouter. Tous les champs arrivent sous forme de TEXTE :
// { id: 'M11', date: '2026-10-25', temperatureC: '27,5', pluieMm: '4', humiditeAirPct: '79' }
// Renvoie un tableau de messages d'erreur ; un tableau vide signifie « saisie valide ».
// Règles : id obligatoire et unique · date réelle au format AAAA-MM-JJ · temperatureC nombre
// (négatif ou décimal accepté) · pluieMm nombre positif ou nul · humiditeAirPct nombre entre 0 et 100.
// Un message par règle non respectée ; n'ajoutez aucune autre règle. Le journal reçu n'est pas modifié.
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
erreur.push (" pluieMm invalide" )
}
const humidite =versNombre(saisie.humiditeAirPct)
if (Number.isNaN(humidite) || humidite<0 || humidite>100){
  erreur.push("humidité est invalide")
}
return erreur 
}


// Fabrique le relevé à enregistrer à partir d'une saisie VALIDE : les trois mesures deviennent des nombres.
export function creerReleve(saisie) {
  return{
    id: saisie.id,
    date:saisie.date,
    temperatureC:versNombre( saisie.temperatureC),
    pluieMm: versNombre(saisie.pluieMm),
    humiditeAirPct:versNombre(saisie.humiditeAirPct)
  }
}

// Ajoute la saisie au journal si elle est valide (verifierReleve, puis creerReleve).
// Renvoie les erreurs : [] si le relevé a été ajouté ; sinon les messages, et rien n'est ajouté.
export function ajouterReleve(releves, saisie) {
  const erreur = verifierReleve(saisie,releves)
  if (erreur.length >0){
    return erreur
  }
  releves.push(creerReleve(saisie))
  return[]
} 




