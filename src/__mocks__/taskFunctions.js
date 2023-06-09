import Task from '../task.js';

export default class Tasks {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  addTask(index, description, completed) {
    const task = new Task(index, description, completed);
    this.tasks.push(task);
    return this.tasks;
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    return this.tasks;
  }

  editTask(newDescription, index) {
    if (this.tasks.length !== 0 && index >= 0 && index <= this.tasks.length) {
      const updatedTasks = [...this.tasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        description: newDescription,
      };
      return updatedTasks;
    }
    return this.tasks;
  }

  changeStatus(index, value) {
    const updatedTasks = [...this.tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: value,
    };
    return updatedTasks;
  }

  clearCompleted() {
    const updatedTasks = this.tasks.filter((task) => !task.completed);
    return updatedTasks;
  }

  static saveTasks(tasks) {
    const serializedTasks = JSON.stringify(tasks);
    return serializedTasks;
  }

  static retrieveTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return []; // Return an empty array if no saved tasks are found
  }
}
