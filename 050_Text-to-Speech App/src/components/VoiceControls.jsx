import React from 'react';
import { Volume2, Gauge, TrendingUp, Languages } from 'lucide-react';

const VoiceControls = ({
  voices,
  selectedVoice,
  onVoiceChange,
  pitch,
  onPitchChange,
  rate,
  onRateChange,
  volume,
  onVolumeChange
}) => {
  // Group voices by language
  const groupedVoices = voices.reduce((acc, voice) => {
    const lang = voice.lang.split('-')[0];
    if (!acc[lang]) acc[lang] = [];
    acc[lang].push(voice);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      {/* Voice Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Languages size={18} className="text-indigo-500" />
          Select Voice
        </label>
        <select
          value={selectedVoice?.name || ''}
          onChange={(e) => {
            const voice = voices.find(v => v.name === e.target.value);
            onVoiceChange(voice);
          }}
          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 focus:outline-none bg-white"
        >
          {Object.entries(groupedVoices).map(([lang, langVoices]) => (
            <optgroup key={lang} label={lang.toUpperCase()}>
              {langVoices.map(voice => (
                <option key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pitch Control */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Volume2 size={16} className="text-indigo-500" />
              Pitch
            </span>
            <span className="text-indigo-600 font-semibold">{pitch.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => onPitchChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Low</span>
            <span>Normal</span>
            <span>High</span>
          </div>
        </div>

        {/* Rate Control */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Gauge size={16} className="text-indigo-500" />
              Speed
            </span>
            <span className="text-indigo-600 font-semibold">{rate.toFixed(1)}x</span>
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => onRateChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Slow</span>
            <span>Normal</span>
            <span>Fast</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <TrendingUp size={16} className="text-indigo-500" />
              Volume
            </span>
            <span className="text-indigo-600 font-semibold">{Math.round(volume * 100)}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Mute</span>
            <span>Medium</span>
            <span>Max</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceControls;