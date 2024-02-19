// Serveur de l'API
export const host = "http://localhost:5678/api";
// Récupération des travaux depuis l'API en JSON
export const travaux = await fetch(`${host}/works`).then(travaux => travaux.json());
// Récupération des catégories de travaux depuis l'API en JSON
export const categoriesTravaux = await fetch(`${host}/categories`).then(categoriesTravaux => categoriesTravaux.json());




// Récupération de l'élément du DOM qui accueillera la galerie
export const galeriePortefolio = document.querySelector(".gallery");

// Récupération de l'élément du DOM qui accueillera le choix du filtre
export const filtresPortefolio = document.getElementById("filtres")

// Récupération de l'élément du DOM qui selecttionne le menu login
export const menuLogin = document.getElementById("log")

// Récupération de l'élément du DOM qui selecttionne le main
export const mainElement = document.querySelector("main")



// Regular Expression Pattern(Ref: https://bit.ly/33cv2vn):
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
