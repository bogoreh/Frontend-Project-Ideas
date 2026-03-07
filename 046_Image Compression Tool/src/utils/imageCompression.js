import imageCompression from 'browser-image-compression';

export const compressImage = async (file, options) => {
  try {
    // Validate file
    if (!file) {
      throw new Error('No file selected');
    }

    // Check file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      throw new Error('Please upload a valid image file (JPEG, PNG, WEBP, GIF)');
    }

    // Check file size (max 10MB)
    const maxSizeMB = 10;
    if (file.size > maxSizeMB * 1024 * 1024) {
      throw new Error(`File size must be less than ${maxSizeMB}MB`);
    }

    // Compression options
    const compressionOptions = {
      maxSizeMB: options.maxSizeMB || 1,
      maxWidthOrHeight: options.maxWidthOrHeight || 1920,
      useWebWorker: true,
      fileType: options.fileType || file.type,
      initialQuality: options.quality || 0.8,
    };

    // Compress image
    const compressedFile = await imageCompression(file, compressionOptions);
    
    // Get compression info
    const compressionRatio = ((1 - compressedFile.size / file.size) * 100).toFixed(1);
    
    return {
      compressedFile,
      originalSize: file.size,
      compressedSize: compressedFile.size,
      compressionRatio,
    };
  } catch (error) {
    throw new Error(`Compression failed: ${error.message}`);
  }
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};