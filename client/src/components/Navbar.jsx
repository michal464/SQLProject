import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav>
      <Link to={`/users/${user.username}/info`}>Info</Link>
      <Link to={`/users/${user.username}/todos`}>Todos</Link>
      <Link to={`/users/${user.username}/posts`}>Posts</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
