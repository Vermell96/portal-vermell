// src/tasks/TaskItem.jsx
import api from '../api/axios';
import { useState } from 'react';

export default function TaskItem({ task, onChange }) {
  const [loading, setLoading] = useState(false);

  const toggleDone = async () => {
    try {
      setLoading(true);
      await api.put(`/tasks/${task.id}`, {
        title: task.title,
        description: task.description,
        done: !task.done,
      });
      onChange();            // refresca la lista en el padre
    } catch (err) {
      console.error('Error al cambiar estado:', err);
    } finally {
      setLoading(false);
    }
  };

  const remove = async () => {
    if (!confirm('¿Eliminar tarea?')) return;
    try {
      setLoading(true);
      await api.delete(`/tasks/${task.id}`);
      onChange();
    } catch (err) {
      console.error('Error al borrar:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <li
      className={`flex justify-between items-center border p-2 rounded ${
        task.done ? 'bg-gray-100' : ''
      }`}
    >
      <div>
        <p
          className={`font-medium ${task.done ? 'line-through text-gray-500' : ''}`}
        >
          {task.title}
        </p>
        {task.description && (
          <p className={`text-sm ${task.done ? 'line-through text-gray-400' : ''}`}>
            {task.description}
          </p>
        )}
      </div>

      <div className="space-x-2">
        <button
          onClick={toggleDone}
          disabled={loading}
          className={`px-2 py-1 rounded text-white ${
            task.done ? 'bg-yellow-500' : 'bg-green-600'
          }`}
          title={task.done ? 'Marcar pendiente' : 'Marcar hecha'}
        >
          ✓
        </button>
        <button
          onClick={remove}
          disabled={loading}
          className="px-2 py-1 rounded bg-red-600 text-white"
          title="Eliminar"
        >
          🗑
        </button>
      </div>
    </li>
  );
}
