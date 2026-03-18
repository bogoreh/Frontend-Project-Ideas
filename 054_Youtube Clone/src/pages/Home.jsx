import React, { useState } from 'react';
import VideoGrid from '../components/VideoGrid';
import CategoryPills from '../components/CategoryPills';
import { categories, videos } from '../data/videos';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredVideos, setFilteredVideos] = useState(videos);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    
    if (category === 'All') {
      setFilteredVideos(videos);
    } else {
      const filtered = videos.filter(video => video.category === category);
      setFilteredVideos(filtered);
    }
  };

  const handleSearch = (query) => {
    if (!query) {
      setFilteredVideos(videos);
      return;
    }
    
    const searchResults = videos.filter(video => 
      video.title.toLowerCase().includes(query.toLowerCase()) ||
      video.channel.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVideos(searchResults);
  };

  return (
    <div className="flex-1 bg-white">
      <CategoryPills 
        categories={categories}
        onSelectCategory={handleCategorySelect}
      />
      
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {selectedCategory === 'All' ? 'Recommended' : selectedCategory}
          </h2>
          <span className="text-sm text-gray-600">
            {filteredVideos.length} videos
          </span>
        </div>
        
        {filteredVideos.length > 0 ? (
          <VideoGrid videos={filteredVideos} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No videos found for this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;