import React from 'react';
import TweetCard from './TweetCard';

function TweetList({ tweets, onLike }) {
  if (tweets.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 dark:text-gray-400">No tweets yet. Be the first to tweet!</p>
      </div>
    );
  }

  return (
    <div>
      {tweets.map(tweet => (
        <TweetCard key={tweet.id} tweet={tweet} onLike={onLike} />
      ))}
    </div>
  );
}

export default TweetList;