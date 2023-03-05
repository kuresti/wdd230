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

// Variable that contains the pathway for directory.js
const pathway = "data/data.json"

// Asynchronous function to fetch data from jason source
async function getDirectoryData() {
    const response = await fetch(pathway);
    const data = await response.json();
    //console.table(data.companies);
    displayCompanies(data.companies);
  }

//Function to display the json data
const displayCompanies = (companies) => {
    const cards = document.querySelector("div.cards");

    //For loop to go through the data in the json file
    companies.forEach((company) => {
        //Create elements to add to cards
        let card = document.createElement("section");
        let img = document.createElement("img");

    //Build the image portrait by setting all the relevant attributes
    img.setAttribute("src", company.img);
    img.setAttribute(
      "alt",
      `${company.name}`
    );
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "200");
    img.setAttribute("height", "250");

    //Append the section(card) with the created elements
    card.appendChild(section);
    card.appendChild(img);
    });  
    
}

  getDirectoryData()