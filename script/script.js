let tasks = JSON.parse(tasksJSON);

// function for printing the cards

function updateHTML() {
  for (let course of tasks) {
    document.getElementById("task_content").innerHTML += `
  <div>
    <div class="task_info">
    <button>Task</button>
    <div><img src="./images/${course.img}" width="100%"></div>
    <p style="text-align: center; font-size: 20px"><b>${course.task}</b></p>
    <p>${course.description}</p>
    <hr>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
     <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
    </svg>
    Priority level: <button type="submit" class="btn_prio ${course.btn_prio_color}"><span class="prio_amount">${course.priority}</span></button><br>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
    </svg>
    Deadline: ${course.deadline}
    <hr>
    <button type="submit" class="btn_done bg-success">Done</button>
    <button type="submit" class="btn_delete bg-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg> Delete</button>
    <br>
</div>
`;
  }
}

// function for the priority level

function prio(i) {
  if (tasks[i].priority < 5) {
    tasks[i].priority++;
    document.getElementsByClassName("prio_amount")[i].innerHTML =
      tasks[i].priority;
  }
}

// function for the on click event
// adds +1 to priority and changes the color for the priority

function addEvent() {
  let btn_prios = document.getElementsByClassName("btn_prio");

  for (let i = 0; i < btn_prios.length; i++) {
    btn_prios[i].addEventListener("click", function () {
      if (tasks[i].priority >= 0) {tasks[i].btn_prio_color = "bg-success"};
      if (tasks[i].priority >= 1) {tasks[i].btn_prio_color = "bg-warning"};
      if (tasks[i].priority >= 3) {tasks[i].btn_prio_color = "bg-danger"};
      prio(i);
      document.getElementById("task_content").innerHTML = "";
      updateHTML();
      addEvent();
    });
  }
}

// on click of btn_sort execute the function for sorting the priority level (high to low)

document.getElementById("btn_sort").onclick = sortByPrio;

function sortByPrio() {
  tasks.sort((a, b) => b.priority - a.priority);
  document.getElementById("task_content").innerHTML = "";
  updateHTML();
  addEvent();
}

updateHTML();
addEvent();