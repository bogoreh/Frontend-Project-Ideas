import React from 'react';
import { validateTranscript } from '../utils/validation';

const TranscriptDisplay = ({ transcript, onCopy, onClear }) => {
  const validationErrors = validateTranscript(transcript);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
    onCopy();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Transcript</h2>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            disabled={!transcript}
            className="p-2 text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Copy to clipboard"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          </button>
          <button
            onClick={onClear}
            disabled={!transcript}
            className="p-2 text-gray-600 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Clear transcript"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="min-h-[200px] p-4 bg-gray-50 rounded-xl border border-gray-200 overflow-y-auto max-h-[400px]">
        {transcript ? (
          <p className="text-gray-700 whitespace-pre-wrap">{transcript}</p>
        ) : (
          <p className="text-gray-400 text-center">Click start and begin speaking...</p>
        )}
      </div>
      
      {validationErrors.length > 0 && (
        <div className="space-y-2">
          {validationErrors.map((error, index) => (
            <div key={index} className="flex items-start gap-2 text-yellow-600 bg-yellow-50 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{error}</span>
            </div>
          ))}
        </div>
      )}
      
      <div className="text-sm text-gray-500">
        Character count: {transcript.length} / 5000
      </div>
    </div>
  );
};

export default TranscriptDisplay;