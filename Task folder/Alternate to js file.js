function addTask() {
  var taskInput = document.getElementById("your_task").value.trim(); // Trim whitespace
  if (taskInput !== "") {
    var taskList = document.getElementById("task_list");

    // Get random position within viewport
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var newLeft, newTop;
    do {
      newLeft = Math.round(Math.random() * (screenWidth - taskList.offsetWidth));
      newTop = Math.round(Math.random() * (screenHeight - taskList.offsetHeight));
    } while (checkOverlap(newLeft, newTop));

    // Create new task element
    var newTask = document.createElement("li");
    newTask.textContent = taskInput;
    newTask.style.position = "fixed";
    newTask.style.left = newLeft + "px";
    newTask.style.top = newTop + "px";

    // Event listeners for changing color and removing task
    newTask.addEventListener("click", function () {
      this.style.color = "green";
    });
    newTask.addEventListener("dblclick", function () {
      this.remove();
    });

    // Append task to task list
    taskList.appendChild(newTask);

    // Clear input field
    document.getElementById("your_task").value = "";
  } else {
    alert("Please enter a task for the day.");
  }
}

// Function to check if new task position overlaps with existing tasks
function checkOverlap(newLeft, newTop) {
  var taskList = document.getElementById("task_list");
  var tasks = taskList.getElementsByTagName("li");
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var taskRect = task.getBoundingClientRect();
    if (
      newLeft >= taskRect.left && newLeft <= taskRect.right &&
      newTop >= taskRect.top && newTop <= taskRect.bottom
    ) {
      return true; // Overlap found
    }
  }
  return false; // No overlap found
}
