import React, { useState } from 'react';
import Header from './components/Header';
import InventoryForm from './components/InventoryForm';
import InventoryList from './components/InventoryList';
import Statistics from './components/Statistics';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      quantity: 5,
      price: 999.99,
      description: 'Gaming laptop with RTX 4060',
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      name: 'T-Shirt',
      category: 'Clothing',
      quantity: 20,
      price: 19.99,
      description: 'Cotton t-shirt, various colors',
      lastUpdated: '2024-01-14'
    },
    {
      id: 3,
      name: 'Coffee Mug',
      category: 'Other',
      quantity: 3,
      price: 12.50,
      description: 'Ceramic mug with company logo',
      lastUpdated: '2024-01-13'
    }
  ]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: newQuantity, lastUpdated: new Date().toLocaleDateString() }
        : item
    ));
  };

  return (
    <div className="app">
      <Header />
      
      <div className="container">
        <div className="main-content">
          <InventoryForm addItem={addItem} />
          <Statistics items={items} />
        </div>
        
        <InventoryList 
          items={items} 
          deleteItem={deleteItem}
          updateQuantity={updateQuantity}
        />
        
        <footer className="footer">
          <p>Inventory Management System © 2025 | Total Items: {items.length} | Total Value: $
            {items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;