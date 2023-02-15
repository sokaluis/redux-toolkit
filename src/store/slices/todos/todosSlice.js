import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 10
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    increment: (state, /* action */) => {
      state.counter += 1;
    },
  }
});
// Action creators are generated for each case reducer function
export const { increment } = todosSlice.actions;