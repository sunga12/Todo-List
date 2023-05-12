// import { describe } from 'yargs';
import Tasks from '../__mocks__/taskFunctions.js';
// import { test } from 'node:test';

const taskList = new Tasks([]);

// const editTestArray = new Tasks([{index: 4, description: '4th task', completed: false}, {index: 5, description: '5th task', completed: false}, {index: 6, description: '6th task', completed: false} ])

// const editTestArray = [
//   { index: 4, description: '4th task', completed: false },
//   { index: 5, description: '5th task', completed: false },
//   { index: 6, description: '6th task', completed: false },
// ];

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

const lastArray = new Tasks([
  { index: 4, description: '4th task', completed: false },
  { index: 5, description: '5th task', completed: false },
  { index: 6, description: '6th task', completed: false },
]);

const newArray = new Tasks ([
  { index: 4, description: '7th task', completed: true },
  { index: 5, description: '5th task', completed: false },
  { index: 6, description: '6th task', completed: false },
]);

describe('edit task', () => {
  test('edit the task description to be ', () => {
    lastArray.editTask('1st edited task', 4)
    expect(lastArray[0]).toBe(newArray[0]);
  })
})