import React, { Component } from 'react';
import Branding from './branding';
import Skills from './skills';

class Container extends Component {
  render() {
    const { theme, colors, doHandleTheme } = this.props;
    return (
      <div className="col-lg">
        <Branding theme={theme} colors={colors} doHandleTheme={doHandleTheme} />
        <Skills theme={theme}>
          <h3>Skills</h3>
        </Skills>
      </div>
    );
  }
}

export default Container;
