// variables to use for grid and list buttons
const grid = document.querySelector("#gridBtn");
const list = document.querySelector("#list");
const gridShow = document.querySelector(".grid");

// Grid button function
grid.addEventListener('click', ()=> {
    gridShow.classList.add('.grid');
    gridShow.classList.remove('.list');
});
// List button function
list.addEventListener('click', () => {
    gridShow.classList.remove('.grid');
    gridShow.classList.add('.list');
});

