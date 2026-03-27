import React, { useState } from 'react';

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => alert(`Playing: ${movie.title}`)}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover rounded"
      />
      
      {/* Hover Info */}
      {isHovered && (
        <div className="absolute inset-0 bg-black/90 p-4 flex flex-col justify-end 
                        opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-sm md:text-base font-bold mb-2">{movie.title}</h3>
          <p className="text-xs text-gray-300 line-clamp-3">{movie.description}</p>
          <div className="flex space-x-2 mt-2">
            <span className="text-xs text-green-400">{movie.match}% Match</span>
            <span className="text-xs text-gray-400">{movie.year}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;