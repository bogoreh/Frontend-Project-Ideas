import { Link } from 'react-router-dom';
import Button from '../components/common/Button/Button';
import { FaHome, FaSearch } from 'react-icons/fa';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-graphic">
            <div className="error-code">404</div>
            <div className="error-message">
              <h1>Page Not Found</h1>
              <p>The page you're looking for doesn't exist or has been moved.</p>
            </div>
          </div>
          
          <div className="not-found-actions">
            <Button
              variant="primary"
              size="large"
              startIcon={<FaHome />}
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
            <Button
              variant="outline"
              size="large"
              startIcon={<FaSearch />}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
          
          <div className="not-found-links">
            <p>Here are some helpful links instead:</p>
            <div className="links-grid">
              <Link to="/" className="helpful-link">Home</Link>
              <Link to="/about" className="helpful-link">About</Link>
              <Link to="/contact" className="helpful-link">Contact</Link>
              <a href="#" className="helpful-link">Documentation</a>
              <a href="#" className="helpful-link">Support</a>
              <a href="#" className="helpful-link">Blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;