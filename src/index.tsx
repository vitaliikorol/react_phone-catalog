import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/react_phone-catalog">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
