// frontend/src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './auth/AuthContext';
import Homepage from './components/Homepage';
import RegisterPage from './auth/RegisterPage';
import LoginPage from './auth/LoginPage';
import TasksPage from './tasks/TasksPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing pública */}
          <Route path="/" element={<Homepage />} />

          {/* Registro y login */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Sección de tareas solo para usuarios autenticados */}
          <Route
            path="/tasks"
            element={
              <Private>
                <TasksPage />
              </Private>
            }
          />

          {/* Cualquier otra ruta redirige a la landing */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// Componente que protege rutas
function Private({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}
