const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'public', 'images', 'fashion');
const map = {
  'mens-wear': ['slim-fit-casual-shirt.jpg', 'denim-jeans.jpg', 'bomber-jacket.jpg', 'athletic-joggers.jpg', 'casual-sneakers.jpg'],
  'womens-wear': ['floral-maxi-dress.jpg', 'chiffon-blouse.jpg', 'a-line-skirt.jpg', 'denim-jacket.jpg', 'strappy-sandals.jpg'],
  'ethnic-wear': ['embroidered-kurta-set.jpg', 'silk-saree.jpg', 'printed-lehenga.jpg', 'designer-dupatta.jpg', 'kurta-pajama-set.jpg'],
  'western-wear': ['graphic-tee.jpg', 'tailored-blazer.jpg', 'skinny-denim-jeans.jpg', 'midi-skirt.jpg', 'leather-belt.jpg'],
  'footwear': ['running-shoes.jpg', 'leather-loafers.jpg', 'ankle-boots.jpg', 'slip-on-sandals.jpg', 'high-top-sneakers.jpg'],
  'watches': ['minimalist-watch.jpg', 'sports-chronograph.jpg', 'gold-bracelet-watch.jpg', 'digital-smartwatch.jpg', 'leather-strap-watch.jpg'],
  'bags': ['leather-tote-bag.jpg', 'canvas-backpack.jpg', 'crossbody-bag.jpg', 'travel-duffel.jpg', 'clutch-purse.jpg'],
  'jewellery': ['pearl-necklace.jpg', 'gold-hoop-earrings.jpg', 'charm-bracelet.jpg', 'statement-ring.jpg', 'anklet-set.jpg'],
  'sportswear': ['performance-leggings.jpg', 'running-tank-top.jpg', 'training-shorts.jpg', 'yoga-top.jpg', 'sports-jacket.jpg'],
  'kids-fashion': ['kids-graphic-tee.jpg', 'playtime-overalls.jpg', 'girls-ruffle-dress.jpg', 'boys-cargo-shorts.jpg', 'kids-sneakers.jpg']
};

const jpegBase64 =
  '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAEDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUGB//EACMQAAICAQMEAgMAAAAAAAAAAAECAwQRAAUSIRMxQWFxkbH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAMREiH/2gAMAwEAAhEDEQA/AK0A//Z';
const bytes = Buffer.from(jpegBase64, 'base64');

for (const [slug, files] of Object.entries(map)) {
  const dir = path.join(root, slug);
  fs.mkdirSync(dir, { recursive: true });
  for (const file of files) {
    fs.writeFileSync(path.join(dir, file), bytes);
  }
}

console.log('Created JPEG image files in', root);