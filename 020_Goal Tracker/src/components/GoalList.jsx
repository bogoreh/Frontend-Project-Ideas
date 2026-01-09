import GoalItem from './GoalItem'
import './GoalList.css'

function GoalList({ goals, onUpdateProgress, onDeleteGoal }) {
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'work': return '💼'
      case 'health': return '🏃'
      case 'education': return '📚'
      case 'financial': return '💰'
      default: return '🎯'
    }
  }

  if (goals.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🎯</div>
        <h3>No goals yet</h3>
        <p>Add your first goal to get started on your journey!</p>
      </div>
    )
  }

  return (
    <div className="goal-list">
      <div className="goal-list-header">
        <h3>My Goals ({goals.length})</h3>
        <div className="sort-info">
          <span>Sorted by: Most Recent</span>
        </div>
      </div>
      
      <div className="goals-container">
        {goals.map(goal => (
          <GoalItem 
            key={goal.id} 
            goal={goal} 
            categoryIcon={getCategoryIcon(goal.category)}
            onUpdateProgress={onUpdateProgress}
            onDeleteGoal={onDeleteGoal}
          />
        ))}
      </div>
    </div>
  )
}

export default GoalList