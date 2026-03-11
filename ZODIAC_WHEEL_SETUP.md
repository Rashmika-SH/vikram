# Rotating Zodiac Wheel Setup Instructions

## 🌟 Overview
Your website now features an immersive 360° rotating zodiac wheel background with 3D effects, cosmic particles, and interactive parallax motion.

## 📁 Required Image Setup

### Step 1: Save Your Zodiac Wheel Image
1. Save the zodiac wheel image you provided as `zodiac-wheel.jpg`
2. Place it in the `/public` folder of your project
3. The path should be: `/public/zodiac-wheel.jpg`

### Alternative Image Formats
If you prefer PNG or WebP format:
- Save as `zodiac-wheel.png` or `zodiac-wheel.webp`
- Update line 21 in `components/RotatingZodiacWheel.tsx`:
  ```typescript
  loader.load('/zodiac-wheel.png', // or .webp
  ```

## 🎨 Features Implemented

### ✅ 3D Rotating Zodiac Wheel
- Smooth 360° continuous rotation
- Seamless infinite loop
- No glitches or jumps

### ✅ Cosmic Background
- Deep space environment
- Animated nebula clouds (purple, blue, cyan)
- Glowing particle effects (1000+ stars)
- Subtle movement and pulsing

### ✅ Interactive Effects
- Parallax tilt on mouse movement
- Subtle floating animation
- Golden glow aura around wheel edges
- Illuminated zodiac symbols

### ✅ Performance Optimized
- GPU-accelerated rendering
- Responsive design (desktop & mobile)
- Efficient Three.js implementation
- Lazy texture loading

### ✅ Layered Content
- Background sits behind all content
- Content sections can use glassmorphism
- Transparent overlays supported

## 🎯 How to Use Glassmorphism on Content

Add the `glass-section` class to any component for a frosted glass effect:

```tsx
<div className="glass-section p-8 rounded-lg">
  Your content here
</div>
```

## 🔧 Customization Options

### Adjust Rotation Speed
In `components/RotatingZodiacWheel.tsx`, line 35:
```typescript
meshRef.current.rotation.z += 0.002 // Increase for faster, decrease for slower
```

### Change Glow Color
Line 48-49:
```typescript
emissive="#ffd700" // Change hex color
emissiveIntensity={0.3} // Adjust brightness (0-1)
```

### Modify Parallax Sensitivity
Lines 38-39:
```typescript
const targetRotationX = mousePosition.y * 0.1 // Adjust multiplier
const targetRotationY = mousePosition.x * 0.1 // Adjust multiplier
```

### Particle Count
Line 68:
```typescript
const particleCount = 1000 // Increase/decrease for more/fewer stars
```

## 🚀 Running Your Project

```bash
npm run dev
```

Visit `http://localhost:3000` to see your rotating zodiac wheel in action!

## 📱 Mobile Optimization

The animation automatically adjusts for mobile devices:
- Reduced particle count on smaller screens
- Optimized rendering performance
- Touch-friendly (no parallax on mobile)

## 🎭 Animation Details

- **Rotation**: 0.002 radians per frame (~0.11°/frame)
- **Full rotation**: ~30 seconds per complete 360°
- **Floating**: Sine wave with 0.3 speed multiplier
- **Particles**: Rotating at 0.05 radians/frame
- **Nebula pulse**: 4-second cycle

## 🐛 Troubleshooting

### Image Not Loading
- Verify image is in `/public/zodiac-wheel.jpg`
- Check browser console for errors
- Ensure image format matches code

### Performance Issues
- Reduce `particleCount` (line 68)
- Lower `dpr` in Canvas (line 159): `dpr={[1, 1]}`
- Disable nebula effects temporarily

### Rotation Too Fast/Slow
- Adjust rotation speed (line 35)
- Typical range: 0.001 (slow) to 0.005 (fast)

## 💡 Tips

1. Use high-resolution zodiac wheel image (2048x2048 or higher)
2. Transparent PNG works best for clean edges
3. Test on multiple devices for performance
4. Adjust opacity if wheel is too prominent

## 🎨 Color Scheme

- Primary glow: `#ffd700` (Gold)
- Nebula colors: Purple, Blue, Cyan
- Background: Deep cosmic black/purple gradient

Enjoy your mystical rotating zodiac wheel! ✨🔮
