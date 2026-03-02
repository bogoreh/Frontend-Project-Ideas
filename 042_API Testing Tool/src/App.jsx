import React from 'react';
import ApiTester from './components/ApiTester';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ApiTester />
      </main>
    </div>
  );
}

export default App;