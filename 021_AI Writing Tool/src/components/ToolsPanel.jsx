import { useState } from 'react'
import { 
  Wand2, 
  Sparkles, 
  Hash, 
  ListChecks, 
  Languages, 
  Clock, 
  Zap, 
  TrendingUp,
  MessageSquare,
  Briefcase,
  Smile,
  Lightbulb
} from 'lucide-react'
import HistoryItem from './HistoryItem'

const ToolsPanel = ({ 
  content, 
  setContent, 
  writingHistory, 
  setWritingHistory, 
  setIsProcessing 
}) => {
  const [selectedTone, setSelectedTone] = useState('professional')
  const [isAILoading, setIsAILoading] = useState(false)

  const handleAIAction = async (action) => {
    if (!content.trim()) {
      alert('Please enter some text first!')
      return
    }

    setIsProcessing(true)
    setIsAILoading(true)

    // Simulate AI processing (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500))

    const actions = {
      improve: () => `Improved version: ${content} (Enhanced with better vocabulary and structure)`,
      summarize: () => `Summary: ${content.substring(0, 100)}...`,
      expand: () => `${content} [Expanded with additional details and explanations]`,
      'fix-grammar': () => `Grammar-corrected: ${content.replace(/\.\s*/g, '. ').trim()}`,
      'make-concise': () => `Concise version: ${content.split(' ').slice(0, 30).join(' ')}...`,
      translate: () => `Translated to English: ${content}`,
      'generate-ideas': () => `Based on your text, here are some ideas:\n1. Idea one\n2. Idea two\n3. Idea three`,
      'create-title': () => `Suggested titles:\n• "Title Option 1"\n• "Title Option 2"\n• "Title Option 3"`,
      'add-bullets': () => `• ${content.replace(/\. /g, '\n• ')}`,
      'change-tone': () => `[${selectedTone} tone]: ${content}`
    }

    const result = actions[action] ? actions[action]() : content

    // Add to history
    const newHistoryItem = {
      id: Date.now(),
      action,
      original: content,
      result,
      timestamp: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    }

    setWritingHistory([newHistoryItem, ...writingHistory.slice(0, 4)])
    setContent(result)
    
    setIsProcessing(false)
    setIsAILoading(false)
  }

  const toneOptions = [
    { id: 'professional', label: 'Professional', icon: <Briefcase size={14} /> },
    { id: 'casual', label: 'Casual', icon: <Smile size={14} /> },
    { id: 'friendly', label: 'Friendly', icon: <MessageSquare size={14} /> },
    { id: 'persuasive', label: 'Persuasive', icon: <TrendingUp size={14} /> },
    { id: 'creative', label: 'Creative', icon: <Lightbulb size={14} /> }
  ]

  const aiTools = [
    { id: 'improve', label: 'Improve Writing', icon: <Sparkles />, color: '#8b5cf6' },
    { id: 'summarize', label: 'Summarize', icon: <Hash />, color: '#10b981' },
    { id: 'expand', label: 'Expand Text', icon: <Zap />, color: '#f59e0b' },
    { id: 'fix-grammar', label: 'Fix Grammar', icon: <ListChecks />, color: '#3b82f6' },
    { id: 'make-concise', label: 'Make Concise', icon: <Wand2 />, color: '#ec4899' },
    { id: 'translate', label: 'Translate', icon: <Languages />, color: '#6366f1' },
    { id: 'generate-ideas', label: 'Generate Ideas', icon: <Lightbulb />, color: '#84cc16' },
    { id: 'create-title', label: 'Create Title', icon: <Hash />, color: '#f97316' }
  ]

  return (
    <div className="tools-panel">
      <div className="tools-section">
        <div className="section-header">
          <div className="section-icon">
            <Wand2 size={20} color="white" />
          </div>
          <h3>AI Writing Tools</h3>
        </div>
        
        <div className="tools-grid">
          {aiTools.map(tool => (
            <button
              key={tool.id}
              className={`tool-button ${!content.trim() ? 'disabled' : ''} ${isAILoading ? 'processing' : ''}`}
              onClick={() => handleAIAction(tool.id)}
              disabled={!content.trim() || isAILoading}
            >
              <div className="tool-icon" style={{ color: tool.color }}>
                {tool.icon}
              </div>
              <span className="tool-label">{tool.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="tools-section">
        <div className="section-header">
          <div className="section-icon">
            <MessageSquare size={20} color="white" />
          </div>
          <h3>Change Tone</h3>
        </div>
        
        <div className="tone-buttons">
          {toneOptions.map(tone => (
            <button
              key={tone.id}
              className={`tone-button ${selectedTone === tone.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedTone(tone.id)
                if (content.trim()) {
                  handleAIAction('change-tone')
                }
              }}
            >
              {tone.icon}
              {tone.label}
            </button>
          ))}
        </div>
      </div>

      <div className="tools-section history-section">
        <div className="section-header">
          <div className="section-icon">
            <Clock size={20} color="white" />
          </div>
          <h3>Recent Edits</h3>
        </div>
        
        <div className="history-list">
          {writingHistory.length > 0 ? (
            writingHistory.map(item => (
              <HistoryItem
                key={item.id}
                item={item}
                onClick={() => setContent(item.result)}
              />
            ))
          ) : (
            <div style={{ 
              textAlign: 'center', 
              color: 'var(--text-muted)', 
              padding: '20px',
              fontStyle: 'italic'
            }}>
              No edits yet. Use AI tools to see history here.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ToolsPanel