const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Markdown Blog</h3>
            <p>A beautiful and minimal blog platform for developers and writers. Share your thoughts in Markdown format.</p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">🐦</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">🐙</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">💼</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/">All Posts</a></li>
              <li><a href="/">Write for Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Categories</h3>
            <ul className="footer-links">
              <li><a href="/">React</a></li>
              <li><a href="/">JavaScript</a></li>
              <li><a href="/">Web Development</a></li>
              <li><a href="/">Writing</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Markdown Blog. All rights reserved.</p>
          <p>Built with React, Vite, and ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;