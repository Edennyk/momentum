const form = document.querySelector(".click-form"),
       input = form.querySelector("input"),
       greeting = document.querySelector(".clock-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // not user
    }else{
        // user 
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();