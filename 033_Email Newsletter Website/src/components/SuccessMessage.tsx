import React from 'react';
import { CheckCircle, PartyPopper } from 'lucide-react';

interface SuccessMessageProps {
  email: string;
  name: string;
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ email, name, onReset }) => {
  return (
    <div className="success-container">
      <div className="success-icon">
        <CheckCircle size={64} />
        <PartyPopper className="confetti" size={32} />
      </div>
      <h2 className="success-title">You're Subscribed!</h2>
      <p className="success-message">
        Thank you{name ? `, ${name}` : ''}! We've sent a confirmation email to <strong>{email}</strong>.
      </p>
      <p className="success-instructions">
        Please check your inbox and click the confirmation link to activate your subscription.
      </p>
      <button className="success-button" onClick={onReset}>
        Subscribe Another Email
      </button>
    </div>
  );
};

export default SuccessMessage;