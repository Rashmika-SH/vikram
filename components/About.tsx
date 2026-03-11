'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const timeline = [
    { year: '2008', event: 'Began spiritual journey and Vedic studies' },
    { year: '2012', event: 'Certified in Advanced Vedic Astrology' },
    { year: '2015', event: 'Started international consultations' },
    { year: '2020', event: 'Expanded to digital cosmic temple platform' },
    { year: '2024', event: 'Served 10,000+ clients across 50+ countries' },
  ]

  return (
    <section id="about" ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 glow-text">About the Astrologer</h2>
          <p className="text-xl text-gray-400">A journey through wisdom</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md mx-auto rounded-2xl cosmic-gradient glow-border p-2">
              <div className="w-full rounded-xl overflow-hidden">
                <img 
                  src="/about.jpeg" 
                  alt="Astro Vikram" 
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-300 mb-6">
              With over 30+ years of experience in Vedic astrology, palmistry, and spiritual guidance, 
              I have dedicated my life to helping individuals discover their true cosmic purpose. 
              My approach combines ancient wisdom with modern understanding to provide accurate, 
              compassionate, and transformative consultations.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Trained under renowned masters in India, I specialize in birth chart analysis, 
              relationship compatibility, career guidance, and spiritual counseling for clients worldwide.
            </p>

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-3 rounded-lg cosmic-gradient glow-border"
                >
                  <div className="text-2xl font-bold text-cosmic-gold">{item.year}</div>
                  <div className="text-gray-300">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
