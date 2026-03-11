const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, '..', 'public', 'zodiac-wheel.jpg');
const alternativePaths = [
  path.join(__dirname, '..', 'public', 'zodiac-wheel.jpeg'),
  path.join(__dirname, '..', 'public', 'zodiac-wheel.png'),
  path.join(__dirname, '..', 'public', 'zodiac-wheel.webp'),
];

console.log('\n🔍 Checking for zodiac wheel image...\n');

if (fs.existsSync(imagePath)) {
  console.log('✅ Found: zodiac-wheel.jpg');
  const stats = fs.statSync(imagePath);
  const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`📊 Size: ${fileSizeInMB} MB`);
  
  if (stats.size > 5 * 1024 * 1024) {
    console.log('⚠️  Warning: Image is larger than 5MB. Consider optimizing for better performance.');
  } else {
    console.log('✅ Image size is optimal!');
  }
  
  console.log('\n🚀 You\'re ready to go! Run: npm run dev\n');
} else {
  console.log('❌ zodiac-wheel.jpg not found in /public folder\n');
  
  // Check for alternative formats
  let foundAlternative = false;
  alternativePaths.forEach(altPath => {
    if (fs.existsSync(altPath)) {
      const fileName = path.basename(altPath);
      const stats = fs.statSync(altPath);
      const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
      
      console.log(`✅ Found alternative: ${fileName}`);
      console.log(`📊 Size: ${fileSizeInMB} MB`);
      
      if (stats.size > 5 * 1024 * 1024) {
        console.log('⚠️  Warning: Image is larger than 5MB. Consider optimizing for better performance.');
      } else {
        console.log('✅ Image size is optimal!');
      }
      
      console.log(`✅ Component already updated to use '/${fileName}'`);
      console.log('\n🚀 You\'re ready to go! Run: npm run dev\n');
      foundAlternative = true;
    }
  });
  
  if (!foundAlternative) {
    console.log('📝 To fix this:\n');
    console.log('1. Save your zodiac wheel image as: zodiac-wheel.jpg');
    console.log('2. Place it in the /public folder');
    console.log('3. Run this script again to verify\n');
    console.log('💡 Tip: You can also use the placeholder version:');
    console.log('   Import ZodiacWheelPlaceholder instead of RotatingZodiacWheel\n');
  }
}
