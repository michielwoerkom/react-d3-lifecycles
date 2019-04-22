import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import filledFormReducer from './store/reducers';

ReactDOM.render(
  <Provider store={createStore(filledFormReducer)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
