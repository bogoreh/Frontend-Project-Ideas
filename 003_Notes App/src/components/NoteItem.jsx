function NoteItem({ note, onEdit, onDelete, onShare }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="note-item">
      <div className="note-header">
        <h3 className="note-title">{note.title}</h3>
        <div className="note-actions">
          <button 
            className="btn-icon" 
            onClick={() => onEdit(note)}
            title="Edit note"
          >
            ✏️
          </button>
          <button 
            className="btn-icon" 
            onClick={() => onShare(note)}
            title="Share note"
          >
            🔗
          </button>
          <button 
            className="btn-icon" 
            onClick={() => onDelete(note.id)}
            title="Delete note"
          >
            🗑️
          </button>
        </div>
      </div>
      
      <div className="note-content">
        {note.content}
      </div>
      
      {note.tags.length > 0 && (
        <div className="note-tags">
          {note.tags.map(tag => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="note-footer">
        <small>Updated: {formatDate(note.updatedAt)}</small>
      </div>
    </div>
  )
}

export default NoteItem