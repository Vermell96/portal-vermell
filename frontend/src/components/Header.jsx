import React, { useState } from "react";
import LoginPage from "../auth/LoginPage";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center py-4 px-4 lg:px-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
          Andres Ortega
        </h1>

        <nav className="hidden md:flex items-center gap-12">
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Experiencia
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Formación
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Proyectos
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Recursos
          </a>
        </nav>

        <button
          className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium hover:bg-white transition-all duration-500"
          onClick={() => setShowLogin(!showLogin)}
        >
          Login
        </button>
      </header>

      {showLogin && (
        <div className="absolute top-24 right-10 bg-white text-black rounded-lg p-6 shadow-xl z-[999] w-[320px]">
          <LoginPage />
        </div>
      )}
    </div>
  );
};

export default Header;
