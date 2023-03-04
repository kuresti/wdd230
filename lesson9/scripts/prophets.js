// variable that contains the URL for latter-day prophets
const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

//Asynchronous function to fetch data from json source
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards"); //select the output container element

  prophets.forEach((prophet) => {
    //create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let bDate = document.createElement("p");
    let dDate = document.createElement("p");
    let bPlace = document.createElement("p");
    let serviceLength = document.createElement("p");

    // order of prophets
      let order = prophet.order;
      let remainder = order % 10;
      let suffix = "th";
      
      if (remainder == 1 && order != 11) {
         suffix = order + "st";
      } else if  (remainder == 2 && order != 12) {
         suffix= order + "nd";
      } else  if (remainder == 3 && order != 13){
         suffix = order + "rd";
      } else{
        suffix = order + "th"
      }
    
    //filter for years of service
    const serviceYears = prophets.filter((card) => card.length >= 10);
    //console.log(serviceYears);

    //Build the h2 content out to show the prophet's full name and length of service - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    serviceLength.textContent = `Length of Service: ${prophet.length} years`;

    //build the p content out to show the prophet's birth place, and birth date, and death date
    bDate.textContent = `Birth date: ${prophet.birthdate}`;
    dDate.textContent = `Date of death: ${prophet.death}`;
    bPlace.textContent = `Birth place: ${prophet.birthplace}`;

    //Build the image portrait by setting all the relevant attributes
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} the ${suffix} prophet`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "200");
    portrait.setAttribute("height", "250");

    //Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(serviceLength);
    card.appendChild(bDate);
    card.appendChild(dDate);
    card.appendChild(bPlace);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};


getProphetData();
