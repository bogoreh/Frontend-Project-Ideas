import React from 'react';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
import TranslationBox from './components/TranslationBox';
import ActionButtons from './components/ActionButtons';
import TranslationHistory from './components/TranslationHistory';
import { useTranslator } from './hooks/useTranslator';

const App: React.FC = () => {
  const translator = useTranslator();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <LanguageSelector
          sourceLang={translator.sourceLang}
          targetLang={translator.targetLang}
          onSourceChange={translator.setSourceLang}
          onTargetChange={translator.setTargetLang}
          onSwap={translator.swapLanguages}
          languages={translator.languages}
        />
        
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <TranslationBox
            type="source"
            value={translator.sourceText}
            onChange={translator.setSourceText}
            placeholder="Enter text to translate..."
            language={translator.sourceLang}
            onCopy={() => translator.copyToClipboard(translator.sourceText)}
            onSpeak={() => {}}
          />
          
          <TranslationBox
            type="target"
            value={translator.translatedText}
            language={translator.targetLang}
            isTranslating={translator.isTranslating}
            readOnly
            placeholder="Translation will appear here..."
            onCopy={() => translator.copyToClipboard(translator.translatedText)}
            onSpeak={() => {}}
          />
        </div>
        
        <ActionButtons
          onTranslate={translator.handleTranslate}
          onClear={translator.clearText}
          isTranslating={translator.isTranslating}
          sourceText={translator.sourceText}
        />
        
        <TranslationHistory
          history={translator.translationHistory}
          onRemove={translator.removeFromHistory}
          onCopy={translator.copyToClipboard}
        />
      </main>
      
      <footer className="mt-12 text-center text-gray-600 pb-8">
        <p className="text-sm">
          This is a demo translator app. In a real implementation, you would connect to a translation API like Google Translate, DeepL, or Microsoft Translator.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Made with ❤️ using React, TypeScript, Tailwind CSS & Vite
        </p>
      </footer>
    </div>
  );
};

export default App;