let tasks = JSON.parse(tasksJSON);
console.log(tasks);
for (let course of tasks) {
  document.getElementById("task_content").innerHTML += `
  <div>
    <div class="task_info">
    <button>Task</button>
    <div class="task_img"><img src="./images/${course.img}" width="100%"></div>
    <p style="text-align: center"><b>${course.task}</b></p>
    <p>${course.description}</p>
    <hr>
    Priority level: <span class="prio_lvl">${course.priority}</span><br>
    Deadline: ${course.deadline}<br>
    <hr>
    <button type="submit" value="success" class="btn_done bg-success">Done</button>
    <button type="submit" value="delete" class="btn_delete bg-danger">Delete</button>
    <br>
</div>
`;
}
