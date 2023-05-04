import './style.css';
import menu from './assets/images/menu.svg';
import refresh from './assets/images/refresh.svg';
import enter from './assets/images/enter-add.svg';

const todoList = [
  {
    index: 1,
    description: 'Mow the lawn',
    completed: false,

  },
  {
    index: 10,
    description: 'Feed the dog',
    completed: false,

  },

  {
    index: 0,
    description: 'Clean my room',
    completed: true,

  },

  {
    index: 4,
    description: 'Study for 3hrs',
    completed: true,

  },
  {
    index: 5,
    description: 'Go to work',
    completed: false,

  },
];

const todoUL = document.querySelector('.todo-list');
const todoTitle = document.querySelector('.todo-title');
const addToList = document.querySelector('.add-task');

const enterIcon = document.createElement('img');
const refreshIcon = document.createElement('img');

refreshIcon.src = refresh;
enterIcon.src = enter;

refreshIcon.className = 'refresh';
enterIcon.className = 'enter';

todoTitle.appendChild(refreshIcon);
addToList.appendChild(enterIcon);

todoList.forEach((item, id) => {
  let minIndex = id;
  for (let i = id + 1; i < todoList.length; i += 1) {
    if (todoList[i].index < todoList[minIndex].index) {
      minIndex = i;
    }
  }
  if (minIndex !== id) {
    [todoList[id], todoList[minIndex]] = [todoList[minIndex], todoList[id]];
  }

  // add each item to the list

  const task = document.createElement('li');
  task.insertAdjacentHTML('beforeend', `<input type="checkbox" class="check-box"> ${todoList[id].description}`);
  const taskMenu = document.createElement('img');
  taskMenu.src = menu;
  taskMenu.className = 'menu';
  task.appendChild(taskMenu);
  // by appending it to the list
  todoUL.appendChild(task);
});

const clearAllCompleted = document.createElement('li');
clearAllCompleted.textContent = 'Clear All Completed';
clearAllCompleted.className = 'clear-all';
todoUL.appendChild(clearAllCompleted);
