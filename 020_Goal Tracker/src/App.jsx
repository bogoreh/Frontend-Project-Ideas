import { useState, useEffect } from 'react'
import GoalForm from './components/GoalForm'
import GoalList from './components/GoalList'
import ProgressBar from './components/ProgressBar'
import './App.css'

function App() {
  const [goals, setGoals] = useState(() => {
    // Load goals from localStorage on initial render
    const savedGoals = localStorage.getItem('goals')
    return savedGoals ? JSON.parse(savedGoals) : []
  })
  
  const [totalProgress, setTotalProgress] = useState(0)

  // Save goals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals))
    
    // Calculate overall progress
    if (goals.length > 0) {
      const total = goals.reduce((sum, goal) => sum + goal.progress, 0)
      const averageProgress = Math.round(total / goals.length)
      setTotalProgress(averageProgress)
    } else {
      setTotalProgress(0)
    }
  }, [goals])

  // Add a new goal
  const addGoal = (goal) => {
    const newGoal = {
      id: Date.now(),
      ...goal,
      createdAt: new Date().toISOString()
    }
    setGoals([newGoal, ...goals])
  }

  // Update goal progress
  const updateProgress = (id, newProgress) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, progress: newProgress } : goal
    ))
  }

  // Delete a goal
  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎯 Goal Tracker</h1>
        <p>Track and achieve your goals effectively</p>
      </header>

      <main className="app-container">
        <div className="sidebar">
          <div className="stats-card">
            <h3>Your Progress</h3>
            <div className="stats-content">
              <div className="stat-item">
                <span className="stat-value">{totalProgress}%</span>
                <span className="stat-label">Overall Progress</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{goals.length}</span>
                <span className="stat-label">Total Goals</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {goals.filter(g => g.progress === 100).length}
                </span>
                <span className="stat-label">Completed</span>
              </div>
            </div>
            <ProgressBar progress={totalProgress} />
          </div>

          <GoalForm onAddGoal={addGoal} />
        </div>

        <div className="main-content">
          <GoalList 
            goals={goals} 
            onUpdateProgress={updateProgress}
            onDeleteGoal={deleteGoal}
          />
        </div>
      </main>

      <footer className="app-footer">
        <p>Keep pushing forward! Every small step counts towards your big goals.</p>
      </footer>
    </div>
  )
}

export default App