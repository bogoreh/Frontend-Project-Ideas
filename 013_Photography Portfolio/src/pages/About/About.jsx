import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="profile-image">
            <div className="image-placeholder">
              <span>👨‍🎨</span>
            </div>
          </div>
          <div className="about-intro">
            <h1>About Me</h1>
            <p className="tagline">Visual Storyteller & Professional Photographer</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="about-content">
          <section className="about-section">
            <h2>My Journey</h2>
            <p>
              My passion for photography began over a decade ago when I received my first camera as a birthday gift. 
              What started as a hobby quickly evolved into a lifelong passion and profession.
            </p>
            <p>
              I specialize in portrait and landscape photography, with a keen eye for capturing authentic moments 
              and the natural beauty of our world. My approach combines technical expertise with artistic vision 
              to create images that tell compelling stories.
            </p>
          </section>

          <section className="about-section">
            <h2>Philosophy</h2>
            <p>
              I believe that every photograph should tell a story and evoke emotion. Whether I'm shooting a portrait 
              session, capturing a landscape at golden hour, or documenting a special event, my goal is to create 
              images that resonate with viewers and stand the test of time.
            </p>
          </section>

          <div className="stats-grid">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>3</h3>
              <p>Awards Won</p>
            </div>
          </div>

          <section className="about-section">
            <h2>Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Portrait Photography</h3>
                <p>Professional portrait sessions for individuals, couples, and families.</p>
              </div>
              <div className="service-card">
                <h3>Landscape Photography</h3>
                <p>Capturing the beauty of nature and scenic locations.</p>
              </div>
              <div className="service-card">
                <h3>Event Coverage</h3>
                <p>Documenting weddings, corporate events, and special occasions.</p>
              </div>
              <div className="service-card">
                <h3>Commercial Work</h3>
                <p>Product photography and brand visual content creation.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About