export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          Transform Your Business with <span className="highlight">Smart SaaS</span>
        </h1>
        <p className="hero-subtitle">
          The all-in-one platform that helps you grow, automate, and scale your business effortlessly.
          Join thousands of satisfied customers.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary btn-large">Get Started Free</button>
          <button className="btn btn-secondary btn-large">Watch Demo</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}