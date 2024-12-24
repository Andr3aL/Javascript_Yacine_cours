let toggleRectangle = document.querySelector('#toggle-rectangle');
// toggleRectangle.style.width = "300px";
// toggleRectangle.style.height = "200px";
// toggleRectangle.style.backgroundColor = "blue";

let rectangle = document.querySelector(".rectangle");
// rectangle.style.width = "300px";
// rectangle.style.height = "200px";
// rectangle.style.backgroundColor = "blue";

toggleRectangle.addEventListener('click', ()=>{
    rectangle.classList.toggle('rectangle');
});



// Autre façon de faire : 

function afficherCacher () {
    rectangle.classList.toggle("hidden");
}

function addColorChange () {
    rectangle.classList.add("rouge");
}

function removeColorChange () {
    rectangle.classList.remove("rouge");
}

function addColorChangeGreen () {
    rectangle.classList.add("vert");
}

function removeColorChangeGreen () {
    rectangle.classList.remove("vert");
}

button.addEventListener("click", afficherCacher);
rectangle.addEventListener("mouseover", addColorChange);
rectangle.addEventListener("mouseout", removeColorChange);
rectangle.addEventListener("dblclick", addColorChangeGreen);
rectangle.addEventListener("mouseout", removeColorChangeGreen);

