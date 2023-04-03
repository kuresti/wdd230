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
  const selectFruit1 = document.querySelector("#selectFruit1");
  const selectFruit2 = document.querySelector("#selectFruit2");
  const selectFruit3 = document.querySelector("#selectFruit3");

  //---Loops through the data to create datasets for the select inputs
  for (i = 0; i < data.length; i++) {
    let option = data[i];
    fruits.push(option);
    //--Creates option elements for the datasets
    let optionElement1 = document.createElement("option");
    let optionElement2 = document.createElement("option");
    let optionElement3 = document.createElement("option");
    //--Creates fruitlists from the json data for the datasets
    optionElement1.textContent = option.name;
    optionElement2.textContent = option.name;
    optionElement3.textContent = option.name;
    //--Holds the key value pair of the select input
    optionElement1.value = option.name;
    optionElement2.value = option.name;
    optionElement3.value = option.name;
    //console.log(optionElement1);
    //--Adds the fruit list to the option element
    selectFruit1.appendChild(optionElement1);
    selectFruit2.appendChild(optionElement2);
    selectFruit3.appendChild(optionElement3);
  }
}

//console.log(fruits); //For testing
const submitBtn = document.querySelector("#order");

//--Event listener to handle form submission
submitBtn.addEventListener("click", (event) => {
    //Check if all required fields are filled
    if (!checkRequiredFields()) {
        //Prevent the form from submitting
        event.preventDefault();
    }
  

  let totalDrinks = Number(window.localStorage.getItem("drinks-lc"));
  
  //--Total Drinks ordered
  totalDrinks++;

  //--Store drinks ordered in local storage
  localStorage.setItem("drinks-lc", totalDrinks);

  
  
  
  



  //Date function
  const date = orderDate();

  //--Get id's from the DOM to hold the form information
  const selectFruit1 = document.querySelector("#selectFruit1").value;
  const selectFruit2 = document.querySelector("#selectFruit2").value;
  const selectFruit3 = document.querySelector("#selectFruit3").value;
  const firstName = document.querySelector("#firstName").value;  
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phNumber").value;
  const textArea = document.querySelector("#instructions").value;
  const orderSubmission = document.querySelector(".order-submission");

  //Create Elements 
  const orderTitle = document.createElement("h2");
  const oDate = document.createElement("p");
  const fName = document.createElement("p");
  const orderEmail = document.createElement("p");
  const orderPhone = document.createElement("p");
  const orderTextArea = document.createElement("p");
  //--Add classes to elements
  oDate.classList.add("orderDate");
  orderTitle.classList.add("orderTitle");
  fName.classList.add("fName");
  orderEmail.classList.add("orderEmail");
  orderPhone.classList.add("orderPhone");
  orderTextArea.classList.add("spclInstruct");

  //Create Text for card
  orderTitle.textContent = `Your Juice Order`;
  oDate.textContent = `Today: ${date}`;
  fName.textContent = `First Name: ${firstName}`;
  orderEmail.textContent = `Email: ${email}`;
  orderPhone.textContent = `Phone: ${phone}`;
  orderTextArea.textContent = `Special Intructions: ${textArea}`;
  

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
    card.appendChild(fName);
    card.appendChild(orderEmail);
    card.appendChild(orderPhone);
    card.appendChild(orderTextArea);
    
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
    const carbName = document.createElement("p");
    const calName = document.createElement("p");
    const proName = document.createElement("p");
    const sugName = document.createElement("p");
    const fatName = document.createElement("p");
    //--Creates text for the elements created above
    
    carbName.textContent = `Total Carbohydrates: ${totalCarbs.toFixed()}g`;
    calName.textContent = `Total Calories: ${totalCalories.toFixed()}`;
    proName.textContent = `Total Protein: ${totalProtein.toFixed()}g`;
    sugName.textContent = `Total Sugar: ${totalSugar.toFixed()}g`;
    fatName.textContent = `Total Fat: ${totalFat.toFixed()}g`;
    
    //--Continues to builds the card that displays the order information   
    card.appendChild(carbName);
    card.appendChild(calName);
    card.appendChild(proName);
    card.appendChild(sugName);
    card.appendChild(fatName);
    orderSubmission.appendChild(card);

      /*console.log(
      `Total carbohydrates: ${totalCarbs}g ${totalProtein} ${totalSugar} ${totalFat}`);*/
      
    }
  
  createCard();

  
  
  
  
  
  
  //--Creates text for order info
  
 
 
  orderEmail.textContent = `Email: ${email}`;
  orderPhone.textContent = `Phone #: ${phone}`;
  orderTextArea.textContent = `Special Instructions: ${textArea}`;
  //--Assign info to card
  

 
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
