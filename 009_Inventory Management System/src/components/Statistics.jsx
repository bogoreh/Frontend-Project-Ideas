import React from 'react';
import './Statistics.css';

const Statistics = ({ items }) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const lowStockItems = items.filter(item => item.quantity < 5).length;
  
  const categoryCounts = items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const stats = [
    {
      title: 'Total Items',
      value: totalItems,
      icon: '📦',
      color: '#667eea'
    },
    {
      title: 'Total Value',
      value: `$${totalValue.toFixed(2)}`,
      icon: '💰',
      color: '#4caf50'
    },
    {
      title: 'Products',
      value: items.length,
      icon: '📋',
      color: '#ff9800'
    },
    {
      title: 'Low Stock',
      value: lowStockItems,
      icon: '⚠️',
      color: '#f44336'
    }
  ];

  return (
    <div className="card">
      <h2>📊 Inventory Statistics</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ borderColor: stat.color }}>
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {Object.keys(categoryCounts).length > 0 && (
        <div className="category-breakdown">
          <h3>Category Breakdown</h3>
          <div className="category-list">
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div key={category} className="category-item">
                <span className="category-name">{category}</span>
                <div className="category-bar">
                  <div 
                    className="category-fill"
                    style={{ 
                      width: `${(count / items.length) * 100}%`,
                      backgroundColor: '#667eea'
                    }}
                  ></div>
                </div>
                <span className="category-count">{count} items</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;