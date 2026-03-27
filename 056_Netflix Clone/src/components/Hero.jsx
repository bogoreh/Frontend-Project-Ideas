import React from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

function Hero() {
  return (
    <div className="relative h-[70vh] md:h-[85vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200" 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#141414] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative netflix-container h-full flex items-center">
        <div className="max-w-xl space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Stranger Things</h1>
          <p className="text-sm md:text-base text-gray-300 line-clamp-3 md:line-clamp-none">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, 
            terrifying supernatural forces and one strange little girl.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="flex items-center justify-center space-x-2 bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded hover:bg-gray-300 transition">
              <FaPlay />
              <span>Play</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-gray-500/70 text-white px-6 py-2 md:px-8 md:py-3 rounded hover:bg-gray-500/50 transition">
              <FaInfoCircle />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;