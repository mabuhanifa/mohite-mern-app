import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const filterSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export default filterSlice.reducer;
export const { addTask, deleteTask } = filterSlice.actions;
