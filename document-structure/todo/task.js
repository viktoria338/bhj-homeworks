const inputField = document.getElementById('task__input');
const addBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');
const taskRemove = document.querySelectorAll('.task__remove')

function addingTask(task) {
    let taskTemplate = `<div class="task">
    <div class="task__title">
    ${task}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;

    taskList.insertAdjacentHTML('afterbegin', taskTemplate);

    inputField.value = '';
};

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputField.value.trim() != '') {
        addingTask(inputField.value);
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
      e.target.closest('.task').remove();
    }
  });