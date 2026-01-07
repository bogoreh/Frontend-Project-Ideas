import { useState } from 'react'
import Header from './components/Header'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import BudgetSummary from './components/BudgetSummary'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Groceries', amount: 150, category: 'Food' },
    { id: 2, name: 'Electricity Bill', amount: 80, category: 'Utilities' },
    { id: 3, name: 'Gasoline', amount: 60, category: 'Transportation' },
    { id: 4, name: 'Netflix Subscription', amount: 15, category: 'Entertainment' },
  ])
  
  const [income, setIncome] = useState(3000)

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now()
    }
    setExpenses([...expenses, newExpense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0)
  const balance = income - totalExpenses

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="main-content">
          <div className="left-column">
            <BudgetSummary 
              income={income} 
              totalExpenses={totalExpenses} 
              balance={balance}
              setIncome={setIncome}
            />
            <ExpenseForm addExpense={addExpense} />
          </div>
          <div className="right-column">
            <ExpenseList 
              expenses={expenses} 
              deleteExpense={deleteExpense}
              totalExpenses={totalExpenses}
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>Budget Planner © {new Date().getFullYear()} - Track your finances wisely</p>
      </footer>
    </div>
  )
}

export default App