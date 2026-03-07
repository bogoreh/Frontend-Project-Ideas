import { useState, useCallback } from 'react';
import { compressImage } from '../utils/imageCompression';

export const useImageCompression = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [error, setError] = useState(null);
  const [compressionInfo, setCompressionInfo] = useState(null);

  const handleImageUpload = useCallback((file) => {
    setError(null);
    
    if (!file) {
      setError('Please select an image');
      return;
    }

    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    setOriginalImage({
      file,
      preview: previewUrl,
    });
    
    // Reset compressed image
    setCompressedImage(null);
    setCompressionInfo(null);
  }, []);

  const handleCompress = useCallback(async (options) => {
    if (!originalImage?.file) {
      setError('Please upload an image first');
      return;
    }

    setIsCompressing(true);
    setError(null);

    try {
      const result = await compressImage(originalImage.file, options);
      
      const compressedPreview = URL.createObjectURL(result.compressedFile);
      setCompressedImage({
        file: result.compressedFile,
        preview: compressedPreview,
      });
      
      setCompressionInfo({
        originalSize: result.originalSize,
        compressedSize: result.compressedSize,
        compressionRatio: result.compressionRatio,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsCompressing(false);
    }
  }, [originalImage]);

  const resetImages = useCallback(() => {
    if (originalImage?.preview) {
      URL.revokeObjectURL(originalImage.preview);
    }
    if (compressedImage?.preview) {
      URL.revokeObjectURL(compressedImage.preview);
    }
    setOriginalImage(null);
    setCompressedImage(null);
    setError(null);
    setCompressionInfo(null);
  }, [originalImage, compressedImage]);

  return {
    originalImage,
    compressedImage,
    isCompressing,
    error,
    compressionInfo,
    handleImageUpload,
    handleCompress,
    resetImages,
  };
};