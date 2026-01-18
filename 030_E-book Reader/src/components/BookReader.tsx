import { useState, useEffect } from 'react';  // Remove React import
import { Book } from '../types/book';
import { FaBookmark, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface BookReaderProps {
  book: Book;
  onClose: () => void;
  onSaveProgress: (bookId: string, page: number) => void;
}

const BookReader = ({ book, onClose, onSaveProgress }: BookReaderProps) => {  // Remove React.FC
  const [currentPage, setCurrentPage] = useState(book.currentPage || 1);
  const [content, setContent] = useState<string[]>([]);
  const [fontSize, setFontSize] = useState(16);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Split content into pages (simplified - in real app, use proper pagination)
    const words = book.content.split(' ');
    const pages: string[] = [];
    const wordsPerPage = 200;
    
    for (let i = 0; i < words.length; i += wordsPerPage) {
      pages.push(words.slice(i, i + wordsPerPage).join(' '));
    }
    
    setContent(pages);
  }, [book.content]);

  const handleNextPage = () => {
    if (currentPage < book.pages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onSaveProgress(book.id, newPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onSaveProgress(book.id, newPage);
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In real app, save bookmark to Firebase
  };

  return (
    <div className="book-reader">
      <div className="reader-header">
        <button onClick={onClose} className="back-btn">
          <FaArrowLeft /> Back
        </button>
        <div className="reader-controls">
          <button 
            onClick={() => setFontSize(Math.max(12, fontSize - 1))}
            className="font-btn"
          >
            A-
          </button>
          <span className="font-size">{fontSize}px</span>
          <button 
            onClick={() => setFontSize(Math.min(24, fontSize + 1))}
            className="font-btn"
          >
            A+
          </button>
          <button 
            onClick={toggleBookmark}
            className={`bookmark-btn ${isBookmarked ? 'active' : ''}`}
          >
            <FaBookmark />
          </button>
        </div>
      </div>

      <div className="reader-content" style={{ fontSize: `${fontSize}px` }}>
        <h2 className="reader-title">{book.title}</h2>
        <p className="reader-author">by {book.author}</p>
        
        <div className="page-content">
          {content[currentPage - 1] || 'Page not found'}
        </div>
        
        <div className="page-number">
          Page {currentPage} of {book.pages}
        </div>
      </div>

      <div className="reader-footer">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1}
          className="page-btn"
        >
          <FaArrowLeft /> Previous
        </button>
        
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${(currentPage / book.pages) * 100}%` }}
          ></div>
        </div>
        
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === book.pages}
          className="page-btn"
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BookReader;