const BudgetSummary = ({ income, totalExpenses, balance, setIncome }) => {
  return (
    <div className="budget-summary">
      <h2>Budget Summary</h2>
      <div className="summary-cards">
        <div className="summary-card income">
          <h3>Monthly Income</h3>
          <div className="amount">
            <span className="dollar">$</span>
            <input 
              type="number" 
              value={income} 
              onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
              className="income-input"
            />
          </div>
          <p className="card-subtext">Your monthly take-home pay</p>
        </div>
        
        <div className="summary-card expenses">
          <h3>Total Expenses</h3>
          <div className="amount">${totalExpenses.toFixed(2)}</div>
          <p className="card-subtext">Sum of all your expenses</p>
        </div>
        
        <div className={`summary-card balance ${balance < 0 ? 'negative' : ''}`}>
          <h3>Remaining Balance</h3>
          <div className="amount">${balance.toFixed(2)}</div>
          <p className="card-subtext">{balance >= 0 ? 'You are within budget!' : 'You are over budget!'}</p>
        </div>
      </div>
    </div>
  )
}

export default BudgetSummary