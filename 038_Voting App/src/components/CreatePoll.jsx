import React, { useState } from 'react';
import { Plus, X, Sparkles } from 'lucide-react';

const CreatePoll = ({ onCreatePoll }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, '']);
    }
  };

  const removeOption = (index) => {
    if (options.length > 2) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!question.trim()) {
      alert('Please enter a question');
      return;
    }

    const validOptions = options.filter(opt => opt.trim() !== '');
    if (validOptions.length < 2) {
      alert('Please enter at least 2 options');
      return;
    }

    onCreatePoll(question, validOptions);
    setQuestion('');
    setOptions(['', '']);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <div className="flex items-center mb-6">
          <Sparkles className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Create New Poll
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question
            </label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question..."
              className="input-field"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Options (minimum 2, maximum 6)
            </label>
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => updateOption(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className="input-field"
                />
                {options.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeOption(index)}
                    className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {options.length < 6 && (
            <button
              type="button"
              onClick={addOption}
              className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
            >
              <Plus className="h-5 w-5 mr-1" />
              Add Option
            </button>
          )}

          <button
            type="submit"
            className="w-full btn-primary group"
          >
            Create Poll
            <Sparkles className="inline-block ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePoll;