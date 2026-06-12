import "./Fashion.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  old: number;
  rating: number;
  img: string;
};

type SortType = "relevance" | "low" | "high" | "rating";

const Fashion = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: "shirt1",
      name: "Slim Fit Casual Shirt",
      category: "Men's Wear",
      price: 999,
      old: 1499,
      rating: 4.2,
      img: "http://localhost:5000/images/fashion/mens-wear/slim-fit-casual-shirt.webp",
    },
    {
      id: "jeans1",
      name: "Denim Jeans",
      category: "Men's Wear",
      price: 1299,
      old: 1999,
      rating: 4.4,
      img: "http://localhost:5000/images/fashion/mens-wear/denim-jeans.webp",
    },
    {
      id: "jacket1",
      name: "Bomber Jacket",
      category: "Men's Wear",
      price: 1999,
      old: 2999,
      rating: 4.5,
      img: "http://localhost:5000/images/fashion/mens-wear/bomber-jacket.avif",
    },
    {
      id: "pants1",
      name: "Athletic Joggers",
      category: "Men's Wear",
      price: 899,
      old: 1399,
      rating: 4.1,
      img: "http://localhost:5000/images/fashion/mens-wear/athletic-joggers.avif",
    },
    {
      id: "hoodie1",
      name: "Casual Sneakers",
      category: "Men's Wear",
      price: 1499,
      old: 2199,
      rating: 4.3,
      img: "http://localhost:5000/images/fashion/mens-wear/casual-sneakers.webp",
    },

    {
      id: "tshirt1",
      name: "Floral Maxi Dress",
      category: "Women's Wear",
      price: 1399,
      old: 2199,
      rating: 4.5,
      img: "http://localhost:5000/images/fashion/womens-wear/floral-maxi-dress.webp",
    },
    {
      id: "blazer1",
      name: "Chiffon Blouse",
      category: "Women's Wear",
      price: 899,
      old: 1399,
      rating: 4.2,
      img: "http://localhost:5000/images/fashion/womens-wear/chiffon-blouse.webp",
    },
    {
      id: "kurta1",
      name: "A-line Skirt",
      category: "Women's Wear",
      price: 999,
      old: 1599,
      rating: 4.1,
      img: "http://localhost:5000/images/fashion/womens-wear/a-line-skirt.avif",
    },
    {
      id: "women4",
      name: "Denim Jacket",
      category: "Women's Wear",
      price: 1599,
      old: 2499,
      rating: 4.4,
      img: "http://localhost:5000/images/fashion/womens-wear/denim-jacket.webp",
    },
    {
      id: "women5",
      name: "Strappy Sandals",
      category: "Women's Wear",
      price: 799,
      old: 1299,
      rating: 4.0,
      img: "http://localhost:5000/images/fashion/womens-wear/strappy-sandals.jpg",
    },

    {
      id: "ethnic1",
      name: "Embroidered Kurta Set",
      category: "Ethnic Wear",
      price: 1699,
      old: 2499,
      rating: 4.3,
      img: "http://localhost:5000/images/fashion/ethnic-wear/embroidered-kurta-set.jpg",
    },
    {
      id: "ethnic2",
      name: "Silk Saree",
      category: "Ethnic Wear",
      price: 2999,
      old: 4499,
      rating: 4.6,
      img: "http://localhost:5000/images/fashion/ethnic-wear/silk-saree.jpg",
    },
    {
      id: "ethnic3",
      name: "Printed Lehenga",
      category: "Ethnic Wear",
      price: 2499,
      old: 3999,
      rating: 4.4,
      img: "http://localhost:5000/images/fashion/ethnic-wear/printed-lehenga.webp",
    },
    {
      id: "ethnic4",
      name: "Designer Dupatta",
      category: "Ethnic Wear",
      price: 599,
      old: 999,
      rating: 4.1,
      img: "http://localhost:5000/images/fashion/ethnic-wear/designer-dupatta.jpg",
    },
    {
      id: "ethnic5",
      name: "Kurta Pajama Set",
      category: "Ethnic Wear",
      price: 1299,
      old: 1999,
      rating: 4.2,
      img: "http://localhost:5000/images/fashion/ethnic-wear/kurta-pajama-set.webp",
    },

    {
      id: "western1",
      name: "Graphic Tee",
      category: "Western Wear",
      price: 499,
      old: 899,
      rating: 4.1,
      img: "http://localhost:5000/images/fashion/western-wear/graphic-tee.jpeg",
    },
    {
      id: "western2",
      name: "Tailored Blazer",
      category: "Western Wear",
      price: 1999,
      old: 2999,
      rating: 4.5,
      img: "http://localhost:5000/images/fashion/western-wear/tailored-blazer.webp",
    },
    {
      id: "western3",
      name: "Skinny Denim Jeans",
      category: "Western Wear",
      price: 1199,
      old: 1899,
      rating: 4.3,
      img: "http://localhost:5000/images/fashion/western-wear/skinny-denim-jeans.webp",
    },
    {
      id: "western4",
      name: "Midi Skirt",
      category: "Western Wear",
      price: 899,
      old: 1499,
      rating: 4.2,
      img: "http://localhost:5000/images/fashion/western-wear/midi-skirt.avif",
    },
    {
      id: "western5",
      name: "Leather Belt",
      category: "Western Wear",
      price: 599,
      old: 999,
      rating: 4.0,
      img: "http://localhost:5000/images/fashion/western-wear/leather-belt.jpg",
    },

    {
      id: "footwear1",
      name: "Running Shoes",
      category: "Footwear",
      price: 1499,
      old: 2299,
      rating: 4.4,
      img: "http://localhost:5000/images/fashion/footwear/running-shoes.avif",
    },
    {
      id: "footwear2",
      name: "Leather Loafers",
      category: "Footwear",
      price: 1599,
      old: 2499,
      rating: 4.3,
      img: "http://localhost:5000/images/fashion/footwear/leather-loafers.webp",
    },
    {
      id: "footwear3",
      name: "Ankle Boots",
      category: "Footwear",
      price: 1899,
      old: 2999,
      rating: 4.5,
      img: "http://localhost:5000/images/fashion/footwear/ankle-boots.jpg",
    },
    {
      id: "footwear4",
      name: "Slip-on Sandals",
      category: "Footwear",
      price: 699,
      old: 1099,
      rating: 4.0,
      img: "http://localhost:5000/images/fashion/footwear/slip-on-sandals.avif",
    },
    {
      id: "footwear5",
      name: "High-top Sneakers",
      category: "Footwear",
      price: 1699,
      old: 2599,
      rating: 4.2,
      img: "http://localhost:5000/images/fashion/footwear/high-top-sneakers.webp",
    },

    {
      id: "watch1",
      name: "Minimalist Watch",
      category: "Watches",
      price: 1999,
      old: 2999,
      rating: 4.4,
      img: "http://localhost:5000/images/fashion/watches/minimalist-watch.jpeg",
    },
    {
      id: "watch2",
      name: "Sports Chronograph",
      category: "Watches",
      price: 2999,
      old: 4499,
      rating: 4.6,
      img: "http://localhost:5000/images/fashion/watches/sports-chronograph.jpg",
    },
    {
      id: "watch3",
      name: "Gold Bracelet Watch",
      category: "Watches",
      price: 3499,
      old: 4999,
      rating: 4.5,
      img: "http://localhost:5000/images/fashion/watches/gold-bracelet-watch.jpg",
    },
    {
      id: "watch4",
      name: "Digital Smartwatch",
      category: "Watches",
      price: 2499,
      old: 3999,
      rating: 4.3,
      img: "http://localhost:5000/images/fashion/watches/digital-smartwatch.webp",
    },
    {
      id: "watch5",
      name: "Leather Strap Watch",
      category: "Watches",
      price: 1799,
      old: 2799,
      rating: 4.1,
      img: "http://localhost:5000/images/fashion/watches/leather-strap-watch.webp",
    },

    {
      id: "bag1",
      name: "Leather Tote Bag",
      category: "Bags",
      price: 1999,
      old: 2999,
      rating: 4.3,
      img: "http://localhost:5000/images/fashion/bags/leather-tote-bag.jpeg",
    },
    {
      id: "bag2",
      name: "Canvas Backpack",
      category: "Bags",
      price: 1299,
      old: 1999,
      rating: 4.2,
      img: "http://localhost:5000/images/fashion/bags/canvas-backpack.jpg",
    },
    {
      id: "bag3",
      name: "Crossbody Bag",
      category: "Bags",
      price: 999,
      old: 1599,
      rating: 4.1,
      img: "http://localhost:5000/images/fashion/bags/crossbody-bag.avif",
    },
    {
      id: "bag4",
      name: "Travel Duffel",
      category: "Bags",
      price: 1799,
      old: 2799,
      rating: 4.5,
      img: "http://localhost:5000/images/fashion/bags/travel-duffel.jpg",
    },
    {
      id: "bag5",
      name: "Clutch Purse",
      category: "Bags",
      price: 799,
      old: 1299,
      rating: 4.0,
      img: "http://localhost:5000/images/fashion/bags/clutch-purse.webp",
    },

    {
      id: "jewel1",
      name: "Pearl Necklace",
      category: "Jewellery",
      price: 1499,
      old: 2299,
      rating: 4.4,
      img: "http://localhost:5000/images/fashion/jewellery/pearl-necklace.webp",
    },
    {
      id: "jewel2",
      name: "Gold Hoop Earrings",
      category: "Jewellery",
      price: 999,
      old: 1599,
      rating: 4.3,
      img: "http://localhost:5000/images/fashion/jewellery/gold-hoop-earrings.jpg",
    },
    {
      id: "jewel3",
      name: "Charm Bracelet",
      category: "Jewellery",
      price: 699,
      old: 1099,
      rating: 4.1,
      img: "http://localhost:5000/images/fashion/jewellery/charm-bracelet.webp",
    },
    {
      id: "jewel4",
      name: "Statement Ring",
      category: "Jewellery",
      price: 599,
      old: 999,
      rating: 4.0,
      img: "http://localhost:5000/images/fashion/jewellery/statement-ring.webp",
    },
    {
      id: "jewel5",
      name: "Anklet Set",
      category: "Jewellery",
      price: 499,
      old: 799,
      rating: 4.2,
      img: "http://localhost:5000/images/fashion/jewellery/anklet-set.avif",
    },
  ];

  const categories = [
    "Men's Wear",
    "Women's Wear",
    "Ethnic Wear",
    "Western Wear",
    "Footwear",
    "Watches",
    "Bags",
    "Jewellery",
  ];

  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortType>("relevance");

  const toggle = (cat: string) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const filtered = products.filter((p) => {
    const matchCat = selected.length === 0 || selected.includes(p.category);
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());

    return matchCat && matchSearch;
  });

  const sorted = [...filtered];

  if (sort === "low") sorted.sort((a, b) => a.price - b.price);
  if (sort === "high") sorted.sort((a, b) => b.price - a.price);
  if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);

  return (
    <div className="fashion-container">
      <aside className="sidebar">
        <h3>FILTERS</h3>
        <p className="count">{products.length}+ Products</p>

        <div className="search-box">
          <span className="icon">🔍</span>
          <input
            placeholder="Search category or product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h4>Subcategories</h4>

        {categories.map((cat) => (
          <label key={cat} className="category-item">
            <input
              type="checkbox"
              checked={selected.includes(cat)}
              onChange={() => toggle(cat)}
            />
            {cat}
          </label>
        ))}
      </aside>

      <main className="main">
        <div className="sort-bar">
          <span>Sort by</span>
          <button onClick={() => setSort("relevance")}>Relevance</button>
          <button onClick={() => setSort("low")}>Price Low</button>
          <button onClick={() => setSort("high")}>Price High</button>
          <button onClick={() => setSort("rating")}>Rating</button>
        </div>

        <h2>Fashion</h2>

        <div className="grid">
          {sorted.slice(0, 8).map((p) => (
            <div
              className="card"
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)}
            >
              <img src={p.img} alt={p.name} />

              <p className="name">{p.name}</p>

              <div className="price">
                ₹{p.price}
                <span className="old">₹{p.old}</span>
              </div>

              <p className="offer">
                {Math.round(((p.old - p.price) / p.old) * 100)}% off
              </p>

              <span className="delivery">Free Delivery</span>

              <div className="rating">⭐ {p.rating}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Fashion;
