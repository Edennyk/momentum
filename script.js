const clockContainer = document.querySelector(".clock-container"),
      clockTitle = document.querySelector(".clock-title");


// get current time
function getTime(){
    const today = new Date();
    const hours = today.getHours(),
         minutes= today.getMinutes();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    // if minutes < 10 {`0${minutes}`} : ? mean if true
    // : mean else => just minutes 
}

function init(){
    getTime();
}

init();