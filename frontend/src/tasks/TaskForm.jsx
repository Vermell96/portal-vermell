import { useState } from 'react';
import api from '../api/axios';

export default function TaskForm({ onCreated }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const submit = async e => {
    e.preventDefault();
    await api.post('/tasks', { title, description: desc });
    setTitle(''); setDesc('');
    onCreated();
  };

  return (
    <form onSubmit={submit} className="space-x-2">
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Título" className="border p-1"/>
      <input value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Descripción" className="border p-1"/>
      <button className="bg-green-600 text-white px-2 py-1">Añadir</button>
    </form>
  );
}
