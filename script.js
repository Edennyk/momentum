const clockContainer = document.querySelector(".clock-container"),
      clockTitle = document.querySelector(".clock-title");


// get current time
function getTime(){
    const today = new Date();
    const hour = today.getHours(),
         minutes= today.getMinutes();
    clockTitle.innerHTML = `${hour}:${minutes}`;
}

function init(){
    getTime();
}

init();