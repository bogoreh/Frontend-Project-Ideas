import { Country } from '../types/Country';
import './CountryCard.css';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="country-card">
      <div className="country-flag">
        <img src={country.flags.png} alt={country.flags.alt || `${country.name.common} flag`} />
      </div>
      <div className="country-content">
        <h3 className="country-name">{country.name.common}</h3>
        
        <div className="country-details">
          <div className="detail-item">
            <span className="detail-label">Capital:</span>
            <span className="detail-value">{country.capital?.[0] || 'N/A'}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Region:</span>
            <span className="detail-value">{country.region}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Population:</span>
            <span className="detail-value">{formatNumber(country.population)}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Area:</span>
            <span className="detail-value">{formatNumber(country.area)} km²</span>
          </div>
        </div>
        
        {country.languages && (
          <div className="country-languages">
            <span className="languages-label">Languages: </span>
            <span className="languages-value">
              {Object.values(country.languages).slice(0, 2).join(', ')}
              {Object.values(country.languages).length > 2 && '...'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryCard;