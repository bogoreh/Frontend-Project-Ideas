import { Country } from '../types/Country';
import CountryCard from './CountryCard';
import './CountryList.css';

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  if (countries.length === 0) {
    return (
      <div className="no-results">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
        </svg>
        <p>No countries found. Try a different search.</p>
      </div>
    );
  }

  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountryList;