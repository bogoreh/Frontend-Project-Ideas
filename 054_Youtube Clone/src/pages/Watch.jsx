import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from 'lucide-react';
import { validateComment } from '../utils/validation';

const Watch = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [commentError, setCommentError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleAddComment = (e) => {
    e.preventDefault();
    const validation = validateComment(comment);
    
    if (!validation.isValid) {
      setCommentError(validation.error);
      setTimeout(() => setCommentError(''), 3000);
      return;
    }

    const newComment = {
      id: Date.now(),
      text: validation.sanitizedComment,
      author: "Current User",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop",
      timestamp: "Just now",
      likes: 0
    };

    setComments([newComment, ...comments]);
    setComment('');
    setCommentError('');
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="flex-1 p-4 lg:p-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video Section */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1280&h=720&fit=crop"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video Info */}
            <div className="mt-4">
              <h1 className="text-xl font-semibold text-[#0f0f0f]">
                Building a Modern Web App with React & Tailwind
              </h1>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=48&h=48&fit=crop"
                    alt="Channel"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-[#0f0f0f]">CodeMaster</h3>
                    <p className="text-sm text-gray-600">1.2M subscribers</p>
                  </div>
                  <button 
                    onClick={handleSubscribe}
                    className={`ml-4 px-4 py-2 rounded-full transition-colors font-medium ${
                      isSubscribed 
                        ? 'bg-gray-200 text-[#0f0f0f] hover:bg-gray-300' 
                        : 'bg-[#0f0f0f] text-white hover:bg-[#282828]'
                    }`}
                  >
                    {isSubscribed ? 'Subscribed' : 'Subscribe'}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-l-full hover:bg-gray-200 border-r border-gray-300">
                      <ThumbsUp size={20} className="text-[#0f0f0f]" />
                      <span className="text-[#0f0f0f]">125K</span>
                    </button>
                    <button className="p-2 bg-gray-100 rounded-r-full hover:bg-gray-200">
                      <ThumbsDown size={20} className="text-[#0f0f0f]" />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Share size={20} className="text-[#0f0f0f]" />
                    <span className="hidden sm:inline text-[#0f0f0f]">Share</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Download size={20} className="text-[#0f0f0f]" />
                    <span className="hidden sm:inline text-[#0f0f0f]">Download</span>
                  </button>
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <MoreHorizontal size={20} className="text-[#0f0f0f]" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 p-4 bg-gray-100 rounded-xl">
                <div className="flex gap-2 text-sm mb-2">
                  <span className="font-semibold text-[#0f0f0f]">15K views</span>
                  <span className="text-[#0f0f0f]">•</span>
                  <span className="text-[#0f0f0f]">2 days ago</span>
                </div>
                <p className="text-sm text-[#0f0f0f]">
                  Learn how to build a modern web application using React and Tailwind CSS. 
                  This comprehensive tutorial covers everything from setup to deployment.
                </p>
              </div>

              {/* Comments Section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#0f0f0f] mb-4">{comments.length} Comments</h3>
                
                <form onSubmit={handleAddComment} className="flex gap-4 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <input
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Add a comment..."
                      className="w-full pb-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-[#0f0f0f] placeholder-gray-500"
                    />
                    {commentError && (
                      <p className="text-xs text-red-500 mt-1">{commentError}</p>
                    )}
                    {comment && (
                      <div className="flex gap-2 mt-2">
                        <button 
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                        >
                          Comment
                        </button>
                        <button 
                          type="button"
                          onClick={() => setComment('')}
                          className="px-4 py-2 hover:bg-gray-100 rounded-full text-[#0f0f0f]"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </form>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((c) => (
                    <div key={c.id} className="flex gap-4">
                      <img 
                        src={c.avatar}
                        alt={c.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-[#0f0f0f]">{c.author}</span>
                          <span className="text-xs text-gray-600">{c.timestamp}</span>
                        </div>
                        <p className="text-sm text-[#0f0f0f] mt-1">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Videos Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-[#0f0f0f] mb-4">Recommended</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex gap-2 cursor-pointer group">
                  <div className="relative flex-shrink-0 w-40">
                    <img 
                      src={`https://images.unsplash.com/photo-${1633356122544 + i}?w=168&h=94&fit=crop`}
                      alt="Recommended"
                      className="w-full aspect-video rounded-lg object-cover"
                    />
                    <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                      12:34
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0f0f0f] line-clamp-2 group-hover:text-blue-600">
                      Amazing Video Title That Might Be Really Long
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">Channel Name</p>
                    <p className="text-xs text-gray-600">120K views • 2 days ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;