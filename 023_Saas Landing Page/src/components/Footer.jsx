export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">SaaSPro</h3>
            <p>Transforming businesses with innovative SaaS solutions since 2024.</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#demo">Demo</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#blog">Blog</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact Us</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get updates</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 SaaSPro. All rights reserved.</p>
          <div className="social-links">
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#github">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}