import reducer, { addTask, deleteTask } from "./taskSlice";

test("should return initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual([]);
});

test("should add a task", () => {
  const previousState = [];
  const newTask = {
    title: "Tarea 1",
    description: "Tarea 1 inicializada en el store de redux.",
  };
  expect(reducer(previousState, addTask({ task: newTask }))).toEqual([
    {
      detail: {
        description: "Tarea 1 inicializada en el store de redux.",
        title: "Tarea 1",
      },
      id: 1,
    },
  ]);
});

test("should delete task", () => {
  const previousState = [
    {
      id: 0,
      detail: {
        title: "Tarea 1",
        description: "Tarea 1 inicializada en el store de redux.",
      },
    },
  ];
  expect(reducer(previousState, deleteTask({id: 0}))).toEqual([])
});
