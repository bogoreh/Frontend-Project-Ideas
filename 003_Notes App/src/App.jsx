import { useState, useEffect } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import './index.css'

function App() {
  const [notes, setNotes] = useState([])
  const [editingNote, setEditingNote] = useState(null)
  const [filterTag, setFilterTag] = useState('')

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (note) => {
    const newNote = {
      id: Date.now().toString(),
      title: note.title,
      content: note.content,
      tags: note.tags,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    setNotes([newNote, ...notes])
  }

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id 
        ? { ...updatedNote, updatedAt: new Date().toISOString() }
        : note
    ))
    setEditingNote(null)
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const startEdit = (note) => {
    setEditingNote(note)
  }

  const cancelEdit = () => {
    setEditingNote(null)
  }

  const shareNote = (note) => {
    const noteData = btoa(JSON.stringify(note))
    const shareUrl = `${window.location.origin}${window.location.pathname}?shared=${noteData}`
    
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Share link copied to clipboard!')
    })
  }

  // Handle shared notes from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const sharedNote = urlParams.get('shared')
    
    if (sharedNote) {
      try {
        const note = JSON.parse(atob(sharedNote))
        if (confirm('Would you like to import this shared note?')) {
          addNote(note)
          // Clean the URL
          window.history.replaceState({}, '', window.location.pathname)
        }
      } catch (error) {
        console.error('Error parsing shared note:', error)
      }
    }
  }, [])

  const allTags = [...new Set(notes.flatMap(note => note.tags))].filter(Boolean)
  const filteredNotes = filterTag 
    ? notes.filter(note => note.tags.includes(filterTag))
    : notes

  return (
    <div className="app">
      <header className="app-header">
        <h1>Notes App</h1>
        <p>Create, edit, tag and share your notes</p>
      </header>

      <div className="app-container">
        <NoteForm 
          onAddNote={addNote}
          onUpdateNote={updateNote}
          editingNote={editingNote}
          onCancelEdit={cancelEdit}
        />
        
        <div className="notes-section">
          <div className="filter-section">
            <label htmlFor="tag-filter">Filter by tag:</label>
            <select 
              id="tag-filter"
              value={filterTag} 
              onChange={(e) => setFilterTag(e.target.value)}
            >
              <option value="">All notes</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
            {filterTag && (
              <button 
                className="clear-filter"
                onClick={() => setFilterTag('')}
              >
                Clear filter
              </button>
            )}
          </div>

          <NoteList 
            notes={filteredNotes}
            onEditNote={startEdit}
            onDeleteNote={deleteNote}
            onShareNote={shareNote}
          />
        </div>
      </div>
    </div>
  )
}

export default App