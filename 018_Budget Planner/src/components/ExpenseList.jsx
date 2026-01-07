const ExpenseList = ({ expenses, deleteExpense, totalExpenses }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Food': '#4CAF50',
      'Transportation': '#2196F3',
      'Utilities': '#FF9800',
      'Entertainment': '#9C27B0',
      'Healthcare': '#F44336',
      'Shopping': '#E91E63',
      'Other': '#607D8B'
    }
    return colors[category] || '#607D8B'
  }

  return (
    <div className="expense-list">
      <div className="list-header">
        <h2>Expense List</h2>
        <div className="total-expenses">Total: <span>${totalExpenses.toFixed(2)}</span></div>
      </div>
      
      {expenses.length === 0 ? (
        <div className="empty-list">
          <p>No expenses added yet. Add your first expense above!</p>
        </div>
      ) : (
        <div className="expenses-container">
          {expenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <div className="expense-info">
                <div className="expense-name">{expense.name}</div>
                <div className="expense-category" style={{ backgroundColor: getCategoryColor(expense.category) }}>
                  {expense.category}
                </div>
              </div>
              <div className="expense-amount">${expense.amount.toFixed(2)}</div>
              <button 
                className="delete-btn"
                onClick={() => deleteExpense(expense.id)}
                aria-label={`Delete ${expense.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      
      <div className="category-legend">
        <h3>Categories</h3>
        <div className="legend-items">
          {['Food', 'Transportation', 'Utilities', 'Entertainment', 'Healthcare', 'Shopping', 'Other'].map(cat => (
            <div key={cat} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: getCategoryColor(cat) }}></span>
              <span className="legend-label">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExpenseList