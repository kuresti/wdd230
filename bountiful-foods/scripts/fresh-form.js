//Variable that contains the URL for fruit
const urlFruit = "https://brotherblazzard.github.io/canvas-content/fruit.json";

//Asynchronous function to fetch data from json source
async function getFruitData() {
  try {
    const response = await fetch(urlFruit);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); //For testing
      displayFruit(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
//List to hold the array from fruit data
const fruits = [];
//---Function to display dataset in selector buttons of fruit order form
function displayFruit(data) {
  //---Selects the three selector inputs of the form
  const selectFruit1 = document.querySelector("#select-fruit1");
  const selectFruit2 = document.querySelector("#select-fruit2");
  const selectFruit3 = document.querySelector("#select-fruit3");

  //---Loops through the data to create datasets for the select inputs
  for (let i = 0; i < data.length; i++) {
    const option = data[i];
    fruits.push(option);
    const optionElement = document.createElement("option");
    optionElement.textContent = option.name;
    optionElement.value = option.name;

    //option.classList.add("fruits");

    selectFruit1.appendChild(optionElement);
    selectFruit2.appendChild(optionElement.cloneNode(true));
    selectFruit3.appendChild(optionElement.cloneNode(true));
    
  }
}

//console.log(fruits); //For testing
const submitBtn = document.querySelector(".order");

//--Event listener to handle form submission
submitBtn.addEventListener("click", (event) => {
  
    event.preventDefault();
  
  let totalDrinks = Number(window.localStorage.getItem("drinks-lc"));

  //--Total Drinks ordered
  totalDrinks++;

  //--Store drinks ordered in local storage
  localStorage.setItem("drinks-lc", totalDrinks);

  //Date function
  const date = orderDate();

  //--Get id's from the DOM to hold the form information
  const selectFruit1 = document.querySelector("#select-fruit1").value;
  const selectFruit2 = document.querySelector("#select-fruit2").value;
  const selectFruit3 = document.querySelector("#select-fruit3").value;
  const firstName = document.querySelector("#firstName").value;  
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phNumber").value;
  const textArea = document.querySelector("#instructions").value;
  const orderSubmission = document.querySelector(".order-submission");

  //Create Elements 
  const orderTitle = document.createElement("h2");
  const oDate = document.createElement("h3");
  const oDateP =document.createElement("p")
  const fName = document.createElement("h3");
  const fNameP = document.createElement("p");
  const oEmail = document.createElement("h3");
  const orderEmailP = document.createElement("p");
  const orderPhone = document.createElement("h3");
  const orderPhoneP = document.createElement("p");
  const orderTextArea = document.createElement("h3");
  const orderTextAreaP = document.createElement("p");
  const orderFruitName = document.createElement("h3");
  //--Add classes to elements
  oDate.classList.add("orderDate");
  orderTitle.classList.add("orderTitle");
  fName.classList.add("fName");
  oEmail.classList.add("orderEmail");
  orderPhone.classList.add("orderPhone");
  orderTextArea.classList.add("spclInstruct");

  //Create Text for card
  orderTitle.textContent = `Your Juice Order`;
  oDate.textContent = `Today: `;
  oDateP.textContent = `${date}`;
  fName.textContent = `First Name: `;
  fNameP.textContent = `${firstName}`
  oEmail.textContent = `Email Address: `;
  orderEmailP.textContent = `${email}`;
  orderPhone.textContent = `Phone: `;
  orderPhoneP.textContent = `${phone}`;
  orderTextArea.textContent = `Special Intructions: `;
  orderTextAreaP.textContent = `${textArea}`;
  orderFruitName.textContent = `Fruit in Drink: `
  

  //object to track selected fruit
  function createCard() {
    const card = document.createElement("section");
    const selectedFruits = [
      selectFruit1.toString(),
      selectFruit2.toString(),
      selectFruit3.toString(),
    ];
     //--builds the card that displays the order information
     card.appendChild(orderTitle);
     card.appendChild(oDate);
     card.appendChild(oDateP);
     card.appendChild(fName);
     card.appendChild(fNameP);
     card.appendChild(oEmail);
     card.appendChild(orderEmailP);
     card.appendChild(orderPhone);
     card.appendChild(orderPhoneP);
     card.appendChild(orderTextArea);
     card.appendChild(orderTextAreaP);
     card.appendChild(orderFruitName);
    
    //console.log(selectedFruits);
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalSugar = 0;
    let totalCalories = 0;
    let totalFat = 0;
    //--for loop to compare and match info from the fruits list to the fruit selected on the form.
    selectedFruits.forEach((selectedFruit) => {
      //console.log(selectedFruit);
      let fruit = selectedFruit.toLowerCase().trim();
      fruits.forEach((f) => {
        if (f.name.trim().toLowerCase() == fruit) {
          fruit = f;
        }
      });

      const fruitName = document.createElement("p");
      fruitName.classList.add("fruitName")
      totalCarbs += fruit.nutritions.carbohydrates;
      totalProtein += fruit.nutritions.protein;
      totalSugar += fruit.nutritions.sugar;
      totalCalories += fruit.nutritions.calories;
      totalFat += fruit.nutritions.fat;
      fruitName.textContent = fruit.name;
      card.appendChild(fruitName);
    });
 
   
    //--Creates elements on the DOM to display order information    
    const carbName = document.createElement("h3");
    const carbNameP = document.createElement("p")
    const calName = document.createElement("h3");
    const calNameP = document.createElement("p");
    const proName = document.createElement("h3");
    const proNameP = document.createElement("p");
    const sugName = document.createElement("h3");
    const sugNameP = document.createElement("p");
    const fatName = document.createElement("h3");
    const fatNameP = document.createElement("p");
    //--Creates text for the elements created above
    
    carbName.textContent = `Total Carbohydrates: `;
    carbNameP.textContent = `${totalCarbs.toFixed()}g`;
    calName.textContent = `Total Calories: `;
    calNameP.textContent = `${totalCalories.toFixed()}`;
    proName.textContent = `Total Protein: `;
    proNameP.textContent = `${totalProtein.toFixed()}g`;
    sugName.textContent = `Total Sugar: `;
    sugNameP.textContent = `${totalSugar.toFixed()}g`;
    fatName.textContent = `Total Fat: `;
    fatNameP.textContent = `${totalFat.toFixed()}g`;
    
    //--Continues to builds the card that displays the order information   
    card.appendChild(carbName);
    card.appendChild(carbNameP);
    card.appendChild(calName);
    card.appendChild(calNameP);
    card.appendChild(proName);
    card.appendChild(proNameP);
    card.appendChild(sugName);
    card.appendChild(sugNameP);
    card.appendChild(fatName);
    card.appendChild(fatNameP);
    orderSubmission.appendChild(card);

      /*console.log(
      `Total carbohydrates: ${totalCarbs}g ${totalProtein} ${totalSugar} ${totalFat}`);*/
      
    }

  createCard();
  
});
getFruitData();

/*const name = fruit.name.trim().toLowerCase();
        if (name === selectFruit1.toLowerCase().trim() || 
            name === selectFruit2.toLowerCase().trim() || 
            name === selectFruit3.toLowerCase().trim()) {
           
            //Increment the quantity if the fruit has already been selected            
            if (selectedFruits[fruit.name] !== undefined) {
                selectedFruits[fruit.name] +=1;
            } else {
                selectedFruits[fruit.name] = 1;
            }*/
//console.log();
