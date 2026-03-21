import React, { useState } from 'react';
import { useFormValidation } from '../../hooks/useFormValidation';
import { validateTweet } from '../../utils/validators';

function TweetForm({ onTweet }) {
  const [content, setContent] = useState('');
  const { errors, validate, handleBlur, getFieldError, setErrors } = useFormValidation(validateTweet);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValid = validate({ content });
    
    if (isValid) {
      const result = onTweet(content);
      if (result.success) {
        setContent('');
        setErrors({});
      }
    }
  };

  const charCount = content.length;
  const isOverLimit = charCount > 280;
  const isNearLimit = charCount > 240;

  return (
    <form onSubmit={handleSubmit} className="border-b border-gray-200 dark:border-gray-800 p-4">
      <div className="flex space-x-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={() => handleBlur('content')}
            placeholder="What's happening?"
            className={`w-full resize-none border-0 focus:ring-0 text-lg dark:bg-gray-900 dark:text-white
              ${getFieldError('content') ? 'border-red-500' : ''}`}
            rows="3"
            maxLength="300"
          />
          
          {/* Character counter */}
          {content.length > 0 && (
            <div className="flex justify-end mb-2">
              <span className={`text-sm ${
                isOverLimit 
                  ? 'text-red-500 font-bold' 
                  : isNearLimit 
                    ? 'text-yellow-500' 
                    : 'text-gray-500'
              }`}>
                {charCount}/280
              </span>
            </div>
          )}

          {/* Error message */}
          {getFieldError('content') && (
            <p className="text-red-500 text-sm mb-2">{getFieldError('content')}</p>
          )}

          <div className="flex items-center justify-between mt-2">
            <div className="flex space-x-2 text-twitter-blue">
              <button type="button" className="hover:bg-blue-50 p-2 rounded-full transition">
                📷
              </button>
              <button type="button" className="hover:bg-blue-50 p-2 rounded-full transition">
                📊
              </button>
              <button type="button" className="hover:bg-blue-50 p-2 rounded-full transition">
                😊
              </button>
            </div>
            <button
              type="submit"
              disabled={content.length === 0 || content.length > 280}
              className={`px-4 py-2 rounded-full font-bold transition
                ${content.length === 0 || content.length > 280
                  ? 'bg-blue-200 cursor-not-allowed'
                  : 'bg-twitter-blue hover:bg-twitter-blueHover text-white'
                }`}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TweetForm;