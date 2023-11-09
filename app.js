//Selectors
const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".task-filter");

//Event Listeners
todoButton.addEventListener("click", addTask);
todoList.addEventListener("click", deleteOrCheck);
filterOption.addEventListener("click", filterTasks);

//Functions
function addTask(e){
  //Prevent form from submiting
  e.preventDefault();
  //Create DIV in todo-list
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("task");
  //Create Li in todo-list
  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
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
  //Clear Todo Input value
  todoInput.value = "";
}

function deleteOrCheck(e){
  const item = e.target;
  //Delete Task
  if(item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function(){
      todo.remove();
    })
    
  }
  //Check Mark
  if(item.classList[0] === "mark-btn") {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTasks(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains("completed")){
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains("completed")){
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  })
}