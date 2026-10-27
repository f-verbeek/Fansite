const link = document.getElementById('mijnLink');
    link.addEventListener('click', function(event) {
        event.preventDefault();


if (link.textContent === "Klik hier om te doneren") {
    link.textContent = "Bedankt!";
}
else {
    link.textContent = "Klik hier om te doneren"; 
}
    
});


let header = document.querySelector(".header");
function veranderkleur() {
    header.innerHTML = "HI!";
    header.style.backgroundColor = "#5d1b45";
}

let knop = document.querySelector("#titel");
knop.addEventListener("click", veranderkleur );

