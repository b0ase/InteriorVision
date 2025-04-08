'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { FloorPlanData, Room as RoomType } from '@/lib/floorPlanProcessor';

interface RoomProps {
  room: RoomType;
}

function Room({ room }: RoomProps) {
  const { dimensions, windows = [], doors = [] } = room;
  const { width, length, height } = dimensions;
  
  return (
    <group position={[0, 0, 0]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[width, length]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, height, 0]} receiveShadow>
        <planeGeometry args={[width, length]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Walls */}
      {/* Back Wall */}
      <mesh position={[0, height/2, -length/2]} receiveShadow castShadow>
        <boxGeometry args={[width, height, 0.1]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      
      {/* Front Wall with Doors */}
      <group position={[0, height/2, length/2]}>
        {doors.filter(d => d.wall === 'front').map((door, index) => {
          const doorStart = width * (door.position - door.width/2);
          const doorEnd = width * (door.position + door.width/2);
          const leftWallWidth = doorStart + width/2;
          const rightWallWidth = width/2 - doorEnd;
          
          return (
            <React.Fragment key={`front-door-${index}`}>
              {/* Left part of wall */}
              {leftWallWidth > 0 && (
                <mesh position={[-width/2 + leftWallWidth/2, 0, 0]} receiveShadow castShadow>
                  <boxGeometry args={[leftWallWidth, height, 0.1]} />
                  <meshStandardMaterial color="#e8e8e8" />
                </mesh>
              )}
              {/* Right part of wall */}
              {rightWallWidth > 0 && (
                <mesh position={[width/2 - rightWallWidth/2, 0, 0]} receiveShadow castShadow>
                  <boxGeometry args={[rightWallWidth, height, 0.1]} />
                  <meshStandardMaterial color="#e8e8e8" />
                </mesh>
              )}
              {/* Top part of wall above door */}
              <mesh position={[width * (door.position - 0.5), height/2 - door.height/2, 0]} receiveShadow castShadow>
                <boxGeometry args={[door.width * width, height - door.height, 0.1]} />
                <meshStandardMaterial color="#e8e8e8" />
              </mesh>
            </React.Fragment>
          );
        })}
      </group>
      
      {/* Left Wall */}
      <mesh position={[-width/2, height/2, 0]} rotation={[0, Math.PI/2, 0]} receiveShadow castShadow>
        <boxGeometry args={[length, height, 0.1]} />
        <meshStandardMaterial color="#dedede" />
      </mesh>
      
      {/* Right Wall with Windows */}
      <group position={[width/2, height/2, 0]} rotation={[0, -Math.PI/2, 0]}>
        {windows.filter(w => w.wall === 'right').map((window, index) => {
          const bottomHeight = height/2 - window.height/2;
          const topHeight = height/2 - window.height/2;
          
          return (
            <React.Fragment key={`right-window-${index}`}>
              {/* Bottom part of wall */}
              <mesh position={[0, -height/2 + bottomHeight/2, 0]} receiveShadow castShadow>
                <boxGeometry args={[length, bottomHeight, 0.1]} />
                <meshStandardMaterial color="#dedede" />
              </mesh>
              
              {/* Top part of wall */}
              <mesh position={[0, height/2 - topHeight/2, 0]} receiveShadow castShadow>
                <boxGeometry args={[length, topHeight, 0.1]} />
                <meshStandardMaterial color="#dedede" />
              </mesh>
              
              {/* Window glass */}
              <mesh position={[0, 0, 0.05]} receiveShadow>
                <planeGeometry args={[window.width * length, window.height]} />
                <meshPhysicalMaterial 
                  color="#88b6dc" 
                  transparent={true} 
                  opacity={0.2} 
                  roughness={0}
                  transmission={0.9}
                />
              </mesh>
            </React.Fragment>
          );
        })}
      </group>
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

interface ThreeJsViewerProps {
  floorPlanData?: FloorPlanData;
}

export default function ThreeJsViewer({ floorPlanData }: ThreeJsViewerProps) {
  if (!floorPlanData || floorPlanData.rooms.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100">
        <p className="text-slate-500">No floor plan data available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        {floorPlanData.rooms.map((room, index) => (
          <Room key={index} room={room} />
        ))}
        <Lights />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
} 