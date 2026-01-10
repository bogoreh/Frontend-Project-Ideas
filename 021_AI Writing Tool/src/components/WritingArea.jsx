import { FileText, Type } from 'lucide-react'

const WritingArea = ({ content, setContent, isProcessing }) => {
  const wordCount = content.trim() === '' ? 0 : content.trim().split(/\s+/).length
  const charCount = content.length

  const handleFormat = (format) => {
    switch(format) {
      case 'clear':
        setContent('')
        break
      case 'uppercase':
        setContent(content.toUpperCase())
        break
      case 'lowercase':
        setContent(content.toLowerCase())
        break
      case 'capitalize':
        setContent(content.replace(/\b\w/g, char => char.toUpperCase()))
        break
      default:
        break
    }
  }

  return (
    <div className="writing-area-container">
      <div className="text-editor-header">
        <h2>
          <FileText size={20} />
          Text Editor
        </h2>
        <div className="word-count">
          {wordCount} words • {charCount} chars
        </div>
      </div>
      
      <div className="textarea-wrapper">
        <textarea
          className="text-editor"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start typing here, or use AI tools on the right to generate content..."
          disabled={isProcessing}
        />
      </div>
      
      <div className="editor-footer">
        <div className="formatting-tools">
          <button 
            className="format-btn" 
            onClick={() => handleFormat('clear')}
            disabled={isProcessing}
          >
            Clear
          </button>
          <button 
            className="format-btn" 
            onClick={() => handleFormat('uppercase')}
            disabled={isProcessing}
          >
            UPPERCASE
          </button>
          <button 
            className="format-btn" 
            onClick={() => handleFormat('lowercase')}
            disabled={isProcessing}
          >
            lowercase
          </button>
          <button 
            className="format-btn" 
            onClick={() => handleFormat('capitalize')}
            disabled={isProcessing}
          >
            Capitalize
          </button>
        </div>
        
        <div className="editor-status">
          {isProcessing && (
            <div className="loading-spinner" style={{ display: 'inline-block', marginRight: '8px' }} />
          )}
          <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            {isProcessing ? 'AI is processing...' : 'Ready to write'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default WritingArea