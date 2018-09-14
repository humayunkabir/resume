import React, { Component } from 'react';
import Branding from './branding';
import Skills from './skills';

class Container extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="col-lg">
        <Branding theme={theme} />
        <Skills theme={theme}>
          <h3>Skills</h3>
        </Skills>
      </div>
    );
  }
}

export default Container;
