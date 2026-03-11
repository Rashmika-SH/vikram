'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cosmic-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 sm:space-x-3"
        >
          <motion.div 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden glow-border"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/logo.jpeg" 
              alt="Astro Vikram Logo"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <span className="text-lg sm:text-xl font-bold glow-text">Astro Vikram</span>
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

        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base bg-gradient-to-r from-cosmic-gold to-cosmic-blue rounded-full font-semibold glow-border"
          >
            Book Now
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-cosmic-gold block"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-cosmic-gold block"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-cosmic-gold block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cosmic-black/95 backdrop-blur-md border-t border-cosmic-gold/20"
          >
            <ul className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-lg"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      setMobileMenuOpen(false)
                      // Small delay to let menu close before scrolling
                      setTimeout(() => {
                        const element = document.getElementById(item.toLowerCase())
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }, 300)
                      e.preventDefault()
                    }}
                    className="block py-2 hover:text-cosmic-gold transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    setTimeout(() => {
                      const element = document.getElementById('contact')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }, 300)
                    e.preventDefault()
                  }}
                  className="block w-full py-3 text-center bg-gradient-to-r from-cosmic-gold to-cosmic-blue rounded-full font-semibold glow-border"
                >
                  Book Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
