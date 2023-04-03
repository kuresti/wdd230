
// Variable to hold the url for openweathermap.org
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=33.19118&lon=-111.528&appid=5fa95ece7a7bf4b6236320ad3f59cff8&units=imperial";

//Asynchronous function to fetch data from openweather
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); //for testing
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
    showError("Failed to fetch weather data. Please try again later.");
  }
}

function displayResults(weatherData) {
  const cards = document.querySelector("div.weather");

    //Create elements to add to cards
    let card = document.createElement("section");
    let title = document.createElement("h2");
    let img = document.createElement("img");
    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    let temp = document.createElement("p");
    let windSpeed = document.createElement("p");
    let windChill = document.createElement("p");
    let tempSpan = document.createElement("span");
    let speedSpan = document.createElement("span");
    let chillSpan = document.createElement("span");
    let line = document.createElement("hr");

    //Add a class and  to the section and <p> elements
    tempSpan.classList.add("temp");
    speedSpan.classList.add("wind");
    chillSpan.classList.add("wind-chill");
    card.classList.add("weather-card");

    //Build content of the card
    title.textContent = `San Tan Valley Weather`;
    temp.textContent = `Temperature: `;
    tempSpan.textContent = `${weatherData.main.temp.toFixed(
      0
    )}℉`;
    windSpeed.textContent = `Wind Speed: `;
    speedSpan.textContent = `${weatherData.wind.speed.toFixed(
      0
    )}mph`;
    windChill.textContent = `Wind Chill:`;

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
    //Build image figure and fig caption by set all attributes
    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    
    img.setAttribute("src", iconsrc1);
    img.setAttribute("alt", "Weather Icon");

    //Append section card with the elements created
    cards.appendChild(card);
    card.appendChild(title);
    card.appendChild(line);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    card.appendChild(figure);
    temp.appendChild(tempSpan);
    card.appendChild(temp);
    windSpeed.appendChild(speedSpan);
    card.appendChild(windSpeed);
    windChill.appendChild(chillSpan);
    card.appendChild(windChill);
    
    updateWindChill();   
  };

  function updateWindChill() {
    const temp1 = document.querySelector(".temp");
    const speed1 = document.querySelector(".wind");
    const chill = document.querySelector(".wind-chill");
    
    let temp2 = parseInt(temp1.textContent);
    let speed2 = parseInt(speed1.textContent);
    
    let factor = 0;
    
    if (temp2 <= 50 && speed2 > 3) {
      let factor =
        35.74 +
        0.6215 * temp2 -
        35.75 * speed2 ** 0.16 +
        0.4275 * temp2 * speed2 ** 0.16;
    
      factor = Math.round(factor).toString();
      chill.innerText = factor;
    } else {
      chill.innerText = "NA";
    }
    }


apiFetch();

