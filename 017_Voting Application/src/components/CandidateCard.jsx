import React from 'react';
import '../App.css';

const CandidateCard = ({ candidate, onVote }) => {
  const { id, name, role, votes, color } = candidate;

  return (
    <div 
  className="candidate-card"
  style={{
    '--card-color': color,
    '--progress-color': color,
  }}
>
      <div className="candidate-info">
        <div className="candidate-avatar">
          <span className="avatar-text">{name.charAt(0)}</span>
        </div>
        <div className="candidate-details">
          <h3 className="candidate-name">{name}</h3>
          <p className="candidate-role">{role}</p>
          <div className="votes-display">
            <span className="votes-count">{votes} votes</span>
          </div>
        </div>
      </div>
      <button 
        className="vote-button"
        onClick={() => onVote(id)}
      >
        <span className="button-text">Vote Now</span>
        <span className="button-icon">✓</span>
      </button>
    </div>
  );
};

// Helper function to adjust color brightness
function adjustColor(color, amount) {
  return '#' + color.replace(/^#/, '').replace(/../g, color => 
    ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
  );
}

export default CandidateCard;