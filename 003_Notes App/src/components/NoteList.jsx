import NoteItem from './NoteItem'

function NoteList({ notes, onEditNote, onDeleteNote, onShareNote }) {
  if (notes.length === 0) {
    return (
      <div className="no-notes">
        <p>No notes found. Create your first note!</p>
      </div>
    )
  }

  return (
    <div className="note-list">
      <h2>Your Notes ({notes.length})</h2>
      <div className="notes-grid">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={onEditNote}
            onDelete={onDeleteNote}
            onShare={onShareNote}
          />
        ))}
      </div>
    </div>
  )
}

export default NoteList