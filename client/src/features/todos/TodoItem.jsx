import { useState } from 'react';
import { createTodo, updateTodo, deleteTodo } from '../../api/todosApi';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const toggleComplete = async () => {
    const updated = await updateTodo(todo.id, { completed: !todo.completed });
    onUpdate(updated);
  };

  const saveEdit = async () => {
    const updated = await updateTodo(todo.id, { title });
    onUpdate(updated);
    setEditing(false);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    onDelete(todo.id);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />
      {editing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.title}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
