function add_task() {
    var task_Input = document.getElementById("your_task").value;
    if (task_Input !== "") {
        var taskList = document.getElementById("task_list");

        var boxWidth = 510;
        var boxHeight = 190;
        var boxLeft = 490;
        var boxTop = 190;

        var newLeft, newTop;
        do {
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;
            newLeft = Math.round(Math.random() * (screenWidth - taskList.offsetWidth));
            newTop = Math.round(Math.random() * (screenHeight - taskList.offsetHeight));
        } while (
            newLeft >= boxLeft && newLeft <= (boxLeft + boxWidth) &&
            newTop >= boxTop && newTop <= (boxTop + boxHeight)
        );

        var newTask = document.createElement("li");
            newTask.onclick = function changeColor() {
                this.style.color = "green";
                return false;
            }
            newTask.ondblclick = function() {
                this.remove();
            }
        newTask.style.position = "fixed";
        newTask.style.left = newLeft + "px";
        newTask.style.top = newTop + "px";
        newTask.textContent = task_Input;

        taskList.appendChild(newTask);

        document.getElementById("your_task").value = "";
    } else {
        alert("Please enter a task for the day.");
    }
}
