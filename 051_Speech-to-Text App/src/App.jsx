import React, { useState } from 'react';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import TranscriptDisplay from './components/TranscriptDisplay';
import Controls from './components/Controls';
import SpeechToText from './components/SpeechToText';

function App() {
  const {
    transcript,
    isListening,
    error,
    startListening,
    stopListening,
    resetTranscript
  } = useSpeechRecognition();

  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = () => {
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Speech to Text
          </h1>
          <p className="text-gray-600">
            Convert your speech to text in real-time
          </p>
        </div>

        {/* Main Card */}
        <div className="card space-y-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {/* Controls */}
          <Controls
            isListening={isListening}
            onStart={startListening}
            onStop={stopListening}
            onReset={resetTranscript}
          />

          {/* Recording Indicator */}
          {isListening && (
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              Recording... Speak now
            </div>
          )}

          {/* Transcript Display */}
          <TranscriptDisplay
            transcript={transcript}
            onCopy={handleCopy}
            onClear={resetTranscript}
          />

          {/* Copy Success Message */}
          {copySuccess && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
              {copySuccess}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Supported browsers: Chrome, Edge, Safari</p>
        </div>
      </div>
    </div>
  );
}

export default App;