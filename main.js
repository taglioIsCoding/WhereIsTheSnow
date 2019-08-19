console.log("Start");


const APP_ID = "935da42f9e29eb12fc7af5abb263198e"
const BASE_URI= "http://api.openweathermap.org/data/2.5/forecast"
//API=http://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22

function getWeatherURI(city, countryCode, mode = "json"){
  return `${BASE_URI}?q=${city},${countryCode}&mode=${mode}&appid=${APP_ID}`
}

fetch(getWeatherURI( "Brescia", "it"))
    .then(response => response.json())
    .then(body => console.log(body))
