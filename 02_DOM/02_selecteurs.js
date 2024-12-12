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

console.log(selectClass[0].innerHTML);
console.log(selectClass[1].textContent); // .innerHTML et .textContent donnent la même chose






