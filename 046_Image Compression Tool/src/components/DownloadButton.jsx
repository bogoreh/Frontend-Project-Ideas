import React from 'react';
import { FiDownload } from 'react-icons/fi';

const DownloadButton = ({ compressedImage, fileName = 'compressed-image' }) => {
  const handleDownload = () => {
    if (!compressedImage?.file) return;

    const link = document.createElement('a');
    link.href = compressedImage.preview;
    link.download = `compressed-${fileName}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!compressedImage) return null;

  return (
    <button
      onClick={handleDownload}
      className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
    >
      <FiDownload className="mr-2" />
      Download Compressed Image
    </button>
  );
};

export default DownloadButton;