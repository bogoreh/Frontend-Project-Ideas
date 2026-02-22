import React, { createContext, useState, useContext, useEffect } from 'react';

const PollContext = createContext();

export const usePolls = () => {
  const context = useContext(PollContext);
  if (!context) {
    throw new Error('usePolls must be used within a PollProvider');
  }
  return context;
};

export const PollProvider = ({ children }) => {
  const [polls, setPolls] = useState(() => {
    const savedPolls = localStorage.getItem('polls');
    return savedPolls ? JSON.parse(savedPolls) : [
      {
        id: 1,
        question: "What's your favorite programming language?",
        options: [
          { id: 1, text: 'JavaScript', votes: 0 },
          { id: 2, text: 'Python', votes: 0 },
          { id: 3, text: 'Java', votes: 0 },
          { id: 4, text: 'C++', votes: 0 }
        ],
        totalVotes: 0,
        createdAt: new Date().toISOString()
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('polls', JSON.stringify(polls));
  }, [polls]);

  const createPoll = (question, options) => {
    const newPoll = {
      id: Date.now(),
      question,
      options: options.map((text, index) => ({
        id: index + 1,
        text,
        votes: 0
      })),
      totalVotes: 0,
      createdAt: new Date().toISOString()
    };
    setPolls([...polls, newPoll]);
  };

  const vote = (pollId, optionId) => {
    setPolls(polls.map(poll => {
      if (poll.id === pollId) {
        const updatedOptions = poll.options.map(option =>
          option.id === optionId
            ? { ...option, votes: option.votes + 1 }
            : option
        );
        return {
          ...poll,
          options: updatedOptions,
          totalVotes: poll.totalVotes + 1
        };
      }
      return poll;
    }));
  };

  const deletePoll = (pollId) => {
    setPolls(polls.filter(poll => poll.id !== pollId));
  };

  const resetPoll = (pollId) => {
    setPolls(polls.map(poll => {
      if (poll.id === pollId) {
        const resetOptions = poll.options.map(option => ({
          ...option,
          votes: 0
        }));
        return {
          ...poll,
          options: resetOptions,
          totalVotes: 0
        };
      }
      return poll;
    }));
  };

  return (
    <PollContext.Provider value={{
      polls,
      createPoll,
      vote,
      deletePoll,
      resetPoll
    }}>
      {children}
    </PollContext.Provider>
  );
};