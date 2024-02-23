import { iconEdit } from "./js/const.js";
import { pageConnexion } from "./js/pageConnexion.js";
import { modal } from "./js/modal.js";


import { afficheHomePage_edit } from "./js/module/afficheHomePage_edit.js";
import { afficheHomePage } from "./js/module/afficheHomePage.js";

/*
///////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
|||||||||   affiche la page d'accueil et du passage au mode édition   ||||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////////////////////
*/

////////////////   affiche le bandeau 'Mode édition'   \\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\     en fonction de l'utilisateur      /////////////// 
if (Boolean(sessionStorage.getItem("connexion"))) {
    // Récupération de l'élément du DOM qui accueillera le bandeau
    const bandeauModeEdition = document.getElementById("bandeauEdit");
    // activation en CSS de la balise
    bandeauModeEdition.style.display = "flex";
    // intégration de l'icone Édition en SVG
    bandeauModeEdition.innerHTML = iconEdit;
    // Création du span
    const spanBandeau = document.createElement("span");
    spanBandeau.innerText = "Mode édition";
    bandeauModeEdition.appendChild(spanBandeau);
};

////////////////   Change login en logout et inversement   \\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\         et en écoute le click             ///////////////
// Récupération de l'élément du DOM que selecttionne le menu 'login'
const logInOut = document.getElementById("log");
// changement du texte en fonction
logInOut.innerText = (Boolean(sessionStorage.getItem("connexion"))) ? "logout" : "login";
// On écoute le click de logInOut, au click :
logInOut.addEventListener("click", () => {
    // si === login =>
    if (logInOut.innerText === "login") {
        // appel la page de connexion
        pageConnexion();
    }
    // si === logout =>
    else if (logInOut.innerText === "logout") {
        // vide sessionStorage
        sessionStorage.clear();
        // recharge la page
        window.location.href = "";
    };
});

/////////////////   modification du titre 'Mes projets'   \\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\              en mode édition            ////////////////////
// Récupération de l'élément du DOM qui accueillera le lien vers le modal
const editionPortfolio = document.querySelector(".portfolioEdition");
// activation en CSS de la balise
editionPortfolio.style.display = "flex";
// On écoute le click de editionPortfolio, au click, on lance la modal
editionPortfolio.addEventListener("click", modal);
// intégration de l'icone Édition en SVG
editionPortfolio.innerHTML = iconEdit;
// Création d'une balise <span>
const editSpan = document.createElement("span");
editSpan.innerText = "modifier";
editionPortfolio.appendChild(editSpan);


///////////////////////////   affichage des filtres   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\    du mode d'affichage    ///////////////////////////////
if (!Boolean(sessionStorage.getItem("connexion"))) { console.log(Boolean(sessionStorage.getItem("connexion"))) };


/////////////////////////   affichage la galerie photo   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\ correspondant à chaque travail /////////////////////////////







// affiche la page d'accueil

(Boolean(sessionStorage.getItem("connexion"))) ? afficheHomePage_edit() : afficheHomePage();








