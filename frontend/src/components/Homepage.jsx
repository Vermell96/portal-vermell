// frontend/src/components/Homepage.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function RotatingCube() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#61dafb" />
    </mesh>
  );
}

export default function Homepage() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Canvas 3D de fondo */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <RotatingCube />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Cabecera */}
      <header
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          color: 'white',
          background: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Andrés Ortega Corpus</h1>
        <a
          href="/login"
          style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Login
        </a>
      </header>

      {/* Sección de presentación */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          width: '100%',
          textAlign: 'center',
          color: 'white',
          padding: '0 1rem',
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Ingeniero Mecánico & Programador
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 1rem' }}>
          Ingeniero mecánico con tres años de experiencia en el diseño y desarrollo de
          productos en el área metalmecánica e hidráulica. Manejo un nivel avanzado de
          inglés (B1), junior en programación en Python y JavaScript. Experiencia en
          aplicaciones de modelado 3D como SolidWorks y AutoCAD. Persona proactiva
          y colaboradora en la ejecución de tareas.
        </p>
        <a
          href="/Andres_Ortega_CV.pdf"
          download
          style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
}
