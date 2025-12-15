import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { hotels } from '../data';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(true);
  
  const hotel = hotels.find(h => h.id === parseInt(id)) || hotels[0];

  const handleBookingSubmit = (bookingData) => {
    console.log('Booking submitted:', bookingData);
    setShowBookingForm(false);
  };

  return (
    <div className="booking-page">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} />
          Back to Hotels
        </button>
        
        <div className="hotel-header">
          <div className="hotel-info">
            <h1>{hotel.name}</h1>
            <div className="location-rating">
              <div className="location">
                <MapPin size={18} />
                <span>{hotel.location}</span>
              </div>
              <div className="rating">
                <Star size={18} fill="#fbbf24" color="#fbbf24" />
                <span>{hotel.rating}</span>
                <span>({hotel.reviews} reviews)</span>
              </div>
            </div>
            <p className="description">{hotel.description}</p>
          </div>
          
          <div className="price-section">
            <div className="price">${hotel.price}<span>/night</span></div>
            <button 
              className="btn btn-primary"
              onClick={() => setShowBookingForm(true)}
            >
              Book Now
            </button>
          </div>
        </div>
        
        <div className="hotel-image-gallery">
          <div className="main-image">
            <img src={hotel.image} alt={hotel.name} />
          </div>
          <div className="thumbnail-grid">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="thumbnail">
                <img src={`https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww`} alt={`Hotel view ${num}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="amenities-section">
          <h3>Hotel Amenities</h3>
          <div className="amenities-grid">
            {hotel.amenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <div className="amenity-icon">✓</div>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
        
        {showBookingForm && (
          <BookingForm hotel={hotel} onBookingSubmit={handleBookingSubmit} />
        )}
      </div>
      
      <style jsx>{`
        .booking-page {
          padding: 30px 0 60px;
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          margin-bottom: 30px;
          font-weight: 500;
        }
        
        .back-btn:hover {
          color: #3b82f6;
        }
        
        .hotel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 30px;
        }
        
        .hotel-info {
          flex: 2;
          min-width: 300px;
        }
        
        .hotel-info h1 {
          font-size: 32px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 15px;
        }
        
        .location-rating {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .location, .rating {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
        }
        
        .rating {
          background: #fef3c7;
          padding: 6px 12px;
          border-radius: 20px;
          color: #92400e;
          font-weight: 600;
        }
        
        .description {
          color: #64748b;
          line-height: 1.6;
          max-width: 600px;
        }
        
        .price-section {
          flex: 1;
          min-width: 200px;
          text-align: center;
        }
        
        .price {
          font-size: 36px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 15px;
        }
        
        .price span {
          font-size: 16px;
          font-weight: 400;
          color: #64748b;
        }
        
        .hotel-image-gallery {
          margin-bottom: 40px;
        }
        
        .main-image {
          height: 400px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        
        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .thumbnail-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }
        
        .thumbnail {
          height: 100px;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .amenities-section {
          margin-bottom: 40px;
        }
        
        .amenities-section h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #1e293b;
        }
        
        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 15px;
        }
        
        .amenity-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          background: #f8fafc;
          border-radius: 8px;
        }
        
        .amenity-icon {
          width: 24px;
          height: 24px;
          background: #3b82f6;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Booking;