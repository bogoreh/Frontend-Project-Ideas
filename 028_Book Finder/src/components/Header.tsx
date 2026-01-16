import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <span className="logo-icon">📚</span>
          Book Finder
        </h1>
        <p className="subtitle">
          Discover millions of books from Google Books API
        </p>
      </div>
    </header>
  );
};

export default Header;