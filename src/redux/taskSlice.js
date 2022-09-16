import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [{id: 0, detail: {title: "Tarea 1", description: "Tarea 1 inicializada en el store de redux."}}],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.length + 1,
        detail: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
