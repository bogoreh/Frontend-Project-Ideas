import React, { useState } from 'react';
import TextInput from './components/TextInput';
import VoiceControls from './components/VoiceControls';
import AudioControls from './components/AudioControls';
import useSpeechSynthesis from './hooks/useSpeechSynthesis';
import { Volume2, AlertCircle, CheckCircle } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  
  const {
    voices,
    speaking,
    supported,
    selectedVoice,
    setSelectedVoice,
    pitch,
    setPitch,
    rate,
    setRate,
    volume,
    setVolume,
    speak,
    stop,
    pause,
    resume
  } = useSpeechSynthesis();

  const validateAndSpeak = () => {
    // Data validation
    if (!text.trim()) {
      setError('Please enter some text to speak');
      return;
    }
    
    if (text.length > 500) {
      setError('Text exceeds maximum length of 500 characters');
      return;
    }

    if (!selectedVoice) {
      setError('No voice selected. Please choose a voice');
      return;
    }

    setError('');
    speak(text);
  };

  if (!supported) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
          <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Browser Not Supported</h2>
          <p className="text-gray-600">
            Sorry, your browser doesn't support the Web Speech API. 
            Please try using Chrome, Edge, or Safari.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-4">
            <Volume2 size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Text to Speech</h1>
          <p className="text-gray-600">Convert your text into natural-sounding speech</p>
          
          {/* Status Badge */}
          {speaking && (
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-100 text-green-700 rounded-full">
              <CheckCircle size={16} />
              <span className="text-sm font-medium">Speaking...</span>
            </div>
          )}
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-6">
          <TextInput 
            value={text} 
            onChange={setText} 
            error={error}
          />

          <VoiceControls
            voices={voices}
            selectedVoice={selectedVoice}
            onVoiceChange={setSelectedVoice}
            pitch={pitch}
            onPitchChange={setPitch}
            rate={rate}
            onRateChange={setRate}
            volume={volume}
            onVolumeChange={setVolume}
          />

          <div className="border-t border-gray-100 pt-6">
            <AudioControls
              speaking={speaking}
              onSpeak={validateAndSpeak}
              onStop={stop}
              onPause={pause}
              onResume={resume}
              disabled={!text.trim()}
            />
          </div>
        </div>

        {/* Mobile-friendly Footer */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Works best on Chrome, Edge, and Safari</p>
          <p className="mt-1">Double-tap controls for better mobile experience</p>
        </div>
      </div>
    </div>
  );
}

export default App;