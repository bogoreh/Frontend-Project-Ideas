import React from 'react';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="progress-text">
        Question {current} of {total}
      </span>
    </div>
  );
};

export default ProgressBar;