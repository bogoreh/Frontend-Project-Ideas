import React from 'react';
import { Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Mail className="header-icon" size={32} />
        <h1 className="header-title">Newsletter Updates</h1>
        <p className="header-subtitle">
          Stay in the loop with our latest news, tips, and exclusive offers
        </p>
      </div>
    </header>
  );
};

export default Header;