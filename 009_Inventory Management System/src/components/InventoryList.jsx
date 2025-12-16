import React from 'react';
import './InventoryList.css';

const InventoryList = ({ items, deleteItem, updateQuantity }) => {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(id);
    }
  };

  const handleQuantityChange = (id, change) => {
    const item = items.find(item => item.id === id);
    const newQuantity = item.quantity + change;
    if (newQuantity >= 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Electronics': '#667eea',
      'Clothing': '#f093fb',
      'Books': '#4facfe',
      'Food': '#43e97b',
      'Furniture': '#fa709a',
      'Other': '#a8edea'
    };
    return colors[category] || '#666';
  };

  if (items.length === 0) {
    return (
      <div className="card">
        <h2>📋 Inventory Items</h2>
        <div className="empty-state">
          <p>No items in inventory. Add some items to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>📋 Inventory Items ({items.length})</h2>
      <div className="inventory-list">
        {items.map(item => (
          <div key={item.id} className="inventory-item">
            <div className="item-info">
              <div className="item-header">
                <h3>{item.name}</h3>
                <span 
                  className="category-badge"
                  style={{ backgroundColor: getCategoryColor(item.category) }}
                >
                  {item.category}
                </span>
              </div>
              <p className="item-description">{item.description}</p>
              <div className="item-details">
                <span className="price">${item.price.toFixed(2)}</span>
                <span className="last-updated">Updated: {item.lastUpdated}</span>
              </div>
            </div>
            
            <div className="item-controls">
              <div className="quantity-control">
                <button 
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="quantity-btn"
                  disabled={item.quantity <= 0}
                >
                  −
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={() => handleDelete(item.id)}
                className="delete-btn"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;