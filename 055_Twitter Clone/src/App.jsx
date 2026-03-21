import React, { useState } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';
import Header from './components/layout/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'explore':
        return <Explore />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 border-r border-gray-200 dark:border-gray-800">
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-h-screen border-r border-gray-200 dark:border-gray-800">
          <Header currentPage={currentPage} />
          {renderPage()}
        </main>

        {/* Right Sidebar - Optional */}
        <div className="hidden lg:block w-80 p-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sticky top-4">
            <h2 className="font-bold text-xl mb-4 dark:text-white">Trending</h2>
            <div className="space-y-4">
              <TrendingItem topic="Technology" tweets="125K" />
              <TrendingItem topic="ReactJS" tweets="45.2K" />
              <TrendingItem topic="WebDev" tweets="23.1K" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

function TrendingItem({ topic, tweets }) {
  return (
    <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition">
      <p className="text-sm text-gray-500 dark:text-gray-400">Trending</p>
      <p className="font-bold dark:text-white">{topic}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{tweets} Tweets</p>
    </div>
  );
}

export default App;