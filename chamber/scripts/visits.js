//define and get values for variables

const visitsDisplay = document.querySelector("#visits");

//Retrieve the visit value from localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

//Is this the first visit?
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'Welcome, this is your first visit!';
}

//Increase counnt of visits
numVisits++;
//new count is stored in localStorage
localStorage.setItem("visits-ls", numVisits);