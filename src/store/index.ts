import { configureStore } from '@reduxjs/toolkit';

import CounterReducer from './slice/counter';

export default configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
