import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

function Navbar({ onLogout }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      <div className="netflix-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-8">
            <h1 className="text-[#E50914] text-3xl md:text-4xl font-bold">NETFLIX</h1>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition">Home</a>
              <a href="#" className="hover:text-gray-300 transition">TV Shows</a>
              <a href="#" className="hover:text-gray-300 transition">Movies</a>
              <a href="#" className="hover:text-gray-300 transition">New & Popular</a>
              <a href="#" className="hover:text-gray-300 transition">My List</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 md:space-x-4">
            <FaSearch className="text-xl cursor-pointer hover:text-gray-300" />
            <FaBell className="text-xl cursor-pointer hover:text-gray-300" />
            <div className="relative group">
              <FaUser className="text-xl cursor-pointer hover:text-gray-300" />
              <div className="absolute right-0 mt-2 w-48 bg-[#181818] rounded-md shadow-lg py-1 hidden group-hover:block">
                <button 
                  onClick={onLogout}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-[#E50914] transition"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;