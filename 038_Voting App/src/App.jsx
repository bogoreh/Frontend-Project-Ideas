import React, { useState } from 'react';
import { PollProvider, usePolls } from './contexts/PollContext';
import Navbar from './components/Navbar';
import PollCard from './components/PollCard';
import CreatePoll from './components/CreatePoll';
import Results from './components/Results';
import { Vote } from 'lucide-react';

function AppContent() {
  const [activeTab, setActiveTab] = useState('polls');
  const { polls, createPoll, vote, deletePoll, resetPoll } = usePolls();

  return (
    <div className="min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'polls' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Vote className="h-8 w-8 text-indigo-600 mr-3" />
              Active Polls
            </h1>
            
            {polls.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No polls yet. Create your first poll!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {polls.map(poll => (
                  <PollCard
                    key={poll.id}
                    poll={poll}
                    onVote={vote}
                    onDelete={deletePoll}
                    onReset={resetPoll}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'create' && (
          <CreatePoll onCreatePoll={createPoll} />
        )}

        {activeTab === 'results' && (
          <Results />
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <PollProvider>
      <AppContent />
    </PollProvider>
  );
}

export default App;