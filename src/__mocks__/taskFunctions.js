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
    if(this.tasks.length !== 0){

    this.tasks[index].description = task(newDescription) ;
    return this.tasks;
    }
    // this.saveTasks();
  }

  // editTask(newDescription, index) {
  //   const editedArray = this.tasks.map( (task) => {
  //     if(task.index === index) {
  //       retur
  //     }

  //   })
  // }
}
