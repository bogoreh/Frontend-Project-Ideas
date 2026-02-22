import React, { useState } from 'react';
import { CheckCircle, RotateCcw, Trash2, BarChart } from 'lucide-react';

const PollCard = ({ poll, onVote, onDelete, onReset }) => {
  const [voted, setVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = (optionId) => {
    if (!voted) {
      setSelectedOption(optionId);
      setVoted(true);
      onVote(poll.id, optionId);
    }
  };

  const getPercentage = (votes) => {
    return poll.totalVotes === 0 ? 0 : ((votes / poll.totalVotes) * 100).toFixed(1);
  };

  return (
    <div className="card animate-fadeIn">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{poll.question}</h3>
        <span className="text-sm text-gray-500">
          {poll.totalVotes} {poll.totalVotes === 1 ? 'vote' : 'votes'}
        </span>
      </div>

      <div className="space-y-3">
        {poll.options.map((option) => (
          <div key={option.id} className="relative">
            <button
              onClick={() => handleVote(option.id)}
              disabled={voted}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300
                ${voted && selectedOption === option.id
                  ? 'border-green-500 bg-green-50'
                  : voted
                  ? 'border-gray-200 opacity-50'
                  : 'border-gray-200 hover:border-indigo-500 hover:bg-indigo-50'
                }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{option.text}</span>
                {voted && (
                  <span className="text-sm font-semibold text-indigo-600">
                    {getPercentage(option.votes)}%
                  </span>
                )}
              </div>
              
              {voted && (
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${getPercentage(option.votes)}%` }}
                  />
                </div>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-2 mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={() => onReset(poll.id)}
          className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
          title="Reset poll"
        >
          <RotateCcw className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(poll.id)}
          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
          title="Delete poll"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default PollCard;