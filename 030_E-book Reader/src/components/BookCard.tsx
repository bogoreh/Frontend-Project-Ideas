import { Book } from '../types/book';  // Remove React import
import { FaBookOpen, FaUser } from 'react-icons/fa';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
}

const BookCard = ({ book, onSelect }: BookCardProps) => {  // Remove React.FC
  return (
    <div className="book-card" onClick={() => onSelect(book)}>
      <div className="book-cover">
        {book.coverUrl ? (
          <img src={book.coverUrl} alt={book.title} />
        ) : (
          <div className="book-cover-placeholder">
            <FaBookOpen />
          </div>
        )}
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <div className="book-author">
          <FaUser className="author-icon" />
          <span>{book.author}</span>
        </div>
        <div className="book-meta">
          <span className="pages">{book.pages} pages</span>
          <span className="progress">
            {book.currentPage || 0}/{book.pages}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;