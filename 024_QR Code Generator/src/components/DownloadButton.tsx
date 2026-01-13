import React from 'react';
import { downloadQRCode } from '../utils/qrCodeUtils';

interface DownloadButtonProps {
  value: string;
  fileName?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ value, fileName }) => {
  const handleDownload = () => {
    downloadQRCode('qr-code-svg', fileName || `qr-code-${Date.now()}.png`);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={!value.trim()}
      className={`btn-primary flex items-center justify-center gap-2 w-full ${
        !value.trim() ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Download QR Code
    </button>
  );
};

export default DownloadButton;