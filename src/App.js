import React, { Component, Fragment } from 'react';
import Container from './componets/container';
import SideBar from './componets/sideBar';

class App extends Component {
  state = {
    theme: 'info',
    colors: [
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
      'light',
      'dark'
    ]
  };
  handleTheme = color => {
    const state = { ...this.state };
    state.theme = color;
    this.setState(state);
  };
  render() {
    const { theme, colors } = this.state;
    return (
      <Fragment>
        {/* <NabBar /> */}
        <div className="container-fluid my-3">
          <div className="row">
            <SideBar theme={theme} />
            <Container
              theme={theme}
              colors={colors}
              doHandleTheme={this.handleTheme}
            />
          </div>
        </div>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}

export default App;
