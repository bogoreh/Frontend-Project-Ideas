import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`.trim();

  return (
    <button className={buttonClass} {...props}>
      {startIcon && <span className="btn-icon start">{startIcon}</span>}
      {children}
      {endIcon && <span className="btn-icon end">{endIcon}</span>}
    </button>
  );
};

export default Button;