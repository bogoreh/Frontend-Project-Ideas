import { Clock, Zap } from 'lucide-react'

const HistoryItem = ({ item, onClick }) => {
  const getActionLabel = (action) => {
    const labels = {
      'improve': 'Improved',
      'summarize': 'Summarized',
      'expand': 'Expanded',
      'fix-grammar': 'Grammar Fixed',
      'make-concise': 'Made Concise',
      'translate': 'Translated',
      'generate-ideas': 'Ideas Generated',
      'create-title': 'Title Created',
      'change-tone': 'Tone Changed',
      'add-bullets': 'Added Bullets'
    }
    return labels[action] || action
  }

  return (
    <div className="history-item" onClick={onClick}>
      <div className="history-content">
        {item.result.substring(0, 100)}...
      </div>
      <div className="history-meta">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={12} />
          <span>{getActionLabel(item.action)}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Clock size={12} />
          <span>{item.timestamp}</span>
        </div>
      </div>
    </div>
  )
}

export default HistoryItem