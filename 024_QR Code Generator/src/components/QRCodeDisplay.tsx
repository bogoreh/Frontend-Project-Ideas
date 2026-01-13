import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRCodeDisplayProps {
  value: string;
  size: number;
  fgColor: string;
  bgColor: string;
  level: 'L' | 'M' | 'Q' | 'H';
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ 
  value, 
  size, 
  fgColor, 
  bgColor, 
  level 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && value.trim()) {
      QRCode.toCanvas(
        canvasRef.current,
        value,
        {
          width: size,
          margin: 2,
          color: {
            dark: fgColor,
            light: bgColor,
          },
          errorCorrectionLevel: level,
        },
        (error) => {
          if (error) console.error(error);
        }
      );
    }
  }, [value, size, fgColor, bgColor, level]);

  if (!value.trim()) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4">
          <div className="text-gray-400">
            <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 005.656-5.656l-1.1 1.1" />
            </svg>
            <p className="text-lg font-medium">Enter content to generate QR Code</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg mb-6">
        <canvas
          ref={canvasRef}
          id="qr-code-canvas"
          className="rounded-xl"
        />
        
        {/* Decorative corner elements */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-500 rounded-tr-lg"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-500 rounded-bl-lg"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
      </div>
      
      <div className="text-sm text-gray-600 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl">
        <p className="font-medium">Scan this QR Code with any QR scanner</p>
      </div>
    </div>
  );
};

export default QRCodeDisplay;