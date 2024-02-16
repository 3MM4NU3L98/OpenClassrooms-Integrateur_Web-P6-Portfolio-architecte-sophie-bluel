/*
    Affiche le choix des différents et retourne celui selectionné
    tous retourne 0
*/

export function afficheFiltres(listeCategories, position) {

    // Création des boutons avec class="btnFiltre" et pour le bouton 'tous' avec en plus 'active' 
    const btnFiltre0 = document.createElement("div");
    btnFiltre0.textContent = "Tous";
    btnFiltre0.dataset.categorie = 0;
    btnFiltre0.classList.add("btnFiltre", "active");
    position.appendChild(btnFiltre0);

    listeCategories.forEach(element => {
        const btnFiltre = document.createElement("div");
        btnFiltre.textContent = element.name;
        btnFiltre.dataset.categorie = element.id;
        btnFiltre.classList.add("btnFiltre");
        position.appendChild(btnFiltre);
    });

    //on retourne la catégories et active le btn cliké
    const tousbtnFiltre = document.querySelectorAll(".btnFiltre");
    // pour chaque btnFiltre
    tousbtnFiltre.forEach(btnElement => {
        console.log(btnElement)
        //lorsque on clicke sur un btnFiltre
        btnElement.addEventListener("click", (event) => {
            // retire la classe 'active' sur le bouton qui le posséde
            document.querySelector(".active").classList.remove("active");
            // ajout de la classe 'active' sur le btn clické
            event.target.classList.add("active");
            // on recupere l'identifiant de la catégorie grace l'attribut data-categorie
            let id = event.target.dataset.categorie;
            console.log(id)
            return id
        });
    });
}



