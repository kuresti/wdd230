//define and get values for variables

const visitsDisplay = document.querySelector(".visits");
const nowDisplay =document.querySelector(".now")

//Retrieve the visit value from localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

//Is this the first visit?
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'Welcome, this is your first visit!';
}

//Increase count of visits
numVisits++;
//new count is stored in localStorage
localStorage.setItem("visits-ls", numVisits);

//Days since last visit
const lastVisit = new Date(document.last-modified).getTime()
let daysSinceLastVisit = (Date.now() - lastVisit) /84600000;
let rounded = Math.round(daysSinceLastVisit);
nowDisplay.textContent = rounded;
