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

  // Create a new list item
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="task-buttons">
      <button class="complete" onclick="markComplete(this)">Complete</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  // Add to the incomplete list
  document.getElementById("incomplete").appendChild(li);
  incompleteCount++;
  updateCounts();

  // Clear the input field
  taskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentNode.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);

  // Update counts based on the list
  if (ul.id === "incomplete") {
    incompleteCount--;
  } else {
    completedCount--;
  }
  updateCounts();
}

function markComplete(button) {
  const li = button.parentNode.parentNode;

  // Move the task to the "Completed" list
  document.getElementById("done").appendChild(li);
  li.querySelector(".task-buttons .complete").remove(); // Remove the "Complete" button

  // Update counts
  incompleteCount--;
  completedCount++;
  updateCounts();
}
