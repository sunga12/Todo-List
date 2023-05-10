//  Tasks = require('../taskFunctions.js');

const tasks = new Tasks();
const newTask = tasks.addTask('task description', false);

test('addTask should add a new task to the tasks array and update the task list in the DOM', () => {
 tasks.addTask('test task', false);

 expect(tasks.tasks.length).toBe(1);
});