import { useState } from 'react';
import { createTodo } from '../../api/todosApi';

export default function TodoForm({ userId, onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = await createTodo({ title, userId, completed: false });
    onAdd(todo);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New todo..." required />
      <button type="submit">Add</button>
    </form>
  );
}
