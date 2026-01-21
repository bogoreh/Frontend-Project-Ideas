import React, { useState } from 'react';
import { Send, User, Check } from 'lucide-react';

interface EmailFormProps {
  onSubscribe: (email: string, name: string) => void;
  isSubmitting: boolean;
}

const EmailForm: React.FC<EmailFormProps> = ({ onSubscribe, isSubmitting }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    if (!agreed) {
      alert('Please agree to receive our newsletter');
      return;
    }
    
    onSubscribe(email, name);
    setEmailError('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Subscribe to our Newsletter</h2>
      <p className="form-description">
        Join over 10,000 subscribers who receive our weekly newsletter with curated content.
      </p>
      
      <form className="email-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-with-icon">
            <User className="input-icon" size={18} />
            <input
              type="text"
              className="form-input"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        
        <div className="form-group">
          <div className="input-with-icon">
            <Mail className="input-icon" size={18} />
            <input
              type="email"
              className={`form-input ${emailError ? 'input-error' : ''}`}
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError('');
              }}
              required
            />
          </div>
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="checkbox-input"
            />
            <span className="checkbox-custom">
              {agreed && <Check size={12} />}
            </span>
            <span className="checkbox-text">
              I agree to receive newsletter updates via email. I can unsubscribe at any time.
            </span>
          </label>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              Subscribing...
            </>
          ) : (
            <>
              <Send className="button-icon" size={18} />
              Subscribe Now
            </>
          )}
        </button>
      </form>
      
      <div className="privacy-note">
        <p>We respect your privacy. No spam, ever.</p>
      </div>
    </div>
  );
};

// Add Mail icon import at the top
import { Mail } from 'lucide-react';

export default EmailForm;