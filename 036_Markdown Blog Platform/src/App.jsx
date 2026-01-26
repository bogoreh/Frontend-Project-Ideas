import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import './styles/global.css';

function App() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Check if the app is already installed
    const isInstalled = localStorage.getItem('pwa-installed');
    
    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      if (!isInstalled) {
        setInstallPrompt(e);
        setShowInstallPrompt(true);
      }
    });

    // Check if app is already installed
    window.addEventListener('appinstalled', () => {
      localStorage.setItem('pwa-installed', 'true');
      setShowInstallPrompt(false);
    });

    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered:', registration);
          })
          .catch(error => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  const handleInstallClick = () => {
    if (!installPrompt) return;
    
    installPrompt.prompt();
    
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        localStorage.setItem('pwa-installed', 'true');
      } else {
        console.log('User dismissed the install prompt');
      }
      setInstallPrompt(null);
      setShowInstallPrompt(false);
    });
  };

  const handleDismissPrompt = () => {
    setShowInstallPrompt(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />

        {showInstallPrompt && (
          <div className="pwa-install">
            <p>📱 Install our app for a better experience!</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>
              Get offline access and faster loading
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button onClick={handleInstallClick}>
                Install App
              </button>
              <button 
                onClick={handleDismissPrompt}
                style={{ 
                  background: 'transparent', 
                  color: 'var(--gray)',
                  border: '1px solid var(--gray-light)'
                }}
              >
                Later
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;