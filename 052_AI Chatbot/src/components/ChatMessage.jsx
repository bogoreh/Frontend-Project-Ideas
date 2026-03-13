import React from 'react';
import { Bot, User, Clock, CheckCheck } from 'lucide-react';

const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  return `${hours}:${minutes} ${ampm}`;
};

const ChatMessage = ({ message }) => {
  const isAI = message.sender === 'ai';

  return (
    <div className={`flex items-start gap-3 animate-slide-up ${isAI ? '' : 'flex-row-reverse'}`}>
      {/* Avatar */}
      <div className={isAI ? 'avatar-ai' : 'avatar-user'}>
        {isAI ? <Bot size={20} className="text-white" /> : <User size={20} className="text-white" />}
      </div>

      {/* Message Content */}
      <div className={`flex flex-col ${isAI ? 'items-start' : 'items-end'}`}>
        <div className={isAI ? 'message-bubble-ai' : 'message-bubble-user'}>
          <p className="text-white/90 leading-relaxed">{message.text}</p>
        </div>
        
        {/* Message metadata */}
        <div className="flex items-center gap-2 mt-1 px-2">
          <Clock size={12} className="text-white/40" />
          <span className="text-xs text-white/40">
            {formatTime(message.timestamp)}
          </span>
          {!isAI && (
            <CheckCheck size={12} className="text-blue-400" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;