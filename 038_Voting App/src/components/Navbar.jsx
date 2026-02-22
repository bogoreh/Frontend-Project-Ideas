import React from 'react';
import { Vote, PlusCircle, BarChart3 } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Vote className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              VoteHub
            </span>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('polls')}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'polls'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-indigo-50'
              }`}
            >
              <Vote className="h-5 w-5 mr-2" />
              Polls
            </button>
            
            <button
              onClick={() => setActiveTab('create')}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'create'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-indigo-50'
              }`}
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Create
            </button>
            
            <button
              onClick={() => setActiveTab('results')}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'results'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-indigo-50'
              }`}
            >
              <BarChart3 className="h-5 w-5 mr-2" />
              Results
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;