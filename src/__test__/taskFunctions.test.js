import Tasks from "../__mocks__/taskFunctions";

const taskList = new Tasks([]);

//add task
describe("add task", () => {
  // const taskList = new Tasks([]);

  test("adds task with desc: 1st task", () => {
    taskList.addTask(1, "1st task", false);
    expect(taskList).toBeInstanceOf(Tasks);
  });

  test("adds task with desc: 2nd task", () => {
    taskList.addTask(2, "2nd task", false);
    expect(taskList.tasks.length).toBe(2);
  });

  test('Check if 2nd argument matches "3rd task"', () => {
    taskList.addTask(3, "3rd task", false);
    expect(taskList.tasks[2].description).toMatch(/3rd task/);
  });
});

describe("remove task", () => {
  // const taskList = new Tasks([]);

  test("removes task with description 1st task", () => {
    taskList.removeTask(0, 1);
    expect(taskList.tasks[1].description).toMatch(/3rd task/);
  });
});
