export const downloadQRCode = (elementId: string, fileName: string = 'qr-code.png') => {
  const canvas = document.getElementById(elementId) as HTMLCanvasElement;
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }
  
  try {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (error) {
    console.error('Error downloading QR code:', error);
  }
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};