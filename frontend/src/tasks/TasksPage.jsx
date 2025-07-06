import { useEffect, useState } from 'react';
import api from '../api/axios';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    const { data } = await api.get('/tasks');
    setTasks(data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tareas</h1>
      <TaskForm onCreated={load} />
      <ul className="mt-4 space-y-2">
        {tasks.map(t => <TaskItem key={t.id} task={t} onChange={load} />)}
      </ul>
    </div>
  );
}
