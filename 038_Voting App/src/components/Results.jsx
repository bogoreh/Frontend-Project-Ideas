import React from 'react';
import { usePolls } from '../contexts/PollContext';
import { Trophy, TrendingUp, Users } from 'lucide-react';

const Results = () => {
  const { polls } = usePolls();

  const getTotalVotes = () => {
    return polls.reduce((acc, poll) => acc + poll.totalVotes, 0);
  };

  const getMostVotedPoll = () => {
    return polls.reduce((max, poll) => 
      poll.totalVotes > (max?.totalVotes || 0) ? poll : max
    , null);
  };

  const getMostVotedOption = () => {
    let maxVotes = 0;
    let mostVoted = null;
    
    polls.forEach(poll => {
      poll.options.forEach(option => {
        if (option.votes > maxVotes) {
          maxVotes = option.votes;
          mostVoted = {
            poll: poll.question,
            option: option.text,
            votes: option.votes
          };
        }
      });
    });
    
    return mostVoted;
  };

  const mostVotedPoll = getMostVotedPoll();
  const mostVotedOption = getMostVotedOption();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100">Total Votes</p>
              <p className="text-3xl font-bold">{getTotalVotes()}</p>
            </div>
            <Users className="h-12 w-12 text-indigo-300" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Total Polls</p>
              <p className="text-3xl font-bold">{polls.length}</p>
            </div>
            <TrendingUp className="h-12 w-12 text-purple-300" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-pink-500 to-pink-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-pink-100">Avg Votes/Poll</p>
              <p className="text-3xl font-bold">
                {polls.length > 0 ? (getTotalVotes() / polls.length).toFixed(1) : 0}
              </p>
            </div>
            <Trophy className="h-12 w-12 text-pink-300" />
          </div>
        </div>
      </div>

      {mostVotedPoll && mostVotedPoll.totalVotes > 0 && (
        <div className="card">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
            Most Popular Poll
          </h3>
          <p className="text-lg text-gray-700">{mostVotedPoll.question}</p>
          <p className="text-sm text-gray-500 mt-1">
            {mostVotedPoll.totalVotes} votes
          </p>
        </div>
      )}

      {mostVotedOption && mostVotedOption.votes > 0 && (
        <div className="card">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
            Most Popular Choice
          </h3>
          <p className="text-lg text-gray-700">{mostVotedOption.option}</p>
          <p className="text-sm text-gray-500 mt-1">
            in "{mostVotedOption.poll}" • {mostVotedOption.votes} votes
          </p>
        </div>
      )}

      {polls.map(poll => (
        poll.totalVotes > 0 && (
          <div key={poll.id} className="card">
            <h3 className="text-lg font-semibold mb-3">{poll.question}</h3>
            <div className="space-y-2">
              {poll.options.map(option => (
                <div key={option.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{option.text}</span>
                    <span className="font-semibold text-indigo-600">
                      {option.votes} ({((option.votes / poll.totalVotes) * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      style={{ width: `${(option.votes / poll.totalVotes) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default Results;