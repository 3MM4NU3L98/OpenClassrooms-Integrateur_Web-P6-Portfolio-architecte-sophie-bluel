////////////////////////////////////////////////////////////////////////////
//////////////////////////   affiche la modal   ////////////////////////////
////////////////////////////////////////////////////////////////////////////

import { modalElement, travaux } from "./const.js";
import { afficheAjout } from "./afficheModal_ajout.js";


export const afficheModal = () => {
    modalElement.innerHTML = ""
    // rendre visible le modal
    modalElement.style.display = "block";
    // quand l'utilsateur clicke n'importe où en dehors du modal, ça le ferme
    window.addEventListener("click", (e) => { (e.target === modalElement) ? document.location.href = "" : "" });

    // création du contenant du modal
    const vignetteContenant = document.createElement("div");
    vignetteContenant.classList.add("contenantVignette");
    modalElement.appendChild(vignetteContenant);

    // Création du bouton de fermeture
    const btnFermer = document.createElement("div");
    btnFermer.classList.add("fermerModal");
    vignetteContenant.appendChild(btnFermer)
    // quand l'utilsateur clicke sur la x, ça ferme le modal
    btnFermer.addEventListener("click", () => { document.location.href = "" });

    // création du titre
    const vignetteTitre = document.createElement("h3");
    vignetteTitre.innerText = "Galerie photo";
    vignetteContenant.appendChild(vignetteTitre);

    // création des vignette des travaux
    const vignetteListe = document.createElement("div");
    vignetteListe.classList.add("listeVignette");
    vignetteContenant.appendChild(vignetteListe);
    // pour chaque travaux
    travaux.forEach(travauxElement => {

        // création d'un conteneur
        const vignetteElement = document.createElement("div");
        vignetteElement.classList.add("elementVignette")
        vignetteListe.appendChild(vignetteElement);

        // création de la balse img et assigne les attributs src et alt
        const imageElement = document.createElement("img");
        imageElement.src = travauxElement.imageUrl;
        imageElement.alt = travauxElement.title;
        vignetteElement.appendChild(imageElement);

        // creation de l'icône poubelle
        const poubelleElement = document.createElement("div");
        poubelleElement.dataset.travail = travauxElement.id;
        vignetteElement.appendChild(poubelleElement);
        poubelleElement.addEventListener("click", effacerTravail);
    });

    // création d'une séparation
    vignetteContenant.appendChild(document.createElement("hr"));

    // création du boton ajout d'un travail
    const vignetteBtn = document.createElement("button");
    vignetteBtn.innerText = "Ajouter une photo";
    vignetteContenant.appendChild(vignetteBtn);
    vignetteBtn.addEventListener("click", afficheAjout);
}

const effacerTravail = (e) => {
    let idTravail = e.target.dataset.travail
    console.log(idTravail)
}