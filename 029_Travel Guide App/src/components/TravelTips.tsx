import React from 'react';
import './TravelTips.css';

const TravelTips: React.FC = () => {
  const generalTips = [
    'Always carry a copy of your passport and important documents',
    'Research local customs and etiquette before visiting',
    'Learn a few basic phrases in the local language',
    'Pack a basic first-aid kit with essentials',
    'Notify your bank about travel plans to avoid card issues',
    'Purchase travel insurance for unexpected situations'
  ];

  return (
    <div className="travel-tips-section">
      <h2 className="tips-title">General Travel Tips</h2>
      <div className="tips-grid">
        {generalTips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <div className="tip-number">{index + 1}</div>
            <p className="tip-text">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTips;