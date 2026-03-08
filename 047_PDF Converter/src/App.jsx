import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import ConverterOptions from './components/ConverterOptions';
import ProgressBar from './components/ProgressBar';
import ResultDisplay from './components/ResultDisplay';
import { convertPDF } from './utils/pdfUtils';

function App() {
  const [file, setFile] = useState(null);
  const [conversionType, setConversionType] = useState('pdf-to-word');
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleFileSelect = (selectedFile) => {
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
      setResult(null);
    } else {
      setError('Please select a valid PDF file');
    }
  };

  const handleConvert = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setIsConverting(true);
    setProgress(0);
    setError('');

    try {
      // Simulate conversion progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 10;
        });
      }, 500);

      const result = await convertPDF(file, conversionType);
      
      clearInterval(interval);
      setProgress(100);
      setResult(result);
      
      setTimeout(() => {
        setProgress(0);
        setIsConverting(false);
      }, 1000);
    } catch (err) {
      setError('Conversion failed: ' + err.message);
      setIsConverting(false);
      setProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-4">
            PDF Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert your PDF files to various formats instantly
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg animate-pulse">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Converter Card */}
          <div className="card">
            <FileUploader onFileSelect={handleFileSelect} file={file} />
            
            {file && (
              <div className="mt-6">
                <ConverterOptions 
                  conversionType={conversionType}
                  setConversionType={setConversionType}
                />
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <button
                    onClick={handleConvert}
                    disabled={isConverting}
                    className="btn-primary w-full sm:w-auto"
                  >
                    {isConverting ? 'Converting...' : 'Convert Now'}
                  </button>
                  
                  {file && (
                    <p className="text-sm text-gray-500">
                      Selected: {file.name}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          {isConverting && <ProgressBar progress={progress} />}

          {/* Result */}
          {result && <ResultDisplay result={result} />}

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Secure</h3>
              <p className="text-sm text-gray-600">Files are processed locally</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Fast</h3>
              <p className="text-sm text-gray-600">Lightning quick conversion</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-sm text-gray-600">Works on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;