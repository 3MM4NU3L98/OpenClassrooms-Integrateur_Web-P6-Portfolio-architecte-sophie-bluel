////////////////////////////////////////////////////////////////////////////
//////////////////////   affiche la page d'accueil   ///////////////////////
////////////////////////////////////////////////////////////////////////////

// importation de valeur
import { iconEdit, editPortfolio, travaux, galeriePortfolio } from "./const.js";
// importation de la fonction d'affichage de la galerie
import { afficheGalerie } from "./afficheGalerie.js";
// importation de la modal
import { afficheModal } from "./afficheModal.js";

/////////////////    fonction qui affiche la page d'accueil   ///////////////
export const afficheHomePage_edit = () => {



    //////////////   ajout 'modifier' au titre pour affiche modal   \\\\\\\\\\\\\\
    editPortfolio.style.display = "flex";
    editPortfolio.addEventListener("click", afficheModal);

    // Création du div
    editPortfolio.innerHTML = iconEdit;

    // Création du span modifier
    const spanEdit = document.createElement("span");
    spanEdit.innerText = "modifier";
    editPortfolio.appendChild(spanEdit);

    ////////////////////   Affiche la galerie complète   ///////////////////////
    afficheGalerie(travaux, galeriePortfolio);

}