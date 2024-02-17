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