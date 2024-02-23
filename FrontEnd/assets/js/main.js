import { iconEdit } from "./module/const.js";
import { pageConnexion } from "./module/pageConnexion.js";
import { afficheHomePage_edit } from "./module/afficheHomePage_edit.js";
import { afficheHomePage } from "./module/afficheHomePage.js";


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
// On écoute au click de logInOut, au click :
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



// affiche la page d'accueil

(Boolean(sessionStorage.getItem("connexion"))) ? afficheHomePage_edit() : afficheHomePage();








