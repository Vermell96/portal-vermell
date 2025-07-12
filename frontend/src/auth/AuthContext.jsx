import { createContext, useState, useEffect } from 'react';
import api from '../api/axios';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Al recargar página, conserva el token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setUser({ token });
  }, []);

  const register = async ({ username, email, password }) => {
    await api.post('/register', { username, email, password });
  };

const login = async (username, password) => {
  try {
    const res = await api.post('/login', { username, password }); // usa la misma instancia
    const { access_token: token, user: userData } = res.data;

    localStorage.setItem('token', token);
    setUser(userData);         // mantiene el mismo comportamiento que ya tenías
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};



  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
