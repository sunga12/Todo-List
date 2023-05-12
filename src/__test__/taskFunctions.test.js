// import { describe } from 'yargs';
import Tasks from '../__mocks__/taskFunctions.js';

const taskList = new Tasks([]);

describe('add task', () => {
  test('adds task with desc: 1st task', () => {
    taskList.addTask(1, '1st task', false);
    expect(taskList).toBeInstanceOf(Tasks);
  });

  test('adds task with desc: 2nd task', () => {
    taskList.addTask(2, '2nd task', false);
    expect(taskList.tasks.length).toBe(2);
  });

  test('Check if 2nd argument matches "3rd task"', () => {
    taskList.addTask(3, '3rd task', false);
    expect(taskList.tasks[2].description).toMatch(/3rd task/);
  });
});

describe('remove task', () => {
  test('removes task with description 1st task', () => {
    taskList.removeTask(0, 1);
    expect(taskList.tasks[1].description).toMatch(/3rd task/);
  });

  test('checks the length of the array', () => {
    taskList.removeTask(0, 1);
    expect(taskList.tasks.length).toBe(1);
  });

  test('checks the length of the array', () => {
    taskList.removeTask(0, 1);
    expect(taskList.tasks).toStrictEqual([]);
  });
});

describe('editTask', () => {
  test('should return the original tasks if the array is empty', () => {
    const tasks = new Tasks([]);
    const newDescription = 'Updated Task';
    const index = 0;
    const updatedTasks = tasks.editTask(newDescription, index);
    expect(updatedTasks).toEqual([]);
  });

  test('should return the original tasks if the index is out of bounds', () => {
    const tasks = new Tasks([{ description: 'Task 1' }]);
    const newDescription = 'Updated Task';
    const index = 2;
    const updatedTasks = tasks.editTask(newDescription, index);
    expect(updatedTasks).toEqual([{ description: 'Task 1' }]);
  });

  test('should update the task description at the given index', () => {
    const tasks = new Tasks([
      { description: 'Task 1' },
      { description: 'Task 2' },
    ]);
    const newDescription = 'Updated Task';
    const index = 1;
    const updatedTasks = tasks.editTask(newDescription, index);
    expect(updatedTasks).toEqual([
      { description: 'Task 1' },
      { description: 'Updated Task' },
    ]);
  });
});


describe('Change Status', () => {
  test('changeStatus should update the task status correctly', () => {
    const tasks = [
      { completed: false },
      { completed: false },
      { completed: false }
    ];
    const instance = new Tasks(tasks);
    const updatedTasks = instance.changeStatus(1, true);
    expect(updatedTasks[1].completed).toBe(true);
  });

  test('changeStatus should not mutate the original tasks array', () => {
    const tasks = [
      { completed: false },
      { completed: false },
      { completed: false }
    ];
    const instance = new Tasks(tasks);
    const updatedTasks = instance.changeStatus(2, true);
    expect(updatedTasks).not.toBe(instance.tasks);
  });

  test('changeStatus should return a new array with the updated task status', () => {
    const tasks = [
      { completed: false },
      { completed: false },
      { completed: false }
    ];
    const instance = new Tasks(tasks);
    const updatedTasks = instance.changeStatus(2, true);
    
    expect(updatedTasks).toEqual([
      { completed: false },
      { completed: false },
      { completed: true }
    ]);
      expect(instance.tasks).toEqual(tasks);
  });

})