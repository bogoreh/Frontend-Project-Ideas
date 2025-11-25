import { useState } from 'react';
import '../styles/App.css';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 300);
  };

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
        <button
          onClick={handleDelete}
          className="delete-button"
          aria-label="Delete task"
        >
          ×
        </button>
      </div>
      <div className="todo-date">
        {new Date(todo.createdAt).toLocaleDateString()}
      </div>
    </li>
  );
}

export default TodoItem;