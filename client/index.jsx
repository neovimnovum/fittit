import React from 'react';
import { render } from 'react-dom';
import { provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';

render(
  <App />,
  document.getElementById('root'),
);
