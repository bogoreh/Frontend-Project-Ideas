import React from 'react';
import { contactInfo } from '../data/menuItems';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Address</h3>
              <p>{contactInfo.address}</p>
            </div>
            
            <div className="contact-item">
              <h3>Phone</h3>
              <p>{contactInfo.phone}</p>
            </div>
            
            <div className="contact-item">
              <h3>Email</h3>
              <p>{contactInfo.email}</p>
            </div>
            
            <div className="contact-item">
              <h3>Opening Hours</h3>
              {contactInfo.hours.map((hour, index) => (
                <div key={index} className="hours-item">
                  <strong>{hour.day}:</strong> {hour.time}
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Make a Reservation</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <input type="date" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Number of Guests</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>
              <button type="submit" className="btn primary">Book Table</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;