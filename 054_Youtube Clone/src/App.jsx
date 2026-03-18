import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Watch from './pages/Watch';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex pt-14">
          <Sidebar isOpen={sidebarOpen} />
          <main className={`flex-1 transition-all ${sidebarOpen ? 'md:ml-64' : 'md:ml-16'}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch" element={<Watch />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;