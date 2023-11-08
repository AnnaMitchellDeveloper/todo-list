//Selectors
const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".btn");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTask)

//Functions
function addTask(e){
  //Prevent form from submiting
  e.preventDefault();
  //Create DIV in todo-list
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("task");
  //Create Li in todo-list
  const todoLi = document.createElement("li");
  todoLi.innerText = "New task";
  todoLi.classList.add("task-item");
  //Connect Div task with Li
  todoDiv.appendChild(todoLi);
  //Create Mark Button
  const markButton = document.createElement("button");
  markButton.innerHTML = `<i class="fas fa-check"></i>`;
  markButton.classList.add("mark-btn");
  // Connect Div task with Mark Button
  todoDiv.appendChild(markButton);
  //Create Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  //Connect Div task with Trash Button
  todoDiv.appendChild(trashButton);
  //Connect Ul with Div task
  todoList.appendChild(todoDiv);
}