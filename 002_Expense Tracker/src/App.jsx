import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [transactions, setTransactions] = useLocalStorage('expenseTracker', []);
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    startDate: '',
    endDate: ''
  });

  const addTransaction = (transaction) => {
    setTransactions(prev => [transaction, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>💰 Expense Tracker</h1>
        <p>Track your income and expenses with powerful analytics</p>
      </header>

      <div className="app-container">
        <div className="sidebar">
          <ExpenseForm onAddTransaction={addTransaction} />
          <Filter onFilterChange={handleFilterChange} />
        </div>

        <div className="main-content">
          <ExpenseChart transactions={transactions} />
          <ExpenseList 
            transactions={transactions}
            onDeleteTransaction={deleteTransaction}
            filters={filters}
          />
        </div>
      </div>
    </div>
  );
}

export default App;