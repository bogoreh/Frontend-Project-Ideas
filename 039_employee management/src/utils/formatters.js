export const formatETB = (amount) => {
  return new Intl.NumberFormat('am-ET', {
    style: 'currency',
    currency: 'ETB',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Format date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-ET', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};