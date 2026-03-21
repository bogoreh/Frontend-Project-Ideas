import React from 'react';

function Header({ currentPage }) {
  const titles = {
    home: 'Home',
    profile: 'Profile',
    explore: 'Explore',
  };

  return (
    <header className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 p-4 z-10">
      <h1 className="text-xl font-bold dark:text-white">{titles[currentPage]}</h1>
    </header>
  );
}

export default Header;