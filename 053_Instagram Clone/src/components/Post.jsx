import React, { useState } from 'react';
import { FiHeart, FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(post.liked);
  const [saved, setSaved] = useState(post.saved);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      // Add comment logic here
      setComment('');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-4">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <img
            src={post.userAvatar}
            alt={post.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{post.username}</p>
            <p className="text-xs text-gray-500">{post.location}</p>
          </div>
        </div>
        <FiMoreHorizontal className="cursor-pointer" />
      </div>

      {/* Post Image */}
      <img
        src={post.image}
        alt="Post"
        className="w-full aspect-square object-cover"
      />

      {/* Post Actions */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <FiHeart
              className={`text-2xl cursor-pointer ${liked ? 'text-red-500 fill-current' : ''}`}
              onClick={handleLike}
            />
            <FiMessageCircle
              className="text-2xl cursor-pointer"
              onClick={() => setShowComments(!showComments)}
            />
            <FiSend className="text-2xl cursor-pointer" />
          </div>
          <FiBookmark
            className={`text-2xl cursor-pointer ${saved ? 'text-black fill-current' : ''}`}
            onClick={() => setSaved(!saved)}
          />
        </div>

        {/* Likes */}
        <p className="font-semibold text-sm mb-1">{likesCount.toLocaleString()} likes</p>

        {/* Caption */}
        <p className="text-sm">
          <span className="font-semibold">{post.username}</span> {post.caption}
        </p>

        {/* View Comments */}
        {post.comments > 0 && (
          <p
            className="text-gray-500 text-sm mt-1 cursor-pointer"
            onClick={() => setShowComments(!showComments)}
          >
            View all {post.comments} comments
          </p>
        )}

        {/* Comments Section */}
        {showComments && (
          <div className="mt-2 space-y-2">
            {post.commentsList.map(comment => (
              <div key={comment.id} className="text-sm">
                <span className="font-semibold">{comment.username}</span> {comment.text}
              </div>
            ))}
          </div>
        )}

        {/* Timestamp */}
        <p className="text-gray-400 text-xs uppercase mt-2">{post.timestamp}</p>

        {/* Add Comment */}
        <form onSubmit={handleComment} className="mt-3 flex items-center border-t border-gray-200 pt-3">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 text-sm focus:outline-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className={`text-blue-500 text-sm font-semibold ${!comment.trim() ? 'opacity-50' : ''}`}
            disabled={!comment.trim()}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;