import { Link } from 'react-router-dom';
import './Footer.css';

// Instead of importing all icons, use specific ones or use a different approach
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'GitHub', url: 'https://github.com', label: 'GitHub' },
    { icon: 'Twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'LinkedIn', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'Instagram', url: 'https://instagram.com', label: 'Instagram' },
  ];

  const footerLinks = {
    Product: ['Features', 'Pricing', 'API', 'Documentation'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Support: ['Help Center', 'Contact', 'Status', 'Community'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <span className="logo-text">Architecture Website</span>
                <span className="logo-highlight">.</span>
              </Link>
              <p className="footer-tagline">
                Build modern web applications faster with our React starter template.
              </p>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.icon.charAt(0)}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="footer-links-grid">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="footer-link-group">
                  <h4 className="footer-link-title">{category}</h4>
                  <ul className="footer-link-list">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="footer-link">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="copyright">
              &copy; {currentYear} ViteReact Starter. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;