////////////////////////////////////////////////////////////////////////////
////////////////////   affiche la page de connexion   //////////////////////
////////////////////////////////////////////////////////////////////////////

import { mainElement } from "./const.js";


export const afficheloginPage = () => {
    console.log(mainElement)

    ////////////////   création du formulaire   /////////////////////////////

    // on efface le code du <main> 
    mainElement.innerHTML = "";
    mainElement.id = "loginPage";

    // création d'un conteneur pour mom formulaire
    //const conteneurElement = document.createElement("div");
    // on y lui attribut un id 
    // conteneurElement.id = "loginPage";
    // et on le place dans le <main>
    //mainElement.appendChild(conteneurElement);

    //Création du titre
    const titreElement = document.createElement("h2");
    titreElement.innerText = "Log In";
    mainElement.appendChild(titreElement);

    // création de la balise <form>
    const formElement = document.createElement("form");
    formElement.id = "loginForm";
    mainElement.appendChild(formElement);

    // création du sous-Groupe email
    const emailGroupe = document.createElement("div");
    emailGroupe.classList.add("form-group");
    formElement.appendChild(emailGroupe);

    // création de label email
    const labelEmail = document.createElement("label");
    labelEmail.setAttribute("for", "idemail");
    labelEmail.innerText = "E-mail";
    emailGroupe.appendChild(labelEmail);

    // création de label email
    const inputEmail = document.createElement("input");
    inputEmail.id = "idemail";
    inputEmail.type = "email";
    inputEmail.name = "inputEmail";
    inputEmail.required
    emailGroupe.appendChild(inputEmail);

    // création du sous-groupe psswrd
    const psswrdGroupe = document.createElement("div");
    psswrdGroupe.classList.add("form-group");
    formElement.appendChild(psswrdGroupe);

    // création de label psswrd
    const labelPsswrd = document.createElement("label");
    labelPsswrd.setAttribute("for", "idpassword");
    labelPsswrd.innerText = "Mot de passe";
    psswrdGroupe.appendChild(labelPsswrd);

    // création de label email
    const inputPsswrd = document.createElement("input");
    inputPsswrd.id = "idpassword";
    inputPsswrd.type = "password";
    inputPsswrd.name = "inputPsswrd";
    inputPsswrd.required
    psswrdGroupe.appendChild(inputPsswrd);


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

    // retour erreur de conformité
    const messageElement = document.createElement("div");
    messageElement.id = "loginPageMessage";
    mainElement.appendChild(messageElement)




}


