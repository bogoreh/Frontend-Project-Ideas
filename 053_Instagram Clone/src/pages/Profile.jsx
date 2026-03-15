import React, { useState } from 'react';
import { FiSettings, FiGrid, FiHeart, FiUser, FiChevronLeft } from 'react-icons/fi';
import { BsCamera, BsBookmark } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import MobileNav from '../components/MobileNav';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');
  const [showEditProfile, setShowEditProfile] = useState(false);
  
  // Mock user data
  const userData = {
    username: 'john_doe',
    fullName: 'John Doe',
    bio: '📸 Photographer | 🌍 Traveler | ☕ Coffee Lover\n✨ Capturing moments around the world',
    avatar: 'https://i.pravatar.cc/300?img=2',
    posts: 42,
    followers: 1234,
    following: 567,
    website: 'www.johndoe.com',
  };

  // Mock posts data
  const posts = [
    { id: 1, image: 'https://picsum.photos/400/400?random=1', likes: 123, comments: 12 },
    { id: 2, image: 'https://picsum.photos/400/400?random=2', likes: 456, comments: 34 },
    { id: 3, image: 'https://picsum.photos/400/400?random=3', likes: 789, comments: 56 },
    { id: 4, image: 'https://picsum.photos/400/400?random=4', likes: 234, comments: 23 },
    { id: 5, image: 'https://picsum.photos/400/400?random=5', likes: 567, comments: 45 },
    { id: 6, image: 'https://picsum.photos/400/400?random=6', likes: 890, comments: 67 },
    { id: 7, image: 'https://picsum.photos/400/400?random=7', likes: 123, comments: 12 },
    { id: 8, image: 'https://picsum.photos/400/400?random=8', likes: 456, comments: 34 },
    { id: 9, image: 'https://picsum.photos/400/400?random=9', likes: 789, comments: 56 },
  ];

  // Mock saved posts
  const savedPosts = [
    { id: 101, image: 'https://picsum.photos/400/400?random=10', likes: 123, comments: 12 },
    { id: 102, image: 'https://picsum.photos/400/400?random=11', likes: 456, comments: 34 },
    { id: 103, image: 'https://picsum.photos/400/400?random=12', likes: 789, comments: 56 },
  ];

  // Mock tagged posts
  const taggedPosts = [
    { id: 201, image: 'https://picsum.photos/400/400?random=13', likes: 123, comments: 12 },
    { id: 202, image: 'https://picsum.photos/400/400?random=14', likes: 456, comments: 34 },
  ];

  const getActivePosts = () => {
    switch(activeTab) {
      case 'posts':
        return posts;
      case 'saved':
        return savedPosts;
      case 'tagged':
        return taggedPosts;
      default:
        return posts;
    }
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    // Edit profile logic here
    setShowEditProfile(false);
  };

  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FiChevronLeft 
              className="text-2xl cursor-pointer md:hidden" 
              onClick={() => navigate(-1)}
            />
            <h1 className="font-semibold text-xl">{userData.username}</h1>
          </div>
          <FiSettings className="text-2xl cursor-pointer" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto pt-16 px-4">
        {/* Profile Info */}
        <div className="py-4">
          {/* Avatar and Stats - Mobile Layout */}
          <div className="flex items-center md:block">
            {/* Avatar for mobile */}
            <div className="md:hidden mr-6">
              <div className="relative">
                <img
                  src={userData.avatar}
                  alt={userData.username}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full">
                  <BsCamera className="text-xs" />
                </button>
              </div>
            </div>

            {/* Stats for mobile */}
            <div className="flex-1 flex justify-around md:hidden">
              <div className="text-center">
                <span className="font-semibold block">{userData.posts}</span>
                <span className="text-gray-500 text-sm">Posts</span>
              </div>
              <div className="text-center">
                <span className="font-semibold block">{userData.followers}</span>
                <span className="text-gray-500 text-sm">Followers</span>
              </div>
              <div className="text-center">
                <span className="font-semibold block">{userData.following}</span>
                <span className="text-gray-500 text-sm">Following</span>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-start space-x-16">
            <div className="relative">
              <img
                src={userData.avatar}
                alt={userData.username}
                className="w-36 h-36 rounded-full object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full">
                <BsCamera />
              </button>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <h2 className="text-2xl">{userData.username}</h2>
                <button 
                  onClick={() => setShowEditProfile(true)}
                  className="bg-gray-100 px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-200"
                >
                  Edit Profile
                </button>
                <button className="bg-gray-100 px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-200">
                  View Archive
                </button>
                <FiSettings className="text-2xl cursor-pointer" />
              </div>

              <div className="flex space-x-8 mb-4">
                <div><span className="font-semibold">{userData.posts}</span> posts</div>
                <div><span className="font-semibold">{userData.followers}</span> followers</div>
                <div><span className="font-semibold">{userData.following}</span> following</div>
              </div>

              <div>
                <p className="font-semibold">{userData.fullName}</p>
                <p className="whitespace-pre-line text-sm">{userData.bio}</p>
                <a href={`https://${userData.website}`} className="text-blue-900 font-semibold text-sm" target="_blank" rel="noopener noreferrer">
                  {userData.website}
                </a>
              </div>
            </div>
          </div>

          {/* Bio for mobile */}
          <div className="mt-4 md:hidden">
            <p className="font-semibold">{userData.fullName}</p>
            <p className="whitespace-pre-line text-sm">{userData.bio}</p>
            <a href={`https://${userData.website}`} className="text-blue-900 font-semibold text-sm" target="_blank" rel="noopener noreferrer">
              {userData.website}
            </a>
          </div>

          {/* Edit Profile Button for mobile */}
          <div className="mt-4 md:hidden">
            <button 
              onClick={() => setShowEditProfile(true)}
              className="w-full bg-gray-100 py-2 rounded-lg font-semibold text-sm hover:bg-gray-200"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Story Highlights */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex space-x-6 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex flex-col items-center space-y-1 min-w-[70px]">
                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <FiUser className="text-2xl text-gray-400" />
                </div>
                <span className="text-xs">Highlight {item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex justify-around">
            <button
              className={`flex-1 py-3 border-t-2 ${
                activeTab === 'posts'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400'
              }`}
              onClick={() => setActiveTab('posts')}
            >
              <FiGrid className="text-2xl mx-auto" />
            </button>
            <button
              className={`flex-1 py-3 border-t-2 ${
                activeTab === 'saved'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400'
              }`}
              onClick={() => setActiveTab('saved')}
            >
              <BsBookmark className="text-2xl mx-auto" />
            </button>
            <button
              className={`flex-1 py-3 border-t-2 ${
                activeTab === 'tagged'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400'
              }`}
              onClick={() => setActiveTab('tagged')}
            >
              <FiUser className="text-2xl mx-auto" />
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1 py-1">
          {getActivePosts().map((post) => (
            <div key={post.id} className="relative aspect-square group cursor-pointer">
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex space-x-4 text-white">
                  <span className="flex items-center">
                    <FiHeart className="mr-1" /> {post.likes}
                  </span>
                  <span className="flex items-center">
                    <FiUser className="mr-1" /> {post.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No posts message */}
        {getActivePosts().length === 0 && (
          <div className="py-16 text-center">
            <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <BsCamera className="text-3xl text-gray-400" />
            </div>
            <h3 className="font-semibold text-xl mb-2">No Posts Yet</h3>
            <p className="text-gray-500 text-sm">
              {activeTab === 'posts' && "When you share posts, they'll appear here."}
              {activeTab === 'saved' && "Save photos and videos to see them here."}
              {activeTab === 'tagged' && "When people tag you, they'll appear here."}
            </p>
          </div>
        )}
      </main>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <EditProfileModal 
          userData={userData}
          onClose={() => setShowEditProfile(false)}
          onSave={handleEditProfile}
        />
      )}

      <MobileNav />
    </div>
  );
};

// Edit Profile Modal Component
const EditProfileModal = ({ userData, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: userData.fullName,
    username: userData.username,
    bio: userData.bio,
    website: userData.website,
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    gender: 'Prefer not to say'
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (!/^[a-zA-Z0-9._]{3,30}$/.test(formData.username)) {
      newErrors.username = 'Username must be 3-30 characters and can only contain letters, numbers, dots, and underscores';
    }

    if (formData.website && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(formData.website)) {
      newErrors.website = 'Please enter a valid website URL';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      onSave(e);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white">
          <h2 className="font-semibold text-lg">Edit Profile</h2>
          <div className="flex items-center space-x-4">
            <button onClick={onClose} className="text-gray-500">Cancel</button>
            <button 
              onClick={handleSubmit}
              className="text-blue-500 font-semibold"
            >
              Save
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Profile Picture */}
          <div className="flex items-center space-x-4">
            <img
              src={userData.avatar}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <button type="button" className="text-blue-500 font-semibold text-sm">
                Change Profile Photo
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-1 ${
                errors.fullName ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-1 ${
                errors.username ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
              }`}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
              placeholder="Write something about yourself..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({...formData, website: e.target.value})}
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-1 ${
                errors.website ? 'border-red-500' : 'border-gray-300 focus:ring-gray-300'
              }`}
              placeholder="https://example.com"
            />
            {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;