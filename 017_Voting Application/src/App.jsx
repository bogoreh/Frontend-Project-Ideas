import React, { useState } from 'react';
import Header from './components/Header';
import CandidateCard from './components/CandidateCard';
import Results from './components/Results';
import './App.css';

const App = () => {
  const [candidates, setCandidates] = useState([
  { id: 1, name: 'Alex Johnson', role: 'Frontend Developer', votes: 12, color: '#3b82f6' },
  { id: 2, name: 'Maria Garcia', role: 'UI/UX Designer', votes: 8, color: '#8b5cf6' },
  { id: 3, name: 'David Chen', role: 'Backend Engineer', votes: 15, color: '#10b981' },
  { id: 4, name: 'Sarah Wilson', role: 'Project Manager', votes: 6, color: '#ef4444' },
  { id: 5, name: 'James Brown', role: 'DevOps Engineer', votes: 9, color: '#f59e0b' },
  { id: 6, name: 'Emma Davis', role: 'Full Stack Developer', votes: 11, color: '#06b6d4' },
]);

  const handleVote = (candidateId) => {
    setCandidates(prevCandidates =>
      prevCandidates.map(candidate =>
        candidate.id === candidateId
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
  };

  const handleResetVotes = () => {
    setCandidates(prevCandidates =>
      prevCandidates.map(candidate => ({ ...candidate, votes: 0 }))
    );
  };

  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

  return (
    <div className="app">
      <div className="container">
        <Header />
        
        <div className="candidates-grid">
          {candidates.map(candidate => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onVote={handleVote}
            />
          ))}
        </div>

        <Results candidates={candidates} />

        <div className="vote-count">
          Total Votes Cast: <strong>{totalVotes}</strong>
        </div>

        <button className="reset-btn" onClick={handleResetVotes}>
          Reset All Votes
        </button>
      </div>
    </div>
  );
};

export default App;