import React, { useCallback } from 'react';
import { FiUpload, FiX } from 'react-icons/fi';

const ImageUploader = ({ onImageUpload, originalImage, resetImages }) => {
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) onImageUpload(file);
  }, [onImageUpload]);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) onImageUpload(file);
  };

  return (
    <div className="w-full">
      {!originalImage ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer bg-gray-50"
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="imageUpload"
          />
          <label htmlFor="imageUpload" className="cursor-pointer">
            <FiUpload className="mx-auto text-4xl text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">Drag & drop or click to upload</p>
            <p className="text-sm text-gray-400">Supports: JPEG, PNG, WEBP, GIF (Max 10MB)</p>
          </label>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={resetImages}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors z-10"
          >
            <FiX size={20} />
          </button>
          <img
            src={originalImage.preview}
            alt="Original"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Original Image</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;