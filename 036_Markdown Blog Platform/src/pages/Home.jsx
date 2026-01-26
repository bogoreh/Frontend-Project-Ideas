import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { blogPosts } from '../data/blogPosts';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setPosts(blogPosts);
      setLoading(false);
    }, 500);
  }, []);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container">
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', margin: '2rem 0 1rem', textAlign: 'center' }}>
          Welcome to <span style={{ color: 'var(--primary)' }}>Markdown Blog</span>
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--gray)', marginBottom: '3rem' }}>
          A beautiful platform for sharing your thoughts in Markdown format
        </p>
      </div>

      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '2px solid var(--gray-light)',
              borderRadius: 'var(--radius)',
              fontSize: '1rem'
            }}
          />
        </div>
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '0.75rem 1rem',
              border: '2px solid var(--gray-light)',
              borderRadius: 'var(--radius)',
              fontSize: '1rem',
              minWidth: '200px'
            }}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--gray)' }}>
          <h3>No posts found</h3>
          <p>Try a different search term or category</p>
        </div>
      ) : (
        <div className="blog-grid">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2>About This Platform</h2>
        <p style={{ maxWidth: '800px', margin: '1rem auto', color: 'var(--gray)' }}>
          This blog platform is built with React and Vite, featuring PWA capabilities for an app-like experience.
          All posts are written in Markdown format, making it easy for writers to focus on content.
        </p>
      </div>
    </div>
  );
};

export default Home;