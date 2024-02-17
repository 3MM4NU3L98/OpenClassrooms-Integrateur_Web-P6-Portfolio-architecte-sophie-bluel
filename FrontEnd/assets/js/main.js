import { menuLogin } from "./module/const.js";
import { afficheHomePage } from "./module/afficheHomePage.js";
import { afficheloginPage } from "./module/afficheloginPage.js"


// affiche la page d'accueil
afficheHomePage();

console.log(menuLogin)
menuLogin.addEventListener("click", () => afficheloginPage());








