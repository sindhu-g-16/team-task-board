function addTask() {
    const task = prompt("Enter a task:");

    if (task) {
        const taskList = document.getElementById("tasklist");

        const li = document.createElement("li");
        li.textContent = task;

        li.onclick = function () {
            li.classList.toggle("completed");
        };

        taskList.appendChild(li);
    }
}