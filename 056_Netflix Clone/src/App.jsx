import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import AuthModal from './components/AuthModal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleLogin = (email, password) => {
    // Simple validation
    if (email && password && password.length >= 6) {
      setIsLoggedIn(true);
      setShowAuthModal(false);
      return true;
    }
    return false;
  };

  const handleSignup = (email, password, confirmPassword) => {
    if (email && password && confirmPassword && password === confirmPassword && password.length >= 6) {
      setIsLoggedIn(true);
      setShowAuthModal(false);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <>
        <Login onGetStarted={() => setShowAuthModal(true)} />
        {showAuthModal && (
          <AuthModal
            onClose={() => setShowAuthModal(false)}
            onLogin={handleLogin}
            onSignup={handleSignup}
          />
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar onLogout={handleLogout} />
      <Home />
    </div>
  );
}

export default App;