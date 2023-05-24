let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

// Challenge 1
let currentDate = document.querySelector("#current-day");

let date = days[now.getDay()] + " " + `${hours}` + ":" + `${minutes}`;

currentDate.innerHTML = date;

// Week 5 Homework
function getWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function loadSearch(city)
  let apiKey = "88724523008dc9e1be18f6eb6a959b67";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);

function searchLocation(position) {
  

}  

 function getCurrentWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
 } 

function citySearch(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  loadSearch(city);
}

// loadSearch("Seattle");

// // Challenge 2
// function citySearch(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-input");

//   let h1 = document.querySelector("h1");
//   h1.innerHTML = `${searchInput.value}`;
// }

// let form = document.querySelector("#search-form");
// form.addEventListener("submit", citySearch);

// // Week 5 Homework
// function getWeather(response) {
//   let currentTemp = Math.round(response.data.main.temp);
//   let temp = document.querySelector("#temp");
//   temp.innerHTML = `${currentTemp}`;
// }

// let city = document.querySelector("#search-input");
// let units = "metric";
// let apiKey = "88724523008dc9e1be18f6eb6a959b67";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=${units}`;

// axios.get(apiUrl).then(citySearch).then(getWeather);
