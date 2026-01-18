import { useState, useEffect } from 'react';  // Remove React from import
import { Book } from './types/book';
import { db } from './firebase/config';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import BookReader from './components/BookReader';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const booksCollection = collection(db, 'books');
      const booksSnapshot = await getDocs(booksCollection);
      const booksList = booksSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Book[];
      
      setBooks(booksList);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProgress = async (bookId: string, page: number) => {
    try {
      const bookRef = doc(db, 'books', bookId);
      await updateDoc(bookRef, { currentPage: page });
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseReader = () => {
    setSelectedBook(null);
    fetchBooks(); // Refresh to update progress
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app">
      <Navbar />
      
      {selectedBook ? (
        <BookReader 
          book={selectedBook}
          onClose={handleCloseReader}
          onSaveProgress={handleSaveProgress}
        />
      ) : (
        <main className="main-content">
          <div className="library-header">
            <h1>My Library</h1>
            <p className="subtitle">Pick up where you left off</p>
          </div>
          
          <div className="books-grid">
            {books.length > 0 ? (
              books.map(book => (
                <BookCard 
                  key={book.id} 
                  book={book} 
                  onSelect={handleBookSelect}
                />
              ))
            ) : (
              <div className="empty-library">
                <h3>No books available</h3>
                <p>Add books to your Firebase database</p>
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;