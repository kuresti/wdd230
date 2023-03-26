//Hamburger button navigation function
function toggleMenu(){
    document.querySelector(".primarynav").classList.toggle("open");
    document.querySelector(".hambtn").classList.toggle("open");
}


const x = document.querySelector(".hambtn")
x.onclick = toggleMenu;