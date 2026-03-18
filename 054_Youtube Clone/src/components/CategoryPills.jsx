import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CategoryPills = ({ categories, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory?.(category);
  };

  return (
    <div className="relative flex items-center py-3 px-4 border-b border-gray-200 bg-white">
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 ml-2"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all text-sm font-medium
              ${activeCategory === category 
                ? 'bg-[#0f0f0f] text-white hover:bg-[#282828]' 
                : 'bg-gray-100 hover:bg-gray-200 text-[#0f0f0f]'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 mr-2"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default CategoryPills;