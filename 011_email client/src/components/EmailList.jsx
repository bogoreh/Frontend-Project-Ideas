import EmailItem from './EmailItem'

function EmailList({ emails, onEmailClick, selectedEmail, toggleStar }) {
  return (
    <div className="email-list">
      <div className="email-list-header">
        <button className="select-all">□</button>
        <button className="refresh-btn">⟳</button>
        <button className="more-btn">⋯</button>
        <div className="spacer"></div>
        <button className="view-btn">1-{emails.length} of {emails.length}</button>
      </div>
      
      <div className="emails-container">
        {emails.map(email => (
          <EmailItem
            key={email.id}
            email={email}
            isSelected={selectedEmail?.id === email.id}
            onClick={() => onEmailClick(email)}
            onToggleStar={() => toggleStar(email.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default EmailList