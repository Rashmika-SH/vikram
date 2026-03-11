'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'

const palmAreas = [
  { id: 1, x: 45, y: 35, title: 'Heart Line', description: 'Reveals emotional depth and relationship patterns' },
  { id: 2, x: 50, y: 50, title: 'Head Line', description: 'Indicates intellectual capacity and decision-making style' },
  { id: 3, x: 40, y: 60, title: 'Life Line', description: 'Shows vitality, health, and major life changes' },
  { id: 4, x: 65, y: 45, title: 'Fate Line', description: 'Represents career path and life purpose' },
  { id: 5, x: 60, y: 30, title: 'Sun Line', description: 'Indicates success, creativity, and public recognition' },
]

export default function PalmReading() {
  const [activeArea, setActiveArea] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const palmRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!palmRef.current) return
    
    const rect = palmRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    
    setMousePosition({ x: x * 20, y: y * 20 }) // Multiply for more movement
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 glow-text">Mystical Palm Reading</h2>
          {/* <p className="text-xl text-gray-400">Hover over the palm to reveal your destiny lines</p> */}
        </motion.div>

        <div className="relative flex justify-center items-center">
          <motion.div
            ref={palmRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-2xl aspect-square cursor-pointer"
            style={{
              perspective: '1000px',
            }}
          >
            {/* 3D Palm Image */}
            <motion.div
              animate={{
                rotateY: mousePosition.x,
                rotateX: -mousePosition.y,
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full h-full"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/palm.png"
                  alt="Mystical Palm"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1)',
                  }}
                  priority
                />
                
                {/* 3D Glow effect */}
                <div 
                  className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-purple-500/10 rounded-full blur-xl"
                  style={{
                    transform: 'translateZ(-50px)',
                  }}
                />
              </div>

              {/* Interactive hotspots - positioned on palm lines */}
              <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}>
                {palmAreas.map((area) => (
                  <motion.div
                    key={area.id}
                    className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                    style={{
                      left: `${area.x}%`,
                      top: `${area.y}%`,
                    }}
                    onMouseEnter={() => setActiveArea(area.id)}
                    onMouseLeave={() => setActiveArea(null)}
                    whileHover={{ scale: 1.5 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: area.id * 0.1, type: 'spring' }}
                  >
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md animate-pulse" />
                    
                    {/* Main hotspot */}
                    <div 
                      className={`relative w-full h-full rounded-full border-3 transition-all duration-300 flex items-center justify-center ${
                        activeArea === area.id 
                          ? 'bg-yellow-400/80 border-yellow-300 shadow-[0_0_30px_rgba(255,215,0,1)] scale-110' 
                          : 'bg-yellow-400/40 border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.6)]'
                      }`}
                    >
                      {/* Pulsing center dot */}
                      <div className={`w-2 h-2 rounded-full ${activeArea === area.id ? 'bg-white' : 'bg-yellow-200'} animate-ping`} />
                      
                      {/* Number label */}
                      <span className="absolute text-xs font-bold text-white drop-shadow-lg">
                        {area.id}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Info cards */}
            {palmAreas.map((area) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={activeArea === area.id ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-xl bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur-md border border-yellow-500/30 shadow-[0_0_30px_rgba(255,215,0,0.3)] max-w-xs z-20"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-200">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-gray-400 text-sm"
        >
          {/* Move your cursor over the palm to see it in 3D • Click the glowing points to learn more */}
        </motion.p>
      </div>
    </section>
  )
}
