import React from "react";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="w-screen h-screen flex flex-col">

      {/* Contenido principal */}
      <div className="flex flex-1">
        {/* Texto */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Ingeniero Mecánico & Programador</h1>
          <p className="text-lg text-gray-600 mb-6">
            Ingeniero mecánico con tres años de experiencia en diseño y desarrollo de productos en el área
            metalmecánica e hidráulica. Nivel B1 de inglés, junior en programación en Python y JavaScript,
            manejo de SolidWorks y AutoCAD.
          </p>
          <a href="/Andres_Ortega_CV.pdf" download className="bg-green-600 text-white px-4 py-2 rounded w-fit hover:bg-green-700 transition">
            Descargar CV
          </a>
        </div>

        {/* Modelo 3D */}
        <div className="w-1/2">
          <Spline scene="https://prod.spline.design/O4W49WvGXtcr2UJh/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
