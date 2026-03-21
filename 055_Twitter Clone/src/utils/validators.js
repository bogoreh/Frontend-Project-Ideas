export const validateTweet = (content) => {
  const errors = {};
  
  if (!content || content.trim().length === 0) {
    errors.content = 'Tweet cannot be empty';
  } else if (content.length > 280) {
    errors.content = `Tweet cannot exceed 280 characters (${content.length}/280)`;
  } else if (content.length < 1) {
    errors.content = 'Tweet must be at least 1 character';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateProfile = (profile) => {
  const errors = {};
  
  if (!profile.name || profile.name.trim().length === 0) {
    errors.name = 'Name is required';
  } else if (profile.name.length > 50) {
    errors.name = 'Name cannot exceed 50 characters';
  }
  
  if (profile.bio && profile.bio.length > 160) {
    errors.bio = 'Bio cannot exceed 160 characters';
  }
  
  if (profile.location && profile.location.length > 30) {
    errors.location = 'Location cannot exceed 30 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};