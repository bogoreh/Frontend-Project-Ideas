import React, { useState } from 'react';
import { validateComment } from '../utils/validation';

const CommentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    comment: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { isValid, errors: validationErrors } = validateComment(formData);
    
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    onSubmit({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    });

    setFormData({ username: '', email: '', comment: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Leave a Comment</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username *
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.username ? 'border-red-500' : 'border-gray-300'
            } input-focus transition-all duration-200`}
            placeholder="John Doe"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-500">{errors.username}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } input-focus transition-all duration-200`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Comment *
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.comment ? 'border-red-500' : 'border-gray-300'
            } input-focus transition-all duration-200 resize-none`}
            placeholder="Write your comment here..."
          />
          <div className="flex justify-between mt-1">
            {errors.comment ? (
              <p className="text-sm text-red-500">{errors.comment}</p>
            ) : (
              <p className="text-sm text-gray-400">
                {formData.comment.length}/500 characters
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;