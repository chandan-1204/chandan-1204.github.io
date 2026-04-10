import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const RotatingTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.5;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.3 + 0.5;
      wireRef.current.rotation.y = t * 0.5 + 0.5;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 128, 16]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.3} wireframe transparent opacity={0.6} />
      </mesh>
      <mesh ref={wireRef}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} transparent opacity={0.4} />
      </mesh>
      <pointLight position={[5, 5, 5]} intensity={1} color="#0ea5e9" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
      <ambientLight intensity={0.2} />
    </group>
  );
};

const AISphere = () => (
  <div className="w-full h-[350px] md:h-[450px]">
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <RotatingTorus />
    </Canvas>
  </div>
);

export default AISphere;
