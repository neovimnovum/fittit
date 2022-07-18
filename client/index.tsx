import React from 'react';
import './styles.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './reducers/liftReducer';
import App from './App';

const store = configureStore({
    reducer: {
        workout: workoutReducer,
      }
  });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
