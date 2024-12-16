// alert("Hello");

// Sélectionner un élément via son id : 

// ---------------- 1ère méthode ------------------
// cette méthode ne marche QUE pour l'id !
// let select1 = titreNiveau1;
// console.log(select1);

// ---------------- 2ème méthode ------------------

let select2 = document.getElementById("titreNiveau1");
console.log(select2);
console.log(document.getElementById("titreNiveau1")); // pareil que select2. Ici, on ne stoque juste pas la valeur dans une variable. On affiche directement la valeur de document.... dans la console.


// si on veut uniquement récupérer le contenu de l'élément ciblée : 

console.log(select2.textContent); // .textContent est une propriété






// Sélectionner les éléments via leur classe : 

let selectClass = document.getElementsByClassName("selectClass");
console.log(selectClass);


// Lorsqu'on selectionne plusieurs éléments en même temps avec "getElementsByClassName", on crée un array en JS qui affichera dans la console avec l'intitulé "HTMLCollection".
// Et comme un tableau, le premier élément aura l'index 0, et grâce à cet index, je pourrai viser un seul de ces éléments.

// On va aller plus loin, en ciblant ce qui se trouve dans l'élément (le contenu de l'élément).

console.log(selectClass[0].innerHTML);
console.log(selectClass[1].textContent); // .innerHTML et .textContent donnent la même chose

// .innerHTML permet de définir le contenu de la balise ou l'élément HTML et le sélectionner dans le but de l'identifier, de le modifier ou de le manipuler autrement.



// Mini exo : modifier le contenu du h2 qui a la classe "aChanger" : 'Je change le titre, youhou !'

let aChanger = document.getElementsByClassName("aChanger");

console.log(aChanger[0].innerHTML);

aChanger[0].innerHTML = "Je change le titre, youhou !";

console.log(aChanger[0].innerHTML);




// Sélectionner les éléments via le nom de balise : 

let lesP = document.getElementsByTagName("p"); // On cherche tous les paragraphes de notre page et on les récupère dans un tableau (array) via la méthode "getElementsByTagName("p")"
console.log(lesP);
// Pour changer le CSS d'un élément HTML
lesP[0].style.backgroundColor = "pink";

// Mini exo : Sélectionner le premier paragraphe et lui donner le style suivant : 
// border-radius (20px), color (#fff), padding (10px)

lesP[0].style.borderRadius = "20px";
lesP[0].style.color = "#fff";
lesP[0].style.padding = "10px";

// Je sélectionne tous les paragraphes dans la page et je change le texte en majuscule (1ère méthode)

// for (let i = 0; i < lesP.length; i++) {
//     lesP[i].style.textTransform = "uppercase";
// }

// 2ème méthode : 

for (let p of lesP) {
    p.style.textTransform = "uppercase";
}

// Méthode querySelector

let div = document.querySelector("div");
console.log(div);
// La méthode querySelector() retourne le 1er élément trouvé spécifié en paramètre
// L'avantage de querySelector est qu'il utilise la même synthaxe de sélection en CSS
// document.querySelector("#monId"), document.querySelector(".maClasse"), document.querySelector("maBalise");
div.style.border = "1px solid red";

// Méthode querySelectorAll()
// sélectionne toutes les balises div et retourne un tableau (array) d'éléments
let queryPara = document.querySelectorAll(".selectClass");
// On a 2 paragraphes qui ont la classe "selectClass"
console.log(queryPara);
console.log(queryPara[1].innerHTML);

let rajout = document.querySelector("div.col-4 > p.selectClass");
console.log(rajout);
console.log(rajout.innerHTML); // ecrit avec la balise <strong>
console.log(rajout.textContent); // ecrit juste le conteu texte tel quel

// rajout.innerHTML = "<span>je suis là</span>"; 
// La propriété ".innerHTML" permet de rajouter des balises HTML avec du contenu HTML dynamique. Mais peut poser des risques de sécurité si, par exemple, des données non sécurisées sont insérées (risques d'attaques XSS). 

// rajout.textContent = "<span>je suis là</span>"; 
// ".textContent" : permet uniquement de lire ou de modifier le contenu texte d'un élément. Il ignore et échappe les balises HTML.





// Création d'un nouvel élément HTML à la fin de la section : 

let section = document.querySelector("section");
console.log(section);

// pour créer un élément, nous utilisons la méthode "createElement()", puis nous l'intégrons dans le noeud souhaité.

let nouveauParaFin = document.createElement("p");
console.log(nouveauParaFin);
nouveauParaFin.innerText = "Coucou, je suis ton nouveau paragraphe à la fin de la section"; // pour l'instant, l'élément existe mais n'est pas inséré dans la section, il n'est pas visible dans la page HTML dans le rendu en ligne : il n'est présent que dans la console !

section.appendChild(nouveauParaFin);

section.append(nouveauParaFin, "Et voici du texte supplémentaire"); // .append() : fonction qui accepte tous les éléments, fonction qui insère du contenu à la fin de la section

// La section // append() accepte tous les éléments (balises ou string)

// appendChild() : cette méthode ajoute un élément HTML à la fin d'un élément à la fin d'un élément parent // il n'accepte que les éléments de types balise






// Création d'un nouvel élément HTML au début de la section : 

let nouveauParaDebut = document.createElement("p");
nouveauParaDebut.innerText = "coucou, je suis ton paragraphe au début de la section";
section.prepend(nouveauParaDebut); // .prepend() va insérer l'élément et son contenu au début de la section.








