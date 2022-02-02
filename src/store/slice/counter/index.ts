/* eslint no-param-reassign: "off" */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (currentState) => {
      currentState.value += 1;
    },
    decrement: (currentState) => {
      currentState.value -= 1;
    },
    incrementByAmount: (currentState, { payload }: PayloadAction<number>) => {
      currentState.value += payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCounterValue = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
