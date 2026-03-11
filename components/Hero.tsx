'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Suspense } from 'react'

function CosmicSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#4a90e2"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 glow-text"
        >
          Explore the Secrets
          <br />
          <span className="text-cosmic-gold">of Your Destiny</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300"
        >
          Personalized Vedic Astrology Consultations for Global Clients
          <br className="hidden sm:block" />
          Unlock Your Life Path Through Ancient Wisdom
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cosmic-gold to-yellow-600 rounded-full text-base sm:text-lg font-bold text-cosmic-black glow-border inline-block"
          >
            Book Your Astrology Reading
          </motion.a>
          <motion.a
            href="https://wa.me/61406411099"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-cosmic-gold rounded-full text-base sm:text-lg font-bold glow-border inline-block"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cosmic-gold">10K+</div>
            <div className="text-gray-400">Consultations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cosmic-gold">50+</div>
            <div className="text-gray-400">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cosmic-gold">30+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
