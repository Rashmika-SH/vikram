'use client'

import { useEffect, useState } from 'react'

export default function ZodiacWheelCSS() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0b2e] to-[#0a0a0f]" />
      
      {/* Animated nebula clouds */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] animate-nebula-1" />
      </div>

      {/* Rotating Zodiac Wheel */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        style={{
          transform: `translate(-50%, -50%) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Main wheel with image */}
        <div className="relative w-full h-full animate-spin-slow">
          <img
            src="/zodiac-wheel.jpeg"
            alt="Zodiac Wheel"
            className="w-full h-full object-contain opacity-90 drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            onError={(e) => {
              // Fallback if image doesn't load
              e.currentTarget.style.display = 'none'
            }}
          />
          
          {/* Subtle glow ring */}
          <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-pulse-glow" 
               style={{ boxShadow: '0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)' }} 
          />
          
          {/* Outer glow effect */}
          <div className="absolute inset-[-20px] rounded-full bg-gradient-radial from-white/10 via-white/5 to-transparent animate-pulse-slow" />
        </div>
      </div>

      {/* Floating particles/stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Additional cosmic glow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-white/5 via-transparent to-transparent animate-pulse-slow" />
      </div>
    </div>
  )
}
