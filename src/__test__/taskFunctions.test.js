const Tasks = require('../taskFunctions');
const Task = require('../task');
const menu = require('');
// asdasd

// const tasks = new Tasks();
// const newTask = tasks.addTask('task description', false);

describe('Tasks', () => {

  it('should add a new task to the tasks array', () => {
  
    const tasks = new Tasks();

    tasks.addTask('test task', false);
    const taskArray = tasks.tasks;
    expect(taskArray).toHaveLength(1);
    expect(taskArray[0].description).toEqual('test task');
   });
})
