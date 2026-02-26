import React from 'react';
import { FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-sm h-16 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center flex-1">
          <div className="relative w-96">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <FaBell className="text-xl" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-2">
            <FaUserCircle className="text-3xl text-gray-600" />
            <div className="hidden md:block">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;