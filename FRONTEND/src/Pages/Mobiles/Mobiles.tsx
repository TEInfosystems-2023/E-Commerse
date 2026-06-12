import "./Mobiles.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

const Mobiles = () => {
  const navigate = useNavigate();
  const { subcategory } = useParams();

  const products: Product[] = [
    {
      id: "smartphone1",
      name: "Edge Display Pro",
      category: "Smartphones",
      price: 65999,
      old: 79999,
      rating: 4.6,
      img: "http://localhost:5000/images/mobile/smartphone/edge-phone.jpg",
    },
    {
      id: "smartphone2",
      name: "Galaxy S21 Ultra",
      category: "Smartphones",
      price: 74999,
      old: 89999,
      rating: 4.7,
      img: "http://localhost:5000/images/mobile/smartphone/galaxy-ultra.webp",
    },
    {
      id: "smartphone3",
      name: "Realme 16 Pro 5G",
      category: "Smartphones",
      price: 28999,
      old: 34999,
      rating: 4.4,
      img: "http://localhost:5000/images/mobile/smartphone/realme-16.webp",
    },
    {
      id: "smartphone4",
      name: "Vivo V50",
      category: "Smartphones",
      price: 39999,
      old: 49999,
      rating: 4.3,
      img: "http://localhost:5000/images/mobile/smartphone/vivo-v50.jpg",
    },
    {
      id: "smartphone5",
      name: "OPPO Find X9",
      category: "Smartphones",
      price: 31999,
      old: 39999,
      rating: 4.2,
      img: "http://localhost:5000/images/mobile/smartphone/OPPO.png",
    },

    {
      id: "5g1",
      name: "Realme 16 Pro 5G",
      category: "5G Phones",
      price: 28999,
      old: 34999,
      rating: 4.4,
      img: "http://localhost:5000/images/mobile/smartphone/realme-16.webp",
    },
    {
      id: "5g2",
      name: "Edge Display 5G",
      category: "5G Phones",
      price: 55999,
      old: 69999,
      rating: 4.5,
      img: "http://localhost:5000/images/mobile/smartphone/edge-phone.jpg",
    },
    {
      id: "5g3",
      name: "Vivo V50 5G",
      category: "5G Phones",
      price: 39999,
      old: 49999,
      rating: 4.3,
      img: "http://localhost:5000/images/mobile/smartphone/vivo-v50.jpg",
    },
    {
      id: "5g4",
      name: "Galaxy Ultra 5G",
      category: "5G Phones",
      price: 74999,
      old: 89999,
      rating: 4.7,
      img: "http://localhost:5000/images/mobile/smartphone/galaxy-ultra.webp",
    },
    {
      id: "5g5",
      name: "OPPO Find X9 5G",
      category: "5G Phones",
      price: 31999,
      old: 39999,
      rating: 4.2,
      img: "http://localhost:5000/images/mobile/smartphone/OPPO.png",
    },

    {
      id: "tablets1",
      name: "Fast Charger 18W",
      category: "Tablets",
      price: 799,
      old: 1299,
      rating: 4.2,
      img: "http://localhost:5000/images/mobile/tablets/ipad.jpg",
    },
    {
      id: "tablets2",
      name: "Wireless Charger 15W",
      category: "Tablets",
      price: 1199,
      old: 1999,
      rating: 4.3,
      img: "http://localhost:5000/images/mobile/tablets/ipad.webp",
    },
    {
      id: "tablets3",
      name: "Car Charger 20W",
      category: "Tablets",
      price: 999,
      old: 1499,
      rating: 4.1,
      img: "http://localhost:5000/images/mobile/tablets/OPPO.png",
    },
    {
      id: "tablets4",
      name: "Multi-Port Charger",
      category: "Tablets",
      price: 1499,
      old: 2299,
      rating: 4.4,
      img: "http://localhost:5000/images/mobile/tablets/samsung.jpg",
    },
    {
      id: "tablets5",
      name: "Solar Charger",
      category: "Tablets",
      price: 1999,
      old: 2999,
      rating: 4.0,
      img: "http://localhost:5000/images/mobile/tablets/vivo.jpg",
    },

    {
      id: "wearables1",
      name: "Powerbank 10000mAh",
      category: "Power Banks",
      price: 1299,
      old: 1999,
      rating: 4.3,
      img: "http://localhost:5000/images/mobile/wearables/Charging-Dock.jpg",
    },
    {
      id: "wearables2",
      name: "Powerbank 20000mAh",
      category: "Power Banks",
      price: 1999,
      old: 2999,
      rating: 4.5,
      img: "http://localhost:5000/images/mobile/wearables/fitness.webp",
    },
    {
      id: "wearables3",
      name: "Wireless Powerbank",
      category: "Power Banks",
      price: 2499,
      old: 3499,
      rating: 4.4,
      img: "http://localhost:5000/images/mobile/wearables/Smart-Ring.png",
    },
    {
      id: "wearables4",
      name: "Slim Powerbank",
      category: "Power Banks",
      price: 999,
      old: 1599,
      rating: 4.2,
      img: "http://localhost:5000/images/mobile/wearables/Smartwatc-Active.jpg",
    },
    {
      id: "wearables5",
      name: "Solar Powerbank",
      category: "Power Banks",
      price: 2799,
      old: 3999,
      rating: 4.1,
      img: "http://localhost:5000/images/mobile/wearables/Wireless-Earbuds.webp",
    },

    {
      id: "case1",
      name: "Silicone Case",
      category: "Cases & Covers",
      price: 299,
      old: 499,
      rating: 4.1,
      img: "http://localhost:5000/images/mobile/cases/silicone-case.webp",
    },
    {
      id: "case2",
      name: "Leather Wallet Case",
      category: "Cases & Covers",
      price: 799,
      old: 1299,
      rating: 4.3,
      img: "http://localhost:5000/images/mobile/cases/leather-wallet-case.webp",
    },
    {
      id: "case3",
      name: "Clear Protective Case",
      category: "Cases & Covers",
      price: 399,
      old: 699,
      rating: 4.2,
      img: "http://localhost:5000/images/mobile/cases/clear-protective-case.webp",
    },
    {
      id: "case4",
      name: "Armored Case",
      category: "Cases & Covers",
      price: 599,
      old: 999,
      rating: 4.4,
      img: "http://localhost:5000/images/mobile/cases/armored-case.webp",
    },
    {
      id: "case5",
      name: "Designer Printed Case",
      category: "Cases & Covers",
      price: 499,
      old: 899,
      rating: 4.0,
      img: "http://localhost:5000/images/mobile/cases/designer-printed-case.webp",
    },

    {
      id: "earbud1",
      name: "Wireless Earbuds",
      category: "Wireless Earbuds",
      price: 2499,
      old: 3999,
      rating: 4.4,
      img: "http://localhost:5000/images/mobile/smartphone/Wireless-Earbuds.webp",
    },
    {
      id: "earbud2",
      name: "Bluetooth Earbuds Pro",
      category: "Wireless Earbuds",
      price: 2999,
      old: 4999,
      rating: 4.5,
      img: "http://localhost:5000/images/mobile/smartphone/samsung earbuds.jpg",
    },
    {
      id: "earbud3",
      name: "Noise Cancelling Earbuds",
      category: "Wireless Earbuds",
      price: 3499,
      old: 5499,
      rating: 4.6,
      img: "http://localhost:5000/images/mobile/smartphone/boat.jpg",
    },
    {
      id: "earbud4",
      name: "Gaming Earbuds",
      category: "Wireless Earbuds",
      price: 1999,
      old: 2999,
      rating: 4.2,
      img: "http://localhost:5000/images/mobile/smartphone/apple.jpg",
    },
    {
      id: "earbud5",
      name: "Mini Wireless Earbuds",
      category: "Wireless Earbuds",
      price: 1499,
      old: 2499,
      rating: 4.1,
      img: "http://localhost:5000/images/mobile/smartphone/realme.jpg",
    },

    {
      id: "watch1",
      name: "Smartwatch Active",
      category: "Smartwatches",
      price: 3999,
      old: 5999,
      rating: 4.4,
      img: "http://localhost:5000/images/mobile/smartphone/samsung.jpg.jpg",
    },
    {
      id: "watch2",
      name: "Fitness Band Lite",
      category: "Smartwatches",
      price: 1499,
      old: 2499,
      rating: 4.2,
      img: "http://localhost:5000/images/mobile/smartphone/fitness.webp",
    },
    {
      id: "watch3",
      name: "GPS Smartwatch",
      category: "Smartwatches",
      price: 4999,
      old: 7999,
      rating: 4.5,
      img: "http://localhost:5000/images/mobile/smartphone/Smartwatch-Active.jpg",
    },
    {
      id: "watch4",
      name: "Health Tracking Watch",
      category: "Smartwatches",
      price: 2999,
      old: 4499,
      rating: 4.3,
      img: "http://localhost:5000/images/mobile/smartphone/raga.jpg",
    },
    {
      id: "watch5",
      name: "Premium Smartwatch",
      category: "Smartwatches",
      price: 6999,
      old: 9999,
      rating: 4.6,
      img: "http://localhost:5000/images/mobile/smartphone/Smartwatch-Active.jpg",
    },
  ];

  const categories = [
    "Smartphones",
    "5G Phones",
    "Chargers",
    "Power Banks",
    "Cases & Covers",
    "Wireless Earbuds",
    "Smartwatches",
  ];

  const [selected, setSelected] = useState<string[]>(
    subcategory ? [decodeURIComponent(subcategory)] : []
  );
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortType>("relevance");

  const toggle = (cat: string) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
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
    <div className="mobiles-container">
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

        <h2>
          {subcategory ? decodeURIComponent(subcategory) : "Mobiles"}
        </h2>

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

export default Mobiles;