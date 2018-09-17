import React, { Component } from 'react';
import Education from './education';

class Educations extends Component {
  state = {
    education: [
      {
        degree: 'BSc in Chemical Engineering and Polymer Science',
        institution: 'Shahjalal University of Science and Technology',
        grade: 3.1,
        year: 2016
      },
      {
        degree: 'HSC',
        institution: 'Dania University Collage',
        grade: 4.8,
        year: 2011
      },
      {
        degree: 'SSC',
        institution: 'Balaibunia High School',
        grade: 5.0,
        year: 2009
      }
    ]
  };
  render() {
    const { theme } = this.props;
    return (
      <div className={`border rounded p-4 shadow-lg mt-4 border-${theme}`}>
        {this.props.children}
        {this.state.education.map(item => (
          <Education key={item.degree} data={item} theme={theme} />
        ))}
      </div>
    );
  }
}

export default Educations;
