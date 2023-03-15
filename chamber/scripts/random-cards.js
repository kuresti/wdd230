// Variable that contains the pathway for directory.js
const pathway = "data/data.json"

// Asynchronous function to fetch data from jason source
async function getCompanyData() {
    const response = await fetch(pathway);
    const data = await response.json();
    //console.table(data.companies);
    //displayCompanies(data.companies);

    //Function to create a new array of silver and gold members
 const silverGoldCompanies = data.companies.filter((company) => company.membership === "Silver" || company.membership === "Gold");
//console.log(silverGoldCompanies);

//Choose three random companies from silverGoldCompanies
const randomCompanies = [];
for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * silverGoldCompanies.length); 
    const company = silverGoldCompanies[index];
    randomCompanies.push(company);
    //removes a company from the list so that it won't be repeated
    silverGoldCompanies.splice(index, 1);
}

//Display random companies in spotlight
const cards = document.querySelector(".spotlight");
randomCompanies.forEach((company) => {
    //Create elements to add to cards
    let card = document.createElement("section");
    let coInfo = document.createElement("div");
    let img = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let url = document.createElement("a");
    let name = document.createElement("h3");

    //Add a class and  to the section and <p> elements
    coInfo.classList.add("info");
    address.classList.add("address");
    phone.classList.add("phone");
    img.classList.add("coimg");
    name.classList.add("name");
    url.classList.add("url");

    //Build the content info
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    url.textContent = `${company.url}`;
    name.textContent = `${company.name}`;

    //Set attribuite of href for a tags
    url.setAttribute("href", company.url);

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
    card.appendChild(coInfo);

})
  }

getCompanyData()
