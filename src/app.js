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
let query = "lagos";
let apiKey = "bc73f3a1b088bb524455cc62ao20tb24";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}";

https: axios.get(apiUrl).then(displayWeather);
