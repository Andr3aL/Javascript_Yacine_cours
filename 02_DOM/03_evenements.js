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

// console.log(divRouge);

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
// console.log(lesP);

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



// Tableau qui regroupe factorise/condense tout le code précédent : 

// const ROUGE = document.getElementById("rouge");
// const ORANGE = document.getElementById("orange");
// const BLEU = document.querySelector("#bleu");
// const PRIMARY = document.querySelector("#primary");
// const SUCCESS = document.querySelector("#success");

// let colors = ["ROUGE", "ORANGE", "BLEU", "PRIMARY", "SUCCESS"];
// let colours = [ROUGE, ORANGE, BLEU, PRIMARY, SUCCESS];

// function colorsEvent(myColour, myColor) {
//   myColour.classList.toggle("cercle");
//   if (myColour.textContent === "GOLD") {
//     myColour.textContent = myColor;
//   } else {
//     myColour.textContent = "GOLD";
//   }
// }

// for (let i = 0; i < colours.length; i++) {
//   colours[i].addEventListener("click", () =>
//     colorsEvent(colours[i], colors[i])
//   );
// }


// L'objet event (e) ou (ev) est un objet javascript, contient des informations sur l'action qui vient de se produire, avec de nombreuses propriétés et méthodes.
// Définir le event en tant que paramétre de votre fonction est facultatif mais , parfois, il est utile que la fonction de gestionnaire connaisse l'évenement qui s'est produit


// Si on met un id "interdit" sur le "cliquez moi", on peut faire ça : 
// On empèche le chargement de la page
// Il est possible d'annuler ce comportement par défaut en appelant la méthode "preventDefault()" sur l'objet "event"
document.querySelector("#interdit").addEventListener("click", (event)=>{
    event.preventDefault(); // La méthode "preventDefault()" est particulièrement utile pour éviter que la soumission d'un formulaire recharge la page. Cela empêche le comportement par defaut, par exemple dans un formulaire : on n'evoie pas les données grâce à ça. Ce qui nous permet de récyupérer les données AVANT (PREVENTDEFAULT) de les envoyer.

    console.log('Continuez plutôt à lire le cours !!!');
    
    // console.log(event);
    

});


// ---------------- Gestion du formulaire -------------


let prenom = document.querySelector("#prenom");

// console.log(prenom);
// En JS, pour accéder à la valeur d'une zone de texte dans un formulaire, on utilise la propriété value

let submit = document.querySelector("#submit");

// on va récupérer la valeur saisie dans l'input avec prenom.value quand on clique sur le bouton submit grâce à un écouteur d'évènmenent et grâce a préventdefault()


// Méthode avec 'click'

submit.addEventListener('click', (event)=> {
    
    event.preventDefault();
    // je récupère la valeur de l'élément input prenom
    let prenomValue = prenom.value;
    console.log(prenomValue);
    // console.log(event.target);
    
    
});



// Autre façon de faire (avec submit, et pas 'click' cette fois)

// On récupère tout le form

let form = document.querySelector('form');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(e.target);
});

// On récupère html

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(e.target[1].value); // va afficher html
});

// On récupère css

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(e.target[2].value); // va afficher css
});


// Focus et blur pour les formulaires


// Focus

prenom.addEventListener('focus', ()=>{
// L'utilisateur clique à l'intérieur du champ (input prenom)
console.log(prenom.style.width); // avant
prenom.style.width = '100px';
console.log(prenom.style.width); // après

});


// Blur

prenom.addEventListener('blur', ()=>{
// L'utilisateur clique à l'extérieur du champ (input prenom) ou utilise tab, ou sors du champ
console.log(prenom.style.width); // avant
prenom.style.width = '500px';
console.log(prenom.style.width); // après

});


// Evènement "change"
// L'évènement change est déclanché lorsqu'un changement de valeur d'un élément html est réalisé par l'utilisateur

// "change" : pour le changement d'état d'un élément

















const HTML = document.querySelector('#html');
const LABELHTML = document.querySelector("#labelHTML");

HTML.addEventListener('change', (event)=> {

    // HTML.style.color = 'red';
    // console.log(HTML.style.color);

    // console.log(HTML.checked);

    // if (HTML.checked) {
    //     // Avec un variable :
    //     // LABELHTML.style.color = 'red';
    //     // HTML.style.color = 'red';
    //     // ou sans variable :
    //     // document.querySelector("#labelHTML").style.color = 'red';
    //     // ou avec l'id directement :
    //     // labelHTML.style.color = 'red';

    //     event.target.style.backgroundColor = 'red';
    //     console.log(event.target);
  
    // } else {
    //     LABELHTML.style.color = 'blue';
    // }

    if (event.target.checked) {
        // Avec un variable :
        // LABELHTML.style.color = 'red';
        // HTML.style.color = 'red';
        // ou sans variable :
        // document.querySelector("#labelHTML").style.color = 'red';
        // ou avec l'id directement :
        // labelHTML.style.color = 'red';

        event.target.nextElementSibling.style.color = 'red';
        // ici ob change la couleur de l'élément label à partir de l'élément input
        event.target.style.backgroundColor = 'red';
        // ici on change le background_color de l'élément input
        // console.log(event.target);
  
    } else {
        LABELHTML.style.color = 'blue';
    }
});
















// Même chose pour CSS et JS : 
///////////////// Méthode 1 : 

// const CSS_ = document.querySelector('#css');
// const LABELCSS = document.querySelector("#labelCSS");

// CSS_.addEventListener('change', (event)=> {

//     if (event.target.checked) {

//         event.target.nextElementSibling.style.color = 'red';
//         event.target.style.backgroundColor = 'red';

//     } else {
//         LABELCSS.style.color = 'blue';
//     }

// });


// const JS = document.querySelector('#js');
// const LABELJS = document.querySelector("#labelJS");

// JS.addEventListener('change', (event)=> {

//     if (event.target.checked) {

//         event.target.nextElementSibling.style.color = 'red';
//         event.target.style.backgroundColor = 'red';
  
//     } else {
//         LABELJS.style.color = 'blue';
//     }

// });


















///////////////// Méthode 2 : avec une boucle : 

// name est un attribut commun aux 3
// on va les mettre dans un tableau
// sur ce tab on va faire une boucle 
// si 




let checks = document.getElementsByName('langage');

console.log(checks);



for (let button of checks) {

    button.addEventListener('change', (event)=> {
// Je vérifie la valeur du checked de l'élément dans mon objet event => true si la case est cochée

        console.log(event.target.labels[0]);
        
            if (event.target.checked) {
                event.target.labels[0].style.color = 'red';
                // event.target.nextElementSibling.style.color = 'red';
                event.target.style.backgroundColor = 'red';
        
            } else {
                event.target.labels[0].style.color = 'blue';
                event.target.style.backgroundColor = 'white';
            }

    });

};








// Boutons radio : 






// Version avec fonction de reset des couleurs







let radio = document.getElementsByName('niveau');

console.log(radio);


for (let button of radio) {

    button.addEventListener('change', (event)=> {
// Je vérifie la valeur du checked de l'élément dans mon objet event => true si la case est cochée

        console.log(event.target.value);


            // if (button.checked.value = 'acquis') {

            //     event.target.labels[0].style.color = 'green';
            //     event.target.style.backgroundColor = 'green';
        
            // // } else {
            // //     event.target.labels[0].style.color = 'blue';
            // //     event.target.style.backgroundColor = 'white';
            // // }
            // }

            // if (button.checked) {
            //     event.target.labels[0].style.color = 'yellow';
            //     event.target.style.backgroundColor = 'yellow';
            // }

            // if (button.checked) {
            //     event.target.labels[0].style.color = 'red';
            //     event.target.style.backgroundColor = 'red';
            // }






            // boucle de réinitialisation de couleur (pour remettre la couleur initiale)
            for (let btn of radio) {
                btn.labels[0].style.color = "";
            }








            // correction : 

                // if (button.checked) {
                    switch (event.target.value) {
                        case "acquis" : 
                            event.target.labels[0].style.color = "green"
                            break;
                        case "enCours" : 
                            event.target.labels[0].style.color = "orange"
                            break;
                        case "nonAcquis" : 
                            event.target.labels[0].style.color = "red"
                            break;
                    }   
                    // event.target.labels[0].style.backgroundColor = "#f0f0f0";
                // }

        });

};






// Version boucles





// let radios = document.getElementsByName('niveau');

// for (let button of radios) {
//     button.addEventListener('change', (event) => {
//         // Réinitialiser les styles pour tous les boutons
//         radios.forEach(radio => {
//             let label = radio.labels[0];
//             label.style.color = 'black';
//             label.style.backgroundColor = 'white';
//         });

//         // Appliquer les styles au bouton sélectionné
//         if (button.checked) {
//             let label = event.target.labels[0];
//             switch (event.target.value) {
//                 case "acquis":
//                     label.style.color = "green";
//                     break;
//                 case "enCours":
//                     label.style.color = "orange";
//                     break;
//                 case "nonAcquis":
//                     label.style.color = "red";
//                     break;
//             }
//             label.style.backgroundColor = "#f0f0f0";
//         }
//     });
// }



