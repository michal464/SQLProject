import { useAuth } from '../context/AuthContext';

export default function InfoPage() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div>
      <h2>User Info</h2>
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
