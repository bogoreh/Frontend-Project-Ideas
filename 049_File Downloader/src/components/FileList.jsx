import React from 'react';

const FileList = ({ downloads, onRemove, onClear }) => {
  if (downloads.length === 0) {
    return (
      <div className="text-center py-8">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No downloads yet</h3>
        <p className="mt-1 text-sm text-gray-500">Enter a URL above to start downloading</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Downloads</h3>
        <button
          onClick={onClear}
          className="text-sm text-red-600 hover:text-red-700 active:text-red-800 touch-manipulation"
        >
          Clear All
        </button>
      </div>
      
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {downloads.map((download) => (
          <div
            key={download.id}
            className="bg-gray-50 rounded-xl p-4 border border-gray-200 relative group"
          >
            <button
              onClick={() => onRemove(download.id)}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 active:text-red-600 transition-colors touch-manipulation"
              aria-label="Remove"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="pr-8">
              <p className="font-medium text-gray-900 truncate">{download.fileName}</p>
              <p className="text-xs text-gray-500 mt-1">Size: {download.size}</p>
              <p className="text-xs text-gray-400 mt-1">{download.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileList;