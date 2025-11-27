import { useState, useEffect } from 'react'

function NoteForm({ onAddNote, onUpdateNote, editingNote, onCancelEdit }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title)
      setContent(editingNote.content)
      setTags(editingNote.tags.join(', '))
    } else {
      setTitle('')
      setContent('')
      setTags('')
    }
  }, [editingNote])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content')
      return
    }

    const noteData = {
      title: title.trim(),
      content: content.trim(),
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean)
    }

    if (editingNote) {
      onUpdateNote({ ...editingNote, ...noteData })
    } else {
      onAddNote(noteData)
    }

    setTitle('')
    setContent('')
    setTags('')
  }

  return (
    <div className="note-form">
      <h2>{editingNote ? 'Edit Note' : 'Create New Note'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <textarea
            placeholder="Note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            className="form-textarea"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-actions">
          {editingNote ? (
            <>
              <button type="submit" className="btn btn-primary">
                Update Note
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={onCancelEdit}
              >
                Cancel
              </button>
            </>
          ) : (
            <button type="submit" className="btn btn-primary">
              Add Note
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default NoteForm