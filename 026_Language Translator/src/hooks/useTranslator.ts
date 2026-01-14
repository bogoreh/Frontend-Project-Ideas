import { useState, useEffect } from 'react';
import { LANGUAGES, Language } from '../utils/languages';

export interface TranslationHistoryItem {
  id: string;
  sourceText: string;
  translatedText: string;
  sourceLang: string;
  targetLang: string;
  timestamp: Date;
}

export const useTranslator = () => {
  const [sourceText, setSourceText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [sourceLang, setSourceLang] = useState<string>('en');
  const [targetLang, setTargetLang] = useState<string>('es');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [translationHistory, setTranslationHistory] = useState<TranslationHistoryItem[]>([]);

  // Mock translation function (in a real app, you'd call an API here)
  const translateText = async (text: string, from: string, to: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock translations for demonstration
    const mockTranslations: Record<string, string> = {
      'en-es': 'Hola, este es un texto traducido.',
      'en-fr': 'Bonjour, ceci est un texte traduit.',
      'en-de': 'Hallo, dies ist ein übersetzter Text.',
      'es-en': 'Hello, this is a translated text.',
      'fr-en': 'Hello, this is a translated text.',
      'de-en': 'Hello, this is a translated text.',
    };
    
    const key = `${from}-${to}`;
    return mockTranslations[key] || `[Translation from ${from} to ${to}]: ${text}`;
  };

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    setIsTranslating(true);
    try {
      const result = await translateText(sourceText, sourceLang, targetLang);
      setTranslatedText(result);
      
      // Add to history
      const historyItem: TranslationHistoryItem = {
        id: Date.now().toString(),
        sourceText,
        translatedText: result,
        sourceLang,
        targetLang,
        timestamp: new Date(),
      };
      
      setTranslationHistory(prev => [historyItem, ...prev.slice(0, 9)]);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText('Translation failed. Please try again.');
    } finally {
      setIsTranslating(false);
    }
  };

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  const clearText = () => {
    setSourceText('');
    setTranslatedText('');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const removeFromHistory = (id: string) => {
    setTranslationHistory(prev => prev.filter(item => item.id !== id));
  };

  return {
    sourceText,
    setSourceText,
    translatedText,
    setTranslatedText,
    sourceLang,
    setSourceLang,
    targetLang,
    setTargetLang,
    isTranslating,
    translationHistory,
    handleTranslate,
    swapLanguages,
    clearText,
    copyToClipboard,
    removeFromHistory,
    languages: LANGUAGES,
  };
};