import React, { useState } from 'react';
import { SnippetCard } from './SnippetCard';
import { Search, Filter } from 'lucide-react';

export function SnippetList({ snippets, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const languages = ['all', ...new Set(snippets.map(s => s.language))];

  const filteredSnippets = snippets.filter(snippet => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         snippet.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage = selectedLanguage === 'all' || snippet.language === selectedLanguage;
    return matchesSearch && matchesLanguage;
  });

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-4">
      <div className="sticky top-[72px] bg-slate-50/80 backdrop-blur-sm z-10 py-4 -mt-4">
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search snippets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedLanguage === lang
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {filteredSnippets.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-slate-500 mb-2">No snippets found</p>
            <p className="text-sm text-slate-400">
              {snippets.length === 0 
                ? 'Click the + button to add your first snippet'
                : 'Try adjusting your search or filters'}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4 pb-20">
          {filteredSnippets.map(snippet => (
            <SnippetCard
              key={snippet.id}
              snippet={snippet}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}