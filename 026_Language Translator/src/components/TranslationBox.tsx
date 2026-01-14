import React from 'react';
import { Copy, Volume2, Maximize2 } from 'lucide-react';
import { getFlagEmoji } from '../utils/languages';

interface TranslationBoxProps {
  type: 'source' | 'target';
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  language: string;
  isTranslating?: boolean;
  onCopy?: () => void;
  onSpeak?: () => void;
  readOnly?: boolean;
}

const TranslationBox: React.FC<TranslationBoxProps> = ({
  type,
  value,
  onChange,
  placeholder,
  language,
  isTranslating,
  onCopy,
  onSpeak,
  readOnly = false,
}) => {
  const handleSpeak = () => {
    if (value && onSpeak) {
      const utterance = new SpeechSynthesisUtterance(value);
      utterance.lang = language;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="relative flex-1">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getFlagEmoji(language)}</span>
          <span className="font-semibold text-gray-700">
            {type === 'source' ? 'Text to translate' : 'Translation'}
          </span>
          {isTranslating && (
            <span className="text-sm text-blue-500 font-medium animate-pulse">
              Translating...
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {onSpeak && (
            <button
              onClick={handleSpeak}
              disabled={!value}
              className="p-2 text-gray-600 hover:text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
              aria-label="Listen to pronunciation"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          )}
          {onCopy && (
            <button
              onClick={onCopy}
              disabled={!value}
              className="p-2 text-gray-600 hover:text-green-600 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
              aria-label="Copy text"
            >
              <Copy className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`w-full h-64 p-4 text-lg border-2 rounded-xl resize-none focus:outline-none transition-all
            ${readOnly 
              ? 'bg-gray-50 border-blue-100 focus:border-blue-300' 
              : 'bg-white border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
            }
          `}
        />
        <div className="absolute bottom-4 right-4 text-gray-400">
          <Maximize2 className="w-5 h-5" />
        </div>
      </div>
      
      <div className="flex justify-between mt-2 text-sm text-gray-500">
        <span>Characters: {value.length}</span>
        <span>Words: {value.trim() ? value.trim().split(/\s+/).length : 0}</span>
      </div>
    </div>
  );
};

export default TranslationBox;