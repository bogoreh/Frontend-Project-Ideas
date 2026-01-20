import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 1995, La Bella Vista brings authentic Italian cuisine to your table. 
              Our recipes have been passed down through generations, using only the freshest 
              ingredients and traditional cooking methods.
            </p>
            <p>
              Our chefs combine time-honored techniques with modern flair to create dishes 
              that will transport you straight to the heart of Italy.
            </p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600" alt="Restaurant interior" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;