console.log("Start");


const APP_ID = "935da42f9e29eb12fc7af5abb263198e"
const BASE_URI= "http://api.openweathermap.org/data/2.5/forecast"
//API=http://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22
//Link icone : http://openweathermap.org/img/wn/10d@2x.png

//ricava il posto dell'API e le previsioni
function getWeatherURI(city, countryCode, mode = "json"){
  return `${BASE_URI}?q=${city},${countryCode}&mode=${mode}&appid=${APP_ID}`
}

var mymap = undefined
let previsioni =  [] //una lista
let suggestions = [] // un altra lista

fetch(getWeatherURI( "Borno", "it"))
    .then(response => response.json())
    .then(body => { //console.log(body.city.coord)


      console.log (body.list[0].weather )

      body.list.forEach(p => {
        let previsione = {
             codice: p.weather.id
        }

        previsioni.push(previsione)

      })

      console.log(previsioni)

      const { lat , lon } = body.city.coord //assegno il valore di lat e lon a due variabili con lo stesso nome

      mymap =  L.map('mapid').setView([ lat , lon], 13);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      	maxZoom: 18,
      	id: 'mapbox.streets',
      	accessToken: 'pk.eyJ1IjoidGFnbGlvaXNjb2RpbmciLCJhIjoiY2p6anUzZHoxMGR0cTNscWE2ZHFwN3EzbyJ9._JJVq3peR2ykjC9RvV0yNw'
      }).addTo(mymap);
      var marker = L.marker([ lat , lon ]).addTo(mymap);

    }
    )
