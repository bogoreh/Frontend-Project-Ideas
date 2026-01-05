import React from 'react'
import { Bell, Search, Menu, User } from 'lucide-react'

const Header = ({ toggleSidebar, user }) => {
  return (
    <header className="header">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="btn-icon lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search transactions, reports..."
            className="form-input pl-12"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="btn-icon relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
            <span className="text-white font-bold">
              {user?.name?.charAt(0) || 'U'}
            </span>
          </div>
          <div className="hidden md:block">
            <p className="font-medium text-gray-900">{user?.name || 'User'}</p>
            <p className="text-sm text-gray-500">Welcome back!</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header