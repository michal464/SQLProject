import { useState } from 'react';
import { updatePost, deletePost } from '../../api/postsApi';
import { deleteComment } from '../../api/commentsApi';
import CommentList from '../comments/CommentList';
import CommentForm from '../comments/CommentForm';

export default function PostItem({ post, currentUserId, onUpdate, onDelete }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.comments || []);

  const handleDelete = async () => {
    await deletePost(post.id);
    onDelete(post.id);
  };

  const handleDeleteComment = async (id) => {
    await deleteComment(id);
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      {post.userId === currentUserId && (
        <button onClick={handleDelete}>Delete Post</button>
      )}
      <button onClick={() => setShowComments((v) => !v)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && (
        <>
          <CommentList
            comments={comments}
            currentUserId={currentUserId}
            onDelete={handleDeleteComment}
          />
          <CommentForm postId={post.id} userId={currentUserId} onAdd={(c) => setComments((prev) => [...prev, c])} />
        </>
      )}
    </li>
  );
}
