import { Star, MapPin, Wifi, Coffee, Dumbbell, Waves } from 'lucide-react';

const HotelCard = ({ hotel }) => {
  const amenityIcons = {
    WiFi: <Wifi size={16} />,
    Pool: <Waves size={16} />,
    Restaurant: <Coffee size={16} />,
    Gym: <Dumbbell size={16} />
  };

  return (
    <div className="card hotel-card">
      <div className="hotel-image">
        <img src={hotel.image} alt={hotel.name} />
        <div className="price-tag">${hotel.price}<span>/night</span></div>
      </div>
      
      <div className="hotel-content">
        <div className="hotel-header">
          <h3 className="hotel-name">{hotel.name}</h3>
          <div className="rating">
            <Star size={16} fill="#fbbf24" color="#fbbf24" />
            <span>{hotel.rating}</span>
            <span className="reviews">({hotel.reviews} reviews)</span>
          </div>
        </div>
        
        <div className="location">
          <MapPin size={16} />
          <span>{hotel.location}</span>
        </div>
        
        <p className="description">{hotel.description}</p>
        
        <div className="amenities">
          {hotel.amenities.slice(0, 4).map((amenity, index) => (
            <div key={index} className="amenity">
              {amenityIcons[amenity] || <Coffee size={16} />}
              <span>{amenity}</span>
            </div>
          ))}
        </div>
        
        <button className="btn btn-primary book-btn">Book Now</button>
      </div>
      
      <style jsx>{`
        .hotel-card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .hotel-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .hotel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .hotel-card:hover .hotel-image img {
          transform: scale(1.05);
        }
        
        .price-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 20px;
        }
        
        .price-tag span {
          font-size: 12px;
          font-weight: 400;
          opacity: 0.8;
        }
        
        .hotel-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .hotel-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 10px;
        }
        
        .hotel-name {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          flex: 1;
        }
        
        .rating {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #fef3c7;
          padding: 4px 8px;
          border-radius: 20px;
          font-weight: 600;
          color: #92400e;
        }
        
        .reviews {
          font-size: 12px;
          opacity: 0.7;
        }
        
        .location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #64748b;
          font-size: 14px;
          margin-bottom: 12px;
        }
        
        .description {
          color: #64748b;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 15px;
          flex: 1;
        }
        
        .amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .amenity {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f1f5f9;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 12px;
          color: #475569;
        }
        
        .book-btn {
          width: 100%;
          margin-top: auto;
        }
      `}</style>
    </div>
  );
};

export default HotelCard;