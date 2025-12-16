import React, { useState } from 'react';
import './InventoryForm.css';

const InventoryForm = ({ addItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Electronics',
    quantity: 1,
    price: '',
    description: ''
  });

  const categories = ['Electronics', 'Clothing', 'Books', 'Food', 'Furniture', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      alert('Please fill in all required fields');
      return;
    }
    
    const newItem = {
      ...formData,
      id: Date.now(),
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity),
      lastUpdated: new Date().toLocaleDateString()
    };
    
    addItem(newItem);
    setFormData({
      name: '',
      category: 'Electronics',
      quantity: 1,
      price: '',
      description: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="card">
      <h2>➕ Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Item Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter item name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price ($) *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter item description"
            rows="3"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add to Inventory
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;