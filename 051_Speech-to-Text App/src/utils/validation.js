export const validateTranscript = (transcript) => {
  const errors = [];
  
  if (!transcript || transcript.trim().length === 0) {
    errors.push('No speech detected. Please try speaking again.');
  }
  
  if (transcript.length > 5000) {
    errors.push('Transcript is too long. Maximum 5000 characters allowed.');
  }
  
  // Check for potential inappropriate content (basic example)
  const inappropriateWords = ['badword1', 'badword2']; // Add your own list
  const words = transcript.toLowerCase().split(' ');
  if (words.some(word => inappropriateWords.includes(word))) {
    errors.push('Transcript contains inappropriate content.');
  }
  
  return errors;
};

export const validateLanguage = (language) => {
  const supportedLanguages = ['en-US', 'es-ES', 'fr-FR', 'de-DE', 'it-IT', 'ja-JP', 'ko-KR', 'zh-CN'];
  return supportedLanguages.includes(language) ? null : 'Unsupported language selected.';
};