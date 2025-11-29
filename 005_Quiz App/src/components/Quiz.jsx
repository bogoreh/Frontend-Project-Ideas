import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Question from './Question';
import Results from './Results';
import { quizData } from '../data/quizData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (quizCompleted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextQuestion();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, quizCompleted]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      calculateScore();
      setQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setTimeLeft(30);
    setQuizCompleted(false);
    setScore(0);
  };

  if (quizCompleted) {
    return (
      <Results 
        score={score} 
        totalQuestions={quizData.length} 
        onRestart={handleRestart} 
      />
    );
  }

  const currentQuestionData = quizData[currentQuestion];

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      <ProgressBar 
        current={currentQuestion + 1} 
        total={quizData.length} 
      />
      
      <Question
        question={currentQuestionData.question}
        options={currentQuestionData.options}
        selectedAnswer={selectedAnswers[currentQuestion]}
        onAnswerSelect={handleAnswerSelect}
        timeLeft={timeLeft}
      />

      <button 
        className="next-btn" 
        onClick={handleNextQuestion}
        disabled={selectedAnswers[currentQuestion] === undefined}
      >
        {currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
};

export default Quiz;