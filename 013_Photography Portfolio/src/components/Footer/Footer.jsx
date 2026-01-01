import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Lens & Light</h3>
            <p>Capturing moments, creating memories</p>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Behance</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Lens & Light Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer