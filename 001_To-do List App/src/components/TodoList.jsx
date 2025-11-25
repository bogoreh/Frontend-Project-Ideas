import TodoItem from './TodoItem';
import '../styles/App.css';

function TodoList({ todos, toggleTodo, deleteTodo, filter }) {
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        {filter === 'active' && 'No active tasks! 🎉'}
        {filter === 'completed' && 'No completed tasks yet!'}
        {filter === 'all' && 'No tasks yet. Add one above! ✨'}
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;