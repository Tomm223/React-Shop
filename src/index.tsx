import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter } from 'react-router-dom'
import "./styles/allhtml.scss"
import "./styles/cataloge.scss"
import "./styles/footer.scss"
import "./styles/gender.scss"
import "./styles/header.scss"
import "./styles/index.scss"
import "./styles/item.scss"
import "./styles/kabinet.scss"
import "./styles/registration.scss"
import "./styles/reset.css"
import "./styles/vars.scss"
import PagesProvider from "./Context/PagesProvider"
import { AuthProvider } from './Context/AuthProvider'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootRedux from './store/rootRedux';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { sagaWatcher } from './store/sagas';


export const saga = createSagaMiddleware()
export const store = createStore(rootRedux,
  composeWithDevTools(
    applyMiddleware(thunk, saga),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
saga.run(sagaWatcher)



function Main() {


  return (

    <Provider store={store} >
      <BrowserRouter>
        <AuthProvider>
          <PagesProvider>
            <App />
          </PagesProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>

  )
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
