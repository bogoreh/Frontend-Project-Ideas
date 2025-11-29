import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import './index.css'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)

  const API_KEY = '90dc5a62' // Get free API key from OMDB API
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`

  const searchMovies = async (title) => {
    setLoading(true)
    try {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()
      setMovies(data.Search || [])
    } catch (error) {
      console.error('Error fetching movies:', error)
      setMovies([])
    }
    setLoading(false)
  }

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm)
    }
  }, [searchTerm])

  return (
    <div className="app">
      <h1>Movie Search App</h1>
      
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={() => searchMovies(searchTerm)}
      />

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              {searchTerm ? 'No movies found' : 'Search for movies'}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App