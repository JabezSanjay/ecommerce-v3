import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageRoutes from './Routes';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PageRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);