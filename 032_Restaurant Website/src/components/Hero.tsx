import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Experience Authentic Italian Flavors</h2>
        <p>Fresh ingredients, traditional recipes, and warm hospitality</p>
        <div className="hero-buttons">
          <a href="#menu" className="btn primary">View Menu</a>
          <a href="#contact" className="btn secondary">Reserve Table</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;