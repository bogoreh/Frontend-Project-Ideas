import React from 'react';

const Suggestions = ({ suggestions }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500 font-semibold text-sm">Suggestions For You</p>
        <button className="text-xs font-semibold">See All</button>
      </div>

      {suggestions.map(user => (
        <div key={user.id} className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">{user.username}</p>
              <p className="text-xs text-gray-500">{user.mutual} mutual friends</p>
            </div>
          </div>
          <button className="text-blue-500 text-xs font-semibold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;