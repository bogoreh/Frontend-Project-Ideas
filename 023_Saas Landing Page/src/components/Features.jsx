export default function Features() {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Our platform is optimized for speed and performance."
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee."
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Get insights with powerful analytics dashboard."
    },
    {
      icon: "🤖",
      title: "AI Powered",
      description: "Smart automation with artificial intelligence."
    },
    {
      icon: "🔄",
      title: "Easy Integration",
      description: "Connect with your favorite tools seamlessly."
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Access your dashboard from any device."
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to succeed in one platform</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}