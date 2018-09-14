import React, { Component, Fragment } from 'react';

class Branding extends Component {
  state = {
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
    console.log(state);
    this.setState(state);
  };
  render() {
    const { theme } = this.props;
    return (
      <Fragment>
        <div
          className={`d-flex flex-wrap justify-content-around border rounded p-4 shadow-lg border-${theme}`}
        >
          {this.state.colors.map(color => (
            <div
              style={{ width: 100, height: 100, cursor: 'pointer' }}
              key={color}
              onClick={() => this.handleTheme(color)}
              className={`bg-${color} rounded-circle m-3`}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Branding;
