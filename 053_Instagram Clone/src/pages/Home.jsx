import React from 'react';
import Header from '../components/Header';
import Story from '../components/Story';
import Post from '../components/Post';
import Suggestions from '../components/Suggestions';
import MobileNav from '../components/MobileNav';
import { stories, posts, suggestions } from '../data/mockData';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <Header />
      
      <main className="max-w-4xl mx-auto pt-20 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Feed */}
          <div className="flex-1">
            {/* Stories */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 overflow-x-auto">
              <div className="flex space-x-4">
                {stories.map(story => (
                  <Story key={story.id} {...story} />
                ))}
              </div>
            </div>

            {/* Posts */}
            <div>
              {posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar - Hidden on mobile */}
          <div className="hidden md:block w-80">
            <div className="sticky top-20">
              {/* Current User */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">your_username</p>
                    <p className="text-gray-500 text-xs">Your Name</p>
                  </div>
                </div>
                <button className="text-blue-500 text-xs font-semibold">Switch</button>
              </div>

              {/* Suggestions */}
              <Suggestions suggestions={suggestions} />
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
};

export default Home;