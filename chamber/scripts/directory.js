// variables to use for grid and list buttons
const grid = document.querySelector("#gridBtn");
const list = document.querySelector("#listBtn");
const gridShow = document.querySelector(".grid");

// Grid button function
grid.addEventListener('click', ()=> {
    gridShow.classList.add('grid');
    gridShow.classList.remove('list');
});
// List button function
list.addEventListener('click', () => {
    gridShow.classList.add('list');
    gridShow.classList.remove('grid');
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
    const cards = document.querySelector("div.grid");

    //For loop to go through the data in the json file
    companies.forEach((company) => {
        //Create elements to add to cards
        let card = document.createElement("section");
        let coInfo = document.createElement("div");
        let name = document.createElement("h3");
        let img = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");
        let membership = document.createElement("p");

        //Add a class and  to the section and <p> elements
        coInfo.classList.add("info");
        membership.classList.add("level");
        address.classList.add("address");
        phone.classList.add("phone");
        //url.classList.add("web-address");
        img.classList.add("coimg");
        name.classList.add("name");
        url.classList.add("url");

        //Set attribuite of href for a tags
        url.setAttribute("href", company.url);

    //Build the content info
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;    
    membership.textContent = `${company.membership}`;
    name.textContent = `${company.name}`;
    url.textContent = `${company.url}`;
    

    //Build the image portrait by setting all the relevant attributes
    img.setAttribute("src", company.img);
    img.setAttribute(
      "alt",
      `${company.name}`
    );
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "250");
    img.setAttribute("height", "250");

    //Append the section(card) with the created elements
    cards.appendChild(card);
    card.appendChild(img);
    coInfo.appendChild(name);
    coInfo.appendChild(address);
    coInfo.appendChild(phone);
    coInfo.appendChild(url);
    coInfo.appendChild(membership);
    card.appendChild(coInfo);
    
    });  
    
}

  getDirectoryData()