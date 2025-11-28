import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import './index.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('London')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Demo API key - replace with your actual OpenWeatherMap API key
  const API_KEY = '30428422131bd2a6188bc8d513fde3cc' // Change this to your actual API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`

  const fetchWeather = async (cityName = city) => {
    // For demo purposes, we'll use a mock response if no real API key
    if (!API_KEY || API_KEY === 'demo_key' || API_KEY === 'YOUR_API_KEY_HERE') {
      // Mock data for demo
      setLoading(true)
      setTimeout(() => {
        setWeather({
          name: cityName,
          main: {
            temp: 15 + Math.floor(Math.random() * 20),
            feels_like: 15 + Math.floor(Math.random() * 20),
            humidity: 40 + Math.floor(Math.random() * 40),
            pressure: 1000 + Math.floor(Math.random() * 50)
          },
          weather: [{
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d'
          }],
          wind: {
            speed: (2 + Math.random() * 5).toFixed(1)
          }
        })
        setLoading(false)
        setError('')
      }, 500)
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
      )
      
      if (!response.ok) {
        throw new Error('City not found. Please try another city.')
      }
      
      const data = await response.json()
      setWeather(data)
      setError('')
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (searchCity) => {
    setCity(searchCity)
    fetchWeather(searchCity)
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <div className="app">
      <div className="container">
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        
        {loading && <div className="loading">Loading weather data...</div>}
        {error && <div className="error">Error: {error}</div>}
        {weather && !loading && <WeatherCard weather={weather} />}
        
        {(API_KEY === 'demo_key' || API_KEY === 'YOUR_API_KEY_HERE') && (
          <div className="demo-notice">
            Using demo data. Add your OpenWeatherMap API key for real data.
          </div>
        )}
      </div>
    </div>
  )
}

export default App