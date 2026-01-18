export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  content: string;
  pages: number;
  currentPage: number;
  createdAt: Date;
}

export interface Bookmark {
  id: string;
  bookId: string;
  page: number;
  note: string;
  createdAt: Date;
}