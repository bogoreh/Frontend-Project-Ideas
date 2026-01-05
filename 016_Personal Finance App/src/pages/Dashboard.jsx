import React, { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, DollarSign, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import toast from 'react-hot-toast'

const Dashboard = ({ user }) => {
  const [stats, setStats] = useState({
    totalBalance: 12500,
    totalIncome: 8500,
    totalExpenses: 4500,
    monthlyBudget: 3000,
  })

  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, name: 'Groceries', amount: 85.99, type: 'expense', category: 'Food', date: '2024-01-15' },
    { id: 2, name: 'Salary', amount: 2500, type: 'income', category: 'Salary', date: '2024-01-14' },
    { id: 3, name: 'Netflix', amount: 15.99, type: 'expense', category: 'Entertainment', date: '2024-01-13' },
    { id: 4, name: 'Gas', amount: 45.50, type: 'expense', category: 'Transport', date: '2024-01-12' },
    { id: 5, name: 'Freelance Work', amount: 800, type: 'income', category: 'Freelance', date: '2024-01-10' },
  ])

  const [budgetCategories] = useState([
    { name: 'Food', spent: 350, limit: 500, color: '#10b981' },
    { name: 'Transport', spent: 200, limit: 300, color: '#3b82f6' },
    { name: 'Entertainment', spent: 150, limit: 200, color: '#8b5cf6' },
    { name: 'Shopping', spent: 400, limit: 600, color: '#f59e0b' },
  ])

  const addQuickTransaction = (type) => {
    const amount = type === 'income' ? 100 : -50
    const newTransaction = {
      id: Date.now(),
      name: type === 'income' ? 'Quick Income' : 'Quick Expense',
      amount: Math.abs(amount),
      type,
      category: type === 'income' ? 'Quick Add' : 'Quick Spend',
      date: new Date().toISOString().split('T')[0]
    }
    
    setRecentTransactions([newTransaction, ...recentTransactions.slice(0, 4)])
    setStats(prev => ({
      ...prev,
      totalBalance: prev.totalBalance + amount,
      [type === 'income' ? 'totalIncome' : 'totalExpenses']: 
        prev[type === 'income' ? 'totalIncome' : 'totalExpenses'] + Math.abs(amount)
    }))
    
    toast.success(`${type === 'income' ? 'Income' : 'Expense'} added successfully!`)
  }

  return (
    <div className="dashboard">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.name?.split(' ')[0] || 'User'}!</h1>
        <p className="text-gray-600">Here's your financial overview for January 2024</p>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => addQuickTransaction('income')}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
        >
          <ArrowUpRight className="w-5 h-5" />
          Add Quick Income
        </button>
        <button 
          onClick={() => addQuickTransaction('expense')}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
        >
          <ArrowDownRight className="w-5 h-5" />
          Add Quick Expense
        </button>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600 text-sm">Total Balance</p>
              <h3 className="text-3xl font-bold text-gray-900">${stats.totalBalance.toLocaleString()}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+12.5% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600 text-sm">Total Income</p>
              <h3 className="text-3xl font-bold text-gray-900">${stats.totalIncome.toLocaleString()}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+8.2% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600 text-sm">Total Expenses</p>
              <h3 className="text-3xl font-bold text-gray-900">${stats.totalExpenses.toLocaleString()}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
              <ArrowDownRight className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-red-600">
            <TrendingDown className="w-4 h-4" />
            <span className="text-sm font-medium">-3.1% from last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600 text-sm">Monthly Budget</p>
              <h3 className="text-3xl font-bold text-gray-900">${stats.monthlyBudget.toLocaleString()}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="text-sm text-gray-600">$850 remaining this month</div>
        </div>
      </div>

      {/* Charts and Budget Section */}
      <div className="charts-grid">
        {/* Budget Progress */}
        <div className="stat-card">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Budget Overview</h3>
          <div className="space-y-6">
            {budgetCategories.map((category) => {
              const percentage = (category.spent / category.limit) * 100
              return (
                <div key={category.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{category.name}</span>
                    <span className="text-gray-600">
                      ${category.spent} / ${category.limit}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${Math.min(percentage, 100)}%`,
                        background: category.color
                      }}
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className={`text-sm font-medium ${percentage > 90 ? 'text-red-600' : 'text-gray-600'}`}>
                      {percentage.toFixed(1)}% used
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="stat-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Recent Transactions</h3>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="flex items-center gap-3">
                  <div 
                    className="category-icon"
                    style={{
                      background: transaction.type === 'income' 
                        ? 'linear-gradient(135deg, #10b981, #34d399)'
                        : 'linear-gradient(135deg, #ef4444, #f87171)'
                    }}
                  >
                    {transaction.type === 'income' ? (
                      <ArrowUpRight className="w-5 h-5" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-600">{transaction.category} • {transaction.date}</p>
                  </div>
                </div>
                <div className={`font-medium ${transaction.type === 'income' ? 'income' : 'expense'}`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="stat-card mt-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Notifications</h3>
          <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
            Mark all as read
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <Bell className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Budget Alert</p>
              <p className="text-sm text-gray-600">You've spent 85% of your Food budget</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Income Update</p>
              <p className="text-sm text-gray-600">Salary has been deposited</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard