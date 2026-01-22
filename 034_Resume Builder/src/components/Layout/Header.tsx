import React from 'react';
import { Download } from 'lucide-react';

interface HeaderProps {
  onDownload: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownload }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">📄 Resume Builder</h1>
        <button onClick={onDownload} className="download-button">
          <Download size={20} />
          <span>Download PDF</span>
        </button>
      </div>
      <p className="subtitle">Create your professional resume in minutes</p>
    </header>
  );
};

export default Header;