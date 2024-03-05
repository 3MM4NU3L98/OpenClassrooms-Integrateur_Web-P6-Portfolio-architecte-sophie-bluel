////////////////////////////////////////////////////////////////////////////
//////////////////////////   affiche le modal   ////////////////////////////
////////////////////////////////////////////////////////////////////////////
import { host } from "./const.js";
import { obtenirTravauxAPI, afficheGalerie } from "./fonction.js";
import { modalAjout } from "./modal_ajout.js";


export const modal = () => {
    // Récupération de l'élément du DOM qui accueillera le modal
    const modalElement = document.getElementById("backModal");
    modalElement.innerHTML = ""
    // rendre visible le modal
    modalElement.style.display = "block";
    // quand l'utilsateur clicke n'importe où en dehors du modal, ça le ferme
    window.addEventListener("click", (e) => { (e.target === modalElement) ? modalElement.style.display = "none" : "" });

    // création du contenant du modal
    const vignetteContenant = document.createElement("div");
    vignetteContenant.classList.add("contenantVignette");
    modalElement.appendChild(vignetteContenant);

    // Création du bouton de fermeture
    const btnFermer = document.createElement("div");
    btnFermer.classList.add("fermerModal");
    vignetteContenant.appendChild(btnFermer)
    // quand l'utilsateur clicke sur la x, ça ferme le modal
    btnFermer.addEventListener("click", () => { modalElement.style.display = "none" });

    // création du titre
    const vignetteTitre = document.createElement("h3");
    vignetteTitre.innerText = "Galerie photo";
    vignetteContenant.appendChild(vignetteTitre);

    // création d'un conteneur à vignettes
    const vignetteListe = document.createElement("div");
    vignetteListe.classList.add("listeVignette");
    vignetteContenant.appendChild(vignetteListe);

    // affiche les vignettes des travaux
    obtenirTravauxAPI().then(travaux => afficheVignettes(travaux));

    // création d'une séparation
    vignetteContenant.appendChild(document.createElement("hr"));

    // création du boton ajout d'un travail
    const vignetteBtn = document.createElement("button");
    vignetteBtn.innerText = "Ajouter une photo";
    vignetteContenant.appendChild(vignetteBtn);
    vignetteBtn.addEventListener("click", modalAjout);
}
//////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//|||||||||||||||   fonction d'affichage des vignettes   |||||||||||||||||
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////

const afficheVignettes = (listeVignettes) => {
    document.querySelector(".listeVignette").innerHTML = "";
    listeVignettes.forEach(vignette => {
        // création d'un conteneur
        const vignetteElement = document.createElement("div");
        vignetteElement.classList.add("elementVignette")
        document.querySelector(".listeVignette").appendChild(vignetteElement);

        // création de la balse img et assigne les attributs src et alt
        const imageElement = document.createElement("img");
        imageElement.src = vignette.imageUrl;
        imageElement.alt = vignette.title;
        vignetteElement.appendChild(imageElement);

        // creation de l'icône poubelle
        const poubelleElement = document.createElement("div");
        poubelleElement.dataset.travail = vignette.id;
        vignetteElement.appendChild(poubelleElement);
        poubelleElement.addEventListener("click", effacerTravail);
    });
}

//////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//|||||||||||||||   fonction d'effacement des travaux   ||||||||||||||||||
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////
const effacerTravail = (e) => {
    if (confirm("Voulez-vous le supprimer?") === true) {
        fetch(`${host}/works/${e.target.dataset.travail}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("tokenUtilisateur")}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur lors de l\'effacement du travail.");
                }
                return response;
            })
            .then(() => {
                obtenirTravauxAPI().then(travaux => {
                    afficheGalerie(travaux);
                    afficheVignettes(travaux);
                });
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
    }
}