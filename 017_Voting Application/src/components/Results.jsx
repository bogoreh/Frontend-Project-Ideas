import React from 'react';
import '../App.css';

const Results = ({ candidates }) => {
  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);
  const leadingCandidate = candidates.reduce((leading, current) => 
    current.votes > leading.votes ? current : leading
  );

  return (
    <div className="results-section">
      <h2 className="results-title">📊 Live Results</h2>
      
      <div className="results-content">
        <div className="leading-candidate">
          <h3>Current Leader</h3>
          <div className="leader-info">
            <span className="leader-name">{leadingCandidate.name}</span>
            <span className="leader-votes">{leadingCandidate.votes} votes</span>
          </div>
        </div>

        <div className="results-list">
          {candidates.map(candidate => {
            const percentage = totalVotes > 0 ? (candidate.votes / totalVotes * 100).toFixed(1) : 0;
            
            return (
              <div key={candidate.id} className="result-item">
                <div className="result-header">
                  <span className="candidate-name">{candidate.name}</span>
                  <span className="vote-percentage">{percentage}%</span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar"
                    style={{
                      width: `${percentage}%`,
                      background: candidate.color
                    }}
                  />
                </div>
                <div className="votes-count">
                  {candidate.votes} votes
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;