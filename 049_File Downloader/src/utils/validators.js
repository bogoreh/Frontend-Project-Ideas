export const validateUrl = (url) => {
  if (!url || url.trim() === '') {
    return { isValid: false, error: 'URL is required' };
  }
  
  try {
    new URL(url);
    return { isValid: true, error: null };
  } catch {
    return { isValid: false, error: 'Please enter a valid URL' };
  }
};

export const validateFileName = (fileName) => {
  if (!fileName || fileName.trim() === '') {
    return { isValid: false, error: 'File name is required' };
  }
  
  if (fileName.length > 100) {
    return { isValid: false, error: 'File name must be less than 100 characters' };
  }
  
  // Check for invalid characters
  const invalidChars = /[<>:"/\\|?*]/;
  if (invalidChars.test(fileName)) {
    return { isValid: false, error: 'File name contains invalid characters' };
  }
  
  return { isValid: true, error: null };
};

export const validateFileType = (fileType) => {
  const allowedTypes = ['pdf', 'jpg', 'png', 'doc', 'txt', 'mp3', 'mp4', 'zip'];
  
  if (!fileType) {
    return { isValid: true, error: null }; // Optional field
  }
  
  if (!allowedTypes.includes(fileType.toLowerCase())) {
    return { isValid: false, error: 'File type must be: pdf, jpg, png, doc, txt, mp3, mp4, or zip' };
  }
  
  return { isValid: true, error: null };
};