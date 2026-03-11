# ⚡ Quick Reference - Zodiac Wheel

## 🎯 Essential Files

```
components/RotatingZodiacWheel.tsx  → 3D WebGL version (active)
components/ZodiacWheelCSS.tsx       → CSS-only version (backup)
app/page.tsx                        → Main page (imports wheel)
app/globals.css                     → Animations & styles
public/zodiac-wheel.jpg             → YOUR IMAGE GOES HERE
```

## 🚀 Quick Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
```

## 🎨 Common Adjustments

### Rotation Speed
```typescript
// RotatingZodiacWheel.tsx, line 35
meshRef.current.rotation.z += 0.002  // ← Change this number
// 0.001 = slow | 0.002 = normal | 0.005 = fast
```

### Glow Color
```typescript
// RotatingZodiacWheel.tsx, line 48
emissive="#ffd700"  // ← Change hex color
// #ffd700 = gold | #4a90e2 = blue | #9d4edd = purple
```

### Wheel Size
```typescript
// RotatingZodiacWheel.tsx, line 46
<circleGeometry args={[4, 128]} />  // ← First number = radius
// 3 = small | 4 = normal | 5 = large
```

### Particle Count
```typescript
// RotatingZodiacWheel.tsx, line 68
const particleCount = 1000  // ← Change this number
// 500 = fewer | 1000 = normal | 2000 = more
```

### Parallax Strength
```typescript
// RotatingZodiacWheel.tsx, lines 38-39
mousePosition.y * 0.1  // ← Change multiplier
// 0.05 = subtle | 0.1 = normal | 0.3 = dramatic
```

## 🔄 Switch Versions

### Use 3D Version (Default)
```typescript
// app/page.tsx
import RotatingZodiacWheel from '@/components/RotatingZodiacWheel'
```

### Use CSS Version
```typescript
// app/page.tsx
import RotatingZodiacWheel from '@/components/ZodiacWheelCSS'
```

## 🎭 CSS Animation Speeds

```css
/* globals.css */
.animate-spin-slow {
  animation: spin-slow 30s linear infinite;  /* ← Change 30s */
}
/* 60s = slow | 30s = normal | 15s = fast */
```

## 🖼️ Image Setup

1. Save zodiac wheel as `zodiac-wheel.jpg`
2. Place in `/public` folder
3. Restart dev server if needed

**Alternative formats:**
- PNG: Change line 21 to `'/zodiac-wheel.png'`
- WebP: Change line 21 to `'/zodiac-wheel.webp'`

## 🎨 Glassmorphism

Add to any component:
```tsx
<div className="glass-section p-8 rounded-lg">
  Content here
</div>
```

## 📱 Mobile Optimization

### Reduce Particles on Mobile
```typescript
const particleCount = window.innerWidth < 768 ? 300 : 1000
```

### Lower Quality on Mobile
```typescript
dpr={window.innerWidth < 768 ? [1, 1] : [1, 2]}
```

## 🐛 Quick Fixes

### Image not loading?
- Check path: `/public/zodiac-wheel.jpg`
- Check console (F12) for errors
- Try PNG format instead

### Performance issues?
- Reduce particles: `const particleCount = 500`
- Lower DPR: `dpr={[1, 1]}`
- Switch to CSS version

### Wheel not rotating?
- Check console for errors
- Verify Three.js installed: `npm install`
- Restart dev server

## 🎯 Line Numbers Reference

| What | File | Line |
|------|------|------|
| Rotation speed | RotatingZodiacWheel.tsx | 35 |
| Glow color | RotatingZodiacWheel.tsx | 48 |
| Wheel size | RotatingZodiacWheel.tsx | 46 |
| Particle count | RotatingZodiacWheel.tsx | 68 |
| Parallax strength | RotatingZodiacWheel.tsx | 38-39 |
| Image path | RotatingZodiacWheel.tsx | 21 |
| CSS rotation speed | globals.css | 95 |

## 🌈 Color Presets

```typescript
// Gold (default)
emissive="#ffd700"

// Mystical Purple
emissive="#9d4edd"

// Cosmic Blue
emissive="#4a90e2"

// Ethereal Cyan
emissive="#06b6d4"

// Rose Gold
emissive="#ff6b9d"
```

## ⚡ Performance Targets

- Desktop: 60 FPS
- Mobile: 30+ FPS
- Image size: < 2MB
- Resolution: 2048x2048px

---

**Need more details?** See `IMPLEMENTATION_GUIDE.md`
