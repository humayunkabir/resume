import React, { Fragment } from 'react';

// Stateless Functional Component
const Skill = props => {
  const { name, stars, percentage, level } = props.data;
  const { theme } = props;
  const handleBadgeColor = () => {
    switch (level) {
      case 'Advanced':
        return 'success';
      case 'Intermediate':
        return 'warning';
      default:
        return 'info';
    }
  };
  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between mb-1">
        <p className="mb-0 lead">
          {name} {stars && `(${stars})`}
        </p>
        {level && (
          <div className={`badge badge-pill badge-${handleBadgeColor()}`}>
            {level}
          </div>
        )}
      </div>
      {percentage && (
        <div className="progress mb-3">
          <div
            className={`progress-bar progress-bar-striped bg-${theme}`}
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {percentage}%
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Skill;
