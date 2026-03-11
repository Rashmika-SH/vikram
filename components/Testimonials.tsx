'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const testimonials = [
  { name: 'Sarah Johnson', country: 'USA', rating: 5, text: 'The birth chart reading was incredibly accurate. It helped me understand my life purpose and make better career decisions.' },
  { name: 'Raj Patel', country: 'UK', rating: 5, text: 'Amazing marriage compatibility analysis! The insights were spot-on and helped strengthen our relationship.' },
  { name: 'Maria Garcia', country: 'Spain', rating: 5, text: 'Professional, compassionate, and deeply insightful. The consultation exceeded all my expectations.' },
  { name: 'David Chen', country: 'Singapore', rating: 5, text: 'The career guidance was transformative. Within months, I found my dream job aligned with my cosmic path.' },
  { name: 'Emma Wilson', country: 'Australia', rating: 5, text: 'Highly recommend! The Vastu consultation brought positive energy and prosperity to our home.' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section id="testimonials" ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 glow-text">Client Testimonials</h2>
          <p className="text-xl text-gray-400">Hear from souls we've guided</p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="p-8 rounded-2xl cosmic-gradient glow-border"
          >
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-cosmic-gold text-2xl">⭐</span>
              ))}
            </div>
            <p className="text-xl text-gray-300 mb-6 italic text-center">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="text-center">
              <div className="font-bold text-cosmic-gold">{testimonials[currentIndex].name}</div>
              <div className="text-gray-400">{testimonials[currentIndex].country}</div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-cosmic-gold w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
