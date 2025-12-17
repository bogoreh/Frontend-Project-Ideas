import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <footer style={styles.footer}>
        <div className="container">
          <p style={styles.footerText}>© 2025 LearnHub Learning Platform. All rights reserved.</p>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Privacy Policy</a>
            <a href="#" style={styles.footerLink}>Terms of Service</a>
            <a href="#" style={styles.footerLink}>Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '2rem 0',
    marginTop: '3rem',
  },
  footerText: {
    textAlign: 'center',
    color: '#d1d5db',
    marginBottom: '1rem',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  footerLink: {
    color: '#9ca3af',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
};

export default App;