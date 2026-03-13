import React, { useState } from 'react';
import { Send, Paperclip, Smile, Mic } from 'lucide-react';
import { validateMessage } from '../utils/validators';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validation = validateMessage(message);
    
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }

    setError('');
    onSendMessage(message);
    setMessage('');
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="input-container">
        <button
          type="button"
          className="p-2 text-white/50 hover:text-white transition-colors hover:scale-110 transform duration-200"
        >
          <Paperclip size={20} />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Type your message here..."
          className="chat-input"
          maxLength={500}
        />
        
        <button
          type="button"
          className="p-2 text-white/50 hover:text-white transition-colors hover:scale-110 transform duration-200"
        >
          <Smile size={20} />
        </button>
        
        <button
          type="button"
          className="p-2 text-white/50 hover:text-white transition-colors hover:scale-110 transform duration-200"
        >
          <Mic size={20} />
        </button>
        
        <button
          type="submit"
          disabled={!message.trim()}
          className="send-button"
        >
          <Send size={20} />
        </button>
      </form>
      
      {/* Character counter */}
      <div className="absolute right-8 -top-6 text-xs text-white/40">
        {message.length}/500
      </div>
      
      {/* Error message */}
      {error && (
        <div className="validation-error">
          <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></span>
          {error}
        </div>
      )}
    </div>
  );
};

export default ChatInput;