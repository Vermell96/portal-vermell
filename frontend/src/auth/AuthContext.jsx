import { createContext, useState, useEffect } from 'react';
import api from '../api/axios';

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
    const { data } = await api.post(
      '/login',
      new URLSearchParams({ username, password })
    );
    localStorage.setItem('token', data.access_token);
    setUser({ token: data.access_token });
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
