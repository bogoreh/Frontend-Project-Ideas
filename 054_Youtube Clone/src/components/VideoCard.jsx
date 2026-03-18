import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import { formatViews } from '../utils/validation';

const VideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div 
      className="group cursor-pointer animate-slide-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowOptions(false);
      }}
    >
      {/* Thumbnail */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`w-full aspect-video object-cover transition-transform duration-300
            ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </span>
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <div className="w-12 h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
            </div>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="flex gap-3 mt-3">
        <img
          src={video.channelAvatar}
          alt={video.channel}
          className="w-10 h-10 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base line-clamp-2 mb-1">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 hover:text-gray-900">
            {video.channel}
          </p>
          <div className="text-sm text-gray-600 flex items-center gap-1">
            <span>{formatViews(video.views)}</span>
            <span>•</span>
            <span>{video.timestamp}</span>
          </div>
        </div>
        
        {/* Options Menu */}
        <div className="relative flex-shrink-0">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="p-2 hover:bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MoreVertical size={16} />
          </button>
          
          {showOptions && (
            <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                Add to queue
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                Save to Watch later
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                Not interested
              </button>
              <hr className="my-1" />
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                Report
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;