import { host } from "./const.js";


//////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//|||||||||   fonction de récupération de données de l' API   ||||||||||||
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////
export const obtenirTravauxAPI = async () => {
    // Récupération des travaux depuis l'API en JSON
    return await fetch(`${host}/works`).then(travaux => travaux.json());
}


//////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//|||||||||   fonction de récupération de données de l' API   ||||||||||||
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////
/*  Pour chaque élément de 'galerie' est codé comme ci-dessous
<figure>
    <img src="imageUrl" alt="title">
    <figcaption>title</figcaption>
</figure>*/
export function afficheGalerie(galerie) {

    // efface tous les photos de la galerie
    document.querySelector(".gallery").innerHTML = "";

    // pour chaque élément de galerie
    galerie.forEach(galerieElement => {

        // création de la balise figure
        const figureElement = document.createElement("figure");

        // création de la balse img et assigne les attributs src et alt
        const imageElement = document.createElement("img");
        imageElement.src = galerieElement.imageUrl;
        imageElement.alt = galerieElement.title;

        // création de la balise figcaption et la remplie
        const figcaptionElement = document.createElement("figcaption");
        figcaptionElement.innerText = galerieElement.title;

        // Récupération de l'élément du DOM qui accueillera la galerie
        // et y rattache la balise figure
        document.querySelector(".gallery").appendChild(figureElement);

        // On rattache les Elements à la balise figure
        figureElement.appendChild(imageElement);
        figureElement.appendChild(figcaptionElement);

    });

}









