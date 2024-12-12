// alert("coucou !");

/*

   ------------------- Objectif du cours --------------------

    1- Comprendre ce qu'est le DOM.
    2- Manipuler le DOM avec javascript pour créer, sélectionner, modifier et supprimer des éléments ainsi qu'intéragir avec ces éléments.
    3- Gérer des évènements utilisateurs sur des éléments du DOM

    ---------------------------------------------------------

    1- Définition :

    Le DOM (Document Object Model) est une interface de programmation qui représente une document HTML ou XML sous forme d'une arborescence d'objets. Chaque élément HTML devient un noeud que l'on peut manipuler avec Javascript.

    Avec le DOM, nous allons pouvoir intéragir avec les utilisateurs (afin de repérer des clics sur un élément ou encore de récupérer leur nom dans un formulaire, etc).

    Structure du DOM :

    **********************************************
    <!DOCTYPE html>
    <html>
        <head>
            <title>Exemple DOM</title>
        </head>
        <body>
            <h1 id="titre">Hello DOM !</h1>
            <p class="texte">Ceci est un paragraphe.</p>
            <button id="btn">Cliquez-moi</button>
        </body>
    </html>
    
    **********************************************

    La structure du DOM du document peut être représentée ainsi : 

    document
    └─ html
        ├─ head
        │  └─ title
        └─ body
            ├─ h1 (id="titre")
            ├─ p (class="texte")
            └─ button (id="btn")

    ***********************************************

    Il faut voir le DOM comme un arbre où chaque élément peut avoir 0 ou plusieurs enfants, qui peuvent avoir eux-mêmes 0 ou plusieurs enfants...

    Dans le DOM, on commence toujours par un élément racine, qui est le point de départ du document : la balise <html>



    *** En résumé :

    Aujourd'hui les sites web sont de plus en plus intéractifs et animés. En effet, leur contenu change et évolue en continu sans avoir besoin de recharger la page. Cela vous permet d'avoir une navigation fluide et agréable.
    * Eh bien c'est le DOM qui nous permet de faire cela.

    * L'objet "document" est le point d'entrée vers mon contenu HTML.
    * CHaque page chargée dans mon navigateur a un objet "document".
    * Ex : document.write(""); -> me permet d'afficher du contenu en js dans ma page HTML.
    * 
    * "Window" est un objet qui correspond à la fenêtre dans laquelle s'affiche une page web.
    * Il est le parent de chaque objet qui compose la page web, il contient donc : 
    * 

    -> L'objet "document" : la page en elle-même
    -> L'objet "location" : le lieu de stockage de la page
    -> L'objet "history" : les pages visitées précédemment


    

*/

console.log(window); // On retrouve plein de méthodes disponibles sur l'objet window
// L'objet "window" possède des méthodes relatives à l'ouverture et à la fermeture des fenêtres.
// -> Les méthodes : alert(), confirm(), prompt()

console.log(document);

// console.log(window.document);

// console.log(window.document.location);

console.log(window.document.title);

// L'évènement "window.onload" permet de lancer la fonction seulement une fois que toute la page est chargée, ce qui fait que cette fonction, peu importe où elle est placée dans la page, sera lue seulement lorsque toute la page a été chargée.

