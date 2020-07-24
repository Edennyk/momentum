const form = document.querySelector(".clock-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".clock-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handelSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);   //remove  and add name
    saveName(currentValue);  //stored input name
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handelSubmit);  //enter
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // not user
        askForName();

    }else{
        // user 
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();

