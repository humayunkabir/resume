import React, { Component } from 'react';
import Skill from './skill';

class Skills extends Component {
  state = {
    skills: [
      { name: 'HTML5', stars: 4.5, percentage: 87, level: 'Advanced' },
      { name: 'CSS3', stars: 5, percentage: 97, level: 'Advanced' },
      { name: 'Pug', stars: 4.5, percentage: 90, level: 'Advanced' },
      { name: 'SCSS', stars: 5, percentage: 99, level: 'Advanced' },
      { name: 'JavaScript', stars: 4, percentage: 80, level: 'Intermediate' },
      { name: 'React.js', stars: 3.5, percentage: 70, level: 'Intermediate' },
      { name: 'Vue.js', stars: 2, percentage: 40, level: 'Beginner' }
    ]
  };
  render() {
    const { theme } = this.props;
    return (
      <div className={`border rounded p-4 shadow-lg mt-4 border-${theme}`}>
        {this.props.children}
        {this.state.skills.map(skill => (
          <Skill key={skill.name} data={skill} theme={theme} />
        ))}
      </div>
    );
  }
}

export default Skills;
