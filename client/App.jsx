import React from 'react';

import MainContainer from './containers/MainContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        Workout App
        <MainContainer />
      </div>
    );
  }
}

export default App;
