'use client'

export default function ZodiacWheelPlaceholder() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0b2e] to-[#0a0a0f]" />
      
      {/* Animated nebula clouds */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] animate-nebula-1" />
      </div>

      {/* Placeholder zodiac wheel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        <div className="relative w-full h-full animate-spin-slow">
          {/* Circular placeholder with zodiac symbols */}
          <div className="w-full h-full rounded-full border-4 border-yellow-500/40 flex items-center justify-center"
               style={{ boxShadow: '0 0 60px rgba(255, 215, 0, 0.6), inset 0 0 60px rgba(255, 215, 0, 0.2)' }}>
            
            {/* Center circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-500/30 to-purple-500/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-4xl">☉</span>
              </div>
            </div>

            {/* Zodiac symbols around the circle */}
            {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180)
              const radius = 280
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              
              return (
                <div
                  key={i}
                  className="absolute text-2xl text-yellow-400/80"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  {symbol}
                </div>
              )
            })}

            {/* Instruction text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center text-yellow-400/60 text-sm max-w-xs px-4">
                <p className="mb-2">Add your zodiac wheel image:</p>
                <code className="text-xs bg-black/30 px-2 py-1 rounded">
                  /public/zodiac-wheel.jpg
                </code>
              </div>
            </div>
          </div>

          {/* Outer glow effect */}
          <div className="absolute inset-[-20px] rounded-full bg-gradient-radial from-yellow-500/20 via-yellow-500/5 to-transparent animate-pulse-slow" />
        </div>
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
