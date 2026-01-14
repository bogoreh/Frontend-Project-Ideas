import React from 'react';
import { RefreshCw, Trash2, Sparkles } from 'lucide-react';

interface ActionButtonsProps {
  onTranslate: () => void;
  onClear: () => void;
  isTranslating: boolean;
  sourceText: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onTranslate,
  onClear,
  isTranslating,
  sourceText,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8 mb-8">
      <button
        onClick={onTranslate}
        disabled={!sourceText.trim() || isTranslating}
        className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105
          ${!sourceText.trim() || isTranslating
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg'
          } text-white`}
      >
        {isTranslating ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            Translating...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            Translate Now
          </>
        )}
      </button>
      
      <button
        onClick={onClear}
        className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl font-semibold hover:from-gray-200 hover:to-gray-300 transition-all shadow-md"
      >
        <Trash2 className="w-5 h-5" />
        Clear All
      </button>
    </div>
  );
};

export default ActionButtons;