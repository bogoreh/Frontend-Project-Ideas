import React, { useState } from 'react';
import PollList from './components/PollList';
import CreatePoll from './components/CreatePoll';
import PollResults from './components/PollResults';
import { mockPolls } from './data/mockPolls';
import { Vote, BarChart3 } from 'lucide-react';

function App() {
  const [polls, setPolls] = useState(mockPolls);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [view, setView] = useState('list'); // 'list' or 'results'

  const handleVote = (pollId, optionId) => {
    setPolls(prevPolls => 
      prevPolls.map(poll => {
        if (poll.id === pollId) {
          const updatedOptions = poll.options.map(opt => 
            opt.id === optionId 
              ? { ...opt, votes: opt.votes + 1 }
              : opt
          );
          const totalVotes = updatedOptions.reduce((sum, opt) => sum + opt.votes, 0);
          return {
            ...poll,
            options: updatedOptions,
            totalVotes
          };
        }
        return poll;
      })
    );
  };

  const handleCreatePoll = (newPoll) => {
    setPolls(prevPolls => [newPoll, ...prevPolls]);
  };

  const handleViewResults = (poll) => {
    setSelectedPoll(poll);
    setView('results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 mb-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                <Vote size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PollMaster
                </h1>
                <p className="text-sm text-gray-500">Create, vote, and see results</p>
              </div>
            </div>
            {view === 'results' && (
              <button
                onClick={() => {
                  setView('list');
                  setSelectedPoll(null);
                }}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
              >
                Back to Polls
              </button>
            )}
          </div>
        </div>

        {/* Main Content */}
        {view === 'list' ? (
          <>
            <CreatePoll onCreatePoll={handleCreatePoll} />
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                  <BarChart3 size={20} className="mr-2 text-blue-600" />
                  Active Polls
                </h2>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {polls.length} polls
                </span>
              </div>
              
              <PollList 
                polls={polls} 
                onVote={handleVote}
                onViewResults={handleViewResults}
              />
            </div>
          </>
        ) : (
          selectedPoll && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/20">
              <PollResults poll={selectedPoll} />
            </div>
          )
        )}

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>© 2024 PollMaster - Make your voice heard</p>
        </div>
      </div>
    </div>
  );
}

export default App;