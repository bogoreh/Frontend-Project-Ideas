import { useState } from 'react'
import './GoalForm.css'

function GoalForm({ onAddGoal }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [targetDate, setTargetDate] = useState('')
  const [category, setCategory] = useState('personal')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!title.trim()) {
      alert('Please enter a goal title')
      return
    }
    
    const newGoal = {
      title,
      description,
      targetDate,
      category,
      progress: 0
    }
    
    onAddGoal(newGoal)
    
    // Reset form
    setTitle('')
    setDescription('')
    setTargetDate('')
    setCategory('personal')
  }

  return (
    <div className="goal-form-card">
      <h3>➕ Add New Goal</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Goal Title *</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What do you want to achieve?"
            maxLength={100}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add more details about your goal..."
            rows="3"
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="financial">Financial</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="targetDate">Target Date</label>
            <input
              type="date"
              id="targetDate"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
            />
          </div>
        </div>
        
        <button type="submit" className="submit-btn">
          Add Goal
        </button>
      </form>
    </div>
  )
}

export default GoalForm