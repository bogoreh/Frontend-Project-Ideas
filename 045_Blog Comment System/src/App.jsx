import React, { useState } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import Notification from './components/Notification';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [comments, setComments] = useLocalStorage('comments', []);
  const [notification, setNotification] = useState(null);

  const handleNewComment = (comment) => {
    setComments(prevComments => [comment, ...prevComments]);
    setNotification({
      message: 'Comment posted successfully!',
      type: 'success'
    });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />
      )}
      
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Blog Comments
          </h1>
          <p className="text-gray-600">
            Share your thoughts with the community
          </p>
        </header>

        <CommentForm onSubmit={handleNewComment} />
        
        <div className="mt-8">
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
}

export default App;