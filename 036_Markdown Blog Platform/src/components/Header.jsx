import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <NavLink to="/" className="logo">
            <span>📝</span> Markdown<span>Blog</span>
          </NavLink>
          <div className="nav-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
            <a 
              href="https://github.com" 
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;