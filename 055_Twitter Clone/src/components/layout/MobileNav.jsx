import React from 'react';
import { HomeIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function MobileNav({ currentPage, setCurrentPage }) {
  const menuItems = [
    { id: 'home', icon: HomeIcon },
    { id: 'explore', icon: MagnifyingGlassIcon },
    { id: 'profile', icon: UserIcon },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-around p-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setCurrentPage(item.id)}
          className={`p-3 rounded-full transition
            ${currentPage === item.id 
              ? 'text-twitter-blue bg-blue-50 dark:bg-gray-800' 
              : 'text-gray-600 dark:text-gray-400'
            }`}
        >
          <item.icon className="w-6 h-6" />
        </button>
      ))}
    </nav>
  );
}

export default MobileNav;