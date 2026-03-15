import React from 'react';

const Story = ({ username, avatar, isUser = false }) => {
  return (
    <div className="flex flex-col items-center space-y-1 min-w-[70px]">
      <div className={`p-[2px] rounded-full ${isUser ? '' : 'bg-gradient-to-tr from-yellow-400 to-pink-600'}`}>
        <div className="bg-white p-[2px] rounded-full">
          <img
            src={avatar}
            alt={username}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs truncate w-full text-center">
        {isUser ? 'Your Story' : username}
      </span>
    </div>
  );
};

export default Story;