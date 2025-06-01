import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';

const RotatingCylinder = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1, 1, 2, 32]} />
        <meshLambertMaterial color="#468585" emissive="#468585" />

         <Sparkles count={100} size={6} scale={3} speed={0.5}  />
      </mesh>

      {/* Sparkles effect should be outside of mesh */}
     
    </>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <color attach="background" args={['#f0f0f0']} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[1, 1, 1]} intensity={1} color="#9CDBA6" />

      <RotatingCylinder />
      <OrbitControls />
    </Canvas>
  );
};

export default App;
