//Hamburger button navigation function
function toggleMenu(){
    document.querySelector(".primarynav").classList.toggle("open");
    document.querySelector(".hambtn").classList.toggle("open");
}


let x = document.querySelector(".hambtn")
x.addEventListener("click", toggleMenu);