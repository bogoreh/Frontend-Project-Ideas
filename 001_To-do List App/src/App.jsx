import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import './styles/App.css';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>✨ Todo List</h1>
          <p>{completedCount} of {totalCount} tasks completed</p>
        </header>

        <main className="app-main">
          <TodoForm addTodo={addTodo} />
          
          <FilterButtons filter={filter} setFilter={setFilter} />
          
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            filter={filter}
          />
        </main>
      </div>
    </div>
  );
}

export default App;