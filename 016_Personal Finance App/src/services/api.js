// Mock API service for demonstration
export const authAPI = {
  login: async (email, password) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email && password) {
          resolve({
            success: true,
            user: {
              id: 1,
              name: 'John Doe',
              email: email,
              balance: 12500,
              currency: 'USD'
            },
            token: 'mock-jwt-token'
          })
        } else {
          resolve({
            success: false,
            error: 'Invalid credentials'
          })
        }
      }, 1000)
    })
  },

  register: async (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            id: Date.now(),
            ...userData,
            balance: 0,
            currency: 'USD'
          },
          token: 'mock-jwt-token'
        })
      }, 1000)
    })
  }
}

export const transactionAPI = {
  getTransactions: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Groceries', amount: 85.99, type: 'expense', category: 'Food', date: '2024-01-15' },
          { id: 2, name: 'Salary', amount: 2500, type: 'income', category: 'Salary', date: '2024-01-14' },
          { id: 3, name: 'Netflix', amount: 15.99, type: 'expense', category: 'Entertainment', date: '2024-01-13' },
        ])
      }, 500)
    })
  },

  addTransaction: async (transaction) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          transaction: { id: Date.now(), ...transaction }
        })
      }, 500)
    })
  }
}