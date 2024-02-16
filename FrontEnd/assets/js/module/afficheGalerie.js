/*  Pour chaque élément de 'galerie' est codé comme ci-dessous et placé à 'position'
<figure>
    <img src="imageUrl" alt="title">
    <figcaption>title</figcaption>
</figure>*/

export function afficheGalerie(galerie, position) {

    // efface tous les photos de la galerie
    position.innerHTML = "";

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

        // On rattache la balise figure à 'position' 
        position.appendChild(figureElement);

        // On rattache les Elements à la balise figure
        figureElement.appendChild(imageElement);
        figureElement.appendChild(figcaptionElement);

    });

}
