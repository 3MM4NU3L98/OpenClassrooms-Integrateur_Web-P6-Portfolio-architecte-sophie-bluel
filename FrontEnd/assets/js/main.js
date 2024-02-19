import { menuLogin } from "./module/const.js";
import { afficheHomePage } from "./module/afficheHomePage.js";
import { afficheloginPage } from "./module/afficheloginPage.js";
import { afficheHomePage_edit } from "./module/afficheHomePage_edit.js";


// affiche la page d'accueil

(Boolean(sessionStorage.getItem("connexion"))) ? afficheHomePage_edit() : afficheHomePage();


menuLogin.addEventListener("click", () => {
    if (menuLogin.innerText === "login") {
        afficheloginPage();
    } else if (menuLogin.innerText === "logout") {
        sessionStorage.clear();
        document.location = ""
    }
});








