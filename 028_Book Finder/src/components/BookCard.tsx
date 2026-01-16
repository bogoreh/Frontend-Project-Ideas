import React from 'react';
import { Book } from '../types/Book';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { volumeInfo } = book;
  const thumbnail = volumeInfo.imageLinks?.thumbnail || volumeInfo.imageLinks?.smallThumbnail;
  
  return (
    <div className="book-card">
      <div className="book-cover">
        {thumbnail ? (
          <img src={thumbnail} alt={volumeInfo.title} />
        ) : (
          <div className="book-cover-placeholder">
            <span>No Cover</span>
          </div>
        )}
      </div>
      
      <div className="book-info">
        <h3 className="book-title">{volumeInfo.title}</h3>
        
        {volumeInfo.authors && (
          <p className="book-authors">
            <strong>Authors:</strong> {volumeInfo.authors.join(', ')}
          </p>
        )}
        
        {volumeInfo.publishedDate && (
          <p className="book-published">
            <strong>Published:</strong> {volumeInfo.publishedDate}
          </p>
        )}
        
        {volumeInfo.publisher && (
          <p className="book-publisher">
            <strong>Publisher:</strong> {volumeInfo.publisher}
          </p>
        )}
        
        {volumeInfo.pageCount && (
          <p className="book-pages">
            <strong>Pages:</strong> {volumeInfo.pageCount}
          </p>
        )}
        
        {volumeInfo.averageRating && (
          <div className="book-rating">
            <strong>Rating:</strong>
            <span className="stars">
              {'★'.repeat(Math.round(volumeInfo.averageRating))}
              {'☆'.repeat(5 - Math.round(volumeInfo.averageRating))}
            </span>
            <span className="rating-value">({volumeInfo.averageRating.toFixed(1)})</span>
            {volumeInfo.ratingsCount && (
              <span className="rating-count"> - {volumeInfo.ratingsCount} reviews</span>
            )}
          </div>
        )}
        
        {volumeInfo.categories && (
          <div className="book-categories">
            {volumeInfo.categories.slice(0, 3).map((category, index) => (
              <span key={index} className="category-tag">
                {category}
              </span>
            ))}
          </div>
        )}
        
        {volumeInfo.description && (
          <div className="book-description">
            <p>{volumeInfo.description.substring(0, 150)}...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;