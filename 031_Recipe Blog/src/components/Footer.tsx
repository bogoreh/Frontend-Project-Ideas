import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>🍳 Recipe Blog &copy; {new Date().getFullYear()}</p>
        <p>Made with ❤️ for food lovers everywhere</p>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;