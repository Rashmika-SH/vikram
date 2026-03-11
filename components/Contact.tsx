'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '', email: '', country: '', phone: '', message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
  }

  return (
    <section id="contact" ref={ref} className="relative py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 glow-text">Connect With Us</h2>
          <p className="text-xl text-gray-400">Begin your cosmic journey today</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <h3 className="text-2xl font-bold mb-6 text-cosmic-gold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">📧</span>
                <div>
                  <div className="font-bold">Email</div>
                  <div className="text-gray-400">Vikramgovindu499@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl">📱</span>
                <div>
                  <div className="font-bold">WhatsApp</div>
                  <div className="text-gray-400">+61 406 411 099</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl">🌍</span>
                <div>
                  <div className="font-bold">Available Worldwide</div>
                  <div className="text-gray-400">Online consultations in all timezones</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-cosmic-midnight border border-cosmic-gold/30 focus:border-cosmic-gold outline-none"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-lg bg-cosmic-midnight border border-cosmic-gold/30 focus:border-cosmic-gold outline-none"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="text"
              placeholder="Country"
              required
              className="w-full p-4 rounded-lg bg-cosmic-midnight border border-cosmic-gold/30 focus:border-cosmic-gold outline-none"
              onChange={(e) => setFormData({...formData, country: e.target.value})}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-lg bg-cosmic-midnight border border-cosmic-gold/30 focus:border-cosmic-gold outline-none"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className="w-full p-4 rounded-lg bg-cosmic-midnight border border-cosmic-gold/30 focus:border-cosmic-gold outline-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-cosmic-gold to-cosmic-blue rounded-lg font-bold glow-border"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
