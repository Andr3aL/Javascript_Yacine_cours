/*

    Définition : 

    Un évènement correspond à une action spécifique, comme par exemple le clic sur un bouton ou la frappe d'un clavier. Ainsi, la programmmation évènementielle consiste à réagir à ces évènements et exécuter du code au moment où ils se produisent.

    Les évènements vont nous permettre de déclencher une fonction. C'est à dire une série d'instructions, suite à une action de mon utilisateur.

    Pour implémenter cela, nous devons d'abord dire à Javascript de les "écouter" grâce à un "eventListener()".

    Littéralement, un "écouteur d'évènement", en français.

    Puis, nous devons lier l'évènement à un bloc de code.

    Ecouter un évènement avec addEventListener : 
    addEnventListener est une méthode fournie par Javascript, qui peut être appelée directement depuis les éléments HTML. Cette méthode prend deux paramètres : 
    -> Le nom de l'évènement, comme click, par exemple;
    -> Une fonction

    La fonction peut s'écrire de 2 manières différentes : 
    -> Les fonctions classiques avec le mot clé "function";
    -> Les fonctions fléchées

    Syntaxe : 

    selecteur.addEventListener("évènement", fonction);

    étape 1 -> Sélectionner les éléments
    étape 2 -> Créer des fonctions qui seront exécutées par l'évènement
    étape 3 -> Poser l'écouteur d'évènement pour l'intéraction

*/




// 1- div #rouge

let divRouge = document.querySelector("#rouge"); // je sélectionne ma div par son id
console.log(divRouge);
// Avec une fonction anonyme : 
// divRouge.addEventListener("click", function(){
//     divRouge.style.backgroundColor = "gold";
//     divRouge.style.borderRadius = "50%";
//     divRouge.textContent = "GOLD";    
// });

function fDivRouge () {

    divRouge.style.backgroundColor = "gold";
    divRouge.style.borderRadius = "50%";
    divRouge.textContent = "GOLD";

}
// -> L'action ici : le click
// -> Le nom de la fonction ici : fDivRouge()
divRouge.addEventListener("click", fDivRouge);




// 2- #p1

// On place la fonction Javascript qu'on veut exécuter à l'intérieur de la balise ouvrante <p>

function fp1() {
    alert("L'élément est cliqué !");
}


// 3- div #orange :
// Avec la fonction anonyme

let divOrange = document.querySelector("#orange");

divOrange.addEventListener("dblclick", function(){
    divOrange.style.backgroundColor = "gold";
    divOrange.style.borderRadius = "50%";
    divOrange.textContent = "GOLD";    
});

// 4- div #info :

let divInfo = document.querySelector("#info");

divInfo.addEventListener("mouseover", function(){
    divInfo.style.backgroundColor = "gold";
    divInfo.style.borderRadius = "50%";
    divInfo.textContent = "GOLD";    
});

// 5- div #primary :

let divPrimary = document.querySelector("#primary");

divPrimary.addEventListener("mouseout"/* mouseleave */, () => /* fonction anonyme fléchée */ {
    divPrimary.style.backgroundColor = "gold";
    divPrimary.style.borderRadius = "50%";
    divPrimary.textContent = "GOLD";
    // Je peux intéragir sur un autre élément grâce à la même fonction
    document.querySelector("h1").style.color = "green";
});

// 6- div #success : click et re-click

let divChangeCouleur = document.querySelector("#success");

divChangeCouleur.addEventListener("click", function(){ // Je vérifie si la div contient la classe "vert" dans la liste de classes.

    // Si true
    if (divChangeCouleur.classList.contains("vert")) {
        divChangeCouleur.classList.remove("vert"); // Je supprime la classe "vert"
        divChangeCouleur.classList.add("gold"); // Je rajoute la classe "gold"
        divChangeCouleur.textContent = "GOLD";
    } else {
    // Si false = si la div ne contient pas la classe "vert" => ça veut dire qu'elle contient la classe "gold"

        divChangeCouleur.classList.add("vert"); // Je rajoute la classe "vert"
        divChangeCouleur.classList.remove("gold"); // Je supprime la classe "gold"
        divChangeCouleur.textContent = "VERT";

    }

});

// image chat : 

let imageChat = document.querySelector('img');
imageChat.style.width = "300px";

let lesP = document.querySelectorAll(".toggle p");
console.log(lesP);

// lesP[0].style.textDecoration = 'underline';
// lesP[1].style.textDecoration = 'underline';
// lesP[2].style.textDecoration = 'underline';



for (let paragraphe of lesP) {
    paragraphe.style.textDecoration = 'underline';
    paragraphe.style.color = '#ee3366';
    paragraphe.style.fontWeight = 'bolder';
}

// ---------------------------

lesP[0].addEventListener('click', ()=>{
    imageChat.classList.add('hide');
});

lesP[1].addEventListener('click', ()=>{
    imageChat.classList.remove('hide');
});

lesP[2].addEventListener('click', ()=>{
    imageChat.classList.toggle('hide');
});





