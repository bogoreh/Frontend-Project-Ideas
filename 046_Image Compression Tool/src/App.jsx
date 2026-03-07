import React from 'react';
import { useImageCompression } from './hooks/useImageCompression';
import ImageUploader from './components/ImageUploader';
import CompressionControls from './components/CompressionControls';
import ImagePreview from './components/ImagePreview';
import DownloadButton from './components/DownloadButton';
import { FiAlertCircle, FiImage, FiZap } from 'react-icons/fi';

function App() {
  const {
    originalImage,
    compressedImage,
    isCompressing,
    error,
    compressionInfo,
    handleImageUpload,
    handleCompress,
    resetImages,
  } = useImageCompression();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <FiZap className="text-4xl text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Image Compressor</h1>
          </div>
          <p className="text-gray-600">
            Compress your images quickly and efficiently
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <div className="flex items-center">
                <FiAlertCircle className="text-red-500 mr-2" />
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {/* Upload Section */}
          <div className="mb-8">
            <ImageUploader
              onImageUpload={handleImageUpload}
              originalImage={originalImage}
              resetImages={resetImages}
            />
          </div>

          {/* Compression Section */}
          {originalImage && !compressedImage && (
            <div className="mb-8">
              <CompressionControls
                onCompress={handleCompress}
                isCompressing={isCompressing}
              />
            </div>
          )}

          {/* Results Section */}
          {(originalImage || compressedImage) && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Original Image Preview */}
                {originalImage && (
                  <ImagePreview
                    image={originalImage}
                    title="Original Image"
                    size={originalImage.file.size}
                  />
                )}

                {/* Compressed Image Preview */}
                {compressedImage && compressionInfo && (
                  <ImagePreview
                    image={compressedImage}
                    title="Compressed Image"
                    size={compressedImage.file.size}
                    showComparison={compressionInfo.compressionRatio}
                  />
                )}
              </div>

              {/* Compression Stats */}
              {compressionInfo && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Compression Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Original:</span>
                      <span className="ml-2 font-medium">
                        {(compressionInfo.originalSize / 1024).toFixed(2)} KB
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Compressed:</span>
                      <span className="ml-2 font-medium">
                        {(compressionInfo.compressedSize / 1024).toFixed(2)} KB
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Saved:</span>
                      <span className="ml-2 font-medium text-green-600">
                        {compressionInfo.compressionRatio}%
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Download Button */}
              {compressedImage && (
                <DownloadButton
                  compressedImage={compressedImage}
                  fileName={originalImage.file.name}
                />
              )}
            </div>
          )}

          {/* Empty State */}
          {!originalImage && !compressedImage && (
            <div className="text-center py-12">
              <FiImage className="mx-auto text-5xl text-gray-300 mb-4" />
              <p className="text-gray-400">Upload an image to get started</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Supports JPEG, PNG, WEBP, GIF • Max file size: 10MB</p>
          <p className="mt-1">All compression happens locally in your browser</p>
        </div>
      </div>
    </div>
  );
}

export default App;