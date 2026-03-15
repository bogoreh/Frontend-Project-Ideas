export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return {
    isValid: password.length >= 6,
    message: password.length < 6 ? 'Password must be at least 6 characters' : ''
  };
};

export const validateUsername = (username) => {
  const re = /^[a-zA-Z0-9._]{3,30}$/;
  return {
    isValid: re.test(username),
    message: !re.test(username) ? 'Username must be 3-30 characters and can only contain letters, numbers, dots, and underscores' : ''
  };
};

export const validatePost = (content, image) => {
  if (!image && !content) {
    return { isValid: false, message: 'Please add either an image or caption' };
  }
  return { isValid: true, message: '' };
};