import React, { useState } from 'react';

const Controls = ({ isListening, onStart, onStop, onReset }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      {!isListening ? (
        <button
          onClick={onStart}
          className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.915A7.002 7.002 0 0017 9a1 1 0 10-2 0A5 5 0 015 9a1 1 0 00-2 0 7.002 7.002 0 006 5.915V17H7a1 1 0 100 2h6a1 1 0 100-2h-2v-2.085z" clipRule="evenodd" />
          </svg>
          Start Recording
        </button>
      ) : (
        <button
          onClick={onStop}
          className="btn-primary bg-gradient-to-r from-red-600 to-pink-600 flex items-center gap-2 w-full sm:w-auto justify-center animate-pulse"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
          </svg>
          Stop Recording
        </button>
      )}
      
      <button
        onClick={onReset}
        disabled={isListening}
        className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
        Reset
      </button>
      
      {showTooltip && (
        <div className="absolute mt-12 p-2 bg-gray-800 text-white text-sm rounded-lg">
          Make sure your microphone is enabled
        </div>
      )}
    </div>
  );
};

export default Controls;