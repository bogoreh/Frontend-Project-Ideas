import React, { useState, useEffect } from 'react';
import { fetchCountries } from './services/api';
import { Country } from './types/Country';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  }, [searchTerm, countries]);

  const loadCountries = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchCountries();
      setCountries(data);
      setFilteredCountries(data);
    } catch (err) {
      setError('Failed to load countries. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🌍 Country Info Explorer</h1>
        <p className="app-subtitle">Discover information about countries around the world</p>
      </header>

      <main className="app-main">
        <div className="search-container">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          
          {filteredCountries.length > 0 && !isLoading && (
            <div className="results-count">
              Showing {filteredCountries.length} of {countries.length} countries
            </div>
          )}
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={loadCountries} className="retry-button">
              Try Again
            </button>
          </div>
        ) : (
          <CountryList countries={filteredCountries} />
        )}
      </main>

      <footer className="app-footer">
        <p>Country Info App • Data from <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer">REST Countries API</a></p>
        <p className="footer-note">Built with React, TypeScript, and Vite</p>
      </footer>
    </div>
  );
};

export default App;