import { travaux, categoriesTravaux, host, galeriePortefolio, filtresPortefolio, } from "./module/const.js";
import { afficheHomePage } from "./module/afficheHomePage.js";
import { afficheGalerie } from "./module/afficheGalerie.js";

//console.log(`${host}/works`)
console.log(travaux)
console.log(categoriesTravaux)
// affiche la page d'accueil


afficheHomePage();




//
//
let travauxAfficher = travaux;

let choixCategories = sessionStorage.getItem("idCategorie");

if (choixCategories !== 0) {
    //  travauxAfficher flitré par choixCatégorie
} else { }


//afficheGalerie(travauxAfficher, galeriePortefolio);






