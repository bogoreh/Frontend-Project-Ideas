import React, { useState } from 'react';
import { Menu, Search, Mic, Video, Bell, User } from 'lucide-react';
import { validateSearch } from '../utils/validation';

const Header = ({ toggleSidebar, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchError, setSearchError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const validation = validateSearch(searchQuery);
    
    if (!validation.isValid) {
      setSearchError(validation.error);
      setTimeout(() => setSearchError(''), 3000);
      return;
    }
    
    setSearchError('');
    onSearch?.(validation.sanitizedQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu size={20} className="text-[#0f0f0f]" />
          </button>
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">YT</span>
            </div>
            <span className="font-bold text-xl text-[#0f0f0f] hidden sm:inline">YouTube</span>
            <span className="text-xs text-gray-500 self-start">IN</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="flex">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 text-[#0f0f0f]"
              />
              {searchError && (
                <div className="absolute top-full mt-1 text-xs text-red-500">
                  {searchError}
                </div>
              )}
            </div>
            <button 
              type="submit"
              className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 transition-colors"
            >
              <Search size={20} className="text-[#0f0f0f]" />
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full">
            <Mic size={20} className="text-[#0f0f0f]" />
          </button>
          <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full">
            <Video size={20} className="text-[#0f0f0f]" />
          </button>
          <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full">
            <Bell size={20} className="text-[#0f0f0f]" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User size={20} className="text-[#0f0f0f]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;