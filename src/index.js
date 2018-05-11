import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Search from './modules/search/search';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Search/>
  </Provider>,
  document.getElementById('root'),
);
