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
  try {
    const res = await axios.post('/api/login', { username, password });
    const token = res.data.access_token;
    const userData = res.data.user;

    localStorage.setItem('token', token);
    setUser(userData);  // Esto es CLAVE para que <Private> te deje pasar
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
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
