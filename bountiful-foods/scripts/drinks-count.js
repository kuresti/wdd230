//Get totalDrinks from localStorange
let numOrderedDrinks = Number(window.localStorage.getItem("drinks-lc"));

//--Write number of drinks ordered to Home page .ordered-drinks
numDrinks = document.querySelector(".ordered-drinks");

//--Create Box to hold number of Ordered Drinks
const box = document.createElement("section");
const drinksTitle = document.createElement("h2");
const drinkNum = document.createElement("p");


//--Create text for box
drinksTitle.textContent = `Number of Drinks Ordered`;
drinkNum.textContent = `Ordered Drinks: ${numOrderedDrinks}`;
//--Append information to box
box.appendChild(drinksTitle);
box.appendChild(drinkNum)
numDrinks.appendChild(box);