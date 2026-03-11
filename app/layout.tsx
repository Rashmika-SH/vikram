import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astro Vikram | Vedic Astrology Consultations Worldwide',
  description: 'Explore the cosmic secrets of your destiny with personalized Vedic astrology consultations. Birth chart readings, marriage compatibility, career guidance, and spiritual insights for international clients.',
  keywords: 'astrology, vedic astrology, birth chart, horoscope, zodiac, palmistry, vastu, spiritual guidance, online consultation',
  authors: [{ name: 'Astro Vikram' }],
  openGraph: {
    title: 'Astro Vikram | Vedic Astrology Consultations',
    description: 'Personalized Vedic astrology consultations for global clients',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-cosmic-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
