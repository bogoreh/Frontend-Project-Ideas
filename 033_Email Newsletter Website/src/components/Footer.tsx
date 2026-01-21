import React from 'react';
import { Heart, Shield, Bell } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-features">
        <div className="feature">
          <Shield className="feature-icon" size={20} />
          <span>Secure & Private</span>
        </div>
        <div className="feature">
          <Bell className="feature-icon" size={20} />
          <span>Weekly Updates</span>
        </div>
        <div className="feature">
          <Heart className="feature-icon" size={20} />
          <span>Quality Content</span>
        </div>
      </div>
      
      <div className="footer-links">
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="#" className="footer-link">Unsubscribe</a>
        <a href="#" className="footer-link">Contact</a>
      </div>
      
      <p className="footer-copyright">
        © {new Date().getFullYear()} Newsletter Updates. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;