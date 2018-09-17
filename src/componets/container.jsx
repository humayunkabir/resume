import React, { Component } from 'react';
import Branding from './branding';
import Educations from './educations';

class Container extends Component {
  render() {
    const { theme, colors, doHandleTheme } = this.props;
    return (
      <div className="col-lg">
        <Branding theme={theme} colors={colors} doHandleTheme={doHandleTheme} />
        <Educations theme={theme}>
          <h3>Educations</h3>
        </Educations>
      </div>
    );
  }
}

export default Container;
