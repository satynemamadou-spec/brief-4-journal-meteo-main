// BONUS — Pour aller plus loin. Facultatif : commencez seulement quand le socle est complet.
// Fiche : fiches/7-bonus.md · Vérifier : npm run test:bonus
// Pas de modèle pour ce fichier : à vous de combiner ce que vous avez appris.
import { versNombre } from './outils.js';
import { trouverParId, verifierReleve } from './registre.js';

// Les champs qu'on a le droit de modifier. L'identifiant n'en fait pas partie.
export const CHAMPS_MODIFIABLES = ['date', 'temperatureC', 'pluieMm', 'humiditeAirPct'];

// Retire du journal le relevé qui a cet identifiant.
// Renvoie le relevé retiré, ou undefined s'il n'existe pas : le journal ne change pas.
export function supprimerReleve(releves, id) {
//  throw new Error('TODO : coder supprimerReleve dans src/bonus.js');
const position= releves.findIndex ((r)=> r.id ===id);
 if(position ===-1){
  return undefined
 }
 const[ retire] = releves.splice(position, 1);
 return retire;
 }

// Modifie UN champ du relevé qui a cet identifiant. La nouvelle valeur arrive sous forme de TEXTE.
// Renvoie un tableau de messages d'erreur ; [] si la modification est faite.
// Vérifiez dans cet ordre et arrêtez-vous au premier problème : identifiant inconnu (une erreur)
// · champ 'id', non modifiable (une erreur) · champ absent de CHAMPS_MODIFIABLES (une erreur)
// · valeur refusée par les règles de l'ajout (leurs erreurs). En cas d'erreur, le relevé ne change pas.
// Exemple : modifierReleve(releves, 'M03', 'pluieMm', '11') → [] et M03 a maintenant 11 mm (un nombre).
export function modifierReleve(releves, id, champ, valeur) {
//  throw new Error('TODO : coder modifierReleve dans src/bonus.js');
  const index = releves.findIndex((r) => r.id === id);
  if (index === -1) return ['identifiant inconnu'];
  if (champ === 'id') return ["l'id n'est pas modifiable"];
  if (!CHAMPS_MODIFIABLES.includes(champ)) {
    return [`champ "${champ}" non modifiable`];
  }

  const vieux = releves[index];
  const autres = releves.filter((_, i) => i !== index);
  const essai = {
    ...vieux,
    temperatureC: String(vieux.temperatureC),
    pluieMm: String(vieux.pluieMm),
    humiditeAirPct: String(vieux.humiditeAirPct),
    [champ]: valeur,
  };
  const erreurs = verifierReleve(essai, autres);
  if (erreurs.length) return erreurs;

  releves[index] = {
    ...vieux,
    [champ]: champ === 'date' ? valeur : versNombre(valeur),
  };
  return [];
}

// Renvoie une COPIE triée par température décroissante : la plus chaude d'abord.
export function trierParTemperatureDecroissante(releves) {
//  throw new Error('TODO : coder trierParTemperatureDecroissante dans src/bonus.js');
  return [...releves].sort((a, b) => b.temperatureC - a.temperatureC);
}

// Renvoie le relevé dont la température est la plus haute (le premier en cas d'égalité),
// ou null si la liste est vide.
export function journeeLaPlusChaude(releves) {
//  throw new Error('TODO : coder journeeLaPlusChaude dans src/bonus.js');
  if (releves.length === 0) {
    return null;
  }
  return releves.reduce((plusChaud, releve) => (
    releve.temperatureC > plusChaud.temperatureC ? releve : plusChaud
  ));
}
