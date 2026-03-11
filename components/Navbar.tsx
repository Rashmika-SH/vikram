'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Services', 'About', 'Testimonials', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cosmic-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-blue flex items-center justify-center glow-border">
            <span className="text-2xl">🔱</span>
          </div>
          <span className="text-xl font-bold glow-text">Astro Vikram</span>
        </motion.div>

        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: '#ffd700' }}
              className="cursor-pointer transition-colors"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-gradient-to-r from-cosmic-gold to-cosmic-blue rounded-full font-semibold glow-border"
        >
          Book Now
        </motion.a>
      </div>
    </motion.nav>
  )
}
