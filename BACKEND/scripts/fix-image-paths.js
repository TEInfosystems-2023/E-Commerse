const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..', 'public', 'images', 'fashion');
const ops = [
  { src: 'ethnic-wear/silk-sare.jpg', dest: 'ethnic-wear/silk-saree.jpg' },
  { src: 'watches/minimilist.jpeg', dest: 'watches/minimalist-watch.jpeg' },
  { src: 'kids-fashion/kids-graphic-tee.avif', dest: 'kids-fashion/kids-sneakers.webp' }
];
for (const op of ops) {
  const srcPath = path.join(root, op.src);
  const destPath = path.join(root, op.dest);
  if (!fs.existsSync(srcPath)) {
    console.error('Missing source file:', srcPath);
    process.exit(1);
  }
  fs.copyFileSync(srcPath, destPath);
  console.log('Created', op.dest);
}
