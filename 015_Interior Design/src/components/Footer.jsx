import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-logo">Design<span>Studio</span></h3>
            <p className="footer-description">
              Creating beautiful, functional spaces that reflect your personality and lifestyle since 2008.
            </p>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaPinterest /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Residential Design</a></li>
              <li><a href="#">Commercial Design</a></li>
              <li><a href="#">Space Planning</a></li>
              <li><a href="#">Furniture Selection</a></li>
              <li><a href="#">Lighting Design</a></li>
              <li><a href="#">Project Management</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <strong>Address:</strong> 123 Design Street, New York, NY 10001
              </li>
              <li>
                <strong>Phone:</strong> +1 (555) 123-4567
              </li>
              <li>
                <strong>Email:</strong> info@designstudio.com
              </li>
              <li>
                <strong>Hours:</strong> Mon-Fri: 9am-6pm, Sat: 10am-4pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} DesignStudio. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <style jsx="true">{`
        .footer {
          background-color: var(--dark-color);
          color: var(--light-color);
          padding: 70px 0 20px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 50px;
        }
        
        .footer-logo {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        
        .footer-logo span {
          color: var(--primary-color);
        }
        
        .footer-description {
          color: #aaa;
          margin-bottom: 25px;
          line-height: 1.7;
        }
        
        .footer-social {
          display: flex;
          gap: 15px;
        }
        
        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          font-size: 1.2rem;
          transition: var(--transition);
        }
        
        .footer-social a:hover {
          background-color: var(--primary-color);
          transform: translateY(-3px);
        }
        
        .footer-column h4 {
          font-size: 1.3rem;
          margin-bottom: 25px;
          color: white;
          position: relative;
          padding-bottom: 10px;
        }
        
        .footer-column h4::after {
          content: '';
          position: absolute;
          width: 50px;
          height: 2px;
          background-color: var(--primary-color);
          bottom: 0;
          left: 0;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 12px;
        }
        
        .footer-links a {
          color: #aaa;
          text-decoration: none;
          transition: var(--transition);
        }
        
        .footer-links a:hover {
          color: var(--primary-color);
          padding-left: 5px;
        }
        
        .footer-contact {
          list-style: none;
        }
        
        .footer-contact li {
          margin-bottom: 15px;
          color: #aaa;
          line-height: 1.6;
        }
        
        .footer-contact strong {
          color: white;
        }
        
        .footer-bottom {
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .footer-bottom p {
          color: #aaa;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }
        
        .footer-bottom-links a {
          color: #aaa;
          text-decoration: none;
          transition: var(--transition);
        }
        
        .footer-bottom-links a:hover {
          color: var(--primary-color);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
        
        @media (max-width: 576px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;