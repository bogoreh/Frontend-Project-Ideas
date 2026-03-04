import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative pb-[100%] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`
              px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
              ${isAdded 
                ? 'bg-green-500 text-white cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
              }
            `}
          >
            {isAdded ? (
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Added!</span>
              </span>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;