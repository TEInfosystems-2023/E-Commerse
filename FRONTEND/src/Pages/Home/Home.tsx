import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationModal from "../../components/Location/LocationModal";

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

const Home = () => {
  const navigate = useNavigate();

  // 🔥 LOCATION STATE
  const [showLocationModal, setShowLocationModal] = useState(false);
  const city = localStorage.getItem("userCity") || "Select Location";

  const products: Product[] = [
    {
      id: "bedsheet1",
      name: "Cotton Bedsheet Set",
      category: "Bedsheets",
      price: 999,
      old: 1499,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "curtain1",
      name: "Premium Window Curtains",
      category: "Curtains",
      price: 1299,
      old: 1899,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "light1",
      name: "Decorative Wall Light",
      category: "Lighting",
      price: 799,
      old: 1199,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fan1",
      name: "Ceiling Fan",
      category: "Fans",
      price: 2499,
      old: 3299,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sofa1",
      name: "Luxury Sofa Set",
      category: "Furniture",
      price: 18999,
      old: 24999,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "dining1",
      name: "Wooden Dining Table",
      category: "Furniture",
      price: 14999,
      old: 19999,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cushion1",
      name: "Decor Cushion Set",
      category: "Decor",
      price: 699,
      old: 999,
      rating: 4.0,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "walldecor1",
      name: "Modern Wall Decor",
      category: "Decor",
      price: 899,
      old: 1399,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "Bedsheets",
    "Curtains",
    "Lighting",
    "Fans",
    "Furniture",
    "Decor",
  ];

  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortType>("relevance");

  const toggle = (cat: string) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = products.filter((p) => {
    const matchCat = selected.length === 0 || selected.includes(p.category);
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const sorted = [...filtered];

  if (sort === "low") sorted.sort((a, b) => a.price - b.price);
  if (sort === "high") sorted.sort((a, b) => b.price - a.price);
  if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);

  return (
    <div className="home-container">

      {/* 🔥 LOCATION BUTTON */}
      <div className="home-top">
        <button
          className="location-btn"
          onClick={() => setShowLocationModal(true)}
        >
          📍 {city}
        </button>
      </div>

      <aside className="sidebar">
        <h3>FILTERS</h3>
        <p className="count">{products.length}+ Products</p>

        <div className="search-box">
          <span className="icon">🔍</span>
          <input
            placeholder="Search category"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h4>Category</h4>

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

        <h2>Home</h2>

        <div className="grid">
          {sorted.map((p) => (
            <div
              className="card"
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)}
              style={{ cursor: "pointer" }}
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

      {/* 🔥 LOCATION MODAL */}
      {showLocationModal && (
        <LocationModal onClose={() => setShowLocationModal(false)} />
      )}
    </div>
  );
};

export default Home;