var buttonEl = document.querySelector('#save-task')
var taskListEl = document.querySelector('.task-list')

buttonEl.addEventListener('click', createTask)

function createTask() {
    var taskItemEl = document.createElement('li')
    taskItemEl.className = 'task-item'
    taskItemEl.textContent = 'Hello'
    taskListEl.appendChild(taskItemEl)
}