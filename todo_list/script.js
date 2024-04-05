
const tasksList = document.getElementById('tasksList');
const taskInput = document.getElementById('taskInput');
let tasks = [];

taskInput.addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();

  if (!title) {
    alert('You have to have a title')
    return;
  }

  const task = {
    id: Date.now(),
    title: title,
    description: description
  };

  tasks.push(task);
  showTasks();
  taskInput.reset();
  });

function showTasks() {

  tasksList.innerHTML = '';
  tasks.forEach(t => {
    const tElement = document.createElement('div');
    tElement.classList.add('task');
    tElement.innerHTML =  `
    <span>${t.title}</span>
    <button onclick="editTask(${t.id})">Edit</button>
    <button onclick="deleteTask(${t.id})">Delete</button>
    `;
    tasksList.appendChild(tElement);
  });
}

function editTask(id) {
  const taskToEdit = tasks.find(task => task.id === id);
  let newTitle = prompt('Enter new title:', taskToEdit.title);
  while (newTitle.trim() === '') {
    newTitle = prompt('Please enter a title: ')
  }
  if (newTitle !== null) {
    const newDescription = prompt('Enter new description:', taskToEdit.description);
    taskToEdit.title = newTitle;
    taskToEdit.description = newDescription;
    showTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  showTasks();
}

showTasks();
