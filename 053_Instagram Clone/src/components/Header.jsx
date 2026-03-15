import React, { useState } from 'react';
import { FiHeart, FiSend, FiPlusSquare } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { AiFillHome, AiOutlineCompass } from 'react-icons/ai';

const Header = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <FaInstagram className="text-3xl md:hidden" />
            <span className="hidden md:block font-bold text-2xl font-sans">Instagram</span>
          </div>

          {/* Search - Hidden on mobile */}
          <div className="hidden md:block relative">
            <IoIosSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 rounded-lg py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-2xl">
            <AiFillHome className="cursor-pointer hover:text-gray-600" />
            <AiOutlineCompass className="cursor-pointer hover:text-gray-600 hidden md:block" />
            <FiPlusSquare 
              className="cursor-pointer hover:text-gray-600" 
              onClick={() => setShowCreateModal(true)}
            />
            <FiHeart className="cursor-pointer hover:text-gray-600 hidden md:block" />
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Profile"
              className="w-6 h-6 rounded-full cursor-pointer object-cover"
            />
          </div>
        </div>
      </header>

      {/* Create Post Modal */}
      {showCreateModal && (
        <CreatePost onClose={() => setShowCreateModal(false)} />
      )}
    </>
  );
};

export default Header;