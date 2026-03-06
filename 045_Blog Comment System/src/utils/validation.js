export const validateComment = (data) => {
  const errors = {};

  // Username validation
  if (!data.username?.trim()) {
    errors.username = 'Username is required';
  } else if (data.username.length < 3) {
    errors.username = 'Username must be at least 3 characters';
  } else if (data.username.length > 30) {
    errors.username = 'Username must be less than 30 characters';
  } else if (!/^[a-zA-Z0-9\s]+$/.test(data.username)) {
    errors.username = 'Username can only contain letters, numbers, and spaces';
  }

  // Email validation
  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Comment validation
  if (!data.comment?.trim()) {
    errors.comment = 'Comment is required';
  } else if (data.comment.length < 5) {
    errors.comment = 'Comment must be at least 5 characters';
  } else if (data.comment.length > 500) {
    errors.comment = 'Comment must be less than 500 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};