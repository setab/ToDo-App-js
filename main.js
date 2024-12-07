let incompleteCount = 0;
let completedCount = 0;

function updateCounts() {
  document.getElementById(
    "incompleteCount"
  ).textContent = `(${incompleteCount})`;
  document.getElementById("completedCount").textContent = `(${completedCount})`;
}

function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="task-buttons">
      <button class="complete" onclick="markComplete(this)">Complete</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  document.getElementById("incomplete").appendChild(li);
  incompleteCount++;
  updateCounts();

  taskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentNode.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);

  if (ul.id === "incomplete") {
    incompleteCount--;
  } else {
    completedCount--;
  }
  updateCounts();
}

function markComplete(button) {
  const li = button.parentNode.parentNode;

  document.getElementById("done").appendChild(li);
  li.querySelector(".task-buttons .complete").remove();

  incompleteCount--;
  completedCount++;
  updateCounts();
}
