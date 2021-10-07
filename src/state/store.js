// import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { logger } from 'redux-logger';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const st = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);


export const store = st;
