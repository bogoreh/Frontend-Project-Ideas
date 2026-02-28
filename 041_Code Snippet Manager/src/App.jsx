import React from 'react';
import { Header } from './components/Header';
import { SnippetForm } from './components/SnippetForm';
import { SnippetList } from './components/SnippetList';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [snippets, setSnippets] = useLocalStorage('code-snippets', []);

  const addSnippet = (newSnippet) => {
    setSnippets(prev => [newSnippet, ...prev]);
  };

  const deleteSnippet = (id) => {
    setSnippets(prev => prev.filter(snippet => snippet.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main>
        <SnippetList snippets={snippets} onDelete={deleteSnippet} />
        <SnippetForm onAddSnippet={addSnippet} />
      </main>
    </div>
  );
}

export default App;