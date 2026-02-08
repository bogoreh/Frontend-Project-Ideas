import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark,
  MoreVertical,
  User,
  Clock,
  Send,
  ThumbsUp,
  Flag,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThreadPage = () => {
  const navigate = useNavigate();
  const [reply, setReply] = useState('');
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const thread = {
    id: 1,
    title: 'What are the best practices for React performance optimization in 2024?',
    content: `I've been working with React for several years now, and I'm constantly looking for ways to optimize application performance. With React 18 and the upcoming features, I'd love to start a discussion about advanced optimization techniques.

Here are some areas I'd like to discuss:
1. Server Components and their impact on performance
2. Code splitting strategies with React.lazy()
3. Memoization beyond React.memo and useMemo
4. Virtualization for large lists
5. Bundle size optimization

I recently worked on a project where implementing proper code splitting reduced the initial bundle size by 60%. The key was identifying the right split points and lazy loading non-critical components.

What are your experiences with React performance optimization? Have you tried any new patterns or tools that significantly improved your app's performance?`,
    author: {
      name: 'Alex Johnson',
      role: 'Senior Frontend Engineer',
      avatar: 'AJ',
      posts: 128,
      joinDate: '2022-03-15'
    },
    category: { name: 'Technology', color: 'bg-blue-500' },
    date: '2024-01-15T14:30:00',
    likes: 42,
    views: 324,
    replies: 5,
    tags: ['React', 'Performance', 'JavaScript', 'Optimization', 'Web Development']
  };

  const replies = [
    {
      id: 1,
      author: {
        name: 'Maria Chen',
        role: 'React Specialist',
        avatar: 'MC',
        posts: 89
      },
      content: `Great topic! One technique I've found particularly effective is using React's Profiler API to identify unnecessary re-renders. The React DevTools Profiler is excellent for this.

Additionally, consider:
- Using React's built-in Suspense for data fetching
- Implementing windowing/virtualization for large lists (react-window or react-virtualized)
- Optimizing images and assets
- Service workers for caching`,
      date: '2024-01-15T15:45:00',
      likes: 18,
      isSolution: false
    },
    {
      id: 2,
      author: {
        name: 'David Park',
        role: 'Tech Lead',
        avatar: 'DP',
        posts: 156
      },
      content: `For bundle optimization, I highly recommend looking into:
1. Tree shaking with Webpack/Rollup
2. Dynamic imports with React.lazy()
3. Using smaller alternative libraries
4. Compression (gzip, Brotli)
5. CDN for static assets

Also, don't forget about the Core Web Vitals! LCP, FID, and CLS are crucial for user experience.`,
      date: '2024-01-15T16:20:00',
      likes: 12,
      isSolution: true
    },
    {
      id: 3,
      author: {
        name: 'Sarah Miller',
        role: 'UI Engineer',
        avatar: 'SM',
        posts: 64
      },
      content: `Performance optimization should be data-driven. Always measure before and after implementing changes. Chrome DevTools Lighthouse and WebPageTest are my go-to tools.

Also, consider server-side rendering with Next.js for better initial load performance. The App Router in Next.js 13+ offers great performance improvements.`,
      date: '2024-01-15T17:30:00',
      likes: 8,
      isSolution: false
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (reply.trim()) {
      console.log('Submitting reply:', reply);
      setReply('');
    }
  };

  const handleVote = (direction) => {
    console.log('Vote:', direction);
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-white/70 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Discussions</span>
      </button>

      {/* Main Thread */}
      <div className="forum-card glass-effect rounded-2xl p-6 md:p-8 mb-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`px-3 py-1 rounded-full ${thread.category.color} text-white text-sm font-medium`}>
                {thread.category.name}
              </div>
              {thread.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {thread.title}
            </h1>

            <div className="flex items-center space-x-6 text-white/70 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{formatDate(thread.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{thread.views} views</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-2 rounded-lg transition-colors ${
                liked ? 'bg-red-500/20 text-red-400' : 'bg-white/10 hover:bg-white/20 text-white/70'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-lg transition-colors ${
                bookmarked ? 'bg-yellow-500/20 text-yellow-400' : 'bg-white/10 hover:bg-white/20 text-white/70'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-between mb-8 p-4 rounded-xl bg-white/5">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{thread.author.avatar}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{thread.author.name}</h3>
              <p className="text-white/60">{thread.author.role}</p>
              <p className="text-white/50 text-sm mt-1">
                {thread.author.posts} posts • Joined {thread.author.joinDate}
              </p>
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
            Follow
          </button>
        </div>

        {/* Thread Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div className="text-white/90 leading-relaxed whitespace-pre-line">
            {thread.content}
          </div>
        </div>

        {/* Thread Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleVote('up')}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ChevronUp className="w-5 h-5 text-white" />
              </button>
              <span className="text-2xl font-bold text-white">{thread.likes}</span>
              <button
                onClick={() => handleVote('down')}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ChevronDown className="w-5 h-5 text-white" />
              </button>
            </div>
            <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{thread.replies} Replies</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white/70 hover:text-white transition-colors flex items-center space-x-2">
              <Flag className="w-4 h-4" />
              <span>Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Replies Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Replies ({replies.length})
        </h2>

        <div className="space-y-6">
          {replies.map((replyItem) => (
            <div
              key={replyItem.id}
              className={`forum-card glass-effect rounded-xl p-6 ${
                replyItem.isSolution ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {replyItem.isSolution && (
                <div className="mb-4 flex items-center space-x-2 text-green-400">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span className="font-medium">Marked as Solution</span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                    <span className="text-white font-bold">{replyItem.author.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{replyItem.author.name}</h3>
                    <p className="text-white/60 text-sm">{replyItem.author.role}</p>
                  </div>
                </div>
                <div className="text-white/60 text-sm">
                  {formatDate(replyItem.date)}
                </div>
              </div>

              <div className="text-white/80 mb-6 whitespace-pre-line">
                {replyItem.content}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{replyItem.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>Reply</span>
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  {!replyItem.isSolution && (
                    <button className="px-3 py-1 rounded-lg bg-green-500/20 text-green-400 text-sm font-medium">
                      Mark as Solution
                    </button>
                  )}
                  <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                    <MoreVertical className="w-5 h-5 text-white/70" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reply Form */}
      <div className="forum-card glass-effect rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">Add Your Reply</h3>
        
        <form onSubmit={handleSubmitReply}>
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">You</p>
                <p className="text-white/60 text-sm">Posting as a guest</p>
              </div>
            </div>

            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Share your thoughts..."
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Add Code
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Upload Image
              </button>
            </div>
            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-3 rounded-lg btn-primary"
              disabled={!reply.trim()}
            >
              <Send className="w-5 h-5" />
              <span>Post Reply</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Add missing Eye component
const Eye = ({ className }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export default ThreadPage;