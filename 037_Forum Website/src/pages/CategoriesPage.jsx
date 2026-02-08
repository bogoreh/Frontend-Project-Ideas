import React, { useState } from 'react';
import { 
  Hash, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Clock,
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'technology',
      name: 'Technology',
      description: 'Discuss the latest in tech, programming, and software development',
      color: 'bg-blue-500',
      threads: 128,
      posts: 892,
      latestPost: {
        title: 'React 19 Beta Features Overview',
        author: 'Alex Chen',
        time: '2 hours ago'
      }
    },
    {
      id: 'design',
      name: 'Design',
      description: 'UI/UX, graphic design, and creative discussions',
      color: 'bg-purple-500',
      threads: 64,
      posts: 324,
      latestPost: {
        title: 'Figma Auto Layout Best Practices',
        author: 'Sarah Miller',
        time: '4 hours ago'
      }
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Startups, entrepreneurship, and career advice',
      color: 'bg-green-500',
      threads: 42,
      posts: 216,
      latestPost: {
        title: 'Remote Work Productivity Tips',
        author: 'David Kim',
        time: '1 day ago'
      }
    },
    {
      id: 'science',
      name: 'Science',
      description: 'Scientific discoveries, research, and discussions',
      color: 'bg-red-500',
      threads: 36,
      posts: 189,
      latestPost: {
        title: 'Latest Quantum Computing Breakthroughs',
        author: 'Dr. Wilson',
        time: '2 days ago'
      }
    },
    {
      id: 'arts',
      name: 'Arts & Culture',
      description: 'Music, movies, literature, and creative arts',
      color: 'bg-yellow-500',
      threads: 28,
      posts: 142,
      latestPost: {
        title: 'Modern Art Exhibition Reviews',
        author: 'Emma Taylor',
        time: '3 days ago'
      }
    },
    {
      id: 'sports',
      name: 'Sports',
      description: 'Sports news, events, and discussions',
      color: 'bg-pink-500',
      threads: 24,
      posts: 118,
      latestPost: {
        title: 'Champions League Predictions',
        author: 'Michael Brown',
        time: '5 hours ago'
      }
    },
    {
      id: 'gaming',
      name: 'Gaming',
      description: 'Video games, esports, and gaming culture',
      color: 'bg-indigo-500',
      threads: 56,
      posts: 289,
      latestPost: {
        title: 'Upcoming Game Releases 2024',
        author: 'GamerPro',
        time: '1 hour ago'
      }
    },
    {
      id: 'health',
      name: 'Health & Fitness',
      description: 'Wellness, nutrition, and fitness discussions',
      color: 'bg-teal-500',
      threads: 32,
      posts: 167,
      latestPost: {
        title: 'Meditation Techniques for Stress',
        author: 'WellnessCoach',
        time: '6 hours ago'
      }
    }
  ];

  const popularTags = [
    { name: 'React', count: 42 },
    { name: 'JavaScript', count: 38 },
    { name: 'Startup', count: 25 },
    { name: 'AI', count: 56 },
    { name: 'Web3', count: 18 },
    { name: 'Design Systems', count: 22 },
    { name: 'Productivity', count: 19 },
    { name: 'Remote Work', count: 27 },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center">
          <Hash className="w-10 h-10 mr-4 text-purple-400" />
          Categories
        </h1>
        <p className="text-white/70 text-lg">
          Explore discussions by category
        </p>
      </div>

      {/* Search and Filter */}
      <div className="glass-effect rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category) => (
          <div 
            key={category.id}
            className={`forum-card glass-effect rounded-xl p-6 cursor-pointer transition-all ${
              selectedCategory === category.id ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                  <Hash className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-white/60 text-sm">{category.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/40" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center space-x-2 text-white/70">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">Threads</span>
                </div>
                <p className="text-2xl font-bold text-white mt-1">{category.threads}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center space-x-2 text-white/70">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Posts</span>
                </div>
                <p className="text-2xl font-bold text-white mt-1">{category.posts}</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-white/60 text-sm mb-1">Latest Post</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium truncate">{category.latestPost.title}</p>
                  <p className="text-white/60 text-sm">by {category.latestPost.author}</p>
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <Clock className="w-3 h-3 mr-1" />
                  {category.latestPost.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Tags */}
      <div className="glass-effect rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
          Popular Tags
        </h2>
        <div className="flex flex-wrap gap-3">
          {popularTags.map((tag, index) => (
            <button
              key={tag.name}
              className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <span className="text-white font-medium">{tag.name}</span>
              <span className="text-white/60 text-sm bg-white/10 group-hover:bg-white/20 px-2 py-1 rounded-full">
                {tag.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Total Categories</p>
              <p className="text-3xl font-bold text-white mt-2">{categories.length}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Hash className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Total Threads</p>
              <p className="text-3xl font-bold text-white mt-2">
                {categories.reduce((sum, cat) => sum + cat.threads, 0)}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Total Posts</p>
              <p className="text-3xl font-bold text-white mt-2">
                {categories.reduce((sum, cat) => sum + cat.posts, 0)}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Active Users</p>
              <p className="text-3xl font-bold text-white mt-2">1,248</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-pink-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;