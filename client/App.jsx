import React from 'react';

import MainContainer from './containers/MainContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        MyFitnessFriend
        <MainContainer />
      </div>
    );
  }
}

export default App;
