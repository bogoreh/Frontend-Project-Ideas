import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { validateEmail, validatePassword, validateConfirmPassword } from '../utils/validation';

function AuthModal({ onClose, onLogin, onSignup }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    // Password validation
    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;
    
    // Confirm password validation (for signup)
    if (!isLogin) {
      const confirmError = validateConfirmPassword(formData.password, formData.confirmPassword);
      if (confirmError) newErrors.confirmPassword = confirmError;
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    let success;
    if (isLogin) {
      success = onLogin(formData.email, formData.password);
    } else {
      success = onSignup(formData.email, formData.password, formData.confirmPassword);
    }
    
    if (!success) {
      alert('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative bg-[#141414] w-full max-w-md rounded-lg p-6 md:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-6">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#181818] rounded border ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              } focus:outline-none focus:border-white text-white`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#181818] rounded border ${
                errors.password ? 'border-red-500' : 'border-gray-600'
              } focus:outline-none focus:border-white text-white`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {!isLogin && (
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#181818] rounded border ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-600'
                } focus:outline-none focus:border-white text-white`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#E50914] text-white py-3 rounded font-semibold 
                     hover:bg-red-700 transition"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-4">
          {isLogin ? 'New to Netflix?' : 'Already have an account?'}{' '}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setErrors({});
              setFormData({ email: '', password: '', confirmPassword: '' });
            }}
            className="text-white hover:underline"
          >
            {isLogin ? 'Sign up now' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;