import React from 'react';
import ThreadCard from './ThreadCard';
import { TrendingUp, Filter } from 'lucide-react';

const ThreadList = () => {
  const threads = [
    {
      id: 1,
      title: 'What are the best practices for React performance optimization?',
      content: 'I\'ve been working with React for a while now and I\'m looking to optimize my application performance. What are some advanced techniques beyond memoization?',
      author: 'Alex Johnson',
      date: '2024-01-15T14:30:00',
      category: { name: 'Technology', color: 'bg-blue-500' },
      likes: 42,
      replies: 18,
      views: 324,
      isPinned: true
    },
    {
      id: 2,
      title: 'The future of web design in 2024',
      content: 'With AI tools becoming more prevalent, how do you see web design evolving this year?',
      author: 'Maria Chen',
      date: '2024-01-14T11:20:00',
      category: { name: 'Design', color: 'bg-purple-500' },
      likes: 56,
      replies: 24,
      views: 489,
      isPinned: false
    },
    {
      id: 3,
      title: 'Starting a tech startup in 2024 - Advice needed',
      content: 'Looking for co-founders and advice on getting started in the current market conditions.',
      author: 'David Park',
      date: '2024-01-13T09:15:00',
      category: { name: 'Business', color: 'bg-green-500' },
      likes: 31,
      replies: 12,
      views: 256,
      isPinned: false
    },
    {
      id: 4,
      title: 'Quantum computing breakthroughs this month',
      content: 'Let\'s discuss the latest developments in quantum computing and their implications.',
      author: 'Dr. Sarah Wilson',
      date: '2024-01-12T16:45:00',
      category: { name: 'Science', color: 'bg-red-500' },
      likes: 78,
      replies: 36,
      views: 512,
      isPinned: true
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3 text-yellow-400" />
            Trending Discussions
          </h2>
          <p className="text-white/70">Join the conversation in our active community</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="btn-primary">
            New Discussion
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {threads.map(thread => (
          <ThreadCard key={thread.id} thread={thread} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">
          Load More Discussions
        </button>
      </div>
    </div>
  );
};

export default ThreadList;