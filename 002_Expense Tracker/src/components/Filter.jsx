import { useState } from 'react';

const CATEGORIES = {
  income: ['Salary', 'Freelance', 'Investment', 'Gift', 'Other Income'],
  expense: ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Healthcare', 'Education', 'Other']
};

export default function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    startDate: '',
    endDate: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetFilters = {
      type: '',
      category: '',
      startDate: '',
      endDate: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="filter">
      <h3>Filters</h3>
      
      <div className="filter-grid">
        <div className="filter-group">
          <label>Type:</label>
          <select 
            value={filters.type} 
            onChange={(e) => handleFilterChange({ ...filters, type: e.target.value })}
          >
            <option value="">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Category:</label>
          <select 
            value={filters.category} 
            onChange={(e) => handleFilterChange({ ...filters, category: e.target.value })}
          >
            <option value="">All Categories</option>
            {filters.type === 'income' && CATEGORIES.income.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
            {filters.type === 'expense' && CATEGORIES.expense.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
            {!filters.type && [...CATEGORIES.income, ...CATEGORIES.expense].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={filters.startDate}
            onChange={(e) => handleFilterChange({ ...filters, startDate: e.target.value })}
          />
        </div>

        <div className="filter-group">
          <label>End Date:</label>
          <input
            type="date"
            value={filters.endDate}
            onChange={(e) => handleFilterChange({ ...filters, endDate: e.target.value })}
          />
        </div>

        <div className="filter-group">
          <button onClick={resetFilters} className="btn-secondary">
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}