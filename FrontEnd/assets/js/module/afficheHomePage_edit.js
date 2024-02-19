////////////////////////////////////////////////////////////////////////////
//////////////////////   affiche la page d'accueil   ///////////////////////
////////////////////////////////////////////////////////////////////////////

// importation de valeur
import { travaux, categoriesTravaux, galeriePortefolio, menuLogin } from "./const.js";
// importation de la fonction d'affichage de la galerie
import { afficheGalerie } from "./afficheGalerie.js";

/////////////////    fonction qui affiche la page d'accueil   ///////////////
export const afficheHomePage_edit = () => {

    ////////////////////   changer login en logout \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    menuLogin.innerText = "logout"

    ////////////////////   Affiche la galerie complète   ///////////////////////
    afficheGalerie(travaux, galeriePortefolio)

}