import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", form);
      setUser(res.data);
    } catch (err) {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800">
        Iniciar sesión
      </button>
    </form>
  );
}
