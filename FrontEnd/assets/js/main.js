import { host, galeriePortefolio, filtresPortefolio } from "./module/const.js";
import { afficheFiltres } from "./module/afficheFiltres.js";
import { afficheGalerie } from "./module/afficheGalerie.js";

console.log(`${host}/works`)
// Récupération des travaux depuis l'API en JSON
const travaux = await fetch(`${host}/works`).then(travaux => travaux.json());
// Récupération des catégories de travaux depuis l'API en JSON
const categoriesTravaux = await fetch(`${host}/categories`).then(categoriesTravaux => categoriesTravaux.json());


console.log(travaux)
console.log(categoriesTravaux)

let travauxAfficher = travaux;

let choixCategories = afficheFiltres(categoriesTravaux, filtresPortefolio);
console.log(choixCategories)

if (choixCategories !== 0) {
    //  travauxAfficher flitré par choixCatégorie
} else { }


afficheGalerie(travauxAfficher, galeriePortefolio);






