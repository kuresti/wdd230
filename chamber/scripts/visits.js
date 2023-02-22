//define and get values for variables

const visitsDisplay = document.querySelector(".visits");
const nowDisplay = document.querySelector(".now");

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

//Retrieve last visit from localStorage
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls"));
//Days since last visit
if (lastVisit !== 0) {
    const daysSinceLastVisit = (Date.now() - lastVisit) / 84600000;
    const rounded = Math.round(daysSinceLastVisit);
    nowDisplay.textContent = rounded;
} else {
    nowDisplay.textContent = 'Today is the first day you visited!'
};







//var lastVisit = new Date(document.last-modified).getTime();
//let daysSinceLastVisit = (Date.now() - lastVisit) /84600000;
//let rounded = Math.round(daysSinceLastVisit);
//nowDisplay.textContent = rounded;
//localStorage.setItem("now-ls", lastVisit);