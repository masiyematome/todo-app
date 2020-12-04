//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFooter = document.querySelector(".todo-footer");

//Event Listeners

todoButton.addEventListener("click", addTask);
todoList.addEventListener("click", deleteOrMark);

//Functions

/*Add a new task*/

function addTask() {

    if (todoInput.value == "") {
        alert("You can not add an empty task");
    }

    else {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        const todoText = document.createElement("li");
        todoText.classList.add("todo-text");
        todoText.innerText = todoInput.value;
        todoItem.appendChild(todoText);
        tasksLocalStorage(todoInput.value);

        const trashButton = document.createElement("button");
        trashButton.classList.add("trash-button");
        trashButton.innerHTML = '<i class = "fa fa-trash"></i>';
        todoItem.appendChild(trashButton);

        todoList.appendChild(todoItem);
        todoInput.value = "";

        todoFooter.style.display = "block";

    }

}

/*Delete or checked the seleted item */

function deleteOrMark(ev) {
    const clicked = ev.target;

    if (clicked.classList[0] == "trash-button") {
        const todo = clicked.parentElement;
        todo.classList.add("fall");

        todo.addEventListener("transitionend", () => {
            todo.remove();
        })
    }

    else {
        const todo = clicked.parentElement;
        todo.classList.toggle("checked");
    }

}

/*Save the tasks to a local storage */

function tasksLocalStorage(task){

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }

    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    
}