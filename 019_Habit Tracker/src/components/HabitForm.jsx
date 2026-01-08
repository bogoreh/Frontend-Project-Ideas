import { useState } from 'react'
import '../App.css'

function HabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState('')
  const [habitDescription, setHabitDescription] = useState('')
  const [frequency, setFrequency] = useState('daily')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!habitName.trim()) {
      alert('Please enter a habit name')
      return
    }
    
    onAddHabit({
      name: habitName,
      description: habitDescription,
      frequency
    })
    
    // Reset form
    setHabitName('')
    setHabitDescription('')
    setFrequency('daily')
  }
  
  return (
    <section className="habit-form-section">
      <div className="form-container">
        <h2>Add New Habit</h2>
        <p className="form-subtitle">Track a new habit you want to build</p>
        
        <form onSubmit={handleSubmit} className="habit-form">
          <div className="form-group">
            <label htmlFor="habitName">Habit Name *</label>
            <input
              type="text"
              id="habitName"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              placeholder="e.g., Drink 8 glasses of water"
              maxLength="50"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="habitDescription">Description (Optional)</label>
            <textarea
              id="habitDescription"
              value={habitDescription}
              onChange={(e) => setHabitDescription(e.target.value)}
              placeholder="Add details about your habit..."
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="frequency">Frequency</label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          
          <button type="submit" className="submit-btn">
            Add Habit
          </button>
        </form>
        
        <div className="tips">
          <h3>Tips for Success</h3>
          <ul>
            <li>Start with small, achievable habits</li>
            <li>Be consistent with your tracking</li>
            <li>Focus on progress, not perfection</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HabitForm