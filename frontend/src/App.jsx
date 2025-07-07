import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./auth/AuthContext";
import { useContext } from "react";

import Header from "./components/Header";
import Homepage from "./components/Homepage";

import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import TasksPage from "./tasks/TasksPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<Private><TasksPage /></Private>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// Componente para envolver la homepage con el Header y fondo
function Layout({ children }) {
  return (
    <main>
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="gradient" />
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10" />
      <Header />
      {children}
    </main>
  );
}

function Private({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}
