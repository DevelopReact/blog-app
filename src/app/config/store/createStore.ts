//redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
//saga
import { rootSaga } from './rootSaga';
//reducers
import { postReducer } from '@/entities/post';

const sagaMiddleware = createSagaMiddleware();

export const createReduxStore = () => {
  const reducers = {
    post: postReducer
  };

  const rootReducer = combineReducers(reducers);
  // @ts-expect-error
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
