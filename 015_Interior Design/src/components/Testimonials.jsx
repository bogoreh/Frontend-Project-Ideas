import { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Jennifer Lopez",
      role: "Homeowner",
      comment: "DesignStudio transformed our outdated home into a modern paradise. Their attention to detail and creative solutions exceeded all our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Robert Kim",
      role: "Restaurant Owner",
      comment: "The commercial design for our restaurant was exceptional. They created an atmosphere that perfectly represents our brand and has increased customer satisfaction.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Amanda Smith",
      role: "CEO, TechStart Inc.",
      comment: "Our new office design has boosted employee morale and productivity. The team at DesignStudio understood our vision and executed it flawlessly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Client Testimonials</h2>
          <p>Hear what our clients have to say about their experience working with DesignStudio.</p>
        </div>
        
        <div className="testimonial-container">
          <button className="nav-btn prev-btn" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{testimonials[currentIndex].comment}</p>
              
              <div className="rating">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              
              <div className="client-info">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                <div>
                  <h4>{testimonials[currentIndex].name}</h4>
                  <p>{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="nav-btn next-btn" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      
      <style jsx="true">{`
        .testimonials {
          background-color: var(--light-color);
        }
        
        .testimonial-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-bottom: 30px;
        }
        
        .testimonial-card {
          background-color: var(--secondary-color);
          border-radius: var(--border-radius);
          padding: 50px;
          max-width: 800px;
          box-shadow: var(--shadow);
        }
        
        .quote-icon {
          font-size: 2rem;
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        
        .testimonial-text {
          font-size: 1.2rem;
          font-style: italic;
          margin-bottom: 25px;
          line-height: 1.8;
          color: var(--text-color);
        }
        
        .rating {
          display: flex;
          gap: 5px;
          margin-bottom: 25px;
        }
        
        .star {
          color: #ffc107;
          font-size: 1.2rem;
        }
        
        .client-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .client-info img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .client-info h4 {
          margin-bottom: 5px;
          color: var(--dark-color);
        }
        
        .client-info p {
          color: var(--text-light);
        }
        
        .nav-btn {
          background-color: var(--primary-color);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .nav-btn:hover {
          background-color: var(--dark-color);
        }
        
        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background-color: #ddd;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .dot.active {
          background-color: var(--primary-color);
          transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
          .testimonial-container {
            flex-direction: column;
            gap: 20px;
          }
          
          .testimonial-card {
            padding: 30px 20px;
          }
          
          .nav-btn {
            order: 3;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;