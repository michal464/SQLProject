import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import LoginPage from '../pages/LoginPage';
import InfoPage from '../pages/InfoPage';
import TodosPage from '../pages/TodosPage';
import PostsPage from '../pages/PostsPage';
import NotFound from '../pages/NotFound';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users/:username/info" element={<PrivateRoute><InfoPage /></PrivateRoute>} />
        <Route path="/users/:username/todos" element={<PrivateRoute><TodosPage /></PrivateRoute>} />
        <Route path="/users/:username/posts" element={<PrivateRoute><PostsPage /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
