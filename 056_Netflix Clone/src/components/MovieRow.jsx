import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function MovieRow({ title, movies }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="movie-row mb-8 md:mb-12">
      <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">{title}</h2>
      
      <div className="group relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 md:p-3 rounded-full 
                     opacity-0 group-hover:opacity-100 transition hover:bg-black/80
                     hidden md:block"
        >
          <FaChevronLeft className="text-white text-lg md:text-xl" />
        </button>

        <div
          ref={rowRef}
          className="flex space-x-2 md:space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 md:p-3 rounded-full 
                     opacity-0 group-hover:opacity-100 transition hover:bg-black/80
                     hidden md:block"
        >
          <FaChevronRight className="text-white text-lg md:text-xl" />
        </button>
      </div>
    </div>
  );
}

export default MovieRow;