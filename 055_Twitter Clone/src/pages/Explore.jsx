import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Explore() {
  const [searchQuery, setSearchQuery] = useState('');

  const trends = [
    { category: 'Technology', topic: 'React', tweets: '125K' },
    { category: 'Programming', topic: 'JavaScript', tweets: '89.2K' },
    { category: 'Web Development', topic: 'TailwindCSS', tweets: '45.1K' },
    { category: 'Tech News', topic: 'AI', tweets: '234K' },
    { category: 'Gaming', topic: 'NextJS', tweets: '67.3K' },
  ];

  const filteredTrends = trends.filter(trend =>
    trend.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trend.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-16 md:pb-0 p-4">
      {/* Search Bar */}
      <div className="relative mb-6">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Twitter"
          className="w-full bg-gray-100 dark:bg-gray-800 rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-twitter-blue dark:text-white"
        />
      </div>

      {/* Trends */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4 dark:text-white">Trends for you</h2>
        <div className="space-y-4">
          {filteredTrends.length > 0 ? (
            filteredTrends.map((trend, index) => (
              <div key={index} className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg transition">
                <p className="text-sm text-gray-500 dark:text-gray-400">{trend.category}</p>
                <p className="font-bold dark:text-white">{trend.topic}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{trend.tweets} Tweets</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-4">
              No trends found
            </p>
          )}
        </div>
      </div>

      {/* Who to follow */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mt-4">
        <h2 className="font-bold text-xl mb-4 dark:text-white">Who to follow</h2>
        <div className="space-y-4">
          <FollowSuggestion name="React" username="@reactjs" />
          <FollowSuggestion name="TailwindCSS" username="@tailwindcss" />
          <FollowSuggestion name="Vercel" username="@vercel" />
        </div>
      </div>
    </div>
  );
}

function FollowSuggestion({ name, username }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src="https://via.placeholder.com/40" alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-bold dark:text-white">{name}</p>
          <p className="text-sm text-gray-500">{username}</p>
        </div>
      </div>
      <button
        onClick={() => setFollowing(!following)}
        className={`px-4 py-2 rounded-full font-bold text-sm transition
          ${following 
            ? 'border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700' 
            : 'bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
          }`}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

export default Explore;