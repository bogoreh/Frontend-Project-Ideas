import React, { useState } from 'react';
import { validateUrl, validateFileName, validateFileType } from '../utils/validators';

const DownloadForm = ({ onDownload, loading }) => {
  const [formData, setFormData] = useState({
    url: '',
    fileName: '',
    fileType: '',
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    const urlValidation = validateUrl(formData.url);
    if (!urlValidation.isValid) {
      newErrors.url = urlValidation.error;
    }
    
    const fileNameValidation = validateFileName(formData.fileName || 'downloaded-file');
    if (!fileNameValidation.isValid) {
      newErrors.fileName = fileNameValidation.error;
    }
    
    if (formData.fileType) {
      const fileTypeValidation = validateFileType(formData.fileType);
      if (!fileTypeValidation.isValid) {
        newErrors.fileType = fileTypeValidation.error;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const fileName = formData.fileName || 
      `download-${Date.now()}.${formData.fileType || 'file'}`;
    
    const result = await onDownload(formData.url, fileName);
    
    if (result.success) {
      setFormData({
        url: '',
        fileName: '',
        fileType: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* URL Input */}
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
          File URL <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="https://example.com/file.pdf"
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.url ? 'border-red-500' : 'border-gray-300'
          } input-focus`}
          disabled={loading}
        />
        {errors.url && (
          <p className="mt-1 text-sm text-red-600">{errors.url}</p>
        )}
      </div>

      {/* File Name Input */}
      <div>
        <label htmlFor="fileName" className="block text-sm font-medium text-gray-700 mb-1">
          File Name <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="text"
          id="fileName"
          name="fileName"
          value={formData.fileName}
          onChange={handleChange}
          placeholder="my-file.pdf"
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.fileName ? 'border-red-500' : 'border-gray-300'
          } input-focus`}
          disabled={loading}
        />
        {errors.fileName && (
          <p className="mt-1 text-sm text-red-600">{errors.fileName}</p>
        )}
      </div>

      {/* File Type Input */}
      <div>
        <label htmlFor="fileType" className="block text-sm font-medium text-gray-700 mb-1">
          File Type <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="text"
          id="fileType"
          name="fileType"
          value={formData.fileType}
          onChange={handleChange}
          placeholder="pdf, jpg, png, etc."
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.fileType ? 'border-red-500' : 'border-gray-300'
          } input-focus`}
          disabled={loading}
        />
        {errors.fileType && (
          <p className="mt-1 text-sm text-red-600">{errors.fileType}</p>
        )}
        <p className="mt-1 text-xs text-gray-500">
          Allowed: pdf, jpg, png, doc, txt, mp3, mp4, zip
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full touch-manipulation"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Downloading...
          </span>
        ) : (
          'Download File'
        )}
      </button>
    </form>
  );
};

export default DownloadForm;