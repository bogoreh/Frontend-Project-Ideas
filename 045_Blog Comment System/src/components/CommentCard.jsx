import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const CommentCard = ({ comment }) => {
  const timeAgo = formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true });
  
  // Get initials for avatar
  const initials = comment.username
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-200 animate-fade-in">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">
              {initials}
            </span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-semibold text-gray-800">{comment.username}</h3>
            <span className="text-xs text-gray-400">{timeAgo}</span>
          </div>
          
          <p className="text-sm text-gray-600 mt-2 break-words">
            {comment.comment}
          </p>
          
          <div className="mt-2 flex items-center space-x-4">
            <button className="text-xs text-gray-400 hover:text-blue-600 transition-colors">
              Reply
            </button>
            <button className="text-xs text-gray-400 hover:text-blue-600 transition-colors">
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;