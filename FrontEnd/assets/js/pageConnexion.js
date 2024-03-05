////////////////////////////////////////////////////////////////////////////
////////////////////   affiche la page de connexion   //////////////////////
////////////////////////////////////////////////////////////////////////////

import { regExp, host } from "./const.js";
import { montrerMessage } from "./fonction.js";

// Récupération de l'élément du DOM que selecttionne le main
const mainElement = document.querySelector("main");


export const pageConnexion = () => {

    ////////////////   création du formulaire   /////////////////////////////

    // on efface le code du <main> 
    mainElement.innerHTML = "";
    mainElement.id = "loginPage";

    //Création du titre
    const titreElement = document.createElement("h2");
    titreElement.innerText = "Log In";
    mainElement.appendChild(titreElement);

    // création de la balise <form>
    const formElement = document.createElement("form");
    formElement.id = "loginForm";
    mainElement.appendChild(formElement);
    // Ecoute l'envoi du formulaire
    formElement.addEventListener("submit", envoiForm);

    // création du sous-Groupe email
    const emailGroupe = document.createElement("div");
    emailGroupe.classList.add("form-group");
    formElement.appendChild(emailGroupe);

    // création de label email
    const labelEmail = document.createElement("label");
    labelEmail.setAttribute("for", "idemail");
    labelEmail.innerText = "E-mail";
    emailGroupe.appendChild(labelEmail);

    // création de input email
    const inputEmail = document.createElement("input");
    inputEmail.id = "idemail";
    inputEmail.type = "email";
    inputEmail.name = "inputEmail";
    inputEmail.pattern = regExp;
    inputEmail.required;
    emailGroupe.appendChild(inputEmail);
    //vérifie email validationEmail
    inputEmail.addEventListener("input", (e) => {
        e.preventDefault();
        //si la valeur saisi est vide
        if (e.target.value === "") {
            // enlève les cvlasses "valide", "invalide"
            e.target.classList.remove("valide", "invalide")
        } else {
            //si email est correct
            if (regExp.test(e.target.value)) {
                // si .invalide existe alors replace .invalide par valide sinon
                e.target.classList.contains("invalide") ? e.target.classList.replace("invalide", "valide") :
                    // si .valide n'existe pas alors ajout .valide sinon rien
                    (!e.target.classList.contains("valide")) ? e.target.classList.add("valide") : "";
            } else {
                // si .valide existe alors replace .valide par invalide sinon
                e.target.classList.contains("valide") ? e.target.classList.replace("valide", "invalide") :
                    // si .invalide n'existe pas alors ajout .invalide sinon rien
                    (!e.target.classList.contains("invalide")) ? e.target.classList.add("invalide") : "";
            }
        }
    });

    // création du sous-groupe psswrd
    const psswrdGroupe = document.createElement("div");
    psswrdGroupe.classList.add("form-group");
    formElement.appendChild(psswrdGroupe);

    // création de label psswrd
    const labelPsswrd = document.createElement("label");
    labelPsswrd.setAttribute("for", "idpassword");
    labelPsswrd.innerText = "Mot de passe";
    psswrdGroupe.appendChild(labelPsswrd);

    // création de input psswrd
    const inputPsswrd = document.createElement("input");
    inputPsswrd.id = "idpassword";
    inputPsswrd.type = "password";
    inputPsswrd.name = "inputPsswrd";
    inputPsswrd.required;
    psswrdGroupe.appendChild(inputPsswrd);
    inputPsswrd.addEventListener("input", (e) => {
        e.preventDefault();
        //si la valeur saisi est vide
        if (e.target.value === "") {
            // enlève les cvlasses "valide", "invalide"
            e.target.classList.remove("valide", "invalide")
        } else {
            // si le mot de passe est trop court
            if (e.target.value.length < 6) {
                // si .valide existe alors replace .valide par invalide sinon
                e.target.classList.contains("valide") ? e.target.classList.replace("valide", "invalide") :
                    // si .invalide n'existe pas alors ajout .invalide sinon rien
                    (!e.target.classList.contains("invalide")) ? e.target.classList.add("invalide") : "";
            } else {
                // si .invalide existe alors replace .invalide par valide sinon
                e.target.classList.contains("invalide") ? e.target.classList.replace("invalide", "valide") :
                    // si .valide n'existe pas alors ajout .valide sinon rien
                    (!e.target.classList.contains("valide")) ? e.target.classList.add("valide") : "";
            }
        }
    });

    // Création d'un bouton 'Se connecter'
    const btnElement = document.createElement("button");
    btnElement.type = "submit";
    btnElement.innerHTML = "Se connecter";
    formElement.appendChild(btnElement);

    // Création d'un lien pour mot de passe oublié
    const forgotPsswrdElement = document.createElement("a");
    forgotPsswrdElement.href = "#";
    forgotPsswrdElement.id = "forgotPassword";
    forgotPsswrdElement.innerText = "Mot de passe oublié ?";
    formElement.appendChild(forgotPsswrdElement);
    forgotPsswrdElement.addEventListener("click", function (event) {
        event.preventDefault();
        montrerMessage(messageElement, "Veuillez contacter l'administrateur pour réinitialiser votre mot de passe", "info", 5);
    });


    // retour erreur de conformité
    const messageElement = document.createElement("div");
    messageElement.id = "loginPageMessage";
    mainElement.appendChild(messageElement)
}

///////////////////// à la soumission du formulaire /////////////////////////
const envoiForm = (e) => {
    // Empêche l'envoi du formulaire par défaut
    e.preventDefault();
    let emailValide = e.target.inputEmail.classList.contains("valide");
    let objetEmail = e.target.inputEmail.value;
    let psswrdValide = e.target.inputPsswrd.classList.contains("valide");
    let objetPasseword = e.target.inputPsswrd.value;

    // vérifie si l'email et le mot de passa est valide, sinon envoie un message d'erreur
    if (!emailValide || !psswrdValide) { montrerMessage(document.getElementById("loginPageMessage"), "Veuillez vérifier si les champs sont correctement remplis", "erreur", 3) };
    // si tout est valide alors on procède à l'envoi vers l'API 
    if (emailValide && psswrdValide) {
        // création de la charge utile
        const identifiant = {
            email: objetEmail,
            password: objetPasseword
        };

        fetch(`${host}/users/login`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(identifiant)
        })
            .then(reponse => {

                //gestion de l'erreur 404 'erreur d'email'
                if (reponse.status === 404) {
                    montrerMessage(document.getElementById("loginPageMessage"), "<span>Emai invalide</span><br><br>Veuillez vérifier que votre email est correctement saisi", "erreur", 3);
                }
                //gestion de l'erreur 401 'erreur de mot de passe'
                else if (reponse.status === 401) {
                    montrerMessage(document.getElementById("loginPageMessage"), "<span>Mot de passe incorrect</span><br><br>Veuillez vérifier que votre email est correctement saisi", "erreur", 3);
                }
                // connexion réussi, récupération de l'idUtilisateur et de son token
                else if (reponse.status === 200) {
                    montrerMessage(document.getElementById("loginPageMessage"), "<span>Connexion réussie</span>", "succes", 1);
                    sessionStorage.setItem("connexion", "true");
                    reponse = reponse.json();
                    reponse.then(reponse => {
                        sessionStorage.setItem("idUtilisateur", reponse.userId);
                        sessionStorage.setItem("tokenUtilisateur", reponse.token);
                    })
                    setTimeout(() => {
                        window.location.href = "";
                    }, 1000);
                } else { montrerMessage(document.getElementById("loginPageMessage"), "Une erreur est survenue. Veuillez réessayer ultérieurement.", "erreur", 3) };
            });
    };
}