const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListerner();

function loadEventListerner() {
  form.addEventListener("submit", addTask);
  filter.addEventListener("keyup", filterTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearAll);
}
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add Task !");
  } else {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);

    taskInput.value = "";
  }
  e.preventDefault();
}

function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure To Delete Item.")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearAll() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
