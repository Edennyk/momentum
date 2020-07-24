const APT_KEY = '7feccdabe99537b1615293d551b59446';
const COORDS = 'coords';


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
}

function handelGeoError(){

}

// get location in web page
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handelGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{

    }
}



function init(){
    loadCoords();
}
init();