import { useState } from 'react';
import { createPost } from '../../api/postsApi';

export default function PostForm({ userId, onAdd }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = await createPost({ title, body, userId });
    onAdd(post);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" required />
      <button type="submit">Add Post</button>
    </form>
  );
}
