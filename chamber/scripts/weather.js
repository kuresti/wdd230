//Variables to hold weather information
const currentTemp = document.querySelector(".temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windSpeed = document.querySelector(".wind");

// Variable to hold the url for openweathermap.org
const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.19118&lon=-111.528&appid=5fa95ece7a7bf4b6236320ad3f59cff8&units=imperial";

//Asynchronous function to fetch data from openweather
async function apiFetch() {
    try{
     const response = await fetch(url);
     if (response.ok) {
         const data = await response.json();
         //console.log(data); //for testing
         displayResults(data);
     } else {
         throw Error(await response.text());
     }
    }catch (error){
     console.log(error);
    }
 }

function displayResults(weatherData) {
   
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>℉`;

    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>mph`

    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc1 = weatherData.weather[0].description;

    const newDesc1 = desc1.split(" ").reduce((total, word) => total + word.charAt(0).toUpperCase() + word.substring(1) + " ","").trim();

    weatherIcon.setAttribute('src', iconsrc1);
    weatherIcon.setAttribute('alt', newDesc1);
    captionDesc.textContent = newDesc1;
}
    
         



apiFetch();

