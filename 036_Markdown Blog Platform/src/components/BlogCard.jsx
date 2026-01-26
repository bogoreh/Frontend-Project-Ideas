import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <article className="blog-card">
      <img src={post.image} alt={post.title} className="blog-image" />
      <div className="blog-content">
        <div className="blog-meta">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span className="blog-tag">{post.category}</span>
        </div>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <Link to={`/post/${post.id}`} className="read-more">
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;