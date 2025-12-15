import HotelCard from '../components/HotelCard';
import { hotels } from '../data';

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <section className="hero-section">
          <h2>Discover Amazing Hotels</h2>
          <p>Book your perfect stay at the best prices</p>
        </section>
        
        <section className="featured-hotels">
          <div className="section-header">
            <h3>Featured Hotels</h3>
            <div className="filters">
              <button className="btn btn-secondary">All</button>
              <button className="btn btn-secondary">Luxury</button>
              <button className="btn btn-secondary">Budget</button>
              <button className="btn btn-secondary">Resort</button>
            </div>
          </div>
          
          <div className="hotels-grid">
            {hotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </section>
        
        <section className="features">
          <div className="feature">
            <div className="feature-icon">🏨</div>
            <h4>Best Price Guarantee</h4>
            <p>Find a lower price? We'll match it.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⭐</div>
            <h4>Guest Reviews</h4>
            <p>Real reviews from real guests</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔒</div>
            <h4>Secure Booking</h4>
            <p>Your data is protected</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h4>24/7 Support</h4>
            <p>We're here to help anytime</p>
          </div>
        </section>
      </div>
      
      <style jsx>{`
        .home-page {
          padding: 40px 0;
        }
        
        .hero-section {
          text-align: center;
          margin-bottom: 50px;
          padding: 40px 0;
        }
        
        .hero-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 10px;
        }
        
        .hero-section p {
          font-size: 18px;
          color: #64748b;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 15px;
        }
        
        .section-header h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1e293b;
        }
        
        .filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        
        .hotels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          padding: 40px 0;
          border-top: 1px solid #e2e8f0;
        }
        
        .feature {
          text-align: center;
          padding: 20px;
        }
        
        .feature-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }
        
        .feature h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1e293b;
        }
        
        .feature p {
          color: #64748b;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default Home;