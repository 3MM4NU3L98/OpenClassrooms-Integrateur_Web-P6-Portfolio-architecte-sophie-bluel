import { travaux, categoriesTravaux } from "./const.js";
import { afficheGalerie } from "./fonction.js";
/*
///////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
||||||||||   affiche la parit avec les filtres de la page d'accueil   ||||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////////////////////
*/
export const filtresFolio = () => {

    // Récupération de l'élément du DOM qui accueillera le choix du filtre
    const filtresPortfolio = document.getElementById("filtres");

    ////////////// Création des boutons permettant de filter  /////////////// 
    // création de la balise div
    const btnFiltre0 = document.createElement("div");
    // ajout du texte dans la balise
    btnFiltre0.innerText = "Tous";
    // création de l'attribut data-categorie = 0
    btnFiltre0.dataset.categorie = 0;
    // ajout des classes à la balise
    btnFiltre0.classList.add("btnFiltre", "active");
    // positionne la balise
    filtresPortfolio.appendChild(btnFiltre0);
    // on écoute le btn
    btnFiltre0.addEventListener("click", ecouteClick);

    // et aussi pour chaque btn de la liste categorie 
    categoriesTravaux.forEach(element => {
        const btnFiltre = document.createElement("div");
        btnFiltre.innerText = element.name;
        btnFiltre.dataset.categorie = element.id;
        btnFiltre.classList.add("btnFiltre");
        filtresPortfolio.appendChild(btnFiltre);
        btnFiltre.addEventListener("click", ecouteClick);
    });
}

///////////////////////// Sur un click d'un des btn //////////////////////////////
const ecouteClick = (e) => {
    // retire la classe 'active' sur le bouton qui le posséde
    document.querySelector(".active").classList.remove("active");
    // ajout de la classe 'active' sur le btn clické
    e.target.classList.add("active");
    // on recupere l'identifiant de la catégorie grace l'attribut data-categorie
    let idCategorie = parseInt(e.target.dataset.categorie);
    // si idCategorie === 0 alor travauxFiltrer = travaux sinon filtre les traveaux avec idCategorie
    let travauxFiltrer = (idCategorie === 0) ? travaux : travaux.filter(travail => travail.categoryId === idCategorie);
    // affichage des photos
    afficheGalerie(travauxFiltrer);
}






