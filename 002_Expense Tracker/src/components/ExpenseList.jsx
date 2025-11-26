export default function ExpenseList({ transactions, onDeleteTransaction, filters }) {
  const filteredTransactions = transactions.filter(transaction => {
    if (filters.type && transaction.type !== filters.type) return false;
    if (filters.category && transaction.category !== filters.category) return false;
    if (filters.startDate && transaction.date < filters.startDate) return false;
    if (filters.endDate && transaction.date > filters.endDate) return false;
    return true;
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getTotal = () => {
    const income = filteredTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const expenses = filteredTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    
    return { income, expenses, net: income - expenses };
  };

  const totals = getTotal();

  return (
    <div className="expense-list">
      <div className="summary">
        <div className="summary-item income">
          <span>Total Income:</span>
          <span>{formatCurrency(totals.income)}</span>
        </div>
        <div className="summary-item expense">
          <span>Total Expenses:</span>
          <span>{formatCurrency(totals.expenses)}</span>
        </div>
        <div className={`summary-item net ${totals.net >= 0 ? 'positive' : 'negative'}`}>
          <span>Net:</span>
          <span>{formatCurrency(totals.net)}</span>
        </div>
      </div>

      <div className="transactions">
        <h3>Transactions ({filteredTransactions.length})</h3>
        {filteredTransactions.length === 0 ? (
          <p className="no-transactions">No transactions found</p>
        ) : (
          filteredTransactions.map(transaction => (
            <div key={transaction.id} className={`transaction ${transaction.type}`}>
              <div className="transaction-info">
                <div className="transaction-main">
                  <span className="description">{transaction.description}</span>
                  <span className="category">{transaction.category}</span>
                </div>
                <div className="transaction-details">
                  <span className="date">{transaction.date}</span>
                  <span className={`amount ${transaction.type}`}>
                    {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onDeleteTransaction(transaction.id)}
                className="delete-btn"
                aria-label="Delete transaction"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}