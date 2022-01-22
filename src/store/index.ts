import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import CombinedReducer from './reducer';
import CombinedSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(CombinedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(CombinedSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
