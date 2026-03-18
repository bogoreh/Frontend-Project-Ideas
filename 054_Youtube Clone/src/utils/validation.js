export const validateSearch = (query) => {
  if (!query || query.trim().length === 0) {
    return { isValid: false, error: "Search query cannot be empty" };
  }
  if (query.length > 100) {
    return { isValid: false, error: "Search query too long (max 100 characters)" };
  }
  if (/[<>{}]/.test(query)) {
    return { isValid: false, error: "Invalid characters in search query" };
  }
  return { isValid: true, sanitizedQuery: query.trim() };
};

export const validateComment = (comment) => {
  if (!comment || comment.trim().length === 0) {
    return { isValid: false, error: "Comment cannot be empty" };
  }
  if (comment.length > 1000) {
    return { isValid: false, error: "Comment too long (max 1000 characters)" };
  }
  if (comment.length < 2) {
    return { isValid: false, error: "Comment too short" };
  }
  return { isValid: true, sanitizedComment: comment.trim() };
};

export const formatViews = (views) => {
  const num = parseInt(views);
  if (isNaN(num)) return views;
  
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};