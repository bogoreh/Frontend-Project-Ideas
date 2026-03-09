import React from 'react';
import UrlInput from './components/UrlInput';
import PreviewCard from './components/PreviewCard';
import LoadingSpinner from './components/LoadingSpinner';
import { useUrlPreview } from './hooks/useUrlPreview';
import './App.css';

function App() {
  const { previewData, loading, error, fetchPreview } = useUrlPreview();

  const handleSubmit = (url) => {
    fetchPreview(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-800">URL Preview</h1>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              Beta
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            See what's behind any link
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Enter a URL below to get a preview of the website content, including title, description, and images.
          </p>
        </div>

        {/* URL Input Section */}
        <div className="mb-8 md:mb-12">
          <UrlInput onSubmit={handleSubmit} loading={loading} />
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm flex items-center">
            <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Preview Section */}
        {previewData && !loading && (
          <div className="animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Preview Result</h3>
              <button
                onClick={() => window.open(previewData.url, '_blank')}
                className="text-sm text-blue-500 hover:text-blue-700 flex items-center"
              >
                Open original
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
            <PreviewCard data={previewData} />
          </div>
        )}

        {/* Empty State */}
        {!previewData && !loading && !error && (
          <div className="text-center py-12 bg-white/50 rounded-lg border-2 border-dashed border-gray-200">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No preview yet</h3>
            <p className="text-gray-500 text-sm">Enter a URL above to see the preview</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <p className="text-center text-xs text-gray-500">
            © 2024 URL Preview Tool. All previews are simulated for demonstration.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;