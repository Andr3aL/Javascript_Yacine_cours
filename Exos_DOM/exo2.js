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






