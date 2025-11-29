import React from 'react';

const Question = ({ 
  question, 
  options, 
  selectedAnswer, 
  onAnswerSelect, 
  timeLeft 
}) => {
  return (
    <div className="question-container">
      <div className="timer">
        Time Left: {timeLeft}s
      </div>
      <h2 className="question">{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => onAnswerSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;