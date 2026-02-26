import React, { useState } from 'react';
import { BarChart3, Users, CheckCircle } from 'lucide-react';

const PollCard = ({ poll, onVote }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [voted, setVoted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleVote = () => {
    if (selectedOption && !voted) {
      onVote(poll.id, selectedOption);
      setVoted(true);
      setShowResults(true);
    }
  };

  const getPercentage = (votes) => {
    return poll.totalVotes > 0 ? ((votes / poll.totalVotes) * 100).toFixed(1) : 0;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{poll.question}</h3>
      
      <div className="space-y-3 mb-6">
        {poll.options.map((option) => (
          <div key={option.id} className="relative">
            {!voted ? (
              <label className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                ${selectedOption === option.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'}`}
              >
                <input
                  type="radio"
                  name={`poll-${poll.id}`}
                  value={option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-700 font-medium">{option.text}</span>
              </label>
            ) : (
              <div className="p-4 rounded-xl border-2 border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">{option.text}</span>
                  <span className="text-blue-600 font-semibold">
                    {option.votes} votes ({getPercentage(option.votes)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${getPercentage(option.votes)}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{poll.totalVotes} votes</span>
          </div>
          {voted && (
            <div className="flex items-center text-green-600">
              <CheckCircle size={16} className="mr-1" />
              <span>Voted</span>
            </div>
          )}
        </div>
        
        {!voted ? (
          <button
            onClick={handleVote}
            disabled={!selectedOption}
            className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200
              ${selectedOption 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
          >
            Vote Now
          </button>
        ) : (
          <button
            onClick={() => setShowResults(!showResults)}
            className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
          >
            <BarChart3 size={18} className="mr-2" />
            {showResults ? 'Hide Results' : 'Show Results'}
          </button>
        )}
      </div>
    </div>
  );
};

export default PollCard;