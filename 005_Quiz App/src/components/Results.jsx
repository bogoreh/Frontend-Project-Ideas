import React from 'react';

const Results = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100;
  
  let feedback = '';
  if (percentage >= 80) {
    feedback = 'Excellent! 🎉';
  } else if (percentage >= 60) {
    feedback = 'Good job! 👍';
  } else if (percentage >= 40) {
    feedback = 'Not bad! 😊';
  } else {
    feedback = 'Keep practicing! 📚';
  }

  return (
    <div className="results-container">
      <h2>Quiz Completed!</h2>
      <div className="score-section">
        <h3>Your Score: {score}/{totalQuestions}</h3>
        <p>Percentage: {percentage.toFixed(1)}%</p>
        <p className="feedback">{feedback}</p>
      </div>
      <button className="restart-btn" onClick={onRestart}>
        Take Quiz Again
      </button>
    </div>
  );
};

export default Results;