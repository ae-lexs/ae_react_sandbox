import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (currentState) => {
      currentState.value += 1,
    },
    decrement: (currentState) => {
      currentState.value -= 1,
    },
    incrementByAmount: (currentState, action) => {
      currentState.value += action.payload,
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
