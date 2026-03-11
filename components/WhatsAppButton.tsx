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
      className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-4xl shadow-lg z-50 animate-pulse-glow"
      style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)' }}
    >
      💬
    </motion.a>
  )
}
