import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div className="avatar-ai">
        <Bot size={20} className="text-white" />
      </div>
      
      <div className="typing-indicator">
        <div className="typing-dot" style={{ animationDelay: '0s' }}></div>
        <div className="typing-dot" style={{ animationDelay: '0.2s' }}></div>
        <div className="typing-dot" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

export default TypingIndicator;