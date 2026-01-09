import ProgressBar from './ProgressBar'
import './GoalItem.css'

function GoalItem({ goal, categoryIcon, onUpdateProgress, onDeleteGoal }) {
  const formatDate = (dateString) => {
    if (!dateString) return 'No deadline'
    
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = date - now
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays < 0) {
      return `Overdue by ${Math.abs(diffDays)} days`
    } else if (diffDays === 0) {
      return 'Due today'
    } else if (diffDays === 1) {
      return 'Due tomorrow'
    } else {
      return `Due in ${diffDays} days`
    }
  }

  const handleProgressChange = (e) => {
    const newProgress = parseInt(e.target.value)
    onUpdateProgress(goal.id, newProgress)
  }

  return (
    <div className="goal-item">
      <div className="goal-header">
        <div className="goal-category">
          <span className="category-icon">{categoryIcon}</span>
          <span className="category-name">{goal.category}</span>
        </div>
        <button 
          className="delete-btn"
          onClick={() => onDeleteGoal(goal.id)}
          aria-label="Delete goal"
        >
          ×
        </button>
      </div>
      
      <div className="goal-content">
        <h4 className="goal-title">{goal.title}</h4>
        {goal.description && (
          <p className="goal-description">{goal.description}</p>
        )}
      </div>
      
      <div className="goal-progress">
        <div className="progress-header">
          <span className="progress-label">Progress</span>
          <span className="progress-value">{goal.progress}%</span>
        </div>
        <ProgressBar progress={goal.progress} />
        <input
          type="range"
          min="0"
          max="100"
          value={goal.progress}
          onChange={handleProgressChange}
          className="progress-slider"
        />
      </div>
      
      <div className="goal-footer">
        <div className="goal-date">
          <span className="date-icon">📅</span>
          <span>{formatDate(goal.targetDate)}</span>
        </div>
        <div className="goal-actions">
          <button 
            className="action-btn"
            onClick={() => onUpdateProgress(goal.id, Math.min(100, goal.progress + 10))}
          >
            +10%
          </button>
          <button 
            className="action-btn complete-btn"
            onClick={() => onUpdateProgress(goal.id, 100)}
          >
            Mark Complete
          </button>
        </div>
      </div>
    </div>
  )
}

export default GoalItem