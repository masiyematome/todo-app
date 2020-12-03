//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener("click",addTask);
todoList.addEventListener("click",deleteOrMark);

//Functions

function addTask(){

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const todoText = document.createElement("li");
    todoText.classList.add("todo-text");
    todoText.innerText = "I am a text so please respect me";
    todoItem.appendChild(todoText);

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.innerHTML = '<i class = "fa fa-trash"></i>';
    todoItem.appendChild(trashButton);
    
    todoList.appendChild(todoItem);

}

function deleteOrMark(ev){
    const clicked = ev.target;

    if(clicked.classList[0] == "trash-button"){
        const todo = clicked.parentElement;
        todo.remove();
    }

    else{
        console.log("I will be marked");
    }

}