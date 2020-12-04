//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFooter = document.querySelector(".todo-footer");

//Event Listeners

todoButton.addEventListener("click", addTask);
todoList.addEventListener("click", deleteOrMark);

//Functions

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

        const trashButton = document.createElement("button");
        trashButton.classList.add("trash-button");
        trashButton.innerHTML = '<i class = "fa fa-trash"></i>';
        todoItem.appendChild(trashButton);

        todoList.appendChild(todoItem);
        todoInput.value = "";

        todoFooter.style.display = "block";

    }

}

function deleteOrMark(ev) {
    const clicked = ev.target;

    if (clicked.classList[0] == "trash-button") {
        const todo = clicked.parentElement;
        todo.remove();
    }

    else {
        const todo = clicked.parentElement;
        todo.classList.toggle("checked");
    }

}