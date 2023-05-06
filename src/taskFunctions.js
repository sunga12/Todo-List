import Task from './task';
import menu from './assets/images/menu.svg';
import { constant } from 'lodash';

export default class Tasks {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  addTask(description, completed) {
  
    const index = this.tasks.length + 1;

    // creat a new Task
    const newTask = new Task(index, description, completed);

    // select the UL
    const todoList = document.querySelector('.todo-list');

    // add it to the end of the array
    this.tasks.push(newTask);

    // reset the list to empty 
    todoList.innerHTML = '';

    // reload the list to display updated
    this.loadTasks();
  }


  removeTask(indexToRemove) {
    // remove the 1 task with given index
    this.tasks.splice(indexToRemove, 1);

    // counter to count through array
    let counter = 1;

    // give each task a new index

    this.tasks.forEach((task) => {
      task.index = counter;
      counter = counter+1;
    })

    const todoList = document.querySelector('.todo-list');

    // reset the list to empty 
    todoList.innerHTML = '';

    // reload the list to display updated
    this.loadTasks();  
  }

  loadTasks() {
    const todoList = document.querySelector('.todo-list');

    this.tasks.forEach((task) => {
      const taskLi = document.createElement('li');
      const taskDiv = document.createElement('div');
      const check = document.createElement('input');
      const taskDesc = document.createElement('input');
      const deleteIcon = document.createElement('img');

      taskDiv.className = 'task-div';
      taskDesc.className = 'task-desc';
      deleteIcon.className = 'menu';

      check.setAttribute('type', 'checkbox');
      check.checked = task.completed;

      taskDesc.setAttribute('value', `${task.description}`);

      deleteIcon.src = menu;
      deleteIcon.setAttribute('id', `delete${task.index}`);
      
      taskDiv.appendChild(check);
      taskDiv.appendChild(taskDesc);
      taskDiv.appendChild(deleteIcon);
      taskLi.appendChild(taskDiv);
      todoList.appendChild(taskLi);
    })
  }

  editTask(description, index){
    this.tasks[index].description = description.value;
  }

  saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  retrieveTasks(){
    const savedTasks = localStorage.getItem('tasks');
    if(savedTasks){
      this.tasks = JSON.parse(savedTasks);
      this.loadTasks();
    }
  }
}


