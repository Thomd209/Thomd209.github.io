'use strict';

var tasks_list = document.querySelector('.app__tasks-list');
let input_tasks = document.querySelector('.js-input-task');
var create_task_btn = document.querySelector('.js-btn');

create_task_btn.addEventListener('click', function () {
    var appFooter = document.querySelector('.app__footer');
    var tasksList = document.createElement('ul');
    tasksList.className += 'app__tasks-list';
    appFooter.append(tasksList);

    var li = document.createElement('li');
    li.className += 'app__list-item';
    var span = document.createElement('span');
    span.className += 'app__list-item-content';
    span.innerHTML = input_tasks.value;
    li.append(span);

    var deleteBtn = document.createElement('span');
    deleteBtn.className += 'app__delete-btn';
    deleteBtn.innerHTML = '&otimes;';
    li.append(deleteBtn);
    tasksList.append(li);

    var allTasks_info = document.querySelector('.js-all-tasks');
    allTasks_info.innerHTML = +allTasks_info.innerHTML + 1;
    span.addEventListener('click', doneTask);
    deleteBtn.addEventListener('click', deleteTask);
});

function addToLocal () {
    let todo = tasks_list.innerHTML;
    localStorage.setItem('tasks', todo);
}

input_tasks.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        var li = document.createElement('li');
        li.className += 'app__list-item';

        var span = document.createElement('span');
        span.className += 'app__list-item-content';
        span.innerHTML = input_tasks.value;
        li.append(span);
        
        var deleteBtn = document.createElement('span');
        deleteBtn.className += 'app__delete-btn';
        deleteBtn.innerHTML = '&otimes;';
        li.append(deleteBtn);
        
        tasks_list.append(li);
        addToLocal();
        let allTasks_info = document.querySelector('.js-all-tasks');
        allTasks_info.innerHTML = +allTasks_info.innerHTML + 1;
        span.addEventListener('click', doneTask);
        deleteBtn.addEventListener('click', deleteTask);
    }
});

if (localStorage.getItem('tasks')) {
    tasks_list.innerHTML = localStorage.getItem('tasks');
}

function doneTask() {
    this.classList.toggle('doneTask');
    var doneTasks = document.querySelector('.js-done-tasks');
    if (this.classList.contains('doneTask')) {
        doneTasks.innerHTML = +doneTasks.innerHTML + 1;
    } else {
        doneTasks.innerHTML = +doneTasks.innerHTML - 1;
    }
};

function deleteTask() {
    this.parentElement.style.display = 'none';
    var allTasks_info = document.querySelector('.js-all-tasks');
    allTasks_info.innerHTML = +allTasks_info.innerHTML - 1;
};

var deleteAllTasks = document.querySelector('.js-delete-all-tasks');
deleteAllTasks.addEventListener('click', function () {
    var tasksList = document.querySelectorAll('.app__tasks-list');
    tasksList.forEach(function (listItem) {
        localStorage.clear();
        
        listItem.remove();
    });

    var allTasks_info = document.querySelector('.js-all-tasks');
    allTasks_info.innerHTML = 0;
    var doneTasks = document.querySelector('.js-done-tasks');
    doneTasks.innerHTML = 0;
});