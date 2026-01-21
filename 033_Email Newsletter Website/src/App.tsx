import React, { useState } from 'react';
import Header from './components/Header';
import EmailForm from './components/EmailForm';
import SuccessMessage from './components/SuccessMessage';
import Footer from './components/Footer';

interface Subscriber {
  email: string;
  name: string;
}

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriber, setSubscriber] = useState<Subscriber>({ email: '', name: '' });

  const handleSubscribe = (email: string, name: string) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubscriber({ email, name });
      setIsSubscribed(true);
      setIsSubmitting(false);
      
      // In a real app, you would send this data to your backend
      console.log('Subscribed:', { email, name });
    }, 1500);
  };

  const handleReset = () => {
    setIsSubscribed(false);
  };

  return (
    <div className="app">
      <Header />
      
      {isSubscribed ? (
        <SuccessMessage 
          email={subscriber.email} 
          name={subscriber.name} 
          onReset={handleReset} 
        />
      ) : (
        <EmailForm 
          onSubscribe={handleSubscribe} 
          isSubmitting={isSubmitting} 
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;