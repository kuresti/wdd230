//Elements to be selected for Weather API test
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=64.8378&lon=-147.7164&appid=5fa95ece7a7bf4b6236320ad3f59cff8&units=imperial";

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);//for testing
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
   
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

   const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
   const desc1 = weatherData.weather[0].description;

    // The commented section shows how I might code and display the results of multiple weather events. The code throws an error because there is not more than one weather event in the array
    //const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.weather[1].icon}.png`;
    //const desc2 = weatherData.weather[0].description;


    const newDesc1 = desc1.split(" ").reduce((total, word) => total + word.charAt(0).toUpperCase() + word.substring(1) + " ","").trim();

    //const newDesc2 = desc2.split(" ").reduce((total, word) => total + word.charAt(0).toUpperCase() + word.substring(1) + " ","").trim();  

    weatherIcon.setAttribute('src', iconsrc1);
    //weatherIcon.setAttribute('src', iconsrc2);
    weatherIcon.setAttribute('alt', newDesc1);
    //weatherIcon.setAttribute('alt', newDesc2);
    captionDesc.textContent = newDesc1;
    //captionDesc.textContent = newDesc2;
};

apiFetch();