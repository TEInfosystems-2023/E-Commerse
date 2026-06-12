const categoriesMeta = [
  {
    id: 1,
    name: 'Fashion',
    description: 'Clothing, style, and accessories for every season.',
    subcategories: [
      {
        id: 1,
        name: "Men's Wear",
        description: 'Shirts, trousers, jackets and casual menswear staples.',
        products: [
          {
            id: 1,
            name: 'Slim Fit Casual Shirt',
            price: 29.99,
            sku: 'FASH-MEN-001',
            description: 'Lightweight cotton shirt with a modern slim fit.',
            image: '/images/fashion/mens-wear/slim-fit-casual-shirt.webp',
            stock: 120
          },
          {
            id: 2,
            name: 'Denim Jeans',
            price: 45.0,
            sku: 'FASH-MEN-002',
            description: 'Classic blue denim jeans with stretch for comfort.',
            image: '/images/fashion/mens-wear/denim-jeans.webp',
            stock: 85
          },
          {
            id: 3,
            name: 'Bomber Jacket',
            price: 69.99,
            sku: 'FASH-MEN-003',
            description: 'Warm bomber jacket with ribbed cuffs and collar.',
            image: '/images/fashion/mens-wear/bomber-jacket.avif',
            stock: 45
          },
          {
            id: 4,
            name: 'Athletic Joggers',
            price: 39.99,
            sku: 'FASH-MEN-004',
            description: 'Performance joggers designed for daily wear.',
            image: '/images/fashion/mens-wear/athletic-joggers.avif',
            stock: 100
          },
          {
            id: 5,
            name: 'Casual Sneakers',
            price: 55.0,
            sku: 'FASH-MEN-005',
            description: 'Versatile sneakers with comfortable cushioning.',
            image: '/images/fashion/mens-wear/casual-sneakers.webp',
            stock: 70
          }
        ]
      },
      {
        id: 2,
        name: "Women's Wear",
        description: 'Dresses, tops, skirts and fashionable womenswear pieces.',
        products: [
          {
            id: 1,
            name: 'Floral Maxi Dress',
            price: 54.99,
            sku: 'FASH-WOM-001',
            description: 'Flowing maxi dress with a fresh floral print.',
            image: '/images/fashion/womens-wear/floral-maxi-dress.webp',
            stock: 65
          },
          {
            id: 2,
            name: 'Chiffon Blouse',
            price: 34.99,
            sku: 'FASH-WOM-002',
            description: 'Elegant chiffon blouse with ruffled sleeves.',
            image: '/images/fashion/womens-wear/chiffon-blouse.webp',
            stock: 92
          },
          {
            id: 3,
            name: 'A-line Skirt',
            price: 38.5,
            sku: 'FASH-WOM-003',
            description: 'Comfortable A-line skirt for casual and work looks.',
            image: '/images/fashion/womens-wear/a-line-skirt.avif',
            stock: 75
          },
          {
            id: 4,
            name: 'Denim Jacket',
            price: 63.0,
            sku: 'FASH-WOM-004',
            description: 'Classic denim jacket with a soft relaxed fit.',
            image: '/images/fashion/womens-wear/denim-jacket.webp',
            stock: 54
          },
          {
            id: 5,
            name: 'Strappy Sandals',
            price: 42.0,
            sku: 'FASH-WOM-005',
            description: 'Summer sandals with cushioned footbed.',
            image: '/images/fashion/womens-wear/strappy-sandals.jpg',
            stock: 88
          }
        ]
      },
      {
        id: 3,
        name: 'Ethnic Wear',
        description: 'Traditional ethnic clothing and festive wear.',
        products: [
          {
            id: 1,
            name: 'Embroidered Kurta Set',
            price: 69.99,
            sku: 'FASH-ETH-001',
            description: 'Lightweight embroidered kurta with matching bottom.',
            image: '/images/fashion/ethnic-wear/embroidered-kurta-set.jpg',
            stock: 40
          },
          {
            id: 2,
            name: 'Silk Saree',
            price: 120.0,
            sku: 'FASH-ETH-002',
            description: 'Rich silk saree with traditional motif detailing.',
            image: '/images/fashion/ethnic-wear/silk-saree.jpg',
            stock: 28
          },
          {
            id: 3,
            name: 'Printed Lehenga',
            price: 89.5,
            sku: 'FASH-ETH-003',
            description: 'Festive lehenga skirt with elegant print and shimmer.',
            image: '/images/fashion/ethnic-wear/printed-lehenga.webp',
            stock: 33
          },
          {
            id: 4,
            name: 'Designer Dupatta',
            price: 24.99,
            sku: 'FASH-ETH-004',
            description: 'Soft dupatta with zari borders and tassel accents.',
            image: '/images/fashion/ethnic-wear/designer-dupatta.jpg',
            stock: 120
          },
          {
            id: 5,
            name: 'Kurta Pajama Set',
            price: 54.99,
            sku: 'FASH-ETH-005',
            description: 'Comfortable cotton kurta pajama set for daily wear.',
            image: '/images/fashion/ethnic-wear/kurta-pajama-set.webp',
            stock: 60
          }
        ]
      },
      {
        id: 4,
        name: 'Western Wear',
        description: 'Modern western styles like tops, jeans and suits.',
        products: [
          {
            id: 1,
            name: 'Graphic Tee',
            price: 19.99,
            sku: 'FASH-WES-001',
            description: 'Cotton graphic tee with bold print.',
            image: '/images/fashion/western-wear/graphic-tee.jpeg',
            stock: 140
          },
          {
            id: 2,
            name: 'Tailored Blazer',
            price: 79.99,
            sku: 'FASH-WES-002',
            description: 'Structured blazer perfect for work and evening outings.',
            image: '/images/fashion/western-wear/tailored-blazer.webp',
            stock: 38
          },
          {
            id: 3,
            name: 'Skinny Denim Jeans',
            price: 48.0,
            sku: 'FASH-WES-003',
            description: 'Stretch denim jeans with a slim silhouette.',
            image: '/images/fashion/western-wear/skinny-denim-jeans.webp',
            stock: 67
          },
          {
            id: 4,
            name: 'Midi Skirt',
            price: 34.5,
            sku: 'FASH-WES-004',
            description: 'Flowy midi skirt with a casual-chic style.',
            image: '/images/fashion/western-wear/midi-skirt.avif',
            stock: 72
          },
          {
            id: 5,
            name: 'Leather Belt',
            price: 22.0,
            sku: 'FASH-WES-005',
            description: 'Genuine leather belt with polished buckle.',
            image: '/images/fashion/western-wear/leather-belt.jpg',
            stock: 115
          }
        ]
      },
      {
        id: 5,
        name: 'Footwear',
        description: 'Shoes, sandals, boots and casual footwear.',
        products: [
          {
            id: 1,
            name: 'Running Shoes',
            price: 59.99,
            sku: 'FASH-FTW-001',
            description: 'Lightweight running shoes with breathable mesh.',
            image: '/images/fashion/footwear/running-shoes.avif',
            stock: 95
          },
          {
            id: 2,
            name: 'Leather Loafers',
            price: 65.0,
            sku: 'FASH-FTW-002',
            description: 'Classic loafers with a soft padded sole.',
            image: '/images/fashion/footwear/leather-loafers.webp',
            stock: 50
          },
          {
            id: 3,
            name: 'Ankle Boots',
            price: 74.99,
            sku: 'FASH-FTW-003',
            description: 'Stylish ankle boots for daily wear.',
            image: '/images/fashion/footwear/ankle-boots.jpg',
            stock: 42
          },
          {
            id: 4,
            name: 'Slip-on Sandals',
            price: 29.99,
            sku: 'FASH-FTW-004',
            description: 'Comfortable slip-on sandals with non-slip sole.',
            image: '/images/fashion/footwear/slip-on-sandals.avif',
            stock: 108
          },
          {
            id: 5,
            name: 'High-top Sneakers',
            price: 64.5,
            sku: 'FASH-FTW-005',
            description: 'Fashionable high-top sneakers with cushioned support.',
            image: '/images/fashion/footwear/high-top-sneakers.webp',
            stock: 55
          }
        ]
      },
      {
        id: 6,
        name: 'Watches',
        description: 'Wristwatches and timepieces for men and women.',
        products: [
          {
            id: 1,
            name: 'Minimalist Watch',
            price: 89.99,
            sku: 'FASH-WAT-001',
            description: 'Minimalist analog watch with leather strap.',
            image: '/images/fashion/watches/minimalist-watch.jpeg',
            stock: 30
          },
          {
            id: 2,
            name: 'Sports Chronograph',
            price: 129.99,
            sku: 'FASH-WAT-002',
            description: 'Durable chronograph watch with stopwatch functions.',
            image: '/images/fashion/watches/sports-chronograph.jpg',
            stock: 26
          },
          {
            id: 3,
            name: 'Gold Bracelet Watch',
            price: 149.5,
            sku: 'FASH-WAT-003',
            description: 'Elegant gold bracelet watch for formal looks.',
            image: '/images/fashion/watches/gold-bracelet-watch.jpg',
            stock: 18
          },
          {
            id: 4,
            name: 'Digital Smartwatch',
            price: 99.99,
            sku: 'FASH-WAT-004',
            description: 'Smartwatch with health tracking and notifications.',
            image: '/images/fashion/watches/digital-smartwatch.webp',
            stock: 72
          },
          {
            id: 5,
            name: 'Leather Strap Watch',
            price: 79.0,
            sku: 'FASH-WAT-005',
            description: 'Classic watch with genuine leather strap.',
            image: '/images/fashion/watches/leather-strap-watch.webp',
            stock: 48
          }
        ]
      },
      {
        id: 7,
        name: 'Bags',
        description: 'Totes, backpacks, handbags and travel bags.',
        products: [
          {
            id: 1,
            name: 'Leather Tote Bag',
            price: 79.99,
            sku: 'FASH-BAG-001',
            description: 'Spacious leather tote with roomy interior.',
            image: '/images/fashion/bags/leather-tote-bag.jpeg',
            stock: 33
          },
          {
            id: 2,
            name: 'Canvas Backpack',
            price: 49.99,
            sku: 'FASH-BAG-002',
            description: 'Durable canvas backpack with multiple pockets.',
            image: '/images/fashion/bags/canvas-backpack.jpg',
            stock: 62
          },
          {
            id: 3,
            name: 'Crossbody Bag',
            price: 39.5,
            sku: 'FASH-BAG-003',
            description: 'Compact crossbody bag for everyday essentials.',
            image: '/images/fashion/bags/crossbody-bag.avif',
            stock: 77
          },
          {
            id: 4,
            name: 'Travel Duffel',
            price: 69.0,
            sku: 'FASH-BAG-004',
            description: 'Large duffel bag designed for weekend travel.',
            image: '/images/fashion/bags/travel-duffel.jpg',
            stock: 25
          },
          {
            id: 5,
            name: 'Clutch Purse',
            price: 29.99,
            sku: 'FASH-BAG-005',
            description: 'Elegant clutch purse for evening outings.',
            image: '/images/fashion/bags/clutch-purse.webp',
            stock: 58
          }
        ]
      },
      {
        id: 8,
        name: 'Jewellery',
        description: 'Necklaces, rings, bracelets and fashion jewellery.',
        products: [
          {
            id: 1,
            name: 'Pearl Necklace',
            price: 59.99,
            sku: 'FASH-JWL-001',
            description: 'Classic pearl necklace with polished finish.',
            image: '/images/fashion/jewellery/pearl-necklace.webp',
            stock: 45
          },
          {
            id: 2,
            name: 'Gold Hoop Earrings',
            price: 39.99,
            sku: 'FASH-JWL-002',
            description: 'Stylish gold hoop earrings with secure clasp.',
            image: '/images/fashion/jewellery/gold-hoop-earrings.jpg',
            stock: 57
          },
          {
            id: 3,
            name: 'Charm Bracelet',
            price: 29.5,
            sku: 'FASH-JWL-003',
            description: 'Delicate charm bracelet with mixed pendants.',
            image: '/images/fashion/jewellery/charm-bracelet.webp',
            stock: 63
          },
          {
            id: 4,
            name: 'Statement Ring',
            price: 24.99,
            sku: 'FASH-JWL-004',
            description: 'Bold statement ring for evening wear.',
            image: '/images/fashion/jewellery/statement-ring.webp',
            stock: 42
          },
          {
            id: 5,
            name: 'Anklet Set',
            price: 22.0,
            sku: 'FASH-JWL-005',
            description: 'Set of two anklets with delicate chains.',
            image: '/images/fashion/jewellery/anklet-set.avif',
            stock: 80
          }
        ]
      },
      {
        id: 9,
        name: 'Sportswear',
        description: 'Activewear, gym clothing and sports accessories.',
        products: [
          {
            id: 1,
            name: 'Performance Leggings',
            price: 39.99,
            sku: 'FASH-SPT-001',
            description: 'High-waist leggings with moisture-wicking fabric.',
            image: '/images/fashion/sportswear/performance-leggings.png',
            stock: 90
          },
          {
            id: 2,
            name: 'Running Tank Top',
            price: 24.99,
            sku: 'FASH-SPT-002',
            description: 'Breathable tank top for workouts.',
            image: '/images/fashion/sportswear/running-tank-top.jpg',
            stock: 110
          },
          {
            id: 3,
            name: 'Training Shorts',
            price: 29.0,
            sku: 'FASH-SPT-003',
            description: 'Quick-dry training shorts with mesh panels.',
            image: '/images/fashion/sportswear/training-shorts.avif',
            stock: 78
          },
          {
            id: 4,
            name: 'Yoga Top',
            price: 27.99,
            sku: 'FASH-SPT-004',
            description: 'Soft yoga top with stretch and support.',
            image: '/images/fashion/sportswear/yoga-top.jpg',
            stock: 95
          },
          {
            id: 5,
            name: 'Sports Jacket',
            price: 59.99,
            sku: 'FASH-SPT-005',
            description: 'Lightweight jacket for warmups and outdoor runs.',
            image: '/images/fashion/sportswear/sports-jacket.jpg',
            stock: 49
          }
        ]
      },
      {
        id: 10,
        name: 'Kids Fashion',
        description: 'Cute and comfortable fashion for kids and toddlers.',
        products: [
          {
            id: 1,
            name: 'Kids Graphic Tee',
            price: 19.99,
            sku: 'FASH-KID-001',
            description: 'Soft cotton tee with fun graphic print.',
            image: '/images/fashion/kids-fashion/kids-graphic-tee.avif',
            stock: 95
          },
          {
            id: 2,
            name: 'Playtime Overalls',
            price: 34.99,
            sku: 'FASH-KID-002',
            description: 'Durable overalls with adjustable straps.',
            image: '/images/fashion/kids-fashion/playtime-overalls.jpeg',
            stock: 60
          },
          {
            id: 3,
            name: 'Girls Ruffle Dress',
            price: 29.99,
            sku: 'FASH-KID-003',
            description: 'Cute ruffle dress for special occasions.',
            image: '/images/fashion/kids-fashion/girls-ruffle-dress.webp',
            stock: 52
          },
          {
            id: 4,
            name: 'Boys Cargo Shorts',
            price: 24.99,
            sku: 'FASH-KID-004',
            description: 'Comfortable cargo shorts with pocket detail.',
            image: '/images/fashion/kids-fashion/boys-cargo-shorts.webp',
            stock: 70
          },
          {
            id: 5, 
            name: 'Kids Sneakers',
            price: 32.0,
            sku: 'FASH-KID-005',
            description: 'Colourful sneakers with easy fasten straps.',
            image: '/images/fashion/kids-fashion/kids-sneakers.webp',
            stock: 78
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Mobiles',
    description: 'Smartphones, tablets and wearable devices.',
    subcategories: [
      {
        id: 1,
        name: 'Smartphones',
        description: 'Latest smartphones with powerful cameras and long battery life.',
        products: [
          {
            id: 1,
            name: 'Edge Display Pro',
            price: 799.99,
            sku: 'MOB-SMP-001',
            description: 'Sleek smartphone with curved edge display and 5G connectivity.',
             image: '/images/fashion/kids-fashion/edge-phone.avif',
            stock: 58
          },
          {
            id: 2,
            name: 'galaxy s21 ultra',
            price: 899.0,
            sku: 'MOB-SMP-002',
            description: 'High-end camera phone built for low-light photography.',
            image: '/images/fashion/kids-fashion/galaxy-ultra.webp',
            stock: 42
          },
          {
            id: 3,
            name: 'realme 16 Pro 5G',
            price: 499.99,
            sku: 'MOB-SMP-003',
            description: 'Compact smartphone with fast performance and handy pocket size.',
            image: '/images/fashion/kids-fashion/realme-16.webp',
            stock: 73
          },
          {
            id: 4,
            name: 'vivo v50',
            price: 999.99,
            sku: 'MOB-SMP-004',
            description: 'Performance phone built for gaming with a high refresh rate display.',
            image: '/images/fashion/kids-fashion/vivo-v50.jpg',
            stock: 29
          },
          {
            id: 5,
            name: 'OPPO Find X9',
            price: 349.99,
            sku: 'MOB-SMP-005',
            description: 'Budget-friendly smartphone with reliable battery life.',
            image: '/images/fashion/kids-fashion/OPPO.png',
            stock: 105
          }
        ]
      },
      {
        id: 2,
        name: 'Tablets',
        description: 'Portable tablets for work, play, and media consumption.',
        products: [
          {
            id: 1,
            name: 'Samsung Tab S9 Ultra',
            price: 599.99,
            sku: 'MOB-TAB-001',
            description: 'Ultra-thin tablet with powerful chipset and crisp display.',
            image: '/images/fashion/kids-fashion/samsung.jpg',
            stock: 34
          },
          {
            id: 2,
            name: 'Apple ipad air',
            price: 649.0,
            sku: 'MOB-TAB-002',
            description: 'Tablet with included stylus for notes and sketches.',
            image: '/images/fashion/kids-fashion/ipad.jpg',
            stock: 27
          },
          {
            id: 3,
            name: 'Vivo Pad Android Tablet',
            price: 429.0,
            sku: 'MOB-TAB-003',
            description: 'Great tablet for video streaming and light gaming.',
            image: '/images/fashion/kids-fashion/vivo.avif',
            stock: 51
          },
          {
            id: 4,
            name: 'OPPO Pad SE',
            price: 229.99,
            sku: 'MOB-TAB-004',
            description: 'Durable tablet designed for kids with parental controls.',
            image: '/images/fashion/kids-fashion/OPPO.png',
            stock: 63
          },
          {
            id: 5,
            name: 'Ipad pro 12.9 inch',
            price: 749.99,
            sku: 'MOB-TAB-005',
            description: 'Tablet optimized for creative work and media editing.',
            image: '/images/fashion/kids-fashion/ipad.webp',
            stock: 21
          }
        ]
      },
      {
        id: 3,
        name: 'Wearables',
        description: 'Smartwatches, fitness bands and connected accessories.',
        products: [
          {
            id: 1,
            name: 'Fitness Band Lite',
            price: 79.99,
            sku: 'MOB-WEA-001',
            description: 'Lightweight fitness band with step tracking and sleep monitoring.',
            image: '/images/fashion/kids-fashion/fitness.webp',
            stock: 120
          },
          {
            id: 2,
            name: 'Smartwatch Active',
            price: 199.99,
            sku: 'MOB-WEA-002',
            description: 'Smartwatch with notifications, GPS, and heart-rate monitoring.',
            image: '/images/fashion/kids-fashion/Smartwatc-Active.jpg',
            stock: 66
          },
          {
            id: 3,
            name: 'Wireless Earbuds',
            price: 129.99,
            sku: 'MOB-WEA-003',
            description: 'Noise-isolating earbuds with long battery life.',
            image: '/images/fashion/kids-fashion/Wireless-Earbuds.webp',
            stock: 89
          },
          {
            id: 4,
            name: 'Smart Ring',
            price: 149.99,
            sku: 'MOB-WEA-004',
            description: 'Compact smart ring for sleep and activity tracking.',
            image: '/images/fashion/kids-fashion/Smart-Ring.png',
            stock: 44
          },
          {
            id: 5,
            name: 'Charging Dock',
            price: 39.99,
            sku: 'MOB-WEA-005',
            description: 'Multi-device charging dock compatible with most wearables.',
            image: '/images/fashion/kids-fashion/Charging-Dock.jpg',
            stock: 74
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Beauty',
    description: 'Skincare, cosmetics, and personal care products.',
    subcategories: ['Skincare', 'Makeup', 'Haircare']
  },
  {
    id: 4,
    name: 'Electronics',
    description: 'Laptops, cameras, audio and consumer electronics.',
    subcategories: ['Laptops', 'Cameras', 'Audio']
  },
  {
    id: 5,
    name: 'Home',
    description: 'Home decor, furniture and everyday living essentials.',
    subcategories: ['Decor', 'Furniture', 'Lighting']
  },
  {
    id: 6,
    name: 'Appliances',
    description: 'Kitchen, laundry and home appliances.',
    subcategories: ['Kitchen', 'Laundry', 'Climate']
  },
  {
    id: 7,
    name: 'Toys',
    description: 'Toys and games for kids of every age.',
    subcategories: ['Action Figures', 'Puzzles', 'Outdoor']
  },
  {
    id: 8,
    name: 'Food',
    description: 'Groceries, snacks and specialty food items.',
    subcategories: ['Fruits', 'Desserts', 'Beverages']
  },
  {
    id: 9,
    name: 'Auto',
    description: 'Automotive accessories, parts and tools.',
    subcategories: ['Exterior', 'Interior', 'Maintenance']
  },
  {
    id: 10,
    name: 'Sports',
    description: 'Sports gear, fitness equipment and athletic wear.',
    subcategories: ['Fitness', 'Team Sports', 'Outdoor']
  },
  {
    id: 11,
    name: 'Books',
    description: 'Books, comics and reading materials.',
    subcategories: ['Fiction', 'Nonfiction', 'Comics']
  },
  {
    id: 12,
    name: 'Furniture',
    description: 'Living room, bedroom and office furniture.',
    subcategories: ['Living Room', 'Bedroom', 'Office']
  }
];

const normalizeSlug = (text) =>
  text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const categories = categoriesMeta.map((category) => ({
  id: category.id,
  name: category.name,
  description: category.description,
  slug: normalizeSlug(category.name),
  subcategories: category.subcategories.map((subItem, index) => {
    const isObject = typeof subItem === 'object';
    const subName = isObject ? subItem.name : subItem;
    const subSlug = normalizeSlug(subName);

    const baseSubcategory = {
      id: isObject ? subItem.id : index + 1,
      name: subName,
      slug: subSlug,
      description: isObject ? subItem.description : '',
      photos: Array.from({ length: 10 }, (_, photoIndex) => ({
        id: photoIndex + 1,
        title: `${category.name} ${subName} Photo ${photoIndex + 1}`,
        url: `https://picsum.photos/seed/${normalizeSlug(category.name)}-${subSlug}-${photoIndex + 1}/640/480`
      }))
    };

    return isObject
      ? {
          ...baseSubcategory,
          products: subItem.products
        }
      : baseSubcategory;
  })
}));

module.exports = {
  categories
};
