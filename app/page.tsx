'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import PalmReading from '@/components/PalmReading'
import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import WhatsAppButton from '@/components/WhatsAppButton'
import Starfield from '@/components/Starfield'
import RotatingZodiacWheel from '@/components/RotatingZodiacWheel'

export default function Home() {
  useEffect(() => {
    // Smooth scroll
    document.documentElement.classList.add('scroll-smooth')
  }, [])

  return (
    <main className="relative min-h-screen">
      <RotatingZodiacWheel />
      <Starfield />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <PalmReading />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
