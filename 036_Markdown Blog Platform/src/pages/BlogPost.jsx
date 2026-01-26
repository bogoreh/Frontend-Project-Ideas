import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MarkdownViewer from '../components/MarkdownViewer';
import LoadingSpinner from '../components/LoadingSpinner';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundPost = blogPosts.find(p => p.id === parseInt(id));
      if (foundPost) {
        setPost(foundPost);
        // Find related posts (same category, excluding current)
        const related = blogPosts
          .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
          .slice(0, 2);
        setRelatedPosts(related);
      }
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!post) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
        <h2>Post not found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <article className="blog-post">
        <div className="post-header">
          <div className="blog-meta" style={{ justifyContent: 'center' }}>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span className="blog-tag">{post.category}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              {post.author.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: '600' }}>{post.author}</div>
              <div style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>Author</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <img 
            src={post.image} 
            alt={post.title} 
            style={{ 
              width: '100%', 
              height: '400px', 
              objectFit: 'cover',
              borderRadius: 'var(--radius)'
            }} 
          />
        </div>

        <MarkdownViewer content={post.content} />

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid var(--gray-light)' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {post.tags.map(tag => (
              <span 
                key={tag} 
                style={{
                  backgroundColor: 'var(--gray-light)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Related Posts</h2>
          <div className="blog-grid">
            {relatedPosts.map(relatedPost => (
              <div key={relatedPost.id} className="blog-card">
                <img src={relatedPost.image} alt={relatedPost.title} className="blog-image" />
                <div className="blog-content">
                  <h3 className="blog-title">{relatedPost.title}</h3>
                  <p className="blog-excerpt">{relatedPost.excerpt}</p>
                  <a href={`/post/${relatedPost.id}`} className="read-more">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;