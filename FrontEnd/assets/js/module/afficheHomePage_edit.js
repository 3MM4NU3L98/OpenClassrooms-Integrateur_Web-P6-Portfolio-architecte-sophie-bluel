

// importation de valeur
import { travaux, galeriePortfolio } from "../const.js";
// importation de la fonction d'affichage de la galerie
import { afficheGalerie } from "./afficheGalerie.js";


/////////////////    fonction qui affiche la page d'accueil   ///////////////
export const afficheHomePage_edit = () => {





    ////////////////////   Affiche la galerie complète   ///////////////////////
    afficheGalerie(travaux, galeriePortfolio);

}