////////////////////////////////////////////////////////////////////////////
//////////////   affiche la modal pour l'ajout d'un travail   //////////////
////////////////////////////////////////////////////////////////////////////

import { categoriesTravaux, host } from "./const.js";
import { obtenirTravauxAPI, afficheGalerie } from "./fonction.js";
import { modal } from "./modal.js";

export const modalAjout = () => {
    // Récupération de l'élément du DOM qui accueillera le modal
    const modalElement = document.getElementById("backModal");
    modalElement.innerHTML = ""
    // rendre visible le modal
    modalElement.style.display = "block";

    // création du contenant du modal
    const ajoutContenant = document.createElement("div");
    ajoutContenant.classList.add("contenantAjout");
    modalElement.appendChild(ajoutContenant);

    // Création du bouton de fermeture
    const btnFermer = document.createElement("div");
    btnFermer.classList.add("fermerModal");
    ajoutContenant.appendChild(btnFermer)
    // quand l'utilsateur clicke sur la x, ça ferme le modal
    btnFermer.addEventListener("click", () => { modalElement.style.display = "none" });

    // Création du bouton de retour
    const btnRetour = document.createElement("div");
    btnRetour.classList.add("retourModal");
    ajoutContenant.appendChild(btnRetour)
    // quand l'utilsateur clicke sur la x, ça ferme le modal
    btnRetour.addEventListener("click", () => { modal() });

    // création du titre
    const ajoutTitre = document.createElement("h3");
    ajoutTitre.innerText = "Ajout photo";
    ajoutContenant.appendChild(ajoutTitre);

    // création de la balise <form>
    const ajoutForm = document.createElement("form");
    ajoutForm.method = "post";
    ajoutForm.id = "formAjout";
    ajoutForm.enctype = "multipart/form-data";
    ajoutContenant.appendChild(ajoutForm);
    // Écoute les changemmebt du formulaire pour activer le btn d'envoi
    ajoutForm.addEventListener("change", () => {
        ajoutBtn.disabled = (ajoutInputfile.files[0] && ajoutInputText.value && ajoutSelect.value) ? false : true;
    });
    // Ecoute l'envoi du formulaire
    ajoutForm.addEventListener("submit", envoiAjout);

    // cadre pour l'image
    const ajoutBlockImage = document.createElement("div");
    ajoutBlockImage.classList.add("blockImageAjout");
    ajoutForm.appendChild(ajoutBlockImage);

    // affigage de l'icone
    const ajoutAffichageImage = document.createElement("div");
    ajoutAffichageImage.classList.add("AfficheIconeImage");
    ajoutBlockImage.appendChild(ajoutAffichageImage);

    // ajout du label pour l'input type=file
    const ajoutLabelInputfile = document.createElement("label");
    ajoutLabelInputfile.setAttribute("for", "inputImage");
    ajoutLabelInputfile.innerText = "+ Ajouter photo";
    ajoutBlockImage.appendChild(ajoutLabelInputfile);

    // ajout de la phrase descriptive
    const ajoutMessageInputFile = document.createElement("div");
    ajoutMessageInputFile.classList.add("afficheMessageInputFile");
    ajoutMessageInputFile.innerText = "jpg, png : 4mo max";
    ajoutBlockImage.appendChild(ajoutMessageInputFile);

    // ajout input type file
    const ajoutInputfile = document.createElement("input");
    ajoutInputfile.type = "file";
    ajoutInputfile.id = "inputImage";
    ajoutInputfile.name = "inputImage";
    ajoutInputfile.accept = ".jpg, .png";
    ajoutInputfile.required;
    ajoutBlockImage.appendChild(ajoutInputfile);
    // sur changement input 
    ajoutInputfile.addEventListener("change", preAffichageImage);

    // ajout du label pour l'input type=text
    const ajoutLabelInputText = document.createElement("label");
    ajoutLabelInputText.setAttribute("for", "inputText");
    ajoutLabelInputText.innerText = "Titre";
    ajoutLabelInputText.classList.add("labelInput");
    ajoutForm.appendChild(ajoutLabelInputText);

    // ajout input type=Text
    const ajoutInputText = document.createElement("input");
    ajoutInputText.type = "text";
    ajoutInputText.id = "inputText";
    ajoutInputText.name = "inputText";
    ajoutInputText.required;
    ajoutForm.appendChild(ajoutInputText);

    // ajout du label pour <select>
    const ajoutLabelSelect = document.createElement("label");
    ajoutLabelSelect.setAttribute("for", "selectText");
    ajoutLabelSelect.innerText = "Catégorie";
    ajoutLabelSelect.classList.add("labelInput");
    ajoutForm.appendChild(ajoutLabelSelect);

    // ajout <select>
    const ajoutSelect = document.createElement("select");
    ajoutSelect.id = "selectText";
    ajoutSelect.name = "selectText";
    ajoutSelect.required;
    ajoutForm.appendChild(ajoutSelect);
    // ajout des options
    const selectOption0 = document.createElement("option");
    selectOption0.value = "";
    ajoutSelect.appendChild(selectOption0);
    categoriesTravaux.forEach(element => {
        const selectOption = document.createElement("option");
        selectOption.value = element.id;
        selectOption.innerText = element.name;
        ajoutSelect.appendChild(selectOption);
    });

    // création d'une séparation
    ajoutForm.appendChild(document.createElement("hr"));

    // Création d'un bouton 'valider'
    const ajoutBtn = document.createElement("button");
    ajoutBtn.type = "submit";
    ajoutBtn.innerHTML = "Valider";
    ajoutBtn.disabled = true;
    ajoutForm.appendChild(ajoutBtn);
}

//////////////////  pré-afficher l'image selectionner   /////////////////////////

const preAffichageImage = (e) => {
    e.preventDefault();
    let message = document.querySelector(".afficheMessageInputFile");
    const typeFichier = ["image/jpeg", "image/png"];
    if (e.target.files[0].size > 4000000 || !typeFichier.includes(e.target.files[0].type)) {
        message.innerText = (e.target.files[0].size > 4000000) ? "Fichier supérieur à 4mo !" : "Fichier incorrect !";
        message.style.color = "red";
        setTimeout(() => {
            message.style = "";
            message.innerText = "jpg, png : 4mo max";
        }, 3000);
    } else {
        document.querySelector("#formAjout .blockImageAjout .AfficheIconeImage").style.display = "none";
        document.querySelector("#formAjout .blockImageAjout label").style.display = "none";
        document.querySelector("#formAjout .blockImageAjout .afficheMessageInputFile").style.display = "none";
        let image = document.createElement("img");
        image.src = window.URL.createObjectURL(e.target.files[0]);
        image.classList.add("imagePreAfficher");
        document.querySelector(".blockImageAjout").appendChild(image)
    }
}


///////////////////// à la soumission du formulaire /////////////////////////
const envoiAjout = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("image", e.target.inputImage.files[0]);
    formData.append("title", e.target.inputText.value);
    formData.append("category", e.target.selectText.value);

    fetch(`${host}/works`, {
        method: 'POST',
        headers: { "Authorization": `Bearer ${sessionStorage.getItem("tokenUtilisateur")}` },
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors de l\'envoi de l\'image.");
            }
            return response.json();
        })
        .then(() => {
            obtenirTravauxAPI().then(travaux => afficheGalerie(travaux));
            modal();
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}
