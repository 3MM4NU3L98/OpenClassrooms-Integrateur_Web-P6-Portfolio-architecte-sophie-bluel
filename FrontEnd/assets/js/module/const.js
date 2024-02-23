// Serveur de l'API
export const host = "http://localhost:5678/api";
// Récupération des travaux depuis l'API en JSON
export const travaux = await fetch(`${host}/works`).then(travaux => travaux.json());
// Récupération des catégories de travaux depuis l'API en JSON
export const categoriesTravaux = await fetch(`${host}/categories`).then(categoriesTravaux => categoriesTravaux.json());


// Récupération de l'élément du DOM que selecttionne le main
export const mainElement = document.querySelector("main");

// Récupération de l'élément du DOM qui accueillera le modal
export const modalElement = document.getElementById("backModal");

// Récupération de l'élément du DOM qui accueillera le lien modal
export const editPortfolio = document.querySelector(".portfolioEdit");

// Récupération de l'élément du DOM qui accueillera la galerie
export const galeriePortfolio = document.querySelector(".gallery");

// Récupération de l'élément du DOM qui accueillera le choix du filtre
export const filtresPortfolio = document.getElementById("filtres");


// Regular Expression Pattern
export const regExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;


// permet d'afficher un message paramètrable
export const montrerMessage = (emplacement, message, type, duree) => {
    emplacement.classList.add("message", type);
    emplacement.innerHTML = message;
    // Clear message after 3 seconds
    setTimeout(function () {
        emplacement.innerHTML = "";
        emplacement.classList.remove("message", type);
    }, duree * 1000);
}


// envoie une requête POST avec Fetch
export const envoiAPI = async (cible, chargeUtile) => {
    // Configuration de la requête
    const requeteOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(chargeUtile)
    };
    // envoi une requête réseaux via l'API Fetch et attend la réponse grace au mot clés await
    const reponse = await fetch(`${host}${cible}`, requeteOptions);

    // attend la convertion du corps de la réponse en JSON grace au mot clés await
    const donneeRetour = await reponse.json();
    const donneeBrut = (reponse.ok) ? donneeRetour : "";

    // creation de l'objet a retourné
    const donneePretEnvoyer = {
        statutReponse: reponse.status,
        statutTexteReponse: reponse.statusText,
        jsonReponse: donneeBrut,
    }
    return donneePretEnvoyer;
}


// icone édition
export const iconEdit = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.5229 1.68576L13.8939 2.05679C14.1821 2.34503 14.1821 2.81113 13.8939 3.0963L13.0016 3.99169L11.5879 2.57808L12.4803 1.68576C12.7685 1.39751 13.2346 1.39751 13.5198 1.68576H13.5229ZM6.43332 7.73578L10.5484 3.61759L11.9621 5.03121L7.84387 9.14633C7.75494 9.23525 7.64455 9.29964 7.52496 9.33337L5.73111 9.84546L6.2432 8.05162C6.27693 7.93203 6.34133 7.82164 6.43025 7.73271L6.43332 7.73578ZM11.4408 0.646245L5.39074 6.6932C5.12397 6.95998 4.93078 7.28808 4.82959 7.64685L3.9526 10.7133C3.879 10.9708 3.94953 11.2468 4.13965 11.4369C4.32977 11.627 4.60574 11.6976 4.86332 11.624L7.92973 10.747C8.29156 10.6427 8.61967 10.4495 8.88338 10.1858L14.9334 4.13888C15.7951 3.27722 15.7951 1.87894 14.9334 1.01728L14.5624 0.646245C13.7007 -0.215415 12.3024 -0.215415 11.4408 0.646245ZM2.69844 1.84214C1.20816 1.84214 0 3.05031 0 4.54058V12.8812C0 14.3715 1.20816 15.5796 2.69844 15.5796H11.0391C12.5293 15.5796 13.7375 14.3715 13.7375 12.8812V9.44683C13.7375 9.039 13.4094 8.71089 13.0016 8.71089C12.5937 8.71089 12.2656 9.039 12.2656 9.44683V12.8812C12.2656 13.5589 11.7167 14.1078 11.0391 14.1078H2.69844C2.02076 14.1078 1.47188 13.5589 1.47188 12.8812V4.54058C1.47188 3.86291 2.02076 3.31402 2.69844 3.31402H6.13281C6.54065 3.31402 6.86875 2.98591 6.86875 2.57808C6.86875 2.17025 6.54065 1.84214 6.13281 1.84214H2.69844Z" />
        </svg>
`;

