import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const CartSummary = ({ isOpen, onClose }) => {
  const { cartItems, getCartTotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Cart panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                Shopping Cart ({cartItems.length})
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg className="w-24 h-24 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mt-1">Start shopping to add items</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))
              )}
            </div>
            
            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-lg font-bold text-gray-800">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors active:scale-95">
                    Checkout
                  </button>
                  
                  <button 
                    onClick={clearCart}
                    className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors active:scale-95"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;