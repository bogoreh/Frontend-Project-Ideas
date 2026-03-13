// Message validation utilities
export const validateMessage = (message) => {
  // Check if message exists
  if (!message || message.trim() === '') {
    return {
      isValid: false,
      error: 'Message cannot be empty'
    };
  }

  // Check minimum length
  if (message.trim().length < 2) {
    return {
      isValid: false,
      error: 'Message must be at least 2 characters long'
    };
  }

  // Check maximum length
  if (message.length > 500) {
    return {
      isValid: false,
      error: 'Message cannot exceed 500 characters'
    };
  }

  // Check for spam (repetitive characters)
  const repetitivePattern = /(.)\1{10,}/;
  if (repetitivePattern.test(message)) {
    return {
      isValid: false,
      error: 'Message contains too many repetitive characters'
    };
  }

  // Check for URLs (optional - can be allowed or blocked)
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  if (urlPattern.test(message)) {
    return {
      isValid: false,
      error: 'URLs are not allowed in messages'
    };
  }

  // Check for inappropriate content (basic example)
  const inappropriateWords = ['spam', 'scam', 'fraud']; // Add more as needed
  const containsInappropriate = inappropriateWords.some(word => 
    message.toLowerCase().includes(word)
  );
  
  if (containsInappropriate) {
    return {
      isValid: false,
      error: 'Message contains inappropriate content'
    };
  }

  // All validations passed
  return {
    isValid: true,
    error: null
  };
};

// Email validation (if needed)
export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// Phone number validation (if needed)
export const validatePhone = (phone) => {
  const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phonePattern.test(phone);
};