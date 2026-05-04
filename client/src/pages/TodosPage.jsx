import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getTodos } from '../api/todosApi';
import TodoList from '../features/todos/TodoList';
import TodoForm from '../features/todos/TodoForm';

export default function TodosPage() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos(user.id).then(setTodos);
  }, [user.id]);

  const handleUpdate = (updated) =>
    setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  return (
    <div>
      <h2>Todos</h2>
      <TodoForm userId={user.id} onAdd={(t) => setTodos((prev) => [...prev, t])} />
      <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}
