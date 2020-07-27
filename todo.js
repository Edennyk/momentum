const toDoForm = document.querySelector(".toDo-form"),
     toDoInput = toDoForm.querySelector("input"),
     toDoList = document.querySelector(".toDo-list");

const TODO_LS ='toDos';

let toDos = [];


function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDOS = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDOS;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
                                 // JS Object => string
}

function paintTodo(text){
    const li = document.createElement("li");
    const deleBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    const checkBox = document.createElement("input");
    checkBox.type = 'checkbox';
    deleBtn.innerText = "❌";
    deleBtn.addEventListener("click",deleteTodo);
    span.innerText = text;
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handelSubmit(event){
 event.preventDefault();
 const currentValue = toDoInput.value;
 paintTodo(currentValue);
 toDoInput.value = "";
}

function loadToDos(){
const loadedToDos = localStorage.getItem(TODO_LS);
if(toDos !== null){
    // convert object 
    const parsedToDos = JSON.parse(loadedToDos);

    //foreach => run function for all of items in the list
    parsedToDos.forEach(function(toDos){
        paintTodo(toDos.text);
    })
}

}

function init(){

    toDoForm.addEventListener("submit", handelSubmit);
    loadToDos();
}
init();