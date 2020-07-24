const body = document.querySelector("body");

const IMG_NUMBER = 6;


function paintImg(imgNumber){
    const image = new Image();
    image.src = `/imgs/${imgNumber + 1}.jpg`;
    // +1 mean prevent number 0
    image.classList.add("bgImage");
    body.appendChild(image);
}

function getRandom(){
    const number = Math.floor(Math.random()* IMG_NUMBER);
    return number;
}

function init(){
   const randomNumber = getRandom();
   paintImg(randomNumber);
}
init();