function EmailView({ email, onBack }) {
  if (!email) {
    return (
      <div className="email-view empty">
        <div className="empty-state">
          <h2>Select an email to read</h2>
          <p>Nothing is selected</p>
        </div>
      </div>
    )
  }

  return (
    <div className="email-view">
      <div className="email-view-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <div className="email-actions">
          <button className="action-btn">🗑️</button>
          <button className="action-btn">📧</button>
          <button className="action-btn">⏰</button>
          <button className="action-btn">📁</button>
          <button className="action-btn">⋯</button>
        </div>
      </div>
      
      <div className="email-content-view">
        <h1 className="email-subject-view">{email.subject}</h1>
        
        <div className="email-header">
          <div className="sender-info">
            <div className="sender-avatar">
              {email.sender.charAt(0)}
            </div>
            <div className="sender-details">
              <div className="sender-name-view">{email.sender}</div>
              <div className="sender-email">to me</div>
            </div>
          </div>
          <div className="email-time-view">
            {email.date} {email.time}
          </div>
        </div>
        
        <div className="email-body">
          <p>Hello,</p>
          <p>{email.preview}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Best regards,<br/>{email.sender}</p>
        </div>
      </div>
      
      <div className="email-reply">
        <textarea placeholder="Reply to this email..."></textarea>
        <div className="reply-actions">
          <button className="send-btn">Send</button>
          <button className="format-btn">A</button>
          <button className="attach-btn">📎</button>
          <button className="more-btn">⋯</button>
        </div>
      </div>
    </div>
  )
}

export default EmailView