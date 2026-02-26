import React, { useState } from 'react';
import { PlusCircle, X, MinusCircle } from 'lucide-react';

const CreatePoll = ({ onCreatePoll }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddOption = () => {
    if (options.length < 6) {
      setOptions([...options, '']);
    }
  };

  const handleRemoveOption = (index) => {
    if (options.length > 2) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!question.trim() || options.some(opt => !opt.trim())) {
      alert('Please fill in all fields');
      return;
    }

    const newPoll = {
      id: Date.now(),
      question: question,
      options: options.map((text, index) => ({
        id: index + 1,
        text: text,
        votes: 0
      })),
      totalVotes: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };

    onCreatePoll(newPoll);
    
    // Reset form
    setQuestion('');
    setOptions(['', '']);
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <PlusCircle size={20} />
          <span className="font-semibold">Create New Poll</span>
        </button>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Create a New Poll</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question
              </label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter your poll question..."
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                maxLength="200"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Options (Minimum 2, Maximum 6)
              </label>
              {options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="flex-1 px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    maxLength="100"
                  />
                  {options.length > 2 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <MinusCircle size={20} />
                    </button>
                  )}
                </div>
              ))}

              {options.length < 6 && (
                <button
                  type="button"
                  onClick={handleAddOption}
                  className="mt-2 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <PlusCircle size={18} className="mr-1" />
                  Add Option
                </button>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
            >
              Create Poll
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePoll;