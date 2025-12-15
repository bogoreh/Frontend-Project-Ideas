import { useState } from 'react';
import { Calendar, Users, CreditCard, User } from 'lucide-react';

const BookingForm = ({ hotel, onBookingSubmit }) => {
  const [formData, setFormData] = useState({
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    guests: 2,
    roomType: 'Standard Room',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      ...formData,
      hotel: hotel.name,
      totalPrice: calculateTotalPrice()
    };
    onBookingSubmit(bookingData);
    alert('Booking confirmed! Check your email for details.');
  };

  const calculateTotalPrice = () => {
    const nights = Math.ceil(
      (new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24)
    );
    const roomPrice = hotel.price;
    return nights * roomPrice;
  };

  return (
    <div className="booking-form-container">
      <div className="booking-summary">
        <h3>Booking Summary</h3>
        <div className="summary-item">
          <span>Hotel:</span>
          <strong>{hotel.name}</strong>
        </div>
        <div className="summary-item">
          <span>Price per night:</span>
          <strong>${hotel.price}</strong>
        </div>
        <div className="summary-item">
          <span>Total for {Math.ceil(
            (new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24)
          )} nights:</span>
          <strong className="total-price">${calculateTotalPrice()}</strong>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <h3>Book Your Stay</h3>
        
        <div className="form-group">
          <label>
            <Calendar size={18} />
            Check-in Date
          </label>
          <input
            type="date"
            value={formData.checkIn}
            onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
            className="input-field"
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <Calendar size={18} />
            Check-out Date
          </label>
          <input
            type="date"
            value={formData.checkOut}
            onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
            className="input-field"
            min={formData.checkIn}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <Users size={18} />
            Guests
          </label>
          <select
            value={formData.guests}
            onChange={(e) => setFormData({...formData, guests: e.target.value})}
            className="input-field"
          >
            {[1, 2, 3, 4].map(num => (
              <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>
            <User size={18} />
            Full Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="input-field"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="input-field"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="input-field"
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>

        <div className="form-group">
          <label>
            <CreditCard size={18} />
            Room Type
          </label>
          <select
            value={formData.roomType}
            onChange={(e) => setFormData({...formData, roomType: e.target.value})}
            className="input-field"
          >
            <option>Standard Room</option>
            <option>Deluxe Room</option>
            <option>Suite</option>
            <option>Presidential Suite</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary submit-btn">
          Confirm Booking
        </button>
      </form>

      <style jsx>{`
        .booking-form-container {
          display: grid;
          gap: 30px;
          margin-top: 30px;
        }
        
        .booking-summary, .booking-form {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .booking-summary h3, .booking-form h3 {
          margin-bottom: 20px;
          color: #1e293b;
          font-size: 20px;
          font-weight: 700;
        }
        
        .summary-item {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .summary-item:last-child {
          border-bottom: none;
          margin-top: 10px;
          padding-top: 15px;
          border-top: 2px solid #e2e8f0;
        }
        
        .total-price {
          color: #3b82f6;
          font-size: 24px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-weight: 600;
          color: #475569;
        }
        
        .submit-btn {
          width: 100%;
          padding: 15px;
          font-size: 16px;
          font-weight: 600;
          margin-top: 10px;
        }
        
        @media (min-width: 768px) {
          .booking-form-container {
            grid-template-columns: 1fr 2fr;
          }
        }
      `}</style>
    </div>
  );
};

export default BookingForm;