// Journal météorologique de la ferme — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { ajouterReleve, formaterReleve, listerReleves, trouverParId } from './src/registre.js';
import { SEUIL_JOUR_PLUVIEUX, joursPluvieux, trierParPluie, trierParTemperature, trouverParDate } from './src/recherche.js';
import { cumulPluie, moyenneTemperature, temperatureMinMax } from './src/synthese.js';
import { supprimerReleve, modifierReleve, trierParTemperatureDecroissante, journeeLaPlusChaude } from './src/bonus.js';

const FICHIER_DONNEES = 'donnees/releves.json';

async function main() {
  ouvrirSaisie();

  // Afficher le menu
  // puis la question Votre choix :

console.log('==================================================');
console.log('        JOURNAL MÉTÉOROLOGIQUE DE LA FERME        ');
console.log('    Suivi agroclimatique de la ferme pédagogique  ');
console.log('==================================================');

  // lire les données
let releves = []
try {
releves = await chargerJson(FICHIER_DONNEES); // importe les données du fichier donnes.json
}
catch(erreur){
releves = []
const message = erreur.message;
console.log(`Impossible de lire donnees/releves.json : ${message} Le journal démarre vide.`)
}
  // Demander un nouveau choix
 

let choix = '';
while (choix !== '0' && choix !== null) {
console.log('--------------------- MENU ---------------------');
console.log('1. Ajouter un relevé');
console.log('2. Lister les relevés');
console.log('3. Rechercher (identifiant, date, journées pluvieuses)');
console.log('4. Trier (température, pluie)');
console.log('5. Synthèse de la série');
console.log('6. Supprimer un relevé');
console.log('7. Modifier un relevé');
console.log('0. Quitter');
choix = await demander('Votre choix : ');

try {
switch(choix){
  case '0':
    break;
  case null:
    break;
  case '1':{
    let id = await demander('Id(ex:M01): ')
    const date = await demander('Date(AAAA-MM-JJ): ')
    const temperatureC = await demander('Temperature(°C): ')
    const pluieMm = await demander('Pluie(mm): ')
    const humiditeAirPct = await demander(`Humidite de l'Air(%): `)
    if(id === null || date === null || temperatureC === null || pluieMm === null || humiditeAirPct === null){
    console.log('saisie abandonnée')
    break;
    }
    id = id.toUpperCase();
    const saisie = {      // declarer un objet javascript
    id,
    date,
    temperatureC,
    pluieMm,
    humiditeAirPct
    }  
    const erreurs = ajouterReleve(releves, saisie);
    if(erreurs.length>0){
      console.log(`relevé refusé :`)
      for(const erreur of erreurs){
      console.log(`  - ${erreur}`)
    }
    } 
    else if(erreurs.length===0){
      console.log(`relevé accepté :`)
      await enregistrerJson(FICHIER_DONNEES, releves);
      console.log(`Relevé ${saisie.id} ajouté. Le journal compte ${releves.length} relevé(s)`)
    }       
    break;
    }
  case '2':
    console.log(`---lister des Relevés (${releves.length})---`)
    console.log(`----------------------------------------------`)
    console.log(listerReleves(releves))
    break;
  case '3':{
    console.log(`---Rechercher---`);
    console.log(`1. Par identifiant`);
    console.log(`2. Par date`);
    console.log(`3. les journées pluvieuses (au moins ${SEUIL_JOUR_PLUVIEUX} mm)`);
    const sousChoix = await demander('votre choix: ');
  switch(sousChoix){
  case '0':
    break;
  case null:
    break;
   case '1':{ 
    let sousId = await demander('Identifiant: ')
    if(sousId === null){
    console.log('saisie abandonnée')
    break;
    }
  const idRecherche = sousId.toUpperCase();
  const resultat = trouverParId(releves, idRecherche) 
  if(resultat){
    console.log(formaterReleve(resultat))
    }
  else{
    console.log(`Relevé ${idRecherche} introuvable.`)
  }
  }
    break;
   case '2':{ 
    let sousDate = await demander('Date (AAAA-MM-JJ): ')
    if(sousDate === null){
    console.log('saisie abandonnée')
    break;
    }
    
  const resultat = trouverParDate(releves, sousDate) 
  if(resultat){
    console.log(formaterReleve(resultat))
    }
  else{
    console.log(`Relevé du ${sousDate} introuvable`)
  }
  }
    break;
   case '3':{  
    const resultats = joursPluvieux(releves, SEUIL_JOUR_PLUVIEUX) 
    console.log(`${resultats.length} journées avec au moins ${SEUIL_JOUR_PLUVIEUX} mm de pluie`)             
    console.log(listerReleves(resultats))
    break;
    }
   default:
    console.log(`choix inconnu : retour au menu.`);
    break;
  }
    break;
  }
  case '4': {
  console.log('--- Trier ---');
  console.log('1. Par température croissante');
  console.log('2. Par pluie croissante');
  console.log('3. Par température décroissante');

  const sousChoix = await demander('Votre choix : ');

  switch (sousChoix) {
    case null:
      break;
    case '1':
      console.log(listerReleves(trierParTemperature(releves)));
      break;
    case '2':
      console.log(listerReleves(trierParPluie(releves)));
      break;
    case '3':
      console.log(listerReleves(trierParTemperatureDecroissante(releves)));
      break;
    default:
      console.log('Choix inconnu : retour au menu.');
      break;
  }
      break; 
  }
case '5': {
  console.log('--- Synthèse de la série ---');
  console.log(`Nombre de relevés : ${releves.length}`);

  const moyenne = moyenneTemperature(releves);
  const temperatures = temperatureMinMax(releves);
  const pluie = cumulPluie(releves);
  const nombrePluvieux = joursPluvieux(
    releves,
    SEUIL_JOUR_PLUVIEUX
  ).length;

  if (moyenne === null) {
    console.log('Température moyenne : aucune donnée');
  } else {
    console.log(`Température moyenne : ${moyenne} °C`);
  }

  if (temperatures === null) {
  console.log('Températures minimale et maximale : aucune donnée');
   } else {
  console.log(
    `Température minimale : ${temperatures.min} °C · maximale : ${temperatures.max} °C`
  );
  }

const plusChaude = journeeLaPlusChaude(releves);

  if (plusChaude === null) {
  console.log('Journée la plus chaude : aucune donnée');
  } 
  
  else {
  console.log(`Journée la plus chaude : ${formaterReleve(plusChaude)}`);
  }

  console.log(`Cumul de pluie : ${pluie} mm`);
  console.log(
    `Journées avec au moins ${SEUIL_JOUR_PLUVIEUX} mm de pluie : ${nombrePluvieux}`
  );

  console.log('Rappels :');
  console.log(`  - Quelques jours de relevés forment une courte série météo : ils ne décrivent pas le climat de la région.`);
  console.log(`  - Le seuil de 10 mm est une catégorie d'exercice : il ne prévoit ni inondation ni stress hydrique.`);
  console.log(`  - L'humidité relative de l'air (en %) n'est pas l'humidité du sol.`);

  break;
}
case '6': {
  const reponse = await demander('Identifiant : ');

  if (reponse === null) break;

  const id = reponse.toUpperCase();
  const retire = supprimerReleve(releves, id);

  if (retire === undefined) {
    console.log(`Relevé ${id} introuvable.`);
  } else {
    await enregistrerJson(FICHIER_DONNEES, releves);
    console.log(
      `Relevé ${id} supprimé. Le journal compte ${releves.length} relevé(s).`
    );
  }
  break;
  }

  case '7': {
  const reponseId = await demander('Identifiant : ');
  if (reponseId === null) break;

  const id = reponseId.toUpperCase();

  const champ = await demander(
    'Champ à modifier (date, temperatureC, pluieMm, humiditeAirPct) : '
  );
  if (champ === null) break;

  const valeur = await demander('Nouvelle valeur : ');
  if (valeur === null) break;

  const erreurs = modifierReleve(releves, id, champ, valeur);

  if (erreurs.length === 0) {
    await enregistrerJson(FICHIER_DONNEES, releves);
    console.log(`Relevé ${id} modifié.`);
  } else {
    console.log('Modification refusée :');

    for (const erreur of erreurs) {
      console.log(`  - ${erreur}`);
    }
  }
    break;
  }

  default:
    console.log('Choix invalide. Veuillez choisir entre 0 et 7.');
    break;
  }
}
catch(erreur){
  if(erreur.message.startsWith('TODO')){
    console.log(`À compléter : ${erreur.message}`)
}
  else{
    console.log(`Erreur inattendue : ${erreur.message}`)
}
}
}
  console.log("Au revoir !")
  fermerSaisie();
}

main();
