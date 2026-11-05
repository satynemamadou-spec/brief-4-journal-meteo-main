// Journal météorologique de la ferme — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { ajouterReleve, formaterReleve, listerReleves, trouverParId } from './src/registre.js';
import { SEUIL_JOUR_PLUVIEUX, joursPluvieux, trierParPluie, trierParTemperature, trouverParDate } from './src/recherche.js';
import { cumulPluie, moyenneTemperature, temperatureMinMax } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/releves.json';
async function main() {
  ouvrirSaisie();
  console.log("À compléter : écrivez le menu dans app.js (fiches/3-ajouter-lister.md).");
  fermerSaisie();
}

main()
// Afficher le menu
  // puis la question Votre choix :
 console.log('==================================================');
console.log('        JOURNAL MÉTÉOROLOGIQUE DE LA FERME        ');
console.log('    Suivi agroclimatique de la ferme pédagogique  ');
console.log('=================================================='); 
 try {
  const donnees = await chargerJson(FICHIER_DONNEES);
  releves.push(...donnees);
  console.log (`§{releves.length}r relevé(s) chargé(s depuis ${FICHIER_DONNEES}.`);
} 
catch (erreur){
  console.log(`Impossible de lire ${FICHIER_DONNEES} :${messageErreur(erreur)}. Le journal debute vide.`);
}
let continuer = true;
try {
  while (continuer) {
console.log( `
  --------------------------- MENU
  ----------------------------
  1.ajouter un relevé 
  2.Lister les relevés
  3.Rechercher ( identification, date , journées pluvieuses)
  4.Trier ( temperature , pluie)
  5.synthèse de la serie 
  0.Quitter `);

  const choix = await 
  demander('votre choix: ');
  if (choix === null || choix === '0'){
    console.log ('au revoir !')
    break
  }
  try{
    switch (choix){
      case '1':
        continuer= await
ajouter (releves);
       break;
      case '2':
      console.log (`--- Liste des relevés (${releves.length})---`);
      console.log( listerReleves(releves));
       break;
      case '3':
        continuer = await rechercher (releves);
        break;
      case '4':
          continuer = await trier (releves);
        break;
      case '5':
            afficherSynthese(releves);
        break;
        default:
          console.log (`Choix inconnu : $ {choix }. entrez un chiffre du Menu .`)

    }
  } catch (erreur){
    afficherErreur (erreur);
  }
  }
  } finally{ 
    fermerSaisie()
  }

