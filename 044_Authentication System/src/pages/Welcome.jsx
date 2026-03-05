import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Welcome!</h1>
      <Link to="/login" className="text-blue-500 mr-4">Login</Link>
      <Link to="/register" className="text-green-500">Register</Link>
    </div>
  );
};

export default Welcome;