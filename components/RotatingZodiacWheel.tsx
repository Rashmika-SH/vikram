'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'

function ZodiacWheel({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    // Load the zodiac wheel texture
    const loader = new TextureLoader()
    loader.load(
      '/zodiac-wheel.jpeg',
      (loadedTexture) => {
        setTexture(loadedTexture)
      },
      undefined,
      (error) => {
        console.error('Error loading zodiac wheel texture:', error)
      }
    )
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      // Continuous 360° rotation
      meshRef.current.rotation.z += 0.002

      // Parallax tilt effect based on mouse position
      const targetRotationX = mousePosition.y * 0.1
      const targetRotationY = mousePosition.x * 0.1
      
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.05

      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  if (!texture) return null

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <circleGeometry args={[4, 128]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.9}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function CosmicParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 1000

  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5

    const color = new THREE.Color()
    color.setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.7)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function RotatingZodiacWheel() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Cosmic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0b2e] to-[#0a0a0f]" />

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <spotLight
          position={[0, 0, 10]}
          angle={0.5}
          penumbra={1}
          intensity={1}
          color="#ffffff"
          castShadow
        />

        {/* Zodiac Wheel */}
        <ZodiacWheel mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}
