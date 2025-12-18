function EmailItem({ email, isSelected, onClick, onToggleStar }) {
  return (
    <div 
      className={`email-item ${isSelected ? 'selected' : ''} ${email.unread ? 'unread' : ''}`}
      onClick={onClick}
    >
      <div className="email-checkbox">
        <input type="checkbox" />
      </div>
      <button 
        className={`star-btn ${email.starred ? 'starred' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          onToggleStar()
        }}
      >
        {email.starred ? '★' : '☆'}
      </button>
      <button className={`important-btn ${email.important ? 'important' : ''}`}>
        !
      </button>
      
      <div className="email-sender">
        <span className="sender-name">{email.sender}</span>
      </div>
      
      <div className="email-content">
        <div className="email-subject">
          <strong>{email.subject}</strong>
          <span className="email-preview"> - {email.preview}</span>
        </div>
      </div>
      
      <div className="email-time">
        {email.date === 'Today' ? email.time : email.date}
      </div>
    </div>
  )
}

export default EmailItem