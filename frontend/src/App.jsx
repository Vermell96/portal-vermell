import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './auth/AuthContext';
import RegisterPage from './auth/RegisterPage';
import LoginPage from './auth/LoginPage';
import TasksPage from './tasks/TasksPage';
import { useContext } from 'react';   // ← añade esto

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tasks" element={<Private><TasksPage /></Private>} />
          <Route path="*" element={<Navigate to="/tasks" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

function Private({ children }) {
  const { user } = useContext(AuthContext);  // ← usa useContext directo
  return user ? children : <Navigate to="/login" />;
}
