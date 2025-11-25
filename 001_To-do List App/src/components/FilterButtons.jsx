import '../styles/App.css';

function FilterButtons({ filter, setFilter }) {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="filter-buttons">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          className={`filter-button ${filter === key ? 'active' : ''}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;