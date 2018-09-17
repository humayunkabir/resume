import React from 'react';

const Education = props => {
  const { degree, institution, grade, year } = props.data;

  return (
    <div className={`card mb-3 border-${props.theme}`}>
      <h3
        className={`card-header text-white bg-${props.theme} border-${
          props.theme
        }`}
      >
        {degree}
      </h3>
      <div className="card-body">
        {institution && <p className="lead">Institution: {institution}</p>}
        {grade && <p className="lead">Grade: {grade}</p>}
        {year && <p className="lead">Passing year: {year}</p>}
      </div>
    </div>
  );
};

export default Education;
