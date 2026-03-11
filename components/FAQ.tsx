'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  { q: 'What is Vedic astrology?', a: 'Vedic astrology is an ancient Indian system of astrology that uses the sidereal zodiac and provides deep insights into karma, dharma, and life purpose.' },
  { q: 'How long is a consultation?', a: 'Standard consultations are 60 minutes, with extended 90-minute sessions available for comprehensive analysis.' },
  { q: 'Do you offer online consultations?', a: 'Yes! We provide online consultations via video call for clients worldwide, with flexible timezone scheduling.' },
  { q: 'What information do I need to provide?', a: 'Please provide your exact birth date, time, and place for accurate chart analysis.' },
  { q: 'How accurate are the predictions?', a: 'Our predictions have a 95% accuracy rate based on client feedback and follow-up consultations.' },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 glow-text">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl cosmic-gradient glow-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <span className="text-cosmic-gold text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-300"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
