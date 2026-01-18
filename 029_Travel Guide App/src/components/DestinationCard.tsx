import React from 'react';
import { Destination } from '../types';
import './DestinationCard.css';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'beach': return '🏖️';
      case 'mountain': return '⛰️';
      case 'city': return '🏙️';
      case 'historical': return '🏛️';
      case 'nature': return '🌿';
      default: return '✈️';
    }
  };

  return (
    <div className="destination-card">
      <div className="card-image">
        <img src={destination.image} alt={destination.name} />
        <div className="card-category">
          <span className="category-icon">{getCategoryIcon(destination.category)}</span>
          <span className="category-text">{destination.category}</span>
        </div>
        <div className="card-rating">
          <span className="star-icon">⭐</span>
          <span className="rating-value">{destination.rating}</span>
        </div>
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="destination-name">{destination.name}</h3>
          <span className="destination-country">{destination.country}</span>
        </div>
        
        <p className="destination-description">{destination.description}</p>
        
        <div className="destination-details">
          <div className="detail-item">
            <span className="detail-label">Best Time:</span>
            <span className="detail-value">{destination.bestTimeToVisit}</span>
          </div>
        </div>
        
        <div className="travel-tips">
          <h4>Travel Tips:</h4>
          <ul>
            {destination.travelTips.slice(0, 2).map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;