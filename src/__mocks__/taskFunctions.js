import Task from '../task';


export default class Tasks {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

addTask(index, description, completed) {
  const task = new Task(index, description, completed);
  this.tasks.push(task);
  return this.tasks;
}

}