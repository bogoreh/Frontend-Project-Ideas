import React from 'react';
import { formatFileSize } from '../utils/imageCompression';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const ImagePreview = ({ image, title, size, showComparison }) => {
  if (!image) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h4 className="text-sm font-medium text-gray-600 mb-2">{title}</h4>
      <img
        src={image.preview}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-2"
      />
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-600">Size:</span>
        <span className="font-semibold text-gray-800">{formatFileSize(size)}</span>
      </div>
      
      {showComparison && (
        <div className="mt-2 pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs">
            <FiCheckCircle className="text-green-500" />
            <FiArrowRight className="text-gray-400" />
            <span className="text-green-600 font-medium">
              Saved: {showComparison}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;