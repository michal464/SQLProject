import PostItem from './PostItem';

export default function PostList({ posts, currentUserId, onUpdate, onDelete }) {
  const sorted = [...posts].sort((a, b) => a.id - b.id);
  return (
    <ul>
      {sorted.map((post) => (
        <PostItem key={post.id} post={post} currentUserId={currentUserId} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
}
