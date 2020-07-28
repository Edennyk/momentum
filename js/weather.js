const container = document.querySelector(".weather-container");
//   locationIcon = document.querySelector('.weather-icon');

const COORDS = 'coords';
const API_KEY = '7feccdabe99537b1615293d551b59446';
const IMG_BASE_URL = "http://openweathermap.org/img/wn/";

function getWeatherImg(imgName) {
    const imgSrc = `${IMG_BASE_URL}${imgName}@2x.png`;
    const img = document.createElement("img");
    img.alt = imgName;
    img.src = imgSrc;
    return img;
  }

function getWeather(lat, lon){
    // get date 
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {

          const locationWeather = json.weather[0].main;
        //   const iconCode = json.weather[0].icon;
        //   const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
          const temperature = json.main.temp;
          const place = json.name;

        //   locationIcon.innerHTML = ("<img src='"+ iconUrl +"'>");
          container.innerText = `${locationWeather} ${Math.round(temperature)}°C ${place}`;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        // latitude: latitude,
        // longitude: longitude
         // key and value name same 
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handelGeoError(){
    console.log("Can't access geo location");
}

// get location in web page
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handelGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();