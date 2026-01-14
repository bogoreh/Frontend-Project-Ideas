import React from 'react';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Globe className="w-8 h-8" />
          <h1 className="text-3xl md:text-4xl font-bold">Universal Translator</h1>
        </div>
        <p className="text-center text-blue-100 text-lg">
          Translate text between multiple languages instantly
        </p>
      </div>
    </header>
  );
};

export default Header;