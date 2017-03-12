import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk'
import Route from './Config/Route';
import reducer from './Reducer';

import './css/bootstrap.css';
import './Stylesheets/Index.css';

const client = axios.create({
	baseURI : "http://192.168.1.12:3333",
	responseType : "json"
})

const middleware = [ thunk, axiosMiddleware(client)  ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}


const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);



ReactDOM.render(
  <Provider store={store}>
    {Route}
  </Provider>,
  document.getElementById('root')
);
