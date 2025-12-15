import { MapPin, Calendar, Users, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="logo">Hotel<span className="logo-highlight">Booking</span></h1>
            <p className="tagline">Find your perfect stay</p>
          </div>
          
          <div className="search-section">
            <div className="search-fields">
              <div className="search-field">
                <MapPin size={20} />
                <input 
                  type="text" 
                  placeholder="Where to?" 
                  className="input-field"
                  defaultValue="New York, NY"
                />
              </div>
              
              <div className="search-field">
                <Calendar size={20} />
                <input 
                  type="date" 
                  className="input-field"
                  defaultValue={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div className="search-field">
                <Users size={20} />
                <select className="input-field" defaultValue="2">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              
              <button className="btn btn-primary search-btn">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .header {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
          padding: 30px 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
        }
        
        .logo-section {
          flex: 1;
          min-width: 250px;
        }
        
        .logo {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }
        
        .logo-highlight {
          color: #93c5fd;
        }
        
        .tagline {
          font-size: 14px;
          opacity: 0.9;
          font-weight: 300;
        }
        
        .search-section {
          flex: 2;
          min-width: 300px;
        }
        
        .search-fields {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .search-field {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
        }
        
        .search-field input,
        .search-field select {
          background: rgba(255, 255, 255, 0.9);
          border: none;
        }
        
        .search-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          font-weight: 600;
          grid-column: 1 / -1;
        }
        
        @media (min-width: 768px) {
          .search-btn {
            grid-column: auto;
          }
          .search-fields {
            grid-template-columns: 2fr 1fr 1fr auto;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;