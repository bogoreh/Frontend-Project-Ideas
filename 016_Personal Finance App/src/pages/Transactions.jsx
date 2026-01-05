import React, { useState } from 'react'
import { Plus, Search, Filter, Download, Calendar, Edit, Trash2, DollarSign, ShoppingBag, Home, Car, Coffee, Heart } from 'lucide-react'
import toast from 'react-hot-toast'

const Transactions = ({ user }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Grocery Store', amount: 85.99, type: 'expense', category: 'Food', date: '2024-01-15', description: 'Weekly groceries' },
    { id: 2, name: 'Salary Deposit', amount: 2500, type: 'income', category: 'Salary', date: '2024-01-14', description: 'Monthly salary' },
    { id: 3, name: 'Netflix Subscription', amount: 15.99, type: 'expense', category: 'Entertainment', date: '2024-01-13', description: 'Monthly subscription' },
    { id: 4, name: 'Gas Station', amount: 45.50, type: 'expense', category: 'Transport', date: '2024-01-12', description: 'Car fuel' },
    { id: 5, name: 'Freelance Project', amount: 800, type: 'income', category: 'Freelance', date: '2024-01-10', description: 'Web design project' },
    { id: 6, name: 'Restaurant', amount: 65.75, type: 'expense', category: 'Dining', date: '2024-01-09', description: 'Dinner with friends' },
    { id: 7, name: 'Electric Bill', amount: 120.30, type: 'expense', category: 'Utilities', date: '2024-01-08', description: 'Monthly electricity' },
    { id: 8, name: 'Online Course', amount: 199.99, type: 'expense', category: 'Education', date: '2024-01-07', description: 'React Masterclass' },
  ])

  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [newTransaction, setNewTransaction] = useState({
    name: '',
    amount: '',
    type: 'expense',
    category: 'Food',
    date: new Date().toISOString().split('T')[0],
    description: ''
  })

  const categories = [
    { value: 'Food', label: 'Food', icon: ShoppingBag, color: '#10b981' },
    { value: 'Salary', label: 'Salary', icon: DollarSign, color: '#059669' },
    { value: 'Entertainment', label: 'Entertainment', icon: Heart, color: '#8b5cf6' },
    { value: 'Transport', label: 'Transport', icon: Car, color: '#3b82f6' },
    { value: 'Dining', label: 'Dining', icon: Coffee, color: '#f59e0b' },
    { value: 'Utilities', label: 'Utilities', icon: Home, color: '#ef4444' },
    { value: 'Education', label: 'Education', icon: ShoppingBag, color: '#6366f1' },
    { value: 'Freelance', label: 'Freelance', icon: DollarSign, color: '#06b6d4' },
  ]

  const filteredTransactions = transactions.filter(transaction => {
    const matchesFilter = filter === 'all' || transaction.type === filter
    const matchesSearch = transaction.name.toLowerCase().includes(search.toLowerCase()) ||
                         transaction.description.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const handleAddTransaction = () => {
    if (!newTransaction.name || !newTransaction.amount) {
      toast.error('Please fill in all required fields')
      return
    }

    const transaction = {
      id: Date.now(),
      ...newTransaction,
      amount: parseFloat(newTransaction.amount)
    }

    setTransactions([transaction, ...transactions])
    setShowAddModal(false)
    setNewTransaction({
      name: '',
      amount: '',
      type: 'expense',
      category: 'Food',
      date: new Date().toISOString().split('T')[0],
      description: ''
    })
    toast.success('Transaction added successfully!')
  }

  const handleDeleteTransaction = (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      setTransactions(transactions.filter(t => t.id !== id))
      toast.success('Transaction deleted')
    }
  }

  const exportTransactions = () => {
    const dataStr = JSON.stringify(transactions, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
    const exportFileDefaultName = 'transactions.json'
    
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
    toast.success('Transactions exported successfully!')
  }

  const getCategoryIcon = (category) => {
    const cat = categories.find(c => c.value === category)
    return cat ? cat.icon : ShoppingBag
  }

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.value === category)
    return cat ? cat.color : '#6b7280'
  }

  return (
    <div className="dashboard">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Transactions</h1>
        <p className="text-gray-600">Track and manage all your income and expenses</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid mb-8">
        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Balance</p>
              <h3 className="text-2xl font-bold text-gray-900">${(totalIncome - totalExpenses).toLocaleString()}</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Income</p>
              <h3 className="text-2xl font-bold text-green-600">${totalIncome.toLocaleString()}</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Expenses</p>
              <h3 className="text-2xl font-bold text-red-600">${totalExpenses.toLocaleString()}</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search transactions..."
                className="form-input pl-12 w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('income')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${filter === 'income' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                <DollarSign className="w-4 h-4" />
                Income
              </button>
              <button
                onClick={() => setFilter('expense')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${filter === 'expense' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                <ShoppingBag className="w-4 h-4" />
                Expense
              </button>
            </div>
          </div>

          <div className="flex gap-3 w-full lg:w-auto">
            <button
              onClick={exportTransactions}
              className="btn btn-secondary flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="btn btn-primary flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Transaction
            </button>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Description</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => {
                const Icon = getCategoryIcon(transaction.category)
                return (
                  <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{transaction.name}</p>
                        <p className="text-sm text-gray-600">{transaction.description}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: getCategoryColor(transaction.category) + '20' }}
                        >
                          <Icon className="w-4 h-4" style={{ color: getCategoryColor(transaction.category) }} />
                        </div>
                        <span className="text-sm font-medium">{transaction.category}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {transaction.date}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                        <button 
                          onClick={() => handleDeleteTransaction(transaction.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600">No transactions found</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="text-purple-600 hover:text-purple-700 font-medium mt-2"
            >
              Add your first transaction
            </button>
          </div>
        )}
      </div>

      {/* Add Transaction Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Add Transaction</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5 transform rotate-45 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="form-label">Description *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g., Grocery shopping"
                  value={newTransaction.name}
                  onChange={(e) => setNewTransaction({...newTransaction, name: e.target.value})}
                />
              </div>

              <div>
                <label className="form-label">Amount *</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="0.00"
                  value={newTransaction.amount}
                  onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
                  step="0.01"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Type</label>
                  <select
                    className="form-input"
                    value={newTransaction.type}
                    onChange={(e) => setNewTransaction({...newTransaction, type: e.target.value})}
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Category</label>
                  <select
                    className="form-input"
                    value={newTransaction.category}
                    onChange={(e) => setNewTransaction({...newTransaction, category: e.target.value})}
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={newTransaction.date}
                  onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})}
                />
              </div>

              <div>
                <label className="form-label">Notes (Optional)</label>
                <textarea
                  className="form-input min-h-[100px] resize-none"
                  placeholder="Add any notes here..."
                  value={newTransaction.description}
                  onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="btn btn-secondary flex-1"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTransaction}
                  className="btn btn-primary flex-1"
                >
                  Add Transaction
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Transactions