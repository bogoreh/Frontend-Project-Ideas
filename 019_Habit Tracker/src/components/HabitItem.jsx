import '../App.css'

function HabitItem({ habit, onToggleHabit, onDeleteHabit, onResetStreak }) {
  const frequencyLabels = {
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly'
  }
  
  return (
    <div className={`habit-item ${habit.completed ? 'completed' : ''}`}>
      <div className="habit-main">
        <div className="habit-checkbox">
          <input
            type="checkbox"
            id={`habit-${habit.id}`}
            checked={habit.completed}
            onChange={() => onToggleHabit(habit.id)}
          />
          <label htmlFor={`habit-${habit.id}`}></label>
        </div>
        
        <div className="habit-content">
          <div className="habit-header">
            <h3 className="habit-name">{habit.name}</h3>
            <span className={`habit-frequency ${habit.frequency}`}>
              {frequencyLabels[habit.frequency]}
            </span>
          </div>
          
          {habit.description && (
            <p className="habit-description">{habit.description}</p>
          )}
          
          <div className="habit-footer">
            <div className="habit-streak">
              <span className="streak-icon">🔥</span>
              <span className="streak-count">{habit.streak} day streak</span>
            </div>
            
            <div className="habit-actions">
              <button 
                className="reset-btn"
                onClick={() => onResetStreak(habit.id)}
                title="Reset streak"
              >
                Reset
              </button>
              <button 
                className="delete-btn"
                onClick={() => onDeleteHabit(habit.id)}
                title="Delete habit"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="habit-status">
        <span className={`status-text ${habit.completed ? 'completed' : 'pending'}`}>
          {habit.completed ? 'Completed Today' : 'Pending'}
        </span>
      </div>
    </div>
  )
}

export default HabitItem