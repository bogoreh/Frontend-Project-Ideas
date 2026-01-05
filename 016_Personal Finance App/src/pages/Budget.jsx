import React, { useState } from 'react'
import { Target, TrendingUp, AlertCircle, Plus, Edit2, Trash2, DollarSign, ShoppingBag, Home, Car, Coffee, Heart, Zap, Book } from 'lucide-react'
import toast from 'react-hot-toast'

const Budget = ({ user }) => {
  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Food', icon: ShoppingBag, color: '#10b981', limit: 500, spent: 350, percentage: 70 },
    { id: 2, category: 'Transport', icon: Car, color: '#3b82f6', limit: 300, spent: 200, percentage: 67 },
    { id: 3, category: 'Entertainment', icon: Heart, color: '#8b5cf6', limit: 200, spent: 150, percentage: 75 },
    { id: 4, category: 'Utilities', icon: Home, color: '#ef4444', limit: 400, spent: 320, percentage: 80 },
    { id: 5, category: 'Dining', icon: Coffee, color: '#f59e0b', limit: 300, spent: 180, percentage: 60 },
    { id: 6, category: 'Education', icon: Book, color: '#6366f1', limit: 150, spent: 120, percentage: 80 },
    { id: 7, category: 'Shopping', icon: ShoppingBag, color: '#ec4899', limit: 400, spent: 380, percentage: 95 },
    { id: 8, category: 'Health', icon: Heart, color: '#06b6d4', limit: 200, spent: 100, percentage: 50 },
  ])

  const [showAddBudget, setShowAddBudget] = useState(false)
  const [newBudget, setNewBudget] = useState({
    category: 'Food',
    limit: '',
    color: '#10b981'
  })

  const categories = [
    { value: 'Food', label: 'Food', icon: ShoppingBag },
    { value: 'Transport', label: 'Transport', icon: Car },
    { value: 'Entertainment', label: 'Entertainment', icon: Heart },
    { value: 'Utilities', label: 'Utilities', icon: Home },
    { value: 'Dining', label: 'Dining', icon: Coffee },
    { value: 'Education', label: 'Education', icon: Book },
    { value: 'Shopping', label: 'Shopping', icon: ShoppingBag },
    { value: 'Health', label: 'Health', icon: Heart },
    { value: 'Insurance', label: 'Insurance', icon: Zap },
    { value: 'Savings', label: 'Savings', icon: Target },
  ]

  const colors = [
    '#10b981', '#3b82f6', '#8b5cf6', '#ef4444', '#f59e0b',
    '#6366f1', '#ec4899', '#06b6d4', '#14b8a6', '#f97316'
  ]

  const totalBudget = budgets.reduce((sum, budget) => sum + budget.limit, 0)
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0)
  const remainingBudget = totalBudget - totalSpent
  const overallPercentage = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0

  const handleAddBudget = () => {
    if (!newBudget.limit || newBudget.limit <= 0) {
      toast.error('Please enter a valid budget limit')
      return
    }

    const category = categories.find(c => c.value === newBudget.category)
    const budget = {
      id: Date.now(),
      category: newBudget.category,
      icon: category?.icon || ShoppingBag,
      color: newBudget.color,
      limit: parseFloat(newBudget.limit),
      spent: 0,
      percentage: 0
    }

    setBudgets([...budgets, budget])
    setShowAddBudget(false)
    setNewBudget({ category: 'Food', limit: '', color: '#10b981' })
    toast.success('Budget category added!')
  }

  const handleDeleteBudget = (id) => {
    if (window.confirm('Are you sure you want to delete this budget category?')) {
      setBudgets(budgets.filter(b => b.id !== id))
      toast.success('Budget category deleted')
    }
  }

  const updateBudgetLimit = (id, newLimit) => {
    setBudgets(budgets.map(budget => {
      if (budget.id === id) {
        const spent = budget.spent
        const percentage = newLimit > 0 ? (spent / newLimit) * 100 : 0
        return { ...budget, limit: newLimit, percentage: Math.min(percentage, 100) }
      }
      return budget
    }))
    toast.success('Budget limit updated')
  }

  const getStatusColor = (percentage) => {
    if (percentage >= 90) return 'text-red-600'
    if (percentage >= 75) return 'text-yellow-600'
    return 'text-green-600'
  }

  const getStatusText = (percentage) => {
    if (percentage >= 90) return 'Over Budget'
    if (percentage >= 75) return 'Almost There'
    return 'On Track'
  }

  return (
    <div className="dashboard">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Budget Management</h1>
        <p className="text-gray-600">Track and control your spending across categories</p>
      </div>

      {/* Overall Budget Summary */}
      <div className="stat-card mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Monthly Budget Overview</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Total Budget</span>
                  <span className="font-bold text-gray-900">${totalBudget.toLocaleString()}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${Math.min(overallPercentage, 100)}%`,
                      background: 'linear-gradient(90deg, #667eea, #764ba2)'
                    }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Spent</p>
                  <p className="text-2xl font-bold text-red-600">${totalSpent.toLocaleString()}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Remaining</p>
                  <p className="text-2xl font-bold text-green-600">${remainingBudget.toLocaleString()}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Usage</p>
                  <p className="text-2xl font-bold text-purple-600">{overallPercentage.toFixed(1)}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-96">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-purple-600" />
                <h3 className="font-bold text-gray-900">Budget Tips</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                  </div>
                  Aim to spend less than 80% of each budget category
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5">
                    <AlertCircle className="w-3 h-3 text-yellow-600" />
                  </div>
                  You'll receive alerts when reaching 90% of any budget
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <DollarSign className="w-3 h-3 text-blue-600" />
                  </div>
                  Review and adjust budgets monthly based on your spending
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Categories */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Budget Categories</h2>
        <button
          onClick={() => setShowAddBudget(true)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {budgets.map((budget) => {
          const Icon = budget.icon
          const statusColor = getStatusColor(budget.percentage)
          const statusText = getStatusText(budget.percentage)
          
          return (
            <div key={budget.id} className="stat-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: budget.color + '20' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: budget.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{budget.category}</h3>
                    <p className={`text-sm font-medium ${statusColor}`}>{statusText}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => {
                      const newLimit = prompt('Enter new budget limit:', budget.limit)
                      if (newLimit && !isNaN(newLimit) && parseFloat(newLimit) > 0) {
                        updateBudgetLimit(budget.id, parseFloat(newLimit))
                      }
                    }}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <Edit2 className="w-4 h-4 text-gray-500" />
                  </button>
                  <button 
                    onClick={() => handleDeleteBudget(budget.id)}
                    className="p-1 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Spent: ${budget.spent}</span>
                  <span className="text-gray-600">Limit: ${budget.limit}</span>
                </div>
                
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${budget.percentage}%`,
                      background: budget.color
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {budget.percentage.toFixed(1)}% used
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    ${(budget.limit - budget.spent).toFixed(0)} left
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Budget Alerts */}
      <div className="stat-card mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Budget Alerts</h2>
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Mark all as read
          </button>
        </div>
        
        <div className="space-y-4">
          {budgets
            .filter(b => b.percentage >= 75)
            .map(budget => (
              <div 
                key={`alert-${budget.id}`} 
                className={`p-4 rounded-xl ${budget.percentage >= 90 ? 'bg-red-50 border border-red-200' : 'bg-yellow-50 border border-yellow-200'}`}
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className={`w-5 h-5 ${budget.percentage >= 90 ? 'text-red-600' : 'text-yellow-600'}`} />
                  <div>
                    <p className="font-medium text-gray-900">
                      {budget.percentage >= 90 ? '⚠️ Over Budget!' : '⚠️ Almost at Limit!'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {budget.category} budget is {budget.percentage.toFixed(1)}% used (${budget.spent} of ${budget.limit})
                    </p>
                  </div>
                </div>
              </div>
            ))}
          
          {budgets.filter(b => b.percentage >= 75).length === 0 && (
            <div className="text-center py-4">
              <p className="text-gray-600">All budgets are within limits! 🎉</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Budget Modal */}
      {showAddBudget && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Add Budget Category</h2>
              <button
                onClick={() => setShowAddBudget(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5 transform rotate-45 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="form-label">Category</label>
                <select
                  className="form-input"
                  value={newBudget.category}
                  onChange={(e) => setNewBudget({...newBudget, category: e.target.value})}
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Monthly Limit ($)</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="500"
                  value={newBudget.limit}
                  onChange={(e) => setNewBudget({...newBudget, limit: e.target.value})}
                  min="1"
                  step="1"
                />
              </div>

              <div>
                <label className="form-label mb-3 block">Category Color</label>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setNewBudget({...newBudget, color})}
                      className={`w-8 h-8 rounded-full border-2 ${newBudget.color === color ? 'border-gray-900' : 'border-transparent'}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-6">
                <button
                  onClick={() => setShowAddBudget(false)}
                  className="btn btn-secondary flex-1"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddBudget}
                  className="btn btn-primary flex-1"
                >
                  Add Budget
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Budget