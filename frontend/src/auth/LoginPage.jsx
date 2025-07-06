import { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const nav = useNavigate();
  const [creds, setCreds] = useState({ username: '', password: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    await login(creds.username, creds.password);
    nav('/tasks');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <h1 className="text-2xl font-bold">Inicio de sesión</h1>
      {['username', 'password'].map(k => (
        <input
          key={k}
          type={k === 'password' ? 'password' : 'text'}
          placeholder={k}
          value={creds[k]}
          onChange={e => setCreds({ ...creds, [k]: e.target.value })}
          className="border p-2 w-full"
        />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Entrar</button>
      <p className="text-sm">
        ¿No tienes cuenta? <Link to="/register" className="text-blue-600">Regístrate</Link>
      </p>
    </form>
  );
}
