import { useState } from 'react';
import { createComment, updateComment, deleteComment } from '../../api/commentsApi';

export default function CommentList({ comments, postUserId, currentUserId, onUpdate, onDelete }) {
  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id}>
          <strong>{c.name}</strong>: {c.body}
          {c.userId === currentUserId && (
            <button onClick={() => onDelete(c.id)}>Delete</button>
          )}
        </li>
      ))}
    </ul>
  );
}
