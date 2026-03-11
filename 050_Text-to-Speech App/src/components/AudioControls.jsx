import React from 'react';
import { Play, Pause, Square, RotateCcw } from 'lucide-react';

const AudioControls = ({ speaking, onSpeak, onStop, onPause, onResume, disabled }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={onSpeak}
        disabled={disabled}
        className={`p-4 rounded-full transition-all transform hover:scale-105 active:scale-95 ${
          disabled
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-xl'
        }`}
      >
        <Play size={24} />
      </button>

      <button
        onClick={onPause}
        disabled={!speaking}
        className={`p-4 rounded-full transition-all transform hover:scale-105 active:scale-95 ${
          !speaking
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-yellow-500 text-white shadow-lg hover:shadow-xl'
        }`}
      >
        <Pause size={24} />
      </button>

      <button
        onClick={onResume}
        disabled={speaking}
        className={`p-4 rounded-full transition-all transform hover:scale-105 active:scale-95 ${
          speaking
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-green-500 text-white shadow-lg hover:shadow-xl'
        }`}
      >
        <RotateCcw size={24} />
      </button>

      <button
        onClick={onStop}
        disabled={!speaking}
        className={`p-4 rounded-full transition-all transform hover:scale-105 active:scale-95 ${
          !speaking
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-red-500 text-white shadow-lg hover:shadow-xl'
        }`}
      >
        <Square size={24} />
      </button>
    </div>
  );
};

export default AudioControls;