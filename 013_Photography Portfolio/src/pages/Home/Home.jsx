import './Home.css'
import Gallery from '../../components/Gallery/Gallery'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Capturing Life's <span className="highlight">Beautiful</span> Moments</h1>
            <p className="hero-subtitle">Professional photography services for portraits, landscapes, and events</p>
            <button className="cta-button" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Work</h2>
            <p>A glimpse into my latest photography projects</p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default Home