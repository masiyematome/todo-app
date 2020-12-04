//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFooter = document.querySelector(".todo-footer");

//Event Listeners

document.addEventListener("DOMContentLoaded",retrieveTasks);
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

        removeTask(todo);

        todo.addEventListener("transitionend", () => {
            todo.remove();
        })
    }

    else if(clicked.classList[0] == "todo-text"){
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

/*Get tasks from local storage and display them */

function retrieveTasks(){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }

    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        const todoText = document.createElement("li");
        todoText.classList.add("todo-text");
        todoText.innerText = task;
        todoItem.appendChild(todoText);

        const trashButton = document.createElement("button");
        trashButton.classList.add("trash-button");
        trashButton.innerHTML = '<i class = "fa fa-trash"></i>';
        todoItem.appendChild(trashButton);

        todoList.appendChild(todoItem);

        todoFooter.style.display = "block";
    })
}


/*Remove the task from the local storage */

function removeTask(task){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }

    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    const taskIndex = task.children[0].innerText;
    tasks.splice(tasks.indexOf(taskIndex),1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}