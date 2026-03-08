import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="card">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Converting...</span>
        <span className="text-sm font-medium text-primary-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-2 text-center">
        Please wait while we process your file
      </p>
    </div>
  );
};

export default ProgressBar;