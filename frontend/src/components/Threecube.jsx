import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function Cube() {
  const mesh = useRef();
  useFrame((_, delta) => {
    mesh.current.rotation.y += delta;
    mesh.current.rotation.x += delta * 0.5;
  });
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#5300a0" />
    </mesh>
  );
}

export default function ThreeCube() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [2, 2, 3], fov: 45 }}
      dpr={Math.min(window.devicePixelRatio, 2)}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Cube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
