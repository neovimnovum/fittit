import React from 'react';

import LiftContainer from '../containers/LiftContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>Rendered App</p>
        <LiftContainer />
      </>
    );
  }
}

export default App;
