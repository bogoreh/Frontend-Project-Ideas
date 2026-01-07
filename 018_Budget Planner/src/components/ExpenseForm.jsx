import { useState } from 'react'

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  
  const categories = ['Food', 'Transportation', 'Utilities', 'Entertainment', 'Healthcare', 'Shopping', 'Other']

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!name.trim() || !amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid expense name and amount')
      return
    }
    
    addExpense({ name, amount: parseFloat(amount), category })
    
    // Reset form
    setName('')
    setAmount('')
    setCategory('Food')
  }

  return (
    <div className="expense-form">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="expense-name">Expense Name</label>
          <input
            type="text"
            id="expense-name"
            placeholder="e.g., Groceries, Netflix, etc."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="expense-amount">Amount ($)</label>
          <input
            type="number"
            id="expense-amount"
            placeholder="0.00"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="expense-category">Category</label>
          <select 
            id="expense-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <button type="submit" className="add-button">
          <i className="icon">+</i> Add Expense
        </button>
      </form>
    </div>
  )
}

export default ExpenseForm