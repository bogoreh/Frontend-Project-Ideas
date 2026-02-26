import React from 'react';
import PollCard from './PollCard';
import { ClipboardList } from 'lucide-react';

const PollList = ({ polls, onVote }) => {
  return (
    <div className="space-y-4">
      {polls.length > 0 ? (
        polls.map(poll => (
          <PollCard key={poll.id} poll={poll} onVote={onVote} />
        ))
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <ClipboardList size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Polls Available</h3>
          <p className="text-gray-400">Create your first poll to get started!</p>
        </div>
      )}
    </div>
  );
};

export default PollList;