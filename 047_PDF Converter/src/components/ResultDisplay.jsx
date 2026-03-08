import React from 'react';
import { saveAs } from 'file-saver';

const ResultDisplay = ({ result }) => {
  const handleDownload = () => {
    saveAs(result.blob, result.filename);
  };

  return (
    <div className="card bg-green-50 border-green-200 animate__animated animate__fadeIn">
      <div className="flex items-center gap-4">
        <div className="text-5xl">🎉</div>
        <div className="flex-1">
          <h3 className="font-semibold text-green-800 text-lg">Conversion Complete!</h3>
          <p className="text-green-600 text-sm">Your file is ready to download</p>
        </div>
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold 
                   hover:bg-green-700 transition-colors flex items-center gap-2
                   active:transform active:scale-95"
        >
          <span>⬇️</span>
          Download
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;