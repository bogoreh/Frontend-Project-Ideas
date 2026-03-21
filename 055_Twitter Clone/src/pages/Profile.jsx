import React, { useState } from 'react';
import TweetList from '../components/tweets/TweetList';
import { useFormValidation } from '../hooks/useFormValidation';
import { validateProfile } from '../utils/validators';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Current User',
    bio: 'Web developer passionate about React and TailwindCSS',
    location: 'San Francisco, CA',
    website: 'https://example.com',
    joinDate: 'Joined January 2024'
  });

  const [editForm, setEditForm] = useState(profile);
  const { errors, validate, handleBlur, getFieldError } = useFormValidation(validateProfile);

  const handleSave = () => {
    if (validate(editForm)) {
      setProfile(editForm);
      setIsEditing(false);
    }
  };

  // Mock user tweets
  const userTweets = [
    {
      id: 3,
      author: {
        name: profile.name,
        username: '@currentuser',
        avatar: 'https://via.placeholder.com/40',
      },
      content: 'Working on my Twitter clone project! Learning a lot about React and TailwindCSS.',
      timestamp: '1h ago',
      likes: 3,
      retweets: 0,
      replies: 1,
    },
  ];

  return (
    <div className="pb-16 md:pb-0">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      
      {/* Profile Info */}
      <div className="px-4 relative">
        <div className="flex justify-between items-start">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 -mt-12"
          />
          
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="mt-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:text-white"
            >
              Edit Profile
            </button>
          ) : (
            <div className="mt-2 space-x-2">
              <button
                onClick={() => {
                  setEditForm(profile);
                  setIsEditing(false);
                }}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-twitter-blue text-white rounded-full font-bold hover:bg-twitter-blueHover transition"
              >
                Save
              </button>
            </div>
          )}
        </div>

        {!isEditing ? (
          // View Mode
          <div className="mt-4">
            <h2 className="font-bold text-xl dark:text-white">{profile.name}</h2>
            <p className="text-gray-500">@currentuser</p>
            <p className="mt-2 dark:text-white">{profile.bio}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-gray-500">
              <span>📍 {profile.location}</span>
              <span>🔗 {profile.website}</span>
              <span>📅 {profile.joinDate}</span>
            </div>
            <div className="flex space-x-4 mt-2">
              <span><strong className="dark:text-white">127</strong> <span className="text-gray-500">Following</span></span>
              <span><strong className="dark:text-white">342</strong> <span className="text-gray-500">Followers</span></span>
            </div>
          </div>
        ) : (
          // Edit Mode
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                onBlur={() => handleBlur('name')}
                className={`mt-1 block w-full border rounded-md p-2 dark:bg-gray-800 dark:text-white
                  ${getFieldError('name') ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
              />
              {getFieldError('name') && (
                <p className="text-red-500 text-sm mt-1">{getFieldError('name')}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
              <textarea
                value={editForm.bio}
                onChange={(e) => setEditForm({...editForm, bio: e.target.value})}
                onBlur={() => handleBlur('bio')}
                rows="3"
                className={`mt-1 block w-full border rounded-md p-2 dark:bg-gray-800 dark:text-white
                  ${getFieldError('bio') ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
              />
              {getFieldError('bio') && (
                <p className="text-red-500 text-sm mt-1">{getFieldError('bio')}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">{editForm.bio.length}/160</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
              <input
                type="text"
                value={editForm.location}
                onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                onBlur={() => handleBlur('location')}
                className={`mt-1 block w-full border rounded-md p-2 dark:bg-gray-800 dark:text-white
                  ${getFieldError('location') ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
              />
              {getFieldError('location') && (
                <p className="text-red-500 text-sm mt-1">{getFieldError('location')}</p>
              )}
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-800 mt-6">
          <button className="flex-1 py-3 font-bold border-b-2 border-twitter-blue text-twitter-blue">
            Tweets
          </button>
          <button className="flex-1 py-3 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            Replies
          </button>
          <button className="flex-1 py-3 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            Media
          </button>
        </div>

        {/* User Tweets */}
        <TweetList tweets={userTweets} onLike={() => {}} />
      </div>
    </div>
  );
}

export default Profile;