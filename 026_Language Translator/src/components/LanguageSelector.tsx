import React from 'react';
import { ArrowRightLeft } from 'lucide-react';
import { Language } from '../utils/languages';

interface LanguageSelectorProps {
  sourceLang: string;
  targetLang: string;
  onSourceChange: (lang: string) => void;
  onTargetChange: (lang: string) => void;
  onSwap: () => void;
  languages: Language[];
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  sourceLang,
  targetLang,
  onSourceChange,
  onTargetChange,
  onSwap,
  languages,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 p-4 bg-white rounded-xl shadow-md">
      <div className="flex-1 w-full">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          From Language
        </label>
        <div className="relative">
          <select
            value={sourceLang}
            onChange={(e) => onSourceChange(e.target.value)}
            className="w-full p-3 border-2 border-blue-100 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-white"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            ▼
          </div>
        </div>
      </div>

      <button
        onClick={onSwap}
        className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-md"
        aria-label="Swap languages"
      >
        <ArrowRightLeft className="w-5 h-5" />
      </button>

      <div className="flex-1 w-full">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          To Language
        </label>
        <div className="relative">
          <select
            value={targetLang}
            onChange={(e) => onTargetChange(e.target.value)}
            className="w-full p-3 border-2 border-blue-100 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-white"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            ▼
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;