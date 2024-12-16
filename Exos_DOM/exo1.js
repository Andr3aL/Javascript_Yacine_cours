// alert("Yes");

// On veut insérer un paragraphe juste avant le paragraphe avec l'id "reference"

// 1- Créer un nouvel élément <p>
let nouveauParagraphe = document.createElement("p");

// 2- Ajouter du texte à ce paragraphe
nouveauParagraphe.textContent = "Je suis le nouveau paragraphe inséré.";

// 3- Sélectionner le container et l'élément de référence
let container = document.querySelector(".container");
let reference = document.querySelector("#reference");

// 4- Insérer le nouveau paragraphe avant l'élément qui a l'id "#reference" (1ère façon)

// container.insertBefore(nouveauParagraphe, reference);

// 2ème façon

reference.insertAdjacentElement("beforebegin", nouveauParagraphe);
// reference.insertAdjacentElement("afterend", nouveauParagraphe);

// targetElement.insertAdjacentElement(position, element);

// - Les positions
// afterbegin : insère l'element à l'intérieur de la balise mais en avant
// beforeend : inère l'element à l'intérieur de la balise mais à la fin
// afterend: insère le parag après l'element reference











