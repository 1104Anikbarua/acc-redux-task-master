import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: {},
};
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    removeTask: () => {},
    updateStatus: () => {},
  },
});

export const { removeTask, updateStatus } = taskSlice.actions;

export default taskSlice.reducer;
