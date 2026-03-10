import { useState, useCallback } from 'react';

export const useFileDownload = () => {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadFile = useCallback(async (url, fileName) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName || 'downloaded-file';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);

      const newDownload = {
        id: Date.now(),
        fileName: fileName || 'downloaded-file',
        url: url,
        date: new Date().toLocaleString(),
        size: (blob.size / 1024).toFixed(2) + ' KB',
      };

      setDownloads(prev => [newDownload, ...prev].slice(0, 10)); // Keep last 10 downloads
      return { success: true, download: newDownload };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  const removeDownload = (id) => {
    setDownloads(prev => prev.filter(download => download.id !== id));
  };

  const clearDownloads = () => {
    setDownloads([]);
  };

  return {
    downloads,
    loading,
    error,
    downloadFile,
    removeDownload,
    clearDownloads,
  };
};