import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">API</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">API Testing Tool</h1>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;