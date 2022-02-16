import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { StrictMode } from 'react';

import Store from './store';
import Router from './router';

ReactDOM.render(
  <Provider store={Store}>
    <StrictMode>
      <Router />
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);
