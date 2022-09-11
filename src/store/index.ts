
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootRedux from './rootRedux';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { sagaWatcher } from './sagas';


/*
export const saga = createSagaMiddleware()
export const store = createStore(rootRedux,
   composeWithDevTools(
      applyMiddleware(thunk, saga),
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
)
saga.run(sagaWatcher)*/

