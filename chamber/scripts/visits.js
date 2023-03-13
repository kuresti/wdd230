//define and get values for variables

const visitsDisplay = document.querySelector(".visits");
const nowDisplay = document.querySelector(".now");

//Retrieve the visit value from localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

//Retrieve the date of last visit from localStorage
const lastVisit = window.localStorage.getItem('date-ld');

// set the last visite date in locatStorage
localStorage.setItem("date-ld", new Date());


//Increase count of visits
numVisits++;

//new count is stored in localStorage
localStorage.setItem("visits-ls", numVisits);

//Is this the first visit?
if (numVisits !== 1) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'Welcome, this is your first visit!';
}




//function to calculate the number of days since the last visit
function daysSinceLastVisit(){
    if (!lastVisit) {
        return 0;
    }

    const today = new Date();    
    const difference = today - new Date(lastVisit);
    const numDaysSinceLastVisit = Math.round(difference/86400000);
    //console.log(lastVisit);
    return numDaysSinceLastVisit
    
};

if (daysSinceLastVisit() >= 1){
    document.querySelector(".dslastvisit").textContent = daysSinceLastVisit();
} else {
    document.querySelector(".dslastvisit").textContent = 0
};

    






//var lastVisit = new Date(document.last-modified).getTime();
//let daysSinceLastVisit = (Date.now() - lastVisit) /84600000;
//let rounded = Math.round(daysSinceLastVisit);
//nowDisplay.textContent = rounded;
