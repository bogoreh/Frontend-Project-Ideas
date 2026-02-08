import React from 'react';
import { 
  MessageCircle, 
  Eye, 
  ThumbsUp, 
  Clock, 
  User 
} from 'lucide-react';

const ThreadCard = ({ thread }) => {
  const formatTime = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="forum-card glass-effect rounded-xl p-6 mb-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-3 h-3 rounded-full ${thread.category.color}`} />
            <span className="text-white/70 text-sm font-medium">
              {thread.category.name}
            </span>
            {thread.isPinned && (
              <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded">
                Pinned
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-300 transition-colors cursor-pointer">
            {thread.title}
          </h3>
          
          <p className="text-white/70 mb-4 line-clamp-2">
            {thread.content}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-white/60">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium text-white/80">{thread.author}</span>
              </div>
              <div className="flex items-center space-x-1 text-white/60">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{formatTime(thread.date)}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="w-4 h-4 text-green-400" />
                  <span className="text-white/80">{thread.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80">{thread.replies}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span className="text-white/80">{thread.views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;