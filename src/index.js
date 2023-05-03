import _ from 'lodash';
import './style.css';

const todoList = [
  {
    index: 1,
    description: "Mow the lawn",
    completed: false,

  }, 
  {
    index: 10,
    description: "Feed the dog",
    completed: false,

  },

  {
    index: 0,
    description: "Clean my room",
    completed: true,

  },

  {
    index: 4,
    description: "Study for 3hrs",
    completed: true,

  },
  {
    index: 5,
    description: "Go to work",
    completed: false,

  }
];

const todoUL = document.querySelector('.todo-list');

todoList.forEach((item, id) => {

  let minIndex = id;
  for(let i = id+1; i < todoList.length; i++){
    if(todoList[i].index < todoList[minIndex].index) {
      minIndex = i;
    }
  }
  if(minIndex !== id){
    [todoList[id], todoList[minIndex]] = [todoList[minIndex], todoList[id]];
  }

  // add each item to the list 
 
  const task = document.createElement('li');
  task.insertAdjacentHTML('beforeend', `<input type="checkbox" class="check-box"> ${todoList[id].description}`);
  
  // by appending it to the list
  todoUL.appendChild(task);

});

const clearAllCompleted = document.createElement('li');
clearAllCompleted.textContent = 'Clear All Completed';
clearAllCompleted.className = 'clear-all';
todoUL.appendChild(clearAllCompleted);
