'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 px-4 sm:px-6 border-t border-cosmic-gold/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-full overflow-hidden"
                animate={{ 
                  y: [0, -8, 0],
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
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <span className="font-bold glow-text">Astro Vikram</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your gateway to cosmic wisdom and spiritual enlightenment through Vedic astrology.
            </p>
            <div className="mt-4 space-y-1 text-sm text-gray-400">
              <p>📧 Vikramgovindu499@gmail.com</p>
              <p>📱 +61 406 411 099</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-cosmic-gold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-cosmic-gold">Home</a></li>
              <li><a href="#services" className="hover:text-cosmic-gold">Services</a></li>
              <li><a href="#about" className="hover:text-cosmic-gold">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-cosmic-gold">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Birth Chart Reading</li>
              <li>Marriage Compatibility</li>
              <li>Career Guidance</li>
              <li>Vastu Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-cosmic-gold">Connect</h4>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.2 }} className="text-2xl">📘</motion.a>
              <motion.a whileHover={{ scale: 1.2 }} className="text-2xl">📷</motion.a>
              <motion.a whileHover={{ scale: 1.2 }} className="text-2xl">🐦</motion.a>
              <motion.a whileHover={{ scale: 1.2 }} className="text-2xl">💼</motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-cosmic-gold/20 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2024 Astro Vikram. All rights reserved.</p>
          <p className="mt-2">Designed with cosmic energy and spiritual wisdom</p>
        </div>
      </div>
    </footer>
  )
}
