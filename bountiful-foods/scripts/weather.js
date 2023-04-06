// Variable to hold the url for openweathermap.org
const urlWeather =
  "https://api.openweathermap.org/data/2.5/weather?lat=33.15818&lon=-117.3506&appid=5fa95ece7a7bf4b6236320ad3f59cff8&units=imperial";

const urlForecast =  "https://api.openweathermap.org/data/2.5/forecast?lat=33.15818&lon=-117.3506&appid=5fa95ece7a7bf4b6236320ad3f59cff8&units=imperial";

//Asynchronous function for Weather Data
async function fetchWeather() {
    try {
      const response = await fetch(urlWeather);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); //for testing
        displayTodayWeather(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
      showError("Failed to fetch weather data. Please try again later.");
    }
  }

  //Asynchronous function for Forecast Data
  async function fetchForecast() {
    try {
      const response = await fetch(urlForecast);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); //for testing
        displayForecast(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
      showError("Failed to fetch weather data. Please try again later.");
    }
  }
  function displayTodayWeather(weatherData) {
    const wrapper = document.querySelector(".weather-wrapper");
     const cards = document.querySelector(".weather-today");

     // Create elements to add to weather-today card
     let card = document.createElement("section");
     let title = document.createElement("h2");
     let line = document.createElement("hr");
     let img = document.createElement("img");
     let figure = document.createElement("figure");
     let figcaption = document.createElement("figcaption");
     let temp = document.createElement("h3");
     let tempSpan = document.createElement("span");     
     let humidity = document.createElement("h3");
     let humiditySpan = document.createElement("span");

     //Build content of the card
     title.textContent = `Carlsbad, CA Weather`;
     temp.textContent = `Current Temperature: `;
     tempSpan.textContent = `${weatherData.main.temp.toFixed(0)}\u2109`;
     humidity.textContent = `Humidity: `;
     humiditySpan.textContent = `${weatherData.main.humidity}%`;
     const desc1 = weatherData.weather[0].description;

     const newDesc1 = desc1
       .split(" ")
       .reduce(
         (total, word) =>
           total + word.charAt(0).toUpperCase() + word.substring(1) + " ",
         ""
       )
       .trim();
     figcaption.textContent = `${newDesc1}`;

      //Build image figure and fig caption by settin all attributes
      const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      img.setAttribute("src", iconsrc1);
      img.setAttribute("alt", "Weather Icon");

      //Append section card with the elements created
      wrapper.appendChild(cards);
      cards.appendChild(card);
      card.appendChild(title);
      card.appendChild(line);
      figure.appendChild(img);
      figure.appendChild(figcaption);
      card.appendChild(figure);
      card.appendChild(temp);
      temp.appendChild(tempSpan);  
      card.appendChild(humidity);    
      humidity.appendChild(humiditySpan);
      
  };

  function displayForecast(forecastData) {
    const cards = document.querySelector(".three-day-forecast");
    const wrapper = document.querySelector(".weather-wrapper");

    //List to increment weekdays for forecast
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();

    for (let i = 1; i <= 3; i++) {
        const card = document.createElement("section");
        const day = document.createElement("h2");
        const img = document.createElement("img");
        const temp = document.createElement("h3");
        const tempSpan = document.createElement("span");
        
        //create content for card
        const dayOfWeekIndex = (today + i)%7;
        const dayOfWeek = weekdays[dayOfWeekIndex]
        temp.textContent = `Temperature: `
        tempSpan.textContent = `${forecastData.list[i].main.temp.toFixed(0)}\u2109`;
        day.textContent = dayOfWeek;

        //Build image figure by setting attributes
        const iconsrc = `https://openweathermap.org/img/w/${forecastData.list[i].weather[0].icon}.png`;
        img.setAttribute("src", iconsrc);
        img.setAttribute("alt", "Weather Icon");


        //Append section with the elements created
        cards.appendChild(card);
        wrapper.appendChild(cards);
        card.appendChild(day);
        card.appendChild(img);
        temp.appendChild(tempSpan);
        card.appendChild(temp);
        
    }
  }
fetchForecast();
fetchWeather();


