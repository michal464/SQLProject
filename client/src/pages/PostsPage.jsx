import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getPosts } from '../api/postsApi';
import PostList from '../features/posts/PostList';
import PostForm from '../features/posts/PostForm';

export default function PostsPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const handleUpdate = (updated) =>
    setPosts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));

  const handleDelete = (id) =>
    setPosts((prev) => prev.filter((p) => p.id !== id));

  return (
    <div>
      <h2>Posts</h2>
      <PostForm userId={user.id} onAdd={(p) => setPosts((prev) => [...prev, p])} />
      <PostList posts={posts} currentUserId={user.id} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}
