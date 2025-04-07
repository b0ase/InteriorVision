'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

// Sample Room Model - In a real app this would be generated based on uploaded plans
function Room() {
  const wallHeight = 2.5;
  const roomWidth = 5;
  const roomLength = 7;
  
  return (
    <group position={[0, 0, 0]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[roomWidth, roomLength]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, wallHeight, 0]} receiveShadow>
        <planeGeometry args={[roomWidth, roomLength]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Walls */}
      {/* Wall 1 - Back */}
      <mesh position={[0, wallHeight/2, -roomLength/2]} receiveShadow castShadow>
        <boxGeometry args={[roomWidth, wallHeight, 0.1]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      
      {/* Wall 2 - Front (with door opening) */}
      <group position={[0, wallHeight/2, roomLength/2]}>
        {/* Left part of front wall */}
        <mesh position={[-1.5, 0, 0]} receiveShadow castShadow>
          <boxGeometry args={[2, wallHeight, 0.1]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>
        
        {/* Right part of front wall */}
        <mesh position={[1.5, 0, 0]} receiveShadow castShadow>
          <boxGeometry args={[2, wallHeight, 0.1]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>
        
        {/* Top part of front wall (above door) */}
        <mesh position={[0, wallHeight/2 - 0.5, 0]} receiveShadow castShadow>
          <boxGeometry args={[1, 0.5, 0.1]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>
      </group>
      
      {/* Wall 3 - Left */}
      <mesh position={[-roomWidth/2, wallHeight/2, 0]} rotation={[0, Math.PI/2, 0]} receiveShadow castShadow>
        <boxGeometry args={[roomLength, wallHeight, 0.1]} />
        <meshStandardMaterial color="#dedede" />
      </mesh>
      
      {/* Wall 4 - Right (with window) */}
      <group position={[roomWidth/2, wallHeight/2, 0]} rotation={[0, -Math.PI/2, 0]}>
        {/* Bottom part of window wall */}
        <mesh position={[0, -0.75, 0]} receiveShadow castShadow>
          <boxGeometry args={[roomLength, 1, 0.1]} />
          <meshStandardMaterial color="#dedede" />
        </mesh>
        
        {/* Top part of window wall */}
        <mesh position={[0, 0.75, 0]} receiveShadow castShadow>
          <boxGeometry args={[roomLength, 1, 0.1]} />
          <meshStandardMaterial color="#dedede" />
        </mesh>
        
        {/* Left part of window wall */}
        <mesh position={[-2.5, 0, 0]} receiveShadow castShadow>
          <boxGeometry args={[2, wallHeight, 0.1]} />
          <meshStandardMaterial color="#dedede" />
        </mesh>
        
        {/* Right part of window wall */}
        <mesh position={[2.5, 0, 0]} receiveShadow castShadow>
          <boxGeometry args={[2, wallHeight, 0.1]} />
          <meshStandardMaterial color="#dedede" />
        </mesh>
        
        {/* Window glass */}
        <mesh position={[0, 0, 0.05]} receiveShadow>
          <planeGeometry args={[3, 1]} />
          <meshPhysicalMaterial 
            color="#88b6dc" 
            transparent={true} 
            opacity={0.2} 
            roughness={0}
            transmission={0.9}
          />
        </mesh>
      </group>
      
      {/* Sample Furniture */}
      {/* Sofa */}
      <group position={[-1.5, 0.4, -0.5]} rotation={[0, Math.PI, 0]}>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[2, 0.8, 0.8]} />
          <meshStandardMaterial color="#5c8aaf" />
        </mesh>
        {/* Sofa Back */}
        <mesh position={[0, 0.4, -0.35]} receiveShadow castShadow>
          <boxGeometry args={[2, 0.8, 0.1]} />
          <meshStandardMaterial color="#5c8aaf" />
        </mesh>
        {/* Sofa Arms */}
        <mesh position={[1, 0.2, 0]} receiveShadow castShadow>
          <boxGeometry args={[0.1, 0.4, 0.8]} />
          <meshStandardMaterial color="#5c8aaf" />
        </mesh>
        <mesh position={[-1, 0.2, 0]} receiveShadow castShadow>
          <boxGeometry args={[0.1, 0.4, 0.8]} />
          <meshStandardMaterial color="#5c8aaf" />
        </mesh>
      </group>
      
      {/* Coffee Table */}
      <mesh position={[0, 0.25, 0]} receiveShadow castShadow>
        <boxGeometry args={[1.2, 0.1, 0.8]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[1, 0.25, 0.6]} />
        <meshStandardMaterial color="#6b4423" />
      </mesh>
      
      {/* TV Stand */}
      <mesh position={[0, 0.3, -2]} receiveShadow castShadow>
        <boxGeometry args={[1.8, 0.6, 0.4]} />
        <meshStandardMaterial color="#2c2c2c" />
      </mesh>
      
      {/* TV */}
      <mesh position={[0, 1, -2]} receiveShadow castShadow>
        <boxGeometry args={[1.6, 0.8, 0.1]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} />
    </>
  );
}

export default function ThreeJsViewer() {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        <Room />
        <Lights />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
} 