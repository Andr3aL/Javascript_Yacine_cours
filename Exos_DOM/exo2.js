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

// let divInfo = document.querySelector("#info");

// divInfo.addEventListener("mouseover", function(){
//     divInfo.style.backgroundColor = "gold";
//     divInfo.style.borderRadius = "50%";
//     divInfo.textContent = "GOLD";    
// });

toggleRectangle.addEventListener('mouseover', ()=>{
    // rectangle.classList.toggle('rectangle');
    
});

toggleRectangle.addEventListener('mouseout', ()=>{
    // rectangle.classList.toggle('rectangle');
});

let rectangle3 = document.querySelector(".rectangle3");

rectangle3.addEventListener('mouseenter', ()=>{
    rectangle3.style.backgroundColor = "red";
});

// let rectangle3 = document.querySelector(".rectangle3");

// toggleRectangle.addEventListener('mouseleave', ()=>{
//     rectangle.style.backgroundColor = "blue";
// });

let rectangle2 = document.querySelector(".rectangle2");

rectangle2.addEventListener('mouseleave', ()=>{
    rectangle2.style.backgroundColor = "blue";
});

let rectangle4 = document.querySelector(".rectangle4");

rectangle4.addEventListener('dblclick', ()=>{
    rectangle3.style.backgroundColor = "green";
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

