import React, { useState } from 'react';
import { X, Image, Hash, Send } from 'lucide-react';

const CreateThread = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('technology');

  const categories = [
    { id: 'technology', name: 'Technology', color: 'bg-blue-500' },
    { id: 'design', name: 'Design', color: 'bg-purple-500' },
    { id: 'business', name: 'Business', color: 'bg-green-500' },
    { id: 'science', name: 'Science', color: 'bg-red-500' },
    { id: 'arts', name: 'Arts', color: 'bg-yellow-500' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle thread creation
    console.log({ title, content, category });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="glass-effect rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Start a Discussion</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white/80 mb-2 font-medium">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What would you like to discuss?"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-white/80 font-medium">
                  Category
                </label>
                <Hash className="w-5 h-5 text-white/60" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      category === cat.id
                        ? 'bg-white/30 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white/80 mb-2 font-medium">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your thoughts..."
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Image className="w-5 h-5" />
                <span>Add Image</span>
              </button>

              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 btn-primary"
                >
                  <Send className="w-5 h-5" />
                  <span>Post Discussion</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateThread;