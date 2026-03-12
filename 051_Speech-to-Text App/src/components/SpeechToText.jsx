import React, { useState, useEffect, useCallback, useRef } from 'react';

const SpeechToText = () => {
  // State management
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [language, setLanguage] = useState('en-US');
  const [showTooltip, setShowTooltip] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  
  // Refs
  const recognitionRef = useRef(null);
  const transcriptRef = useRef('');
  const textareaRef = useRef(null);

  // Supported languages
  const languages = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'en-GB', name: 'English (UK)' },
    { code: 'es-ES', name: 'Spanish' },
    { code: 'fr-FR', name: 'French' },
    { code: 'de-DE', name: 'German' },
    { code: 'it-IT', name: 'Italian' },
    { code: 'ja-JP', name: 'Japanese' },
    { code: 'ko-KR', name: 'Korean' },
    { code: 'zh-CN', name: 'Chinese (Simplified)' },
    { code: 'hi-IN', name: 'Hindi' },
  ];

  // Validation function
  const validateTranscript = useCallback((text) => {
    const errors = [];
    
    if (!text || text.trim().length === 0) {
      errors.push('No speech detected. Please try speaking again.');
    }
    
    if (text.length > 5000) {
      errors.push('Transcript is too long. Maximum 5000 characters allowed.');
    }
    
    // Check for potential inappropriate content (basic example)
    const inappropriateWords = ['badword1', 'badword2', 'badword3']; // Add your own list
    const words = text.toLowerCase().split(/\s+/);
    const foundInappropriate = words.filter(word => inappropriateWords.includes(word));
    
    if (foundInappropriate.length > 0) {
      errors.push('Transcript contains inappropriate content.');
    }
    
    // Check for excessive repetition (spam detection)
    const wordFrequency = {};
    words.forEach(word => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
    
    const hasRepetition = Object.values(wordFrequency).some(count => count > 20);
    if (hasRepetition) {
      errors.push('Excessive word repetition detected.');
    }
    
    return errors;
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    // Check browser support
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setError('❌ Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    // Initialize recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    
    // Configure recognition
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = language;
    recognitionRef.current.maxAlternatives = 1;

    // Handle results
    recognitionRef.current.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      // Update transcript
      setTranscript(prev => {
        const newTranscript = prev + finalTranscript;
        transcriptRef.current = newTranscript;
        setCharCount(newTranscript.length);
        
        // Validate on update
        const errors = validateTranscript(newTranscript);
        setValidationErrors(errors);
        
        return newTranscript;
      });
    };

    // Handle errors
    recognitionRef.current.onerror = (event) => {
      let errorMessage = '';
      switch(event.error) {
        case 'no-speech':
          errorMessage = 'No speech detected. Please try again.';
          break;
        case 'audio-capture':
          errorMessage = 'No microphone found. Please ensure microphone is connected.';
          break;
        case 'not-allowed':
          errorMessage = 'Microphone permission denied. Please allow access to microphone.';
          break;
        case 'network':
          errorMessage = 'Network error. Please check your internet connection.';
          break;
        default:
          errorMessage = `Error: ${event.error}`;
      }
      setError(errorMessage);
      setIsListening(false);
    };

    // Handle end of speech
    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    // Cleanup
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [language, validateTranscript]);

  // Start listening
  const startListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        // Request microphone permission
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(() => {
            recognitionRef.current.lang = language;
            recognitionRef.current.start();
            setIsListening(true);
            setError('');
            setValidationErrors([]);
          })
          .catch((err) => {
            setError('Microphone permission denied. Please allow access to use speech recognition.');
            console.error('Microphone error:', err);
          });
      } catch (err) {
        setError('Failed to start speech recognition. Please try again.');
        console.error('Recognition error:', err);
      }
    }
  }, [language]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      
      // Final validation
      const errors = validateTranscript(transcriptRef.current);
      setValidationErrors(errors);
    }
  }, [validateTranscript]);

  // Reset transcript
  const resetTranscript = useCallback(() => {
    setTranscript('');
    transcriptRef.current = '';
    setCharCount(0);
    setValidationErrors([]);
    setError('');
  }, []);

  // Copy to clipboard
  const copyToClipboard = useCallback(() => {
    if (transcript) {
      navigator.clipboard.writeText(transcript)
        .then(() => {
          setCopySuccess('✅ Copied to clipboard!');
          setTimeout(() => setCopySuccess(''), 2000);
        })
        .catch(() => {
          setCopySuccess('❌ Failed to copy');
          setTimeout(() => setCopySuccess(''), 2000);
        });
    }
  }, [transcript]);

  // Download as text file
  const downloadTranscript = useCallback(() => {
    if (transcript) {
      const blob = new Blob([transcript], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `transcript-${new Date().toISOString().slice(0,10)}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setCopySuccess('✅ File downloaded!');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  }, [transcript]);

  // Handle language change
  const handleLanguageChange = (e) => {
    if (!isListening) {
      setLanguage(e.target.value);
      setError('');
    } else {
      setError('Please stop recording before changing language');
    }
  };

  // Get microphone status color
  const getMicrophoneStatusColor = () => {
    return isListening ? 'bg-green-500' : 'bg-gray-400';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          🎤 Speech to Text
        </h1>
        <p className="text-sm sm:text-base text-gray-600 px-4">
          Convert your speech to text in real-time with multi-language support
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 border border-white/20 mx-2 sm:mx-0">
        
        {/* Language Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Language
          </label>
          <select
            value={language}
            onChange={handleLanguageChange}
            disabled={isListening}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 sm:p-4 bg-red-50 border-l-4 border-red-500 rounded-lg animate-shake">
            <div className="flex items-start gap-2">
              <span className="text-red-500 text-lg">⚠️</span>
              <p className="text-red-700 text-sm sm:text-base">{error}</p>
            </div>
          </div>
        )}

        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {!isListening ? (
            <button
              onClick={startListening}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="flex-1 btn-primary flex items-center justify-center gap-2 py-3 sm:py-4 text-sm sm:text-base relative"
            >
              <span className="text-lg">🎙️</span>
              Start Recording
              {showTooltip && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs sm:text-sm py-2 px-3 rounded-lg whitespace-nowrap z-10">
                  Make sure your microphone is enabled
                </div>
              )}
            </button>
          ) : (
            <button
              onClick={stopListening}
              className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl py-3 sm:py-4 flex items-center justify-center gap-2 animate-pulse text-sm sm:text-base"
            >
              <span className="text-lg">⏹️</span>
              Stop Recording
            </button>
          )}
          
          <button
            onClick={resetTranscript}
            disabled={!transcript && !isListening}
            className="flex-1 btn-secondary flex items-center justify-center gap-2 py-3 sm:py-4 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg">🔄</span>
            Reset
          </button>
        </div>

        {/* Recording Indicator */}
        {isListening && (
          <div className="flex items-center justify-center gap-3 mb-4 p-3 bg-blue-50 rounded-lg">
            <div className="relative">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="absolute top-0 left-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-sm sm:text-base text-gray-700 font-medium">
              Listening... Speak clearly into your microphone
            </span>
          </div>
        )}

        {/* Microphone Status */}
        <div className="flex items-center gap-2 mb-4 p-2 bg-gray-50 rounded-lg">
          <div className={`w-2 h-2 rounded-full ${getMicrophoneStatusColor()} transition-colors duration-300`}></div>
          <span className="text-xs sm:text-sm text-gray-600">
            Microphone: {isListening ? 'Active' : 'Inactive'}
          </span>
        </div>

        {/* Transcript Display Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm sm:text-base font-semibold text-gray-800">
              📝 Transcript
            </label>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                disabled={!transcript}
                className="p-2 text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Copy to clipboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
              <button
                onClick={downloadTranscript}
                disabled={!transcript}
                className="p-2 text-gray-600 hover:text-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Download as text file"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
          
          <textarea
            ref={textareaRef}
            value={transcript}
            onChange={(e) => {
              setTranscript(e.target.value);
              setCharCount(e.target.value.length);
              setValidationErrors(validateTranscript(e.target.value));
            }}
            placeholder="Click start and begin speaking. Your speech will appear here..."
            className="w-full min-h-[200px] sm:min-h-[250px] p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y text-sm sm:text-base"
            readOnly={isListening}
          />

          {/* Character Counter */}
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-gray-500">
              Characters: {charCount} / 5000
            </span>
            <span className="text-gray-500">
              Words: {transcript.trim() ? transcript.trim().split(/\s+/).length : 0}
            </span>
          </div>
        </div>

        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-xs sm:text-sm font-semibold text-yellow-600">⚠️ Warnings:</p>
            {validationErrors.map((error, index) => (
              <div key={index} className="flex items-start gap-2 text-yellow-600 bg-yellow-50 p-2 sm:p-3 rounded-lg">
                <span className="text-sm sm:text-base">⚠️</span>
                <span className="text-xs sm:text-sm">{error}</span>
              </div>
            ))}
          </div>
        )}

        {/* Copy Success Message */}
        {copySuccess && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg animate-bounce z-50 text-sm sm:text-base">
            {copySuccess}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 px-4">
        <p>✅ Supported browsers: Chrome, Edge, Safari</p>
        <p className="mt-1">🎯 Tap the microphone button and start speaking</p>
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SpeechToText;