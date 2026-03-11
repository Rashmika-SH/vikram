# 🎨 Visual Customization Guide

## 🌟 Understanding the Layers

Your rotating zodiac wheel has multiple visual layers:

```
┌─────────────────────────────────────┐
│  Layer 5: Content (Your website)   │ ← Glassmorphism sections
├─────────────────────────────────────┤
│  Layer 4: Starfield particles       │ ← 100-1000 twinkling stars
├─────────────────────────────────────┤
│  Layer 3: Zodiac Wheel (rotating)   │ ← Your main image + glow
├─────────────────────────────────────┤
│  Layer 2: Cosmic particles          │ ← 3D floating particles
├─────────────────────────────────────┤
│  Layer 1: Nebula clouds             │ ← Animated purple/blue/cyan
├─────────────────────────────────────┤
│  Layer 0: Deep space background     │ ← Dark gradient base
└─────────────────────────────────────┘
```

## 🎯 Visual Effects Breakdown

### 1. Zodiac Wheel Rotation
```
Animation: Continuous 360° spin
Speed: 30 seconds per rotation
Direction: Clockwise
Effect: Smooth, seamless loop
```

### 2. Golden Glow Aura
```
Color: #ffd700 (Gold)
Intensity: 0.3 (30%)
Pulse: 3-second cycle
Shadow: 60px blur radius
```

### 3. Parallax Tilt
```
Mouse X: Rotates wheel left/right
Mouse Y: Rotates wheel up/down
Sensitivity: 0.1 (10% of mouse movement)
Smoothing: 0.05 (5% interpolation)
```

### 4. Floating Motion
```
Pattern: Sine wave
Amplitude: 0.1 units
Speed: 0.3 multiplier
Direction: Vertical (up/down)
```

### 5. Cosmic Particles
```
Count: 1000 stars
Size: 0.05 units
Colors: Yellow to white spectrum
Movement: Slow rotation + twinkle
Opacity: 0.6 (60%)
```

### 6. Nebula Clouds
```
Colors: Purple (#9333ea), Blue (#2563eb), Cyan (#06b6d4)
Blur: 120-150px
Animation: Pulse + drift
Opacity: 0.3 (30%)
```

## 🎨 Color Customization Map

### Where to Change Colors

#### Zodiac Wheel Glow
```typescript
// File: components/RotatingZodiacWheel.tsx
// Line: 48-49

emissive="#ffd700"           // Main glow color
emissiveIntensity={0.3}      // Brightness (0-1)
```

#### Glow Ring
```typescript
// Line: 56
color="#ffd700"              // Ring color
opacity={0.4}                // Ring opacity
```

#### Nebula Clouds
```tsx
// File: components/RotatingZodiacWheel.tsx or ZodiacWheelCSS.tsx
// Lines: 172-174

bg-purple-600   // Change to: bg-pink-600, bg-indigo-600, etc.
bg-blue-600     // Change to: bg-sky-600, bg-teal-600, etc.
bg-cyan-500     // Change to: bg-emerald-500, bg-lime-500, etc.
```

#### Background Gradient
```tsx
// Line: 169
from-[#0a0a1f] via-[#1a0b2e] to-[#0a0a0f]

// Try these alternatives:
from-[#1a0033] via-[#2d0052] to-[#0a0a0f]  // Deep purple
from-[#001a33] via-[#002952] to-[#0a0a0f]  // Deep blue
from-[#00331a] via-[#005229] to-[#0a0a0f]  // Deep green
```

## 🎭 Animation Speed Reference

### Rotation Speeds
```typescript
// Very Slow (60 seconds)
meshRef.current.rotation.z += 0.001

// Slow (45 seconds)
meshRef.current.rotation.z += 0.0015

// Normal (30 seconds) ← Default
meshRef.current.rotation.z += 0.002

// Fast (20 seconds)
meshRef.current.rotation.z += 0.003

// Very Fast (12 seconds)
meshRef.current.rotation.z += 0.005
```

### Floating Speeds
```typescript
// Slow floating
Math.sin(state.clock.elapsedTime * 0.1) * 0.1

// Normal floating ← Default
Math.sin(state.clock.elapsedTime * 0.3) * 0.1

// Fast floating
Math.sin(state.clock.elapsedTime * 0.5) * 0.1
```

### Particle Rotation
```typescript
// Slow
particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02

// Normal ← Default
particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05

// Fast
particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
```

## 📐 Size Adjustments

### Zodiac Wheel Size
```typescript
// Small (300px radius)
<circleGeometry args={[3, 128]} />

// Normal (400px radius) ← Default
<circleGeometry args={[4, 128]} />

// Large (500px radius)
<circleGeometry args={[5, 128]} />

// Extra Large (600px radius)
<circleGeometry args={[6, 128]} />
```

### Glow Ring Thickness
```typescript
// Thin ring
<ringGeometry args={[3.9, 4.1, 128]} />

// Normal ring ← Default
<ringGeometry args={[3.9, 4.2, 128]} />

// Thick ring
<ringGeometry args={[3.8, 4.3, 128]} />
```

### Particle Size
```typescript
// Small particles
size={0.03}

// Normal particles ← Default
size={0.05}

// Large particles
size={0.08}
```

## 🌈 Pre-made Color Schemes

### 1. Mystical Purple
```typescript
emissive="#9d4edd"
// Nebula: bg-purple-600, bg-violet-600, bg-fuchsia-500
// Background: from-[#1a0033] via-[#2d0052] to-[#0a0a0f]
```

### 2. Cosmic Blue
```typescript
emissive="#4a90e2"
// Nebula: bg-blue-600, bg-sky-600, bg-cyan-500
// Background: from-[#001a33] via-[#002952] to-[#0a0a0f]
```

### 3. Ethereal Cyan
```typescript
emissive="#06b6d4"
// Nebula: bg-cyan-600, bg-teal-600, bg-emerald-500
// Background: from-[#00331a] via-[#005229] to-[#0a0a0f]
```

### 4. Rose Gold
```typescript
emissive="#ff6b9d"
// Nebula: bg-pink-600, bg-rose-600, bg-red-500
// Background: from-[#330011] via-[#520029] to-[#0a0a0f]
```

### 5. Emerald Dream
```typescript
emissive="#10b981"
// Nebula: bg-emerald-600, bg-green-600, bg-lime-500
// Background: from-[#001a0f] via-[#00291a] to-[#0a0a0f]
```

## 💫 Intensity Adjustments

### Glow Intensity Levels
```typescript
// Subtle
emissiveIntensity={0.1}

// Soft
emissiveIntensity={0.2}

// Normal ← Default
emissiveIntensity={0.3}

// Bright
emissiveIntensity={0.5}

// Very Bright
emissiveIntensity={0.8}

// Maximum
emissiveIntensity={1.0}
```

### Opacity Levels
```typescript
// Wheel opacity (line 50)
opacity={0.7}   // Subtle
opacity={0.9}   // Normal ← Default
opacity={1.0}   // Solid

// Particle opacity (line 95)
opacity={0.4}   // Faint
opacity={0.6}   // Normal ← Default
opacity={0.8}   // Bright
```

## 🎯 Parallax Sensitivity

### Mouse Response Strength
```typescript
// Subtle (barely noticeable)
mousePosition.y * 0.05
mousePosition.x * 0.05

// Normal ← Default
mousePosition.y * 0.1
mousePosition.x * 0.1

// Strong (very responsive)
mousePosition.y * 0.2
mousePosition.x * 0.2

// Dramatic (extreme tilt)
mousePosition.y * 0.3
mousePosition.x * 0.3
```

### Smoothing Factor
```typescript
// Instant (no smoothing)
meshRef.current.rotation.x = targetRotationX

// Fast smoothing
meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.1

// Normal smoothing ← Default
meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05

// Slow smoothing (very smooth)
meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.02
```

## 📊 Performance vs Quality

### High Quality (Desktop)
```typescript
const particleCount = 2000
dpr={[1, 2]}
<circleGeometry args={[4, 256]} />  // High detail
```

### Balanced (Default)
```typescript
const particleCount = 1000
dpr={[1, 2]}
<circleGeometry args={[4, 128]} />  // Normal detail
```

### Performance (Mobile)
```typescript
const particleCount = 300
dpr={[1, 1]}
<circleGeometry args={[4, 64]} />   // Low detail
```

## 🎨 Glassmorphism Customization

### Light Glass
```css
.glass-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Dark Glass
```css
.glass-section {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Colored Glass
```css
.glass-section-purple {
  background: rgba(157, 78, 221, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(157, 78, 221, 0.3);
}
```

## 🔍 Visual Testing Checklist

- [ ] Wheel rotates smoothly without stuttering
- [ ] Glow effect is visible but not overwhelming
- [ ] Parallax responds to mouse movement
- [ ] Particles are visible and twinkling
- [ ] Nebula clouds are subtle in background
- [ ] Content is readable over background
- [ ] Colors match your brand
- [ ] Performance is acceptable (30+ FPS)
- [ ] Mobile version looks good
- [ ] No visual glitches or artifacts

---

Use this guide to fine-tune every visual aspect of your rotating zodiac wheel! 🎨✨
