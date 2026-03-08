import React, { useCallback } from 'react';

const FileUploader = ({ onFileSelect, file }) => {
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      onFileSelect(droppedFile);
    }
  }, [onFileSelect]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all
        ${file ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-primary-500'}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {!file ? (
        <>
          <div className="text-6xl mb-4">📄</div>
          <h3 className="text-xl font-semibold mb-2">Drop your PDF here</h3>
          <p className="text-gray-500 mb-4">or</p>
          <label className="cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
            />
            <span className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold 
                           hover:bg-primary-700 transition-colors inline-block">
              Browse Files
            </span>
          </label>
          <p className="text-xs text-gray-400 mt-4">
            Maximum file size: 10MB
          </p>
        </>
      ) : (
        <div className="flex items-center justify-center gap-4">
          <span className="text-3xl">✅</span>
          <div className="text-left">
            <p className="font-semibold text-green-700">{file.name}</p>
            <p className="text-sm text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
          <button
            onClick={() => onFileSelect(null)}
            className="ml-auto text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;