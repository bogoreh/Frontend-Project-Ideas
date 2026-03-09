export const validateUrl = (url) => {
  if (!url || url.trim() === '') {
    return { isValid: false, error: 'URL cannot be empty' };
  }

  // Basic URL validation
  const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  
  if (!urlPattern.test(url)) {
    return { isValid: false, error: 'Please enter a valid URL' };
  }

  // Check if URL has protocol, add https:// if missing
  let formattedUrl = url;
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    formattedUrl = 'https://' + url;
  }

  return { isValid: true, error: null, formattedUrl };
};

export const sanitizeInput = (input) => {
  return input.trim().replace(/[<>]/g, '');
};