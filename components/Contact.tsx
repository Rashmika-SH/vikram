'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '', email: '', country: '', phone: '', message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('YAAZ74jTHB92KiuiN')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const serviceId = 'service_o09xqru'
      const templateId = 'template_p1du3fl'

      // Use the form element directly with EmailJS
      if (formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current)
      }
      
      setSubmitStatus('success')
      
      // Reset form
      setFormData({ name: '', email: '', country: '', phone: '', message: '' })
      if (formRef.current) {
        formRef.current.reset()
      }
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
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
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              value={formData.name}
              className="w-full p-4 rounded-lg bg-cosmic-midnight border border-cosmic-gold/30 focus:border-cosmic-gold outline-none"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              value={formData.email}
              className="w-full p-4 rounded-lg bg-cosmic-midnight border border-cosmic-gold/30 focus:border-cosmic-gold outline-none"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              required
              value={formData.country}
              className="w-full p-4 rounded-lg bg-cosmic-midnight border border-cosmic-gold/30 focus:border-cosmic-gold outline-none"
              onChange={(e) => setFormData({...formData, country: e.target.value})}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              className="w-full p-4 rounded-lg bg-cosmic-midnight border border-cosmic-gold/30 focus:border-cosmic-gold outline-none"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              value={formData.message}
              className="w-full p-4 rounded-lg bg-cosmic-midnight border border-cosmic-gold/30 focus:border-cosmic-gold outline-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-4 bg-gradient-to-r from-cosmic-gold to-cosmic-blue rounded-lg font-bold glow-border ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center"
              >
                ✓ Message sent successfully! We will contact you soon.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center"
              >
                ✗ Failed to send message. Please try again or contact us via WhatsApp.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
