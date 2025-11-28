function WeatherCard({ weather }) {
  const { name, main, weather: weatherInfo, wind } = weather

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-main">
        <img
          src={`https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`}
          alt={weatherInfo[0].description}
          className="weather-icon"
        />
        <div className="temperature">{Math.round(main.temp)}°C</div>
      </div>
      <div className="weather-description">
        {weatherInfo[0].description}
      </div>
      <div className="weather-details">
        <div className="detail-item">
          <span>Feels like:</span>
          <span>{Math.round(main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span>Humidity:</span>
          <span>{main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span>Wind:</span>
          <span>{wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span>Pressure:</span>
          <span>{main.pressure} hPa</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard