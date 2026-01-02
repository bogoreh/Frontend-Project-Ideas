import './Card.css';

const Card = ({ 
  children, 
  title, 
  subtitle,
  image,
  imageAlt,
  actions,
  className = '',
  hoverable = false,
  ...props 
}) => {
  const cardClass = `card ${hoverable ? 'card-hoverable' : ''} ${className}`.trim();

  return (
    <div className={cardClass} {...props}>
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt || title || 'Card image'} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        <div className="card-body">{children}</div>
      </div>
      {actions && <div className="card-actions">{actions}</div>}
    </div>
  );
};

export default Card;