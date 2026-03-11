'use client'

import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/61406411099"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl sm:text-4xl shadow-lg z-50 animate-pulse-glow"
      style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)' }}
    >
      💬
    </motion.a>
  )
}
