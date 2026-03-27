import React from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import Footer from '../components/Footer';
import { moviesData } from '../data/moviesData';

function Home() {
  return (
    <div className="pb-10">
      <Hero />
      <div className="relative -mt-32 z-10">
        {moviesData.map((section, index) => (
          <MovieRow 
            key={index}
            title={section.title}
            movies={section.movies}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;