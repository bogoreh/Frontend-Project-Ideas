import React from 'react';
import { Plus, MessageSquare, Trash2, Settings, LogOut, Star, Clock } from 'lucide-react';

const Sidebar = ({ onNewChat, chatHistory }) => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8 mt-4">
        <div className="avatar-ai w-10 h-10">
          <Star size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-white font-bold">AI Chat</h2>
          <p className="text-xs text-white/50">Premium Assistant</p>
        </div>
      </div>

      {/* New Chat Button */}
      <button onClick={onNewChat} className="new-chat-btn">
        <Plus size={20} />
        New Conversation
      </button>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center gap-2 mb-4">
          <Clock size={16} className="text-white/50" />
          <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider">
            Recent Chats
          </h3>
        </div>
        
        {chatHistory.length === 0 ? (
          <div className="text-center py-8">
            <MessageSquare size={32} className="text-white/20 mx-auto mb-2" />
            <p className="text-sm text-white/30">
              No chat history yet
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {chatHistory.map((chat, index) => (
              <div key={index} className="chat-history-item group">
                <div className="flex items-center gap-2">
                  <MessageSquare size={14} className="text-white/50 group-hover:text-white/80 transition-colors" />
                  <span className="flex-1 text-white/70 group-hover:text-white transition-colors">
                    {chat.text.substring(0, 25)}...
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <Trash2 size={14} className="text-white/50 hover:text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Menu */}
      <div className="pt-4 border-t border-white/10 space-y-2">
        <button className="w-full glass-card p-3 rounded-lg flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 group">
          <Settings size={18} className="group-hover:rotate-90 transition-transform duration-500" />
          <span className="text-sm">Settings</span>
        </button>
        <button className="w-full glass-card p-3 rounded-lg flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300">
          <LogOut size={18} />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;