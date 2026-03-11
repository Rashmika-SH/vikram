'use client'

import { useEffect, useState } from 'react'
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
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Smooth scroll
    document.documentElement.classList.add('scroll-smooth')
    
    // Set loaded after a brief moment
    setIsLoaded(true)
  }, [])

  return (
    <>
      <LoadingScreen />
      <main className="relative min-h-screen" style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s' }}>
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
    </>
  )
}
