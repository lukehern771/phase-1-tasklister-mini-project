document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.querySelector('form')
  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newToDo = e.target['new-task-description'].value
    buildToDo(newToDo); newTaskForm.reset()
  })
});

function buildToDo(newToDo){
  let taskLi = document.createElement('Li');
  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'x'
  taskLi.textContent = `${newToDo}`
  taskLi.appendChild(deleteButton);
  document.querySelector('#tasks').appendChild(taskLi);
  deleteButton.addEventListener('click', handleDelete)
}

function handleDelete(e){
  e.target.parentNode.remove();
}