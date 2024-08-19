let p = document.querySelector("p");
let boton = document.querySelector("button");

p.style.display = "none";

boton.addEventListener("click", function () {
    if (p.style.display === "block") {
        p.style.display = "none";
    } else { 
        p.style.display = "block";
    }
});