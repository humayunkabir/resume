import React, { Component, Fragment } from 'react';
import Container from './componets/container';
import SideBar from './componets/sideBar';

class App extends Component {
  state = { theme: 'warning' };
  render() {
    const { theme } = this.state;
    return (
      <Fragment>
        {/* <NabBar /> */}
        <div className="container-fluid my-3">
          <div className="row">
            <SideBar theme={theme} />
            <Container theme={theme} />
          </div>
        </div>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default App;
