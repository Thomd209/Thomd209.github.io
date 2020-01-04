let tasksNumber = document.querySelector(".tasks-number");
let deleteAllTasks = document.querySelector(".delete-all-tasks");
let doneTasks = document.querySelector(".done-tasks");
let inputEnterTasks = document.querySelector(".app__create-task-input");
let btnAddTasks = document.querySelector(".app__create-task-btn");
let tasksList = document.querySelector(".app__tasks_list");

//Add task to LocalStorage

let addToLocal = () => {
    let toLocalTasksNumber = tasksNumber.innerHTML;
    localStorage.setItem("tasksNumberKey", toLocalTasksNumber);
    let toLocalDoneTasks = doneTasks.innerHTML;
    localStorage.setItem("DoneTasksKey", toLocalDoneTasks);
    let toDoListItem = tasksList.innerHTML;
    localStorage.setItem("toDoItemKey", toDoListItem);
};

deleteAllTasks.addEventListener("click", () => {
    let listItem = document.querySelectorAll(".app__list-item");
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].remove();
        tasksNumber.innerHTML = 0;
        doneTasks.innerHTML = 0;
    }

    addToLocal();
});

tasksList.addEventListener("click", (e) => {
    if (e.target.classList.contains("app__delete-btn")) {
        e.target.parentElement.remove();
        tasksNumber.innerHTML = +tasksNumber.innerHTML - 1;
        if (e.target.previousElementSibling.classList.contains("make-task")) {
            doneTasks.innerHTML = +doneTasks.innerHTML - 1;
        }
    } 
    if (e.target.classList.contains("app__listItem-text")) {
        if (e.target.classList.contains("make-task")) {
            e.target.classList.remove("make-task");
            e.target.previousElementSibling.classList.remove("done-task-icon-change");
            doneTasks.innerHTML = +doneTasks.innerHTML - 1;
        } else {
            e.target.classList.add("make-task");
            e.target.previousElementSibling.classList.add("done-task-icon-change");
            doneTasks.innerHTML = +doneTasks.innerHTML + 1;
        }
    }

    addToLocal();
});

//Add tasks use Add task button

btnAddTasks.addEventListener("click", addTask);

function addTask() {
    if (inputEnterTasks.value === "") {
        alert("Input is empty!");
    } else {
        let listItem = document.createElement("li");
        listItem.className += "app__list-item";
        let doneTaskIcon = document.createElement("span");
        doneTaskIcon.innerHTML = "&#10003;";
        listItem.append(doneTaskIcon);
        doneTaskIcon.classList += "app__done-task-icon";
        let listItemText =  document.createElement("span");
        listItemText.innerHTML = inputEnterTasks.value;
        listItemText.className += "app__listItem-text";
        listItem.append(listItemText);
        let deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "&otimes;";
        deleteBtn.className += "app__delete-btn";
        listItem.append(deleteBtn);
        tasksList.append(listItem);
        tasksNumber.innerHTML = +tasksNumber.innerHTML + 1;
    }

    addToLocal();
}

//Add tasks use "Enter" key

inputEnterTasks.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        addTask();
    }
});

//Check LocalStorage

if (localStorage.getItem("toDoItemKey")) {
    tasksList.innerHTML = localStorage.getItem("toDoItemKey");
}

if (localStorage.getItem("tasksNumberKey")) {
    tasksNumber.innerHTML = localStorage.getItem("tasksNumberKey");
}

if (localStorage.getItem("DoneTasksKey")) {
    doneTasks.innerHTML = localStorage.getItem("DoneTasksKey");
}
