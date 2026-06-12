const fs = require('fs');
const path = require('path');
const data = require('../src/data');
const root = path.join(__dirname, '..', 'public', 'images');
const allFiles = new Set();
function walk(dir, prefix = '') {
  for (const dirEntry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (dirEntry.isDirectory()) {
      walk(path.join(dir, dirEntry.name), path.join(prefix, dirEntry.name));
    } else {
      allFiles.add(path.posix.join(prefix.replace(/\\/g, '/'), dirEntry.name));
    }
  }
}
walk(root);
const wrong = [];
const normalize = (p) => p.replace(/^\//, '').replace(/\\/g, '/').replace(/^images\//, '').replace(/^\//, '');
for (const category of data.categories) {
  if (!category.subcategories) continue;
  for (const sub of category.subcategories) {
    if (sub.products) {
      for (const product of sub.products) {
        const rel = normalize(product.image);
        if (!allFiles.has(rel)) {
          wrong.push({ type: 'product', path: product.image, expected: rel });
        }
      }
    }
    if (sub.photos) { 
      for (const photo of sub.photos) {
        if (photo.url.startsWith('/images/')) {
          const rel = normalize(photo.url);
          if (!allFiles.has(rel)) {
            wrong.push({ type: 'photo', path: photo.url, expected: rel });
          }
        }
      }
    }
  }
}
console.log('files:', allFiles.size);
console.log(wrong.length ? JSON.stringify(wrong, null, 2) : 'all matched');
