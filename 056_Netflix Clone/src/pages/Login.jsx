import React, { useState } from 'react';

function Login({ onGetStarted }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@') && email.includes('.')) {
      onGetStarted();
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200" 
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative netflix-container min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 bg-black/70 p-8 md:p-12 rounded">
          <div>
            <h1 className="text-4xl font-bold text-center mb-8">Sign In</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#181818] rounded border border-gray-600 
                       focus:outline-none focus:border-white text-white"
            />
            <button
              type="submit"
              className="w-full bg-[#E50914] text-white py-3 rounded font-semibold 
                       hover:bg-red-700 transition"
            >
              Get Started
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm">
            New to Netflix?{' '}
            <button onClick={onGetStarted} className="text-white hover:underline">
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;