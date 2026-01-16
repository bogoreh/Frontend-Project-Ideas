import { BookSearchResponse } from '../types/Book';

const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const searchBooks = async (
  query: string,
  maxResults: number = 20
): Promise<BookSearchResponse> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}?q=${encodeURIComponent(query)}&maxResults=${maxResults}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching books:', error);
    throw error;
  }
};