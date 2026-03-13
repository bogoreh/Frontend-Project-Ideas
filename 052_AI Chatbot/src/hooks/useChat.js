import { useState } from 'react';

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (userMessage) => {
    // Add user message
    const userMsg = {
      text: userMessage,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const aiMsg = {
        text: generateSmartResponse(userMessage),
        sender: 'ai',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const generateSmartResponse = (message) => {
    const responses = {
      greeting: [
        "Hello! How can I assist you today? 😊",
        "Hi there! Great to hear from you! What's on your mind?",
        "Hey! I'm here to help. What would you like to discuss?",
      ],
      question: [
        "That's an excellent question! Let me think about it...",
        "Interesting question! Here's what I think...",
        "Great question! Let me provide you with some insights...",
      ],
      thanks: [
        "You're very welcome! Happy to help! 😊",
        "My pleasure! Is there anything else you'd like to know?",
        "Glad I could assist! Feel free to ask more questions!",
      ],
      default: [
        "That's fascinating! Tell me more about your thoughts on this.",
        "I understand your perspective. Here's what I think about that...",
        "Thanks for sharing! This is an interesting topic. Let me help you explore it further.",
        "I appreciate your message! Let's dive deeper into this conversation.",
      ]
    };

    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    } else if (lowerMsg.includes('?')) {
      return responses.question[Math.floor(Math.random() * responses.question.length)];
    } else if (lowerMsg.includes('thank')) {
      return responses.thanks[Math.floor(Math.random() * responses.thanks.length)];
    } else {
      return responses.default[Math.floor(Math.random() * responses.default.length)];
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return {
    messages,
    isTyping,
    sendMessage,
    clearChat
  };
};

export default useChat;