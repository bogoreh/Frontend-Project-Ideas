import HabitItem from './HabitItem'
import '../App.css'

function HabitList({ habits, onToggleHabit, onDeleteHabit, onResetStreak }) {
  // Calculate stats
  const totalHabits = habits.length
  const completedToday = habits.filter(habit => habit.completed).length
  const totalStreak = habits.reduce((sum, habit) => sum + habit.streak, 0)
  
  if (habits.length === 0) {
    return (
      <section className="habit-list-section">
        <div className="empty-state">
          <h3>No habits yet</h3>
          <p>Start building positive routines by adding your first habit!</p>
          <div className="illustration">📋</div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="habit-list-section">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-value">{totalHabits}</div>
          <div className="stat-label">Total Habits</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{completedToday}</div>
          <div className="stat-label">Completed Today</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{totalStreak}</div>
          <div className="stat-label">Total Streak</div>
        </div>
      </div>
      
      <div className="habits-container">
        <h2>Your Habits</h2>
        <p className="section-subtitle">Track your progress and build streaks</p>
        
        <div className="habits-list">
          {habits.map(habit => (
            <HabitItem
              key={habit.id}
              habit={habit}
              onToggleHabit={onToggleHabit}
              onDeleteHabit={onDeleteHabit}
              onResetStreak={onResetStreak}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HabitList