import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Specializes in modern and minimalist interiors with over 12 years of experience."
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80",
      description: "Ensures every project is completed on time, within budget, and exceeds expectations."
    },
    {
      name: "Elena Rodriguez",
      role: "Color Specialist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Expert in color theory and creating harmonious palettes that transform spaces."
    },
    {
      name: "David Park",
      role: "Architectural Designer",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Focuses on spatial planning and integrating architectural elements with interior design."
    }
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Team</h2>
          <p>Our talented designers bring creativity, expertise, and passion to every project they undertake.</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-social">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaLinkedinIn /></a>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx="true">{`
        .team {
          background-color: var(--secondary-color);
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .team-card {
          background-color: var(--light-color);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        
        .team-card:hover {
          transform: translateY(-10px);
        }
        
        .team-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }
        
        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        
        .team-card:hover .team-image img {
          transform: scale(1.05);
        }
        
        .team-social {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          gap: 15px;
          padding: 15px;
          transform: translateY(100%);
          transition: var(--transition);
        }
        
        .team-card:hover .team-social {
          transform: translateY(0);
        }
        
        .team-social a {
          color: white;
          font-size: 1.2rem;
          transition: var(--transition);
        }
        
        .team-social a:hover {
          color: var(--primary-color);
        }
        
        .team-info {
          padding: 25px;
          text-align: center;
        }
        
        .team-info h3 {
          margin-bottom: 5px;
          color: var(--dark-color);
        }
        
        .team-role {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 15px;
        }
        
        .team-description {
          color: var(--text-light);
          font-size: 0.95rem;
        }
        
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 576px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;