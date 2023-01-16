let taskForm = document.getElementById("task-form");
let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");


taskForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let taskValue = taskInput.value;
  let taskItem = document.createElement("li");
  taskItem.innerHTML = taskValue + '<button class="complete-button">X</button>';
  taskList.appendChild(taskItem);
  taskInput.value = "";
});


taskList.addEventListener("click", function(e) {
    if (e.target.className === "complete-button") {
      let taskItem = e.target.parentNode;
      taskItem.remove();
    }
  });
  
