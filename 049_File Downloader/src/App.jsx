import React from 'react';
import DownloadForm from './components/DownloadForm';
import DownloadProgress from './components/DownloadProgress';
import FileList from './components/FileList';
import { useFileDownload } from './hooks/useFileDownload';

function App() {
  const { downloads, loading, error, downloadFile, removeDownload, clearDownloads } = useFileDownload();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-xl">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">File Downloader</h1>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              v1.0.0
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-6 pb-20">
        {/* Download Card */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Download New File
          </h2>
          
          <DownloadForm onDownload={downloadFile} loading={loading} />
          <DownloadProgress loading={loading} error={error} />
        </div>

        {/* File List */}
        <div className="mt-6 card">
          <FileList 
            downloads={downloads}
            onRemove={removeDownload}
            onClear={clearDownloads}
          />
        </div>
      </main>

      {/* Mobile Bottom Padding */}
      <div className="h-16 md:hidden"></div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 text-center text-xs text-gray-500 md:relative md:border-t-0 md:mt-8">
        <p>© 2026 File Downloader. All files are downloaded directly to your device.</p>
      </footer>
    </div>
  );
}

export default App;