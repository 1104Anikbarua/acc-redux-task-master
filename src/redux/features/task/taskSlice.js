import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, ...payload });
      } else {
        const element = state.tasks.at(-1);
        state.tasks.push({ id: 1 + element.id, ...payload });
      }
    },
    removeTask: () => {},
    updateStatus: () => {},
  },
});

export const { removeTask, updateStatus, addTask } = taskSlice.actions;

export default taskSlice.reducer;
