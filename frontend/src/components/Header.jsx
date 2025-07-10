import 'boxicons/css/boxicons.min.css';
import React, { useState } from "react";
import LoginPage from "../auth/LoginPage";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleMobileMenu = () =>{
    //Funcion de menu desplegable para telefonos
    const mobileMenu = document.getElementById('mobileMenu')

    //Si esta oculto, remueve esa clase
    if(mobileMenu.classList.contains('hidden')){
      mobileMenu.classList.remove('hidden');
    } else{
      mobileMenu.classList.add('hidden')
    }

  }

  return (
    <div>
      <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
          Andres Ortega
        </h1>

        {/* Secciones del header  - Web */}
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

        {/* Login */}
        <button
          className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium hover:bg-white transition-all duration-500"
          onClick={() => setShowLogin(!showLogin)}
        >
          Login
        </button>

        {/* Mobile menu */}
        <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
          <i class='bx  bx-menu'></i> 
        </button>

        {/* Secciones del header  - Mobile */}
        <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-0 backdrop-blur-md'>
          <nav className='flex flex-col gap-6 items-center'>
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
        </div>

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
