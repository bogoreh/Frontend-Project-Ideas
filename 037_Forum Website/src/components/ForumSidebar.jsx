import React from 'react';
import { 
  Home, 
  Hash, 
  TrendingUp, 
  Users, 
  Star, 
  HelpCircle,
  MessageSquare,
  Settings
} from 'lucide-react';

const ForumSidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', active: true },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Popular' },
    { icon: <Hash className="w-5 h-5" />, label: 'Categories' },
    { icon: <Users className="w-5 h-5" />, label: 'Members' },
    { icon: <Star className="w-5 h-5" />, label: 'Bookmarks' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'My Threads' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Help' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  ];

  const categories = [
    { name: 'Technology', count: 128, color: 'bg-blue-500' },
    { name: 'Design', count: 64, color: 'bg-purple-500' },
    { name: 'Business', count: 42, color: 'bg-green-500' },
    { name: 'Science', count: 36, color: 'bg-red-500' },
    { name: 'Arts', count: 28, color: 'bg-yellow-500' },
    { name: 'Sports', count: 24, color: 'bg-pink-500' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed md:static top-0 left-0 h-full w-64 z-50
        glass-effect shadow-xl transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 h-full overflow-y-auto">
          {/* Navigation Menu */}
          <nav className="space-y-2 mb-8">
            <h3 className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h3>
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all
                  ${item.active 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
              Popular Categories
            </h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span className="text-white font-medium">{category.name}</span>
                  </div>
                  <span className="badge">{category.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="glass-effect rounded-xl p-4 border border-white/10">
            <h3 className="text-white font-semibold mb-2">Forum Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-white/70">
                <span>Total Threads</span>
                <span className="font-medium">1,248</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Total Replies</span>
                <span className="font-medium">5,892</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Online Users</span>
                <span className="font-medium text-green-400">142</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ForumSidebar;