import { useState } from 'react';
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div style={{
        backgroundColor: '#2a2520',
        color: '#ffffff',
        padding: '10px 0',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <FaPhoneAlt /> +1 (555) 123-4567
              </span>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <FaEnvelope /> info@designstudio.com
              </span>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <FaMapMarkerAlt /> 123 Design Street, New York
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <a href="#" style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#8a7152'}
                 onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#8a7152'}
                 onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#8a7152'}
                 onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#8a7152'}
                 onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 0'
          }}>
            <div>
              <h1 style={{
                fontSize: '2rem',
                color: '#2a2520'
              }}>
                Design<span style={{ color: '#8a7152' }}>Studio</span>
              </h1>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px'
            }}>
              <a href="#home" style={{
                textDecoration: 'none',
                color: '#333333',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#8a7152'}
                 onMouseLeave={(e) => e.target.style.color = '#333333'}>
                Home
              </a>
              <a href="#services" style={{
                textDecoration: 'none',
                color: '#333333',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#8a7152'}
                 onMouseLeave={(e) => e.target.style.color = '#333333'}>
                Services
              </a>
              <a href="#projects" style={{
                textDecoration: 'none',
                color: '#333333',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#8a7152'}
                 onMouseLeave={(e) => e.target.style.color = '#333333'}>
                Projects
              </a>
              <a href="#team" style={{
                textDecoration: 'none',
                color: '#333333',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#8a7152'}
                 onMouseLeave={(e) => e.target.style.color = '#333333'}>
                Team
              </a>
              <a href="#testimonials" style={{
                textDecoration: 'none',
                color: '#333333',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#8a7152'}
                 onMouseLeave={(e) => e.target.style.color = '#333333'}>
                Testimonials
              </a>
              <a href="#contact" style={{
                textDecoration: 'none',
                color: '#333333',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.target.style.color = '#8a7152'}
                 onMouseLeave={(e) => e.target.style.color = '#333333'}>
                Contact
              </a>
              <button style={{
                display: 'inline-block',
                backgroundColor: '#8a7152',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '1rem'
              }} onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2a2520';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
              }} onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#8a7152';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                Book Consultation
              </button>
            </div>
            
            <div style={{
              display: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#2a2520'
            }}>
              <FaBars />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;