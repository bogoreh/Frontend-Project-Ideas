import React, { useState } from 'react';
import { HeartIcon, ChatBubbleLeftIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

function TweetCard({ tweet, onLike }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike(tweet.id);
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition animate-fade-in">
      <div className="flex space-x-3">
        <img
          src={tweet.author.avatar}
          alt={tweet.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold dark:text-white">{tweet.author.name}</span>
            <span className="text-gray-500 text-sm">{tweet.author.username}</span>
            <span className="text-gray-500 text-sm">· {tweet.timestamp}</span>
          </div>
          <p className="mt-2 dark:text-white">{tweet.content}</p>
          
          {/* Engagement buttons */}
          <div className="flex justify-between mt-3 max-w-md">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-twitter-blue transition group">
              <ChatBubbleLeftIcon className="w-5 h-5 group-hover:bg-blue-50 rounded-full p-0.5" />
              <span className="text-sm">{tweet.replies}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition group">
              <ArrowPathRoundedSquareIcon className="w-5 h-5 group-hover:bg-green-50 rounded-full p-0.5" />
              <span className="text-sm">{tweet.retweets}</span>
            </button>
            
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-2 transition group
                ${liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
            >
              {liked ? (
                <HeartIconSolid className="w-5 h-5 animate-slide-up" />
              ) : (
                <HeartIcon className="w-5 h-5 group-hover:bg-red-50 rounded-full p-0.5" />
              )}
              <span className="text-sm">{tweet.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard;