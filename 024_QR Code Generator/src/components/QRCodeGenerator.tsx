import React, { useState } from 'react';
import QRCodeDisplay from './QRCodeDisplay';
import ColorPicker from './ColorPicker';
import DownloadButton from './DownloadButton';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState('https://github.com');
  const [size, setSize] = useState<number>(256);
  const [fgColor, setFgColor] = useState('#1E40AF');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [errorCorrection, setErrorCorrection] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [fileName, setFileName] = useState('my-qr-code');

  // Sample QR code content suggestions
  const sampleContents = [
    'https://github.com',
    'https://www.linkedin.com',
    'mailto:example@email.com',
    'tel:+1234567890',
    'WIFI:S:MyNetwork;T:WPA;P:MyPassword;;',
    'BEGIN:VCARD\nVERSION:3.0\nFN:John Doe\nORG:Company\nTEL:+1234567890\nEMAIL:john@example.com\nEND:VCARD'
  ];

  const handleSampleClick = (sample: string) => {
    setText(sample);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            QR Code Generator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Create beautiful, customizable QR codes for URLs, text, contacts, WiFi, and more.
            Download in high-quality PNG format.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - QR Code Display */}
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              QR Code Preview
            </h2>
            
            <QRCodeDisplay
              value={text}
              size={size}
              fgColor={fgColor}
              bgColor={bgColor}
              level={errorCorrection}
            />
            
            <div className="mt-6">
              <DownloadButton value={text} fileName={fileName} />
            </div>
          </div>

          {/* Right Column - Controls */}
          <div className="space-y-8">
            {/* Content Input */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Content
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Enter text or URL
                  </label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Enter text, URL, email, phone number, or other content..."
                  />
                </div>
                
                {/* File Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    File Name (for download)
                  </label>
                  <input
                    type="text"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    className="input-field"
                    placeholder="my-qr-code"
                  />
                </div>
                
                {/* Quick Samples */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quick Samples
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sampleContents.slice(0, 4).map((sample, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSampleClick(sample)}
                        className="btn-secondary text-sm py-2 px-4"
                      >
                        {sample.includes('http') ? 'Website' : 
                         sample.includes('mailto') ? 'Email' : 
                         sample.includes('tel') ? 'Phone' : 'WiFi'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Customization */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Customization
              </h2>
              
              <div className="space-y-6">
                {/* Size Control */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Size: {size}px
                    </label>
                    <span className="text-sm text-gray-500">Min: 128px | Max: 512px</span>
                  </div>
                  <input
                    type="range"
                    min="128"
                    max="512"
                    step="1"
                    value={size}
                    onChange={(e) => setSize(parseInt(e.target.value))}
                    className="slider"
                  />
                </div>

                {/* Color Pickers */}
                <div className="grid md:grid-cols-2 gap-6">
                  <ColorPicker
                    label="Foreground"
                    color={fgColor}
                    onChange={setFgColor}
                  />
                  <ColorPicker
                    label="Background"
                    color={bgColor}
                    onChange={setBgColor}
                  />
                </div>

                {/* Error Correction */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Error Correction Level
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {([
                      { level: 'L', label: 'Low (7%)', desc: 'Smallest size' },
                      { level: 'M', label: 'Medium (15%)', desc: 'Recommended' },
                      { level: 'Q', label: 'Quartile (25%)', desc: 'Better' },
                      { level: 'H', label: 'High (30%)', desc: 'Maximum' }
                    ] as const).map(({ level, label, desc }) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setErrorCorrection(level)}
                        className={`p-3 rounded-xl text-center transition-all duration-300 ${
                          errorCorrection === level
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="font-semibold">{label}</div>
                        <div className="text-xs mt-1">{desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How to Use
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Enter any text or URL in the content field</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>Customize colors, size, and error correction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Click "Download QR Code" to save your QR code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>Test the QR code with your phone's camera</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>QR codes generated with this tool can be scanned by any standard QR code reader.</p>
          <p className="mt-2">For best results, use high contrast colors and keep the error correction level appropriate for your use case.</p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;