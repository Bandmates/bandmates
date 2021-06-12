import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

import App from './App';

import stylesheet from './styles/app.css';

render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
