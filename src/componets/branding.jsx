import React, { Component, Fragment } from 'react';

class Branding extends Component {
  render() {
    const { theme, colors, doHandleTheme } = this.props;
    return (
      <Fragment>
        <div
          className={`d-flex flex-wrap justify-content-around border rounded p-4 shadow-lg border-${theme}`}
        >
          {colors.map(color => (
            <div
              style={{ width: 100, height: 100, cursor: 'pointer' }}
              key={color}
              onClick={() => doHandleTheme(color)}
              className={`bg-${color} rounded-circle m-3`}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Branding;
