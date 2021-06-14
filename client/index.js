import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './styles/app.css';

//! TODO: this app could very much benefit from Redux.
render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
