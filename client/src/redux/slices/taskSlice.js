import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default tasksSlice.reducer;
export const { addFilter } = tasksSlice.actions;
