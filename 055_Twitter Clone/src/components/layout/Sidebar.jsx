import React from 'react';
import { HomeIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Sidebar({ currentPage, setCurrentPage }) {
  const menuItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'explore', icon: MagnifyingGlassIcon, label: 'Explore' },
    { id: 'profile', icon: UserIcon, label: 'Profile' },
  ];

  return (
    <div className="h-screen sticky top-0 p-4 flex flex-col">
      <div className="text-2xl font-bold text-twitter-blue mb-8">🐦 Twitter</div>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex items-center space-x-4 p-3 rounded-full w-full mb-2 transition
              ${currentPage === item.id 
                ? 'font-bold text-twitter-blue bg-blue-50 dark:bg-gray-800' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white'
              }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="hidden xl:inline">{item.label}</span>
          </button>
        ))}
      </nav>
      <button className="bg-twitter-blue text-white rounded-full py-3 px-4 font-bold hover:bg-twitter-blueHover transition">
        <span className="hidden xl:inline">Tweet</span>
        <span className="xl:hidden">✏️</span>
      </button>
    </div>
  );
}

export default Sidebar;