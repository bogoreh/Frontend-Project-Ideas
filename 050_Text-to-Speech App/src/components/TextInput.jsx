import React, { useState } from 'react';
import { Mic, FileText, AlertCircle } from 'lucide-react';

const TextInput = ({ value, onChange, error }) => {
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const handleTextChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      onChange(text);
      setCharCount(text.length);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <FileText size={18} className="text-indigo-500" />
          Enter your text
        </label>
        <span className={`text-xs ${charCount >= maxChars ? 'text-red-500' : 'text-gray-500'}`}>
          {charCount}/{maxChars}
        </span>
      </div>
      
      <div className="relative">
        <textarea
          value={value}
          onChange={handleTextChange}
          placeholder="Type or paste your text here... (max 500 characters)"
          className={`w-full p-4 pr-12 border rounded-xl focus:ring-2 focus:outline-none transition-all resize-none min-h-[120px] ${
            error 
              ? 'border-red-300 focus:ring-red-200 focus:border-red-400' 
              : 'border-gray-200 focus:ring-indigo-200 focus:border-indigo-400'
          }`}
        />
        
        {charCount > 0 && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-500 text-sm mt-1">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Mic size={14} />
        <span>Tip: You can paste any text or type directly</span>
      </div>
    </div>
  );
};

export default TextInput;