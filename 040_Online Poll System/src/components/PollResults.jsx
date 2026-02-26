import React from 'react';
import { TrendingUp, Calendar } from 'lucide-react';

const PollResults = ({ poll }) => {
  const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);
  
  const getPercentage = (votes) => {
    return totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0;
  };

  const sortedOptions = [...poll.options].sort((a, b) => b.votes - a.votes);
  const winner = sortedOptions[0];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">{poll.question}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar size={16} className="mr-1" />
          <span>{poll.createdAt}</span>
        </div>
      </div>

      {winner && winner.votes > 0 && (
        <div className="mb-6 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
          <div className="flex items-center text-yellow-700 mb-2">
            <TrendingUp size={20} className="mr-2" />
            <span className="font-semibold">Leading Option</span>
          </div>
          <p className="text-lg font-medium text-gray-800">
            {winner.text} - {winner.votes} votes ({getPercentage(winner.votes)}%)
          </p>
        </div>
      )}

      <div className="space-y-4">
        {sortedOptions.map((option) => (
          <div key={option.id} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">{option.text}</span>
              <span className="text-blue-600 font-semibold">
                {option.votes} votes ({getPercentage(option.votes)}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  option.id === winner.id && option.votes > 0
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500'
                }`}
                style={{ width: `${getPercentage(option.votes)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-center text-gray-500">
          Total Votes: <span className="font-semibold text-gray-700">{totalVotes}</span>
        </p>
      </div>
    </div>
  );
};

export default PollResults;