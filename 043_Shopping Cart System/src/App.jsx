import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Hero section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome to ShopEasy
            </h2>
            <p className="text-gray-600">
              Discover amazing products at great prices
            </p>
          </div>
          
          {/* Products grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Footer note */}
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>Free shipping on orders over $50 • 30-day returns</p>
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;