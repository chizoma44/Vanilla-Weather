function displayWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=b400ae3b711a616262d18b0ca2cbe78f&units=metric";

https: axios.get(apiUrl).then(displayWeather);

//"b400ae3b711a616262d18b0ca2cbe78f";
//"https://api.openweathermap.org/data/2.5/weather?q=London&appid=b400ae3b711a616262d18b0ca2cbe78f&units=metric";
