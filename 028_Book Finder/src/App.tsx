import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import { Book } from './types/Book';
import { searchBooks } from './services/bookService';
import './styles/App.css';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    
    try {
      const response = await searchBooks(query);
      setBooks(response.items || []);
      setTotalResults(response.totalItems || 0);
    } catch (err) {
      setError('Failed to fetch books. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          
          {isLoading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Searching for books...</p>
            </div>
          )}
          
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
          
          {!isLoading && hasSearched && (
            <div className="results-info">
              <h2>
                Found {totalResults.toLocaleString()} result{totalResults !== 1 ? 's' : ''}
                {books.length > 0 && `, showing ${books.length}`}
              </h2>
            </div>
          )}
          
          {!isLoading && books.length === 0 && hasSearched && !error && (
            <div className="no-results">
              <h3>No books found</h3>
              <p>Try a different search term</p>
            </div>
          )}
          
          <div className="books-grid">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>Book Finder &copy; {new Date().getFullYear()} - Powered by Google Books API</p>
        </div>
      </footer>
    </div>
  );
};

export default App;