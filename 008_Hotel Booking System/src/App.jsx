import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:id" element={<Booking />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p>© 2024 HotelBooking. All rights reserved.</p>
            <p>Simple Hotel Booking System Demo</p>
          </div>
        </footer>
      </div>
      
      <style jsx>{`
        .App {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        main {
          flex: 1;
        }
        
        .footer {
          background: #1e293b;
          color: white;
          padding: 20px 0;
          text-align: center;
          margin-top: 60px;
        }
        
        .footer p {
          margin: 5px 0;
          font-size: 14px;
          opacity: 0.8;
        }
      `}</style>
    </Router>
  );
}

export default App;