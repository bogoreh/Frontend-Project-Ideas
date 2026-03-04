import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-0 animate-fadeIn">
      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-800 truncate">
          {item.name}
        </h4>
        <p className="text-sm text-gray-500 mt-1">
          ${item.price.toFixed(2)} each
        </p>
        
        <div className="flex items-center mt-2">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
            >
              -
            </button>
            <span className="px-4 py-1 text-gray-700 font-medium min-w-[40px] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
            >
              +
            </button>
          </div>
          
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-auto text-red-500 hover:text-red-600 transition-colors p-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="text-right">
        <p className="font-semibold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;