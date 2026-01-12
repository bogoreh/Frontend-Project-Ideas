export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "10 GB storage",
        "Email support",
        "API access"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "Up to 20 users",
        "Advanced analytics",
        "100 GB storage",
        "Priority support",
        "Custom integrations",
        "AI features"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Custom analytics",
        "1 TB storage",
        "24/7 phone support",
        "White-label solution",
        "Dedicated account manager"
      ],
      highlighted: false
    }
  ]

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the perfect plan for your needs</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`} 
              key={index}
            >
              {plan.highlighted && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'} btn-large`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}