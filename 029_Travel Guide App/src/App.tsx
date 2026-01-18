import React, { useState } from 'react';
import Header from './components/Header';
import DestinationCard from './components/DestinationCard';
import CategoryFilter from './components/CategoryFilter';
import TravelTips from './components/TravelTips';
import { destinations } from './data/destinations';
import { Category } from './types';
import './App.css';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredDestinations = selectedCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <div className="app-intro">
            <h2>Find Your Perfect Destination</h2>
            <p>Explore handpicked travel destinations around the world with detailed guides and tips for your next adventure.</p>
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
          
          <div className="destinations-grid">
            {filteredDestinations.map(destination => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          
          {filteredDestinations.length === 0 && (
            <div className="no-results">
              <p>No destinations found for the selected category. Try another filter!</p>
            </div>
          )}
          
          <TravelTips />
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>TravelGuide App &copy; {new Date().getFullYear()} - Your Personal Travel Companion</p>
          <p className="footer-note">All images sourced from Unsplash. This is a demo app for educational purposes.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;