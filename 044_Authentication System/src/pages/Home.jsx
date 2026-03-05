import React from 'react';
import LogoutButton from '../components/Auth/LogoutButton';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Home (Protected)</h1>
      <p>You are logged in!</p>
      <LogoutButton />
    </div>
  );
};

export default Home;