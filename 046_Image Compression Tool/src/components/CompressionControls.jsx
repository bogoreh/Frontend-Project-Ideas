import React, { useState } from 'react';
import { FiSettings, FiCpu } from 'react-icons/fi';

const CompressionControls = ({ onCompress, isCompressing }) => {
  const [options, setOptions] = useState({
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    quality: 0.8,
  });

  const handleCompress = () => {
    onCompress(options);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center mb-4">
        <FiSettings className="text-blue-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Compression Settings</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Size (MB): {options.maxSizeMB}
          </label>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={options.maxSizeMB}
            onChange={(e) => setOptions({ ...options, maxSizeMB: parseFloat(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>0.1 MB</span>
            <span>5 MB</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Dimension (px): {options.maxWidthOrHeight}
          </label>
          <input
            type="range"
            min="320"
            max="3840"
            step="10"
            value={options.maxWidthOrHeight}
            onChange={(e) => setOptions({ ...options, maxWidthOrHeight: parseInt(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>320px</span>
            <span>3840px</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quality: {Math.round(options.quality * 100)}%
          </label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.01"
            value={options.quality}
            onChange={(e) => setOptions({ ...options, quality: parseFloat(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>10%</span>
            <span>100%</span>
          </div>
        </div>

        <button
          onClick={handleCompress}
          disabled={isCompressing}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isCompressing ? (
            <>
              <FiCpu className="animate-spin mr-2" />
              Compressing...
            </>
          ) : (
            'Compress Image'
          )}
        </button>
      </div>
    </div>
  );
};

export default CompressionControls;