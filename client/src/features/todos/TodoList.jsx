import TodoItem from './TodoItem';

export default function TodoList({ todos, onUpdate, onDelete }) {
  const sorted = [...todos].sort((a, b) => a.id - b.id);
  return (
    <ul>
      {sorted.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
}
