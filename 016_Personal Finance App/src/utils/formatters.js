export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount)
}

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const getCategoryIcon = (category) => {
  const icons = {
    Food: '🍔',
    Transport: '🚗',
    Entertainment: '🎬',
    Utilities: '🏠',
    Dining: '🍽️',
    Education: '📚',
    Shopping: '🛍️',
    Health: '🏥',
    Salary: '💰',
    Freelance: '💼'
  }
  return icons[category] || '📊'
}

export const calculatePercentage = (current, total) => {
  if (total === 0) return 0
  return Math.min((current / total) * 100, 100)
}