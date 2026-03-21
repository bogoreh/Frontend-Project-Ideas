import { useState, useEffect } from 'react';
import { validateTweet } from '../utils/validators';

export const useTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load initial tweets
  useEffect(() => {
    const initialTweets = [
      {
        id: 1,
        author: {
          name: 'John Doe',
          username: '@johndoe',
          avatar: 'https://via.placeholder.com/40',
        },
        content: 'Just setting up my Twitter clone with React and TailwindCSS! 🚀 #webdev',
        timestamp: '2m ago',
        likes: 5,
        retweets: 2,
        replies: 1,
      },
      {
        id: 2,
        author: {
          name: 'Jane Smith',
          username: '@janesmith',
          avatar: 'https://via.placeholder.com/40',
        },
        content: 'TailwindCSS 4.2 is amazing! The new features are incredible. Check out the new animations! ✨',
        timestamp: '15m ago',
        likes: 12,
        retweets: 4,
        replies: 3,
      },
    ];
    
    setTweets(initialTweets);
    setLoading(false);
  }, []);

  const addTweet = (content) => {
    const validation = validateTweet(content);
    
    if (!validation.isValid) {
      return { success: false, errors: validation.errors };
    }

    const newTweet = {
      id: Date.now(),
      author: {
        name: 'Current User',
        username: '@currentuser',
        avatar: 'https://via.placeholder.com/40',
      },
      content,
      timestamp: 'Just now',
      likes: 0,
      retweets: 0,
      replies: 0,
    };

    setTweets([newTweet, ...tweets]);
    return { success: true, errors: {} };
  };

  const likeTweet = (tweetId) => {
    setTweets(tweets.map(tweet => 
      tweet.id === tweetId 
        ? { ...tweet, likes: tweet.likes + 1 }
        : tweet
    ));
  };

  return { tweets, loading, addTweet, likeTweet };
};