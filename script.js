let form = document.querySelector("form");
let newTask = document.querySelector("#new-task");
// const addTaskBtn = document.querySelector("#addTask");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");


//functions 


let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");
  let updateBtn = document.createElement("button");
  updateBtn.innerText = "Update";
  updateBtn.className = "update";

  label.innerText = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(updateBtn);
  //console.log("helllllllllllllllllllllllo");
  updateBtn.addEventListener('click',function(){
      console.log(task);
  })
  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  bindIncompleteItems(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type = "checkbox"]');
  let updateBtn = listItem.querySelector('.update');
  checkBox.remove();
  updateBtn.remove();
  completeUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};

let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindIncompleteItems = function (taskItem, checkboxclick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxclick;
};

let bindCompleteItems = function (taskItem, deleteBtnClick) {
  let deleteBtn = taskItem.querySelector(".delete");
  deleteBtn.onclick = deleteBtnClick;
};

form.addEventListener("submit", addTask);
