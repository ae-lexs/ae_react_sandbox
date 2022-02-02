import { configureStore } from '@reduxjs/toolkit';

import CounterReducer from './slice/counter';

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
