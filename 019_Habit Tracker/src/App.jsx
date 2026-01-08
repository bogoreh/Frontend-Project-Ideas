import { useState, useEffect } from 'react'
import Header from './components/Header'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import './App.css'

function App() {
  const [habits, setHabits] = useState([])
  
  // Load habits from localStorage on initial render
  useEffect(() => {
    const savedHabits = localStorage.getItem('habit-tracker-habits')
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits))
    }
  }, [])
  
  // Save habits to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('habit-tracker-habits', JSON.stringify(habits))
  }, [habits])
  
  const addHabit = (habit) => {
    const newHabit = {
      id: Date.now(),
      name: habit.name,
      description: habit.description,
      completed: false,
      streak: 0,
      frequency: habit.frequency || 'daily',
      createdAt: new Date().toISOString()
    }
    setHabits([...habits, newHabit])
  }
  
  const toggleHabit = (id) => {
    setHabits(habits.map(habit => {
      if (habit.id === id) {
        const wasCompleted = habit.completed
        return {
          ...habit,
          completed: !habit.completed,
          streak: !wasCompleted ? habit.streak + 1 : Math.max(0, habit.streak - 1)
        }
      }
      return habit
    }))
  }
  
  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }
  
  const resetStreak = (id) => {
    setHabits(habits.map(habit => {
      if (habit.id === id) {
        return { ...habit, streak: 0 }
      }
      return habit
    }))
  }
  
  return (
    <div className="app">
      <Header />
      <div className="container">
        <HabitForm onAddHabit={addHabit} />
        <HabitList 
          habits={habits} 
          onToggleHabit={toggleHabit} 
          onDeleteHabit={deleteHabit}
          onResetStreak={resetStreak}
        />
      </div>
    </div>
  )
}

export default App