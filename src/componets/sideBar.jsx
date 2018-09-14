import React, { Component } from 'react';
import Identity from './identity';
import Skills from './skills';

class SideBar extends Component {
  state = {};
  render() {
    const styles = { maxWidth: '24rem' };
    const { theme } = this.props;
    return (
      <div style={styles} className="col-lg-auto">
        <Identity theme={theme} />
        <Skills theme={theme}>
          <h3>Skills</h3>
        </Skills>
      </div>
    );
  }
}

export default SideBar;
