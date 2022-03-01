import React from 'react';
import { render } from 'react-dom';

const myName = 'Joey';

render(
  <p>
    This is a react app, and my name is
    {myName}
  </p>,
  document.getElementById('root'),
);
