import React from 'react';
import { Clock, Trash2, Copy } from 'lucide-react';
import { TranslationHistoryItem } from '../hooks/useTranslator';
import { getFlagEmoji } from '../utils/languages';

interface TranslationHistoryProps {
  history: TranslationHistoryItem[];
  onRemove: (id: string) => void;
  onCopy: (text: string) => void;
}

const TranslationHistory: React.FC<TranslationHistoryProps> = ({
  history,
  onRemove,
  onCopy,
}) => {
  if (history.length === 0) return null;

  return (
    <div className="mt-12 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Recent Translations</h2>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
          {history.length}
        </span>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {history.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-blue-100 rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{getFlagEmoji(item.sourceLang)}</span>
                <span className="text-gray-400">→</span>
                <span className="text-xl">{getFlagEmoji(item.targetLang)}</span>
                <span className="text-sm text-gray-500 ml-2">
                  {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onCopy(item.translatedText)}
                  className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                  aria-label="Copy translation"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                  aria-label="Remove from history"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-600 line-clamp-2">
                <span className="font-semibold text-gray-700">Original:</span> {item.sourceText}
              </p>
              <p className="text-gray-800 line-clamp-2">
                <span className="font-semibold text-blue-600">Translated:</span> {item.translatedText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranslationHistory;