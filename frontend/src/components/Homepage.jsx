// frontend/src/components/Homepage.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Homepage() {
  return (
    <div className="relative flex h-screen">
      {/* Login fijo arriba-derecha */}
      <header className="absolute top-4 right-4 z-10">
        <a
          href="/login"
          className="px-4 py-2 bg-white bg-opacity-20 text-white hover:bg-opacity-40 rounded-md transition"
        >
          Login
        </a>
      </header>

      {/* Columna izquierda: texto */}
      <div className="w-1/2 flex flex-col justify-center px-12 bg-gray-900 text-white">
        <h1 className="text-5xl font-extrabold mb-6">
          Ingeniero Mecánico & Programador
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Ingeniero mecánico con tres años de experiencia en diseño y desarrollo de
          productos en el área metalmecánica e hidráulica. Manejo un nivel avanzado de
          inglés (B1) y soy junior en programación con Python y JavaScript. Experiencia
          en modelado 3D con SolidWorks y AutoCAD. Persona proactiva y colaboradora.
        </p>
        <a
          href="/Andres_Ortega_CV.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
        >
          Descargar CV
        </a>
      </div>

      {/* Columna derecha: escena 3D */}
      <div className="w-1/2 relative overflow-hidden">
        <Spline
          scene="https://prod.spline.design/O4W49WvGXtcr2UJh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
