import { useState } from 'react';
import { createComment } from '../../api/commentsApi';

export default function CommentForm({ postId, userId, onAdd }) {
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = await createComment({ postId, userId, body });
    onAdd(comment);
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={body} onChange={(e) => setBody(e.target.value)} placeholder="Add comment..." required />
      <button type="submit">Comment</button>
    </form>
  );
}
