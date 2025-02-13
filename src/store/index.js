// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';

// Sample slice (you can modify it)
const counterSlice = {
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
};

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
export const { increment, decrement } = counterSlice.actions;