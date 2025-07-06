import { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterPage() {
  const { register } = useContext(AuthContext);
  const nav = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    await register(form);
    nav('/login');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3">
      <h1 className="text-2xl font-bold">Registro</h1>
      {['username', 'email', 'password'].map(k => (
        <input
          key={k}
          type={k === 'password' ? 'password' : 'text'}
          placeholder={k}
          value={form[k]}
          onChange={e => setForm({ ...form, [k]: e.target.value })}
          className="border p-2 w-full"
        />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Crear cuenta</button>
      <p className="text-sm">
        ¿Ya tienes cuenta? <Link to="/login" className="text-blue-600">Inicia sesión</Link>
      </p>
    </form>
  );
}
