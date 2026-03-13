import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import TypingIndicator from './components/TypingIndicator';
import useChat from './hooks/useChat';
import { Menu, X, MessageCircle, Sparkles, Zap, Shield, Globe } from 'lucide-react';

function App() {
  const { messages, isTyping, sendMessage, clearChat } = useChat();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting('Good Morning');
    else if (hours < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 glass-card rounded-xl hover:scale-110 transition-all duration-300"
      >
        {sidebarOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:relative z-40 h-full transition-all duration-500 ease-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar 
          onNewChat={() => {
            clearChat();
            setSidebarOpen(false);
          }}
          chatHistory={messages.filter(m => m.sender === 'user').slice(-5)}
        />
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col h-full relative">
        {/* Header */}
        <div className="glass-effect m-4 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="avatar-ai">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                AI Assistant
                <Zap size={18} className="text-yellow-400 animate-pulse" />
              </h1>
              <p className="text-xs text-white/60">Always here to help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-white/60">Online</span>
          </div>
        </div>

        {/* Messages container */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="welcome-card">
                <div className="avatar-ai w-20 h-20 mx-auto mb-6 animate-float">
                  <MessageCircle size={32} className="text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-2">
                  {greeting}!
                </h2>
                <p className="text-white/70 mb-8">
                  I'm your AI assistant. How can I help you today?
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="feature-card">
                    <Sparkles size={20} className="text-purple-400 mb-2" />
                    <p className="text-xs text-white/70">Smart Responses</p>
                  </div>
                  <div className="feature-card">
                    <Zap size={20} className="text-yellow-400 mb-2" />
                    <p className="text-xs text-white/70">Lightning Fast</p>
                  </div>
                  <div className="feature-card">
                    <Shield size={20} className="text-green-400 mb-2" />
                    <p className="text-xs text-white/70">Secure & Private</p>
                  </div>
                  <div className="feature-card">
                    <Globe size={20} className="text-blue-400 mb-2" />
                    <p className="text-xs text-white/70">24/7 Available</p>
                  </div>
                </div>

                <p className="text-sm text-white/50">
                  Try asking me anything! I'm here to help.
                </p>
              </div>
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isTyping && <TypingIndicator />}
            </>
          )}
        </div>

        {/* Input area */}
        <ChatInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;