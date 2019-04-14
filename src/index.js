import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const root = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
