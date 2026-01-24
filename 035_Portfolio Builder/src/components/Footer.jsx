import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">Portfolio<span className="logo-dot">.</span></span>
            <p className="footer-tagline">Building digital experiences that matter</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">💼</a>
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">🐙</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;