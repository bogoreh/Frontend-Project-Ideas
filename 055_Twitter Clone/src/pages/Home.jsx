import React from 'react';
import TweetForm from '../components/tweets/TweetForm';
import TweetList from '../components/tweets/TweetList';
import { useTweets } from '../hooks/useTweets';

function Home() {
  const { tweets, loading, addTweet, likeTweet } = useTweets();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-twitter-blue"></div>
      </div>
    );
  }

  return (
    <div className="pb-16 md:pb-0">
      <TweetForm onTweet={addTweet} />
      <TweetList tweets={tweets} onLike={likeTweet} />
    </div>
  );
}

export default Home;