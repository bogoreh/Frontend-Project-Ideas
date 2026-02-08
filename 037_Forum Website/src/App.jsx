import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForumHeader from './components/ForumHeader';
import ForumSidebar from './components/ForumSidebar';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ThreadPage from './pages/ThreadPage';
import CreateThread from './components/CreateThread';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCreateThread, setShowCreateThread] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);

    // Handle online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-white/20 rounded-full"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-white text-xl font-semibold">Loading Forum...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-container">
        {!isOnline && (
          <div className="bg-yellow-500/90 text-white text-center py-2 px-4">
            ⚠️ You are offline. Some features may be limited.
          </div>
        )}

        <ForumHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <div className="flex">
          <ForumSidebar 
            isOpen={sidebarOpen} 
            toggleSidebar={() => setSidebarOpen(false)} 
          />
          
          <main className="flex-1 min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/thread/:id" element={<ThreadPage />} />
            </Routes>
            
            {/* Floating Action Button */}
            <button
              onClick={() => setShowCreateThread(true)}
              className="fixed bottom-8 right-8 w-14 h-14 rounded-full btn-primary shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40"
            >
              <span className="text-2xl">+</span>
            </button>
          </main>
        </div>

        {showCreateThread && (
          <CreateThread onClose={() => setShowCreateThread(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;